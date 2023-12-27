import {
  PDFDocument, PDFTextField, PDFCheckBox, PDFRadioGroup,
} from 'pdf-lib';

import html2pdf from 'html2pdf.js';
import { render } from 'nunjucks';

import { numericalAge } from './util';
import { Person } from './person';
import { Process, Document } from './process';
import { Formfill } from './types';

/**
 * Fill a PDF `doc`ument with the given `data` based on the formfill data in `fills`.
 * @param {PDFDocument} doc
 * @param {Formfill[]} fills
 * @param {Person} applicant
 * @return {PDFDocument} Filled PDF document
 */
function fillForm(doc: PDFDocument, fills: Formfill[], applicant: Person): PDFDocument {
  const form = doc.getForm();
  const pages = doc.getPages();

  fills.forEach((fill) => {
    if ('field' in fill) {
      const field = form.getField(fill.field);
      if ('text' in fill && field instanceof PDFTextField) {
        const text = fill.text(applicant);
        field.setText(text);
      } else if ('check' in fill && field instanceof PDFCheckBox) {
        const checked = fill.check(applicant);
        if (checked) {
          field.check();
        }
      } else if ('select' in fill
                 && 'check' in fill
                 && field instanceof PDFRadioGroup) {
        const checked = fill.check(applicant);
        if (checked && fill.select !== undefined) {
          field.select(fill.select);
        }
      }
    } else if (fill.loc !== undefined) {
      const pageIndex = fill.loc.page || 0;

      const page = pages[pageIndex];

      const fontSize = fill.loc.fontSize || 12;

      // Adjust the pixel location for DPI.
      const { height } = page.getSize();
      const dpi = height / 11.0;

      // NOTE this needs to be mentioned in the documentation.
      const referenceDpi = 100;
      const scalingFactor = dpi / referenceDpi;

      const x = fill.loc.x * scalingFactor;

      // PDFlib uses a "Cartesian" coordinate system with 0 at the bottom left
      // rather than the usual top left.
      const y = height - (fill.loc.y * scalingFactor) - fontSize;

      if ('text' in fill) {
        const text = fill.text(applicant);
        if (text !== undefined) {
          page.drawText(text, { x, y, size: fontSize });
        }
      } else if ('check' in fill) {
        const checked = fill.check(applicant);
        if (checked) {
          page.drawText('X', { x, y, size: fontSize });
        }
      }
    }
  });

  // Flatten the form fields into the document.
  form.flatten();

  return doc;
}

/**
 * Do we still need this?
 */
async function fetchAndFill(formFilename: string, fills: Formfill[], applicant: Person) {
  return fetch(formFilename)
    .then(async (response) => response.arrayBuffer())
    .then(PDFDocument.load)
    .then((doc) => fillForm(doc, fills, applicant));
}

/**
 * Generate the guide as a PDF ArrayBuffer from the given `data`.
 * @param {Person} data
 * @return {Promise<Uint8Array>} Customized PDF guide
 */
async function makeGuide(data: Person): Promise<Uint8Array> {
  // Do any additional variable assignment here.
  const counties = getCounties(data.residentJurisdiction);
  const allData = Object.assign(data, counties[data.residentCounty]);

  const renderedHtml = render('./guide.html.njk', allData);

  const pdf = await html2pdf()
    .set({
      pagebreak: {
        mode: ['avoid-all'],
      },
      margin: 10,
    }).from(renderedHtml).outputPdf('arraybuffer');

  return pdf;
}

/**
 * Compile all necessary documents as a single PDF ArrayBuffer from the given `data`.
 *
 * @param {Process} processes
 * @param {Person} applicant
 * @return {Promise<Uint8Array>} Compiled documents
 */
export default async function fetchAll(processes: Process[], applicant: Person): Promise<Uint8Array> {
  const finalApplicant = { ...applicant };

  // Do any additional Applicant assignment here.
  if (finalApplicant.birthdate && !finalApplicant.age) {
    finalApplicant.age = numericalAge(finalApplicant.birthdate);
  }

  const docs: Document[] = [];

  processes.forEach((proc) => {
    proc.documents.forEach((doc) => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  const allDocuments = await Promise.all(docs
    .filter((doc) => {
      if (doc.include !== undefined) {
        return doc.include(finalApplicant);
      }

      return false;
    })
    .map(async (doc) => {
      if (doc.map !== undefined) {
        return fetchAndFill(`/forms/${doc.filename}`, doc.map, finalApplicant);
      }

      return fetch(`/forms/${doc.filename}`)
        .then((res) => res.arrayBuffer())
        .then(PDFDocument.load);
    }));

  if (finalApplicant.age && finalApplicant.residentCounty) {
    const guide = await PDFDocument.load(await makeGuide(finalApplicant));

    // Append to front
    allDocuments.unshift(guide);
  }

  const result = await PDFDocument.create();
  const pages = await Promise.all(
    allDocuments.map((doc) => {
      const numPages = doc.getPageCount();
      return result.copyPages(doc, [...Array(numPages).keys()]);
    }),
  );

  pages.flat()
    .forEach((page) => result.addPage(page));

  return result.save();
}

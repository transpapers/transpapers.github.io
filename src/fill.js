import {PDFDocument, PDFTextField, PDFCheckBox, PDFRadioGroup,} from 'pdf-lib';

import { render } from 'nunjucks';
import html2pdf from 'html2pdf.js';

/**
 * Fill a PDF `doc`ument with the given `data` based on the formfill data in `fills`.
 * @param {PDFDocument} doc
 * @param {Formfill[]} fills
 * @param {Person} data
 * @return {PDFDocument} Filled PDF document
 */
function fillForm(doc, fills, data) {
  const form = doc.getForm();
  const pages = doc.getPages();

  for (const fill of fills) {
    if (fill.field !== undefined) {
      const field = form.getField(fill.field);
      if (fill.text !== undefined && field instanceof PDFTextField) {
        const text = fill.text(data);
        field.setText(text);
      } else if (fill.check !== undefined && field instanceof PDFCheckBox) {
        const checked = fill.check(data);
        if (checked) {
          field.check();
        }
      } else if (fill.select !== undefined && fill.check !== undefined && field instanceof PDFRadioGroup) {
        const checked = fill.check(data);
        if (checked) {
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

      // PDFlib uses a "Cartesian" coordinate system with 0 at the bottom left rather than the usual top left.
      const y = height - (fill.loc.y * scalingFactor) - fontSize;

      if (fill.text !== undefined) {
        const text = fill.text(data);
        page.drawText(text, { x, y, size: fontSize });
      } else if (fill.check !== undefined) {
        const checked = fill.check(data);
        if (checked) {
          page.drawText('X', { x, y, size: fontSize });
        }
      }
    }
  }

  // Flatten the form fields into the document.
  form.flatten();

  return doc;
}

/**
 * Do we still need this?
 */
async function fetchAndFill(formFilename, fills, data) {
  return fetch(formFilename)
    .then(async (response) => response.arrayBuffer())
    .then(PDFDocument.load)
    .then((doc) => fillForm(doc, fills, data));
}

/**
 * Generate the guide as a PDF ArrayBuffer from the given `data`.
 * @param {Person} data
 * @return {Promise<Uint8Array>} Customized PDF guide
 */
async function makeGuide(data) {
  // Do any additional variable assignment here.
  const allData = Object.assign(data, countyInfo[data.county]);

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
 * @param {Process} process
 * @param {Person} data
 * @return {Promise<Uint8Array>} Compiled documents
 */
export async function fetchAll(processes, data) {
  const docs = [];
  processes.forEach(proc => {
    proc.documents.forEach(doc => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  console.log('processes', processes);
  console.log('docs', docs);

  const allDocuments = await Promise.all(docs
    .filter((doc) => {
      if (doc.hasOwnProperty('include')) {
        return doc.include(data);
      }

      return false;
    })
    .map(async (doc) => {
      if (doc.hasOwnProperty('map')) {
        return fetchAndFill(`/forms/${doc.filename}`, doc.map, data);
      }

      return fetch(`/forms/${doc.filename}`)
        .then((res) => res.arrayBuffer())
        .then(PDFDocument.load);
    }));

  if (data.age && data.county) {
    const guide = await PDFDocument.load(await makeGuide(data));

    // Append to front
    allDocuments.unshift(guide);
  }

  const result = await PDFDocument.create();
  for (const doc of allDocuments) {
    const numPages = doc.getPageCount();
    const pages = await result.copyPages(doc, [...Array(numPages).keys()]);
    for (const page of pages) {
      result.addPage(page);
    }
  }

  return result.save();
}

/**
 * Label the fillable form fields of a given `doc`ument.
 * For dev purposes.
 *
 * @param {PDFDocument} doc
 * @return {Promise<Uint8Array>} A labeled document.
 */
export async function labelFields(doc) {
  const form = doc.getForm();
  const fields = form.getFields();

  for (const field of fields) {
    const type = field.constructor.name;
    const name = field.getName();

    console.log(`${type}: ${name}`);
    if (field instanceof PDFRadioGroup) {
      for (const option of field.getOptions()) {
        console.log(`${type}: ${option}`);
      }
    }

    if (field instanceof PDFTextField) {
      field.setMaxLength(undefined);
      field.setText(name);
    }
  }

  return doc.save();
}

/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
 *
 * This file is part of Transpapers.
 *
 * Transpapers is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Transpapers is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Transpapers. If not, see <https://www.gnu.org/licenses/>.
 */

import {
  PDFDocument,
  PDFTextField,
  PDFCheckBox,
  PDFRadioGroup,
} from "@cantoo/pdf-lib";

import { render } from "nunjucks";

import { numericalAge } from "./util";

import { getJurisdiction } from "../jurisdiction/all";

import { Person } from "../types/person";
import { Process, Document } from "../types/process";
import { Formfill } from "../types/formfill";

/**
 * Fill a PDF `doc`ument with the given `data` based on the formfill data in `fills`.
 * @param {PDFDocument} doc
 * @param {Formfill[]} fills
 * @param {Person} applicant
 * @return {PDFDocument} Filled PDF document
 */
function fillForm(
  doc: PDFDocument,
  fills: Formfill[],
  applicant: Person,
): PDFDocument {
  const form = doc.getForm();
  const pages = doc.getPages();

  fills.forEach((fill) => {
    if ("field" in fill) {
      const field = form.getField(fill.field);
      if ("text" in fill && field instanceof PDFTextField) {
        const text = fill.text(applicant);

        // Disable maximum length.
        field.setMaxLength(undefined);

        field.setText(text);
      } else if ("check" in fill && field instanceof PDFCheckBox) {
        const checked = fill.check(applicant);
        if (checked) {
          field.check();
        }
      } else if (
        "select" in fill &&
        "check" in fill &&
        field instanceof PDFRadioGroup
      ) {
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
      const y = height - fill.loc.y * scalingFactor - fontSize;

      if ("text" in fill) {
        const text = fill.text(applicant);
        if (text !== undefined) {
          page.drawText(text, { x, y, size: fontSize });
        }
      } else if ("check" in fill) {
        const checked = fill.check(applicant);
        if (checked) {
          page.drawText("X", { x, y, size: fontSize });
        }
      }
    }
  });

  // Flatten the form fields into the document.
  form.flatten();

  return doc;
}

/**
 * Compile all necessary documents as a single PDF ArrayBuffer from the given `data`.
 *
 * @param {Process} processes
 * @param {Person} applicant
 * @return {Promise<Uint8Array>} Compiled documents
 */
export default async function makeFinalDocument(
  processes: Process[],
  applicant: Person,
): Promise<Uint8Array> {
  const docs: Document[] = [];

  /**
   * Infer any extra values for the applicant as needed.
   * Do any additional assignments here.
   */
  const finalApplicant = { ...applicant };

  // Do any additional Applicant assignment here.
  if (finalApplicant.birthdate && !finalApplicant.age) {
    finalApplicant.age = numericalAge(finalApplicant.birthdate);
  }

  const jurisdiction = applicant.residentJurisdiction ?? "";
  const jurisdictionObj = getJurisdiction(jurisdiction);

  // TODO Handle null.
  const { counties } = jurisdictionObj;
  const residentCounty = counties[applicant.residentCounty ?? ""];

  Object.assign(applicant, residentCounty);

  processes.forEach((proc) => {
    proc.documents.forEach((doc) => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  // Build the constituent forms and guide parts.
  // TODO This is a bit of a dirty hack, needs cleanup.
  const formFilenamesAndMaps: [string, Formfill[]?][] = [];
  const guideTitlesAndParts: [string, string][] = [];

  docs
    .filter((doc) => doc.include === undefined || doc.include(finalApplicant))
    .forEach((doc) => {
      if (doc.filename !== undefined) {
        const filename = `/forms/${doc.filename}`;
        formFilenamesAndMaps.push([filename, doc.map]);
      }

      if (doc.guide !== undefined) {
        const guidePart = `/guides/${doc.guide}`;
        const guideTitle = doc.name || "";
        guideTitlesAndParts.push([guideTitle, guidePart]);
      }
    });

  guideTitlesAndParts.unshift(["Preamble", "/guides/preamble.html.njk"]);

  // Fill forms.
  const forms = await Promise.all(
    formFilenamesAndMaps.map(async ([filename, map]) =>
      fetch(filename)
        .then((response) => response.arrayBuffer())
        .then(PDFDocument.load)
        .then((form) => {
          if (map === undefined) {
            return form;
          }
          return fillForm(form, map, finalApplicant);
        }),
    ),
  );

  // Fill and collate guides.
  // const guideHeaders =
  const guidePartsRendered = guideTitlesAndParts.map(
    ([guideTitle, guidePart], i) =>
      `<h3>${i + 1}. ${guideTitle}</h3>${render(guidePart, finalApplicant)}`,
  );
  const guide = guidePartsRendered.join("");

  const allDocuments: PDFDocument[] = [...forms];

  const { default: html2pdf } = await import("html2pdf.js");

  if (html2pdf) {
    const guidePdf = await html2pdf()
      .set({
        pagebreak: {
          mode: ["avoid-all"],
        },
        margin: 10,
      })
      .from(guide)
      .outputPdf("arraybuffer")
      .then(PDFDocument.load);

    allDocuments.unshift(guidePdf);
  }

  const result = await PDFDocument.create();
  const pages = await Promise.all(
    allDocuments.map((doc) => {
      const numPages = doc.getPageCount();
      return result.copyPages(doc, [...Array(numPages).keys()]);
    }),
  );

  // Flatten form fields into document.
  pages.flat().forEach((page) => result.addPage(page));

  return result.save();
}

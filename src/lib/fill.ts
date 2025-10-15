/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import { PDFDocument } from "@cantoo/pdf-lib";

import { Person } from "../types/person";
import { Guide } from "../types/generic";
import { AnyProcess, AnyDocument, AnyGuide } from "../types/generic";
import {
  Formfill,
  FillableField,
  PlaceableField,
  isText,
  isCheck,
  isRadio,
  isDropdown,
  isFillable,
} from "../types/formfill";

function fillField(doc: PDFDocument, field: FillableField) {
  const form = doc.getForm();
  const { fieldName } = field;
  if (isText(field)) {
    const formField = form.getTextField(fieldName);

    // Disable maximum length.
    formField.setMaxLength(undefined);
    formField.setText(field.text);
  } else if (isCheck(field)) {
    const formField = form.getCheckBox(fieldName);
    if (field.check) {
      formField.check();
    }
  } else if (isRadio(field)) {
    const formField = form.getRadioGroup(fieldName);
    if (typeof field.choice === "number") {
      // Fill by index.
      // cf. https://github.com/Hopding/pdf-lib/issues/811#issuecomment-1009935032
      const acroField = formField.acroField;
      const value = acroField.getOnValues()[field.choice];
      acroField.setValue(value);
    } else if (field.choice !== undefined) {
      formField.select(field.choice);
    }
  } else if (isDropdown(field)) {
    const formField = form.getDropdown(fieldName);
    if (field.value) {
      formField.select(field.value);
    }
  }
}

function realLocation(
  field: PlaceableField,
  pageHeight: number,
  ourDpi: number,
): { x: number; y: number; size: number } {
  //page.getHeight returns a number in PDF Units (1/72) of an inch, must convert to pixels.
  //const trueHeight = Math.round((pageHeight * (1/72)) * ourDpi);

  //X&Y Coords are listed in map files under the assumption of an 850 x 1100 pixel page which is 100 DPI.
  const yAdjustedDPI = Math.round((field.loc.y / ((field.loc.y * (1/72)) * ourDpi)) * field.loc.y);
  const xAdjustedDPI = Math.round((field.loc.x / ((field.loc.x * (1/72)) * ourDpi)) * field.loc.x);

  //this will return a 12 pixel height default text equivilent regardless of DPI
  const defaultFontSize = Math.round((8.64 * (1/72)) * ourDpi);
  const fontSize = field.font?.fontSize ?? defaultFontSize;

  return {
    x: xAdjustedDPI,
    y: pageHeight - (fontSize + yAdjustedDPI),
    size: fontSize
  };
}

function placeField(doc: PDFDocument, field: PlaceableField) {
  let whatToWrite: string | undefined;
  if (isText(field)) {
    whatToWrite = field.text;
  } else if (isCheck(field) && field.check) {
    whatToWrite = "X";
  } else if (isRadio(field) && field.choice) {
    whatToWrite = "X";
  }

  if (whatToWrite) {
    const page = doc.getPages()[field.loc.page ?? 0];
    page.drawText(whatToWrite, realLocation(field, page.getHeight(), 100));
  }
}

export function fillForm(
  doc: PDFDocument,
  fills: Formfill[],
  applicant: Person,
): PDFDocument {
  fills
    .map((fill) => fill(applicant))
    .forEach((field) => {
      if (isFillable(field)) {
        fillField(doc, field);
      } else {
        placeField(doc, field);
      }
    });

  // Flatten the form fields into the document.
  try {
    doc.getForm().flatten();
  } catch {
    // We get some ignorable errors in flattening forms here because of an
    // upstream bug.
    // TODO Fork and fix this.
    //
    // Cf. https://github.com/Hopding/pdf-lib/issues/1281
  }

  return doc;
}

export function compileGuidesFor(
  process: AnyProcess,
  applicant: Person,
): AnyGuide[] | undefined {
  const docs: AnyDocument[] = [];

  process.documents.forEach((doc) => {
    if (!docs.includes(doc)) {
      docs.push(doc);
    }
  });

  const guides: AnyGuide[] = [];

  docs
    .filter(
      (doc) =>
        !("include" in doc) ||
        doc.include === undefined ||
        doc.include(applicant),
    )
    .forEach((doc) => {
      if (doc.guide !== undefined && applicant.residentLocality !== undefined) {
        const correctlyTypedGuide = doc.guide as Guide<
          typeof applicant.residentLocality
        >;
        if (typeof correctlyTypedGuide === "function") {
          guides.push(correctlyTypedGuide);
        }
      }
    });

  return guides;
}

export function compileDocuments(processes: AnyProcess[]): AnyDocument[] {
  const docs: AnyDocument[] = [];

  processes.forEach((proc) => {
    proc.documents.forEach((doc) => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  return docs;
}

export async function collateDocuments(
  documents: AnyDocument[],
  applicant: Person,
): Promise<Uint8Array | undefined> {
  const formFilenamesAndMaps: [string, Formfill[]?][] = [];

  documents
    .filter((doc) => doc.include === undefined || doc.include(applicant))
    .forEach((doc) => {
      if (doc.filename !== undefined) {
        const filename = `/forms/${doc.filename}`;
        formFilenamesAndMaps.push([filename, doc.map]);
      }
    });

  // Fill forms.
  const forms = await Promise.all(
    formFilenamesAndMaps.map(async ([filename, map]) =>
      fetch(filename)
        .then((response) => response.arrayBuffer())
        .then((buf) => PDFDocument.load(buf))
        .then((form) => {
          if (map === undefined) {
            return form;
          }

          return fillForm(form, map, applicant);
        }),
    ),
  );

  const allDocuments: PDFDocument[] = [...forms];

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

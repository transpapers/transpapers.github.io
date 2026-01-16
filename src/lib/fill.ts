/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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
import { allJurisdictions } from "../jurisdiction/all";
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

/**
 * Determine the actual pixel location of a placeable `field` relative to the
 * `pageHeight` and `ourDpi`, which is the DPI the data in `field` assumes for
 * its PDF document (default 100).
 *
 * We need this function because PDF-LIB is poorly documented.
 * `page.getHeight()` returns a value in points (1/72") and doesn't document
 * this anywhere. `page.drawText()` takes a value in PIXELS and doesn't document
 * this anywhere. We banged our heads on this for weeks.
 *
 * Returning a value in points is equivalent to operating with 72 DPI. This function
 * uses this convention.
 *
 * PDF-LIB also uses a coordinate system with its origin at the
 * lower left corner, as opposed to the upper left corner, as is more common.
 **/
function realLocation(
  field: PlaceableField,
  pageHeight: number,
  ourDpi: number,
): {x: number; y: number; size: number} {
  const theirDpi = 72;
  const scalingFromOurToTheirDpi = theirDpi / ourDpi;

  const fontSize = field.font?.fontSize ?? 14;

  const xAdjustedToTheirDpi = field.loc.x * scalingFromOurToTheirDpi;
  const yAdjustedToTheirDpi = field.loc.y * scalingFromOurToTheirDpi;
  const fontSizeAdjustedToTheirDpi = fontSize * scalingFromOurToTheirDpi;

  const yAdjustedToTheirDpiAndCoordinates = pageHeight - yAdjustedToTheirDpi - fontSizeAdjustedToTheirDpi;

  return {
    x: xAdjustedToTheirDpi,
    y: yAdjustedToTheirDpiAndCoordinates,
    size: fontSizeAdjustedToTheirDpi,
  }
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
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === applicant.residentJurisdictionName,);
  
  if (!residentJurisdiction) {
    return undefined;
  };

  const localities = residentJurisdiction.localities;
  const locality = localities.find(
    (j) => j.name === applicant.residentLocalityName);

  docs
    .filter(
      (doc) =>
        !("include" in doc) ||
        doc.include === undefined ||
        doc.include(applicant),
    )
    .forEach((doc) => {
      if (doc.guide !== undefined && locality !== undefined) {
        const correctlyTypedGuide = doc.guide as Guide<
          typeof locality
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

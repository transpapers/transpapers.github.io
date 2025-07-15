/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import * as React from "react";

import { PDFDocument } from "@cantoo/pdf-lib";

import { Person } from "../types/person";
import { Process, Document } from "../types/process";
import {
  Formfill,
  FillableField,
  PlaceableField,
  isText,
  isCheck,
  isRadio,
  isFillable,
} from "../types/formfill";

function fillField(doc: PDFDocument, field: FillableField) {
  const form = doc.getForm();
  const { fieldName } = field;
  if (isText(field)) {
    const formField = form.getTextField(fieldName);
    if (formField) {
      // Disable maximum length.
      formField.setMaxLength(undefined);
      formField.setText(field.text);
    }
  } else if (isCheck(field)) {
    const formField = form.getCheckBox(fieldName);
    if (formField && field.check) {
      formField.check();
    }
  } else if (isRadio(field)) {
    const formField = form.getRadioGroup(fieldName);
    if (typeof field.choice === "number") {
      // Fill by index.
      // cf. https://github.com/Hopding/pdf-lib/issues/811#issuecomment-1009935032
      const acroField = formField.acroField;
      const value = acroField.getOnValues()[field.choice];
      if (value) {
        acroField.setValue(value);
      }
    } else if (field.choice !== undefined) {
      formField.select(field.choice);
    }
  }
}

function realLocation(
  field: PlaceableField,
  pagePixelHeight: number,
  ourDpi: number,
): { x: number; y: number } {
  const theirDpi = pagePixelHeight / 11.0;
  const scale = ourDpi / theirDpi;

  const fontSize = field.font?.fontSize ?? 12;

  return {
    x: field.loc.x * scale,
    y: pagePixelHeight - fontSize - field.loc.y * scale,
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
    .forEach((field) =>
      isFillable(field)
        ? fillField(doc, field as FillableField)
        : placeField(doc, field as PlaceableField),
    );

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

export function compileGuides(
  processes: Process[],
  applicant: Person,
): React.JSX.Element[] | undefined {
  const docs: Document[] = [];

  processes.forEach((proc) => {
    proc.documents.forEach((doc) => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  const guides: React.JSX.Element[] = [];

  docs
    .filter((doc) => doc.include === undefined || doc.include(applicant))
    .forEach((doc) => {
      if (doc.guide !== undefined) {
        const guide = React.createElement(doc.guide, {
          person: applicant,
        });
        guides.push(guide);
      }
    });

  return guides;
}

/**
 * Compile all necessary documents as a single PDF ArrayBuffer from the given `data`.
 *
 * @param {Process} processes
 * @param {Person} applicant
 * @return {Promise<Uint8Array>} Compiled documents
 */
export async function compileDocuments(
  processes: Process[],
  applicant: Person,
): Promise<Uint8Array | undefined> {
  const docs: Document[] = [];

  processes.forEach((proc) => {
    proc.documents.forEach((doc) => {
      if (!docs.includes(doc)) {
        docs.push(doc);
      }
    });
  });

  const formFilenamesAndMaps: [string, Formfill[]?][] = [];

  docs
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
    allDocuments
      .filter((doc) => doc !== undefined)
      .map((doc) => {
        const numPages = doc.getPageCount();
        return result.copyPages(doc, [...Array(numPages).keys()]);
      }),
  );

  // Flatten form fields into document.
  pages.flat().forEach((page) => result.addPage(page));

  return result.save();
}

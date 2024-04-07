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

import * as React from 'react';

import {
  PDFDocument,
  PDFTextField,
  PDFCheckBox,
  PDFRadioGroup,
} from '@cantoo/pdf-lib';

import { Person } from '../types/person';
import { Process, Document } from '../types/process';
import { Formfill } from '../types/formfill';

/**
 * Fill a PDF `doc`ument with the given `data` based on the formfill data in `fills`.
 * @param {PDFDocument} doc
 * @param {Formfill[]} fills
 * @param {Person} applicant
 * @return {PDFDocument} Filled PDF document
 */
export function fillForm(
  doc: PDFDocument,
  fills: Formfill[],
  applicant: Person,
): PDFDocument {
  const form = doc.getForm();
  const pages = doc.getPages();

  fills.forEach((fill) => {
    if ('field' in fill) {
      const field = form.getField(fill.field);
      if ('text' in fill && field instanceof PDFTextField) {
        const text = (fill.text)(applicant);

        if (typeof text === 'string') {
          // Disable maximum length.
          field.setMaxLength(undefined);

          field.setText(text);
        }
      } else if ('check' in fill && field instanceof PDFCheckBox) {
        const checked = fill.check(applicant);
        if (checked) {
          field.check();
        }
      } else if (
        'select' in fill
        && 'check' in fill
        && field instanceof PDFRadioGroup
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

      if ('text' in fill) {
        const text = (fill.text)(applicant);
        if (typeof text === 'string') {
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
  try {
    form.flatten();
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
        guides.push(doc.guide);
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
    formFilenamesAndMaps.map(async ([filename, map]) => fetch(filename)
      .then((response) => response.arrayBuffer())
      .then(PDFDocument.load)
      .then((form) => {
        if (map === undefined) {
          return form;
        }

        return fillForm(form, map, applicant);
      })),
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

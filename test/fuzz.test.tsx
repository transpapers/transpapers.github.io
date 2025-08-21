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

import { readFileSync } from "fs";

import { expect, describe, test } from "vitest";
import { fakerEN_US as faker } from "@faker-js/faker";

import { PDFDocument } from "@cantoo/pdf-lib";

import { fillForm } from "../src/lib/fill";
import { allJurisdictions } from "../src/jurisdiction/all";
import { type Name, GenderMarker } from "../src/types/types";
import { type Person } from "../src/types/person";
import {
  type AnyDocument,
  type AnyJurisdiction,
  type AnyLocality,
} from "../src/types/generic";
import { isFillable, type PlaceableField } from "../src/types/formfill";

// const mayBeOmitted = (probability, func) => ((Math.random() < probability) ? undefined : func());

const generateNameForTesting: () => Name = () => ({
  first: faker.person.firstName(),
  middle: faker.person.lastName(),
  last: faker.person.lastName(),
  suffix: faker.person.suffix(),
});

// TODO This is really bad form, but it works...
const generateDateForTesting: () => string = () =>
  faker.date.past().toISOString().substring(0, 10);

const generatePersonForTesting: (
  birthJurisdiction: AnyJurisdiction,
  residentJurisdiction: AnyJurisdiction,
  locality: AnyLocality,
) => Person = (
  birthJurisdiction: AnyJurisdiction,
  residentJurisdiction: AnyJurisdiction,
  locality: AnyLocality,
) => {
  const person = {
    legalName: generateNameForTesting(),
    chosenName: generateNameForTesting(),
    birthName: generateNameForTesting(),

    reasonForNameChange: faker.lorem.sentence(),
    sealBirthCertificate: faker.datatype.boolean(),
    birthdate: generateDateForTesting(),
    age: undefined,

    assignedSex: faker.helpers.enumValue(GenderMarker),
    gender: faker.helpers.enumValue(GenderMarker),

    doNotPublish: faker.datatype.boolean(),
    hasCriminalRecord: faker.datatype.boolean(),
    parentsAreOkay: faker.datatype.boolean(),

    isChangingLegalName: true,
    isChangingLegalSex: true,

    mothersBirthName: generateNameForTesting(),
    mothersBirthdate: generateDateForTesting(),

    fathersBirthName: generateNameForTesting(),
    fathersBirthdate: generateDateForTesting(),

    phone: faker.phone.number(),
    streetAddress: faker.location.streetAddress(),

    residentCity: faker.location.city(),

    birthJurisdiction,
    residentJurisdiction,

    residentLocality: locality,

    zip: faker.location.zipCode({ state: residentJurisdiction.abbreviation }),
    email: faker.internet.email(),

    passport: undefined,
    representativeName: undefined,
    birthCity: faker.location.city(),

    court: undefined,
    fingerprintLocations: undefined,
    publications: undefined,
  };

  return person;
};

describe("generatePersonForTesting", () => {
  test("does not error when run by itself", () => {
    const jurisdiction = allJurisdictions[0];
    const locality = jurisdiction.localities[0];
    const person = generatePersonForTesting(
      jurisdiction,
      jurisdiction,
      locality,
    );

    expect(person).toBeTruthy();
  });
});

const allDocuments: (AnyDocument & { abbreviation: string })[] =
  allJurisdictions
    .map((jurisdiction) =>
      jurisdiction.processes.map((process) =>
        process.documents
          .filter((document) => document.filename && document.map)
          .map((document) => {
            const docPlusAbbr: AnyDocument & { abbreviation: string } =
              Object.assign({}, document, {
                abbreviation: jurisdiction.abbreviation,
              });

            return docPlusAbbr;
          }),
      ),
    )
    .flat(2);

describe.each(allDocuments)(
  "$abbreviation form $id: $name",
  ({
    // Ignore linter warnings for variables used in test name.
    /* eslint-disable @typescript-eslint/no-unused-vars */
    abbreviation,
    id,
    name,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    filename,
    map,
    include,
  }) => {
    const fuzzPeople = Array.from({ length: 25 }, () => {
      let birthJurisdiction: AnyJurisdiction;
      do {
        birthJurisdiction =
          allJurisdictions[Math.floor(Math.random() * allJurisdictions.length)];
      } while (birthJurisdiction.name === "Federal");

      let residentJurisdiction: AnyJurisdiction;
      do {
        residentJurisdiction =
          allJurisdictions[Math.floor(Math.random() * allJurisdictions.length)];
      } while (residentJurisdiction.name === "Federal");

      const locality =
        residentJurisdiction.localities[
          Math.floor(Math.random() * residentJurisdiction.localities.length)
        ];

      return generatePersonForTesting(
        birthJurisdiction,
        residentJurisdiction,
        locality,
      );
    });

    test("generates no fuzz errors", () =>
      Promise.all(
        fuzzPeople.map(async (person) => {
          const isIncluded = include === undefined || include(person);
          if (isIncluded && map !== undefined && filename !== undefined) {
            const buffer = readFileSync(`./public/forms/${filename}`).toString(
              "base64",
            );
            const form = await PDFDocument.load(buffer, {
              ignoreEncryption: true,
            });

            if (!form.isEncrypted) {
              expect(fillForm(form, map, person)).toBeTruthy();
            } else {
              console.error(`Skipping encrypted form ${filename}`);
            }
          }
        }),
      ));

    test("contains no duplicate field names", () => {
      if (map) {
        const allFieldNames: string[] = map
          .map((fill) => fill(fuzzPeople[0]))
          .filter((field) => isFillable(field))
          .map((field) => field.fieldName)
          .sort();

        allFieldNames.forEach((name, idx, array) => {
          if (idx + 1 < array.length) {
            expect(name).not.toEqual(array[idx + 1]);
          }
        });
      }
    });

    test("contains no duplicate locations", () => {
      if (map) {
        const allLocations = map
          .map((fill) => fill(fuzzPeople[0]))
          .filter((field) => !isFillable(field))
          .map((field) => (field as PlaceableField).loc)
          .sort();

        allLocations.forEach((name, idx, array) => {
          if (idx + 1 < array.length) {
            expect(name).not.toEqual(array[idx + 1]);
          }
        });
      }
    });

    test("log values used in tests", () => {
        const birthJurisdictionArray = Object.values(generatePersonForTesting);
        console.log(birthJurisdictionArray);
    });
  },
);

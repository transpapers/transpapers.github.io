import { readFileSync } from 'fs';

import { expect, describe, test } from 'vitest';
import { fakerEN_US as faker } from '@faker-js/faker';

import { PDFDocument } from '@cantoo/pdf-lib';

import { fillForm } from '../src/lib/fill';
import { allJurisdictions } from '../src/jurisdiction/all';
import { Name, GenderMarker } from '../src/types/types';
import { Person } from '../src/types/person';

// const mayBeOmitted = (probability, func) => ((Math.random() < probability) ? undefined : func());

const generateNameForTesting: () => Name = () => ({
  first: faker.person.firstName(),
  middle: faker.person.lastName(),
  last: faker.person.lastName(),
  suffix: faker.person.suffix(),
});

// TODO This is really bad form, but it works...
const generateDateForTesting: () => string = () => faker.date.past().toISOString().substring(0, 10);

const generatePersonForTesting: () => Person = () => {
  const person = {
    legalName: generateNameForTesting(),
    chosenName: generateNameForTesting(),
    reasonForNameChange: faker.lorem.sentence(),
    sealBirthCertificate: faker.datatype.boolean(),
    birthdate: generateDateForTesting(),
    age: undefined,

    assignedSex: faker.helpers.enumValue(GenderMarker),
    gender: faker.helpers.enumValue(GenderMarker),

    doNotPublish: faker.datatype.boolean(),
    parentsAreOkay: faker.datatype.boolean(),

    mothersBirthName: generateNameForTesting(),
    mothersBirthdate: generateDateForTesting(),

    fathersBirthName: generateNameForTesting(),
    fathersBirthdate: generateDateForTesting(),

    phone: faker.phone.number(),
    streetAddress: faker.location.streetAddress(),

    residentCity: faker.location.city(),

    // TODO Make this a choice from allJurisdictions.
    residentJurisdiction: 'Michigan',

    // TODO Make this a choice from county data.
    residentCounty: 'Kent',

    zip: faker.location.zipCode({ state: 'MI' }),
    email: faker.internet.email(),

    passport: undefined,
    representativeName: undefined,
    birthCity: faker.location.city(),
    birthJurisdiction: 'Michigan',

    court: undefined,
    fingerprintLocations: undefined,
    publications: undefined,
  };

  return person;
};

describe('generatePersonForTesting', () => {
  test('does not error when run by itself', () => {
    const person = generatePersonForTesting();

    expect(person).toBeTruthy();
  });
});

const forms = allJurisdictions
  .map((jurisdiction) => jurisdiction.processes)
  .flat()
  .filter((process) => process !== undefined)
  .map((process) => process!.documents)
  .flat()
  .filter((doc) => doc.filename !== undefined)
  .filter((doc) => doc.map !== undefined);

describe.each(forms)('Form $id: $name', async ({
  // Ignore ESLint warnings for variables used in test name.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name, id,
  filename, include, map,
}) => {
  const fuzzPeople = Array.from({ length: 10 }, generatePersonForTesting);

  test('generates no fuzz errors', async () => {
    fuzzPeople.forEach(async (person) => {
      const isIncluded = include === undefined || include(person);
      if (isIncluded && map !== undefined) {
        const buffer = readFileSync(`./public/forms/${filename}`).toString('base64');
        const form = await PDFDocument.load(buffer);

        expect(fillForm(form, map, person)).toBeTruthy();
      }
    });
  });
});

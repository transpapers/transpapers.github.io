import { expect, describe, test } from 'vitest';

import { shakeTree } from '../src/lib/shakeTree';

import { michiganNameChange } from '../src/jurisdiction/Michigan/process';

import { isMinor } from '../src/lib/util';

describe('shakeTree()', () => {
  test('regression test', () => {
    const expected = [
      'legalName',
      'birthdate',
      'representativeName',
      'streetAddress',
      'residentCity',
      'residentJurisdiction',
      'zip',
      'phone',
      'parentsAreOkay',
      'mothersBirthName',
      'fathersBirthName',
      'reasonForNameChange',
      'chosenName',
      'sealBirthCertificate',
      'doNotPublish',
      'residentCounty',
      'age',
    ];

    const received = shakeTree(michiganNameChange);

    const expectedSet = new Set(expected);
    const receivedSet = new Set(received);

    expect(receivedSet).toEqual(expectedSet);
  });
});

describe('numericalAge()/isMinor()', () => {
  test('recognizes me as an adult', () => {
    const me = { birthdate: '1997-10-07' };

    expect(isMinor(me)).toBe(false);
  });
});

import { expect, describe, test } from 'vitest';

import shakeTree from '../src/shakeTree';
import { michiganNameChange } from '../src/process';
import fetchAll from '../src/fill';

import mockData from './mockData';

describe('shakeTree()', () => {
  test('regression test', () => {
    const expected = [
      'legalName',
      'dateOfBirth',
      'representativeName',
      'streetAddress',
      'city',
      'state',
      'zip',
      'areaCode',
      'phone',
      'parentsAreOkay',
      'mothersBirthName',
      'fathersBirthName',
      'reasonForNameChange',
      'chosenName',
      'sealBirthCertificate',
      'county',
      'doNotPublish',
    ];

    expect(shakeTree(michiganNameChange)).toEqual(expected);
  });
});

describe('fetchAll()', () => {
  test('does not crash', () => {
    mockData.forEach((data) => {
      fetchAll([michiganNameChange], data);
    });
  });
});

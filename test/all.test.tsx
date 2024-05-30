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

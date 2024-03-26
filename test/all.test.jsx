import { expect, describe, test } from 'vitest';

import { PDFDocument } from '@cantoo/pdf-lib';

import * as React from 'react';
import { render } from '@testing-library/react';

import { Provider as StoreProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { shakeTree } from '../src/lib/shakeTree';

import { michiganNameChange } from '../src/jurisdiction/Michigan/process';
import { allJurisdictions } from '../src/jurisdiction/all';

import { fillForm } from '../src/lib/fill';
import { isMinor } from '../src/lib/util';

import { sampleData } from '../src/types/person';

import { store } from '../src/store';

import mockData from './mockData';

import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Step3 from '../src/components/Step3';
import Step4 from '../src/components/Step4';
import Step4b from '../src/components/Step4b';
import Step5 from '../src/components/Step5';
import Step6 from '../src/components/Step6';

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

    expect(isMinor(me)).toBe(false)
  })
});

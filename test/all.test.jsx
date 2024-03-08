import { expect, describe, test } from 'vitest';

import * as React from 'react';
import { axe } from 'vitest-axe';
import { render } from '@testing-library/react';

import shakeTree from '../src/lib/shakeTree';
import { michiganNameChange } from '../src/jurisdiction/Michigan/process';
import fetchAll from '../src/lib/fill';

import mockData from './mockData';

import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Step3 from '../src/components/Step3';

describe('shakeTree()', () => {
  test('regression test', () => {
    const expected = [
      'legalName',
      'first',
      'middle',
      'last',
      'suffix',
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

describe('components pass basic a11y tests', async () => {
  const allComponents = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
  ];
  console.log(allComponents);
  test.each(allComponents)('', async (component) => {
    const { container } = render(component);
    const markup = await axe(container);
    expect(markup).toHaveNoViolations();
  })
});

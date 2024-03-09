import { expect, describe, test } from 'vitest';
import { axe } from 'vitest-axe';

import { readFileSync } from 'fs';
import { join } from 'path';

import { PDFDocument } from '@cantoo/pdf-lib';

import * as React from 'react';
import { render } from '@testing-library/react';

import { fields } from '../src/components/fields';
import { neededFieldNames, shakeTree } from '../src/lib/shakeTree';

import { michiganNameChange } from '../src/jurisdiction/Michigan/process';
import { allJurisdictions } from '../src/jurisdiction/all';
import { fillForm } from '../src/lib/fill';

import { sampleData } from '../src/types/person';

import mockData from './mockData';

import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Step3 from '../src/components/Step3';

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
    ];

    expect(shakeTree(michiganNameChange)).toEqual(expected);
  });
});

describe('components pass basic a11y tests', async () => {
  describe.each(allJurisdictions)('Jurisdiction: $name', async (jurisdiction) => {
    const allProcesses = Object.values(jurisdiction.processes);
    const visibleFieldNames = neededFieldNames(allProcesses, sampleData);
    const neededFields = Object.entries(fields)
      .filter(([name]) => visibleFieldNames.includes(name))
      .map(([, field]) => field);

    const allComponents = {
      "Step1": <Step1
        residentJurisdiction={jurisdiction.name}
        // Mock out setters.
        setCounty={() => undefined} setResidentJurisdiction={() => undefined}
        setBirthJurisdiction={() => undefined}
      />,

      "Step2": <Step2
        neededProcesses={allProcesses}
        // Mock out setters.
        setNeededProcesses={() => undefined}
      />,

      "Step3": <Step3
        data={sampleData}
        birthJurisdiction={jurisdiction.name}
        residentJurisdiction={jurisdiction.name}
        county={undefined}
        neededProcesses={allProcesses}
        visibleFields={neededFields}
        // Mock out setters.
        setData={() => undefined}
      />,
    };
    test.each(Object.entries(allComponents))('Component: %s', async (name, component) => {
      const { container } = render(component);
      const markup = await axe(container);
      expect(markup).toHaveNoViolations();
    });
  });
});

describe('documents render properly with sampleData', async () => {
  describe.each(allJurisdictions)('Jurisdiction: $name', async (jurisdiction) => {
    const allProcesses = Object.values(jurisdiction.processes);

    describe.each(allProcesses)('Process: $target', async ({ documents }) => {
      test.each(documents)('Document: $name ($id)', async ({ filename, map }) => {
        if (filename !== undefined) {
          const file = join('public/forms', filename);
          const content = readFileSync(file, 'base64');
          const doc = await PDFDocument.load(content);

          if (map === undefined) {
            return doc;
          }

          fillForm(doc, map, sampleData);
        }
      });
    });
  });
});

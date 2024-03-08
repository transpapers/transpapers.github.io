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
import { useEffect, useState } from 'react';

import { fields } from './components/fields';

import { allJurisdictions, getJurisdiction } from './jurisdiction/all';

import shakeTree from './lib/shakeTree';

import { Field } from './types/field';
import { Person } from './types/person';
import { Target, Process } from './types/process';
import { County } from './types/county';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

/**
 * Convert the list of needed procedures into a list of needed field names.
 */
function neededFieldNames(neededProcs: Process[], applicant: Person): string[] {
  const names: string[] = [];
  neededProcs.forEach((process) => shakeTree(process, names));

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (
      field.include !== undefined
      && field.include(applicant)
      && !names.includes(fieldName)
    ) {
      names.push(fieldName);
    }
  });

  return names;
}

function App() {
  const [residentJurisdiction, setResidentJurisdiction] = useState<string | undefined>(undefined);
  const [birthJurisdiction, setBirthJurisdiction] = useState<string | undefined>(undefined);
  const [county, setCounty] = useState<County | undefined>(undefined);

  const [allProcesses, setAllProcesses] = useState<{
    [key in Target]?: Process;
  }>({});
  const [neededProcesses, setNeededProcesses] = useState<Process[]>([]);
  const [visibleFields, setVisibleFields] = useState<Field[]>([]);
  const [data, setData] = useState({});

  const [stepNo, setStepNo] = useState(0);

  // Step 2: generate allProcs from [birthJurisdiction, residentJurisdiction].
  useEffect(() => {
    const residentProcesses = getJurisdiction(residentJurisdiction)?.processes ?? {};
    const birthProcesses = getJurisdiction(birthJurisdiction)?.processes ?? {};
    const federalProcesses = getJurisdiction('Federal')?.processes ?? {};

    let allProcs: { [key in Target]?: Process } = {};
    allProcs[Target.BirthRecord] = birthProcesses[Target.BirthRecord];
    allProcs = Object.assign(allProcs, { ...residentProcesses });
    allProcs = Object.assign(allProcs, { ...federalProcesses });

    setAllProcesses(allProcs);
    setNeededProcesses(Object.values(allProcs));
  }, [residentJurisdiction, birthJurisdiction]);

  // Step 3: Generate form fields from selected processes.
  useEffect(() => {
    const fieldNames = neededFieldNames(neededProcesses, data);
    const neededFields = Object.entries(fields)
      .filter(([name]) => fieldNames.includes(name))
      .map(([, field]) => field);

    setVisibleFields(neededFields);
  }, [neededProcesses, data]);

  const availableJurisdictions = allJurisdictions
    .filter((jurisdiction) => !jurisdiction.isFederal)
    .map((jurisdiction) => jurisdiction.name);

  const thisStepComponent = () => {
    switch (stepNo) {
      case 1:
        return (
          <Step2
            allProcesses={allProcesses}
            neededProcesses={neededProcesses}
            setNeededProcesses={setNeededProcesses}
          />
        );
      case 2:
        return (
          <Step3
            neededProcesses={neededProcesses}
            visibleFields={visibleFields}
            data={data}
            setData={setData}
            birthJurisdiction={birthJurisdiction}
            residentJurisdiction={residentJurisdiction}
            county={county}
          />
        );
      case 0:
      default:
        return (
          <Step1
            residentJurisdiction={residentJurisdiction}
            getJurisdiction={getJurisdiction}
            setResidentJurisdiction={setResidentJurisdiction}
            setBirthJurisdiction={setBirthJurisdiction}
            availableJurisdictions={availableJurisdictions}
            setCounty={setCounty}
          />
        );
    }
  };

  const nextStepIsReady = () => {
    switch (stepNo) {
      case 1:
        return neededProcesses.length > 0;
      case 0:
        return (
          birthJurisdiction !== undefined
          && residentJurisdiction !== undefined
          && county !== undefined
        );
      default:
        return false;
    }
  };

  return (
    <div id="main-form">
      {thisStepComponent()}
      <footer className="step-nav">
        <div className="prev">
          {stepNo > 0 && (
            <button
              className="prev"
              type="button"
              onClick={() => {
                if (stepNo > 0) setStepNo(stepNo - 1);
              }}
            >
              {' '}
              Back
              {' '}
            </button>
          )}
        </div>
        <div className="next">
          {stepNo < 2 && (
            <button
              className="next"
              type="button"
              disabled={!nextStepIsReady()}
              onClick={() => {
                if (stepNo < 2) setStepNo(stepNo + 1);
              }}
            >
              {' '}
              Next
              {' '}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;

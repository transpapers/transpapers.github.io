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

import { getJurisdiction } from './jurisdiction/all';

import { neededFieldNames } from './lib/shakeTree';

import { Field } from './types/field';
import { Target, Process } from './types/process';
import { County } from './types/county';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function toposort(procs: Process[]): Process[] | undefined {
  const sorted: Process[] = [];
  const filledDependencies: (Target | undefined)[] = [];

  while (sorted.length < procs.length) {
    const nextProc = procs.find((proc) => {
      if (filledDependencies.includes(proc.target)) {
        return false;
      }

      if (proc.depends === undefined) {
        return true;
      }

      return proc.depends.every((target) => filledDependencies.includes(target));
    });

    if (nextProc === undefined) {
      // No topological sort exists.
      return undefined;
    }
    sorted.push(nextProc);
    filledDependencies.push(nextProc.target);
  }
  return sorted;
}

function App() {
  const [residentJurisdiction, setResidentJurisdiction] = useState<string | undefined>(undefined);
  const [birthJurisdiction, setBirthJurisdiction] = useState<string | undefined>(undefined);
  const [county, setCounty] = useState<County | undefined>(undefined);

  const [allProcesses, setAllProcesses] = useState<Process[]>([]);
  const [neededProcesses, setNeededProcesses] = useState<Process[]>([]);
  const [visibleFields, setVisibleFields] = useState<Field[]>([]);
  const [data, setData] = useState({});

  const [stepNo, setStepNo] = useState(0);

  // Step 2: generate allProcs from [birthJurisdiction, residentJurisdiction].
  useEffect(() => {
    const residentProcesses = getJurisdiction(residentJurisdiction)?.processes ?? [];
    const birthProcesses = getJurisdiction(birthJurisdiction)?.processes ?? [];
    const federalProcesses = getJurisdiction('Federal')?.processes ?? [];

    const allProcs: Process[] = [...residentProcesses, ...birthProcesses, ...federalProcesses];

    const sorted = toposort(allProcs);
    if (sorted === undefined) {
      // Topological sort failed.
    } else {
      setAllProcesses(sorted);
      setNeededProcesses(sorted);
    }
  }, [residentJurisdiction, birthJurisdiction]);

  // Step 3: Generate form fields from selected processes.
  useEffect(() => {
    const fieldNames = neededFieldNames(neededProcesses, data);
    const neededFields = Object.entries(fields)
      .filter(([name]) => fieldNames.includes(name))
      .map(([, field]) => field);

    setVisibleFields(neededFields);
  }, [neededProcesses, data]);

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
            setResidentJurisdiction={setResidentJurisdiction}
            setBirthJurisdiction={setBirthJurisdiction}
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

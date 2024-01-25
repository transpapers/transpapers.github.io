import * as React from 'react';
import { useEffect, useState } from 'react';

import { fields } from './components/fields';

import { allJurisdictions, getJurisdiction } from './jurisdiction/all';

import shakeTree from './lib/shakeTree';

import { Field } from './types/field';
import { Person } from './types/person';
import { Target, Process } from './types/process';

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
    if (field.include !== undefined
        && field.include(applicant)
        && !names.includes(fieldName)) {
      names.push(fieldName);
    }
  });

  return names;
}

function App() {
  const [residentJurisdiction, setResidentJurisdiction] = useState('Michigan');
  const [birthJurisdiction, setBirthJurisdiction] = useState('Michigan');

  const [allProcesses, setAllProcesses] = useState<{ [key in Target]?: Process }>({});
  const [neededProcesses, setNeededProcesses] = useState<Process[]>([]);
  const [visibleFields, setVisibleFields] = useState<Field[]>([]);
  const [data, setData] = useState({});

  // const [stepNo, setStepNo] = useState(0);

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

  return (
    <div id="main-form">
      <Step1
        setResidentJurisdiction={setResidentJurisdiction}
        setBirthJurisdiction={setBirthJurisdiction}
        availableJurisdictions={availableJurisdictions}
      />
      <Step2
        allProcesses={allProcesses}
        setNeededProcesses={setNeededProcesses}
      />
      <Step3
        visibleFields={visibleFields}
        data={data}
        setData={setData}
        birthJurisdiction={birthJurisdiction}
        residentJurisdiction={residentJurisdiction}
      />
    </div>
  );
}

export default App;

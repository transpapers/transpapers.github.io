import * as React from 'react';
import { useEffect, useState } from 'react';

import { Field } from './field';
import { fields, renderField } from './fields';
import fetchAll from './fill';
import { allJurisdictions, getJurisdiction } from './jurisdiction/all';
import { Person } from './person';
import { Target, Process, targets } from './process';
import shakeTree from './shakeTree';

/**
 * Pull in any needed dependencies of the selected processes.
 */
function resolveDependencies(
  allProcs: { [key in Target]?: Process },
  selectedProcs: Target[],
): Process[] {
  const allTargets: Set<Target> = new Set();

  // Resolve dependencies.
  let newTargets: Set<Target> = new Set(selectedProcs);
  do {
    newTargets.forEach((dep) => allTargets.add(dep));

    const currentTargets = [...allTargets].reduce((list, target) => {
      const deps = allProcs[target]?.depends;
      if (deps !== undefined) {
        deps.forEach((thisDep) => {
          if (!allTargets.has(thisDep)) {
            list.push(thisDep);
          }
        });
      }
      return list;
    }, [] as Target[]);

    newTargets = new Set(currentTargets);
  } while (newTargets.size > 0);

  const procs: Process[] = [...allTargets]
    .map((target) => allProcs[target])
    .filter((proc: Process | undefined): proc is Process => !!proc);

  return procs;
}

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

function beautifyData(formData: FormData): Person {
  const formJson = Object.fromEntries(formData);
  const data: Person = {};

  // TODO This really necessary? Object.fromEntries/Object.entries?
  // Does FormData have an iteration method?
  Object.entries(formJson).forEach(([name, value]) => {
    let pointer: { [key: string]: any } = data;

    const parts = name.split(':');
    const directories = parts.slice(0, parts.length - 1);
    const filename = parts[parts.length - 1];

    directories.forEach((dir) => {
      if (!pointer.hasOwnProperty(dir)) {
        pointer[dir] = {};
      }
      pointer = pointer[dir];
    });

    pointer[filename] = value;
  });

  return data;
}

/**
 * Generate and download the documents from the given `data`.

 * @param {Person} applicant
 */
function generate(procs: Process[], applicant: Person) {
  fetchAll(procs, applicant)
    .then((doc) => {
      const url = URL.createObjectURL(new Blob([doc], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.download = 'gender_affirming_documents.pdf';
      link.href = url;
      link.click();
      URL.revokeObjectURL(link.href);
    });
}

function App() {
  const [residentJurisdiction, setResidentJurisdiction] = useState('Michigan');
  const [birthJurisdiction, setBirthJurisdiction] = useState('Michigan');

  const [allProcesses, setAllProcesses] = useState<{ [key in Target]?: Process }>({});
  const [neededProcesses, setNeededProcesses] = useState<Process[]>([]);
  const [visibleFields, setVisibleFields] = useState<Field[]>([]);
  const [modified, setModified] = useState(false);
  const [data, setData] = useState({});

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
  function updateNeededProcesses() {
    const checkboxes = document.querySelectorAll('#processes input:checked');
    const selectedProcesses = Array.from(checkboxes)
      .map((checkbox) => checkbox.id as Target);

    const allNeededProcesses = resolveDependencies(allProcesses, selectedProcesses);

    setNeededProcesses(allNeededProcesses);
  }

  useEffect(() => {
    const fieldNames = neededFieldNames(neededProcesses, data);
    const neededFields = Object.entries(fields)
      .filter(([name]) => fieldNames.includes(name))
      .map(([, field]) => field);

    setVisibleFields(neededFields);
  }, [neededProcesses, data]);

  // Step 3b: Generate dataToUse from filled form data.
  function handleFormChange(ev: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(ev.currentTarget);

    let dataToUse = beautifyData(formData);

    dataToUse = Object.assign(dataToUse, { birthJurisdiction, residentJurisdiction });

    setData(dataToUse);
    setModified(true);
  }

  const availableJurisdictions = allJurisdictions
    .filter((jurisdiction) => !jurisdiction.isFederal)
    .map((jurisdiction) => jurisdiction.name);

  return (
    <div id="main-form">
      <ol>
        <li key="1">
          <p>
            I live in
            {' '}
            <select
              onChange={(ev) => setResidentJurisdiction(ev.target.value)}
            >
              <option key="" value="">---</option>
              { availableJurisdictions.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {'. '}
            I was born in
            {' '}
            <select
              onChange={(ev) => setBirthJurisdiction(ev.target.value)}
            >
              { availableJurisdictions.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {'. '}
            <br />
            (Other states coming soon.)
          </p>
        </li>
        <li key="2">
          <fieldset id="processes">
            <legend>I need to...</legend>
            <ul>
              { Object.values(Target).map((value) => (
                <li key={value}>
                  <input type="checkbox" id={value} name={value} onChange={updateNeededProcesses} />
                  <span>{targets[value]}</span>
                </li>
              ))}
            </ul>
          </fieldset>
        </li>
        <li key="3">
          <form className="form" onSubmit={handleFormChange} onChange={handleFormChange}>
            { visibleFields.map((field) => {
              const notIncluded = field.include !== undefined && !field.include(data);
              return notIncluded ? '' : renderField(field, residentJurisdiction);
            })}
            { (visibleFields.length > 0) && modified && (
            <input
              type="submit"
              value="Download gender-affirming documents"
              onClick={(ev) => {
                ev.preventDefault();
                generate(neededProcesses, data);
              }}
            />
            ) }
          </form>
        </li>
      </ol>
    </div>
  );
}

export default App;

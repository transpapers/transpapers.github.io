import { React, useEffect, useState } from 'react';

import { fields, renderField } from './fields';
import fetchAll from './fill';
import { processes, targets } from './process';
import shakeTree from './shakeTree';

function neededFieldNames(procs, data) {
  const names = [];
  procs.forEach((process) => shakeTree(process, names));

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (field.hasOwnProperty('include')) {
      console.log(data.birthdate, fieldName, field.include(data));
    }

    if (field.hasOwnProperty('include')
        && field.include(data)
        && !names.includes(fieldName)) {
      names.push(fieldName);
    }
  });

  return names;
}

/**
 * Generate a data object from index.html.
 *
 * @return {Person}
 */
function makeData(procs) {
  const data = {};

  const neededFields = neededFieldNames(procs);

  neededFields.forEach((fieldName) => {
    const field = fields[fieldName];

    switch (field.type) {
      case 'boolean':
        data[fieldName] = document.getElementById(field.name).checked;
        break;
      case 'option':
        data[fieldName] = document.querySelector(`input[name="${fieldName}"]:checked`).value || '';
        break;
      case 'string':
      case 'select':
      case 'email':
      case 'tel':
      case 'number':
      case 'Date':
      case 'county':
        data[fieldName] = document.getElementById(field.name).value || '';
        break;
      case 'Name':
        // FIXME Sasha you goddamned whore. - future Sasha
        data[fieldName] = {};
        ['first', 'middle', 'last', 'suffix'].forEach((key) => {
          const el = document.getElementById(`${field.name}-${key}`);
          data[fieldName][key] = el ? el.value : '';
        });
        break;
      default:
        console.log(`Missing field data for "${field.name}"`);
        break;
    }
  });

  return data;
}

function beautifyData(formData) {
  console.log(formData);

  const data = {};

  return data;
}

/**
 * Generate and download the documents from the given `data`.
 *
 * @param {Person} data
 */
function generate(procs, data) {
  fetchAll(procs, data)
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
  const [residentState, setResidentState] = useState('Michigan');
  const [birthState, setBirthState] = useState('Michigan');

  const [allProcesses, setAllProcesses] = useState({});
  const [neededProcesses, setNeededProcesses] = useState([]);
  const [visibleFields, setVisibleFields] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const residentProcesses = processes[residentState];
    const birthProcesses = processes[birthState];

    const allProcs = {};
    allProcs['birth-record'] = birthProcesses['birth-record'];
    Object.entries(residentProcesses).forEach(([target, proc]) => {
      allProcs[target] = proc;
    });

    setAllProcesses(allProcs);
  }, [residentState, birthState]);

  function neededFields() {
    const checkboxes = document.querySelectorAll('#processes input:checked');
    const selectedProcesses = Array.from(checkboxes).map((checkbox) => allProcesses[checkbox.id]);

    setNeededProcesses(selectedProcesses);

    const fieldNames = neededFieldNames(selectedProcesses, data);
    return Object.entries(fields)
      .filter(([name]) => fieldNames.includes(name))
      .map(([, field]) => field);
  }

  function updateForm() {
    setVisibleFields(neededFields());
  }

  function handleFormChange(ev) {
    const formData = new FormData(ev.currentTarget);
    const formJson = Object.fromEntries(formData);

    const dataToUse = beautifyData(formJson);

    //setData(dataToUse);
    setData(formJson);
    setVisibleFields(neededFields());
  }

  const availableStates = Object.keys(processes);

  return (
    <div id="main-form">
      <ol>
        <li key="1">
          <p>
            I live in
            {' '}
            <select
              onChange={(ev) => setResidentState(ev.target.value)}
            >
              { availableStates.map((state) => <option key={state} value={state}>{state}</option>)}
            </select>
            {'. '}
            I was born in
            {' '}
            <select
              onChange={(ev) => setBirthState(ev.target.value)}
            >
              { availableStates.map((state) => <option key={state} value={state}>{state}</option>)}
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
              { Object.entries(targets).map(([name, description]) => (
                <li key={name}>
                  <input type="checkbox" id={name} name={name} onChange={updateForm} />
                  <span>{description}</span>
                </li>
              )) }
            </ul>
          </fieldset>
        </li>
        <li key="3">
          <form className="form" onChange={handleFormChange}>
            { visibleFields.map((field) => {
              const notIncluded = field.hasOwnProperty('include') && !field.include(data);
              return notIncluded ? '' : renderField(field, residentState);
            })}
            { (visibleFields.length > 0) && (
            <input
              type="submit"
              value="Download gender-affirming documents"
              onClick={(ev) => {
                ev.preventDefault();

                console.log(data);
                // generate(neededProcesses, makeData(neededProcesses));
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

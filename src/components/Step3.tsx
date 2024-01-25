import * as React from 'react';
import { useState } from 'react';

import makeFinalDocument from '../lib/fill';

import { Person } from '../types/person';

import { renderField } from './fields';

interface Step3Props {
  visibleFields: Field[],
  data: object,
  setData: React.Dispatch<React.SetStateAction<object>>,
  birthJurisdiction: string,
  residentJurisdiction: string,
}

function beautifyData(formData: FormData): Person {
  const data: Person = {};

  formData.entries().forEach(([name, value]) => {
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
  makeFinalDocument(procs, applicant)
    .then((doc) => {
      const url = URL.createObjectURL(new Blob([doc], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.download = 'gender_affirming_documents.pdf';
      link.href = url;
      link.click();
      URL.revokeObjectURL(link.href);
    });
}

export default function Step3(props: Step3Props) {
  const [modified, setModified] = useState(false);

  const {
    visibleFields, data, setData, birthJurisdiction, residentJurisdiction,
  } = props;

  function handleFormChange(ev: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(ev.currentTarget);

    let dataToUse = beautifyData(formData);

    dataToUse = Object.assign(dataToUse, { birthJurisdiction, residentJurisdiction });

    setData(dataToUse);
    setModified(true);
  }

  return (
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
  );
}

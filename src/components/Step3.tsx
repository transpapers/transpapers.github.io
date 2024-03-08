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
import { useState } from 'react';

import makeFinalDocument from '../lib/fill';

import { County } from '../types/county';
import { Field } from '../types/field';
import { Person } from '../types/person';
import { Process } from '../types/process';

import { renderField } from './fields';

interface Step3Props {
  neededProcesses: Process[];
  visibleFields: Field[];
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
  birthJurisdiction: string | undefined;
  residentJurisdiction: string | undefined;
  county: County | undefined;
}

function beautifyData(formData: FormData): Person {
  const data: Person = {};

  // Spread the .entries() into an array so we can iterate over it.
  // This seems like a hole in JS but whatever...
  [...formData.entries()].forEach(([name, value]) => {
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
  makeFinalDocument(procs, applicant).then((doc) => {
    if (doc !== undefined) {
      const url = URL.createObjectURL(
        new Blob([doc], { type: 'application/pdf' }),
      );
      const link = document.createElement('a');
      link.download = 'gender_affirming_documents.pdf';
      link.href = url;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  });
}

export default function Step3(props: Step3Props) {
  const [modified, setModified] = useState(false);

  const {
    neededProcesses,
    visibleFields,
    data,
    setData,
    birthJurisdiction,
    residentJurisdiction,
    county,
  } = props;

  function handleFormChange(ev: React.ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(ev.currentTarget);

    let dataToUse = beautifyData(formData);

    dataToUse = Object.assign(dataToUse, {
      birthJurisdiction,
      residentJurisdiction,
    });
    if (county) {
      dataToUse = Object.assign(dataToUse, county);
    }

    setData(dataToUse);
    setModified(true);
  }

  return (
    <>
      <h2>Enter your data</h2>
      <form
        className="form"
        onSubmit={handleFormChange}
        onChange={handleFormChange}
      >
        {visibleFields.map((field) => {
          if (field.include !== undefined) {
            const notIncluded = !field.include(data);
            // TODO Fix this, Sasha, you slut. - Sasha
            return notIncluded ? '' : renderField(field, residentJurisdiction ?? "");
          }
          return true;
        })}
        {visibleFields.length > 0 && modified && (
          <input
            type="submit"
            value="Download my gender-affirming documents"
            onClick={(ev) => {
              ev.preventDefault();
              generate(neededProcesses, data);
            }}
          />
        )}
      </form>
    </>
  );
}

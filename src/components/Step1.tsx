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

import { County } from '../types/county';

import { allJurisdictions, getJurisdiction } from '../jurisdiction/all';

interface Step1Props {
  residentJurisdiction: string | undefined;
  setResidentJurisdiction: React.Dispatch<React.SetStateAction<string | undefined>>;
  setBirthJurisdiction: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCounty: React.Dispatch<React.SetStateAction<County | undefined>>;
}

export default function Step1(props: Step1Props) {
  const {
    residentJurisdiction,
    setResidentJurisdiction,
    setBirthJurisdiction,
    setCounty,
  } = props;

  const [countyNames, setCountyNames] = useState<string[]>([]);

  useEffect(() => {
    setCounty(undefined);
    const jurisdiction = getJurisdiction(residentJurisdiction);
    if (jurisdiction && 'counties' in jurisdiction) {
      // TODO Fix this, Sasha, you slut.
      const names = Object.keys(jurisdiction.counties ?? {});
      setCountyNames(names);
    }
  }, [residentJurisdiction, setCounty, setCountyNames]);

  function updateCounty(ev: React.ChangeEvent<HTMLSelectElement>) {
    const countyName = ev.target.value;
    if (countyName === '') {
      setCounty(undefined);
    } else {
      const jurisdiction = getJurisdiction(residentJurisdiction);
      if (jurisdiction && jurisdiction.counties !== undefined) {
        const county = jurisdiction.counties[countyName];
        setCounty(county);
      }
    }
  }
  const availableJurisdictions = allJurisdictions
    .filter((jurisdiction) => !jurisdiction.isFederal)
    .map((jurisdiction) => jurisdiction.name);

  return (
    <>
      <h2>Where are you?</h2>
      <p>Other states are in development.</p>
      <fieldset>
        <legend>I live in...</legend>
        {availableJurisdictions.map((state) => (
          <div key={`resident-${state}`}>
            <input
              type="radio"
              id={`resident-${state}`}
              name="resident"
              value={state}
              onChange={(ev) => setResidentJurisdiction(ev.target.value)}
            />
            <label htmlFor={`resident-${state}`}>{state}</label>
          </div>
        ))}
      </fieldset>

      {residentJurisdiction && (
        <div key="county-select">
          <label htmlFor="county-select">
            {'My county of residence is... '}
          </label>
          <select onChange={updateCounty} id="county-select">
            <option key="" value="">
              ---
            </option>
            {countyNames.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>
      )}
      <fieldset>
        <legend>I was born in...</legend>
        {availableJurisdictions.map((state) => (
          <div key={`birth-${state}`}>
            <input
              type="radio"
              id={`birth-${state}`}
              name="birth"
              value={state}
              onChange={(ev) => setBirthJurisdiction(ev.target.value)}
            />
            <label htmlFor={`birth-${state}`}>{state}</label>
          </div>
        ))}
      </fieldset>
    </>
  );
}

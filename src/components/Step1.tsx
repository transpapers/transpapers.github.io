import * as React from 'react';
import { useEffect, useState } from 'react';

import { County } from '../types/county';

import { Jurisdiction } from '../jurisdiction/all';

interface Step1Props {
  residentJurisdiction: string,
  getJurisdiction: (name: string) => Jurisdiction | undefined,
  setResidentJurisdiction: React.Dispatch<React.SetStateAction<string>>,
  setBirthJurisdiction: React.Dispatch<React.SetStateAction<string>>,
  setCounty: React.Dispatch<React.SetStateAction<County>>,
  availableJurisdictions: string[],
}

export default function Step1(props: Step1Props) {
  const {
    residentJurisdiction, getJurisdiction, setResidentJurisdiction, setBirthJurisdiction, setCounty, availableJurisdictions,
  } = props;

  const [countyNames, setCountyNames] = useState<string[]>([]);

  useEffect(() => {
    setCounty(undefined);
    const jurisdiction = getJurisdiction(residentJurisdiction);
    if (jurisdiction && 'counties' in jurisdiction) {
      const names = Object.keys(jurisdiction.counties);
      setCountyNames(names);
    }
  }, [residentJurisdiction, getJurisdiction, setCounty, setCountyNames]);

  function updateCounty(ev) {
    const countyName = ev.target.value;
    if (countyName === '') {
      setCounty(undefined);
    } else {
      const jurisdiction = getJurisdiction(residentJurisdiction);
      if (jurisdiction && 'counties' in jurisdiction) {
        const county = jurisdiction.counties[countyName];
        setCounty(county);
      }
    }
  }

  return (
    <>
      <h2>Where are you?</h2>
      <p>Other states are in development.</p>
      <fieldset>
        <legend>I live in...</legend>
        { availableJurisdictions.map((state) => (
          <div key={`resident-${state}`}>
            <input type="radio" id={`resident-${state}`} name="resident" value={state} onChange={(ev) => setResidentJurisdiction(ev.target.value)} />
            <label htmlFor={`resident-${state}`}>{state}</label>
          </div>
        ))}
      </fieldset>

      { residentJurisdiction && (
        <>
          {'I live in '}
          <select onChange={updateCounty}>
            <option key="" value="">---</option>
            {countyNames.map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
          {' County. '}
        </>
      )}
      <fieldset>
        <legend>I was born in...</legend>
        { availableJurisdictions.map((state) => (
          <div key={`birth-${state}`}>
            <input type="radio" id={`birth-${state}`} name="birth" value={state} onChange={(ev) => setBirthJurisdiction(ev.target.value)} />
            <label htmlFor={`birth-${state}`}>{state}</label>
          </div>
        ))}
      </fieldset>
    </>
  );
}

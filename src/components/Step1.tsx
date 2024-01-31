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
  const { residentJurisdiction, getJurisdiction, setResidentJurisdiction, setBirthJurisdiction, setCounty, availableJurisdictions } = props;

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
        console.log(county);
        setCounty(county);
      }
    }
  }

  return (
    <>
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
    </>
  );
}

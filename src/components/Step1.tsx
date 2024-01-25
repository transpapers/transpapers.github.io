import * as React from 'react';

interface Step1Props {
  setResidentJurisdiction: React.Dispatch<React.SetStateAction<string>>,
  setBirthJurisdiction: React.Dispatch<React.SetStateAction<string>>,
  availableJurisdictions: string[],
}

export default function Step1(props: Step1Props) {
  const { setResidentJurisdiction, setBirthJurisdiction, availableJurisdictions } = props;

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

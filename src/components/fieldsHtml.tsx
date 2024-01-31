import * as React from 'react';

import { getJurisdiction } from '../jurisdiction/all';

import { Field } from '../types/field';

function GenericField(field: Field, innards: JSX.Element): JSX.Element {
  const { name, title, subtitle, required } = field;
  return (
    <label key={name} htmlFor={name}>
      <div key={`${name}-meta`}>
        <span className="title">{ title }</span>
        { subtitle
          ? <span className="subtitle">{ subtitle }</span>
          : ''}
        { required
          && <span className="required">*</span>}
      </div>
      { innards }
    </label>
  );
}

interface FieldConstructorProps {
  field: Field
}

interface CountyFieldConstructorProps {
  jurisdiction: string
}

export function StringField({ field }: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      id={field.name}
      name={field.name}
      type="text"
      defaultValue={field.hasOwnProperty('default') ? field.default : ''}
    />
  );

  return GenericField(field, innards);
}

export function CheckboxField({ field }: FieldConstructorProps): JSX.Element {
  return (
    <label key={field.name} htmlFor={field.name} className="checkbox">
      <input
        id={field.name}
        name={field.name}
        type="checkbox"
        defaultChecked={field.hasOwnProperty('default') && field.default}
      />
      <div>
        <span className="title">{ field.title }</span>
        { field.hasOwnProperty('subtitle')
          ? <span className="subtitle">{ field.subtitle }</span>
          : ''}
      </div>
    </label>
  );
}

export function OptionField({ field }: FieldConstructorProps): JSX.Element {
  const options = field.options || {};
  return (
    <fieldset>
      <legend>{field.title}</legend>

      {Object.entries(options).map(([key, value]) => (
        <label key={`${field.name}:${key}`} htmlFor={`${field.name}:${key}`}>
          <input
            id={`${field.name}:${key}`}
            name={field.name}
            type="radio"
            value={value}
          />
          { value }
        </label>
      ))}
    </fieldset>
  );
}

export function SelectField({ field }: FieldConstructorProps): JSX.Element {
  const options = field.options || {};
  const innards = (
    <select
      name={field.name}
      id={field.name}
    >
      <option key="" value="">---</option>
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={value}>{value}</option>
      ))}
    </select>
  );

  return GenericField(field, innards);
}

export function NameField({ field }: FieldConstructorProps): JSX.Element {
  // FIXME Do this automatically, Sasha, you slut.
  const keys = ['first', 'middle', 'last', 'suffix'];
  const innards = (
    <div
      className="name"
      key={`${field.name}-field`}
    >
      {keys.map((key) => (
        <div key={`${field.name}:${key}-wrapper`} className="subfield">
          <input
            key={`${field.name}:${key}-input`}
            id={`${field.name}:${key}`}
            name={`${field.name}:${key}`}
            size={1}
          />
          <label key={`${field.name}:${key}-label`} htmlFor={`${field.name}:${key}`}>{key}</label>
        </div>
      ))}
    </div>
  );

  return GenericField(field, innards);
}

export function NumberField({ field }: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      id={field.name}
      name={field.name}
      type="number"
      defaultValue={field.hasOwnProperty('default') ? field.default : ''}
    />
  );

  return GenericField(field, innards);
}

export function EmailField({ field }: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      id={field.name}
      name={field.name}
      type="email"
      defaultValue={field.hasOwnProperty('default') ? field.default : ''}
    />
  );

  return GenericField(field, innards);
}

export function DateField({ field }: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      id={field.name}
      name={field.name}
      type="date"
      defaultValue={field.hasOwnProperty('default') ? field.default : ''}
    />
  );

  return GenericField(field, innards);
}

export function TelField({ field }: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      id={field.name}
      name={field.name}
      type="tel"
      defaultValue={field.hasOwnProperty('default') ? field.default : ''}
    />
  );

  return GenericField(field, innards);
}

export function CountyField({ jurisdiction }: CountyFieldConstructorProps) {
  const jurisdictionObj = getJurisdiction(jurisdiction);

  if (!jurisdictionObj) {
    return '';
  }

  const { counties } = jurisdictionObj;
  if (!counties) {
    return '';
  }

  // TODO Fix this??
  const field: Field = {
    name: 'county',
    title: 'County',
    type: 'select',
    options: Object.fromEntries(
      Object.keys(counties)
        .map((key) => [key, key]),
    ),
    required: true,
  };

  return SelectField({ field });
}

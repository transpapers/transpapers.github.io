import * as React from 'react';

import { Field } from './fields';

function GenericField({ name, title, subtitle }: Field, innards: JSX.Element): JSX.Element {
  return (
    <label key={name} htmlFor={name}>
      <div>
        <span className="title">{ title }</span>
        { subtitle
          ? <span className="subtitle">{ subtitle }</span>
          : ''}
      </div>
      { innards }
    </label>
  );
}

interface FieldConstructorProps {
  field: Field
}

interface CountyFieldConstructorProps {
  state: string
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
  const options = field.options || [];
  return (
    <fieldset>
      <legend>{field.title}</legend>

      {options.map((value) => (
        <label key={`${field.name}:${value}`} htmlFor={`${field.name}:${value}`}>
          <input
            id={`${field.name}:${value}`}
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

export function SelectField({ field }: FieldConstructorProps) {
  const options = field.options || [];
  const innards = (
    <select
      name={field.name}
      id={field.name}
    >
      <option key="" value="">---</option>
      {options.map((value) => <option key={value} value={value}>{value}</option>)}
    </select>
  );

  return GenericField(field, innards);
}

export function NameField({ field }: FieldConstructorProps) {
  // FIXME Do this automatically, Sasha, you slut.
  const keys = ['first', 'middle', 'last', 'suffix'];
  const innards = (
    <div
      className="name"
    >
      {keys.map((key) => (
        <div key={key} className="subfield">
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

export function NumberField({ field }: FieldConstructorProps) {
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

export function EmailField({ field }: FieldConstructorProps) {
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

export function DateField({ field }: FieldConstructorProps) {
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

export function TelField({ field }: FieldConstructorProps) {
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
  // const counties = getCounties();
  if (!counties) {
    return '';
  }

  const field: Field = {
    name: 'county',
    title: 'County',
    type: 'select',
    options: Object.keys(counties),
  };

  return SelectField({ field });
}

import { React } from 'react';

import getCounties from './counties';

function GenericField({ name, title, subtitle }, innards) {
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

export function StringField({ field }) {
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

export function CheckboxField({ field }) {
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

export function OptionField({ field }) {
  return (
    <fieldset>
      <legend>{field.title}</legend>

      {field.options.map((value) => (
        <label htmlFor={`${field.name}:${value}`}>
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

export function SelectField({ field }) {
  const innards = (
    <select
      name={field.name}
      id={field.name}
    >
      <option value="">---</option>
      {field.options.map((value) => <option key={value} value={value}>{value}</option>)}
    </select>
  );

  return GenericField(field, innards);
}

export function NameField({ field }) {
  // FIXME Do this automatically, Sasha, you slut.
  const keys = ['first', 'middle', 'last', 'suffix'];
  const innards = (
    <div
      className="name"
    >
      {keys.map((key) => (
        <div key={key} className="subfield">
          <input
            id={`${field.name}:${key}`}
            name={`${field.name}:${key}`}
            size="1"
          />
          <label htmlFor={`${field.name}:${key}`}>{key}</label>
        </div>
      ))}
    </div>
  );

  return GenericField(field, innards);
}

export function NumberField({ field }) {
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

export function EmailField({ field }) {
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

export function DateField({ field }) {
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

export function TelField({ field }) {
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

export function CountyField({ state }) {
  const counties = getCounties(state);
  if (!counties) {
    return '';
  }

  const field = {
    name: 'county',
    title: 'County',
    options: Object.keys(counties),
  };

  return SelectField({ field });
}

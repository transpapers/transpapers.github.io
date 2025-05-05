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

import * as React from "react";

import { Field } from "../types/field";
import { getJurisdiction } from "../types/jurisdiction";

function GenericField(field: Field, innards: JSX.Element): JSX.Element {
  const { name, title, subtitle, required } = field;
  return (
    <label key={name} htmlFor={name}>
      <div key={`${name}-meta`}>
        <span className="title">{title}</span>
        {subtitle ? <span className="subtitle">{subtitle}</span> : ""}
        {required && <span className="required">*</span>}
      </div>
      {innards}
    </label>
  );
}

interface FieldConstructorProps {
  field: Field;
  register: (name: string) => Object;
}

interface CountyFieldConstructorProps {
  jurisdiction: string;
  register: (name: string) => Object;
}

export function StringField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const innards = <input type="text" {...register(field.name)} />;

  return GenericField(field, innards);
}

export function CheckboxField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  return (
    <label key={field.name} htmlFor={field.name} className="checkbox">
      <input
        type="checkbox"
        defaultChecked={field.hasOwnProperty("default") && field.default}
        {...register(field.name)}
      />
      <div>
        <span className="title">{field.title}</span>
        {field.hasOwnProperty("subtitle") ? (
          <span className="subtitle">{field.subtitle}</span>
        ) : (
          ""
        )}
      </div>
    </label>
  );
}

export function OptionField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const options = field.options || {};
  return (
    <fieldset>
      <legend>{field.title}</legend>

      {Object.entries(options).map(([key, value]) => (
        <label key={`${field.name}:${key}`}>
          <input type="radio" {...register(field.name)} value={key} />
          {value}
        </label>
      ))}
    </fieldset>
  );
}

export function SelectField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const options = field.options || {};
  const innards = (
    <select {...register(field.name)}>
      <option key="" value="">
        ---
      </option>
      {Object.entries(options).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );

  return GenericField(field, innards);
}

export function NameField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  // FIXME Do this automatically, Sasha, you slut.
  const keys = ["first", "middle", "last", "suffix"];
  const innards = (
    <div className="name" key={`${field.name}-field`}>
      {keys.map((key) => (
        <div key={`${field.name}:${key}-wrapper`} className="subfield">
          <input
            key={`${field.name}:${key}-input`}
            id={`${field.name}:${key}`}
            name={`${field.name}:${key}`}
            size={1}
            {...register(`${field.name}:${key}`)}
          />
          <label
            key={`${field.name}:${key}-label`}
            htmlFor={`${field.name}:${key}`}
          >
            {key}
          </label>
        </div>
      ))}
    </div>
  );

  return GenericField(field, innards);
}

export function NumberField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      type="number"
      defaultValue={field.hasOwnProperty("default") ? field.default : ""}
      {...register(field.name)}
    />
  );

  return GenericField(field, innards);
}

export function EmailField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      type="email"
      defaultValue={field.hasOwnProperty("default") ? field.default : ""}
      {...register(field.name)}
    />
  );

  return GenericField(field, innards);
}

export function DateField({
  field,
  register,
}: FieldConstructorProps): JSX.Element {
  const innards = (
    <input
      type="date"
      defaultValue={field.hasOwnProperty("default") ? field.default : ""}
      {...register(field.name)}
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
      defaultValue={field.hasOwnProperty("default") ? field.default : ""}
    />
  );

  return GenericField(field, innards);
}

export function CountyField({
  jurisdiction,
  register,
}: CountyFieldConstructorProps) {
  const jurisdictionObj = getJurisdiction(jurisdiction);

  if (!jurisdictionObj) {
    return "";
  }

  const { counties } = jurisdictionObj;
  if (!counties) {
    return "";
  }

  // TODO Fix this??
  const field: Field = {
    name: "county",
    title: "County",
    type: "select",
    options: Object.fromEntries(Object.keys(counties).map((key) => [key, key])),
    required: true,
  };

  return SelectField({ field, register });
}

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

import {
  StringField,
  CheckboxField,
  OptionField,
  SelectField,
  NumberField,
  NameField,
  DateField,
  TelField,
  EmailField,
  CountyField,
} from './fieldsHtml';

import { isMinor } from '../lib/util';

import { Field } from '../types/field';

export const fields: { [key: string]: Field } = {
  legalName: {
    title: 'Full legal name',
    subtitle: 'as it appears on your ID',
    name: 'legalName',
    type: 'Name',
  },
  chosenName: {
    title: 'Full chosen name',
    subtitle: 'as it will appear on your ID',
    name: 'chosenName',
    type: 'Name',
  },
  reasonForNameChange: {
    title: 'Reason for name change',
    subtitle: 'If you want to avoid mentioning transition we recommend “I want to be known legally as I am by my family and friends”.',
    name: 'nameChangeReason',
    type: 'string',
    default: 'Gender transition',
  },
  sealBirthCertificate: {
    title: (
      <>
        I would like to
        {' '}
        <a href="https://en.wikipedia.org/wiki/Sealed_birth_records">
          seal my previous birth certificate.
        </a>
      </>
    ),
    subtitle:
      'This prevents third parties from accessing your deadname and assigned gender at birth.',
    name: 'sealBirthCertificate',
    type: 'boolean',
    default: true,
  },
  birthCity: {
    title: 'City of birth',
    name: 'birthCity',
    type: 'string',
  },
  birthdate: {
    title: 'Date of birth',
    name: 'birthdate',
    type: 'Date',
  },
  age: {
    title: 'Age at time of filing',
    subtitle: 'Fill only if you are under 23.',
    name: 'age',
    type: 'number',
    include: (data) => isMinor(data),
    required: true,
  },
  assignedSex: {
    title: 'Sex assigned at birth',
    name: 'birthSex',
    type: 'option',
    options: { M: 'M', F: 'F', X: 'X' },
  },
  gender: {
    title: 'Gender',
    subtitle: 'as it will appear on your ID',
    name: 'gender',
    type: 'option',
    options: { M: 'M', F: 'F', X: 'X' },
  },
  doNotPublish: {
    title:
      'I have good cause not to publish notice of my name change proceeding.',
    subtitle:
      'such as a known stalker or another such credible, specific threat',
    name: 'doNotPublish',
    type: 'boolean',
  },
  parentsAreOkay: {
    title: 'My parents are both alive and not divorced.',
    name: 'parentsAreOkay',
    type: 'boolean',
    default: true,
  },
  mothersBirthName: {
    title: "Mother's name",
    subtitle: 'at her birth',
    name: 'mothersName',
    type: 'Name',
  },
  mothersBirthdate: {
    title: "Mother's date of birth",
    name: 'mothersBirthdate',
    type: 'Date',
  },
  fathersBirthName: {
    title: "Father's name",
    subtitle: 'at his birth',
    name: 'fathersName',
    type: 'Name',
  },
  fathersBirthdate: {
    title: "Father's date of birth",
    name: 'fathersBirthdate',
    type: 'Date',
  },
  phone: {
    title: 'Daytime phone',
    name: 'phone',
    type: 'tel',
  },
  streetAddress: {
    title: 'Street address',
    subtitle: 'including apartment/PO box/"line 2"',
    name: 'streetAddress',
    type: 'string',
  },
  city: {
    title: 'City of residence',
    name: 'residentCity',
    type: 'string',
  },
  county: {
    title: 'County',
    name: 'county',
    type: 'county',
    required: true,
  },
  zip: {
    title: 'ZIP code',
    name: 'zip',
    type: 'string',
  },
  email: {
    title: 'Email address',
    subtitle: 'We will not email you.',
    name: 'email',
    type: 'email',
  },
  representativeName: {
    title: 'Name of your legal representative',
    subtitle: 'Enter the name of the adult that will appear with you in court.',
    name: 'representativeName',
    type: 'Name',
    include: (data) => isMinor(data),
  },
  passport: {
    title: 'Passport status',
    name: 'passport',
    type: 'select',
    options: {
      ds5504: 'Passport undamaged and issued within last 12 months',
      ds82: 'Passport undamaged and issued at age 16+ within last 15 years',
      ds11: 'None of the above',
    },
  },
};

export function renderField(field: Field, jurisdiction: string) {
  if (!field || !field.hasOwnProperty('type')) {
    return '';
  }

  if (field.type === 'string') {
    return <StringField field={field} />;
  }
  if (field.type === 'boolean') {
    return <CheckboxField field={field} />;
  }
  if (field.type === 'option') {
    return <OptionField field={field} />;
  }
  if (field.type === 'select') {
    return <SelectField field={field} />;
  }
  if (field.type === 'number') {
    return <NumberField field={field} />;
  }
  if (field.type === 'Name') {
    return <NameField field={field} />;
  }
  if (field.type === 'Date') {
    return <DateField field={field} />;
  }
  if (field.type === 'tel') {
    return <TelField field={field} />;
  }
  if (field.type === 'county') {
    return <CountyField jurisdiction={jurisdiction} />;
  }
  if (field.type === 'email') {
    return <EmailField field={field} />;
  }

  return '';
}

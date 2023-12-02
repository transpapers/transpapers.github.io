import { React } from 'react';

import {
  StringField, CheckboxField, OptionField, SelectField, NumberField, NameField, DateField, TelField, CountyField,
} from './fieldsHtml';

export const fields = {
  legalName: {
    title: 'Full legal name',
    subtitle: 'as it appears on your ID',
    name: 'legal-name',
    type: 'Name',
  },
  chosenName: {
    title: 'Full chosen name',
    subtitle: 'as it will appear on your ID',
    name: 'chosen-name',
    type: 'Name',
  },
  reasonForNameChange: {
    title: 'Reason for name change',
    name: 'name-change-reason',
    type: 'string',
    default: 'Gender transition',
  },
  sealBirthCertificate: {
    title: 'I would like to <a href="https://en.wikipedia.org/wiki/Sealed_birth_records">seal my previous birth certificate</a>.',
    subtitle: 'This prevents third parties from accessing your deadname and AGAB.',
    name: 'seal-birth-certificate',
    type: 'boolean',
    default: true,
  },
  birthCity: {
    title: 'City of birth',
    name: 'birth-city',
    type: 'string',
  },
  birthState: {
    // FIXME This needs to be handled up above.
    title: 'State of birth',
    subtitle: 'or foreign country',
    name: 'birth-state',
    type: 'string',
    default: 'Michigan',
  },
  dateOfBirth: {
    title: 'Date of birth',
    name: 'birthdate',
    type: 'Date',
  },
  age: {
    // FIXME This should only appear if minor is set
    title: 'Age at time of filing',
    subtitle: 'Fill only if you are under 23.',
    name: 'age',
    type: 'number',
  },
  assignedSex: {
    title: 'Sex assigned at birth',
    name: 'birth-sex',
    type: 'option',
    options: ['M', 'F', 'X'],
  },
  gender: {
    title: 'Gender',
    subtitle: 'as it will appear on your ID',
    name: 'gender',
    type: 'option',
    options: ['M', 'F', 'X'],
  },
  doNotPublish: {
    title: 'I have good cause not to publish notice of my name change proceeding.',
    subtitle: 'such as a known stalker or another such credible, specific threat',
    name: 'do-not-publish',
    type: 'boolean',
  },
  parentsAreOkay: {
    title: 'My parents are both alive and not divorced.',
    name: 'parents-are-okay',
    type: 'boolean',
    default: true,
  },
  mothersBirthName: {
    title: 'Mother\'s name',
    subtitle: 'at her birth',
    name: 'mothers-name',
    type: 'Name',
  },
  mothersDateOfBirth: {
    title: 'Mother\'s date of birth',
    name: 'mothers-birthdate',
    type: 'Date',
  },
  fathersBirthName: {
    title: 'Father\'s name',
    subtitle: 'at his birth',
    name: 'fathers-name',
    type: 'Name',
  },
  fathersDateOfBirth: {
    title: 'Father\'s date of birth',
    name: 'fathers-birthdate',
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
    name: 'street-address',
    type: 'string',
  },
  city: {
    title: 'City',
    name: 'city',
    type: 'string',
  },
  state: {
    title: 'State',
    name: 'state',
    type: 'string',
  },
  county: {
    title: 'County',
    name: 'county',
    type: 'county',
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
    // FIXME Should appear for minors only.
    title: 'Name of your legal representative',
    subtitle: 'Fill only if you are a legal minor.'
      + 'Enter the name of the adult that will appear with you in court.',
    name: 'representative-name',
    type: 'Name',
  },
};

export function renderField(field, state) {
  if (!field || !field.hasOwnProperty('type')) {
    return '';
  }

  if (field.type === 'string') {
    return <StringField field={field} />;
  } if (field.type === 'boolean') {
    return <CheckboxField field={field} />;
  } if (field.type === 'option') {
    return <OptionField field={field} />;
  } if (field.type === 'select') {
    return <SelectField field={field} />;
  } if (field.type === 'number') {
    return <NumberField field={field} />;
  } if (field.type === 'Name') {
    return <NameField field={field} />;
  } if (field.type === 'Date') {
    return <DateField field={field} />;
  } if (field.type === 'tel') {
    return <TelField field={field} />;
  } if (field.type === 'county') {
    return <CountyField state={state} />;
  }

  return '';
}

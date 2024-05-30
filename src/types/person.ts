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

import { Name, GenderMarker } from './types';

import { Court, FingerprintLocation, Publication } from './county';

/**
 * Applicant's personal information.
 */
export interface Person {
  /**
   * Applicant's legal name.
   */
  legalName: Name | undefined;

  /**
   * Applicant's chosen name.
   */
  chosenName: Name | undefined;

  /**
   * Applicant's birth name, if different from legal name.
   */
  birthName: Name | undefined;

  /**
   * Reason for applicant's name change.
   *
   * @remarks Required by Michigan form ??.
   */
  reasonForNameChange: string | undefined;

  /**
   * Whether to seal applicant's previous birth certificate to prevent access by
   * third parties.
   *
   * @remarks Required by Michigan form ??.
   */
  sealBirthCertificate: boolean | undefined;

  /**
   * Applicant's city of birth.
   */
  birthCity: string | undefined;

  /**
   * Applicant's jurisdiction of birth; state, territory, or foreign country.
   */
  birthJurisdiction: string | undefined;

  /**
   * Applicant's date of birth.
   *
   * @remarks This is Chesterton's fence!! Read before you modify.
   *
   * This, as well as all other birthdate properties, is a string and not a Date
   * for the sake of sanity.
   *
   * One's "date of birth" is a legal abstraction, not a timestamp, which is
   * what a Date represents. In fact, it only needs to be treated as anything
   * other than a string for the purposes of determining majority.
   * There are some further corner cases to consider [0] but it's beyond scope
   * and so handled by the "age" field.
   *
   * If the person was not born in the last 22 [1] years, that is to say, if
   * their legal year of birth is less than the current year minus 22, we don't
   * do any additional date math. We never convert the given DOB to a Date and
   * so avoid philosophically perplexing questions of time by shunting them to
   * whatever remedy the user and the legal system may have.
   *
   * [0] Cf. "Some oddities of the law on age: So you thought you reached age 21
   * on your 21st birthday?", Wilberforce Chambers.
   *
   * [1] In the state of Michigan, this is the last "breakpoint" at which the
   * legal process changes. The other breakpoints are 15 and 18 years. Being
   * that the MI process is particularly onerous, the last breakpoint is
   * most likely 18 in other states.
   */
  birthdate: string | undefined;

  /**
   * The age applicant will be on filing.
   *
   * @remarks Autofilled from `birthdate` if not provided. May be provided for
   * minors who may cross a "breakpoint" between filling and filing forms.
   */
  age: number | undefined;

  /**
   * Applicant's assigned sex at birth.
   */
  assignedSex: GenderMarker | undefined;

  /**
   * Applicant's self-identified gender.
   */
  gender: GenderMarker | undefined;

  /**
   * Whether to withhold publication of the newspaper notice.
   *
   * @remarks Required to determine which forms should be filed for
   * Michiganders.
   */
  doNotPublish: boolean | undefined;

  /**
   * Should be `true` if applicant is a minor with two living, married parents.
   *
   * @remarks Required to determine which forms should be filed for Michigan
   * minors.
   */
  parentsAreOkay: boolean | undefined;

  /**
   * Applicant's mother's birth name.
   */
  mothersBirthName: Name | undefined;

  /**
   * Applicant's mother's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  mothersBirthdate: string | undefined;

  /**
   * Applicant's father's birth name.
   */
  fathersBirthName: Name | undefined;

  /**
   * Applicant's father's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  fathersBirthdate: string | undefined;

  /**
   * Applicant's daytime phone number.
   */
  phone: string | undefined;

  /**
   * Applicant's current street address, including "line 2."
   */
  streetAddress: string | undefined;

  /**
   * Applicant's city of residence.
   */
  residentCity: string | undefined;

  /**
   * Applicant's jurisdiction (state or US territory) of residence.
   *
   * @remarks Filled from step 1.
   */
  residentJurisdiction: string | undefined;

  /**
   * Applicant's county (or equivalent) of residence.
   *
   * @remarks Required for court locations, etc. Filled from Jurisdiction data.
   */
  residentCounty: string | undefined;

  /**
   * Applicant's ZIP code.
   */
  zip: string | undefined;

  /**
   * Applicant's email address.
   */
  email: string | undefined;

  /**
   * Name of applicant's legal representative (parent, guardian, etc.), if
   * applicable.
   *
   * @remarks Only applicable for minors.
   */
  representativeName: Name | undefined;

  /**
   * TODO DOCUMENT THIS
   */
  passport: string | undefined;

  court: Court | undefined;
  fingerprintLocations: FingerprintLocation[] | undefined;
  publications: Publication[] | undefined;
}

export const blankData: Person = {
  legalName: {
    first: '',
    middle: '',
    last: '',
    suffix: '',
  },

  chosenName: {
    first: '',
    middle: '',
    last: '',
    suffix: '',
  },

  birthName: undefined,

  reasonForNameChange: undefined,

  sealBirthCertificate: undefined,
  birthCity: undefined,
  birthJurisdiction: undefined,

  birthdate: undefined,

  age: undefined,

  assignedSex: undefined,
  gender: undefined,

  doNotPublish: undefined,
  parentsAreOkay: undefined,

  mothersBirthName: {
    first: '',
    middle: '',
    last: '',
    suffix: '',
  },

  mothersBirthdate: undefined,

  fathersBirthName: {
    first: '',
    middle: '',
    last: '',
    suffix: '',
  },

  fathersBirthdate: undefined,

  phone: undefined,
  streetAddress: undefined,

  residentCity: undefined,
  residentJurisdiction: undefined,
  residentCounty: undefined,

  zip: undefined,
  email: undefined,

  representativeName: {
    first: '',
    middle: '',
    last: '',
    suffix: '',
  },

  passport: undefined,

  court: undefined,
  fingerprintLocations: undefined,
  publications: undefined,
};

// This should come in handy for documentation purposes.
/**
 * @type {Person}
 */
export const sampleData: Person = {
  legalName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: '',
  },
  chosenName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: '',
  },

  birthName: undefined,

  reasonForNameChange: 'Gender transition',
  sealBirthCertificate: true,
  birthCity: 'New York',
  birthJurisdiction: 'New York',

  birthdate: '2010-01-01',

  age: 13,

  assignedSex: GenderMarker.F,
  gender: GenderMarker.X,

  mothersBirthName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: '',
  },

  doNotPublish: false,
  parentsAreOkay: true,

  mothersBirthdate: '1970-01-01',
  fathersBirthName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: '',
  },

  fathersBirthdate: '1970-01-01',

  phone: '313-555-1234',

  streetAddress: '20 Monroe Street NW',

  residentCity: 'Grand Rapids',
  residentJurisdiction: 'Michigan',
  residentCounty: 'Kent',

  zip: '49503',

  email: 'jdoe@goodmail.com',

  representativeName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: 'Sr.',
  },

  passport: 'ds11',

  court: undefined,
  publications: undefined,
  fingerprintLocations: undefined,
};

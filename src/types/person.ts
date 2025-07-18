/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import { Name, GenderMarker } from "./types";

import { AnyLocality, AnyJurisdiction } from "./generic";

import { michigan, newYork } from "../jurisdiction/all";

/**
 * Applicant's personal information.
 */
export class Person {
  /**
   * Applicant's legal name.
   */
  legalName: Name = new Name();

  /**
   * Applicant's chosen name.
   */
  chosenName: Name = new Name();

  /**
   * Applicant's birth name, if different from legal name.
   */
  birthName: Name = new Name();

  /**
   * Reason for applicant's name change.
   *
   * @remarks Required by most Change of Name petitions.
   */
  reasonForNameChange?: string;

  /**
   * Whether to seal applicant's previous birth certificate to prevent access by
   * third parties.
   *
   * @remarks Required by Michigan form PC 51c.
   */
  sealBirthCertificate?: boolean;

  /**
   * Applicant's city of birth.
   */
  birthCity?: string;

  /**
   * Applicant's jurisdiction of birth; state, territory, or foreign country.
   */
  birthJurisdiction?: AnyJurisdiction;

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
  birthdate?: string;

  /**
   * The age applicant will be on filing.
   *
   * @remarks Autofilled from `birthdate` if not provided. May be provided for
   * minors who may cross a "breakpoint" between filling and filing forms.
   */
  age?: number;

  /**
   * Applicant's assigned sex at birth.
   */
  assignedSex?: GenderMarker;

  /**
   * Applicant's self-identified gender.
   */
  gender?: GenderMarker;

  /**
   * Whether applicant is changing legal name.
   *
   * @remarks To be filled from [...]
   */
  isChangingLegalName?: boolean;

  /**
   * Whether applicant is changing legal sex.
   *
   * @remarks To be filled from [...]
   */
  isChangingLegalSex?: boolean;

  /**
   * Whether to withhold publication of the newspaper notice.
   *
   * @remarks Required to determine between confidential and public
   * court forms in most states. Potentially skips publication step
   * in some state guides as well.
   */
  doNotPublish?: boolean;

  /**
   * Applicant checks this to indicate criminal record.
   *
   * @remarks
   * Should be 'true' if there is a criminal record.
   *
   * Required for certain forms and guide sections as courts
   * often ask this to check for statutory fraud. We use it to determine
   * if the appliant needs additional advice in the guides and to mark
   * forms appropriately. For minors it can be either them or their
   * representative who has one.
   */
  hasCriminalRecord?: boolean;

  /**
   * Should be `true` if applicant is a minor with two living, married parents.
   *
   * @remarks Required to determine which forms should be filed for Michigan
   * minors.
   */
  parentsAreOkay?: boolean;

  /**
   * Applicant's mother's birth name.
   */
  mothersBirthName: Name = new Name();

  /**
   * Applicant's mother's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  mothersBirthdate?: string;

  /**
   * Applicant's father's birth name.
   */
  fathersBirthName: Name = new Name();

  /**
   * Applicant's father's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  fathersBirthdate?: string;

  /**
   * Applicant's daytime phone number.
   */
  phone?: string;

  /**
   * Applicant's current street address, including "line 2."
   */
  streetAddress?: string;

  /**
   * Applicant's city of residence.
   */
  residentCity?: string;

  /**
   * Applicant's jurisdiction (state or US territory) of residence.
   *
   * @remarks Filled from step 1.
   */
  residentJurisdiction?: AnyJurisdiction;

  /**
   * Applicant's county (or equivalent) of residence.
   *
   * @remarks Required for court locations, etc. Filled from Jurisdiction data.
   */
  residentLocality?: AnyLocality;

  /**
   * Applicant's ZIP code.
   */
  zip?: string;

  /**
   * Applicant's email address.
   */
  email?: string;

  /**
   * Name of applicant's legal representative (parent, guardian, etc.), if
   * applicable.
   *
   * @remarks Only applicable for minors.
   */
  representativeName?: Name;

  /**
   * TODO DOCUMENT THIS
   */
  passport?: string;
}

// This should come in handy for documentation purposes.
/**
 * @type {Person}
 */
export const sampleData: Partial<Person> = {
  legalName: {
    first: "Jane",
    middle: "LegalMiddle",
    last: "LeDoe",
  },
  chosenName: {
    first: "John",
    middle: "ChosenMiddle",
    last: "ChDoe",
  },
  birthName: {
    first: "Augustine",
    middle: "BirthMiddle",
    last: "BirthDoe",
  },

  reasonForNameChange: "Gender transition",
  sealBirthCertificate: true,
  birthCity: "New York",
  birthJurisdiction: newYork,

  birthdate: "2010-01-01",

  age: 13,

  assignedSex: GenderMarker.F,
  gender: GenderMarker.X,

  isChangingLegalName: true,
  isChangingLegalSex: true,

  mothersBirthName: {
    first: "Sarah",
    middle: "MomsMiddle",
    last: "MomsDoe",
  },

  doNotPublish: false,
  hasCriminalRecord: false,
  parentsAreOkay: true,

  mothersBirthdate: "1970-01-01",
  fathersBirthName: {
    first: "James",
    middle: "DadsMiddle",
    last: "DadsDoe",
    suffix: "Jr.",
  },

  fathersBirthdate: "1970-01-01",

  phone: "313-867-5309",

  streetAddress: "20 Monroe Street NW",

  residentCity: "Grand Rapids",
  residentJurisdiction: michigan,

  zip: "49503",

  email: "jdoe@goodmail.com",

  representativeName: {
    first: "RepFirst",
    middle: "RepMiddle",
    last: "RepLast",
    suffix: "Sr.",
  },

  passport: "ds11",
};

// This is all of the static fields for person.
/**
 * @type {Person}
 */
export const sampleStaticData: Partial<Person> = {
  legalName: {
    first: "Jane",
    middle: "LegalMiddle",
    last: "LeDoe",
    suffix: "Lt.",
  },
  chosenName: {
    first: "John",
    middle: "ChosenMiddle",
    last: "ChDoe",
    suffix: "Ct.",
  },
  birthName: {
    first: "Augustine",
    middle: "BirthMiddle",
    last: "BirthDoe",
    suffix: "Bt.",
  },

  reasonForNameChange: "Gender transition",
  birthCity: "New York",

  mothersBirthName: {
    first: "Sarah",
    middle: "MomsMiddle",
    last: "MomsDoe",
    suffix: "Mt.",
  },

  mothersBirthdate: "1970-01-01",
  fathersBirthName: {
    first: "James",
    middle: "DadsMiddle",
    last: "DadsDoe",
    suffix: "Ft.",
  },

  fathersBirthdate: "1970-01-01",

  phone: "313-867-5309",

  streetAddress: "20 Monroe Street NW",

  residentCity: "Grand Rapids",
  zip: "49503",

  email: "jdoe@goodmail.com",

  representativeName: {
    first: "RepFirst",
    middle: "RepMiddle",
    last: "RepLast",
    suffix: "Rt.",
  },
};
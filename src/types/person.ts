/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import { Name, GenderMarker, ResidentialAddress, MailingAddress } from "./types";

import { AnyLocality, AnyJurisdiction } from "./generic";

import {
  alaska,
  illinois,
  michigan,
  newYork,
  oregon,
  rhodeIsland,
  california,
} from "../jurisdiction/all";

/*!
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
   * Applicant's county/parish of birth. Some states require this, others don't.
   */
  birthCounty?: string;

  /**
   * Applicant's jurisdiction of birth; state, territory, or foreign country.
   */
  birthJurisdiction?: AnyJurisdiction;

  /**
   * Used to look up birthJurisdiction as a key.
   *
   * @remarks Filled from step 3.
   */
  birthJurisdictionName?: string;

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
   * @remarks Filled from step 5 and finalizeApplicant.
   */
  isChangingLegalName?: boolean;

  /**
   * Whether applicant is changing legal sex.
   *
   * @remarks Filled from step 5 and finalizeApplicant.
   */
  isChangingLegalSex?: boolean;

  /**
   * Whether applicant is changing their birth certificate.
   *
   * @remarks Filled from step 5.
   */
  isChangingBirthCert?: boolean;

  /**
   * Whether applicant is changing their Primary ID.
   *
   * @remarks Filled from step 5.
   */
  isChangingPrimaryID?: boolean;

  /**
   * Whether applicant is changing their Passport.
   *
   * @remarks Filled from step 5 and finalizeApplicant.
   */
  isChangingPassport?: boolean;

  /**
   * Whether applicant is changing their Social Security.
   *
   * @remarks Filled from step 5.
   */
  isChangingSocialSecurity?: boolean;

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
   * @remarks Required to determine which forms should be filed for minors.
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
   * Applicant's current home address, without county or state.
   */
  homeAddress?: ResidentialAddress;

    /**
   * If true the mailing address and residential address are 
   * the same so fill using residential.
   *
   * @remarks Required for many forms for logic or sometimes outright as a checkbox.
   */
  streetEqualsMail?: boolean;

  /**
   * Applicant's current mailing address, including state
   * all as optional strings.
   */
  mailAddress?: MailingAddress;

  /**
   * Applicant's jurisdiction (state or US territory) of residence.
   *
   * @remarks Filled from step 1.
   */
  residentJurisdiction?: AnyJurisdiction;

  /**
   * Used to look up residentJurisdiction as a key.
   *
   * @remarks Filled from step 1.
   */
  residentJurisdictionName?: string;

  /**
   * Applicant's county (or equivalent) of residence.
   *
   * @remarks Required for court locations, etc. Filled from Jurisdiction data.
   */
  residentLocality?: AnyLocality;

  /**
   * Used to look up residentLocality as a key.
   *
   * @remarks Filled from step 2.
   */
  residentLocalityName?: string;

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
   * The selected string determines which passport form to use.
   */
  passport?: string;
}

// This should come in handy for documentation purposes.
/*!
 * @type {Person}
 */
export const sampleData: Person = {
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
  isChangingBirthCert: true,
  isChangingPassport: true,
  isChangingPrimaryID: true,
  isChangingSocialSecurity: true,

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

  fathersBirthdate: "1969-12-30",

  phone: "313-867-5309",

  homeAddress: { 
    apt: "BLDG B, Unit 301",
    street: "20 Monroe Street NW",
    city: "Grand Rapids",
    zip: "49503",
  },

  streetEqualsMail: true,
  residentJurisdiction: michigan,

  email: "jdoe@goodmail.com",

  representativeName: {
    first: "RepFirst",
    middle: "RepMiddle",
    last: "RepLast",
    suffix: "Sr.",
  },

  passport: "ds11",
};

// This is all of the static and dynamic fields for person listed out.
/*!
 * @type {Person}
 */
export const sampleCombinationData = {
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
  sealBirthCertificateTest: [true, false],
  birthCity: "New York",
  birthJurisdictionTest: [
    alaska,
    illinois,
    michigan,
    newYork,
    oregon,
    rhodeIsland,
    california,
  ],

  birthdateTest: ["2010-01-23", "1990-11-23"],
  ageTest: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],

  assignedSexTest: [GenderMarker.F, GenderMarker.M, GenderMarker.X],
  genderTest: [GenderMarker.F, GenderMarker.M, GenderMarker.X],

  isChangingLegalNameTest: [true, false],
  isChangingLegalSexTest: [true, false],

  mothersBirthName: {
    first: "Sarah",
    middle: "MomsMiddle",
    last: "MomsDoe",
    suffix: "Mt.",
  },

  doNotPublishTest: [false, true],
  hasCriminalRecordTest: [false, true],
  parentsAreOkayTest: [true, false],

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
  residentJurisdictionTest: [
    alaska,
    illinois,
    michigan,
    newYork,
    oregon,
    rhodeIsland,
    california,
  ],
  zip: "49503",

  email: "jdoe@goodmail.com",

  representativeName: {
    first: "RepFirst",
    middle: "RepMiddle",
    last: "RepLast",
    suffix: "Rt.",
  },

  passportTest: ["ds11", "ds82", "ds5504"],
};

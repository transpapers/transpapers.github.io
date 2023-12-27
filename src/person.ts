import { Name, GenderMarker } from './types';

/**
 * Applicant's personal information.
 *
 * @remarks The union of every property that may be required by any `Process`.
 * This is why every field is optional.
 */
export interface Person {
  /**
   * Applicant's legal name.
   */
  legalName?: Name,

  /**
   * Applicant's chosen name.
   */
  chosenName?: Name,

  /**
   * Reason for applicant's name change.
   *
   * @remarks Required by Michigan form ??.
   */
  reasonForNameChange?: string,

  /**
   * Whether to seal applicant's previous birth certificate to prevent access by
   * third parties.
   *
   * @remarks Required by Michigan form ??.
   */
  sealBirthCertificate?: boolean,

  /**
   * Applicant's city of birth.
   */
  birthCity?: string,

  /**
   * Applicant's jurisdiction of birth; state, territory, or foreign country.
   */
  birthJurisdiction?: string,

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

   * on your 21st birthday?", Wilberforce Chambers.
   *
   * [1] In the state of Michigan, this is the last "breakpoint" at which the
   * legal process changes. The other breakpoints are 15 and 18 years. Being
   * that the MI process is particularly onerous, the last breakpoint is
   * most likely 18 in other states.
   */
  birthdate?: string,

  /**
   * The age applicant will be on filing.
   *
   * @remarks Autofilled from `birthdate` if not provided. May be provided for
   * minors who may cross a "breakpoint" between filling and filing forms.
   */
  age?: number,

  /**
   * Applicant's assigned sex at birth.
   */
  assignedSex?: GenderMarker,

  /**
   * Applicant's self-identified gender.
   */
  gender?: GenderMarker,

  /**
   * Whether to withhold publication of the newspaper notice.
   *
   * @remarks Required to determine which forms should be filed for
   * Michiganders.
   */
  doNotPublish?: boolean,

  /**
   * Should be `true` if applicant is a minor with two living, married parents.
   *
   * @remarks Required to determine which forms should be filed for Michigan
   * minors.
   */
  parentsAreOkay?: boolean,

  /**
   * Applicant's mother's birth name.
   */
  mothersBirthName?: Name,

  /**
   * Applicant's mother's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  mothersBirthdate?: string,

  /**
   * Applicant's father's birth name.
   */
  fathersBirthName?: Name,

  /**
   * Applicant's father's birthdate.
   *
   * @remarks Cf. `birthdate` field.
   */
  fathersBirthdate?: string,

  /**
   * Applicant's daytime phone number.
   */
  phone?: string,

  /**
   * Applicant's current street address, including "line 2."
   */
  streetAddress?: string,

  /**
   * Applicant's city of residence.
   */
  residentCity?: string,

  /**
   * Applicant's jurisdiction (state or US territory) of residence.
   *
   * @remarks Filled from step 1.
   */
  residentJurisdiction?: string,

  /**
   * Applicant's county (or equivalent) of residence.
   *
   * @remarks Required for court locations, etc. Filled from Jurisdiction data.
   */
  residentCounty?: string,

  /**
   * Applicant's ZIP code.
   */
  zip?: string,

  /**
   * Applicant's email address.
   */
  email?: string,

  /**
   * Name of applicant's legal representative (parent, guardian, etc.), if
   * applicable.
   *
   * @remarks Only applicable for minors.
   */
  representativeName?: Name,

  /**
   * DOCUMENT THIS
   */
  passport?: string,
}

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

  reasonForNameChange: 'Gender transition',
  sealBirthCertificate: true,
  birthCity: 'New York',
  birthJurisdiction: 'New York',

  birthdate: '2010-01-01',

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
};

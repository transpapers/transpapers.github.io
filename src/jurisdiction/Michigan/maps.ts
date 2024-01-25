import {
  formatDate, fullContactInfo, fullName, isMinor, representativeName,
} from '../../util';
import { GenderMarker, DateFormatPart as DATE } from '../../types';
import { Formfill } from '../../formfill';

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then finally federal forms.

/**
 * Petition to Change Name (Michigan form PC 51.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const nameChangeMap: Formfill[] = [
  { text: (applicant) => fullName(applicant.legalName), field: 'In the matter of' },
  { text: (applicant) => fullContactInfo(applicant), field: 'Petitioners name address and telephone no' },
  { check: (applicant) => !isMinor(applicant), field: 'b an adult' },
  { check: (applicant) => isMinor(applicant), field: 'c a minor whose natural or adopted parents are' },
  { text: (applicant) => ((isMinor(applicant) && applicant.parentsAreOkay) ? fullName(applicant.mothersBirthName) : ''), field: 'Parent' },
  { text: (applicant) => ((isMinor(applicant) && applicant.parentsAreOkay) ? fullName(applicant.fathersBirthName) : ''), field: 'and' },
  { text: (applicant) => applicant.reasonForNameChange, field: '3 The name change is for the following reason' },

  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.first ?? ''), field: 'First' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.middle ?? ''), field: 'Middle' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.last ?? ''), field: 'Last' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.first ?? ''), field: 'First_2' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.middle ?? ''), field: 'Middle_2' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.last ?? ''), field: 'Last_2' },

  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.first ?? '' : ''), field: 'First_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.middle ?? '' : ''), field: 'Middle_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.last ?? '' : ''), field: 'Last_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.first ?? '' : ''), field: 'First_6' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.middle ?? '' : ''), field: 'Middle_6' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.last ?? '' : ''), field: 'Last_6' },

  { check: (applicant) => applicant.sealBirthCertificate, field: '9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of' },
  { text: (applicant) => (applicant.sealBirthCertificate ? fullName(applicant.legalName) : ''), field: 'Name_2' },
  { text: () => new Date().toLocaleDateString(), field: 'Date' },
];

/**
 * Petition to Change Name and Ex Parte Request for Nonpublication and
 * Confidential Record (Michigan form PC 51c.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const nameChangePrivateMap: Formfill[] = [
  { text: (applicant) => fullName(applicant.legalName), field: 'In the matter of' },
  { text: (applicant) => fullContactInfo(applicant), field: 'Petitioners name address and telephone no' },
  { check: (applicant) => !isMinor(applicant), field: 'b an adult' },
  { check: (applicant) => isMinor(applicant), field: 'c a minor whose natural or adopted parents are' },
  { text: (applicant) => ((isMinor(applicant) && applicant.parentsAreOkay) ? fullName(applicant.mothersBirthName) : ''), field: 'Parent' },
  { text: (applicant) => ((isMinor(applicant) && applicant.parentsAreOkay) ? fullName(applicant.fathersBirthName) : ''), field: 'and' },
  { text: (applicant) => applicant.reasonForNameChange, field: '3 The name change is for the following reason' },

  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.first ?? ''), field: 'First' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.middle ?? ''), field: 'Middle' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.legalName?.last ?? ''), field: 'Last' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.first ?? ''), field: 'First_2' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.middle ?? ''), field: 'Middle_2' },
  { text: (applicant) => (isMinor(applicant) ? '' : applicant.chosenName?.last ?? ''), field: 'Last_2' },

  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.first ?? '' : ''), field: 'First_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.middle ?? '' : ''), field: 'Middle_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.legalName?.last ?? '' : ''), field: 'Last_5' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.first ?? '' : ''), field: 'First_6' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.middle ?? '' : ''), field: 'Middle_6' },
  { text: (applicant) => (isMinor(applicant) ? applicant.chosenName?.last ?? '' : ''), field: 'Last_6' },

  { check: (applicant) => applicant.sealBirthCertificate, field: '9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of' },
  { text: (applicant) => (applicant.sealBirthCertificate ? fullName(applicant.legalName) : ''), field: 'Name_2' },
  { text: () => new Date().toLocaleDateString(), field: 'Date' },
];

/**
 * Addendum to Personal Protected Identifying Information (Michigan form MC 97a.)
 * @type {Formfill[]}
 */
export const piiMap: Formfill[] = [
  { text: (applicant) => fullName(representativeName(applicant)), field: 'PlaintiffsPetitioners name' },
  { text: (applicant) => fullName(applicant.legalName), field: 'In the matter of' },
  { text: (applicant) => (applicant.doNotPublish ? 'PC 51c' : 'PC 51'), field: 'Name of formdocument that this MC 97a is being filed with 1' },
  { text: (applicant) => `${fullName(representativeName(applicant))} ${new Date().toLocaleDateString()}`, field: 'Name of formdocument that this MC 97a is being filed with 2' },
  { text: (applicant) => fullName(applicant.legalName), field: 'Name' },
  { text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: '/' }), field: 'DOB' },
];

/**
 * Publication of Notice of Hearing for Name Change (Michigan form PC 50.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const noticeMap: Formfill[] = [
  { text: (applicant) => fullName(applicant.legalName), field: 'Current first middle and last names type or print' },
  { text: (applicant) => fullName(applicant.legalName), field: 'Current name' },
  { text: (applicant) => fullName(applicant.chosenName), field: 'Proposed name' },
  { text: (applicant) => (isMinor(applicant) ? fullName(representativeName(applicant)) : fullName(applicant.legalName)), field: 'Petitioners name' },
  { text: () => '1', field: 'times in' },
  { text: () => '1', field: 'copies to' },
  { text: (applicant) => applicant.residentCounty, field: 'in' },
  { text: () => 'Petitioner', field: 'undefined' },
  { check: () => true, field: 'Forward statement for publication charges to' },
  { text: () => 'Petitioner', field: 'undefined_2' },
  { text: (applicant) => fullContactInfo(applicant, ', '), loc: { x: 55, y: 943, fontSize: 8 } },
];

/**
 * Order Following Hearing Regarding Peition For Name Change PC 52.)
 * added 10/2023 for Saginaw County Only.
 * @type {Formfill[]}
 */
export const followingMap: Formfill[] = [
  { text: (applicant) => (isMinor(applicant) ? fullName(representativeName(applicant)) : fullName(applicant.legalName)), field: 'Current first middle and last names type or print' },
];

/**
 * Fee Waiver Request (Michigan form MC 20.)
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  { text: (applicant) => fullContactInfo(applicant), field: 'PlaintiffPetitioners name address and telephone no' },
  { text: (applicant) => fullName(applicant.legalName), field: 'In the matter of' },
  { text: () => new Date().toLocaleDateString(), field: 'Date' },
];

/**
 * Application to Change or Correct a Michigan Birth Record (Michigan form DCH-0847-CHGBX.)
 * @type {Formfill[]}
 */
export const birthCertMap: Formfill[] = [
  {
    text: (applicant) => (isMinor(applicant) ? representativeName(applicant).first : applicant.chosenName?.first ?? ''),
    loc: { x: 48, y: 196 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? representativeName(applicant).middle : applicant.chosenName?.middle ?? ''),
    loc: { x: 337, y: 196 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? representativeName(applicant).last : applicant.chosenName?.last ?? ''),
    loc: { x: 588, y: 196 },
  },
  { text: (applicant) => applicant.streetAddress, loc: { x: 48, y: 237 } },
  { text: (applicant) => `${applicant.residentCity}, ${applicant.residentJurisdiction}`, loc: { x: 388, y: 237 } },
  { text: (applicant) => applicant.zip, loc: { x: 662, y: 237 } },
  { text: (applicant) => applicant.phone, loc: { x: 48, y: 283 } },
  { text: (applicant) => applicant.email, loc: { x: 426, y: 283 } },
  { text: (applicant) => fullName(applicant.legalName), loc: { x: 48, y: 541 } },
  { text: (applicant) => fullName(applicant.legalName), loc: { x: 56, y: 800 } },
  { text: (applicant) => fullName(applicant.chosenName), loc: { x: 433, y: 800 } },
  { text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: '/' }), loc: { x: 534, y: 541 } },
  { text: (applicant) => `${applicant.birthCity}, ${applicant.birthJurisdiction}`, loc: { x: 249, y: 636 } },
  { text: (applicant) => fullName(applicant.mothersBirthName), loc: { x: 48, y: 710 } },
  { text: (applicant) => applicant.mothersBirthdate, loc: { x: 554, y: 710 } },
  { text: (applicant) => fullName(applicant.fathersBirthName), loc: { x: 48, y: 754 } },
  { text: (applicant) => applicant.fathersBirthdate, loc: { x: 554, y: 754 } },
  { text: () => new Date().toLocaleDateString(), loc: { x: 620, y: 956 } },

  { text: (applicant) => (isMinor(applicant) ? '' : 'X'), loc: { x: 50, y: 329 } },
  { text: (applicant) => (isMinor(applicant) ? 'X' : ''), loc: { x: 50, y: 358 } },
  { text: () => 'X', loc: { x: 312, y: 412 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.M ? 'X' : ''), loc: { x: 594, y: 633 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.F ? 'X' : ''), loc: { x: 675, y: 633 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.X ? 'X' : ''), loc: { x: 769, y: 633 } },
];

/**
 * Michigan Dept. of State Sex Designation Form (Michigan form, unnumbered.)
 * @type {Formfill[]}
 */
export const mdosSexMap: Formfill[] = [
  { text: (applicant) => applicant.legalName?.last ?? '', loc: { x: 57, y: 388 } },
  { text: (applicant) => applicant.legalName?.first ?? '', loc: { x: 351, y: 388 } },
  { text: (applicant) => applicant.legalName?.middle ?? '', loc: { x: 600, y: 388 } },
  { text: (applicant) => applicant.legalName?.suffix ?? '', loc: { x: 750, y: 388 } },
  { text: (applicant) => applicant.streetAddress, loc: { x: 57, y: 441 } },
  { text: (applicant) => applicant.residentCity, loc: { x: 351, y: 441 } },
  { text: (applicant) => applicant.zip, loc: { x: 701, y: 441 } },
  { text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: '/' }), loc: { x: 351, y: 489 } },
  { text: (applicant) => fullName(applicant.legalName), loc: { x: 67, y: 555 } },
  { check: (applicant) => applicant.gender === GenderMarker.F, field: 'ChoiceA', select: 'Choice1' },
  { check: (applicant) => applicant.gender === GenderMarker.M, field: 'ChoiceA', select: 'Choice2' },
  { check: (applicant) => applicant.gender === GenderMarker.X, field: 'ChoiceA', select: 'Choice3' },
  { text: () => new Date().toLocaleDateString(), loc: { x: 649, y: 959 } },
];

/**
 * State of Michigan Sex Designation Form (Michigan form, unnumbered.)
 * @type {Formfill[]}
 */
export const miSexMap: Formfill[] = [
  { text: (applicant) => fullName(applicant.legalName), loc: { x: 151, y: 299 } },
  { text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: '/' }), loc: { x: 193, y: 367 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.M ? 'X' : ''), loc: { x: 159, y: 539 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.F ? 'X' : ''), loc: { x: 159, y: 559 } },
  { text: (applicant) => (applicant.assignedSex === GenderMarker.X ? 'X' : ''), loc: { x: 159, y: 579 } },
  { text: (applicant) => (applicant.gender === GenderMarker.M ? 'X' : ''), loc: { x: 486, y: 539 } },
  { text: (applicant) => (applicant.gender === GenderMarker.F ? 'X' : ''), loc: { x: 486, y: 559 } },
  { text: (applicant) => (applicant.gender === GenderMarker.X ? 'X' : ''), loc: { x: 486, y: 579 } },
];

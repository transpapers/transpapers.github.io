/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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

import {
  formatDate,
  fullName,
  isMinor,
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  addZero,
  representativeName,
  getJurisdiction,
  ContactFormat as cf,
  formatContactInfo,
  getNYLocality,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// It's NY State and then NYC forms first, in the order they should be filed;
// then state documents (which need no map information);

/*!
 * Name Change and/or Sex Designation Change Petition for Individual Adult (New York form UCS-NC1.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionMap: Formfill[] = [
  (applicant) => ({
    fieldName: "CourtType",
    value: 
      getNYLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.courtType,
  }),
  (applicant) => ({
    fieldName: "County",
    value: applicant.residentLocalityName,
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PetitionerName",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NameChange",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "SexDesignationChange",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    fieldName: "NewName",
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "•" : "",
    loc: { page: 1, x: 685, y: 64 },
  }),
  (applicant) => ({
    text: !applicant.hasCriminalRecord ? "•" : "",
    loc: { page: 1, x: 753, y: 64 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.reasonForNameChange : "",
    loc: { page: 2, x: 80, y: 121 },
  }),
  (applicant) => ({
    value: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "NewSexDesignation",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "Age",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndCountry),
    fieldName: "CurrentAddress",
  }),
  () => ({ text: new Date().toLocaleDateString(), fieldName: "SignatureDate" }),
  (applicant) => ({
    fieldName: "SealingRequest",
    choice: applicant.doNotPublish ? "Yes" : "No",
  }),
];

/*!
 * Name Change and/or Sex Designation Change Petition for Individual Minor (New York form UCS-NC2.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const minorNameSexPetitionMap: Formfill[] = [
  (applicant) => ({
    fieldName: "CourtType",
    value: 
      getNYLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.courtType,
  }),
  (applicant) => ({
    fieldName: "County",
    value: applicant.residentLocalityName,
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.representativeName) : "",
    fieldName: "PetitionerName",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "MinorName",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "•" : "",
    loc: { x: 72, y: 352 },
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NameChange",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "SexDesignationChange",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    fieldName: "NewName",
  }),
  (applicant) => ({
    fieldName: "ConvictedOfCrime",
    choice: applicant.hasCriminalRecord ? undefined : "TU",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.reasonForNameChange : "",
    fieldName: "ReasonsForNameChangeRequest",
  }),
  (applicant) => ({
    value: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "NewSexDesignation",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "Age",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndCountry),
    fieldName: "CurrentAddress",
  }),
  (applicant) => ({
    fieldName: "SealingRequest",
    choice: applicant.doNotPublish ? "Yes" : "No",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "SignatureDatePetitioner",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "SignatureDateCoPetitioner",
  }),
  (applicant) => ({
    value:
      isMinor(applicant) && applicant.age && applicant.age < 14
        ? applicant.residentLocalityName : "",
    fieldName: "MinorConsentCounty",
  }),
];

/*!
 * Application to Waive Court Costs, Fees, and Expenses (NY State form UCS-FW1.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const feeWaiverNYStateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName
      ? `${applicant.residentLocalityName} county`
      : "",
    fieldName: "CourtName",
  }),
  (applicant) => ({
    fieldName: "CourtCounty",
    value: applicant.residentLocalityName,
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Plaintiffs",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "ApplicantAddress",
  }),
  () => ({
    fieldName: "Request",
    choice: 1,
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? "Waiving the fee for the filing of UCS-NC2"
      : "Waiving the fee for the filing of UCS-NC1",
    fieldName: "CourtOrderOtherSpecify",
  }),
  () => ({
    fieldName: "PreviousFiling",
    choice: "No",
  }),
  () => ({
    fieldName: "Facts",
    choice: 0,
  }),
  () => ({
    fieldName: "PreviousApplication",
    choice: "3",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "ApplicantName",
  }),
];

/*!
 * Affirmation in Support of an Application to Proceed as a Poor Person and to Waive Court Fees (NYC form CIV-GP-15-i.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const feeWaiverNYCMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName,
    loc: { x: 141, y: 44 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 65, y: 109 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    loc: { x: 237, y: 215 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 65, y: 247 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 223, y: 282 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 143, y: 314 },
  }),
  () => ({
    text: "X",
    loc: { x: 150, y: 490 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? "waiving the fee for the filing of UCS-NC2"
      : "waiving the fee for the filing of UCS-NC1",
    loc: { x: 261, y: 488 },
  }),
  () => ({
    text: "X",
    loc: { x: 123, y: 768 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(applicant.representativeName)
      : fullName(applicant.representativeName),
    loc: { x: 154, y: 914 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    loc: { x: 500, y: 914 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 500, y: 947 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 564, y: 972 },
  }),
];

/*!
 * Application for Permit, Driver License or Non-Driver ID Card (New York form MV-44.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDNewYorkMap: Formfill[] = [
  () => ({
    fieldName: "PURPOSE FOR APPLICATION",
    choice: "Update Info",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.last
      : applicant.legalName.last,
    fieldName: "FULL LAST NAME",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.first
      : applicant.legalName.first,
    fieldName: "FULL FIRST NAME",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.middle
      : applicant.legalName.middle,
    fieldName: "FULL MIDDLE NAME",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.suffix
      : applicant.legalName.suffix,
    fieldName: "SUFFIX",
  }),
  (applicant) => ({
    value: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "DATE OF BIRTH Month",
  }),
  (applicant) => ({
    value: addZero(
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    ),
    fieldName: "DATE OF BIRTH Day",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "DATE OF BIRTH Year",
  }),
  (applicant) => ({
    fieldName: "SEX",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M (Male)";
        case GenderMarker.F:
          return "F (Female)";
        case GenderMarker.X:
          return "X (Indeterminate#2funspecified)";
      }
    })(),
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "TELEPHONE NUMBER Home Mobile Area Code",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone) + "-" + phoneEnd(applicant.phone),
    fieldName: "TELEPHONE NUMBER Home Mobile",
  }),
  (applicant) => ({
    fieldName: "Has your name changed",
    choice: applicant.isChangingLegalName ? "Yes" : "No",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName:
      "Has your name changed If Yes print your former name exactly as it appears on your present license or nondriver ID Identification card",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? "New sex designation for a legal sex designation change."
      : "",
    fieldName:
      "OTHER CHANGE What is the change and the reason for it new license class wrong date of birth etc Et cetera",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    fieldName:
      "ADDRESS WHERE YOU LIVE REQUIRED IF DIFFERENT FROM ADDRESS FOR MAIL DO NOT GIVE PO Post OfficeBOX THIS ADDRESS WILL APPEAR ON YOUR ENHANCED REAL ID IDENTITY DOCUMENT",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "ADDRESS WHERE YOU LIVE City or Town",
  }),
  (applicant) => ({
    value: 
      getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "ADDRESS WHERE YOU LIVE State",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "ADDRESS WHERE YOU LIVE Zip Code",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "ADDRESS WHERE YOU LIVE County",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    fieldName: "PLEASE PRINT NAME",
  }),
];

/*!
 * Vehicle Registration/Title of Application (MV-82)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const vehicleRegistrationMap: Formfill[] = [
  () => ({
    fieldName: "I WANT TO",
    choice: "CHANGE A REGISTRATION",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? `${applicant.chosenName.last},
      ${applicant.chosenName.first},
      ${applicant.chosenName.middle}`
      : `${applicant.legalName.last},
      ${applicant.legalName.first},
      ${applicant.legalName.middle}`,
    fieldName: "NAME OF PRIMARY REGISTRANT Last First Middle or Business Name",
  }),
  (applicant) => ({
    fieldName: "PRIMARY REGISTRANT Name Change",
    choice: applicant.isChangingLegalName ? "Yes" : "No",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName: "PRIMARY REGISTRANT FORMER NAME",
  }),
  (applicant) => ({
    value: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "PRIMARY REGISTRANT DATE OF BIRTH Month",
  }),
  (applicant) => ({
    value: addZero(
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    ),
    fieldName: "PRIMARY REGISTRANT DATE OF BIRTH Day",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "PRIMARY REGISTRANT DATE OF BIRTH Year",
  }),
  (applicant) => ({
    fieldName: "PRIMARY REGISTRANT SEX",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M (Male)";
        case GenderMarker.F:
          return "F (Female)";
        case GenderMarker.X:
          return "X (indeterminate#2funspecified) ";
      }
    })(),
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "PRIMARY REGISTRANT TELEPHONE or MOBILE PHONE NUMBER Area Code",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone) + "-" + phoneEnd(applicant.phone),
    fieldName: "PRIMARY REGISTRANT TELEPHONE or MOBILE PHONE NUMBER",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "County of Residence",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName: "Print Name Here",
  }),
];

/*!
 * Application for Amendment of Certificate of Birth for Gender Designation for an Adult (New York State form DOH-5305.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertAdultNYStateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { x: 124, y: 209 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 665, y: 209 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 221, y: 242 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 397, y: 275 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 397, y: 309 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { x: 207, y: 562 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { x: 510, y: 562 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.first
        ? applicant.birthName.first
        : applicant.legalName.first,
    loc: { x: 207, y: 596 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    loc: { x: 510, y: 596 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.middle
        ? applicant.birthName.middle
        : applicant.legalName.middle,
    loc: { x: 207, y: 629 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    loc: { x: 510, y: 629 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.last
        ? applicant.birthName.last
        : applicant.legalName.last,
    loc: { x: 207, y: 663 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.last : "",
    loc: { x: 510, y: 663 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 103, y: 946 },
  }),
];

/*!
 * Parent/Legal Guardian Application for Amendment of Certificate of Birth for Gender Designation for a Minor (New York State form DOH-5306.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertMinorNYStateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { x: 180, y: 200 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 665, y: 200 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 218, y: 234 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 428, y: 267 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 428, y: 300 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { x: 204, y: 517 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { x: 510, y: 517 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.first
        ? applicant.legalName.first
        : applicant.birthName.first,
    loc: { x: 204, y: 550 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    loc: { x: 510, y: 550 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.middle
        ? applicant.legalName.middle
        : applicant.birthName.middle,
    loc: { x: 204, y: 584 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    loc: { x: 510, y: 584 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && applicant.birthName.last
        ? applicant.legalName.last
        : applicant.birthName.last,
    loc: { x: 204, y: 617 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.last : "",
    loc: { x: 510, y: 617 },
  }),
];

/*!
 * Application for the Correction of a NYC Birth Certificate (NYC form VR 172.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertNYCMap: Formfill[] = [
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.chosenName.first,
    fieldName: "S1: First Name",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.middle
      : applicant.chosenName.middle,
    fieldName: "S1: Middle Name",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.last
      : applicant.chosenName.last,
    fieldName: "S1: Last Name",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "S1: City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "S1: State",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "S1: Zip Code",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "S1: Primary Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "S1: Email Address",
  }),
  (applicant) => ({
    text: applicant.birthName.first || applicant.legalName.first,
    fieldName: "S2: First Name 1",
  }),
  (applicant) => ({
    text: applicant.birthName.middle || applicant.legalName.middle,
    fieldName: "S2: Middle Name 1",
  }),
  (applicant) => ({
    text: applicant.birthName.last || applicant.legalName.last,
    fieldName: "S2: Last Name 1",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "S2: Date of Birth",
  }),
  (applicant) => ({
    fieldName: "S2: Gender",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return 1;
        case GenderMarker.F:
          return 2;
        case GenderMarker.X:
          return 3;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.first,
    fieldName: "S2: First Name 2",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    fieldName: "S2: Last Name 2",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "Child's Name" : "",
    fieldName: "S3: What do you want to correct?",
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    fieldName: "S3: What is currently listed on the birth certificate?",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    fieldName: "S3: What should it say on the birth record?",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "Child's Sex" : "",
    fieldName: "S3: What do you want to correct? 1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "S3: What is currently listed on the birth certificate? 1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "S3: What should it say on the birth record? 1",
  }),
  () => ({
    check: true,
    fieldName: "S5: Completed",
  }),
  () => ({
    check: true,
    fieldName: "S5: Payment if applicable",
  }),
  () => ({
    check: true,
    fieldName: "S5: Original or certified documents",
  }),
];

/*!
 * Notarized Affidavit of Gender Change for a Person 17 Years of Age or Older (New York State form DOH-5303.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const genderAffidavitAdultNYStateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { x: 71, y: 188 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 106, y: 746 },
  }),
];

/*!
 * Parent/Legal Guardian Notarized Affidavit of Gender for a Person 16 Years of Age or Under (New York State form DOH-5304.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const genderAffidavitMinorNYStateMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { x: 52, y: 178 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 203, y: 241 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 103, y: 746 },
  }),
];

/*!
 * Self-Attestation Form for Registrants 18 Years of Age and Older (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const selfAttestationAdultNYCMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.first
      : applicant.legalName.first,

    loc: { page: 1, x: 101, y: 138 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.middle
      : applicant.legalName.middle,
    loc: { page: 1, x: 355, y: 138 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.last
      : applicant.legalName.last,
    loc: { page: 1, x: 543, y: 138 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 101, y: 204 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    loc: { page: 1, x: 353, y: 204 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    loc: { page: 1, x: 101, y: 266 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    loc: { page: 1, x: 436, y: 266 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    loc: { page: 1, x: 663, y: 266 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 1, x: 487, y: 336 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { page: 1, x: 230, y: 963 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { page: 1, x: 427, y: 550 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { page: 1, x: 582, y: 550 },
  }),
];

/*!
 * Attestation Form for Named Parents or Legal Guardians of a Registrant Younger Than 18 Years Old (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const selfAttestationMinorNYCMap: Formfill[] = [
  (applicant) => ({
    text: applicant.representativeName?.first,
    loc: { page: 1, x: 103, y: 146 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    loc: { page: 1, x: 354, y: 146 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    loc: { page: 1, x: 542, y: 146 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    loc: { page: 1, x: 353, y: 210 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    loc: { page: 1, x: 101, y: 272 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    loc: { page: 1, x: 436, y: 272 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    loc: { page: 1, x: 663, y: 272 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.first
      : applicant.legalName.first,
    loc: { page: 1, x: 101, y: 792 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.middle
      : applicant.legalName.middle,
    loc: { page: 1, x: 355, y: 792 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.last
      : applicant.legalName.last,
    loc: { page: 1, x: 543, y: 792 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 361, y: 871 },
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 2, x: 116, y: 145 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { page: 2, x: 478, y: 231 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { page: 2, x: 634, y: 231 },
  }),
];

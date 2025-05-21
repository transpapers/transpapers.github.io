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

import {
  formatDate,
  fullName,
  isMinor,
  numericalAge,
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  abbreviateJurisdiction,
  addZero,
  representativeName,
} from "../../lib/util";

import {
  GenderMarker,
  DateFormatPart as DATE,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State/NYC forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Name Change Petition Adult (New York form UCS-NC1.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionMap: Formfill[] = [
  /** 'courtType' field from counties.ts should go here.
   */
  {
    text: (applicant) => applicant.residentCounty,
    field: "County",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PetitionerName",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "NameChange",
  },
  {
    check: (applicant) => applicant.isChangingLegalSex,
    field: "SexDesignationChange",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? 
      fullName(applicant.chosenName) : "",
      field: "NewName",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.birthCity && ", " && applicant.birthJurisdiction : "",
      field: "PlaceOfBirth",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? 
      applicant.reasonForNameChange : "",
      field: "ReasonsForNameChangeRequest-specify",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    field: "NewSexDesignation",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    field: "NewSexDesignation",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    field: "NewSexDesignation",
  },
  {
    text: (applicant) => numericalAge(applicant.birthdate!).toString(),
    field: "Age",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}, USA`,
    field: "CurrentAddress",
  },
  { text: () => new Date().toLocaleDateString(), field: "SignatureDate" },
  /** #28 also has a do not publish radio button with a reason text box below */
];

/**
 * Name Change Petition Minor (New York form UCS-NC2.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const MinorNameSexPetitionMap: Formfill[] = [
  /** 'courtType' field from counties.ts should go here.
   */
  {
    text: (applicant) => applicant.residentCounty,
    field: "County",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? fullName(applicant.representativeName) : "",
    field: "PetitionerName",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "MinorName",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "RelationshipToMinor",
    select: "0",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "NameChange",
  },
  {
    check: (applicant) => applicant.isChangingLegalSex,
    field: "SexDesignationChange",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? 
      fullName(applicant.chosenName) : "",
      field: "NewName",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.birthCity && ", " && applicant.birthJurisdiction : "",
      field: "PlaceOfBirth",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? 
      applicant.reasonForNameChange : "",
      field: "ReasonsForNameChangeRequest",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
      field: "NewSexDesignation",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
      field: "NewSexDesignation",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    field: "NewSexDesignation",
  },
  {
    text: (applicant) => applicant.age!.toString(),
    field: "Age",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}, USA`,
    field: "CurrentAddress",
  },
    /** Do not publish item #28 radio button and text box here. */
  { text: () => new Date().toLocaleDateString(), field: "SignatureDatePetitioner" },
  { text: () => new Date().toLocaleDateString(), field: "SignatureDateCoPetitioner" },
  /** Below is Steph's attempt if Age < 14. This is the only one we need. 
   *  We can drop the check and just autofill it if there is an error.*/
  {
    text: (applicant) => isMinor(applicant) && numericalAge(applicant.birthdate!) < 14 ? applicant.residentCounty : "",
    field: "MinorConsentCounty",
  },
];

/**
 * Application to Waive Court Costs, Fees, and Expenses (NY State form UCS-FW1.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const feeWaiverNYStateMap: Formfill[] = [
  {
    text: (applicant) => `${applicant.residentCounty} county`,
    field: "CourtName",
  },
  {
    text: (applicant) => applicant.residentCounty,
    field: "CourtCounty",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Plaintiffs",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "ApplicantAddress",
  },
  {
    check: () => true,
    field: "Request",
    select: "2",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      "Waiving the fee for the filing of UCS-NC2" :
      "Waiving the fee for the filing of UCS-NC1",
    field: "CourtOrderOtherSpecify",
  },
  {
    check: () => true,
    field: "PreviousFiling",
    select: "No",
  },
  {
    check: () => true,
    field: "Facts",
    select: "0",
  },
  {
    check: () => true,
    field: "PreviousApplication",
    select: "3",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "ApplicantName",
  },
];

/**
 * Affirmation in Support of an Application to Proceed as a Poor Person and to Waive Court Fees (NYC form CIV-GP-15-i.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const feeWaiverNYCMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 141, y: 44 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? fullName(applicant.representativeName) ?? ""
      : fullName(applicant.representativeName) ?? "",
    loc: { x: 65, y: 109 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 237, y: 215 },
  },
  {
    text: (applicant) =>
        isMinor(applicant) ? fullName(applicant.representativeName) ?? ""
            : fullName(applicant.representativeName) ?? "",
    loc: { x: 65, y: 247 },
  },
  {
    text: (applicant) =>
        isMinor(applicant) ? fullName(applicant.representativeName) ?? ""
            : fullName(applicant.representativeName) ?? "",
    loc: { x: 223, y: 282 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 143, y: 314 },
  },
  {
    text: () => "X", loc: { x: 150, y: 490 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
      "waiving the fee for the filing of UCS-NC2" :
      "waiving the fee for the filing of UCS-NC1",
    loc: { x: 261, y: 488 },
  },
  {
    text: () => "X", loc: { x: 123, y: 768 },
  },
  {
    text: (applicant) =>
        isMinor(applicant) ? fullName(applicant.representativeName) ?? ""
            : fullName(applicant.representativeName) ?? "",
    loc: { x: 154, y: 914 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 500, y: 914 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 500, y: 947 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 564, y: 972 },
  },
];

/**
 * Application for Permit, Driver License or Non-Driver ID Card (New York form MV-44.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDNewYorkMap: Formfill[] = [
  {
    check: () => true,
    field: "PURPOSE FOR APPLICATION",
    select: "UPDATE INFO",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.last ?? "" : applicant.legalName?.last ?? "",
    field: "FULL LAST NAME",
  },
  {
      text: (applicant) => applicant.isChangingLegalName ?
          applicant.chosenName?.first ?? "" : applicant.legalName?.first ?? "",
    field: "FULL FIRST NAME",
  },
  {
      text: (applicant) => applicant.isChangingLegalName ?
          applicant.chosenName?.middle ?? "" : applicant.legalName?.middle ?? "",
    field: "FULL MIDDLE NAME",
  },
  {
      text: (applicant) => applicant.isChangingLegalName ?
          applicant.chosenName?.suffix ?? "" : applicant.legalName?.suffix ?? "",
    field: "SUFFIX",
  },
  {
    text: (applicant) =>
        addZero(formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" })),
    field: "DATE OF BIRTH Month",
  },
  {
    text: (applicant) =>
        addZero(formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" })),
    field: "DATE OF BIRTH Day",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    field: "DATE OF BIRTH Year",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "SEX",
    select: "M (Male)",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "SEX",
    select: "F (Female)",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    field: "SEX",
    select: "X (Indeterminate/unspecified)",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "TELEPHONE NUMBER Home Mobile Area Code",
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    field: "TELEPHONE NUMBER Home Mobile",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "Has your name changed",
    select: "Yes",
  },
  {
    check: (applicant) => !applicant.isChangingLegalName,
    field: "Has your name changed",
    select: "No",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? fullName(applicant.legalName) ?? "" : "",
    field:
      "If Yes print your former name exactly as it appears on your present license or nondriver ID Identification card",
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ?
      "New sex designation for a legal sex designation change." : "",
    field:
      "OTHER CHANGE What is the change and the reason for it new license class wrong date of birth etc Et cetera",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field:
      "ADDRESS WHERE YOU LIVE REQUIRED IF DIFFERENT FROM ADDRESS FOR MAIL DO NOT GIVE PO Post OfficeBOX THIS ADDRESS WILL APPEAR ON YOUR ENHANCED REAL ID IDENTITY DOCUMENT",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "ADDRESS WHERE YOU LIVE City or Town",
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    field: "ADDRESS WHERE YOU LIVE State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ADDRESS WHERE YOU LIVE Zip Code",
  },
  {
    text: (applicant) => applicant.residentCounty,
    field: "ADDRESS WHERE YOU LIVE County",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : fullName(applicant.legalName) ?? "",
    field: "PLEASE PRINT NAME",
  },
];

/**
 * Vehicle Registration/Title of Application (MV-82)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const vehicleRegistrationMap: Formfill[] = [
  {
    check: () => true,
    field: "I WANT TO",
    select: "CHANGE A REGISTRATION",
    },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      `${applicant.chosenName?.last ?? ""} 
      ${applicant.chosenName?.first ?? ""} 
      ${applicant.chosenName?.middle ?? ""}` :
      `${applicant.legalName?.last ?? ""} 
      ${applicant.legalName?.first ?? ""} 
      ${applicant.legalName?.middle ?? ""}`,
    field: "NAME OF PRIMARY REGISTRANT Last First Middle or Business Name",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "PRIMARY REGISTRANT Name Change",
    select: "Yes",
  },
  {
    check: (applicant) => !applicant.isChangingLegalName,
    field: "PRIMARY REGISTRANT Name Change",
    select: "No",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
        fullName(applicant.legalName) ?? "" : "",
    field: "PRIMARY REGISTRANT FORMER NAME",
  },
  {
    text: (applicant) =>
        addZero(formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" })),
    field: "PRIMARY REGISTRANT DATE OF BIRTH Month",
  },
  {
    text: (applicant) =>
        addZero(formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" })),
    field: "PRIMARY REGISTRANT DATE OF BIRTH Day",
  },
  {
    text: (applicant) =>
        formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    field: "PRIMARY REGISTRANT DATE OF BIRTH Year",
  },
  /** Radio Button attempt */
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "PRIMARY REGISTRANT SEX",
    select: "M (Male)",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "PRIMARY REGISTRANT SEX",
    select: "F (Female)",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    field: "PRIMARY REGISTRANT SEX",
    select: "X (indeterminate/unspecified) ",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "PRIMARY REGISTRANT TELEPHONE or MOBILE PHONE NUMBER Area Code",
  },
  {
    text: (applicant) =>
        phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    field: "PRIMARY REGISTRANT TELEPHONE or MOBILE PHONE NUMBER",
  },
  {
    text: (applicant) => applicant.residentCounty,
    field: "County of Residence",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
        fullName(applicant.legalName) ?? "" : "",
    field: "Print Name Here",
  },
];

/**
 * BC Update 17 and up NY State (New York State form DOH-5305.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertAdultNYStateMap: Formfill[] = [
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : fullName(applicant.legalName) ?? "",
    loc: { x: 124, y: 209 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 665, y: 209 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 221, y: 242 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 397, y: 275 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 397, y: 309 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 207, y: 562 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 207, y: 562 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 207, y: 562 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "Male" : ""),
    loc: { x: 510, y: 562 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "Female" : ""),
    loc: { x: 510, y: 562 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 510, y: 562 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.first
        ? applicant.birthName?.first ?? ""
        : applicant.legalName?.first ?? "",
    loc: { x: 207, y: 596 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.first ?? "" : "",
    loc: { x: 510, y: 596 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.middle
        ? applicant.birthName?.middle ?? ""
        : applicant.legalName?.middle ?? "",
    loc: { x: 207, y: 629 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.middle ?? "" : "",
    loc: { x: 510, y: 629 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.last
        ? applicant.birthName?.last ?? ""
        : applicant.legalName?.last ?? "",
    loc: { x: 207, y: 663 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.last ?? "" : "",
    loc: { x: 510, y: 663 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 103, y: 946 },
  },
];

/**
 * BC Update Under 17 NY State (New York State form DOH-5306.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertMinorNYStateMap: Formfill[] = [
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : fullName(applicant.legalName) ?? "",
    loc: { x: 180, y: 200 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 665, y: 200 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 218, y: 234 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 428, y: 267 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 428, y: 300 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 204, y: 517 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 204, y: 517 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 204, y: 517 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "Male" : ""),
    loc: { x: 510, y: 517 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "Female" : ""),
    loc: { x: 510, y: 517 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 510, y: 517 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.first
        ? applicant.legalName?.first ?? ""
        : applicant.birthName?.first ?? "",
    loc: { x: 204, y: 550 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.first ?? "" : "",
    loc: { x: 510, y: 550 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.middle
        ? applicant.legalName?.middle ?? ""
        : applicant.birthName?.middle ?? "",
    loc: { x: 204, y: 584 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.middle ?? "" : "",
    loc: { x: 510, y: 584 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && applicant.birthName?.last
        ? applicant.legalName?.last ?? ""
        : applicant.birthName?.last ?? "",
    loc: { x: 204, y: 617 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.last ?? "" : "",
    loc: { x: 510, y: 617 },
  },
];

/**
 * BC Update NYC (NYC form VR 172.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertNYCMap: Formfill[] = [
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.chosenName?.first,
    field: "S1: First Name",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.chosenName?.middle,
    field: "S1: Middle Name",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.chosenName?.last,
    field: "S1: Last Name",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "S1: City",
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    field: "S1: State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "S1: Zip Code",
  },
  {
    text: (applicant) => applicant.phone,
    field: "S1: Primary Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "S1: Email Address",
  },
  {
    text: (applicant) => applicant.birthName?.first
        ? applicant.birthName?.first ?? ""
        : applicant.legalName?.first ?? "",
    field: "S2: First Name 1",
  },
  {
    text: (applicant) => applicant.birthName?.middle
        ? applicant.birthName?.middle
        : applicant.legalName?.middle,
    field: "S2: Middle Name 1",
  },
  {
    text: (applicant) => applicant.birthName?.last
        ? applicant.birthName?.last ?? ""
        : applicant.legalName?.last ?? "",
    field: "S2: Last Name 1",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "S2: Date of Birth",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    field: "S2: Gender",
    select: "0",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    field: "S2: Gender",
    select: "1",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.X,
    field: "S2: Gender",
    select: "2",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.first,
    field: "S2: First Name 2",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last,
    field: "S2: Last Name 2",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "Child's Name" : "",
    field: "S3: What do you want to correct?",
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName && fullName(applicant.birthName)
        ? fullName(applicant.birthName) ?? ""
        : fullName(applicant.legalName) ?? "",
    field: "S3: What is currently listed on the birth certificate?",
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : "",
    field: "S3: What should it say on the birth record?",
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "Child's Sex" : "",
    field: "S3: What do you want to correct? 1",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    field: "S3: What is currently listed on the birth certificate? 1",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    field: "S3: What is currently listed on the birth certificate? 1",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    field: "S3: What is currently listed on the birth certificate? 1",
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "Male" : ""),
    field: "S3: What should it say on the birth record? 1",
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "Female" : ""),
    field: "S3: What should it say on the birth record? 1",
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    field: "S3: What should it say on the birth record? 1",
  },
  {
    check: () => true, field: "S5: Completed",
  },
  {
    check: () => true, field: "S5: Payment if applicable",
  },
  {
    check: () => true, field: "S5: Original or certified documents",
  },
];

/**
 * BC Affidavit 17 and up NY State (New York State form DOH-5303.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const genderAffidavitAdultNYStateMap: Formfill[] = [
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : fullName(applicant.legalName) ?? "",
    loc: { x: 71, y: 188 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 106, y: 746 },
  },
];

/**
 * BC Affidavit Under 17 NY State (New York State form DOH-5304.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const genderAffidavitMinorNYStateMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 52, y: 178 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 203, y: 241 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 103, y: 746 },
  },
];

/**
 * BC Self Attestation Adult NYC (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const selfAttestationAdultNYCMap: Formfill[] = [
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.first ?? "" : applicant.legalName?.first ?? "",
    loc: { page: 1, x: 101, y: 138 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.middle ?? "" : applicant.legalName?.middle ?? "",
    loc: { page: 1, x: 355, y: 138 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.last ?? "" : applicant.legalName?.last ?? "",
    loc: { page: 1, x: 543, y: 138 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 101, y: 204 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 353, y: 204 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 101, y: 266 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    loc: { page: 1, x: 436, y: 266 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 663, y: 266 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 1, x: 487, y: 336 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      fullName(applicant.chosenName) ?? "" : fullName(applicant.legalName) ?? "",
    loc: { page: 1, x: 230, y: 963 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "M" : ""),
    loc: { page: 1, x: 427, y: 550 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "F" : ""),
    loc: { page: 1, x: 427, y: 550 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { page: 1, x: 427, y: 550 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "M" : ""),
    loc: { page: 1, x: 582, y: 550 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "F" : ""),
    loc: { page: 1, x: 582, y: 550 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { page: 1, x: 582, y: 550 },
  },
];

/**
 * BC Self Attestation Minor NYC (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const selfAttestationMinorNYCMap: Formfill[] = [
  {
    text: (applicant) => applicant.representativeName?.first,
    loc: { page: 1, x: 103, y: 146 },
  },
  {
    text: (applicant) => applicant.representativeName?.middle,
    loc: { page: 1, x: 354, y: 146 },
  },
  {
    text: (applicant) => applicant.representativeName?.last,
    loc: { page: 1, x: 542, y: 146 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 353, y: 210 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 101, y: 272 },
  },
  {
    text: (applicant) =>
        abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    loc: { page: 1, x: 436, y: 272 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 663, y: 272 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.first ?? "" : applicant.legalName?.first ?? "",
    loc: { page: 1, x: 101, y: 792 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.middle ?? "" : applicant.legalName?.middle ?? "",
    loc: { page: 1, x: 355, y: 792 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ?
      applicant.chosenName?.last ?? "" : applicant.legalName?.last ?? "",
    loc: { page: 1, x: 543, y: 792 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 361, y: 871 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { page: 2, x: 116, y: 145 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "M" : ""),
    loc: { page: 2, x: 478, y: 231 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "F" : ""),
    loc: { page: 2, x: 478, y: 231 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { page: 2, x: 478, y: 231 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "M" : ""),
    loc: { page: 2, x: 634, y: 231 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "F" : ""),
    loc: { page: 2, x: 634, y: 231 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { page: 2, x: 634, y: 231 },
  },
];

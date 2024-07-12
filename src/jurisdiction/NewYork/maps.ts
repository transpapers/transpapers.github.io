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
} from "../../lib/util";

import {
  GenderMarker,
  isEmptyName,
  DateFormatPart as DATE,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State/NYC forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Name Change Petition Adult (New York form UCS-NC1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionMap: Formfill[] = [
  /** for 'CourtType' field it should return "County" for all but the 5 NYC counties
   * Those should return as "New York City Civil"
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
  /** There is a radio button for do not publish that I made an attempt at below */
  {
    check: (applicant) => applicant.doNotPublish,
    field: "SealingRequest_group_2",
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
    /** New York seperates Name & Sex change request reasons may need new field. */
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
      applicant.streetAddress &&
      " " &&
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      " " &&
      applicant.zip,
    field: "CurrentAddress",
  },
  /** #28 also has a do not publish radio button with a reason text box below */
];

/**
 * Name Change Petition Minor (New York form UCS-NC2.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const MinorNameSexPetitionMap: Formfill[] = [
  /** for 'CourtType' field it should return "County" for all but the 5 NYC counties
   * Those should return as "New York City Civil"
   */
  {
    text: (applicant) => applicant.residentCounty,
    field: "County",
  },
  {
    // This form field can have both parent names, it matters. we will need an additional field
    text: (applicant) =>
      isMinor(applicant) ? fullName(applicant.representativeName) : "",
    field: "PetitionerName",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "MinorName",
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
  /** I think we need a larger discussion for item #22 */
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
      applicant.streetAddress &&
      " " &&
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      " " &&
      applicant.zip,
    field: "CurrentAddress",
  },
  /** Do not publish item #30 radio button and text box here. */
  /** Non-Consenting parent permission section needs a talk through together */
  /** Minors consent section is for minors 14+ and I don't know how to do those if statements */
];

/**
 * Application for Permit, Driver License or Non-Driver ID Card (New York form MV-44.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDNewYorkMap: Formfill[] = [
  {
    /** Radio button should select "Update Info" */
    check: () => true,
    field: "PURPOSE FOR APPLICATION",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "FULL LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FULL FIRST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "FULL MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.suffix ?? "",
    field: "SUFFIX",
  },
  /** Date of birth Month & Day on this form is weird. */
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    field: "DATE OF BIRTH Year",
  },
  /** Sex is a radio button that I don't have the selection field for. */
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "TELEPHONE NUMBER Home Mobile Area Code",
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    field: "TELEPHONE NUMBER Home Mobile",
  },
  /** Radio button for "Has you name changed" should go here */
  {
    text: (applicant) => fullName(applicant.legalName),
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
    text: (applicant) => fullName(applicant.chosenName),
    field: "PLEASE PRINT NAME",
  },
  /** we need to chat about the voter registration section */
];

/**
 * BC Update 17 and up NY State (New York State form DOH-5305.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertAdultNYStateMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 245, y: 445 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 1330, y: 445 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 435, y: 510 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 790, y: 577 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 790, y: 645 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 405, y: 1152 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 405, y: 1152 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 405, y: 1152 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "Male" : ""),
    loc: { x: 1015, y: 1152 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "Female" : ""),
    loc: { x: 1015, y: 1152 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 1015, y: 1152 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
    loc: { x: 405, y: 1220 },
  },
  {
    text: (applicant) => applicant.chosenName?.first,
    loc: { x: 1015, y: 1220 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.middle
        : applicant.birthName?.middle,
    loc: { x: 405, y: 1287 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle,
    loc: { x: 1015, y: 1287 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.last
        : applicant.birthName?.last,
    loc: { x: 405, y: 1354 },
  },
  {
    text: (applicant) => applicant.chosenName?.last,
    loc: { x: 1015, y: 1354 },
  },
  {
    text: (applicant) =>
      applicant.streetAddress &&
      " " &&
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      " " &&
      applicant.zip,
    loc: { x: 200, y: 1920 },
  },
];

/**
 * BC Update Under 17 NY State (New York State form DOH-5306.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertMinorNYStateMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 350, y: 430 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 1330, y: 430 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 435, y: 495 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 850, y: 560 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 840, y: 628 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 405, y: 1061 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 405, y: 1061 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 405, y: 1061 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "Male" : ""),
    loc: { x: 1015, y: 1061 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "Female" : ""),
    loc: { x: 1015, y: 1061 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 1015, y: 1061 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
    loc: { x: 405, y: 1130 },
  },
  {
    text: (applicant) => applicant.chosenName?.first,
    loc: { x: 1015, y: 1130 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.middle
        : applicant.birthName?.middle,
    loc: { x: 405, y: 1195 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle,
    loc: { x: 1015, y: 1195 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.last
        : applicant.birthName?.last,
    loc: { x: 405, y: 1262 },
  },
  {
    text: (applicant) => applicant.chosenName?.last,
    loc: { x: 1015, y: 1262 },
  },
];

/**
 * BC Update NYC (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertNYCMap: Formfill[] = [
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName?.first,
    field: "S1: First Name",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.legalName?.middle,
    field: "S1: Middle Name",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName?.last,
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
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
    field: "S2: First Name 1",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.middle
        : applicant.birthName?.middle,
    field: "S2: Middle Name 1",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.last
        : applicant.birthName?.last,
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
  /** Gender Radio Buttons here */
  {
    text: (applicant) => applicant.mothersBirthName?.first,
    field: "S2: First Name 2",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last,
    field: "S2: Last Name 2",
  },
  {
    /** Need to have discussion about name change or gender change only. */
    text: () => "Child's Name",
    field: "S3: What do you want to correct?",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    field: "S3: What is currently listed on the birth certificate?",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "S3: What should it say on the birth record?",
  },
  {
    /** Need to have discussion about name change or gender change only. */
    text: () => "Child's Sex",
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
];

/**
 * BC Affidavit 17 and up NY State (New York State form DOH-5303.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const genderAffidavitAdultNYStateMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 138, y: 403 },
  },
  {
    text: (applicant) =>
      applicant.streetAddress &&
      " " &&
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      " " &&
      applicant.zip,
    loc: { x: 205, y: 1518 },
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
    loc: { x: 103, y: 385 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 400, y: 512 },
  },
];

/**
 * BC Self Attestation Adult NYC (NYC form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const selfAttestationAdultNYCMap: Formfill[] = [
  {
    text: (applicant) => applicant.legalName?.first,
    loc: { x: 202, y: 305 },
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    loc: { x: 705, y: 305 },
  },
  {
    text: (applicant) => applicant.legalName?.last,
    loc: { x: 1082, y: 305 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 205, y: 435 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 701, y: 435 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 202, y: 560 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    loc: { x: 880, y: 560 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 315, y: 560 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 975, y: 701 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 230, y: 963 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "M" : ""),
    loc: { x: 855, y: 1129 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "F" : ""),
    loc: { x: 855, y: 1129 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 855, y: 1129 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "M" : ""),
    loc: { x: 1165, y: 1129 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "F" : ""),
    loc: { x: 1165, y: 1129 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 1165, y: 1129 },
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
    loc: { x: 205, y: 320 },
  },
  {
    text: (applicant) => applicant.representativeName?.middle,
    loc: { x: 705, y: 320 },
  },
  {
    text: (applicant) => applicant.representativeName?.last,
    loc: { x: 1085, y: 320 },
  },
  {
    text: (applicant) => applicant.legalName?.first,
    loc: { x: 205, y: 1611 },
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    loc: { x: 705, y: 1611 },
  },
  {
    text: (applicant) => applicant.legalName?.last,
    loc: { x: 1085, y: 1611 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 720, y: 1770 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 230, y: 318 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "M" : ""),
    loc: { x: 960, y: 488 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "F" : ""),
    loc: { x: 960, y: 488 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 960, y: 488 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "M" : ""),
    loc: { x: 1265, y: 488 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "F" : ""),
    loc: { x: 1265, y: 488 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 1265, y: 488 },
  },
];

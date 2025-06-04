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

import {
  formatDate,
  fullName,
  isMinor,
  representativeName,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";

import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Petition for Change of Name (Alaska form CIV-700.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNamePetitionAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "courtLocation",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "legalName",
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
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "firstName",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "middleName",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "lastName",
  },
  {
    check: (applicant) => !fullName(applicant.birthName),
    field: "currentLegalN",
    select: "0",
  },
  {
    check: (applicant) => !fullName(applicant.birthName),
    field: "currentLegalN",
    select: "1",
  },
  {
    text: (applicant) => applicant.birthName?.first ?? "",
    field: "firstName0",
  },
  {
    text: (applicant) => applicant.birthName?.middle ?? "",
    field: "middleName0",
  },
  {
    text: (applicant) => applicant.birthName?.last ?? "",
    field: "lastName0",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "firstName1",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "middleName1",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "lastName1",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "reasonForNameChange",
  },
  { text: () => new Date().toLocaleDateString(), field: "date2" },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "mailingAddress",
  },
  {
    text: (applicant) => applicant.phone,
    field: "daytimePhone",
  },
  {
    text: (applicant) => applicant.email,
    field: "email",
  },
];

/**
 * Petition to Change Child's Name (Alaska form CIV-694.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorNamePetitionAlaskaMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.representativeName) ?? "",
    field: "namePetitioner",
  },
  {
    text: (applicant) => applicant.phone,
    field: "phoneNo",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "address",
  },
  {
    text: (applicant) => applicant.email,
    field: "email",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "courtLocation",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "legalName",
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
    text: (applicant) => fullName(applicant.representativeName) ?? "",
    field: "By",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "firstName",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "middleName",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "lastName",
  },
  {
    check: (applicant) => !fullName(applicant.birthName),
    field: "childsCurrentName",
    select: "choice1",
  },
  {
    check: (applicant) => !fullName(applicant.birthName),
    field: "childsCurrentName",
    select: "choice1",
  },
  {
    text: (applicant) => applicant.birthName?.first ?? "",
    field: "firstName0",
  },
  {
    text: (applicant) => applicant.birthName?.middle ?? "",
    field: "middleName0",
  },
  {
    text: (applicant) => applicant.birthName?.last ?? "",
    field: "lastName0",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "firstName1",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "middleName1",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "lastName1",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "parent",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "reasonForNameChange",
  },
  {
    text: (applicant) => fullName(applicant.representativeName) ?? "",
    loc: { page: 1, x: 427, y: 544 },
  },
];

/**
 * Parental Consent from Non-Petitioning Parent (Alaska form CIV-695.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const nonpetitionParentalConsentAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "courtLocations",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "minor",
  },
  {
    text: (applicant) => fullName(applicant.representativeName) ?? "",
    field: "guardian",
  },
  {
    text: (applicant) => fullName(applicant.chosenName) ?? "",
    field: "nameOf",
  },
];

/**
 * Application for Legal Name Change (Alaska form VS-405.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const applicationNameAlaskaMap: Formfill[] = [
  {
    text: (applicant) =>
      applicant.birthName?.first
        ? applicant.birthName?.first ?? ""
        : applicant.legalName?.first ?? "",
    loc: { x: 190, y: 357 },
  },
  {
    text: (applicant) =>
      applicant.birthName?.middle
        ? applicant.birthName?.middle ?? ""
        : applicant.legalName?.middle ?? "",
    loc: { x: 190, y: 386 },
  },
  {
    text: (applicant) =>
      applicant.birthName?.last
        ? applicant.birthName?.last ?? ""
        : applicant.legalName?.last ?? "",
    loc: { x: 190, y: 416 },
  },
  {
    text: (applicant) =>
      applicant.birthName?.suffix
        ? applicant.birthName?.suffix ?? ""
        : applicant.legalName?.suffix ?? "",
    loc: { x: 720, y: 416 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 187, y: 445 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    loc: { x: 433, y: 445 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 708, y: 445 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 225, y: 474 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 264, y: 507 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)) ?? "",
    loc: { x: 50, y: 570 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 435, y: 570 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 50, y: 620 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 435, y: 620 },
  },
];

/**
 * Request to Waive Posting in Adult Change of Name Case (Alaska form CIV-708.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultWaivePublicationAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "location",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "ITMO",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "mailing",
  },
  {
    text: (applicant) => applicant.phone,
    field: "myPhone",
  },
  {
    text: (applicant) => applicant.email,
    field: "myEmail",
  },
];

/**
 * Request to Waive Posting in Child's Change of Name Case (Alaska form CIV-709.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorWaivePublicationAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "location",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "ITMO",
  },
  {
    text: (applicant) => fullName(applicant.representativeName) ?? "",
    field: "petitioner",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "mailing",
  },
  {
    text: (applicant) => applicant.phone,
    field: "myPhone",
  },
  {
    text: (applicant) => applicant.email,
    field: "myEmail",
  },
];

/**
 * Request for Exemption from Payment of Fees (Alaska form TF-920.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const feeWaiverAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "location",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)) ?? "",
    field: "plaintiff",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)) ?? "",
    field: "requestor",
  },
  {
    check: () => true,
    field: "filingFee",
  },
];

/**
 * Affidavit of Additional Service (Alaska form CIV-702.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const additionalServiceAlaskaMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    field: "enter court location here",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "enter name here",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "Adult/Minor",
    select: "Choice1",
  },
  {
    check: (applicant) => isMinor(applicant),
    field: "Adult/Minor",
    select: "Choice2",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)) ?? "",
    field: "yourName",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "mailingAddress",
  },
];

/**
 * Drivers License, Permit, or Identification Card Transaction Application (Alaska form D-1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDAlaskaMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.chosenName) ?? "",
    field: "Text1",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Text3",
  },
  {
    text: (applicant) => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return "";
      }
    },
    field: "Text5",
  },
  {
    text: (applicant) => applicant.email,
    field: "Text10",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Text11",
  },
  {
    text: (applicant) =>
      applicant.birthCity && ", " && applicant.birthJurisdiction,
    field: "Text12",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
      ${applicant.residentJurisdiction} ${applicant.zip}`,
    field: "Text15",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "Check Box41",
  },
  {
    check: (applicant) =>
      !applicant.isChangingLegalName && !fullName(applicant.birthName),
    field: "Check Box42",
  },
  {
    text: (applicant) => {
      switch (applicant.isChangingLegalName) {
        case applicant.isChangingLegalName === true:
          return fullName(applicant.birthName) ?? ""
            ? `${fullName(applicant.legalName)}, ${fullName(applicant.birthName)}`
            : fullName(applicant.legalName) ?? "";
        case applicant.isChangingLegalName === false:
          return fullName(applicant.birthName) ?? "";
        default:
          return "";
      }
    },
    field: "Text43",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? fullName(applicant.representativeName) : "",
    field: "Text64",
  },
];

/**
 * Certification for Change of Sex Designator on Driver License or Identification Card (Alaska form 427.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDSexDesignationAlaskaMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "First Middle Last Suffix",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "I wish the sex designation on my Driver LicenseID Card to read",
    select: "Male",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "I wish the sex designation on my Driver LicenseID Card to read",
    select: "Female",
  },
  {
    text: (applicant) => fullName(applicant.legalName) ?? "",
    field: "Printed Name",
  },
];

/**
 * Alaska Birth Certificate Request Form (Alaska form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertRequestAlaskaMap: Formfill[] = [
  {
    text: (applicant) => fullName(representativeName(applicant)) ?? "",
    field: "Applicant Name",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "Self",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "Parent",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone number",
  },
  {
    check: () => true,
    field: "Other",
  },
  {
    text: () => "Updating information",
    field: "Other Purpose",
  },
  {
    text: (applicant) =>
      applicant.birthName?.first
        ? applicant.birthName?.first ?? ""
        : applicant.legalName?.first ?? "",
    field: "Child first name",
  },
  {
    text: (applicant) =>
      applicant.birthName?.middle
        ? applicant.birthName?.middle ?? ""
        : applicant.legalName?.middle ?? "",
    field: "Child middle name",
  },
  {
    text: (applicant) =>
      applicant.birthName?.last
        ? applicant.birthName?.last ?? ""
        : applicant.legalName?.last ?? "",
    field: "Child last name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City or village of birth",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.first ?? "",
    field: "Parent A first name",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle ?? "",
    field: "Parent A middle name",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    field: "Parent A last name",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.first ?? "",
    field: "Parent B first name",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle ?? "",
    field: "Parent B middle name",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    field: "Parent B last name",
  },
  {
    text: () => "1",
    field: "Amendment",
  },
  {
    text: () => "30",
    field: "Amendment Fee",
  },
  {
    check: () => true,
    field: "ID Included",
  },
];

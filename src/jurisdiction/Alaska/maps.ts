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
  representativeName,
  ContactFormat as cf,
  formatContactInfo,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";

import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/*!
 * Petition for Change of Name (Alaska form CIV-700.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNamePetitionAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "courtLocation",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "legalName",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "firstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "middleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "lastName",
  }),
  (applicant) => ({
    fieldName: "currentLegalN",
    choice: fullName(applicant.birthName) ? "1" : "0",
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    fieldName: "firstName0",
  }),
  (applicant) => ({
    text: applicant.birthName.middle,
    fieldName: "middleName0",
  }),
  (applicant) => ({
    text: applicant.birthName.last,
    fieldName: "lastName0",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "firstName1",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "middleName1",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "lastName1",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "reasonForNameChange",
  }),
  () => ({ text: new Date().toLocaleDateString(), fieldName: "date2" }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "mailingAddress",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "daytimePhone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "email",
  }),
];

/*!
 * Petition to Change Child's Name (Alaska form CIV-694.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorNamePetitionAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.representativeName),
    fieldName: "namePetitioner",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "phoneNo",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "address",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "email",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "courtLocation",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "legalName",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    fieldName: "By",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "firstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "middleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "lastName",
  }),
  (applicant) => ({
    check: !fullName(applicant.birthName),
    fieldName: "childsCurrentName",
    choice: "choice1",
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    fieldName: "firstName0",
  }),
  (applicant) => ({
    text: applicant.birthName.middle,
    fieldName: "middleName0",
  }),
  (applicant) => ({
    text: applicant.birthName.last,
    fieldName: "lastName0",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "firstName1",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "middleName1",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "lastName1",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "parent",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "reasonForNameChange",
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 1, x: 427, y: 544 },
  }),
];

/*!
 * Parental Consent from Non-Petitioning Parent (Alaska form CIV-695.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const nonpetitionParentalConsentAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "courtLocations",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "minor",
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    fieldName: "guardian",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "nameOf",
  }),
];

/*!
 * Application for Legal Name Change (Alaska form VS-405.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const applicationNameAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.birthName.first || applicant.legalName.first,
    loc: { x: 190, y: 357 },
  }),
  (applicant) => ({
    text: applicant.birthName.middle || applicant.legalName.middle,
    loc: { x: 190, y: 386 },
  }),
  (applicant) => ({
    text: applicant.birthName.last || applicant.legalName.last,
    loc: { x: 190, y: 416 },
  }),
  (applicant) => ({
    text: applicant.birthName.suffix ?? applicant.legalName.suffix,
    loc: { x: 720, y: 416 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 187, y: 445 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdictionName ?? "",
    loc: { x: 433, y: 445 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 708, y: 445 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 225, y: 474 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 264, y: 507 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 50, y: 570 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    loc: { x: 435, y: 570 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 50, y: 620 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 435, y: 620 },
  }),
];

/*!
 * Request to Waive Posting in Adult Change of Name Case (Alaska form CIV-708.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultWaivePublicationAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "location",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "ITMO",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "mailing",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "myPhone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "myEmail",
  }),
];

/*!
 * Request to Waive Posting in Child's Change of Name Case (Alaska form CIV-709.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorWaivePublicationAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "location",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "ITMO",
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    fieldName: "petitioner",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "mailing",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "myPhone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "myEmail",
  }),
];

/*!
 * Request for Exemption from Payment of Fees (Alaska form TF-920.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const feeWaiverAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "courtLocation",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "plaintiff",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "requestor",
  }),
  () => ({
    check: true,
    fieldName: "filingFee",
  }),
];

/*!
 * Affidavit of Additional Service (Alaska form CIV-702.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const additionalServiceAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "enter court location here",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "enter name here",
  }),
  (applicant) => ({
    fieldName: "Adult/Minor",
    choice: isMinor(applicant) ? "Choice2" : "Choice1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "yourName",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "mailingAddress",
  }),
];

/*!
 * Drivers License, Permit, or Identification Card Transaction Application (Alaska form D-1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Text1",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Text3",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return "";
      }
    })(),
    fieldName: "Text5",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Text10",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Text11",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "Text12",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Text15",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "Check Box41",
  }),
  (applicant) => ({
    check: !applicant.isChangingLegalName && !fullName(applicant.birthName),
    fieldName: "Check Box42",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? `${fullName(applicant.legalName)}, ${fullName(applicant.birthName)}`
            : fullName(applicant.legalName);
        case false:
          return fullName(applicant.birthName);
        default:
          return "";
      }
    })(),
    fieldName: "Text43",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.representativeName) : "",
    fieldName: "Text64",
  }),
];

/*!
 * Certification for Change of Sex Designator on Driver License or Identification Card (Alaska form 427.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const primaryIDSexDesignationAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "First Middle Last Suffix",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    fieldName: "I wish the sex designation on my Driver LicenseID Card to read",
    choice: (() => {
      if (applicant.gender === GenderMarker.M) {
        return "Male";
      } else if (applicant.gender === GenderMarker.F) {
        return "Female";
      } else {
        return undefined;
      }
    })(),
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Printed Name",
  }),
];

/*!
 * Alaska Birth Certificate Request Form (Alaska form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertRequestAlaskaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicant Name",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "Self",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "Parent",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone number",
  }),
  () => ({
    check: true,
    fieldName: "Other",
  }),
  () => ({
    text: "Updating information",
    fieldName: "Other Purpose",
  }),
  (applicant) => ({
    text: applicant.birthName.first || applicant.legalName.first,
    fieldName: "Child first name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle || applicant.legalName.middle,
    fieldName: "Child middle name",
  }),
  (applicant) => ({
    text: applicant.birthName.last || applicant.legalName.last,
    fieldName: "Child last name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City or village of birth",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.first,
    fieldName: "Parent A first name",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.middle,
    fieldName: "Parent A middle name",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    fieldName: "Parent A last name",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.first,
    fieldName: "Parent B first name",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.middle,
    fieldName: "Parent B middle name",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.last,
    fieldName: "Parent B last name",
  }),
  () => ({
    text: "1",
    fieldName: "Amendment",
  }),
  () => ({
    text: "30",
    fieldName: "Amendment Fee",
  }),
  () => ({
    check: true,
    fieldName: "ID Included",
  }),
];

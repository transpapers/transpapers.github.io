/**
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckn
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
  formatContactInfo,
  ContactFormat as cf,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Request for Name Change (Illinois form ATJ 303.10) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultNameChangeMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 185, y: 170 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "2 - Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "4 - First Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "5 - Middle Name",
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "6 - Last Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "7 - First Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "8 - Middle Name",
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    fieldName: "9 - Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "11 - Date of Birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 255, y: 865 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    loc: { x: 540, y: 865 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.abbreviation ? "USA" : "",
    loc: { x: 660, y: 865 },
  }),
  () => ({
    check: true,
    fieldName: "13 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "16 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "17 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "18 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "19 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "20 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "f - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "22 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "69 - Signature",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "70 - Print Your Name",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "71 - Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "73 - Email",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "74 - Address",
  }),
];

/**
 * Order for Name Change (Illinois form ATJ 305.7) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultNameChangeOrderMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 185, y: 170 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "2 - Current Legal Name",
  }),
];

/**
 * Request for Name Change (Illinois form NCM-R 2003.5) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorNameChangeMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 175, y: 165 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "4 - First Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "5 - Middle Name",
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "6 - Last Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "7 - First Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "8 - Middle Name",
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    fieldName: "9 - Last Name",
  }),
  () => ({
    check: true,
    fieldName: "29 - Checkbox",
  }),
  () => ({
    check: true,
    fieldName: "29a - Checkbox",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "31 - Signature",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "32 -  Print Your Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "33 - Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "34 - Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "36 - Email",
  }),
];

/**
 * Request for Name Change - Child Information (Illinois form NCM-CI 2004.5)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChildInfoMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 175, y: 198 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "4 - First Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "5 - Middle Name",
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "6 - Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "7 - Date of Birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 277, y: 712 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    loc: { x: 585, y: 712 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.abbreviation ? "USA" : "",
    loc: { x: 700, y: 712 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "9 - Address",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "11 - Checkboxes",
    choice: "parent with custody/parental decision-making responsibility",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "12 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "13 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "14 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "15 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "16 - Checkboxes",
    choice: "No",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "18 - Checkboxes",
    choice: "No",
  }),
  () => ({
    check: true,
    fieldName: "34 - Checkboxes",
  }),
  () => ({
    check: true,
    fieldName: "35 - Checkboxes",
  }),
  (applicant) => ({
    check: applicant.reasonForNameChange ? true : false,
    fieldName: "36 - Checkboxes",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange ?? applicant.reasonForNameChange,
    fieldName: "38 - Other",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "40a - Checkbox",
    choice: "Name and Address of Other Parent",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "45 - Checkbox",
    choice: "Yes",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "46 - Checkbox",
    choice: "No",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "47 - Checkbox",
    choice: "No",
  }),
];

/**
 * Additional Parent Request for Name Change (Illinois form NCM-AP 2006.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorAdditionalParentMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 175, y: 201 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Name",
  }),
];

/**
 * Order for Name Change (Illinois form NCM-O 2009.5) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorNameChangeOrderMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 180, y: 265 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Name",
  }),
];

/**
 * Motion to Impound (Make Court Records Private) (Illinois form ATJ 308.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const requestCourtRecordsPrivateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 185, y: 204 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Current Legal Name",
  }),
  (applicant) => ({
    check: !isMinor(applicant) && applicant.isChangingLegalSex,
    fieldName: "4 - Hardship",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "75 - Signature",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "76 - Print Your Name",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "77 - Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "79 - Email",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "80 - Address",
  }),
];

/**
 * Order on Motion to Impound (Make Court Records Private) (Illinois form ATJ 309.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const orderCourtRecordsPrivateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 185, y: 204 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 225, y: 283 },
  }),
];

/**
 * Application for Waiver of Court Fees (Civil) (Illinois form WA-P 603.8)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverApplicationMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 160, y: 196 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Plaintiff/Petitioner or In RE",
  }),
  () => ({
    check: true,
    fieldName: "5 - Checkboxes",
    choice: "For Myself",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "6 - Your Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "7 - Address",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "112 - Signature",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "113 - Print Your Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "114 - Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "115 - Telephone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "117 - Email",
  }),
];

/**
 * Order on Application for Waiver of Court Fees (Civil) (Illinois form WA-O 604.7)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverJudgementMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 160, y: 203 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2 - Plaintiff/Petitioner or In RE",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "5 - Your Name",
  }),
];

/**
 * Certification for Exemption from E-Filing (Illinois form EW-C 3401.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const efileExemptionMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 170, y: 171 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "2",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "9",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "10",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "11",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "13",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "14",
  }),
];

/**
 * Gender Designation Change Form (Illinois form DSD A 329.3)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const dmvGenderDesignationMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "1",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "2",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "3",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix ?? "",
    fieldName: "4",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "6",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "8",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    fieldName: "9",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "10",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "11",
  }),
  (applicant) => ({
    check: applicant.gender,
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Yes";
        case GenderMarker.F:
          return "No";
        case GenderMarker.X:
          return "43";
      }
    })(),
    fieldName: "cb1",
  }),
];

/**
 * State of Illinois Affidavit and Certificate of Correction Request (Illinois form IOCI 19-184)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertCorrectionMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Requesting Correction to: - Birth",
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return fullName(applicant.representativeName);
        case false:
          return applicant.isChangingLegalName
            ? fullName(applicant.chosenName)
            : fullName(applicant.legalName);
        default:
          return "";
      }
    })(),
    fieldName: "Name of Applicant",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : "Self",
    fieldName: "relationship",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Name currently on record",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of birth or death",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "MotherCoparents legal name prior to first marriagecivil union",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "FatherCoparents legal name prior to first marriagecivil union",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "Name" : "",
    fieldName: "What you want corrected 1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? fullName(applicant.birthName)
            : fullName(applicant.legalName);
        case false:
          return "";
        default:
          return "";
      }
    })(),
    fieldName: "How it reads now 1",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    fieldName: "How it should read 1",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "Sex Designation" : "",
    fieldName: "What you want corrected 2",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case applicant.isChangingLegalSex && GenderMarker.M:
          return "Male";
        case applicant.isChangingLegalSex && GenderMarker.F:
          return "Female";
        case applicant.isChangingLegalSex && GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "How it reads now 2",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case applicant.isChangingLegalSex && GenderMarker.M:
          return "Male";
        case applicant.isChangingLegalSex && GenderMarker.F:
          return "Female";
        case applicant.isChangingLegalSex && GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "How it should read 2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 545, y: 652 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City state and ZIP code",
  }),
];

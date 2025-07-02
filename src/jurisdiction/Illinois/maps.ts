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
  abbreviateJurisdiction,
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
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 185, y: 170 },
  }, 
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "2 - Name",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "4 - First Name",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "5 - Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "6 - Last Name",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "7 - First Name",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "8 - Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.suffix ?? ""}`,
    field: "9 - Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "11 - Date of Birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 255, y: 865 },
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    loc: { x: 540, y: 865 },
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? "") 
      ? "USA" : "",
    loc: { x: 660, y: 865 },
  },
  {
    check: () => true,
    field: "13 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "16 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "17 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "18 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "19 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "20 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "f - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "22 - Checkboxes",
    select: "No",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "69 - Signature",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "70 - Print Your Name",
  },
  {
    text: (applicant) => applicant.phone,
    field: "71 - Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "73 - Email",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "74 - Address",
  },
];

/**
 * Order for Name Change (Illinois form ATJ 305.7) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultNameChangeOrderMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 185, y: 170 },
  }, 
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "2 - Current Legal Name",
  },
];

/**
 * Request for Name Change (Illinois form NCM-R 2003.5) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorNameChangeMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 175, y: 165 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Name",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "4 - First Name",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "5 - Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "6 - Last Name",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "7 - First Name",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "8 - Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.suffix ?? ""}`,
    field: "9 - Last Name",
  },
  {
    check: () => true,
    field: "29 - Checkbox",
  },
  {
    check: () => true,
    field: "29a - Checkbox",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "31 - Signature",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "32 -  Print Your Name",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "33 - Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "34 - Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "36 - Email",
  },
];

/**
 * Request for Name Change - Child Information (Illinois form NCM-CI 2004.5)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChildInfoMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 175, y: 198 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Name",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "4 - First Name",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "5 - Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    field: "6 - Last Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "7 - Date of Birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 277, y: 712 },
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    loc: { x: 585, y: 712 },
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.birthJurisdiction ?? "") 
      ? "USA" : "",
    loc: { x: 700, y: 712 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "9 - Address",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "11 - Checkboxes",
    select: "parent with custody/parental decision-making responsibility",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "12 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "13 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "14 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "15 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "16 - Checkboxes",
    select: "No",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "18 - Checkboxes",
    select: "No",
  },
  {
    check: () => true,
    field: "34 - Checkboxes",
  },
  {
    check: () => true,
    field: "35 - Checkboxes",
  },
  {
    check: (applicant) => applicant.reasonForNameChange ? true : false,
    field: "36 - Checkboxes",
  },
  {
    text: (applicant) => applicant.reasonForNameChange ?? 
      applicant.reasonForNameChange,
    field: "38 - Other",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "40a - Checkbox",
    select: "Name and Address of Other Parent",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "45 - Checkbox",
    select: "Yes",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "46 - Checkbox",
    select: "No",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "47 - Checkbox",
    select: "No",
  },
];

/**
 * Additional Parent Request for Name Change (Illinois form NCM-AP 2006.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorAdditionalParentMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 175, y: 201 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Name",
  },
];

/**
 * Order for Name Change (Illinois form NCM-O 2009.5) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorNameChangeOrderMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 180, y: 265 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Name",
  },
];

/**
 * Motion to Impound (Make Court Records Private) (Illinois form ATJ 308.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const requestCourtRecordsPrivateMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 185, y: 204 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Current Legal Name",
  },
  {
    check: (applicant) => !isMinor(applicant) && applicant.isChangingLegalSex,
    field: "4 - Hardship",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "75 - Signature",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "76 - Print Your Name",
  },
  {
    text: (applicant) => applicant.phone,
    field: "77 - Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "79 - Email",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "80 - Address",
  },
];

/**
 * Order on Motion to Impound (Make Court Records Private) (Illinois form ATJ 309.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const orderCourtRecordsPrivateMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 185, y: 204 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 225, y: 283 },
  },
];

/**
 * Application for Waiver of Court Fees (Civil) (Illinois form WA-P 603.8)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverApplicationMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 160, y: 196 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Plaintiff/Petitioner or In RE",
  },
  {
    check: () => true,
    field: "5 - Checkboxes",
    select: "For Myself",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "6 - Your Name",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "7 - Address",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "112 - Signature",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "113 - Print Your Name",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "114 - Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "115 - Telephone",
  },
  {
    text: (applicant) => applicant.email,
    field: "117 - Email",
  },
];

/**
 * Order on Application for Waiver of Court Fees (Civil) (Illinois form WA-O 604.7)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverJudgementMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 160, y: 203 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2 - Plaintiff/Petitioner or In RE",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "5 - Your Name",
  },
];

/**
 * Certification for Exemption from E-Filing (Illinois form EW-C 3401.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const efileExemptionMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 170, y: 171 },
  }, 
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "2",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "9",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "10",
  },
  {
    text: (applicant) => applicant.phone,
    field: "11",
  },
  {
    text: (applicant) => applicant.email,
    field: "13",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "14",
  },
];

/**
 * Gender Designation Change Form (Illinois form DSD A 329.3)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const dmvGenderDesignationMap: Formfill[] = [
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "1",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "2",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "3",
  },
  {
    text: (applicant) => applicant.legalName?.suffix ?? "",
    field: "4",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "6",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "8",
  },
  {
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
    field: "9",
  },
  {
    text: (applicant) => applicant.zip,
    field: "10",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "11",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "cb1",
    select: "Yes",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "cb1",
    select: "No",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    field: "cb1",
    select: "43",
  },
];

/**
 * State of Illinois Affidavit and Certificate of Correction Request (Illinois form IOCI 19-184)
 * Updated 7/2025.
 * @type {Formfill[]}
 */
export const birthCertCorrectionMap: Formfill[] = [
  {
    check: () => true,
    field: "Requesting Correction to: - Birth",
  },
  {
    text: (applicant) => {
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
    },
    field: "Name of Applicant",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? "" : "Self",
    field: "relationship",
  },
  {
    text: (applicant) => fullName(applicant.birthName)
      ? fullName(applicant.birthName) 
      : fullName(applicant.legalName),
    field: "Name of Applicant",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of birth or death",
  },
  {
    text: (applicant) => 
      fullName(applicant.mothersBirthName),
    field: "MotherCoparents legal name prior to first marriagecivil union",
  },
  {
    text: (applicant) => 
      fullName(applicant.fathersBirthName),
    field: "FatherCoparents legal name prior to first marriagecivil union",
  },
  {
    text: (applicant) => applicant.isChangingLegalName 
      ? "Name" : "",
    field: "What you want corrected 1",
  },
  {
    text: (applicant) => {
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
    },
    field: "How it reads now 1",
  },
  {
    text: (applicant) => applicant.isChangingLegalName 
      ? fullName(applicant.chosenName) : "",
    field: "How it should read 1",
  },
  {
    text: (applicant) => applicant.isChangingLegalSex 
      ? "Sex Designation" : "",
    field: "What you want corrected 2",
  },
  {
    text: (applicant) => {
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
    },
    field: "How it reads now 2",
  },
  {
    text: (applicant) => {
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
    },
    field: "How it should read 2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 545, y: 652 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "City state and ZIP code",
  },
];

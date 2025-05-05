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
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Change of Name (Rhode Island form PC8.1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const changeOfNameMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentCounty,
    field: "Combo Box 4",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "6",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "7",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "8",
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    field: "9",
  },
  {
    text: (applicant) => applicant.zip,
    field: "10",
  },
  {
    text: (applicant) => applicant.phone,
    field: "11",
  },
  {
    text: (applicant) => applicant.email,
    field: "15",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    field: "17",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "18",
  },
  {
    text: (applicant) => applicant.birthCity && ", " &&
    applicant.birthJurisdiction,
    field: "19",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "20",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "21",
  },
  {
    check: (applicant) => isEmptyName!(applicant.birthName),
    loc: { x: 886, y: 1312 },
  },
  {
    check: (applicant) => isEmptyName(applicant.birthName),
    loc: { x: 981, y: 1312 },
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "27",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "29",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "30",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "31",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "32",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "33",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "34",
  },
];

/**
 * State of Rhode Island BCI Disclaimer Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const bciMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 355, y: 555 },
  },
  {
    text: (applicant) => fullName(applicant.birthName),
    loc: { x: 465, y: 670 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 365, y: 748 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 275, y: 925 },
  },
  // Something else goes on this form, not sure what though
];

/**
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertOneMap: Formfill[] = [
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    loc: { x: 365, y: 427 },
  },
  {
    text: (applicant) => numericalAge(applicant.birthdate!).toString(),
    loc: { x: 1245, y: 420 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    loc: { x: 805, y: 453 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 302, y: 488 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 830, y: 484 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 575, y: 521 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 570, y: 553 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "" : "X"),
    loc: { x: 204, y: 674 },
  },
  {
    text: () => "X",
    loc: { x: 596, y: 1106 },
  },
  {
    text: () => "Name Change",
    loc: { x: 879, y: 1115 },
  },
  {
    text: () => "1",
    loc: { x: 337, y: 1257 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : fullName(applicant.legalName),
    loc: { x: 405, y: 1480 },
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { x: 1220, y: 1479 },
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    loc: { x: 1330, y: 1479 },
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
    loc: { x: 430, y: 1575 },
  },
];

/**
 * State of Rhode Island Application for License, Identification Card and Permit Form (Rhode Island form, LI-1.)
 * @type {Formfill[]}
 */
export const primaryIDRhodeIslandMap: Formfill[] = [
  {
    text: (applicant) => applicant.legalName?.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.suffix,
    field: "SUFFIX",
  },
  {
    text: (applicant) => applicant.birthdate,
    field: "DATE OF BIRTH MMDDYY",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { x: 401, y: 860 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { x: 503, y: 860 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 600, y: 860 },
  },
  {
    text: (applicant) => applicant.email,
    field: "EMAIL ADDRESS",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "STREET ADDRESS RESIDENCE ADDRESS",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "CITYTOWN",
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    field: "STATE",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP CODE",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "Text5",
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    field: "TELEPHONE",
  },
  /** ask Sasha about birth jusisdiction to check state/country */
  {
    text: (applicant) => applicant.birthCity,
    field: "CITY",
  },
];

/**
 * State of Rhode Island Gender Designation on a License or Identification Card Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const genderIDMap: Formfill[] = [
  {
    text: (applicant) => applicant.legalName?.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.suffix,
    field: "SUFFIX",
  },
  {
    text: (applicant) => applicant.birthdate,
    field: "DATE OF BIRTH MMDDYY",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "RESIDENCE ADDRESS STREET ADDRESS",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "CITYTOWN",
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || ""),
    field: "STATE",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP CODE",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "I",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { x: 113, y: 1714 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { x: 238, y: 1714 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 362, y: 1714 },
  },
];

/**
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertTwoMap: Formfill[] = [
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    loc: { x: 365, y: 427 },
  },
  {
    text: (applicant) => numericalAge(applicant.birthdate!).toString(),
    loc: { x: 1245, y: 420 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? fullName(applicant.legalName)
        : fullName(applicant.birthName),
    loc: { x: 805, y: 453 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 302, y: 488 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 830, y: 484 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 575, y: 521 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 570, y: 553 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "" : "X"),
    loc: { x: 204, y: 674 },
  },
  {
    text: () => "X",
    loc: { x: 596, y: 1106 },
  },
  {
    text: () => "Updating record to match new legal name.",
    loc: { x: 879, y: 1115 },
  },
  {
    text: () => "1",
    loc: { x: 337, y: 1257 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : fullName(applicant.legalName),
    loc: { x: 405, y: 1480 },
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { x: 1220, y: 1479 },
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    loc: { x: 1330, y: 1479 },
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
    loc: { x: 430, y: 1575 },
  },
];

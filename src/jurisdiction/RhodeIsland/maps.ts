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
  representativeName,
} from "../../lib/util";

import {
  GenderMarker,
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
    text: (applicant) => fullName(representativeName(applicant)),
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
          fullName(applicant.birthName),
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
    text: (applicant) =>
      applicant.birthCity && ", " && applicant.birthJurisdiction,
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
    text: (applicant) => applicant.reasonForNameChange,
    field: "27",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : applicant.chosenName?.first ?? "",
    field: "29",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : applicant.chosenName?.middle ?? "",
    field: "30",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : applicant.chosenName?.last ?? "",
    field: "31",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? applicant.chosenName?.first ?? "" : "",
    field: "32",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? applicant.chosenName?.middle ?? "" : "",
    field: "33",
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? applicant.chosenName?.last ?? "" : "",
    field: "34",
  },
];

/**
 * State of Rhode Island BCI Disclaimer Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const bciMap: Formfill[] = [
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 265, y: 217 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? "" : fullName(applicant.birthName) ?? "",
    loc: { x: 337, y: 244 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? ""
        : formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
          }) ?? "",
    loc: { x: 199, y: 270 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity},
        ${applicant.residentJurisdiction} ${applicant.zip}`,
    loc: { x: 249, y: 296 },
  },
  {
    text: () => "name change",
    loc: { x: 164, y: 348 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 113, y: 447 },
  },
];

/**
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertOneMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.birthName),
    loc: { x: 184, y: 213 },
  },
  {
    text: (applicant) => numericalAge(applicant.birthdate!).toString(),
    loc: { x: 621, y: 212 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 150, y: 246 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 415, y: 244 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 289, y: 260 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 289, y: 277 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "" : "X"),
    loc: { x: 102, y: 337 },
  },
  {
    text: () => "X",
    loc: { x: 297, y: 553 },
  },
  {
    text: () => "Name Change",
    loc: { x: 442, y: 554 },
  },
  {
    text: () => "One",
    loc: { x: 180, y: 626 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 203, y: 740 },
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { x: 608, y: 738 },
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    loc: { x: 659, y: 738 },
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
    loc: { x: 219, y: 787 },
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
    loc: { x: 195, y: 435 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { x: 243, y: 435 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 285, y: 435 },
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
    field: "Text2",
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    field: "Text3",
  },
  /** ask Sasha about birth jurisdiction to check state/country */
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.birthJurisdiction || ""),
    field: "STATEPROVINCE",
  },
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
    loc: { x: 50, y: 864 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { x: 113, y: 864 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    loc: { x: 175, y: 864 },
  },
];

/**
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertTwoMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.birthName),
    loc: { x: 184, y: 213 },
  },
  {
    text: (applicant) => numericalAge(applicant.birthdate!).toString(),
    loc: { x: 621, y: 212 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { x: 400, y: 228 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 150, y: 246 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { x: 415, y: 244 },
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    loc: { x: 289, y: 260 },
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    loc: { x: 289, y: 277 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "" : "X"),
    loc: { x: 102, y: 337 },
  },
  {
    text: () => "X",
    loc: { x: 297, y: 553 },
  },
  {
    text: () => "Updating record to match new legal name.",
    loc: { x: 442, y: 554 },
  },
  {
    text: () => "One",
    loc: { x: 180, y: 626 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 203, y: 740 },
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { x: 608, y: 738 },
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) && "-" && phoneEnd(applicant.phone),
    loc: { x: 659, y: 738 },
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
    loc: { x: 219, y: 787 },
  },
];

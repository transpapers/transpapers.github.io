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
  phoneAreaCode,
  phoneStart,
  phoneEnd,
  abbreviateJurisdiction,
  isMinor,
  representativeName,
} from "../../lib/util";

import { GenderMarker, isEmptyName, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

/**
 * Application for a Social Security Card (federal form SS-5.)
 * @type {Formfill[]}
 */
export const ssnMap: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "topmostSubform[0].Page5[0].firstname[0]",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "topmostSubform[0].Page5[0].Middlename[0]",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "topmostSubform[0].Page5[0].LastName[0]",
  },
  {
    text: (applicant) => applicant.birthName?.first ? applicant.birthName?.first ?? "" : applicant.legalName?.first ?? "",
    field: "topmostSubform[0].Page5[0].firstdiffname[0]",
  },
  {
    text: (applicant) => applicant.birthName?.middle ? applicant.birthName?.middle ?? "" : applicant.legalName?.middle ?? "",
    field: "topmostSubform[0].Page5[0].Middlediffname[0]",
  },
  {
    text: (applicant) => applicant.birthName?.last ? applicant.birthName?.last ?? "" : applicant.legalName?.last ?? "",
    field: "topmostSubform[0].Page5[0].Lastdiffname[0]",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "topmostSubform[0].Page5[0].cityofbirth[0]",
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    field: "topmostSubform[0].Page5[0].stateatbirth[0]",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "topmostSubform[0].Page5[0].DateTimeField1[0]",
  },
  { check: () => true, field: "topmostSubform[0].Page5[0].citizenship[0]" },

  /** Switch back these two fields to applicant.gender when Feds change policy */
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    field: "topmostSubform[0].Page5[0].Gender[0]",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    field: "topmostSubform[0].Page5[0].Gender[1]",
  },

  {
    text: (applicant) => applicant.mothersBirthName?.first ?? "",
    field: "topmostSubform[0].Page5[0].mothersfirstname[0]",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle ?? "",
    field: "topmostSubform[0].Page5[0].mothersmiddlename[0]",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    field: "topmostSubform[0].Page5[0].motherslastname[0]",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.first ?? "",
    field: "topmostSubform[0].Page5[0].fathersfirstname[0]",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle ?? "",
    field: "topmostSubform[0].Page5[0].fathersmiddlename[0]",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    field: "topmostSubform[0].Page5[0].fatherslastname[0]",
  },
  { check: () => true, field: "topmostSubform[0].Page5[0].ssnbefore[0]" },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "topmostSubform[0].Page5[0].firstnameonrecentcard[0]",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "topmostSubform[0].Page5[0].middlenameonrecentcard[0]",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "topmostSubform[0].Page5[0].lastnameonrecentcard[0]",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "topmostSubform[0].Page5[0].DateTimeField2[1]",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "topmostSubform[0].Page5[0].areacode[0]",
  },
  {
    text: (applicant) =>
      phoneStart(applicant.phone) + phoneEnd(applicant.phone),
    field: "topmostSubform[0].Page5[0].phonenumber[0]",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "topmostSubform[0].Page5[0].streetaddress[0]",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "topmostSubform[0].Page5[0].mailingcity[0]",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "topmostSubform[0].Page5[0].state[0]",
  },
  {
    text: (applicant) => applicant.zip,
    field: "topmostSubform[0].Page5[0].zipcode[0]",
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: "topmostSubform[0].Page5[0].relationship[0]",
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: "topmostSubform[0].Page5[0].relationship[1]",
  },
];

/**
 * Application for a Passport (federal form DS 5504.)
 * @type {Formfill[]}
 */
export const ds5504Map: Formfill[] = [
  { check: () => true, loc: { x: 46, y: 247 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 99, y: 193 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 237 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 471, y: 237 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 99, y: 281 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 147, y: 281 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 193, y: 281 },
  },
  /** Changed gender checkmarks to match new federal forms */
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { page: 4, x: 296, y: 281 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { page: 4, x: 327, y: 281 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 364, y: 281 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 309, y: 326 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 593, y: 326 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 660, y: 326 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 726, y: 326 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 40, y: 372 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 40, y: 417 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 40, y: 461 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 378, y: 461 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 436, y: 461 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 50, y: 506 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 271, y: 593 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 47, y: 60 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 661, y: 60 },
  },
  { text: () => "x", loc: { page: 5, x: 132, y: 573 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 5, x: 319, y: 562 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 5, x: 319, y: 613 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 5, x: 574, y: 613 },
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { text: () => "X", loc: { x: 52, y: 175 } },
  { text: () => "X", loc: { x: 52, y: 216 } },
  { text: () => "X", loc: { x: 52, y: 259 } },
  { text: () => "X", loc: { x: 52, y: 300 } },
  { text: () => "X", loc: { x: 52, y: 358 } },
  { text: () => "X", loc: { x: 52, y: 455 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 101, y: 179 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 224 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 470, y: 224 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 99, y: 270 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 147, y: 270 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 193, y: 270 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { page: 4, x: 296, y: 269 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { page: 4, x: 327, y: 269 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 364, y: 270 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 309, y: 316 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 593, y: 316 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 661, y: 316 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 727, y: 316 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 39, y: 360 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 39, y: 405 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 39, y: 448 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 376, y: 448 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 436, y: 448 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 51, y: 493 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 261, y: 557 },
  },
  { text: () => "x", loc: { page: 4, x: 262, y: 703 } },
  {
    text: (applicant) =>
      `${applicant.court?.city}  ${abbreviateJurisdiction(applicant.residentJurisdiction || "") || ""}`,
    loc: { page: 4, x: 390, y: 707 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 42, y: 59 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 657, y: 59 },
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 100, y: 185 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 102, y: 230 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 472, y: 230 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 100, y: 275 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 148, y: 275 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 195, y: 275 },
  },
  /** removed gender check marks and added a warning to guide instead */
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 365, y: 275 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 313, y: 323 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 597, y: 323 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 665, y: 323 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 730, y: 323 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 42, y: 367 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 42, y: 412 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 42, y: 454 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 379, y: 454 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 439, y: 454 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 52, y: 500 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 48, y: 56 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 640, y: 56 },
  },
  {
    text: (applicant) =>
      `${applicant.mothersBirthName?.first ?? ""} ${applicant.mothersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 48, y: 112 },
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    loc: { page: 5, x: 480, y: 112 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    loc: { page: 5, x: 47, y: 158 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    loc: { page: 5, x: 94, y: 158 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    loc: { page: 5, x: 140, y: 158 },
  },
  { text: () => "x", loc: { page: 5, x: 694, y: 160 } },
  {
    text: (applicant) =>
      `${applicant.fathersBirthName?.first ?? ""} ${applicant.fathersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 48, y: 202 },
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    loc: { page: 5, x: 481, y: 202 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    loc: { page: 5, x: 48, y: 248 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    loc: { page: 5, x: 95, y: 248 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    loc: { page: 5, x: 141, y: 248 },
  },
  { text: () => "x", loc: { page: 5, x: 694, y: 236 } },
];

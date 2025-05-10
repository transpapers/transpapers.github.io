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

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
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
    text: (applicant) =>
      (applicant.birthName || applicant.legalName)?.first ?? "",
    field: "topmostSubform[0].Page5[0].firstdiffname[0]",
  },
  {
    text: (applicant) =>
      (applicant.birthName || applicant.legalName)?.middle ?? "",
    field: "topmostSubform[0].Page5[0].Middlediffname[0]",
  },
  {
    text: (applicant) =>
      (applicant.birthName || applicant.legalName)?.last ?? "",
    field: "topmostSubform[0].Page5[0].Lastdiffname[0]",
  },
  {
    text: (applicant) =>
      applicant.birthName ? fullName(applicant.legalName) : "",
    field: "topmostSubform[0].Page5[0].Othername[0]",
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
    loc: { page: 4, x: 99, y: 195 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 239 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 471, y: 239 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 99, y: 284 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 147, y: 284 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 193, y: 284 },
  },
  /** Changed gender checkmarks to match new federal forms */
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { page: 4, x: 294, y: 284 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { page: 4, x: 325, y: 284 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 364, y: 284 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 309, y: 329 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 593, y: 329 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 660, y: 329 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 726, y: 329 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 40, y: 374 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 40, y: 419 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 40, y: 463 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 378, y: 463 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 436, y: 463 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 50, y: 507 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 271, y: 595 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 45, y: 61 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 659, y: 61 },
  },
  { text: () => "x", loc: { page: 5, x: 130, y: 575 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 5, x: 316, y: 564 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 5, x: 316, y: 615 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 5, x: 571, y: 615 },
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { check: () => true, loc: { x: 49, y: 178 } },
  { check: () => true, loc: { x: 49, y: 219 } },
  { check: () => true, loc: { x: 49, y: 262 } },
  { check: () => true, loc: { x: 49, y: 303 } },
  { check: () => true, loc: { x: 49, y: 361 } },
  { check: () => true, loc: { x: 49, y: 458 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 99, y: 181 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 227 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 468, y: 227 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 99, y: 272 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 145, y: 272 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 191, y: 272 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "X" : ""),
    loc: { page: 4, x: 293, y: 272 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "X" : ""),
    loc: { page: 4, x: 324, y: 272 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 362, y: 272 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 307, y: 318 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 591, y: 318 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 659, y: 318 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 725, y: 318 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 37, y: 362 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 37, y: 407 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 37, y: 450 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 376, y: 450 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 434, y: 450 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 48, y: 495 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 259, y: 559 },
  },
  { text: () => "x", loc: { page: 4, x: 260, y: 705 } },
  {
    text: (applicant) =>
      `${applicant.court?.city}  ${abbreviateJurisdiction(applicant.residentJurisdiction || "") || ""}`,
    loc: { page: 4, x: 389, y: 709 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 40, y: 61 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 655, y: 61 },
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 100, y: 188 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 100, y: 232 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 472, y: 232 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
    loc: { page: 4, x: 100, y: 277 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    loc: { page: 4, x: 148, y: 277 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
    loc: { page: 4, x: 195, y: 277 },
  },
  /** removed gender check marks and added a warning to guide instead */
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 365, y: 277 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 311, y: 325 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 595, y: 325 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 663, y: 325 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 728, y: 325 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 40, y: 369 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 40, y: 414 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 40, y: 456 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 379, y: 456 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 437, y: 456 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 52, y: 502 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 45, y: 58 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 638, y: 58 },
  },
  {
    text: (applicant) =>
      `${applicant.mothersBirthName?.first ?? ""} ${applicant.mothersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 45, y: 115 },
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    loc: { page: 5, x: 478, y: 115 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    loc: { page: 5, x: 45, y: 160 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    loc: { page: 5, x: 92, y: 160 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    loc: { page: 5, x: 138, y: 160 },
  },
  { text: () => "x", loc: { page: 5, x: 692, y: 163 } },
  {
    text: (applicant) =>
      `${applicant.fathersBirthName?.first ?? ""} ${applicant.fathersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 45, y: 204 },
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    loc: { page: 5, x: 458, y: 204 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    loc: { page: 5, x: 45, y: 250 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    loc: { page: 5, x: 92, y: 250 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    loc: { page: 5, x: 139, y: 250 },
  },
  { text: () => "x", loc: { page: 5, x: 691, y: 238 } },
];

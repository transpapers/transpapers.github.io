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
  { text: () => "X", loc: { x: 45, y: 263 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 97, y: 210 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 97, y: 254 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 469, y: 254 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 97, y: 299 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 145, y: 299 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 191, y: 299 },
  },
  /** Changed gender checkmarks to match new federal forms */
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 294, y: 299 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 325, y: 299 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 362, y: 299 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 307, y: 344 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 591, y: 344 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 658, y: 344 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 724, y: 344 } },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 38, y: 389 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
      loc: { page: 4, x: 38, y: 434 },
  },
  { text: (applicant) => applicant.residentCity, loc: { page: 4, x: 38, y: 478 } },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
      loc: { page: 4, x: 376, y: 478 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 434, y: 478 } },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 48, y: 522 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 269, y: 610 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
      loc: { page: 5, x: 39, y: 76 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
        }),
    loc: { page: 5, x: 654, y: 76 },
  },
  { check: () => true, loc: { page: 5, x: 125, y: 590 }, },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 5, x: 311, y: 579 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 5, x: 311, y: 630 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 5, x: 566, y: 630 },
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { text: () => "X", loc: { x: 49, y: 193 } },
  { text: () => "X", loc: { x: 49, y: 234 } },
  { text: () => "X", loc: { x: 49, y: 277 } },
  { text: () => "X", loc: { x: 49, y: 318 } },
  { text: () => "X", loc: { x: 49, y: 376 } },
  { text: () => "X", loc: { x: 49, y: 473 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 99, y: 196 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 242 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 468, y: 242 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 99, y: 287 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 145, y: 287 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 191, y: 287 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 293, y: 287 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 324, y: 287 },
  },
  {
    text: (applicant) =>
        `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 362, y: 287 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 307, y: 333 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 591, y: 333 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 659, y: 333 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 725, y: 333 } },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 37, y: 377 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 37, y: 422 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 37, y: 465 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 376, y: 465 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 434, y: 465 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 48, y: 510 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 259, y: 574 },
  },
  { check: () => true, loc: { page: 4, x: 260, y: 720 } },
  {
    text: (applicant) =>
    `${applicant.court?.city} \ ${abbreviateJurisdiction(applicant.residentJurisdiction || "") || ""}`,
    loc: { page: 4, x: 389, y: 724 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 40, y: 76 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 655, y: 76 },
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 99, y: 203 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 99, y: 247 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 471, y: 247 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 99, y: 292 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 147, y: 292 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 194, y: 292 },
  },
  /** removed gender check marks and added a warning to guide instead */
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 364, y: 292 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 310, y: 340 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 594, y: 340 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 662, y: 340 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 727, y: 340 },
  },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 39, y: 384 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 39, y: 429 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 39, y: 471 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 378, y: 471 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 436, y: 471 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 51, y: 517 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 40, y: 73 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 633, y: 73 },
  },
  {
    text: (applicant) =>
      `${applicant.mothersBirthName?.first ?? ""} ${applicant.mothersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 40, y: 130 },
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    loc: { page: 5, x: 473, y: 130 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH], separator: "" }),
    loc: { page: 5, x: 40, y: 175 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 87, y: 175 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 133, y: 175 },
  },
  { check: () => true, loc: { page: 5, x: 687, y: 178 }, },
  {
    text: (applicant) =>
      `${applicant.fathersBirthName?.first ?? ""} ${applicant.fathersBirthName?.middle ?? ""}`,
      loc: { page: 5, x: 39, y: 219 },
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    loc: { page: 5, x: 473, y: 219 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.MONTH], separator: ""
        }),
    loc: { page: 5, x: 40, y: 265 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 87, y: 265 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 134, y: 265 },
  },
  { check: () => true, loc: { page: 5, x: 686, y: 253 }, },
];

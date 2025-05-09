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
  { text: () => "X", loc: { x: 31, y: 175 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 65, y: 140 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 65, y: 169 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 313, y: 169 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 65, y: 199 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 97, y: 199 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 128, y: 199 },
  },
  /** Changed gender checkmarks to match new federal forms */
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 196, y: 199 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 217, y: 199 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 242, y: 199 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 205, y: 229 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 394, y: 229 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 439, y: 229 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 483, y: 229 } },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 25, y: 75 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
      loc: { page: 4, x: 25, y: 289 },
  },
  { text: (applicant) => applicant.residentCity, loc: { page: 4, x: 25, y: 319 } },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
      loc: { page: 4, x: 251, y: 319 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 290, y: 319 } },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 32, y: 349 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 180, y: 407 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
      loc: { page: 5, x: 26, y: 51 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
        }),
    loc: { page: 5, x: 437, y: 51 },
  },
  { check: () => true, loc: { page: 5, x: 83, y: 393 }, },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 5, x: 208, y: 386 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 5, x: 208, y: 420 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 5, x: 377, y: 420 },
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { text: () => "X", loc: { x: 33, y: 128 } },
  { text: () => "X", loc: { x: 33, y: 156 } },
  { text: () => "X", loc: { x: 33, y: 183 } },
  { text: () => "X", loc: { x: 33, y: 211 } },
  { text: () => "X", loc: { x: 33, y: 250 } },
  { text: () => "X", loc: { x: 33, y: 315 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 67, y: 131 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 65, y: 161 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 312, y: 161 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 65, y: 192 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 97, y: 192 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 127, y: 192 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 196, y: 191 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 217, y: 191 },
  },
  {
    text: (applicant) =>
        `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 242, y: 192 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 205, y: 222 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 394, y: 222 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 440, y: 222 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 484, y: 222 } },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 25, y: 251 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 25, y: 281 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 25, y: 310 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 250, y: 310 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 290, y: 310 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 32, y: 340 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 173, y: 383 },
  },
  { check: () => true, loc: { page: 4, x: 174, y: 480 } },
  {
    text: (applicant) =>
    `${applicant.court?.city} \ ${abbreviateJurisdiction(applicant.residentJurisdiction || "") || ""}`,
    loc: { page: 4, x: 259, y: 483 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 27, y: 51 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 437, y: 51 },
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 66, y: 135 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 66, y: 165 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 105, y: 165 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 66, y: 195 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 98, y: 195 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 129, y: 195 },
  },
  /** removed gender check marks and added a warning to guide instead */
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 243, y: 195 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 207, y: 227 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 396, y: 227 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 442, y: 227 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 485, y: 227 },
  },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 27, y: 256 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 27, y: 286 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 27, y: 314 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 252, y: 314 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 291, y: 314 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 34, y: 345 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 27, y: 49 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 422, y: 49 },
  },
  {
    text: (applicant) =>
      `${applicant.mothersBirthName?.first ?? ""} ${applicant.mothersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 27, y: 87 },
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    loc: { page: 5, x: 316, y: 87 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH], separator: "" }),
    loc: { page: 5, x: 27, y: 117 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 58, y: 117 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 89, y: 117 },
  },
  { check: () => true, loc: { page: 5, x: 458, y: 118 }, },
  {
    text: (applicant) =>
      `${applicant.fathersBirthName?.first ?? ""} ${applicant.fathersBirthName?.middle ?? ""}`,
      loc: { page: 5, x: 27, y: 146 },
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    loc: { page: 5, x: 316, y: 117 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.MONTH], separator: ""
        }),
    loc: { page: 5, x: 27, y: 177 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 58, y: 177 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 89, y: 177 },
  },
  { check: () => true, loc: { page: 5, x: 458, y: 169 }, },
];

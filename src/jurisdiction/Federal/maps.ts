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
  { text: () => "X", loc: { x: 92, y: 525 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 195, y: 420 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 195, y: 508 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 940, y: 508 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 195, y: 598 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 290, y: 598 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 384, y: 598 },
  },
  /** Changed gender checkmarks to match new federal forms */
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 588, y: 598 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 650, y: 598 },
  },
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 725, y: 598 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 615, y: 688 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 1183, y: 688 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 1316, y: 688 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 1450, y: 688 } },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 75, y: 779 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
      loc: { page: 4, x: 75, y: 868 },
  },
  { text: (applicant) => applicant.residentCity, loc: { page: 4, x: 75, y: 956 } },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
      loc: { page: 4, x: 752, y: 957 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 869, y: 957 } },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 97, y: 1046 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 540, y: 1220 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
      loc: { page: 5, x: 77, y: 154 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
        }),
    loc: { page: 5, x: 1310, y: 154 },
  },
  { check: () => true, loc: { page: 5, x: 250, y: 1178 }, },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 5, x: 625, y: 1157 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 5, x: 625, y: 1260 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 5, x: 1132, y: 1260 },
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { text: () => "X", loc: { x: 100, y: 384 } },
  { text: () => "X", loc: { x: 100, y: 467 } },
  { text: () => "X", loc: { x: 100, y: 550 } },
  { text: () => "X", loc: { x: 100, y: 634 } },
  { text: () => "X", loc: { x: 100, y: 750 } },
  { text: () => "X", loc: { x: 100, y: 945 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 200, y: 392 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 195, y: 482 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 937, y: 482 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 195, y: 575 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 291, y: 575 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 382, y: 575 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    loc: { page: 4, x: 587, y: 572 },
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    loc: { page: 4, x: 650, y: 572 },
  },
  {
    text: (applicant) =>
        `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    loc: { page: 4, x: 725, y: 575 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 615, y: 667 } },
  { text: (applicant) => phoneAreaCode(applicant.phone), loc: { page: 4, x: 1182, y: 667 } },
  { text: (applicant) => phoneStart(applicant.phone), loc: { page: 4, x: 1320, y: 667 } },
  { text: (applicant) => phoneEnd(applicant.phone), loc: { page: 4, x: 1451, y: 667 } },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 75, y: 754 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 75, y: 844 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 75, y: 930 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 751, y: 930 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 869, y: 930 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 97, y: 1021 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
      loc: { page: 4, x: 520, y: 1148 },
  },
  { check: () => true, loc: { page: 4, x: 522, y: 1439 } },
  {
    text: (applicant) =>
    `${applicant.court?.city} \ ${abbreviateJurisdiction(applicant.residentJurisdiction || "") || ""}`,
    loc: { page: 4, x: 778, y: 1448 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 80, y: 152 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 1312, y: 152 },
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    loc: { page: 4, x: 198, y: 405 },
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    loc: { page: 4, x: 198, y: 495 },
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    loc: { page: 4, x: 942, y: 495 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: "" }),
      loc: { page: 4, x: 198, y: 585 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
      loc: { page: 4, x: 294, y: 585 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: "" }),
      loc: { page: 4, x: 387, y: 585 },
  },
  /** removed gender check marks and added a warning to guide instead */
  {
    text: (applicant) =>
      `${applicant.birthCity} ${applicant.birthJurisdiction}`,
      loc: { page: 4, x: 730, y: 585 },
  },
  { text: (applicant) => applicant.email, loc: { page: 4, x: 620, y: 680 } },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 1187, y: 680 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 4, x: 1325, y: 680 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 4, x: 1456, y: 680 },
  },
  {
    text: (applicant) => applicant.streetAddress,
      loc: { page: 4, x: 80, y: 767 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `In Care Of - ${fullName(representativeName(applicant))}`
        : "",
    loc: { page: 4, x: 80, y: 857 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 4, x: 80, y: 943 },
  },
  {
    text: (applicant) =>
      abbreviateJurisdiction(applicant.residentJurisdiction || "") || "",
    loc: { page: 4, x: 757, y: 943 },
  },
  { text: (applicant) => applicant.zip, loc: { page: 4, x: 873, y: 943 } },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 102, y: 1034 },
  },
  {
    text: (applicant) =>
      `${applicant.chosenName?.last ?? ""} ${applicant.chosenName?.first ?? ""} ${applicant.chosenName?.middle ?? ""}`,
    loc: { page: 5, x: 80, y: 147 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 5, x: 1267, y: 147 },
  },
  {
    text: (applicant) =>
      `${applicant.mothersBirthName?.first ?? ""} ${applicant.mothersBirthName?.middle ?? ""}`,
    loc: { page: 5, x: 80, y: 260 },
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    loc: { page: 5, x: 948, y: 260 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH], separator: "" }),
    loc: { page: 5, x: 80, y: 350 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 174, y: 350 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.mothersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 267, y: 350 },
  },
  { check: () => true, loc: { page: 5, x: 1374, y: 354 }, },
  {
    text: (applicant) =>
      `${applicant.fathersBirthName?.first ?? ""} ${applicant.fathersBirthName?.middle ?? ""}`,
      loc: { page: 5, x: 80, y: 439 },
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    loc: { page: 5, x: 947, y: 350 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.MONTH], separator: ""
        }),
    loc: { page: 5, x: 80, y: 530 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.DAY], separator: ""
        }),
    loc: { page: 5, x: 174, y: 530 },
  },
  {
    text: (applicant) =>
        formatDate(applicant.fathersBirthdate, {
            format: [DATE.YEAR], separator: ""
        }),
    loc: { page: 5, x: 267, y: 530 },
  },
  { check: () => true, loc: { page: 5, x: 1374, y: 506 }, },
];

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
  phoneAreaCode,
  phoneStart,
  phoneEnd,
  isMinor,
  representativeName,
  addZero,
  allCAPS,
  formatContactInfo,
  getLocality,
  getJurisdiction,
  ContactFormat as cf,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

/*!
 * Application for a Social Security Card (federal form SS-5.)
 * @type {Formfill[]}
 */
export const ssnMap: Formfill[] = [
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "topmostSubform[0].Page5[0].firstname[0]",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "topmostSubform[0].Page5[0].Middlename[0]",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "topmostSubform[0].Page5[0].LastName[0]",
  }),
  (applicant) => ({
    text: applicant.birthName.first || applicant.legalName.first,
    fieldName: "topmostSubform[0].Page5[0].firstdiffname[0]",
  }),
  (applicant) => ({
    text: applicant.birthName.middle || applicant.legalName.middle,
    fieldName: "topmostSubform[0].Page5[0].Middlediffname[0]",
  }),
  (applicant) => ({
    text: applicant.birthName.last || applicant.legalName.last,
    fieldName: "topmostSubform[0].Page5[0].Lastdiffname[0]",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "topmostSubform[0].Page5[0].cityofbirth[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "topmostSubform[0].Page5[0].stateatbirth[0]",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "topmostSubform[0].Page5[0].DateTimeField1[0]",
  }),
  () => ({
    check: true,
    fieldName: "topmostSubform[0].Page5[0].citizenship[0]",
  }),

  /** Switch back these two fieldNames to applicant.gender when Feds change policy */
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "topmostSubform[0].Page5[0].Gender[0]",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "topmostSubform[0].Page5[0].Gender[1]",
  }),

  (applicant) => ({
    text: applicant.mothersBirthName.first,
    fieldName: "topmostSubform[0].Page5[0].mothersfirstname[0]",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.middle,
    fieldName: "topmostSubform[0].Page5[0].mothersmiddlename[0]",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    fieldName: "topmostSubform[0].Page5[0].motherslastname[0]",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.first,
    fieldName: "topmostSubform[0].Page5[0].fathersfirstname[0]",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.middle,
    fieldName: "topmostSubform[0].Page5[0].fathersmiddlename[0]",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.last,
    fieldName: "topmostSubform[0].Page5[0].fatherslastname[0]",
  }),
  () => ({ check: true, fieldName: "topmostSubform[0].Page5[0].ssnbefore[0]" }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "topmostSubform[0].Page5[0].firstnameonrecentcard[0]",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "topmostSubform[0].Page5[0].middlenameonrecentcard[0]",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "topmostSubform[0].Page5[0].lastnameonrecentcard[0]",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "topmostSubform[0].Page5[0].DateTimeField2[1]",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "topmostSubform[0].Page5[0].areacode[0]",
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    fieldName: "topmostSubform[0].Page5[0].phonenumber[0]",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "topmostSubform[0].Page5[0].streetaddress[0]",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "topmostSubform[0].Page5[0].mailingcity[0]",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "topmostSubform[0].Page5[0].state[0]",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "topmostSubform[0].Page5[0].zipcode[0]",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "topmostSubform[0].Page5[0].relationship[0]",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "topmostSubform[0].Page5[0].relationship[1]",
  }),
];

/*!
 * Application for a Passport (federal form DS 5504.)
 * @type {Formfill[]}
 */
export const ds5504Map: Formfill[] = [
  () => ({ check: true, loc: { x: 46, y: 247 } }),
  (applicant) => ({
    text: applicant.chosenName.last,
    loc: { page: 4, x: 99, y: 193 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 4, x: 99, y: 237 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 4, x: 471, y: 237 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 4, x: 99, y: 281 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    ),
    loc: { page: 4, x: 147, y: 281 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { page: 4, x: 193, y: 281 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { page: 4, x: 296, y: 281 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { page: 4, x: 327, y: 281 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { page: 4, x: 364, y: 281 },
  }),
  (applicant) => ({ text: applicant.email, loc: { page: 4, x: 309, y: 326 } }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 593, y: 326 },
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    loc: { page: 4, x: 660, y: 326 },
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    loc: { page: 4, x: 726, y: 326 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 40, y: 372 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    loc: { page: 4, x: 40, y: 417 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 4, x: 40, y: 461 },
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    loc: { page: 4, x: 378, y: 461 },
  }),
  (applicant) => ({ text: applicant.zip, loc: { page: 4, x: 436, y: 461 } }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 50, y: 506 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 271, y: 593 },
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.first} ${applicant.chosenName.middle}`,
    loc: { page: 5, x: 47, y: 60 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 5, x: 661, y: 60 },
  }),
  () => ({ text: "x", loc: { page: 5, x: 132, y: 573 } }),
  (applicant) => ({
    text: applicant.chosenName.last,
    loc: { page: 5, x: 319, y: 562 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 5, x: 319, y: 613 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 5, x: 574, y: 613 },
  }),
];

/*!
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  () => ({ text: "X", loc: { x: 52, y: 175 } }),
  () => ({ text: "X", loc: { x: 52, y: 216 } }),
  () => ({ text: "X", loc: { x: 52, y: 259 } }),
  () => ({ text: "X", loc: { x: 52, y: 300 } }),
  () => ({ text: "X", loc: { x: 52, y: 358 } }),
  () => ({ text: "X", loc: { x: 52, y: 455 } }),
  (applicant) => ({
    text: applicant.chosenName.last,
    loc: { page: 4, x: 101, y: 179 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 4, x: 99, y: 224 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 4, x: 470, y: 224 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 4, x: 99, y: 270 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    ),
    loc: { page: 4, x: 147, y: 270 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { page: 4, x: 193, y: 270 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { page: 4, x: 296, y: 269 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { page: 4, x: 327, y: 269 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { page: 4, x: 364, y: 270 },
  }),
  (applicant) => ({ text: applicant.email, loc: { page: 4, x: 309, y: 316 } }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 593, y: 316 },
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    loc: { page: 4, x: 661, y: 316 },
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    loc: { page: 4, x: 727, y: 316 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 39, y: 360 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    loc: { page: 4, x: 39, y: 405 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 4, x: 39, y: 448 },
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    loc: { page: 4, x: 376, y: 448 },
  }),
  (applicant) => ({ text: applicant.zip, loc: { page: 4, x: 436, y: 448 } }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 51, y: 493 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 261, y: 557 },
  }),
  () => ({ text: "x", loc: { page: 4, x: 262, y: 703 } }),
  (applicant) => ({
    text:
      `${getLocality(applicant.residentJurisdictionName, applicant.residentLocalityName)?.court.city} / ${getJurisdiction(applicant.residentJurisdictionName)?.abbreviation}`,
    loc: { page: 4, x: 390, y: 707 },
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.first} ${applicant.chosenName.middle}`,
    loc: { page: 5, x: 42, y: 59 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 5, x: 657, y: 59 },
  }),
];

/*!
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  (applicant) => ({
    text: applicant.chosenName.last,
    loc: { page: 4, x: 100, y: 185 },
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    loc: { page: 4, x: 102, y: 230 },
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    loc: { page: 4, x: 472, y: 230 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 4, x: 100, y: 275 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { format: [DATE.DAY], separator: "" }),
    ),
    loc: { page: 4, x: 148, y: 275 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { page: 4, x: 195, y: 275 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { page: 4, x: 297, y: 274 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { page: 4, x: 323, y: 274 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { page: 4, x: 365, y: 275 },
  }),
  (applicant) => ({ text: applicant.email, loc: { page: 4, x: 313, y: 323 } }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { page: 4, x: 597, y: 323 },
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    loc: { page: 4, x: 665, y: 323 },
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    loc: { page: 4, x: 730, y: 323 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 42, y: 367 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    loc: { page: 4, x: 42, y: 412 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 4, x: 42, y: 454 },
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    loc: { page: 4, x: 379, y: 454 },
  }),
  (applicant) => ({ text: applicant.zip, loc: { page: 4, x: 439, y: 454 } }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 52, y: 500 },
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.first} ${applicant.chosenName.middle}`,
    loc: { page: 5, x: 48, y: 56 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 5, x: 640, y: 56 },
  }),
  (applicant) => ({
    text: `${applicant.mothersBirthName.first} ${applicant.mothersBirthName.middle}`,
    loc: { page: 5, x: 48, y: 112 },
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    loc: { page: 5, x: 480, y: 112 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 5, x: 47, y: 158 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    ),
    loc: { page: 5, x: 94, y: 158 },
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { page: 5, x: 140, y: 158 },
  }),
  () => ({ text: "x", loc: { page: 5, x: 694, y: 160 } }),
  (applicant) => ({
    text: `${applicant.fathersBirthName.first} ${applicant.fathersBirthName.middle}`,
    loc: { page: 5, x: 48, y: 202 },
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.last,
    loc: { page: 5, x: 481, y: 202 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { page: 5, x: 48, y: 248 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    ),
    loc: { page: 5, x: 95, y: 248 },
  }),
  (applicant) => ({
    text: formatDate(applicant.fathersBirthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { page: 5, x: 141, y: 248 },
  }),
  () => ({ text: "x", loc: { page: 5, x: 694, y: 236 } }),
];

/*!
 * Attestation of Orr v. Trump Class Membership (federal form unnumbered)
 * @type {Formfill[]}
 */
export const passportAttestationMap: Formfill[] = [
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { x: 128, y: 861 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { x: 128, y: 884 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.X ? "X" : "",
    loc: { x: 128, y: 908 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { page: 1, x: 105, y: 387 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    loc: { page: 1, x: 105, y: 482 },
  }),
];

/*!
 * Request for Status Information Letter (federal form unnumbered)
 * @type {Formfill[]}
 */
export const statusLetterMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? allCAPS(applicant.chosenName.first)
      : allCAPS(applicant.legalName.first),
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? allCAPS(applicant.chosenName.middle)
      : allCAPS(applicant.legalName.first),
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? allCAPS(applicant.chosenName.last)
      : allCAPS(applicant.legalName.first),
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? `${allCAPS(fullName(applicant.legalName))}, ${allCAPS(fullName(applicant.birthName))}`
            : allCAPS(fullName(applicant.legalName));
        case false:
          return fullName(applicant.birthName);
        default:
          return "";
      }
    })(),
    fieldName: "List any other names used Include multiple last names",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: allCAPS(applicant.streetAddress),
    fieldName: "Current Mailing Address 1",
  }),
  (applicant) => ({
    text: allCAPS(applicant.residentCity),
    fieldName: "Current Mailing Address - City",
  }),
  (applicant) => ({
    text: 
      allCAPS(getJurisdiction(applicant.residentJurisdictionName)?.name),
    fieldName: "Current Mailing Address - State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Current Mailing Address - Zip Code",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Daytime Telephone Number",
  }),
  (applicant) => ({
    text: allCAPS(applicant.email),
    fieldName: "Email Address",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "Female I have or will transition to male",
  }),
  (applicant) => ({
    text:
      applicant.assignedSex === GenderMarker.F
        ? "I was assigned female at birth and was excluded from registering."
        : "",
    fieldName: "Reason for Failure to Register Before Age 26",
  }),
];

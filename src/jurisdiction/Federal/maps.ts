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
    text: applicant.birthJurisdictionName ?? "",
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
    text: applicant.residentJurisdictionName ?? "",
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
  (applicant) => ({ 
    choice: applicant.isChangingLegalName ? "YES" : "NO", 
    fieldName: "Changed Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix}`,
    fieldName: "App Name Last",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.first 
      : applicant.legalName.first,
    fieldName: "App First",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.middle 
      : applicant.legalName.middle,
    fieldName: "App Middle",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "App DOB MM",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { 
        format: [DATE.DAY], 
        separator: "" }),
    ),
    fieldName: "App DOB DD",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "App DOB YYYY",
  }),
  (applicant) => ({
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return undefined;
      }
    })(),
    fieldName: "Gender",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "App Place of Birth",
  }),
  (applicant) => ({ 
    text: applicant.email, 
    fieldName: "App Email", 
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "App Phone 1",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "App Phone 2",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "App Phone 3",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "App Mailing Address Line 1 Street RFD PO Box or URB",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    fieldName: "App Mailing Address Line 2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "App Mailing City",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "App Mailing State",
  }),
  (applicant) => ({ 
    text: applicant.zip, 
    fieldName: "App Mailing Zip", 
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? fullName(applicant.birthName)
            : fullName(applicant.legalName);
        case false:
          return fullName(applicant.birthName);
        default:
          return "";
      }
    })(),
    fieldName: "App List all other name you have used",
  }),
  (applicant) => ({
    text: 
      applicant.isChangingLegalName && fullName(applicant.birthName) ?
        fullName(applicant.legalName) : "",
    fieldName: "App List all other names you have used 2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Your name as printed on your most recent U.S. passport book and/or passport card",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""} ${applicant.chosenName.first} ${applicant.chosenName.middle}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""} ${applicant.legalName.first} ${applicant.legalName.middle}`,
    fieldName: "Name of Applicant 2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  //(applicant) => ({ 
    //choice: applicant.isChangingLegalName ? "Yes" : "No", 
    //fieldName: "Name Change",
  //}),
  (applicant) => ({
    text: applicant.isChangingLegalName ? 
      `${applicant.chosenName.last} ${applicant.chosenName.suffix}` : "",
    fieldName: "Changed Last Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    fieldName: "Changed First",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    fieldName: "Changed Middle",
  }),
];

/*!
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  /*
  () => ({ 
    choice: "YES_1", 
    fieldName: "Most Recent",
  }),
  () => ({ 
    choice: "YES", 
    fieldName: "16 Years",
  }),
  () => ({ 
    choice: "YES", 
    fieldName: "Less Than 15",
  }),
  () => ({ 
    choice: "YES", 
    fieldName: "Damaged",
  }),
  () => ({ 
    choice: "YES", 
    fieldName: "Not Limited",
  }),
  */
  (applicant) => ({ 
    choice: applicant.isChangingLegalName ? "YES" : "NO", 
    fieldName: "Name Changed",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix}`,
    fieldName: "App Name Last",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.first 
      : applicant.legalName.first,
    fieldName: "App First",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.middle 
      : applicant.legalName.middle,
    fieldName: "App Middle",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "App DOB MM",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { 
        format: [DATE.DAY], 
        separator: "" }),
    ),
    fieldName: "App DOB DD",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "App DOB YYYY",
  }),
  /*
  (applicant) => ({
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return undefined;
      }
    })(),
    fieldName: "Gender",
  }),
  */
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "App Place of Birth",
  }),
  (applicant) => ({ 
    text: applicant.email, 
    fieldName: "App Email", 
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "App Phone 1",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "App Phone 2",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "App Phone 3",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "App Mailing Address Line 1",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    fieldName: "App Mailing Address Line 2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "App Mailing Address City",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "App Mailing Address State",
  }),
  (applicant) => ({ 
    text: applicant.zip, 
    fieldName: "App Mailing Address Zip Code", 
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? fullName(applicant.birthName)
            : fullName(applicant.legalName);
        case false:
          return fullName(applicant.birthName);
        default:
          return "";
      }
    })(),
    fieldName: "App List all other name you have used",
  }),
  (applicant) => ({
    text: 
      applicant.isChangingLegalName && fullName(applicant.birthName) ?
        fullName(applicant.legalName) : "",
    fieldName: "App List all other names you have used 2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Your name as printed on your most recent U.S. passport book and/or passport card",
  }),
  (applicant) => ({ 
    check: applicant.isChangingLegalName, 
    fieldName: "Changed by Court Order",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""} ${applicant.chosenName.first} ${applicant.chosenName.middle}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""} ${applicant.legalName.first} ${applicant.legalName.middle}`,
    fieldName: "Name of Applicant (Last, First, Middle) 2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth 2",
  }),
];

/*!
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix}`,
    fieldName: "Applicant Last Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.first 
      : applicant.legalName.first,
    fieldName: "Applicant First Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? applicant.chosenName.middle 
      : applicant.legalName.middle,
    fieldName: "Applicant Middle Name",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "Applicant DOB M",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { 
        format: [DATE.DAY], 
        separator: "" }),
    ),
    fieldName: "Applicant DOB D",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "Applicant DOB Y",
  }),
  /*
  (applicant) => ({
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return undefined;
      }
    })(),
    fieldName: "Gender",
  }),
  */
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "Applicant Place of Birth",
  }),
  (applicant) => ({ 
    text: applicant.email, 
    fieldName: "Applicant Email", 
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant Address Street",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : "",
    fieldName: "Address Line 2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "Applicant Address City",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "Applicant Address State",
  }),
  (applicant) => ({ 
    text: applicant.zip, 
    fieldName: "Applicant Address Zip Code", 
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "Applicant Phone 1",
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    fieldName: "Applicant Phone 2",
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    fieldName: "Applicant Phone 3",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return fullName(applicant.birthName)
            ? fullName(applicant.birthName)
            : fullName(applicant.legalName);
        case false:
          return fullName(applicant.birthName);
        default:
          return "";
      }
    })(),
    fieldName: "List all other name you have used",
  }),
  (applicant) => ({
    text: 
      applicant.isChangingLegalName && fullName(applicant.birthName) ?
        fullName(applicant.legalName) : "",
    fieldName: "List all other names you have used",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""} ${applicant.chosenName.first} ${applicant.chosenName.middle}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""} ${applicant.legalName.first} ${applicant.legalName.middle}`,
    fieldName: "Name of Applicant 2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Applicant DOB 2",
  }),
  (applicant) => ({
    text: `${applicant.mothersBirthName.first} ${applicant.mothersBirthName.middle}`,
    fieldName: "Parent 1 FM Name",
  }),
  (applicant) => ({
    text: `${applicant.mothersBirthName.last} ${applicant.mothersBirthName.suffix}`,
    fieldName: "Parent 1 Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    fieldName: "Parent 1 DOB",
  }),
  () => ({ 
    choice: "F", 
    fieldName: "Parent 1 Gender", 
  }),
  (applicant) => ({
    text: `${applicant.fathersBirthName.first} ${applicant.fathersBirthName.middle}`,
    fieldName: "Parent 2 FM Name",
  }),
  (applicant) => ({
    text: `${applicant.fathersBirthName.last} ${applicant.fathersBirthName.suffix}`,
    fieldName: "Parent 2 Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.fathersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Parent 2 DOB",
  }),
  () => ({ 
    choice: "M", 
    fieldName: "Parent 2 Gender", 
  }),
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
      allCAPS(applicant.residentJurisdictionName ?? ""),
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

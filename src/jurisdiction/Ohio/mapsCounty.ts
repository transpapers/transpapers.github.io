/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Li�kov� and Stephanie Beckon
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
  isMinor,
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  nameInitials,
  addZero,
  representativeName,
  formatContactInfo,
  getJurisdiction,
  getLocality,
  ContactFormat as cf,
} from "../../lib/util";

import {
  GenderMarker,
  DateFormatPart as DATE,
  NameFormatPart as FML,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

/*!
 * Adams County Adult Packet (forms listed below)
 *
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adamsAdultMap: Formfill[] = [
  /** Notice of Appearance (AC-001) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 133, y: 160 },
  }),
  () => ({
    text: "x",
    loc: { x: 197, y: 171 },
  }),
  () => ({
    text: "x",
    loc: { x: 411, y: 317 },
  }),
  () => ({
    text: "x",
    loc: { x: 127, y: 357 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 127, y: 459 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 335, y: 459 },
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    loc: { x: 506, y: 459 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 127, y: 518 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { x: 127, y: 556 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { x: 365, y: 556 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { x: 512, y: 556 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 127, y: 596 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 510, y: 596 },
  }),
  /** Waiver of Counsel (AC-002) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 130, y: 156 },
  }),
  () => ({
    text: "x",
    loc: { page: 1, x: 179, y: 168 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 520, y: 676 },
  }),
  /** Authorization for Release of Information (AC-007) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 120, y: 294 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 2, x: 405, y: 294 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 2, x: 405, y: 346 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { page: 2, x: 582, y: 346 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 2, x: 683, y: 346 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 2, x: 375, y: 538 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 2, x: 375, y: 748 },
  }),
  /** Webcheck Beckgound Check Form */
  () => ({
    text: "X",
    loc: { page: 3, x: 530, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 3, x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 3, x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 3, x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { page: 3, x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 3, x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 3, x: 616, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { page: 3, x: 60, y: 586 },
  }),
  () => ({
    text: "Adams County Probate Court",
    loc: { page: 3, x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "110 W Main St #221",
    loc: { page: 3, x: 151, y: 985 },
  }),
  () => ({
    text: "West Union",
    loc: { page: 3, x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { page: 3, x: 530, y: 1006 },
  }),
  () => ({
    text: "45693",
    loc: { page: 3, x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Adams County Probate Court",
    loc: { page: 4, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 53, y: 314 },
  }),
];

/*!
 * Adams County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adamsMinorMap: Formfill[] = [
  /** Notice of Appearance (AC-001) */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 133, y: 160 },
  }),
  () => ({
    text: "x",
    loc: { x: 197, y: 171 },
  }),
  () => ({
    text: "x",
    loc: { x: 411, y: 317 },
  }),
  () => ({
    text: "x",
    loc: { x: 127, y: 357 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    loc: { x: 127, y: 459 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    loc: { x: 335, y: 459 },
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    loc: { x: 506, y: 459 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 127, y: 518 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { x: 127, y: 556 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { x: 365, y: 556 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { x: 512, y: 556 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 127, y: 596 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 510, y: 596 },
  }),
  /** Waiver of Counsel (AC-002) */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 130, y: 156 },
  }),
  () => ({
    text: "x",
    loc: { page: 1, x: 179, y: 168 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 520, y: 676 },
  }),
  /** Authorization for Release of Information (AC-007) */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 2, x: 120, y: 294 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 2, x: 405, y: 294 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 2, x: 405, y: 346 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { page: 2, x: 582, y: 346 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 2, x: 683, y: 346 },
  }),
];

/*!
 * Ashland County Name Change Supplemental Affidavit (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashlandAdultMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text1",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Text2",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "Text10",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text21",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "CheckBox2",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "CheckBox4",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text22",
  }),
];

/*!
 * Ashtabula County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashtabulaAdultMap: Formfill[] = [
  /** Required Information Sheet - Name Change (PRB-NC-ARIS)*/
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CURRENT",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NEW",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "ST",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "CSZ",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "CSBTH",
  }),
  /** Webcheck Beckgound Check Form */
  () => ({
    text: "X",
    loc: { page: 1, x: 248, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 1, x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 1, x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 1, x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { page: 1, x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 1, x: 433, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { page: 1, x: 60, y: 586 },
  }),
  () => ({
    text: "Ashtabula County Probate Court",
    loc: { page: 1, x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "25 W Jefferson St",
    loc: { page: 1, x: 151, y: 985 },
  }),
  () => ({
    text: "Jefferson",
    loc: { page: 1, x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { page: 1, x: 530, y: 1006 },
  }),
  () => ({
    text: "44047",
    loc: { page: 1, x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Ashtabula County Probate Court",
    loc: { page: 2, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 53, y: 314 },
  }),
];

/*!
 * Ashtabula County Required Information Sheet - Name Change (PRB-NC-ARIS) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashtabulaMinorMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Check Box2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CURRENT",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NEW",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "ST",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "CSZ",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "CSBTH",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? fullName(representativeName(applicant))
      : "",
    fieldName: "Name",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.streetAddress : "",
    fieldName: "ST2",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
      : undefined,
    fieldName: "CSZ2",
  }),
];

/*!
 * Auglaize County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const auglaizeAdultMap: Formfill[] = [
  /** Webcheck Beckgound Check Form */
  () => ({
    text: "X",
    loc: { x: 248, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { x: 60, y: 586 },
  }),
  () => ({
    text: "Auglaize County Probate Court",
    loc: { x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "201 Willipie St # 119",
    loc: { x: 151, y: 985 },
  }),
  () => ({
    text: "Wapakoneta",
    loc: { x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { x: 530, y: 1006 },
  }),
  () => ({
    text: "45895",
    loc: { x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Auglaize County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 53, y: 314 },
  }),
];

/*!
 * Auglaize County Minor Name Change Best Interests of Child
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const auglaizeMinorMap: Formfill[] = [
  (applicant) => ({
    text:
      applicant.parentsAreOkay &&
      applicant.chosenName.last === applicant.representativeName?.last
        ? "The childs last name is the same as the child's residential parent."
        : "",
    loc: { x: 130, y: 574 },
  }),
  (applicant) => ({
    text:
      applicant.parentsAreOkay &&
      applicant.chosenName.last === applicant.representativeName?.last
        ? "Not applicable, see #5."
        : "",
    loc: { x: 130, y: 683 },
  }),
];

/*!
 * Butler County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const butlerAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment (BCPC 638)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "CityStateZip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  /** Application Addendum (BCPC 639)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    text: "X",
    loc: { page: 1, x: 101, y: 330 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "AddendumPg1Bx1.7",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "AddendumPg1Bx1.8",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "AddendumPg1Bx1.9",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "AddendumPg1Bx1.10",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "AddendumPg1Bx1.11",
  }),
  /** Webcheck Fingerprint Information */
  () => ({
    check: true,
    fieldName: "BCI - State of Ohio",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "First name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 265, y: 183 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 265, y: 183 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip Code",
  }),
  () => ({
    text: "No O.R.C. Code - Other: Name Change",
    fieldName: "O.R.C. Code - Reason for Fingerprinting",
  }),
  /** Add Judges name to below entry. */
  () => ({
    text: "Judge , Butler County Probate Court",
    fieldName: "Recipient Name",
  }),
  () => ({
    text: "101 High Street, Second Floor",
    fieldName: "Recipient Street Address",
  }),
  () => ({
    text: "Hamilton",
    fieldName: "Recipient City",
  }),
  () => ({
    text: "Ohio",
    fieldName: "Recipient State",
  }),
  () => ({
    text: "45011",
    fieldName: "Recipient Zip Code",
  }),
];

/*!
 * Butler County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const butlerMinorMap: Formfill[] = [
  /** Self-Representation Acknowledgment (BCPC 638)*/
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "CityStateZip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  /** Application Addendum (BCPC 639)*/
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    text: "X",
    loc: { page: 1, x: 101, y: 330 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "AddendumPg1Bx1.7",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "AddendumPg1Bx1.8",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "AddendumPg1Bx1.9",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "AddendumPg1Bx1.10",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "AddendumPg1Bx1.11",
  }),
  /** Record Check Authorization, Waiver, and Consent (BCPC 641)*/
  () => ({
    check: true,
    fieldName: "Check Box3",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text7",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Text11",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text12",
  }),
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (BCPC 21.4L)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Legal Name",
  }),
];

/*!
 * Champaign County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const champaignMap: Formfill[] = [
  /** Personal Information Sheet */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 247, y: 244 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 240, y: 273 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { x: 206, y: 300 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { x: 407, y: 300 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { x: 635, y: 300 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 220, y: 345 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 290, y: 355 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 283, y: 383 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    loc: { x: 403, y: 465 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.streetAddress : "",
    loc: { x: 228, y: 492 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.residentCity : "",
    loc: { x: 195, y: 520 },
  }),
  (applicant) => ({
    text: 
      isMinor(applicant) ? 
      getJurisdiction(applicant.residentJurisdictionName)?.name : "",
    loc: { x: 407, y: 520 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.zip : "",
    loc: { x: 644, y: 520 },
  }),
  /** Exhibit C */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 103, y: 239 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 103, y: 256 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 134, y: 786 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    loc: { x: 134, y: 806 },
  }),
  () => ({
    text: "Personal Info Sheet",
    loc: { x: 580, y: 786 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "Personal Info Sheet" : "",
    loc: { x: 580, y: 806 },
  }),
];

/*!
 * Clermont County Release for Criminal Background Check (21.23) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const clermontAdultMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "AKA",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Printed Name",
  }),
];

/*!
 * Clermont County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const clermontMinorMap: Formfill[] = [
  /** Minor's Consent to Change of Name (21.4A)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text1",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "The undersigned",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "of",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "to",
  }),
  /** Release for Criminal Background Check of Minor (21.24)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Parent",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Minors Date of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "Minors AKA",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Minors Address",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Minors Printed Name",
  }),
];

/*!
 * Coshocton County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const coshoctonAdultMap: Formfill[] = [
  /** Consent and Release */
  () => ({
    check: true,
    fieldName: "NAME CHANGE OF",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "undefined_3",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Printed Name",
  }),
  /** Applicant Information */
  () => ({
    check: true,
    fieldName: "NAME CHANGE OF_2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CASE NO_2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "First_3",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "Text5",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Cell",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date_2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Printed Name_2",
  }),
];

/*!
 * Coshocton County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const coshoctonMinorMap: Formfill[] = [
  /** Consent and Release */
  () => ({
    check: true,
    fieldName: "NAME CHANGE OF",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "undefined_3",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Printed Name",
  }),
  /** Applicant Information */
  () => ({
    check: true,
    fieldName: "NAME CHANGE OF_2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CASE NO_2",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "First",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City_3",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Cell",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date_2",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Printed Name_2",
  }),
  /** Certificate of Service of Notice of Hearing of Change of Name of Minor */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CHANGE OF NAME OF Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO  Name Requested",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Mother",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Father",
  }),
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  () => ({
    check: true,
    fieldName: "Applicant",
  }),
];

/*!
 * Cuyahoga County Birth Certificate Information Form
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const cuyahogaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Original Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City of Birth",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State of Birth",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.birthJurisdictionName)?.name ? "USA" : "",
    fieldName: "Country of Birth",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `/S/ ${applicant.representativeName?.first ?? ""} ${applicant.representativeName?.last ?? ""}`
      : `/S/ ${applicant.legalName.first} ${applicant.legalName.last}`,
    fieldName: "Sign the name you are legally using now",
  }),
];

/*!
 * Delaware County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const delawareMap: Formfill[] = [
  /** Record Check Authorization, Waiver, and Consent (DCPC 17.0)*/
  () => ({
    check: true,
    fieldName: "Check Box3",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text7",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Text11",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text12",
  }),
  /** Non-Public Record Social Security Information (DCPC 17.11)*/
  () => ({
    check: true,
    fieldName: "Check Box13",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "undefined_2",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or legibly printed Name",
  }),
];

/*!
 * FairfieldName County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const fairfieldNameAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment (FC 75.1)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  /** Contact Information Form (FC 75.3-A)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "1_2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "2_2",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "3_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicants Telephone Number 1",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicants Telephone Number 2",
  }),
  /** Record Check Authorization, Waiver, and Consent */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requested Name",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Printed Name",
  }),
];

/*!
 * FairfieldName County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const fairfieldNameMinorMap: Formfill[] = [
  /** Self-Representation Acknowledgment (FC 75.1)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  /** Contact Information Form (FC 75.3-A)*/
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "1_2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "2_2",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "3_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicants Telephone Number 1",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicants Telephone Number 2",
  }),
  /** Record Check Authorization, Waiver, and Consent */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requested Name",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Printed Name",
  }),
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (21.4)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN RE CHANGE OF NAME OF",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Text1",
  }),
  /** Judgment Entry/Magistrate's Decision Change of Name of Minor (21.3)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Name at Birth",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 4, x: 70, y: 446 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    loc: { page: 4, x: 585, y: 446 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Old Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "New Name",
  }),
  () => ({
    check: true,
    fieldName: "undefined_3[0]",
  }),
];

/*!
 * Franklin County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const franklinAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (NC-21.0)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicant requests a change of name from",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "to",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "Check Box2",
  }),
  (applicant) => ({
    check: !applicant.isChangingLegalSex,
    fieldName: "Check Box3",
  }),
  (applicant) => ({
    text: !applicant.isChangingLegalSex ? applicant.reasonForNameChange : "",
    fieldName: "All other provide detailed reason for all other name changes 2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State Zip Code",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  /** Judgment Entry Changing Name of Adult (NC-21.1)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Applicants name at birth",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants current legal name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Applicants new legal name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Applicants date of birth",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State where birth record was issued",
  }),
];

/*!
 * Franklin County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const franklinMinorMap: Formfill[] = [
  /** Application and Affidavit for Change of Name of a Minor (21.2)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicant requests a change of name of the minor from",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "to",
  }),
  () => ({
    check: true,
    fieldName: "Check Box3",
  }),
  () => ({
    check: true,
    fieldName: "Check Box4",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "Check Box8",
  }),
  (applicant) => ({
    check: !applicant.isChangingLegalSex,
    fieldName: "Check Box9",
  }),
  (applicant) => ({
    text: !applicant.isChangingLegalSex ? applicant.reasonForNameChange : "",
    fieldName: "All other provide detailed reason for all other name changes 2",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Check Box10",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? fullName(representativeName(applicant))
      : "",
    fieldName: "Name",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.streetAddress : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
      : "",
    fieldName: "City State Zip Code",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Check Box14",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Check Box17",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Check Box19",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address_3",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State Zip Code_3",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  /** Waiver of Notice of Hearing and Consent to Change Name or to Conform Name of Minor (NC-21.4)*/
  /** Judgment Entry Changing Name of Adult (NC-21.3)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Minors name at birth",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Minors current name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Minors new name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Minors date of birth",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State where birth record was issued",
  }),
];

/*!
 * Geauga County Financial Disclosure / Fee Waiver Affidavit and Order (GCPF 65.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const geaugaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text1a",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.legalName.first,
    fieldName: "Text1a",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.last
      : applicant.legalName.last,
    fieldName: "Text4",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Text5",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Text7",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.legalName.first
        : "",
    fieldName: "Text8",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.legalName.last
        : "",
    fieldName: "Text9",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "x" : "",
    loc: { x: 423, y: 709 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "Child" : "",
    fieldName: "Text9",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "x" : "",
    loc: { x: 497, y: 740 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "Spouse" : "",
    fieldName: "Text13",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 90, y: 647 },
  }),
];

/*!
 * Greene County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const greeneMap: Formfill[] = [
  /** Contact Information Form (G.C. 75.3-A)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF THE NAME OF",
  }),
  () => ({
    check: true,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "1_2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "2_2",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "3_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicants Telephone Number 1",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicants Telephone Number 2",
  }),
  /** Self-Representation Acknowledgment (GC 75.1)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Legal Name",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
];

/*!
 * Hamilton County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hamiltonMap: Formfill[] = [
  /** Self-Representation Acknowledgment (H.C. 270.01)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CASE_NAME",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "APPLICANT",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "APPLICANT_STREET",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "APPLICANT_STATE",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "APPLICANT_PHONE",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "APPLICANT_EMAIL",
  }),
  /** Entry Dispensing With Hearing on Application to Change or Conform Name (H.C. 121.12)*/
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
];

/*!
 * Hardin County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hardinMap: Formfill[] = [
  /** Request for a Background Check via WebCheck */
  () => ({
    text: "X",
    loc: { x: 530, y: 114 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 100, y: 203 },
  }),
  (applicant) => ({
    text: !isMinor(applicant)
      ? formatDate(applicant.birthdate, {
          format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
          separator: "/",
        })
      : "",
    loc: { x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { x: 616, y: 482 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? "Applying for Name Change of Minor"
      : "Applying for Name Change",
    loc: { x: 60, y: 586 },
  }),
  () => ({
    text: "Hardin County Probate Court",
    loc: { x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "1 Courthouse Sq #200",
    loc: { x: 151, y: 985 },
  }),
  () => ({
    text: "Kenton",
    loc: { x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { x: 530, y: 1006 },
  }),
  () => ({
    text: "43326",
    loc: { x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Hardin County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 53, y: 314 },
  }),
];

/*!
 * Lake County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lakeAdultMap: Formfill[] = [
  /** Contact Information Form */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the Matter of",
  }),
  () => ({
    check: true,
    fieldName: "Original Contact",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant's Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City, State, Zip of Applicant",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicant's Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicant Email",
  }),
  /** Self-Representation Acknowledgment */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
];

/*!
 * Lake County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lakeMinorMap: Formfill[] = [
  /** Contact Information Form */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the Matter of",
  }),
  () => ({
    check: true,
    fieldName: "Original Contact",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant's Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City, State, Zip of Applicant",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicant's Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicant Email",
  }),
  /** Self-Representation Acknowledgment */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (LCPC 21.41)*/
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requested Name",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Change from",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "To Name",
  }),
];

/*!
 * Licking County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lickingAdultMap: Formfill[] = [
  /** Supplement to Application for Change of Name of Adult (21.0A) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 283, y: 130 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 1, x: 75, y: 164 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { page: 1, x: 200, y: 280 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { page: 1, x: 375, y: 280 },
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    loc: { page: 1, x: 525, y: 280 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 728, y: 280 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 175, y: 316 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    loc: { page: 1, x: 630, y: 316 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 193, y: 361 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 1, x: 480, y: 361 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { page: 1, x: 630, y: 361 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 1, x: 730, y: 361 },
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
      applicant.residentLocalityName)?.name,
    loc: { page: 1, x: 135, y: 398 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "x" : "",
    loc: { page: 1, x: 683, y: 893 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "" : "x",
    loc: { page: 1, x: 768, y: 893 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 1, x: 310, y: 927 },
  }),
  /** Release for Criminal Background Check - Adult (21.14)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 305, y: 132 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 3, x: 90, y: 185 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 3, x: 105, y: 452 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 510, y: 452 },
  }),
];

/*!
 * Licking County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lickingMinorMap: Formfill[] = [
  /** Supplement to Application for Change of Name of Minor (21.2A) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 283, y: 123 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 1, x: 75, y: 158 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { page: 1, x: 187, y: 268 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { page: 1, x: 330, y: 268 },
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    loc: { page: 1, x: 475, y: 268 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 685, y: 268 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { page: 1, x: 185, y: 309 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    loc: { page: 1, x: 630, y: 309 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 258, y: 358 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 1, x: 480, y: 358 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { page: 1, x: 630, y: 358 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 1, x: 745, y: 358 },
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
      applicant.residentLocalityName)?.name,
    loc: { page: 1, x: 140, y: 398 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 135, y: 566 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "Parent" : "",
    loc: { page: 1, x: 700, y: 565 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "x" : "",
    loc: { page: 2, x: 453, y: 302 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "" : "x",
    loc: { page: 2, x: 553, y: 302 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 2, x: 325, y: 352 },
  }),
  /** Release for Criminal Background Check - Adult (21.14A)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 305, y: 132 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 3, x: 90, y: 176 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 3, x: 105, y: 481 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 3, x: 510, y: 558 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 510, y: 618 },
  }),
];

/*!
 * Lucas County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lucasAdultMap: Formfill[] = [
  /** New Case Information Statement (1-AM) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "amJACK R PUFFENBERGER JUDGE",
  }),
  () => ({
    check: true,
    fieldName: "amCheck Box2",
  }),
  () => ({
    check: true,
    fieldName: "amCheck Box3.5",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "amundefined",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "amPrint Fiduciary Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "amAddress_2",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "amAddress.2",
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    fieldName: "amAddress.3",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "amOhio Supreme Court ID Number_2",
  }),
  /** Record Check Information Sheet (RRCPF) */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "p4applnm",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "p4appladdr",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "appldob",
  }),
  /** Request for a Background Check via WebCheck */
  () => ({
    text: "X",
    loc: { page: 3, x: 530, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 3, x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 3, x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 3, x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 3, x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { page: 3, x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 3, x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 3, x: 616, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { page: 3, x: 60, y: 586 },
  }),
  () => ({
    text: "Lucas County Probate Court",
    loc: { page: 3, x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "700 Adams St #200",
    loc: { page: 3, x: 151, y: 985 },
  }),
  () => ({
    text: "Toledo",
    loc: { page: 3, x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { page: 3, x: 530, y: 1006 },
  }),
  () => ({
    text: "43604",
    loc: { page: 3, x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Lucas County Probate Court",
    loc: { page: 4, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 53, y: 314 },
  }),
];

/*!
 * Lucas County New Case Information Statement (1-AM) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lucasMinorMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "amJACK R PUFFENBERGER JUDGE",
  }),
  () => ({
    check: true,
    fieldName: "amCheck Box2",
  }),
  () => ({
    check: true,
    fieldName: "amCheck Box3.5",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "amundefined",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "amPrint Fiduciary Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "amAddress_2",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "amAddress.2",
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    fieldName: "amAddress.3",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "amOhio Supreme Court ID Number_2",
  }),
];

/*!
 * Madison County Self-Representation Acknowledgment (GC 75.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const madisonMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name_3",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address_3",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City_3",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State_3",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip_3",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code_3",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
];

/*!
 * Mahoning County Consent to Webcheck Criminal Background Check (M.C. 1.11)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const mahoningMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "NAME CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State Zip Code",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number",
  }),
];

/*!
 * Marion County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const marionAdultGenderMap: Formfill[] = [
  /** Correction of Birth Record */
  () => ({
    text: formatDate(new Date().toLocaleDateString(), {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Birth_name",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "Check Box2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Name of Father",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Maiden Name of Mother",
  }),
  () => ({
    text: "Sex:",
    fieldName: "ITEM_1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "READ_AS_1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "SHOULD_READ_1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address",
  }),
  /** Affidavit to Correct Gender Marker in Birth Record for an Adult */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN RE THE BIRTH RECORD OF",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "Check BoxM",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "Check BoxF",
  }),
  /** Licensed Professional Statement to Correct Gender Record on Birth Record */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN RE BIRTH CORECTION OF",
  }),
];

/*!
 * Marion County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const marionMinorGenderMap: Formfill[] = [
  /** Correction of Birth Record */
  () => ({
    text: formatDate(new Date().toLocaleDateString(), {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Birth_name",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "Check Box1",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "Check Box2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Name of Father",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Maiden Name of Mother",
  }),
  () => ({
    text: "Sex:",
    fieldName: "ITEM_1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "READ_AS_1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "Male";
        case GenderMarker.F:
          return "Female";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "SHOULD_READ_1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address",
  }),
  /** Affidavit to Correct Gender Marker in Birth Record for an Adult */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN RE THE BIRTH RECORD OF",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "Check BoxM",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "Check BoxF",
  }),
  /** Licensed Professional Statement to Correct Gender Record on Birth Record */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN RE BIRTH CORECTION OF",
  }),
];

/*!
 * Medina County Self-Representation Acknowledgment
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const medinaMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
];

/*!
 * Miami County Vital Statistics Informational Form (VSI)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const miamiMap: Formfill[] = [
  (applicant) => ({
    text: `Name Change of ${fullName(applicant.legalName)}`,
    fieldName: "IN THE MATTER OF",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State of birth",
  }),
  (applicant) => ({
    text:
      getJurisdiction(applicant.birthJurisdictionName)?.name === "Ohio"
        ? "Ohio Bureau of Vital Statistics"
        : "",
    fieldName: "Name of Vital Statics Office",
  }),
  (applicant) => ({
    text:
      getJurisdiction(applicant.birthJurisdictionName)?.name === "Ohio" 
      ? "4200 Surface Road" : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name === "Ohio" 
      ? "Columbus" : "",
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name === "Ohio" 
      ? "43228" : "",
    fieldName: "Zip",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
];

/*!
 * Montgomery County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const montgomeryAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (P.C.F. 21.0)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current Legal Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requested Name",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "Reason 1",
  }),
  () => ({
    check: true,
    fieldName: "Birth Certificate",
  }),
  () => ({
    check: true,
    fieldName: "Social Security Card",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicant's  Signature",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant's Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "Applicant's City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "Applicant's State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Applicant's Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicant's Telephone Number",
  }),
  /** Magistrate's Decision; Change of Name of Adult (21.1.1)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Name as Appears on Birth Certificate",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "Month",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    ),
    fieldName: "Day",
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "Year",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City of Birth",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State of Birth",
  }),
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Adult (21.1)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "As Name Appears on Birth Certificate",
  }),
  /** Request for a Background Check via WebCheck */
  () => ({
    text: "X",
    loc: { page: 4, x: 248, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 4, x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 4, x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 4, x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 4, x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { page: 4, x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 4, x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 4, x: 616, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { page: 4, x: 60, y: 586 },
  }),
  () => ({
    text: "Montgomery County Probate Court",
    loc: { page: 4, x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "41 N Perry St",
    loc: { page: 4, x: 151, y: 985 },
  }),
  () => ({
    text: "Dayton",
    loc: { page: 4, x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { page: 4, x: 530, y: 1006 },
  }),
  () => ({
    text: "45402",
    loc: { page: 4, x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Montgomery County Probate Court",
    loc: { page: 5, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 5, x: 53, y: 314 },
  }),
];

/*!
 * Montgomery County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const montgomeryMinorMap: Formfill[] = [
  /** Application for Change of Name of Minor (21.2)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requested Name",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Parent",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Parent 1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Parent 1 Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Parent 1 Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "Parent 1 City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "Parent 1 State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Parent 1 zip",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Parent 2 address",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Parent 2",
  }),
  (applicant) => ({
    text: nameInitials(applicant.representativeName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    fieldName: "Initials has or has not been covvicted",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "has not been convicted",
  }),
  (applicant) => ({
    text: nameInitials(applicant.representativeName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    fieldName: "Initials duty to comply",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "has no duty",
  }),
  () => ({
    check: true,
    fieldName: "The applicant requests",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current Legal Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Requeste Name",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "Reason 2",
  }),
  () => ({
    check: true,
    fieldName: "Birth Certificate",
  }),
  () => ({
    check: true,
    fieldName: "Driver's License",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicant's printed name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant's Address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "Applicant's City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "Applicant's State",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Applicant's Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicant's Phone",
  }),
  /** Consent to Change of Name (21.4)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "OF",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "the change of name of",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "to",
  }),
  /** Magistrate's Decision: Change of Name of Minor (21.3.1)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { page: 4, x: 370, y: 417 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "Month",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.DAY],
        separator: "",
      }),
    ),
    fieldName: "Day",
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "Year",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City of Birth",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State of Birth",
  }),
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Minor (21.3)*/
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { page: 5, x: 390, y: 419 },
  }),
];

/*!
 * Ottawa County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ottawaAdultMap: Formfill[] = [
  /** New Case Information Sheet */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the Matter of",
  }),
  () => ({
    check: true,
    fieldName: "Name Change",
  }),
  () => ({
    check: true,
    fieldName: "undefined_5",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicant's Email Address",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicants Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "Applicants Address 2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicants Phone #",
  }),
  /** Release for Record Check (66.1)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed Name",
  }),
  /** Record Check Information Statement*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address 1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "Address 2",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
];

/*!
 * Ottawa County New Case Information Sheet (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ottawaMinorMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the Matter of",
  }),
  () => ({
    check: true,
    fieldName: "Name Change",
  }),
  () => ({
    check: true,
    fieldName: "undefined_5",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicant's Email Address",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicants Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "Applicants Address 2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Applicants Phone #",
  }),
];

/*!
 * Pike County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const pikeAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment */
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 110, y: 113 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 455, y: 890 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 455, y: 945 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { x: 455, y: 945 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { x: 570, y: 945 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { x: 640, y: 945 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 455, y: 972 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 455, y: 1000 },
  }),
  /** Request for a Background Check via WebCheck */
  () => ({
    text: "X",
    loc: { page: 1, x: 248, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 1, x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 1, x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { page: 1, x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { page: 1, x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 1, x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { page: 1, x: 616, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { page: 1, x: 60, y: 586 },
  }),
  () => ({
    text: "Pike County Probate Court",
    loc: { page: 1, x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "230 Waverly Plaza Suite 600",
    loc: { page: 1, x: 151, y: 985 },
  }),
  () => ({
    text: "Waverly",
    loc: { page: 1, x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { page: 1, x: 530, y: 1006 },
  }),
  () => ({
    text: "45690",
    loc: { page: 1, x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Pike County Probate Court",
    loc: { page: 2, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 53, y: 314 },
  }),
];

/*!
 * Pike County Self-Representation Acknowledgment (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const pikeMinorMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 110, y: 113 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 455, y: 890 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 455, y: 945 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { x: 455, y: 945 },
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    loc: { x: 570, y: 945 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { x: 640, y: 945 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 455, y: 972 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 455, y: 1000 },
  }),
];

/*!
 * Richland County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const richlandAdultMap: Formfill[] = [
  /** Record Check Authorization, Waiver and Consent (RCPC M2)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Typed or legibly printed Name",
  }),
  /** Judgment Entry - Change of Name of Adult (21.1)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current Legal Name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Applicants name at birth was",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Applicants date of birth is",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "Applicants place of birth is",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "New Legal Name",
  }),
];

/*!
 * Richland County Record Check Authorization, Waiver and Consent (RCPC M2) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const richlandMinorMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "IN THE MATTER OF",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or legibly printed Name",
  }),
];

/*!
 * Ross County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const rossMap: Formfill[] = [
  /** Self-Representation Acknowledgment */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email address",
  }),
  /** Name Change Application Supplement Affidavit */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "OF",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO",
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Printed",
  }),
];

/*!
 * Sandusky County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const sanduskyAdultMap: Formfill[] = [
  /** Affidavit in Support of Application for Change of Name of Adult */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
      applicant.residentLocalityName)?.name,
    loc: { x: 158, y: 376 },
  }),
  /** Ohio Court Network Background Check Application for Change of Name */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "First Middle Last",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Street Name City State Zip",
  }),
];

/*!
 * Sandusky County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const sanduskyMinorMap: Formfill[] = [
  /** Affidavit in Support of Application for Change of Name of Minor */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Minor's First, Middle, & Last Name",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
      applicant.residentLocalityName)?.name,
    loc: { x: 158, y: 376 },
  }),
  /** Ohio Court Network Background Check Application for Change of Name */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "First Middle Last",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Street Name City State Zip",
  }),
];

/*!
 * Summit County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const summitAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (21.0)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "reason-0",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State",
  }),
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { x: 79, y: 636 },
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "Checkbox-01",
  }),
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { x: 79, y: 676 },
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "Checkbox-02",
  }),
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { x: 79, y: 733 },
  }),
  () => ({
    check: true,
    fieldName: "Checkbox-03",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address_2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City_3",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State_3",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code_2",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicants Email Address",
  }),
  /** Addendum to Application for Change of Name of Adult (CN.2)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME_BEFORE-CN.2",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NAME_AFTER-CN.2",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Printed Name_01-CN.2",
  }),
  /** Affidavit in Support of Application to Conform or Change Name of an Adult or Minor (CN.6)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "OF",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO",
  }),
  () => ({
    check: true,
    fieldName: "Name Change-Name Conformity",
  }),
];

/*!
 * Summit County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const summitMinorMap: Formfill[] = [
  /** Application for Change of Name of Minor (21.2)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Present Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Name Requested",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Checkbox-01",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Checkbox-02",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? fullName(representativeName(applicant))
      : "",
    fieldName: "Name",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.streetAddress : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.residentCity : "",
    fieldName: "City",
  }),
  (applicant) => ({
    text: 
      applicant.parentsAreOkay ? 
      getJurisdiction(applicant.residentJurisdictionName)?.name : "",
    fieldName: "State",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.zip : "",
    fieldName: "Zip",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Checkbox-03",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "Checkbox-04",
  }),
  (applicant) => ({
    text: nameInitials(applicant.representativeName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { page: 1, x: 89, y: 227 },
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "Checkbox-09",
  }),
  (applicant) => ({
    text: nameInitials(applicant.representativeName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { page: 1, x: 89, y: 252 },
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "Checkbox-10",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City_3",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "State_3",
  }),
  () => ({
    check: true,
    fieldName: "Checkbox-11",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "reason-0",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Typed or Printed Name",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Address_4",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "City_5",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.name,
    fieldName: "State_5",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "Zip_4",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number include area code_2",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Applicants Email Address",
  }),
  /** Consent to Change of Name (21.4)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CHANGE OF NAME OF",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "TO",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "name of",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "as proposed in the Application",
  }),
  /** Affidavit in Support of Application to Conform or Change Name of an Adult or Minor (CN.6)*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "OF",
  }),
  () => ({
    check: true,
    fieldName: "Name Change-Name Conformity",
  }),
];

/*!
 * Trumbull County Consent to Webcheck Criminal Background Check (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const trumbullAdultMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { page: 2, x: 345, y: 250 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { page: 2, x: 345, y: 275 },
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { page: 2, x: 345, y: 300 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text1.0",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Text1.1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "Text1.2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Text1.3",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Text1.4",
  }),
];

/*!
 * Warren County Decision of Magistrate - Change of Name of Adult (21.1A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const warrenAdultMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PresentName",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "BirthName",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "BirthCity",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "BirthState",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NameChangedTo",
  }),
];

/*!
 * Warren County Decision of Magistrate - Change of Name of Minor (21.3A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const warrenMinorMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PresentName",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "BirthName",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "BirthCity",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.birthJurisdictionName)?.name,
    fieldName: "BirthState",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NameChangedTo",
  }),
];

/*!
 * Wayne County Record Check Authorization, Waiver, and Consent (15.0.2) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const wayneAdultMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Type of Action",
    choice: "Name Change/Name Conformity",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name of Individual",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Printed Full Name including middle name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "Prior Names including maiden name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number",
  }),
];

/*!
 * Williams County Adult Packet (forms listedbelow)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const williamsAdultMap: Formfill[] = [
  /** Request for a Background Check via WebCheck */
  () => ({
    text: "X",
    loc: { x: 248, y: 114 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 100, y: 203 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 140, y: 238 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { x: 115, y: 273 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 515, y: 273 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 555, y: 307 },
  }),
  () => ({
    text: "Other",
    loc: { x: 336, y: 446 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  }),
  () => ({
    text: "No O.R.C. Code",
    loc: { x: 616, y: 482 },
  }),
  () => ({
    text: "Applying for Name Change",
    loc: { x: 60, y: 586 },
  }),
  () => ({
    text: "Williams County Probate Court",
    loc: { x: 145, y: 928 },
  }),
  /** Judges Name Here */
  () => ({
    text: "1 Courthouse Sq 2nd Floor",
    loc: { x: 151, y: 985 },
  }),
  () => ({
    text: "Bryan",
    loc: { x: 87, y: 1006 },
  }),
  () => ({
    text: "Ohio",
    loc: { x: 530, y: 1006 },
  }),
  () => ({
    text: "43506",
    loc: { x: 666, y: 1006 },
  }),
  /** Waiver Form */
  () => ({
    text: "the Williams County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 53, y: 314 },
  }),
];

/**
 * Copyright 2023-2025 Sasha Li�kov� and Stephanie Beckon
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
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  nameInitials,
  addZero,
  representativeName,
  formatContactInfo,
  ContactFormat as cf,
} from "../../lib/util";

import {
  GenderMarker,
  DateFormatPart as DATE,
  NameFormatPart as FML,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

/**
 * Adams County Adult Packet (forms listed below)
 *
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adamsAdultMap: Formfill[] = [
  /** Notice of Appearance (AC-001) */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 133, y: 160 },
  },
  {
    text: () => "x",
    loc: { x: 197, y: 171 },
  },
  {
    text: () => "x",
    loc: { x: 411, y: 317 },
  },
  {
    text: () => "x",
    loc: { x: 127, y: 357 },
  },
  {
    text: (applicant) => applicant.legalName.first,
    loc: { x: 127, y: 459 },
  },
  {
    text: (applicant) => applicant.legalName.middle,
    loc: { x: 335, y: 459 },
  },
  {
    text: (applicant) => applicant.legalName.last,
    loc: { x: 506, y: 459 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 127, y: 518 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 127, y: 556 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { x: 365, y: 556 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 512, y: 556 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 127, y: 596 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 510, y: 596 },
  },
  /** Waiver of Counsel (AC-002) */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 130, y: 156 },
  },
  {
    text: () => "x",
    loc: { page: 1, x: 179, y: 168 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 520, y: 676 },
  },
  /** Authorization for Release of Information (AC-007) */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 120, y: 294 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 2, x: 405, y: 294 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 2, x: 405, y: 346 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { page: 2, x: 582, y: 346 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 2, x: 683, y: 346 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 2, x: 375, y: 538 },
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 2, x: 375, y: 748 },
  },
  /** Webcheck Beckgound Check Form */
  {
    text: () => "X",
    loc: { page: 3, x: 530, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 3, x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 3, x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 3, x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 3, x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 3, x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { page: 3, x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 3, x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 3, x: 616, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { page: 3, x: 60, y: 586 },
  },
  {
    text: () => "Adams County Probate Court",
    loc: { page: 3, x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "110 W Main St #221",
    loc: { page: 3, x: 151, y: 985 },
  },
  {
    text: () => "West Union",
    loc: { page: 3, x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { page: 3, x: 530, y: 1006 },
  },
  {
    text: () => "45693",
    loc: { page: 3, x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Adams County Probate Court",
    loc: { page: 4, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 53, y: 314 },
  },
];

/**
 * Adams County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adamsMinorMap: Formfill[] = [
  /** Notice of Appearance (AC-001) */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 133, y: 160 },
  },
  {
    text: () => "x",
    loc: { x: 197, y: 171 },
  },
  {
    text: () => "x",
    loc: { x: 411, y: 317 },
  },
  {
    text: () => "x",
    loc: { x: 127, y: 357 },
  },
  {
    text: (applicant) => applicant.representativeName?.first,
    loc: { x: 127, y: 459 },
  },
  {
    text: (applicant) => applicant.representativeName?.middle,
    loc: { x: 335, y: 459 },
  },
  {
    text: (applicant) => applicant.representativeName?.last,
    loc: { x: 506, y: 459 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 127, y: 518 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 127, y: 556 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { x: 365, y: 556 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 512, y: 556 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 127, y: 596 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 510, y: 596 },
  },
  /** Waiver of Counsel (AC-002) */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 130, y: 156 },
  },
  {
    text: () => "x",
    loc: { page: 1, x: 179, y: 168 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 520, y: 676 },
  },
  /** Authorization for Release of Information (AC-007) */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 2, x: 120, y: 294 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 2, x: 405, y: 294 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 2, x: 405, y: 346 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { page: 2, x: 582, y: 346 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 2, x: 683, y: 346 },
  },
];

/**
 * Ashland County Name Change Supplemental Affidavit (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashlandAdultMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text1",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Text2",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "Text10",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text21",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "CheckBox2",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "CheckBox4",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text22",
  },
];

/**
 * Ashtabula County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashtabulaAdultMap: Formfill[] = [
  /** Required Information Sheet - Name Change (PRB-NC-ARIS)*/
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CURRENT",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NEW",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "ST",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "CSZ",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.BirthCityAndState),
    field: "CSBTH",
  },
  /** Webcheck Beckgound Check Form */
  {
    text: () => "X",
    loc: { page: 1, x: 248, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 1, x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 1, x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 1, x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { page: 1, x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 1, x: 433, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { page: 1, x: 60, y: 586 },
  },
  {
    text: () => "Ashtabula County Probate Court",
    loc: { page: 1, x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "25 W Jefferson St",
    loc: { page: 1, x: 151, y: 985 },
  },
  {
    text: () => "Jefferson",
    loc: { page: 1, x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { page: 1, x: 530, y: 1006 },
  },
  {
    text: () => "44047",
    loc: { page: 1, x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Ashtabula County Probate Court",
    loc: { page: 2, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 53, y: 314 },
  },
];

/**
 * Ashtabula County Required Information Sheet - Name Change (PRB-NC-ARIS) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ashtabulaMinorMap: Formfill[] = [
  {
    check: () => true,
    field: "Check Box2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CURRENT",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NEW",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "ST",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "CSZ",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.BirthCityAndState),
    field: "CSBTH",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? fullName(representativeName(applicant)) : "",
    field: "Name",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.streetAddress : "",
    field: "ST2",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay
        ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
        : undefined,
    field: "CSZ2",
  },
];

/**
 * Auglaize County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const auglaizeAdultMap: Formfill[] = [
  /** Webcheck Beckgound Check Form */
  {
    text: () => "X",
    loc: { x: 248, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { x: 60, y: 586 },
  },
  {
    text: () => "Auglaize County Probate Court",
    loc: { x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "201 Willipie St # 119",
    loc: { x: 151, y: 985 },
  },
  {
    text: () => "Wapakoneta",
    loc: { x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { x: 530, y: 1006 },
  },
  {
    text: () => "45895",
    loc: { x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Auglaize County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 53, y: 314 },
  },
];

/**
 * Auglaize County Minor Name Change Best Interests of Child
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const auglaizeMinorMap: Formfill[] = [
  {
    text: (applicant) =>
      applicant.parentsAreOkay &&
      applicant.chosenName.last === applicant.representativeName?.last
        ? "The childs last name is the same as the child's residential parent."
        : "",
    loc: { x: 130, y: 574 },
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay &&
      applicant.chosenName.last === applicant.representativeName?.last
        ? "Not applicable, see #5."
        : "",
    loc: { x: 130, y: 683 },
  },
];

/**
 * Butler County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const butlerAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment (BCPC 638)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "CityStateZip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  /** Application Addendum (BCPC 639)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: () => "X",
    loc: { page: 1, x: 101, y: 330 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "AddendumPg1Bx1.7",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "AddendumPg1Bx1.8",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "AddendumPg1Bx1.9",
  },
  {
    text: (applicant) => applicant.phone,
    field: "AddendumPg1Bx1.10",
  },
  {
    text: (applicant) => applicant.email,
    field: "AddendumPg1Bx1.11",
  },
  /** Webcheck Fingerprint Information */
  {
    check: () => true,
    field: "BCI - State of Ohio",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "Last Name",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "First name",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "Middle Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.M ? "Male" : "",
    loc: { x: 265, y: 183 },
  },
  {
    text: (applicant) =>
      applicant.assignedSex === GenderMarker.F ? "Female" : "",
    loc: { x: 265, y: 183 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip Code",
  },
  {
    text: () => "No O.R.C. Code - Other: Name Change",
    field: "O.R.C. Code - Reason for Fingerprinting",
  },
  /** Add Judges name to below entry. */
  {
    text: () => "Judge , Butler County Probate Court",
    field: "Recipient Name",
  },
  {
    text: () => "101 High Street, Second Floor",
    field: "Recipient Street Address",
  },
  {
    text: () => "Hamilton",
    field: "Recipient City",
  },
  {
    text: () => "Ohio",
    field: "Recipient State",
  },
  {
    text: () => "45011",
    field: "Recipient Zip Code",
  },
];

/**
 * Butler County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const butlerMinorMap: Formfill[] = [
  /** Self-Representation Acknowledgment (BCPC 638)*/
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "CityStateZip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  /** Application Addendum (BCPC 639)*/
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "IN THE MATTER OF",
  },
  {
    text: () => "X",
    loc: { page: 1, x: 101, y: 330 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "AddendumPg1Bx1.7",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "AddendumPg1Bx1.8",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "AddendumPg1Bx1.9",
  },
  {
    text: (applicant) => applicant.phone,
    field: "AddendumPg1Bx1.10",
  },
  {
    text: (applicant) => applicant.email,
    field: "AddendumPg1Bx1.11",
  },
  /** Record Check Authorization, Waiver, and Consent (BCPC 641)*/
  {
    check: () => true,
    field: "Check Box3",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text7",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Text11",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Text12",
  },
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (BCPC 21.4L)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Legal Name",
  },
];

/**
 * Champaign County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const champaignMap: Formfill[] = [
  /** Personal Information Sheet */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 247, y: 244 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 240, y: 273 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 206, y: 300 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { x: 407, y: 300 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 635, y: 300 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 220, y: 345 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 290, y: 355 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 283, y: 383 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    loc: { x: 403, y: 465 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? applicant.streetAddress : ""),
    loc: { x: 228, y: 492 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? applicant.residentCity : ""),
    loc: { x: 195, y: 520 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? applicant.residentJurisdiction?.name : "",
    loc: { x: 407, y: 520 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? applicant.zip : ""),
    loc: { x: 644, y: 520 },
  },
  /** Exhibit C */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 103, y: 239 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 103, y: 256 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 134, y: 786 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    loc: { x: 134, y: 806 },
  },
  {
    text: () => "Personal Info Sheet",
    loc: { x: 580, y: 786 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "Personal Info Sheet" : ""),
    loc: { x: 580, y: 806 },
  },
];

/**
 * Clermont County Release for Criminal Background Check (21.23) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const clermontAdultMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    field: "AKA",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Address",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Printed Name",
  },
];

/**
 * Clermont County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const clermontMinorMap: Formfill[] = [
  /** Minor's Consent to Change of Name (21.4A)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text1",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "The undersigned",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "of",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "to",
  },
  /** Release for Criminal Background Check of Minor (21.24)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Parent",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box1",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Minors Date of Birth",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    field: "Minors AKA",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Minors Address",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Minors Printed Name",
  },
];

/**
 * Coshocton County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const coshoctonAdultMap: Formfill[] = [
  /** Consent and Release */
  {
    check: () => true,
    field: "NAME CHANGE OF",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "undefined_3",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Printed Name",
  },
  /** Applicant Information */
  {
    check: () => true,
    field: "NAME CHANGE OF_2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CASE NO_2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "First_3",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "Text5",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Cell",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DATE OF BIRTH",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date_2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Printed Name_2",
  },
];

/**
 * Coshocton County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const coshoctonMinorMap: Formfill[] = [
  /** Consent and Release */
  {
    check: () => true,
    field: "NAME CHANGE OF",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "undefined_3",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicants Printed Name",
  },
  /** Applicant Information */
  {
    check: () => true,
    field: "NAME CHANGE OF_2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CASE NO_2",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "First",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City_3",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Cell",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DATE OF BIRTH",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date_2",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicants Printed Name_2",
  },
  /** Certificate of Service of Notice of Hearing of Change of Name of Minor */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CHANGE OF NAME OF Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO  Name Requested",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Mother",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Father",
  },
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    check: () => true,
    field: "Applicant",
  },
];

/**
 * Cuyahoga County Birth Certificate Information Form
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const cuyahogaMap: Formfill[] = [
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Original Name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City of Birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State of Birth",
  },
  {
    text: (applicant) => (applicant.birthJurisdiction ? "USA" : ""),
    field: "Country of Birth",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `/S/ ${applicant.representativeName?.first ?? ""} ${applicant.representativeName?.last ?? ""}`
        : `/S/ ${applicant.legalName.first} ${applicant.legalName.last}`,
    field: "Sign the name you are legally using now",
  },
];

/**
 * Delaware County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const delawareMap: Formfill[] = [
  /** Record Check Authorization, Waiver, and Consent (DCPC 17.0)*/
  {
    check: () => true,
    field: "Check Box3",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text7",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Text11",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Text12",
  },
  /** Non-Public Record Social Security Information (DCPC 17.11)*/
  {
    check: () => true,
    field: "Check Box13",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "undefined_2",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or legibly printed Name",
  },
];

/**
 * Fairfield County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const fairfieldAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment (FC 75.1)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  /** Contact Information Form (FC 75.3-A)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "1_2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "2_2",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "3_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicants Telephone Number 1",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicants Telephone Number 2",
  },
  /** Record Check Authorization, Waiver, and Consent */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requested Name",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Printed Name",
  },
];

/**
 * Fairfield County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const fairfieldMinorMap: Formfill[] = [
  /** Self-Representation Acknowledgment (FC 75.1)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  /** Contact Information Form (FC 75.3-A)*/
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "1_2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "2_2",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "3_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicants Telephone Number 1",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicants Telephone Number 2",
  },
  /** Record Check Authorization, Waiver, and Consent */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requested Name",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Printed Name",
  },
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (21.4)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN RE CHANGE OF NAME OF",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Text1",
  },
  /** Judgment Entry/Magistrate's Decision Change of Name of Minor (21.3)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Name at Birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 4, x: 70, y: 446 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    loc: { page: 4, x: 585, y: 446 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Old Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "New Name",
  },
  {
    check: () => true,
    field: "undefined_3[0]",
  },
];

/**
 * Franklin County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const franklinAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (NC-21.0)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicant requests a change of name from",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "to",
  },
  {
    check: (applicant) => applicant.isChangingLegalSex,
    field: "Check Box2",
  },
  {
    check: (applicant) => !applicant.isChangingLegalSex,
    field: "Check Box3",
  },
  {
    text: (applicant) =>
      !applicant.isChangingLegalSex ? applicant.reasonForNameChange : "",
    field: "All other provide detailed reason for all other name changes 2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State Zip Code",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  /** Judgment Entry Changing Name of Adult (NC-21.1)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Applicants name at birth",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants current legal name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Applicants new legal name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Applicants date of birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State where birth record was issued",
  },
];

/**
 * Franklin County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const franklinMinorMap: Formfill[] = [
  /** Application and Affidavit for Change of Name of a Minor (21.2)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicant requests a change of name of the minor from",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "to",
  },
  {
    check: () => true,
    field: "Check Box3",
  },
  {
    check: () => true,
    field: "Check Box4",
  },
  {
    check: (applicant) => applicant.isChangingLegalSex,
    field: "Check Box8",
  },
  {
    check: (applicant) => !applicant.isChangingLegalSex,
    field: "Check Box9",
  },
  {
    text: (applicant) =>
      !applicant.isChangingLegalSex ? applicant.reasonForNameChange : "",
    field: "All other provide detailed reason for all other name changes 2",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box10",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? fullName(representativeName(applicant)) : "",
    field: "Name",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay
        ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
        : "",
    field: "City State Zip Code",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box14",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box17",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box19",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address_3",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State Zip Code_3",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  /** Waiver of Notice of Hearing and Consent to Change Name or to Conform Name of Minor (NC-21.4)*/
  /** Judgment Entry Changing Name of Adult (NC-21.3)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Minors name at birth",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Minors current name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Minors new name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Minors date of birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State where birth record was issued",
  },
];

/**
 * Geauga County Financial Disclosure / Fee Waiver Affidavit and Order (GCPF 65.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const geaugaMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text1a",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName.first,
    field: "Text1a",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName.last,
    field: "Text4",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Text5",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Text7",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.legalName.first
        : "",
    field: "Text8",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay
        ? applicant.legalName.last
        : "",
    field: "Text9",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay ? "x" : "",
    loc: { x: 423, y: 709 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay ? "Child" : "",
    field: "Text9",
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay ? "x" : "",
    loc: { x: 497, y: 740 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay ? "Spouse" : "",
    field: "Text13",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 90, y: 647 },
  },
];

/**
 * Greene County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const greeneMap: Formfill[] = [
  /** Contact Information Form (G.C. 75.3-A)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF THE NAME OF",
  },
  {
    check: () => true,
    field: "Check Box1",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "1_2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "2_2",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "3_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicants Telephone Number 1",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicants Telephone Number 2",
  },
  /** Self-Representation Acknowledgment (GC 75.1)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Legal Name",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
];

/**
 * Hamilton County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hamiltonMap: Formfill[] = [
  /** Self-Representation Acknowledgment (H.C. 270.01)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CASE_NAME",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "APPLICANT",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "APPLICANT_STREET",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "APPLICANT_STATE",
  },
  {
    text: (applicant) => applicant.phone,
    field: "APPLICANT_PHONE",
  },
  {
    text: (applicant) => applicant.email,
    field: "APPLICANT_EMAIL",
  },
  /** Entry Dispensing With Hearing on Application to Change or Conform Name (H.C. 121.12)*/
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
];

/**
 * Hardin County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hardinMap: Formfill[] = [
  /** Request for a Background Check via WebCheck */
  {
    text: () => "X",
    loc: { x: 530, y: 114 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      !isMinor(applicant)
        ? formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
          })
        : "",
    loc: { x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { x: 616, y: 482 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? "Applying for Name Change of Minor"
        : "Applying for Name Change",
    loc: { x: 60, y: 586 },
  },
  {
    text: () => "Hardin County Probate Court",
    loc: { x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "1 Courthouse Sq #200",
    loc: { x: 151, y: 985 },
  },
  {
    text: () => "Kenton",
    loc: { x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { x: 530, y: 1006 },
  },
  {
    text: () => "43326",
    loc: { x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Hardin County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 53, y: 314 },
  },
];

/**
 * Lake County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lakeAdultMap: Formfill[] = [
  /** Contact Information Form */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "In the Matter of",
  },
  {
    check: () => true,
    field: "Original Contact",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicant's Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City, State, Zip of Applicant",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicant's Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicant Email",
  },
  /** Self-Representation Acknowledgment */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
];

/**
 * Lake County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lakeMinorMap: Formfill[] = [
  /** Contact Information Form */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "In the Matter of",
  },
  {
    check: () => true,
    field: "Original Contact",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicants Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicant's Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City, State, Zip of Applicant",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicant's Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicant Email",
  },
  /** Self-Representation Acknowledgment */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
  /** Waiver of Notice of Hearing and Consent to Change of Name of Minor (LCPC 21.41)*/
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requested Name",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Change from",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "To Name",
  },
];

/**
 * Licking County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lickingAdultMap: Formfill[] = [
  /** Supplement to Application for Change of Name of Adult (21.0A) */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 283, y: 130 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 1, x: 75, y: 164 },
  },
  {
    text: (applicant) => applicant.legalName.first,
    loc: { page: 1, x: 200, y: 280 },
  },
  {
    text: (applicant) => applicant.legalName.middle,
    loc: { page: 1, x: 375, y: 280 },
  },
  {
    text: (applicant) => applicant.legalName.last,
    loc: { page: 1, x: 525, y: 280 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 728, y: 280 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 1, x: 175, y: 316 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    loc: { page: 1, x: 630, y: 316 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 193, y: 361 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 480, y: 361 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { page: 1, x: 630, y: 361 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 730, y: 361 },
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    loc: { page: 1, x: 135, y: 398 },
  },
  {
    text: (applicant) => (fullName(applicant.birthName) ? "x" : ""),
    loc: { page: 1, x: 683, y: 893 },
  },
  {
    text: (applicant) => (fullName(applicant.birthName) ? "" : "x"),
    loc: { page: 1, x: 768, y: 893 },
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 1, x: 310, y: 927 },
  },
  /** Release for Criminal Background Check - Adult (21.14)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 305, y: 132 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 3, x: 90, y: 185 },
  },
  {
    text: () => new Date().toLocaleDateString(),
    loc: { page: 3, x: 105, y: 452 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 510, y: 452 },
  },
];

/**
 * Licking County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lickingMinorMap: Formfill[] = [
  /** Supplement to Application for Change of Name of Minor (21.2A) */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 283, y: 123 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 1, x: 75, y: 158 },
  },
  {
    text: (applicant) => applicant.legalName.first,
    loc: { page: 1, x: 187, y: 268 },
  },
  {
    text: (applicant) => applicant.legalName.middle,
    loc: { page: 1, x: 330, y: 268 },
  },
  {
    text: (applicant) => applicant.legalName.last,
    loc: { page: 1, x: 475, y: 268 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 685, y: 268 },
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 1, x: 185, y: 309 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    loc: { page: 1, x: 630, y: 309 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 258, y: 358 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 480, y: 358 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { page: 1, x: 630, y: 358 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 745, y: 358 },
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    loc: { page: 1, x: 140, y: 398 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 135, y: 566 },
  },
  {
    text: (applicant) => (applicant.parentsAreOkay ? "Parent" : ""),
    loc: { page: 1, x: 700, y: 565 },
  },
  {
    text: (applicant) => (fullName(applicant.birthName) ? "x" : ""),
    loc: { page: 2, x: 453, y: 302 },
  },
  {
    text: (applicant) => (fullName(applicant.birthName) ? "" : "x"),
    loc: { page: 2, x: 553, y: 302 },
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { page: 2, x: 325, y: 352 },
  },
  /** Release for Criminal Background Check - Adult (21.14A)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 305, y: 132 },
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    loc: { page: 3, x: 90, y: 176 },
  },
  {
    text: () => new Date().toLocaleDateString(),
    loc: { page: 3, x: 105, y: 481 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 3, x: 510, y: 558 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 510, y: 618 },
  },
];

/**
 * Lucas County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lucasAdultMap: Formfill[] = [
  /** New Case Information Statement (1-AM) */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "amJACK R PUFFENBERGER JUDGE",
  },
  {
    check: () => true,
    field: "amCheck Box2",
  },
  {
    check: () => true,
    field: "amCheck Box3.5",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "amundefined",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "amPrint Fiduciary Name",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "amAddress_2",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "amAddress.2",
  },
  {
    text: (applicant) =>
      `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    field: "amAddress.3",
  },
  {
    text: (applicant) => applicant.email,
    field: "amOhio Supreme Court ID Number_2",
  },
  /** Record Check Information Sheet (RRCPF) */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "p4applnm",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "p4appladdr",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "appldob",
  },
  /** Request for a Background Check via WebCheck */
  {
    text: () => "X",
    loc: { page: 3, x: 530, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 3, x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 3, x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 3, x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 3, x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 3, x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { page: 3, x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 3, x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 3, x: 616, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { page: 3, x: 60, y: 586 },
  },
  {
    text: () => "Lucas County Probate Court",
    loc: { page: 3, x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "700 Adams St #200",
    loc: { page: 3, x: 151, y: 985 },
  },
  {
    text: () => "Toledo",
    loc: { page: 3, x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { page: 3, x: 530, y: 1006 },
  },
  {
    text: () => "43604",
    loc: { page: 3, x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Lucas County Probate Court",
    loc: { page: 4, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 53, y: 314 },
  },
];

/**
 * Lucas County New Case Information Statement (1-AM) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const lucasMinorMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "amJACK R PUFFENBERGER JUDGE",
  },
  {
    check: () => true,
    field: "amCheck Box2",
  },
  {
    check: () => true,
    field: "amCheck Box3.5",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "amundefined",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "amPrint Fiduciary Name",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "amAddress_2",
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: "amAddress.2",
  },
  {
    text: (applicant) =>
      `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    field: "amAddress.3",
  },
  {
    text: (applicant) => applicant.email,
    field: "amOhio Supreme Court ID Number_2",
  },
];

/**
 * Madison County Self-Representation Acknowledgment (GC 75.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const madisonMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name_3",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address_3",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City_3",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State_3",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip_3",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code_3",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
];

/**
 * Mahoning County Consent to Webcheck Criminal Background Check (M.C. 1.11)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const mahoningMap: Formfill[] = [
  {
    check: () => true,
    field: "NAME CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Name",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State Zip Code",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number",
  },
];

/**
 * Marion County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const marionAdultGenderMap: Formfill[] = [
  /** Correction of Birth Record */
  {
    text: () =>
      formatDate(new Date().toLocaleDateString(), {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Name",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Birth_name",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    field: "Check Box1",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    field: "Check Box2",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Name of Father",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Maiden Name of Mother",
  },
  {
    text: () => "Sex:",
    field: "ITEM_1",
  },
  {
    text: (applicant) => {
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
    },
    field: "READ_AS_1",
  },
  {
    text: (applicant) => {
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
    },
    field: "SHOULD_READ_1",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Address",
  },
  /** Affidavit to Correct Gender Marker in Birth Record for an Adult */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN RE THE BIRTH RECORD OF",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "Check BoxM",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "Check BoxF",
  },
  /** Licensed Professional Statement to Correct Gender Record on Birth Record */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN RE BIRTH CORECTION OF",
  },
];

/**
 * Marion County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const marionMinorGenderMap: Formfill[] = [
  /** Correction of Birth Record */
  {
    text: () =>
      formatDate(new Date().toLocaleDateString(), {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Name",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Birth_name",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    field: "Check Box1",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    field: "Check Box2",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Name of Father",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Maiden Name of Mother",
  },
  {
    text: () => "Sex:",
    field: "ITEM_1",
  },
  {
    text: (applicant) => {
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
    },
    field: "READ_AS_1",
  },
  {
    text: (applicant) => {
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
    },
    field: "SHOULD_READ_1",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Address",
  },
  /** Affidavit to Correct Gender Marker in Birth Record for an Adult */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN RE THE BIRTH RECORD OF",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "Check BoxM",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "Check BoxF",
  },
  /** Licensed Professional Statement to Correct Gender Record on Birth Record */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN RE BIRTH CORECTION OF",
  },
];

/**
 * Medina County Self-Representation Acknowledgment
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const medinaMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email Address",
  },
];

/**
 * Miami County Vital Statistics Informational Form (VSI)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const miamiMap: Formfill[] = [
  {
    text: (applicant) => `Name Change of ${fullName(applicant.legalName)}`,
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State of birth",
  },
  {
    text: (applicant) =>
      applicant.birthJurisdiction?.name === "Ohio"
        ? "Ohio Bureau of Vital Statistics"
        : "",
    field: "Name of Vital Statics Office",
  },
  {
    text: (applicant) =>
      applicant.birthJurisdiction?.name === "Ohio" ? "4200 Surface Road" : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      applicant.birthJurisdiction?.name === "Ohio" ? "Columbus" : "",
    field: "City",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) =>
      applicant.birthJurisdiction?.name === "Ohio" ? "43228" : "",
    field: "Zip",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
];

/**
 * Montgomery County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const montgomeryAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (P.C.F. 21.0)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Current Legal Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requested Name",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "Reason 1",
  },
  {
    check: () => true,
    field: "Birth Certificate",
  },
  {
    check: () => true,
    field: "Social Security Card",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicant's  Signature",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicant's Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "Applicant's City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "Applicant's State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Applicant's Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicant's Telephone Number",
  },
  /** Magistrate's Decision; Change of Name of Adult (21.1.1)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Name as Appears on Birth Certificate",
  },
  {
    text: (applicant) =>
      addZero(
        formatDate(applicant.birthdate, {
          format: [DATE.MONTH],
          separator: "",
        }),
      ),
    field: "Month",
  },
  {
    text: (applicant) =>
      addZero(
        formatDate(applicant.birthdate, {
          format: [DATE.DAY],
          separator: "",
        }),
      ),
    field: "Day",
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    field: "Year",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City of Birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State of Birth",
  },
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Adult (21.1)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "As Name Appears on Birth Certificate",
  },
  /** Request for a Background Check via WebCheck */
  {
    text: () => "X",
    loc: { page: 4, x: 248, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 4, x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 4, x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 4, x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 4, x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { page: 4, x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 4, x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 4, x: 616, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { page: 4, x: 60, y: 586 },
  },
  {
    text: () => "Montgomery County Probate Court",
    loc: { page: 4, x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "41 N Perry St",
    loc: { page: 4, x: 151, y: 985 },
  },
  {
    text: () => "Dayton",
    loc: { page: 4, x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { page: 4, x: 530, y: 1006 },
  },
  {
    text: () => "45402",
    loc: { page: 4, x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Montgomery County Probate Court",
    loc: { page: 5, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 5, x: 53, y: 314 },
  },
];

/**
 * Montgomery County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const montgomeryMinorMap: Formfill[] = [
  /** Application for Change of Name of Minor (21.2)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requested Name",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Parent",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Parent 1",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Parent 1 Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Parent 1 Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "Parent 1 City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "Parent 1 State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Parent 1 zip",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Parent 2 address",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Parent 2",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.representativeName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    field: "Initials has or has not been covvicted",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "has not been convicted",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.representativeName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    field: "Initials duty to comply",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "has no duty",
  },
  {
    check: () => true,
    field: "The applicant requests",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Current Legal Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Requeste Name",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "Reason 2",
  },
  {
    check: () => true,
    field: "Birth Certificate",
  },
  {
    check: () => true,
    field: "Driver's License",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicant's printed name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicant's Address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "Applicant's City",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "Applicant's State",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Applicant's Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicant's Phone",
  },
  /** Consent to Change of Name (21.4)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "OF",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "the change of name of",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "to",
  },
  /** Magistrate's Decision: Change of Name of Minor (21.3.1)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    loc: { page: 4, x: 370, y: 417 },
  },
  {
    text: (applicant) =>
      addZero(
        formatDate(applicant.birthdate, {
          format: [DATE.MONTH],
          separator: "",
        }),
      ),
    field: "Month",
  },
  {
    text: (applicant) =>
      addZero(
        formatDate(applicant.birthdate, {
          format: [DATE.DAY],
          separator: "",
        }),
      ),
    field: "Day",
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.YEAR],
        separator: "",
      }),
    field: "Year",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City of Birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State of Birth",
  },
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Minor (21.3)*/
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    loc: { page: 5, x: 390, y: 419 },
  },
];

/**
 * Ottawa County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ottawaAdultMap: Formfill[] = [
  /** New Case Information Sheet */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "In the Matter of",
  },
  {
    check: () => true,
    field: "Name Change",
  },
  {
    check: () => true,
    field: "undefined_5",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicant's Email Address",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicants Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "Applicants Address 2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicants Phone #",
  },
  /** Release for Record Check (66.1)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed Name",
  },
  /** Record Check Information Statement*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address 1",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "Address 2",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
];

/**
 * Ottawa County New Case Information Sheet (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const ottawaMinorMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "In the Matter of",
  },
  {
    check: () => true,
    field: "Name Change",
  },
  {
    check: () => true,
    field: "undefined_5",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicant's Email Address",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicants Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "Applicants Address 2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Applicants Phone #",
  },
];

/**
 * Pike County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const pikeAdultMap: Formfill[] = [
  /** Self-Representation Acknowledgment */
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 110, y: 113 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 455, y: 890 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 455, y: 945 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 455, y: 945 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { x: 570, y: 945 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 640, y: 945 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 455, y: 972 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 455, y: 1000 },
  },
  /** Request for a Background Check via WebCheck */
  {
    text: () => "X",
    loc: { page: 1, x: 248, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 1, x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 1, x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { page: 1, x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { page: 1, x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 1, x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { page: 1, x: 616, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { page: 1, x: 60, y: 586 },
  },
  {
    text: () => "Pike County Probate Court",
    loc: { page: 1, x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "230 Waverly Plaza Suite 600",
    loc: { page: 1, x: 151, y: 985 },
  },
  {
    text: () => "Waverly",
    loc: { page: 1, x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { page: 1, x: 530, y: 1006 },
  },
  {
    text: () => "45690",
    loc: { page: 1, x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Pike County Probate Court",
    loc: { page: 2, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 53, y: 314 },
  },
];

/**
 * Pike County Self-Representation Acknowledgment (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const pikeMinorMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 110, y: 113 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 455, y: 890 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 455, y: 945 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { x: 455, y: 945 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    loc: { x: 570, y: 945 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { x: 640, y: 945 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 455, y: 972 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 455, y: 1000 },
  },
];

/**
 * Richland County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const richlandAdultMap: Formfill[] = [
  /** Record Check Authorization, Waiver and Consent (RCPC M2)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Typed or legibly printed Name",
  },
  /** Judgment Entry - Change of Name of Adult (21.1)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Current Legal Name",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Applicants name at birth was",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Applicants date of birth is",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.BirthCityAndState),
    field: "Applicants place of birth is",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "New Legal Name",
  },
];

/**
 * Richland County Record Check Authorization, Waiver and Consent (RCPC M2) (Minor)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const richlandMinorMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "IN THE MATTER OF",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or legibly printed Name",
  },
];

/**
 * Ross County Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const rossMap: Formfill[] = [
  /** Self-Representation Acknowledgment */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State Zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email address",
  },
  /** Name Change Application Supplement Affidavit */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "OF",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO",
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: "Date",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Printed",
  },
];

/**
 * Sandusky County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const sanduskyAdultMap: Formfill[] = [
  /** Affidavit in Support of Application for Change of Name of Adult */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    loc: { x: 158, y: 376 },
  },
  /** Ohio Court Network Background Check Application for Change of Name */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "First Middle Last",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Street Name City State Zip",
  },
];

/**
 * Sandusky County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const sanduskyMinorMap: Formfill[] = [
  /** Affidavit in Support of Application for Change of Name of Minor */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Minor's First, Middle, & Last Name",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    loc: { x: 158, y: 376 },
  },
  /** Ohio Court Network Background Check Application for Change of Name */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "First Middle Last",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Street Name City State Zip",
  },
];

/**
 * Summit County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const summitAdultMap: Formfill[] = [
  /** Application for Change of Name of Adult (21.0)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "reason-0",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.legalName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { x: 79, y: 636 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-01",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.legalName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { x: 79, y: 676 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-02",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.legalName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { x: 79, y: 733 },
  },
  {
    check: () => true,
    field: "Checkbox-03",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Applicants Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address_2",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City_3",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State_3",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code_2",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicants Email Address",
  },
  /** Addendum to Application for Change of Name of Adult (CN.2)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME_BEFORE-CN.2",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NAME_AFTER-CN.2",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Printed Name_01-CN.2",
  },
  /** Affidavit in Support of Application to Conform or Change Name of an Adult or Minor (CN.6)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "OF",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO",
  },
  {
    check: () => true,
    field: "Name Change-Name Conformity",
  },
];

/**
 * Summit County Minor Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const summitMinorMap: Formfill[] = [
  /** Application for Change of Name of Minor (21.2)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Present Name",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "Name Requested",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Checkbox-01",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Checkbox-02",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? fullName(representativeName(applicant)) : "",
    field: "Name",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.residentCity : "",
    field: "City",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.residentJurisdiction?.name : "",
    field: "State",
  },
  {
    text: (applicant) => (applicant.parentsAreOkay ? applicant.zip : ""),
    field: "Zip",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Checkbox-03",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Checkbox-04",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.representativeName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { page: 1, x: 89, y: 227 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-09",
  },
  {
    text: (applicant) =>
      nameInitials(applicant.representativeName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { page: 1, x: 89, y: 252 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-10",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City_3",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "State_3",
  },
  {
    check: () => true,
    field: "Checkbox-11",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "reason-0",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicants Typed or Printed Name",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Address_4",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "City_5",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "State_5",
  },
  {
    text: (applicant) => applicant.zip,
    field: "Zip_4",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number include area code_2",
  },
  {
    text: (applicant) => applicant.email,
    field: "Applicants Email Address",
  },
  /** Consent to Change of Name (21.4)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CHANGE OF NAME OF",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "TO",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "name of",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "as proposed in the Application",
  },
  /** Affidavit in Support of Application to Conform or Change Name of an Adult or Minor (CN.6)*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "OF",
  },
  {
    check: () => true,
    field: "Name Change-Name Conformity",
  },
];

/**
 * Trumbull County Consent to Webcheck Criminal Background Check (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const trumbullAdultMap: Formfill[] = [
  {
    text: (applicant) => applicant.legalName.first,
    loc: { page: 2, x: 345, y: 250 },
  },
  {
    text: (applicant) => applicant.legalName.middle,
    loc: { page: 2, x: 345, y: 275 },
  },
  {
    text: (applicant) =>
      `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { page: 2, x: 345, y: 300 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Text1.0",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Text1.1",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "Text1.2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Text1.3",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Text1.4",
  },
];

/**
 * Warren County Decision of Magistrate - Change of Name of Adult (21.1A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const warrenAdultMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PresentName",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "BirthName",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "BirthCity",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "BirthState",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NameChangedTo",
  },
];

/**
 * Warren County Decision of Magistrate - Change of Name of Minor (21.3A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const warrenMinorMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PresentName",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "BirthName",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DOB",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "BirthCity",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "BirthState",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NameChangedTo",
  },
];

/**
 * Wayne County Record Check Authorization, Waiver, and Consent (15.0.2) (Adult)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const wayneAdultMap: Formfill[] = [
  {
    check: () => true,
    field: "Type of Action",
    select: "Name Change/Name Conformity",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Name of Individual",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Printed Full Name including middle name",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "Prior Names including maiden name",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of Birth",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number",
  },
];

/**
 * Williams County Adult Packet (forms listedbelow)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const williamsAdultMap: Formfill[] = [
  /** Request for a Background Check via WebCheck */
  {
    text: () => "X",
    loc: { x: 248, y: 114 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 100, y: 203 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 140, y: 238 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 115, y: 273 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 515, y: 273 },
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 188, y: 307 },
  },
  {
    text: (applicant) => applicant.email,
    loc: { x: 555, y: 307 },
  },
  {
    text: () => "Other",
    loc: { x: 336, y: 446 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { x: 433, y: 482 },
  },
  {
    text: () => "No O.R.C. Code",
    loc: { x: 616, y: 482 },
  },
  {
    text: () => "Applying for Name Change",
    loc: { x: 60, y: 586 },
  },
  {
    text: () => "Williams County Probate Court",
    loc: { x: 145, y: 928 },
  },
  /** Judges Name Here */
  {
    text: () => "1 Courthouse Sq 2nd Floor",
    loc: { x: 151, y: 985 },
  },
  {
    text: () => "Bryan",
    loc: { x: 87, y: 1006 },
  },
  {
    text: () => "Ohio",
    loc: { x: 530, y: 1006 },
  },
  {
    text: () => "43506",
    loc: { x: 666, y: 1006 },
  },
  /** Waiver Form */
  {
    text: () => "the Williams County Probate Court",
    loc: { page: 1, x: 206, y: 192 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 53, y: 314 },
  },
];

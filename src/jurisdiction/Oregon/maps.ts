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
    representativeName,
    numericalBirthYear,
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
 * Change of Name or Sex (Adult) (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionOregonMap: Formfill[] = [
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 1, x: 430, y: 116 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 103, y: 212 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 538, y: 210 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 621, y: 210 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 152, y: 335 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 222, y: 368 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.first : "",
    loc: { page: 1, x: 194, y: 403 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.middle : "",
    loc: { page: 1, x: 375, y: 403 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.last : "",
    loc: { page: 1, x: 579, y: 403 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 152, y: 438 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? 
      (applicant.gender === GenderMarker.M ? "X" : "") : "",
      loc: { page: 1, x: 225, y: 456 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? 
      (applicant.gender === GenderMarker.F ? "X" : "") : "",
      loc: { page: 1, x: 283, y: 456 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ?
      (applicant.gender === GenderMarker.X ? "X" : "") : "",
      loc: { page: 1, x: 352, y: 456 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? "X" : "",
    loc: { page: 1, x: 102, y: 769 },
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.birthName) ?? "" : fullName(applicant.legalName) ?? "",
    loc: { page: 1, x: 154, y: 820 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { page: 1, x: 102, y: 898 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { page: 1, x: 152, y: 968 },
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    loc: { page: 2, x: 105, y: 221 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 2, x: 105, y: 326 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 2, x: 200, y: 326 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity}, ${applicant.residentJurisdiction}, ${applicant.zip}`,
    loc: { page: 2, x: 350, y: 326 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 2, x: 604, y: 326 },
  },
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 3, x: 431, y: 117 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 102, y: 209 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 3, x: 594, y: 211 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 3, x: 677, y: 211 },
  },
];

/**
 * Change of Name or Sex (Minor) (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorNameSexPetitionOregonMap: Formfill[] = [
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 1, x: 430, y: 116 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 1, x: 102, y: 218 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 538, y: 210 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 621, y: 210 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { page: 1, x: 166, y: 304 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 126, y: 384 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 247, y: 412 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.first : "",
    loc: { page: 1, x: 226, y: 443 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.middle : "",
    loc: { page: 1, x: 430, y: 443 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.last : "",
    loc: { page: 1, x: 580, y: 443 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 126, y: 862 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? 
      (applicant.gender === GenderMarker.M ? "X" : "") : "",
      loc: { page: 1, x: 179, y: 879 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ?
      (applicant.gender === GenderMarker.F ? "X" : "") : "",
      loc: { page: 1, x: 240, y: 879 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ?
      (applicant.gender === GenderMarker.X ? "X" : "") : "",
      loc: { page: 1, x: 310, y: 879 },
  },
  {
    text: (applicant) => (applicant.doNotPublish ? "X" : ""),
    loc: { page: 1, x: 182, y: 949 },
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    loc: { page: 2, x: 105, y: 343 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { page: 2, x: 403, y: 430 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 2, x: 102, y: 482 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity}, ${applicant.residentJurisdiction}, ${applicant.zip}`,
    loc: { page: 2, x: 350, y: 482 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 2, x: 601, y: 482 },
  },
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 3, x: 430, y: 117 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 3, x: 241, y: 247 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { page: 3, x: 241, y: 298 },
  },
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 4, x: 430, y: 117 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 4, x: 103, y: 231 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { page: 4, x: 403, y: 710 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 4, x: 103, y: 762 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity}, ${applicant.residentJurisdiction}, ${applicant.zip}`,
    loc: { page: 4, x: 350, y: 762 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 4, x: 637, y: 762 },
  },
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 5, x: 430, y: 117 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { page: 5, x: 103, y: 212 },
  },
  {
    text: (applicant) => applicant.isChangingLegalName ? "X" : "",
    loc: { page: 5, x: 594, y: 210 },
  },
  {
    text: (applicant) => applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 5, x: 621, y: 210 },
  },
];

/**
 * Application for Deferral or Waiver of Fees and Declaration in Support (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const feeWaiverOregonMap: Formfill[] = [
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 1, x: 420, y: 117 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 95, y: 162 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName?.first,
    loc: { page: 1, x: 245, y: 284 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.legalName?.middle,
    loc: { page: 1, x: 450, y: 284 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName?.last,
    loc: { page: 1, x: 650, y: 284 },
  },
  {
    text: () => "X",
    loc: { page: 1, x: 161, y: 371 },
  },
  {
    text: () => "X",
    loc: { page: 1, x: 137, y: 423 },
  },
  {
    text: () => "X",
    loc: { page: 1, x: 247, y: 423 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 2, x: 303, y: 144 },
  },
  {
    text: () => "X",
    loc: { page: 2, x: 156, y: 340 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 3, x: 402, y: 636 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 3, x: 103, y: 688 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity}, ${applicant.residentJurisdiction}, ${applicant.zip}`,
    loc: { page: 3, x: 350, y: 688 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 3, x: 601, y: 688 },
  },
  {
    text: (applicant) => !applicant.isChangingLegalSex ? applicant.residentCounty : "",
    loc: { page: 4, x: 420, y: 117 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 4, x: 103, y: 156 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 4, x: 260, y: 292 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 5, x: 403, y: 391 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 5, x: 103, y: 443 },
  },
  {
    text: (applicant) =>
      `${applicant.residentCity}, ${applicant.residentJurisdiction}, ${applicant.zip}`,
    loc: { page: 5, x: 350, y: 443 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { page: 5, x: 601, y: 443 },
  },
];

/**
 * Application to Change the Name and/or Sex on a Record of Live Birth to Support Gender Identity (Oregon form OHA 2673.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertOregonMap: Formfill[] = [
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName?.first,
    field: "Applicant current legal first",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.legalName?.middle,
    field: "Applicant current legal middle",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName?.last,
    field: "Applicant current legal last",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Applicant residential address",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "Applicant residential city",
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: "App residential city/county",
  },
  {
    text: (applicant) => applicant.zip,
    field: "App res zip",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone of applicant",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email of applicant",
  },
  {
    text: (applicant) => !isMinor(applicant) ? "Self" : "",
    field: "Relationship to registrant",
  },
  {
    text: (applicant) => applicant.birthName?.first ?
        applicant.birthName?.first ?? ""
        : applicant.legalName?.first ?? "",
    field: "Current first",
  },
  {
    text: (applicant) =>applicant.birthName?.middle ?
        applicant.birthName?.middle ?? ""
        : applicant.legalName?.middle ?? "",
    field: "Current middle",
  },
  {
    text: (applicant) =>applicant.birthName?.last ?
        applicant.birthName?.last ?? ""
        : applicant.legalName?.last ?? "",
    field: "Current last",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Date of birth",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "M" : ""),
    field: "Sex as it appears on the certificate",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "F" : ""),
    field: "Sex as it appears on the certificate",
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.X ? "X" : ""),
    field: "Sex as it appears on the certificate",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "City or County of birth",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.first ?? "",
    field: "Mother/Parent A First",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle ?? "",
    field: "Mother/Parent A middle",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? "",
    field: "Last name at mothers/parent As birth",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.first ?? "",
    field: "Father/Parent B  First",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle ?? "",
    field: "Father/Parent B middle",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? "",
    field: "Last name at Father/Parent Bs birth",
  },
  {
    check: (applicant) => applicant.isChangingLegalName,
    field: "Change name",
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.first : "",
      field: "Updated first",
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.middle : "",
      field: "Updated middle",
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalName ? applicant.chosenName?.last : "",
      field: "Updated last",
  },
  {
    check: (applicant) => applicant.isChangingLegalSex,
    field: "Change sex",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: "Male",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: "Female",
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    field: "X Non-Binary",
  },
  {
    check: () => true,
    field: "Request updated certificates",
  },
  {
    check: (applicant) => numericalBirthYear(applicant.birthdate) > 2007,
    field: "Computer Issued",
  },
];

/**
 * Voter Registration Form (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const voterOregonMap: Formfill[] = [
  {
    check: () => true,
    field: "Citizen",
    select: "0",
  },
  {
    check: () => true,
    field: "Age",
    select: "0",
  },
  {
    text: (applicant) => applicant.chosenName?.last,
    field: "Last Name",
  },
  {
    text: (applicant) => applicant.chosenName?.first,
    field: "First Name",
  },
  {
    text: (applicant) => applicant.chosenName?.middle,
    field: "Middle Name",
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress}, ${applicant.residentCity} ${applicant.zip}`,
    field: "Residence Address",
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
    text: (applicant) => applicant.residentCounty,
    field: "County of Residence",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone Number",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "Preious Registration Name",
  },
];

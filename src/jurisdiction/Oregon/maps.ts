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
  isMinor,
  representativeName,
  numericalBirthYear,
  ContactFormat as cf,
  formatContactInfo,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/*!
 * Change of Name or Sex (Adult) (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionOregonMap: Formfill[] = [
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { x: 431, y: 117 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 103, y: 212 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 539, y: 211 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 622, y: 211 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 153, y: 335 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 222, y: 368 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    loc: { page: 1, x: 194, y: 403 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    loc: { page: 1, x: 375, y: 403 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.last : "",
    loc: { page: 1, x: 579, y: 403 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 153, y: 439 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.M
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 226, y: 457 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.F
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 284, y: 457 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.X
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 353, y: 457 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "X" : "",
    loc: { page: 1, x: 102, y: 769 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { page: 1, x: 154, y: 820 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { page: 1, x: 103, y: 899 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { page: 1, x: 153, y: 952 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 2, x: 103, y: 221 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 403, y: 275 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 2, x: 103, y: 326 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 2, x: 350, y: 326 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 2, x: 604, y: 326 },
  }),
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 3, x: 431, y: 117 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 102, y: 192 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 3, x: 596, y: 211 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 3, x: 677, y: 211 },
  }),
];

/*!
 * Change of Name or Sex (Minor) (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorNameSexPetitionOregonMap: Formfill[] = [
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 1, x: 430, y: 116 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 102, y: 218 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 540, y: 211 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 623, y: 211 },
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 1, x: 166, y: 304 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 1, x: 128, y: 385 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 247, y: 412 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    loc: { page: 1, x: 226, y: 443 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    loc: { page: 1, x: 430, y: 443 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.last : "",
    loc: { page: 1, x: 580, y: 443 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 1, x: 128, y: 861 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.M
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 179, y: 879 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.F
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 241, y: 879 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex
      ? applicant.gender === GenderMarker.X
        ? "X"
        : ""
      : "",
    loc: { page: 1, x: 311, y: 879 },
  }),
  (applicant) => ({
    text: applicant.doNotPublish ? "X" : "",
    loc: { page: 1, x: 184, y: 948 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 2, x: 105, y: 343 },
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 2, x: 403, y: 413 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 2, x: 102, y: 482 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 2, x: 350, y: 482 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 2, x: 601, y: 482 },
  }),
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 3, x: 430, y: 117 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 3, x: 241, y: 230 },
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 3, x: 241, y: 298 },
  }),
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 4, x: 430, y: 117 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 4, x: 103, y: 214 },
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 4, x: 403, y: 710 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 4, x: 103, y: 762 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 4, x: 350, y: 762 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 4, x: 637, y: 762 },
  }),
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 5, x: 430, y: 117 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 5, x: 103, y: 212 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "X" : "",
    loc: { page: 5, x: 596, y: 211 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "X" : "",
    loc: { page: 5, x: 681, y: 211 },
  }),
];

/*!
 * Application for Deferral or Waiver of Fees and Declaration in Support (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const feeWaiverOregonMap: Formfill[] = [
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 1, x: 420, y: 117 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 95, y: 162 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.legalName.first,
    loc: { page: 1, x: 245, y: 284 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.middle
      : applicant.legalName.middle,
    loc: { page: 1, x: 450, y: 284 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.last
      : applicant.legalName.last,
    loc: { page: 1, x: 650, y: 284 },
  }),
  () => ({
    text: "X",
    loc: { page: 1, x: 162, y: 372 },
  }),
  () => ({
    text: "X",
    loc: { page: 1, x: 137, y: 424 },
  }),
  () => ({
    text: "X",
    loc: { page: 1, x: 248, y: 424 },
  }),
  (applicant) => ({
    text: !isMinor(applicant)
      ? formatDate(applicant.birthdate, {
          format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
          separator: "/",
        })
      : "",
    loc: { page: 2, x: 303, y: 144 },
  }),
  () => ({
    text: "X",
    loc: { page: 2, x: 156, y: 341 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 3, x: 402, y: 636 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 3, x: 103, y: 688 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 3, x: 350, y: 688 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 3, x: 601, y: 688 },
  }),
  (applicant) => ({
    text: 
    !applicant.isChangingLegalSex ? 
      applicant.residentLocalityName ?? "" : "",
    loc: { page: 4, x: 420, y: 117 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 4, x: 103, y: 156 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 4, x: 260, y: 292 },
  }),
  () => ({
    text: "X",
    loc: { page: 4, x: 151, y: 346 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 5, x: 403, y: 391 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 5, x: 103, y: 443 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { page: 5, x: 350, y: 443 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { page: 5, x: 601, y: 443 },
  }),
];

/*!
 * Application to Change the Name and/or Sex on a Record of Live Birth to Support Gender Identity (Oregon form OHA 2673.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const birthCertOregonMap: Formfill[] = [
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.legalName.first,
    fieldName: "Applicant current legal first",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.middle
      : applicant.legalName.middle,
    fieldName: "Applicant current legal middle",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.last
      : applicant.legalName.last,
    fieldName: "Applicant current legal last",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Applicant residential address",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "Applicant residential city",
  }),
  (applicant) => ({
    text: applicant.residentJurisdictionName ?? "",
    fieldName: "App residential city/county",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "App res zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone of applicant",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email of applicant",
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? "Self" : "",
    fieldName: "Relationship to registrant",
  }),
  (applicant) => ({
    text: applicant.birthName.first || applicant.legalName.first,
    fieldName: "Current first",
  }),
  (applicant) => ({
    text: applicant.birthName.middle || applicant.legalName.middle,
    fieldName: "Current middle",
  }),
  (applicant) => ({
    text: applicant.birthName.last || applicant.legalName.last,
    fieldName: "Current last",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of birth",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
        default:
          return "";
      }
    })(),
    fieldName: "Sex as it appears on the certificate",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "City or County of birth",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.first,
    fieldName: "Mother/Parent A First",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.middle,
    fieldName: "Mother/Parent A middle",
  }),
  (applicant) => ({
    text: applicant.mothersBirthName.last,
    fieldName: "Last name at mothers/parent As birth",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.first,
    fieldName: "Father/Parent B  First",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.middle,
    fieldName: "Father/Parent B middle",
  }),
  (applicant) => ({
    text: applicant.fathersBirthName.last,
    fieldName: "Last name at Father/Parent Bs birth",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "Change name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.first : "",
    fieldName: "Updated first",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.middle : "",
    fieldName: "Updated middle",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? applicant.chosenName.last : "",
    fieldName: "Updated last",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "Change sex",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex && applicant.gender === GenderMarker.M,
    fieldName: "Male",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex && applicant.gender === GenderMarker.F,
    fieldName: "Female",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex && applicant.gender === GenderMarker.X,
    fieldName: "X Non-Binary",
  }),
  () => ({
    check: true,
    fieldName: "Request updated certificates",
  }),
  (applicant) => ({
    check: numericalBirthYear(applicant.birthdate) > 2007,
    fieldName: "Computer Issued",
  }),
];

/*!
 * Oregon Voter Registration Card (Oregon form SEL 500.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const voterOregonMap: Formfill[] = [
  () => ({
    fieldName: "Citizen",
    choice: "Yes",
  }),
  () => ({
    fieldName: "Age",
    choice: "Yes",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.last
      : applicant.legalName.last,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.first
      : applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? applicant.chosenName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullAddress),
    fieldName: "Residence Address",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName ?? "",
    fieldName: "County of Residence",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Preious Registration Name",
  }),
];

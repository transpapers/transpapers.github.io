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

import { formatDate, fullName, isMinor } from "../../lib/util";

import {
  GenderMarker,
  isEmptyName,
  DateFormatPart as DATE,
} from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/**
 * Name and Sex Change Petition Adult (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const adultNameSexPetitionOregonMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 266 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 210, y: 457 },
  },
  /** Name & sex checkboxes here. */
  /** Ideally I would change these to detect if someone hit the
   * name or sex change checkboxes rather than checking if a field is blank. */
  {
    text: (applicant) => (isEmptyName(applicant.chosenName) ? "X" : ""),
    loc: { x: 305, y: 705 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? fullName(applicant.legalName) : "",
    loc: { x: 445, y: 770 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.first : "",
    loc: { x: 386, y: 838 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.middle : "",
    loc: { x: 740, y: 838 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.last : "",
    loc: { x: 1145, y: 838 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "X" : ""),
    loc: { x: 303, y: 912 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "X" : ""),
    loc: { x: 303, y: 912 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 303, y: 912 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "X" : ""),
    loc: { x: 448, y: 948 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "X" : ""),
    loc: { x: 565, y: 948 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 702, y: 948 },
  },
  {
    text: (applicant) => (isEmptyName(applicant.birthName) ? "" : "X"),
    loc: { x: 201, y: 1576 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName) ? "" : fullName(applicant.birthName),
    loc: { x: 305, y: 1675 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { x: 204, y: 1834 },
  },
  {
    text: (applicant) =>
      applicant.isChangingLegalSex && applicant.doNotPublish ? "X" : "",
    loc: { x: 301, y: 1938 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 803, y: 503 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 688 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 688 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 688 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 266 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 210, y: 415 },
  },
  /** Name & sex checkboxes here. */
];

/**
 * Name and Sex Change Petition Minor (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const minorNameSexPetitionOregonMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 266 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 210, y: 473 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 330, y: 640 },
  },
  /** Name & sex checkboxes here. */
  /** Ideally I would change these to detect if someone hit the
   * name or sex change checkboxes rather than checking if a field is blank. */
  {
    text: (applicant) => (isEmptyName(applicant.chosenName) ? "X" : ""),
    loc: { x: 252, y: 803 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? fullName(applicant.legalName) : "",
    loc: { x: 495, y: 859 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.first : "",
    loc: { x: 450, y: 920 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.middle : "",
    loc: { x: 840, y: 920 },
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.last : "",
    loc: { x: 1140, y: 920 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "X" : ""),
    loc: { x: 253, y: 1760 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "X" : ""),
    loc: { x: 253, y: 1760 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 253, y: 1760 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "X" : ""),
    loc: { x: 355, y: 1793 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "X" : ""),
    loc: { x: 478, y: 1793 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.X ? "X" : ""),
    loc: { x: 619, y: 1793 },
  },
  {
    text: (applicant) => (applicant.doNotPublish ? "X" : ""),
    loc: { x: 356, y: 1933 },
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    loc: { x: 202, y: 348 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 800, y: 860 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 995 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 995 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 995 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 268 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 485, y: 490 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 480, y: 630 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 268 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 205, y: 460 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 805, y: 1452 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 1557 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 1557 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 1557 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 860, y: 268 },
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 205, y: 457 },
  },
  {
    text: (applicant) => fullName(applicant.representativeName),
    loc: { x: 805, y: 528 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 630 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 630 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 630 },
  },
];

/**
 * Fee Waiver (Oregon form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const feeWaiverOregonMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 835, y: 268 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    loc: { x: 188, y: 355 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName?.first,
    loc: { x: 490, y: 602 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.legalName?.middle,
    loc: { x: 870, y: 602 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName?.last,
    loc: { x: 1240, y: 602 },
  },
  {
    text: () => "X",
    loc: { x: 324, y: 779 },
  },
  {
    text: () => "X",
    loc: { x: 271, y: 882 },
  },
  {
    text: () => "X",
    loc: { x: 492, y: 882 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { x: 605, y: 320 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    loc: { x: 800, y: 1303 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 1408 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 1408 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 1408 },
  },
  {
    text: (applicant) => applicant.residentCounty,
    loc: { x: 835, y: 268 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    loc: { x: 205, y: 345 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    loc: { x: 510, y: 615 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    loc: { x: 800, y: 815 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { x: 200, y: 918 },
  },
  {
    text: (applicant) =>
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      ", " &&
      applicant.zip,
    loc: { x: 685, y: 918 },
  },
  {
    text: (applicant) => applicant.phone,
    loc: { x: 1180, y: 918 },
  },
];

/**
 * Birth Certificate Update Form (Oregon form OHA 2673.)
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
    text: (applicant) => (isMinor(applicant) ? "" : "Self"),
    field: "Relationship to registrant",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
    field: "Current first",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
    field: "Current middle",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.birthName)
        ? applicant.legalName?.first
        : applicant.birthName?.first,
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
    text: (applicant) => applicant.mothersBirthName?.first,
    field: "Mother/Parent A First",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle,
    field: "Mother/Parent A middle",
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle,
    field: "Last name at mothers/parent As birth",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.first,
    field: "Father/Parent B  First",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle,
    field: "Father/Parent B middle",
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle,
    field: "Last name at Father/Parent Bs birth",
  },
  /** Name & sex checkboxes here. */
  /** Ideally I would change these to detect if someone hit the
   * name or sex change checkboxes rather than checking if a field is blank. */
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.first : "",
    field: "Updated first",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.middle : "",
    field: "Updated middle",
  },
  {
    text: (applicant) =>
      isEmptyName(applicant.chosenName) ? applicant.chosenName?.last : "",
    field: "Updated last",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.M,
    field: "Male",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.F,
    field: "Female",
  },
  {
    check: (applicant) => applicant.assignedSex === GenderMarker.X,
    field: "X Non-Binary",
  },
  {
    check: () => true,
    field: "Request updated certificates",
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
  },
  /** Check should be for if person is 16+ */
  {
    check: (applicant) => isMinor(applicant),
    field: "Age",
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
      applicant.streetAddress &&
      " " &&
      applicant.residentCity &&
      ", " &&
      applicant.residentJurisdiction &&
      " " &&
      applicant.zip,
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

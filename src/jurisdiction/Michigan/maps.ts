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
  formatContactInfo,
  getLocality,
  ContactFormat as cf,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then finally federal forms.

/*!
 * Petition for Name Change and Ex Parte Request for Nonpublication and
 * Confidential Record (Michigan form PC 51c.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const nameChangePrivateMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "County",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.address,
    fieldName: "Court address",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.phone,
    fieldName: "Court telephone no",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current first middle and last names type or print",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullContactInfo),
    fieldName: "Petitioners name address and telephone no",
  }),
  () => ({
    check: true,
    fieldName: "3 The name change is for",
  }),
  (applicant) => ({ check: !isMinor(applicant), fieldName: "b an adult only" }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "c a minor only",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName:
      "4 The petition includes a request to change a minors name The minors natural or adopted parents are",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? fullName(applicant.mothersBirthName)
        : "",
    fieldName: "Parent",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? fullName(applicant.fathersBirthName)
        : "",
    fieldName: "Parent_2",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName:
      "5  As to a minor one or more of the following is the petitioner or consents to the guardianship Check all that apply",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "#6 reason for name change",
  }),
  (applicant) => ({
    check: applicant.hasCriminalRecord ? !isMinor(applicant) : false,
    fieldName: "#8 has checkbox",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "#8 does not have checkbox",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.first,
    fieldName: "First",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.middle,
    fieldName: "Middle",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.last,
    fieldName: "Last",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.first,
    fieldName: "First_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.middle,
    fieldName: "Middle_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.last,
    fieldName: "Last_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.first : "",
    fieldName: "First_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.middle : "",
    fieldName: "Middle_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.last : "",
    fieldName: "Last_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.first : "",
    fieldName: "First_6",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.middle : "",
    fieldName: "Middle_6",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.last : "",
    fieldName: "Last_6",
  }),
  (applicant) => ({
    check: applicant.sealBirthCertificate,
    fieldName:
      "11 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the names",
  }),
  (applicant) => ({
    text: applicant.sealBirthCertificate ? fullName(applicant.legalName) : "",
    fieldName: "Names_2",
  }),
  () => ({ text: new Date().toLocaleDateString(), fieldName: "Date" }),
  () => ({
    check: true,
    fieldName: "1 Publication of notice",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "Item 1 checkbox me",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "Endangered individual checkbox",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.legalName) : "",
    fieldName: "Endangered individual",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "discrimination",
  }),
  () => ({
    check: true,
    fieldName: "2 basis of fear checkbox",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "2 checkbox I",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "Endangered individual checkbox2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.legalName) : "",
    fieldName: "Endangered individual_2",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "b. checkbox seek to affirm gender identity",
  }),
  (applicant) => ({
    text: 
     isMinor(applicant) 
     ? fullName(representativeName(applicant)) 
     : fullName(applicant.legalName),
    fieldName: "Name type or print",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.streetAddress : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
      : "",
    fieldName: "City state zip",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.phone : "",
    fieldName: "Telephone no",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 13
        ? fullName(applicant.legalName)
        : "",
    fieldName: "Name type or print_5",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 14
        ? fullName(applicant.legalName)
        : "",
    fieldName: "Name type or print_6",
  }),
];

/*!
 * Petition for Name Change (Michigan form PC 51.)
 * Updated 5/2025.
 * @type {Formfill[]}
 */
export const nameChangeMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "County",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.address,
    fieldName: "Court addres",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.phone,
    fieldName: "Court telephone no",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current first middle and last names type or print",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullContactInfo),
    fieldName: "Petitioners name address and telephone no",
  }),
  () => ({
    check: true,
    fieldName: "3 The name change is for",
  }),
  (applicant) => ({ check: !isMinor(applicant), fieldName: "b an adult only" }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "c a minor only",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName:
      "4 The petition includes a request to change a minors name The minors natural or adopted parents are",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? fullName(applicant.mothersBirthName)
        : "",
    fieldName: "Parent",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.parentsAreOkay
        ? fullName(applicant.fathersBirthName)
        : "",
    fieldName: "Parent_2",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName:
      "5  As to a minor one or more of the following is the petitioner or consents to the guardianship Check all that apply",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "7 The name change is not sought for any fraudulent intent",
  }),
  (applicant) => ({
    check: applicant.hasCriminalRecord ? !isMinor(applicant) : false,
    fieldName: "has",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName: "does not have",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.first,
    fieldName: "First",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.middle,
    fieldName: "Middle",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.legalName.last,
    fieldName: "Last",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.first,
    fieldName: "First_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.middle,
    fieldName: "Middle_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.chosenName.last,
    fieldName: "Last_2",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.first : "",
    fieldName: "First_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.middle : "",
    fieldName: "Middle_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.last : "",
    fieldName: "Last_5",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.first : "",
    fieldName: "First_6",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.middle : "",
    fieldName: "Middle_6",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.last : "",
    fieldName: "Last_6",
  }),
  (applicant) => ({
    check: applicant.sealBirthCertificate,
    fieldName:
      "11 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the names",
  }),
  (applicant) => ({
    text: applicant.sealBirthCertificate ? fullName(applicant.legalName) : "",
    fieldName: "Names_2",
  }),
  () => ({ text: new Date().toLocaleDateString(), fieldName: "Date" }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(representativeName(applicant)) : "",
    fieldName: "Name type or print",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.streetAddress : "",
    fieldName: "Address",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
      : "",
    fieldName: "City state zip",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.phone : "",
    fieldName: "Telephone no",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age > 13
        ? fullName(applicant.legalName)
        : "",
    fieldName: "Name type or print_4",
  }),
  (applicant) => ({
    text:
      isMinor(applicant) && applicant.age && applicant.age < 14
        ? fullName(applicant.legalName)
        : "",
    fieldName: "Name type or print_5",
  }),
];

/*!
 * Addendum to Personal Protected Identifying Information (Michigan form MC 97a.)
 * @type {Formfill[]}
 */
export const piiMap: Formfill[] = [
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.address,
    fieldName: "Text6",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.phone,
    fieldName: "Text5",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "PlaintiffsPetitioners name",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the matter of",
  }),
  (applicant) => ({
    text: 
      applicant.residentLocalityName === "Kent" 
      ? "PC 51" : "PC 51c",
    fieldName: "Name of formdocument that this MC 97a is being filed with 1",
  }),
  (applicant) => ({
    text: `${fullName(representativeName(applicant))} ${new Date().toLocaleDateString()}`,
    fieldName: "Name of formdocument that this MC 97a is being filed with 2",
  }),
  (applicant) => ({ text: fullName(applicant.legalName), fieldName: "Name" }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DOB",
  }),
];

/*!
 * Order Following Hearing Regarding Petition For Name Change (Michigan form PC 52.)
 * Only required in Saginaw County
 * @type {Formfill[]}
 */
export const orderFollowingMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "County",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.address,
    fieldName: "Court address",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.phone,
    fieldName: "Court telephone no",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Current first middle and last names type or print",
  }),
];

/*!
 * Fee Waiver Request (Michigan form MC 20.)
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.address,
    fieldName: "Text6",
  }),
  (applicant) => ({
    text: 
      getLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.court.phone,
    fieldName: "Text5",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullContactInfo),
    fieldName: "PlaintiffPetitioners name address and telephone no",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "In the matter of",
  }),
  () => ({ text: new Date().toLocaleDateString(), fieldName: "Date" }),
];

/*!
 * Michigan Dept. of State Sex Designation Form (Michigan form, unnumbered.)
 * This is for the Primary ID at the Secretary of State step.
 * @type {Formfill[]}
 */
export const mdosSexMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.last,
    loc: { x: 57, y: 388 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 351, y: 388 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 600, y: 388 },
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    loc: { x: 750, y: 388 },
  }),
  (applicant) => ({ text: applicant.streetAddress, loc: { x: 57, y: 441 } }),
  (applicant) => ({ text: applicant.residentCity, loc: { x: 351, y: 441 } }),
  (applicant) => ({ text: applicant.zip, loc: { x: 701, y: 441 } }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 351, y: 489 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 67, y: 555 },
  }),
  (applicant) => ({
    fieldName: "ChoiceA",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "Choice1";
        case GenderMarker.M:
          return "Choice2";
        case GenderMarker.X:
          return "Choice3";
      }
    })(),
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { x: 649, y: 959 },
  }),
];

/*!
 * Application to Change or Correct a Michigan Birth Record (Michigan form DCH-0847-CHGBX.)
 * @type {Formfill[]}
 */
export const birthCertMap: Formfill[] = [
  (applicant) => ({
    text:
      applicant.isChangingLegalName && !isMinor(applicant)
        ? applicant.chosenName.first
        : representativeName(applicant).first,
    loc: { x: 48, y: 196 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && !isMinor(applicant)
        ? applicant.chosenName.middle
        : representativeName(applicant).middle,
    loc: { x: 337, y: 196 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && !isMinor(applicant)
        ? applicant.chosenName.last
        : representativeName(applicant).last,
    loc: { x: 588, y: 196 },
  }),
  (applicant) => ({ text: applicant.streetAddress, loc: { x: 48, y: 237 } }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndState),
    loc: { x: 388, y: 237 },
  }),
  (applicant) => ({ text: applicant.zip, loc: { x: 662, y: 237 } }),
  (applicant) => ({ text: applicant.phone, loc: { x: 48, y: 283 } }),
  (applicant) => ({ text: applicant.email, loc: { x: 426, y: 283 } }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : "X",
    loc: { x: 52, y: 327 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "X" : "",
    loc: { x: 52, y: 355 },
  }),
  () => ({ text: "X", loc: { x: 314, y: 409 } }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { x: 48, y: 541 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 534, y: 541 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 249, y: 636 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 595, y: 630 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 676, y: 630 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.X ? "X" : "",
    loc: { x: 770, y: 630 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 48, y: 710 },
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 554, y: 710 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 48, y: 754 },
  }),
  (applicant) => ({
    text: formatDate(applicant.fathersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 554, y: 754 },
  }),
  (applicant) => ({
    text:
      applicant.isChangingLegalName && fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    loc: { x: 56, y: 800 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    loc: { x: 433, y: 800 },
  }),
  (applicant) => ({
    text: (() => {
      if (applicant.isChangingLegalSex) {
        switch (applicant.assignedSex) {
          case GenderMarker.M:
            return "Sex: M";
          case GenderMarker.F:
            return "Sex: F";
          case GenderMarker.X:
            return "Sex: X";
        }
      }
    })(),
    loc: { x: 56, y: 834 },
  }),
  (applicant) => ({
    text: (() => {
      if (applicant.isChangingLegalSex) {
        switch (applicant.gender) {
          case GenderMarker.M:
            return "Sex: M";
          case GenderMarker.F:
            return "Sex: F";
          case GenderMarker.X:
            return "Sex: X";
        }
      }
    })(),
    loc: { x: 433, y: 834 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { x: 620, y: 956 },
  }),
];

/*!
 * State of Michigan Sex Designation Form (Michigan form, unnumbered.)
 * This is for the Birth Certificate Update step.
 * @type {Formfill[]}
 */
export const miSexMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 151, y: 299 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 193, y: 367 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 159, y: 539 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 159, y: 559 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.X ? "X" : "",
    loc: { x: 159, y: 579 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { x: 486, y: 539 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { x: 486, y: 559 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.X ? "X" : "",
    loc: { x: 486, y: 579 },
  }),
];

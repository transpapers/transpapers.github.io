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
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  representativeName,
  getJurisdiction,
  getRILocality,
  abbreviateJurisdiction,
} from "../../lib/util";

import { ContactFormat as cf, formatContactInfo } from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/*!
 * Change of Name (Rhode Island form PC8.1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const changeOfNameMap: Formfill[] = [
  (applicant) => ({
    text: 
      getRILocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.county,
    loc: { x: 145, y: 150 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    loc: { x: 520, y: 170 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "6",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "7",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "8",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "9",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "10",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "11",
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          switch (!applicant.mailAddress?.mApt) {
          case true:
            return applicant.mailAddress?.poBox ?? applicant.mailAddress?.mStreet;
          case false:
            return applicant.mailAddress?.poBox
            ? `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mApt ?? ""}`
            : `${applicant.mailAddress?.mStreet ?? ""}, ${applicant.mailAddress?.mApt ?? ""}`;
          default:
            return "";
          }
        case false:
          return "";
        default:
          return "";
        }
    })(),
    fieldName: "12",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? 
      formatContactInfo(applicant, cf.MailCityAndStateAndZip) : "",
    fieldName: "13",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "15",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "17",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "18",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "19",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "20",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "21",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? "" : "X",
    loc: { x: 492, y: 642 },
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "27",
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? applicant.chosenName.first : "",
    fieldName: "29",
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? applicant.chosenName.middle : "",
    fieldName: "30",
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? applicant.chosenName.last : "",
    fieldName: "31",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.first : "",
    fieldName: "32",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.middle : "",
    fieldName: "33",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.chosenName.last : "",
    fieldName: "34",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 135, y: 94 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? "Parent" : "";
        case false:
          return "Self";
        default:
          return "";
      }
    })(),
    loc: { page: 1, x: 625, y: 94 },
  }),
  () => ({
    text: new Date().toLocaleDateString(),
    loc: { page: 1, x: 662, y: 144 },
  }),
];

/*!
 * State of Rhode Island BCI Disclaimer Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const bciMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 265, y: 202 },
  }),
  (applicant) => ({
    text:
      !isMinor(applicant) && fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : "",
    loc: { x: 337, y: 227 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? ""
      : formatDate(applicant.birthdate, {
          format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
          separator: "/",
        }),
    loc: { x: 199, y: 255 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 249, y: 281 },
  }),
  () => ({
    text: "name change",
    loc: { x: 167, y: 331 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 113, y: 432 },
  }),
];

/*!
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertOneMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { x: 184, y: 194 },
  }),
  (applicant) => ({
    text: String(applicant.age),
    loc: { x: 621, y: 194 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 150, y: 227 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 415, y: 225 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 289, y: 241 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 289, y: 258 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? "x" : "",
    loc: { x: 102, y: 323 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "x" : "",
    loc: { x: 354, y: 323 },
  }),
  () => ({
    text: "x",
    loc: { x: 299, y: 538 },
  }),
  () => ({
    text: "Name Change",
    loc: { x: 442, y: 537 },
  }),
  () => ({
    text: "One",
    loc: { x: 180, y: 611 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 203, y: 720 },
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { x: 612, y: 723 },
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone) + "-" + phoneEnd(applicant.phone),
    loc: { x: 659, y: 723 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentFullAddress) 
      : formatContactInfo(applicant, cf.MailFullAddress),
    loc: { x: 219, y: 772 },
  }),
];

/*!
 * State of Rhode Island Application for License, Identification Card and Permit Form (Rhode Island form, LI-1.)
 * @type {Formfill[]}
 */
export const primaryIDRhodeIslandMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "FIRST NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "MIDDLE NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "SUFFIX",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH MMDDYY",
  }),
  (applicant) => ({
    fieldName: "Gender",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "Gender X";
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "EMAIL ADDRESS",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    fieldName: "STREET ADDRESS RESIDENCE ADDRESS",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt,
    fieldName: "APTUNIT  or FLOOR",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "CITYTOWN",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "STATE",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "ZIP CODE",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? applicant.mailAddress?.mStreet : "",
    fieldName: "STREET ADDRESS MAILING ADDRESS IF DIFFERENT FROM RESIDENCE APTUNIT  or FLOOR",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? applicant.mailAddress?.mApt : "",
    fieldName: "Text4",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? applicant.mailAddress?.mCity : "",
    fieldName: "CITYTOWN_2",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ?
      abbreviateJurisdiction(applicant.mailAddress?.mState ?? "") : "",
    fieldName: "STATE_2",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? applicant.mailAddress?.mZip : "",
    fieldName: "ZIP CODE_2",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "Text2",
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    fieldName: "Text3",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "COUNTRY",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "STATEPROVINCE",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "CITY",
  }),
];

/*!
 * State of Rhode Island Gender Designation on a License or Identification Card Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const genderIDMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "FIRST NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "MIDDLE NAME",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "SUFFIX",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH MMDDYY",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.street,
    fieldName: "RESIDENCE ADDRESS STREET ADDRESS",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt,
    fieldName: "APTUNIT  or FLOOR",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "CITYTOWN",
  }),
  (applicant) => ({
    text: 
      getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "STATE",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "ZIP CODE",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "I",
  }),
  (applicant) => ({
    fieldName: "undefined",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        case GenderMarker.X:
          return "X";
      }
    })(),
  }),
];

/*!
 * State of Rhode Island Application for a Certified Copy of a Birth Record Form (Rhode Island form, unnumbered.)
 * @type {Formfill[]}
 */
export const birthCertTwoMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    loc: { x: 184, y: 194 },
  }),
  (applicant) => ({
    text: String(applicant.age),
    loc: { x: 621, y: 194 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName
      ? fullName(applicant.chosenName)
      : fullName(applicant.legalName),
    loc: { x: 400, y: 209 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 150, y: 227 },
  }),
  (applicant) => ({
    text: applicant.birthCity,
    loc: { x: 415, y: 225 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 289, y: 241 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 289, y: 258 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? "x" : "",
    loc: { x: 101, y: 323 },
  }),
  () => ({
    text: "x",
    loc: { x: 298, y: 537 },
  }),
  () => ({
    text: "Updating record information.",
    loc: { x: 442, y: 539 },
  }),
  () => ({
    text: "One",
    loc: { x: 180, y: 611 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 203, y: 720 },
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { x: 612, y: 723 },
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    loc: { x: 659, y: 723 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentFullAddress) 
      : formatContactInfo(applicant, cf.MailFullAddress),
    loc: { x: 219, y: 772 },
  }),
];

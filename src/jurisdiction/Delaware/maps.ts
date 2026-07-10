/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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
  abbreviateJurisdiction,
  addZero,
  nameInitials,
} from "../../lib/util";

import { ContactFormat as cf, formatContactInfo } from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE, NameFormatPart as FML } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then county forms for specific courts;

/*!
 * Petition for Name Change (Delaware form unnumbered.) (Adult)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const adultNamePetition: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "x" : "",
    loc: { x: 144, y: 122 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "x" : "",
    loc: { x: 390, y: 122 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "x" : "",
    loc: { x: 566, y: 122 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 85, y: 231 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 85, y: 334 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 393, y: 458 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    loc: { x: 250, y: 499 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 487, y: 591 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 383, y: 641 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { x: 145, y: 682 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 527, y: 774 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 105, y: 816 },
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    loc: { x: 90, y: 948 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "x",
    loc: { page: 1, x: 284, y: 213 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "x",
    loc: { page: 1, x: 284, y: 254 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "x" : "",
    loc: { page: 2, x: 144, y: 122 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "x" : "",
    loc: { page: 2, x: 389, y: 122 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "x" : "",
    loc: { page: 2, x: 566, y: 122 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 85, y: 231 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { page: 2, x: 85, y: 334 },
  }),
];

/*!
 * Petition for Minor Name Change (Delaware form 492.) (Minor)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const minorNamePetition: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "x" : "",
    loc: { x: 258, y: 78 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "x" : "",
    loc: { x: 427, y: 78 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "x" : "",
    loc: { x: 545, y: 78 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 60, y: 273 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.street 
      : applicant.mailAddress?.mailStreet,
    loc: { x: 60, y: 299 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          return applicant.parentsAreOkay ? applicant.mailAddress?.mailStreet : "";
        case false:
          return applicant.parentsAreOkay ? applicant.homeAddress?.street : "";
        default:
          return "";
        }
    })(),
    loc: { x: 325, y: 299 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          switch (!applicant.mailAddress?.mailApt) {
          case true:
            return applicant.mailAddress?.poBox;
          case false:
            return !applicant.mailAddress?.poBox
              ? applicant.mailAddress?.mailApt
              : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
          default:
            return "";
          }
        case false:
          return applicant.homeAddress?.apt;
        default:
          return "";
        }
    })(),
    loc: { x: 60, y: 299 },
  }),
  (applicant) => ({
    text: (() => {
    switch (applicant.parentsAreOkay) {
      case true:
        switch (!applicant.streetEqualsMail) {
          case true:
            switch (!applicant.mailAddress?.mailApt) {
            case true:
              return applicant.mailAddress?.poBox;
            case false:
              return !applicant.mailAddress?.poBox
                ? applicant.mailAddress?.mailApt
                : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
            default:
              return "";
            }
          case false:
            return applicant.homeAddress?.apt;
          default:
            return "";
          }
    case false:
      return "";
    default:
      return "";
    }
    })(),
    loc: { x: 325, y: 299 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip) 
      : formatContactInfo(applicant, cf.MailCityAndStateAndZip),
    loc: { x: 60, y: 299 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.MailCityAndStateAndZip) : "";
        case false:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip) : "";
        default:
          return "";
        }
    })(),
    loc: { x: 325, y: 366 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "x" : "",
    loc: { x: 70, y: 449 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "x" : "",
    loc: { x: 339, y: 449 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 290, y: 557 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 665, y: 557 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { x: 250, y: 582 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 490, y: 612 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 50, y: 642 },
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    loc: { x: 50, y: 704 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "x",
    loc: { page: 1, x: 325, y: 310 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "x",
    loc: { page: 1, x: 124, y: 413 },
  }),
  () => ({
    text: "x",
    loc: { page: 1, x: 53, y: 499 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 220, y: 588 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age > 13 ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 250, y: 795 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age > 13 ? fullName(applicant.chosenName) : "",
    loc: { page: 1, x: 225, y: 922 },
  }),
  (applicant) => ({
    text: applicant.age && applicant.age > 13 ? fullName(applicant.legalName) : "",
    loc: { page: 2, x: 110, y: 31 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "x" : "",
    loc: { page: 2, x: 256, y: 158 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "x" : "",
    loc: { page: 2, x: 425, y: 158 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "x" : "",
    loc: { page: 2, x: 548, y: 158 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 2, x: 57, y: 349 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.street 
      : applicant.mailAddress?.mailStreet,
    loc: { page: 2, x: 57, y: 387 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          return applicant.parentsAreOkay ? applicant.mailAddress?.mailStreet : "";
        case false:
          return applicant.parentsAreOkay ? applicant.homeAddress?.street : "";
        default:
          return "";
        }
    })(),
    loc: { page: 2, x: 325, y: 387 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          switch (!applicant.mailAddress?.mailApt) {
          case true:
            return applicant.mailAddress?.poBox;
          case false:
            return !applicant.mailAddress?.poBox
              ? applicant.mailAddress?.mailApt
              : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
          default:
            return "";
          }
        case false:
          return applicant.homeAddress?.apt;
        default:
          return "";
        }
    })(),
    loc: { page: 2, x: 57, y: 418 },
  }),
  (applicant) => ({
    text: (() => {
    switch (applicant.parentsAreOkay) {
      case true:
        switch (!applicant.streetEqualsMail) {
          case true:
            switch (!applicant.mailAddress?.mailApt) {
            case true:
              return applicant.mailAddress?.poBox;
            case false:
              return !applicant.mailAddress?.poBox
                ? applicant.mailAddress?.mailApt
                : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
            default:
              return "";
            }
          case false:
            return applicant.homeAddress?.apt;
          default:
            return "";
          }
    case false:
      return "";
    default:
      return "";
    }
    })(),
    loc: { page: 2, x: 325, y: 418 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip) 
      : formatContactInfo(applicant, cf.MailCityAndStateAndZip),
    loc: { page: 2, x: 57, y: 452 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.MailCityAndStateAndZip) : "";
        case false:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip) : "";
        default:
          return "";
        }
    })(),
    loc: { page: 2, x: 325, y: 452 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 2, x: 220, y: 672 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 2, x: 268, y: 711 },
  }),
];

/*!
 * Custody Separate Statement (Delaware form 346.) (Minor)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const minorInfoSheet: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "x" : "",
    loc: { x: 269, y: 108 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "x" : "",
    loc: { x: 428, y: 108 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "x" : "",
    loc: { x: 540, y: 108 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 65, y: 240 },
  }),
  () => ({
    text: "Petition for Minor Name Change",
    loc: { x: 352, y: 293 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 114, y: 380 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 446, y: 380 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { x: 597, y: 380 },
  }),
  () => ({
    text: "X",
    loc: { x: 547, y: 461 },
  }),
  (applicant) => ({
    text: `${applicant.homeAddress?.apt ?? ""} ${applicant.homeAddress?.street ?? ""}`,
    loc: { x: 138, y: 593 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    loc: { x: 455, y: 593 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    loc: { x: 672, y: 593 },
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    loc: { x: 729, y: 593 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 2, x: 103, y: 440 },
  }),
];

/*!
 * Information Sheet (Delaware form 240.) (Minor)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const parentInfoSheet: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 138, y: 301 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          switch (!applicant.mailAddress?.mailApt) {
          case true:
            return applicant.mailAddress?.poBox ?? applicant.mailAddress?.mailStreet;
          case false:
            return !applicant.mailAddress?.poBox
            ? `${applicant.mailAddress?.mailStreet ?? ""}, ${applicant.mailAddress?.mailApt ?? ""}`
            : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
          default:
            return "";
          }
        case false:
          return !applicant.homeAddress?.apt
            ? applicant.homeAddress?.street 
      :     `${applicant.homeAddress.street}, ${applicant.homeAddress.apt ?? ""}`;
        default:
          return "";
        }
    })(),
    loc: { x: 242, y: 341 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          return formatContactInfo(applicant, cf.MailCityAndStateAndZip);
        case false:
          return formatContactInfo(applicant, cf.ResidentCityAndStateAndZip);
        default:
          return "";
        }
    })(),
    loc: { x: 241, y: 377 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 615, y: 404 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 202, y: 441 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "Spouse" : "",
    loc: { page: 1, x: 453, y: 81 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { page: 1, x: 53, y: 315 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "Parent" : "",
    loc: { page: 1, x: 233, y: 315 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "F";
        case GenderMarker.M:
          return "M";
        case GenderMarker.X:
          return "X";
      }
    })(),
    loc: { page: 1, x: 344, y: 315 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 458, y: 315 },
  }),
  (applicant) => ({
    text: `${applicant.birthCity ?? ""}, ${applicant.birthJurisdiction?.abbreviation ?? ""}`,
    loc: { page: 1, x: 683, y: 315 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { page: 2, x: 389, y: 97 },
  }),
];

/*!
 * Affidavit in Support of Application to Proceed in Forma Pauperis (Delaware form 257P.) (All)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const feeWaiver: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "X" : "",
    loc: { x: 261, y: 88 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "X" : "",
    loc: { x: 429, y: 88 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "X" : "",
    loc: { x: 545, y: 88 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 66, y: 227 },
  }),
  (applicant) => ({
    text: `${applicant.homeAddress?.apt ?? ""} ${applicant.homeAddress?.street ?? ""}`,
    loc: { x: 66, y: 276 },
  }),
  (applicant) => ({
    text: applicant.mailAddress?.poBox,
    loc: { x: 66, y: 322 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 66, y: 367 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 143, y: 450 },
  }),
  () => ({
    text: "x",
    loc: { x: 102, y: 482 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "minor name change" : "name change",
    loc: { x: 475, y: 484 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.legalName) : "",
    loc: { page: 1, x: 100, y: 840 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? String(applicant.age) : "",
    loc: { page: 1, x: 386, y: 840 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 2, x: 208, y: 61 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "New Castle" ? "X" : "",
    loc: { x: 264, y: 88 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Kent" ? "X" : "",
    loc: { x: 429, y: 88 },
  }),
  (applicant) => ({
    text: applicant.residentLocalityName === "Sussex" ? "X" : "",
    loc: { x: 545, y: 88 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 3, x: 76, y: 141 },
  }),
];

/*!
 * Application for a certified copy of a Delaware Birth Certificate (Delaware form unnumbered.) (All)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const birthCertRequest: Formfill[] = [
  (applicant) => ({
    text: applicant.birthName.first
      ? fullName(applicant.birthName) 
      : fullName(applicant.legalName),
    loc: { x: 202, y: 278 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 104, y: 322 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 165, y: 322 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 450, y: 324 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { x: 205, y: 357 },
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    loc: { x: 205, y: 402 },
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    loc: { x: 205, y: 458 },
  }),
  () => ({
    text: "1",
    loc: { x: 280, y: 502 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : "X",
    loc: { x: 69, y: 549 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "X" : "",
    loc: { x: 69, y: 564 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 343, y: 891 },
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.streetEqualsMail) {
        case true:
          switch (!applicant.mailAddress?.mailApt) {
          case true:
            return applicant.mailAddress?.poBox ?? applicant.mailAddress?.mailStreet;
          case false:
            return !applicant.mailAddress?.poBox
              ? `${applicant.mailAddress?.mailStreet ?? ""}, ${applicant.mailAddress?.mailApt ?? ""}`
              : `${applicant.mailAddress.poBox ?? ""}, ${applicant.mailAddress.mailApt ?? ""}`;
          default:
            return "";
          }
        case false:
          return !applicant.homeAddress?.apt
            ? applicant.homeAddress?.street 
            : `${applicant.homeAddress.street}, ${applicant.homeAddress.apt ?? ""}`;
        default:
          return "";
        }
    })(),
    loc: { x: 173, y: 933 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.city 
      : applicant.mailAddress?.mailCity,
    loc: { x: 173, y: 953 },
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? `${abbreviateJurisdiction(applicant.residentJurisdictionName ?? "") ?? ""}, ${applicant.homeAddress?.zip ?? ""}`
      : `${abbreviateJurisdiction(applicant.mailAddress?.mailState ?? "") ?? ""}, ${applicant.mailAddress?.mailZip ?? ""}`,
    loc: { x: 652, y: 953 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 170, y: 975 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 660, y: 975 },
  }),
];

/*!
 * Request for Gender Change on Driver License/Identification Card (Delaware form MV2020.) (All)
 * Updated 5/2026.
 * @type {Formfill[]}
 */
export const DMVTitleMap: Formfill[] = [
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "LAST NAMESRow1",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "SUFFIXRow1",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "FIRST NAMERow1",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "MIDDLE NAMERow1",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    fieldName: "MONTHRow1",
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { 
        format: [DATE.DAY], 
        separator: "" }),
    ),
    fieldName: "DAYRow1",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "YEARRow1",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "DAYTIME TELEPHONE NUMBERRow1",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "EMAIL ADDRESS if applicableRow1",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "I",
  }),
  (applicant) => ({
    fieldName: "undefined",
    choice: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "FEMALE";
        case GenderMarker.M:
          return "MALE";
        case GenderMarker.X:
          return undefined;
        default:
          return undefined;
      }
    })(),
  }),
];

/*!
 * Healthcare Provider's Affidavit for Sex Change on Birth Certificate (Delaware form unnumbered.) (All)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const birthCertGenderProvider: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? fullName(applicant.chosenName) 
      : fullName(applicant.legalName),
    loc: { x: 309, y: 449 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName),
    loc: { x: 294, y: 542 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? fullName(applicant.chosenName) : "",
    loc: { x: 381, y: 566 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 256, y: 590 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 162, y: 613 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName 
      ? fullName(applicant.chosenName) 
      : fullName(applicant.legalName),
    loc: { x: 160, y: 706 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return "";
      }
    })(),
    loc: { x: 240, y: 730 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.M:
          return "M";
        case GenderMarker.F:
          return "F";
        default:
          return "";
      }
    })(),
    loc: { x: 298, y: 730 },
  }),
];

/*!
 * Requester's Affidavit for Sex Change on Birth Certificate (Delaware form unnumbered.) (All)
 * Updated 05/2026.
 * @type {Formfill[]}
 */
export const birthCertGenderAffidavit: Formfill[] = [
  (applicant) => ({
    text: isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.birthName),
    loc: { x: 539, y: 116 },
  }),
  (applicant) => ({
    text: isMinor(applicant) 
      ? fullName(representativeName(applicant)) 
      : fullName(applicant.chosenName),
    loc: { x: 478, y: 154 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return isMinor(applicant) ? fullName(applicant.chosenName) : "";
        case false:
          return isMinor(applicant) ? fullName(applicant.legalName) : "";
        default:
          return "";
      }
    })(),
    loc: { x: 416, y: 191 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH],
        separator: "",
      }),
    ),
    loc: { x: 244, y: 230 },
  }),
  (applicant) => ({
    text: addZero(
      formatDate(applicant.birthdate, { 
        format: [DATE.DAY], 
        separator: "" }),
    ),
    loc: { x: 275, y: 230 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    loc: { x: 303, y: 230 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 565, y: 229 },
  }),
  (applicant) => ({
    text: applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 619, y: 229 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 145, y: 267 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ? fullName(applicant.chosenName) : "",
    loc: { x: 286, y: 342 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) && applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 155, y: 379 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) && applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 226, y: 379 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "X" : "",
    loc: { x: 218, y: 437 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? fullName(applicant.chosenName) : "",
    loc: { x: 396, y: 436 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.assignedSex === GenderMarker.M ? "X" : "",
    loc: { x: 385, y: 475 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.assignedSex === GenderMarker.F ? "X" : "",
    loc: { x: 455, y: 475 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return nameInitials(applicant.representativeName, 
            {format: [FML.FIRST, FML.MIDDLE, FML.LAST]});
        case false:
          return applicant.isChangingLegalName
            ? nameInitials(applicant.chosenName, 
              {format: [FML.FIRST, FML.MIDDLE, FML.LAST]})
            : nameInitials(applicant.legalName, 
              {format: [FML.FIRST, FML.MIDDLE, FML.LAST]});
        default:
          return "";
      }
    })(),
    loc: { x: 79, y: 664 },
  }),
];


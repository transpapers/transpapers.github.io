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

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then county specific forms and documents in alphabetical order based on county name;

/**
 * Application for Change of Name of Adult (Ohio form 21.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => {
      switch (applicant.residentLocality?.name === "Hamilton") {
        case true:
          return fullName(applicant.birthName)
            ? `${applicant.legalName.first} ${applicant.legalName.middle} ${applicant.birthName.last} (maiden) ${applicant.legalName.last} (married)`
            : `${applicant.legalName.first} ${applicant.legalName.middle} ${applicant.birthName.last} (maiden)`;
        case false:
          return fullName(applicant.legalName);
        default:
          return "";
      }
    },
    field: "NAME BEFORE CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "NAME AFTER CHANGE",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "RESIDENT OF COUNTY OHIO",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.last,
    field: "LAST NAME_2",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "CHANGE REQUESTED FOR THE FOLLOWING REASON(S)",
  },
  /** For typed only docs do /S/ then the name in the signature field. */
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "TYPE OF PRINTED NAME_2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "ADDRESS_2",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "CITY_2",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "STATE_2",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP_2",
  },
  {
    text: (applicant) => applicant.phone,
    field: "TELEPHONE NUMBER_2",
  },
  {
    text: (applicant) => applicant.email,
    field: "EMAIL ADDRESS_2",
  },
];

/**
 * Application for Change of Name of Minor (Ohio form 21.2)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PRESENT NAME",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "PARENT",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.last,
    field: "LAST NAME_2",
  },
  {
    text: (applicant) => applicant.reasonForNameChange,
    field: "REASON FOR REQUESTING THIS NAME CHANGE_2",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "WAIVER OF NOTICE OF HEARING AND CONSENT OF PARENT",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? fullName(representativeName(applicant)) : "",
    field: "NAME",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay ? applicant.streetAddress : "",
    field: "ADDRESS",
  },
  {
    text: (applicant) =>
      applicant.parentsAreOkay
        ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
        : "",
    field: "CITY",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "NAME AND ADDRESS OF PARENT",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "WAIVER OF NOTICE OF HEARING AND CONSENT OF PARENT_2",
  },
  /** For typed only docs do /S/ then the name in the signature field. */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "TYPE OF PRINTED NAME_2",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "ADDRESS_4",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "CITY_4",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "STATE_4",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP CODE_4",
  },
  {
    text: (applicant) => applicant.phone,
    field: "TELEPHONE NUMBER (INCLUDING AREA CODE)_2",
  },
  {
    text: (applicant) => applicant.email,
    field: "EMAIL ADDRESS_2",
  },
];

/**
 * Affidavit in Support of Application for Change of Name of Adult (Ohio form 21.01)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameAffidavitMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CHANGE OF NAME PRIOR TO CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "CHANGE OF NAME AFTER",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "COUNTY OHIO",
  },
  {
    check: () => true,
    field: "APPLICANT HAS BEEN A BONA FIDE RESIDENT",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "RESIDENT OF COUNTY OHIO",
  },
  {
    check: () => true,
    field:
      "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field:
      "APPLICANT HAS NOT BEEN CONVICTED OF, PLEADED GUILTY TO, OR BEEN ADJUSICATED A DELINQUENT CHILD FOR IDENTITY",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field:
      "APPLICANT DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR 2950.041",
  },
];

/**
 * Affidavit in Support of Application for Change of Name of Minor (Ohio form 21.02)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameAffidavitMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME BEFORE REQUESTED CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED CHANGE OF NAME",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "COUNTY OHIO",
  },
  {
    check: () => true,
    field: "APPLICANT",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "PARENT",
  },
  {
    check: () => true,
    field: "MINOR HAS BEEN A BONA FIDE RESIDENT",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "MINOR HAS BEEN A BONA FIDE RESIDENT OF COUNTY OHIO",
  },
  {
    check: () => true,
    field:
      "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field:
      "MINOR HAS NOT BEEN ADJUDICATED A DELINQUENT CHILD FOR IDENTITY FRAUD",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field:
      "MINOR DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR R.C. 2950.041",
  },
];

/**
 * Judgement Entry - Change of Name of Adult (Ohio form 21.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameJudgementMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME PRIOR TO REQUESTED CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "APPLICANTS DATE OF BIRTH (MM/DD/YYYY)",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "CITY",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "STATE",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.last,
    field: "LAST NAME_2",
  },
];

/**
 * Judgement Entry - Change of Name of Minor (Ohio form 21.3)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameJudgementMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME BEFORE REQUESTED CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "NAME AT BIRTH",
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "MINOR'S DATE OF BIRTH",
  },
  {
    text: (applicant) => applicant.birthCity,
    field: "CITY",
  },
  {
    text: (applicant) => applicant.birthJurisdiction?.name,
    field: "STATE",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.last,
    field: "LAST NAME_2",
  },
];

/**
 * Consent to Change of Name (Ohio form 21.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameConsentMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CURRENT NAME BEFORE CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "PARENT",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "CURRENT NAME BEFORE CHANGE_2",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE_2",
  },
];

/**
 * Judgement Entry Setting Hearing and Ordering Notice (Ohio form 21.03)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const judgementSettingHearingMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME PRIOR TO REQUEST",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME",
  },
  {
    check: () => true,
    field:
      "BY PUBLICATION ONCE IN A NEWSPAPER OF GENERAL CIRCULATION IN THIS COUNTY",
  },
];

/**
 * Notice of Hearing on Change of Name (Ohio form 21.5)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hearingNoticeMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PRESENT NAME",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME",
  },
  {
    text: (applicant) => applicant.legalName.first,
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName.middle,
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName.last,
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName.last,
    field: "LAST NAME_2",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO_2",
  },
  {
    text: (applicant) => applicant.residentLocality?.court.address,
    field: "LOCATION OF PROBATE COURT",
  },
  /** For typed only docs do /S/ then the name in the signature field. */
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "TYPED OR PRINTED NAME",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "ADDRESS",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "CITY",
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.name,
    field: "STATE",
  },
  {
    text: (applicant) => applicant.zip,
    field: "ZIP CODE",
  },
  {
    text: (applicant) => applicant.email,
    field: "EMAIL ADDRESS",
  },
];

/**
 * Release for Criminal Background Check (Ohio form 21.14)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const backgroundCheckReleaseMap: Formfill[] = [
  {
    text: () =>
      formatDate(new Date().toLocaleDateString(), {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "DATE (MM/DD/YYYY)",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PRINTED NAME",
  },
  /** For typed only docs do /S/ then the name in the signature field. */
];

/**
 * Application to Waive Publication Requirement and Seal File (Ohio form 21.6)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const waivePublicationOneMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY, OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PRESENT NAME",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PURSUANT TO R.C. 2717.11",
  },
];

/**
 * Application to Waive Publication and Seal File (Ohio form 21.6A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const waivePublicationTwoMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "NAME BEFORE REQUESTED CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "REQUESTED NAME CHANGE",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "PURSUANT R.C. 2717.11, REQUESTS COURT WAIVE PUBLICATION",
  },
];

/**
 * Civil Fee Waiver Affidavit and Order (Ohio form 20.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  {
    text: (applicant) => fullName(applicant.legalName),
    loc: { x: 265, y: 173 },
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName.first,
    loc: { x: 270, y: 248 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.middle
        : applicant.legalName.middle,
    loc: { x: 270, y: 273 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`
        : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 270, y: 298 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.first
        : applicant.legalName.first,
    loc: { x: 225, y: 493 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? applicant.representativeName?.last
        : applicant.legalName.last,
    loc: { x: 575, y: 493 },
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? formatDate(applicant.birthdate, {
            format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
            separator: "/",
          })
        : "",
    loc: { x: 245, y: 539 },
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    loc: { x: 210, y: 580 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? applicant.legalName.first : ""),
    loc: { x: 75, y: 672 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? applicant.legalName.last : ""),
    loc: { x: 263, y: 672 },
  },
  {
    text: (applicant) => (isMinor(applicant) ? "x" : ""),
    loc: { x: 423, y: 663 },
  },
  {
    text: (applicant) =>
      isMinor(applicant) && applicant.parentsAreOkay ? "Child" : "",
    loc: { x: 590, y: 672 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 90, y: 610 },
  },
];

/**
 * Application for Ohio Certified Birth Record Copies (Ohio form HEA 2709) (BC Request)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCertOrderMap: Formfill[] = [
  {
    check: () => true,
    field: "Birth Certificate",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicant Name",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone Number",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State  ZIP",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field:
      "Full Name indicate childs full name as shown on the original birth record",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName) ? fullName(applicant.legalName) : "",
    field: "If Name was Changed Since Birth Indicate New Name",
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
    field: "City and County Where Birth Occurred",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Name Before First Marriage",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Name Before First Marriage_2",
  },
  {
    text: () => "Other: Name Change",
    loc: { x: 320, y: 838 },
  },
  {
    text: () => "1",
    field: "Number of Birth Record Copies",
  },
  {
    text: () => "21.50",
    field: "x $21.50",
  },
  {
    text: () => "21.50",
    field: "x $21.50",
  },
  {
    text: () => "21.50",
    field: "Total Amount Due",
  },
];

/**
 * Declaration of Gender Change (BMV 2369)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const bmvGenderDeclarationMap: Formfill[] = [
  {
    text: (applicant) =>
      `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { page: 1, x: 45, y: 188 },
  },
  {
    text: (applicant) => applicant.legalName.first,
    loc: { page: 1, x: 410, y: 188 },
  },
  {
    text: (applicant) => applicant.legalName.middle,
    loc: { page: 1, x: 695, y: 188 },
  },
  {
    text: (applicant) => applicant.streetAddress,
    loc: { page: 1, x: 45, y: 223 },
  },
  {
    text: (applicant) => applicant.residentCity,
    loc: { page: 1, x: 410, y: 223 },
  },
  {
    text: (applicant) => applicant.residentJurisdiction?.abbreviation,
    loc: { page: 1, x: 630, y: 223 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 695, y: 223 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    loc: { page: 1, x: 237, y: 258 },
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    loc: { page: 1, x: 415, y: 257 },
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    loc: { page: 1, x: 442, y: 257 },
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    loc: { page: 1, x: 482, y: 257 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.M ? "X" : ""),
    loc: { page: 1, x: 629, y: 254 },
  },
  {
    text: (applicant) => (applicant.gender === GenderMarker.F ? "X" : ""),
    loc: { page: 1, x: 711, y: 254 },
  },
  {
    text: (applicant) =>
      nameInitials(applicant.legalName, {
        format: [FML.FIRST, FML.MIDDLE, FML.LAST],
      }),
    loc: { page: 1, x: 597, y: 449 },
  },
];

/**
 * Application for Ohio Certified Birth Record Copies (Ohio form HEA 2709) (BC Update)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCertUpdateMap: Formfill[] = [
  {
    check: () => true,
    field: "Birth Certificate",
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    field: "Applicant Name",
  },
  {
    text: (applicant) => applicant.email,
    field: "Email",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "Street Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Phone Number",
  },
  {
    text: (applicant) =>
      formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    field: "City State  ZIP",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field:
      "Full Name indicate childs full name as shown on the original birth record",
  },
  {
    text: (applicant) => fullName(applicant.chosenName),
    field: "If Name was Changed Since Birth Indicate New Name",
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
    field: "City and County Where Birth Occurred",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "Name Before First Marriage",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "Name Before First Marriage_2",
  },
  {
    text: () => "Other: Updating birth record",
    loc: { x: 320, y: 838 },
  },
  {
    text: () => "1",
    field: "Number of Birth Record Copies",
  },
  {
    text: () => "21.50",
    field: "x $21.50",
  },
  {
    text: () => "21.50",
    field: "x $21.50",
  },
  {
    text: () => "21.50",
    field: "Total Amount Due",
  },
];

/**
 * Application for Correction of Birth Record (Ohio form 30.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCorrectionMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "CourtCounty",
  },
  /** Add Judges Name Here.*/
  /** Adjust several fields to chosen name if this is done after a legal name change*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "BirthRecordName",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    field: "CourtCounty2",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    field: "FormSubject Name",
  },
  {
    text: (applicant) =>
      fullName(applicant.birthName)
        ? fullName(applicant.birthName)
        : fullName(applicant.legalName),
    field: "ChildName",
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
    field: "Birthplace",
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
    field: "ChildSex",
  },
  {
    text: (applicant) => fullName(applicant.mothersBirthName),
    field: "ParentName",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName),
    field: "ParentName2",
  },
  {
    text: (applicant) =>
      formatDate(applicant.mothersBirthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "ParentDOB",
  },
  {
    text: (applicant) =>
      formatDate(applicant.fathersBirthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "Parent2DOB",
  },
  {
    text: () => "Sex:",
    field: "BoxNo1",
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
    field: "ReadsAs1",
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
    field: "ShouldRead1",
  },
  {
    text: (applicant) => formatContactInfo(applicant, cf.FullContactInfo),
    field: "Date",
  },
  {
    text: (applicant) =>
      isMinor(applicant)
        ? fullName(applicant.representativeName)
        : fullName(applicant.legalName),
    field: "ApplicantName",
  },
];

/**
 * Voter Registration and Information Update Form (Ohio form unnumbered)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const voterRegistrationMap: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName.last,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtLastName[0]",
  },
  {
    text: (applicant) => applicant.chosenName.first,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFirstName[0]",
  },
  {
    text: (applicant) => applicant.chosenName.middle,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtMiddleInitial[0]",
  },
  {
    text: (applicant) => applicant.chosenName.suffix ?? "",
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtSuffix[0]",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingAddress[0]",
  },
  {
    text: (applicant) => applicant.residentCity,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingCity[0]",
  },
  {
    text: (applicant) => applicant.zip,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingZip[0]",
  },
  {
    text: (applicant) => applicant.residentLocality?.name,
    loc: { x: 610, y: 693 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtBirthdate[0]",
  },
  {
    text: (applicant) => applicant.phone,
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtPhoneNumber[0]",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFormerName[0]",
  },
];

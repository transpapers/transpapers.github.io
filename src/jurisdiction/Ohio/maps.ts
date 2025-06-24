/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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
  abbreviateJurisdiction,
  nameInitials,
  addZero,
  representativeName,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
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
    text: (applicant) => applicant.residentLocality,
    field: "PROBATE COURT OF COUNTY OHIO",
  },
  /** Add Judges Name Here.*/
  {
    text: (applicant) => {
      switch (applicant.residentLocality === "Hamilton" ) {
        case true:
          return fullName(applicant.birthName) 
            ? `${applicant.legalName?.first ?? ""} ${applicant.legalName?.middle ?? ""} ${applicant.birthName?.last ?? ""} (maiden) ${applicant.legalName?.last ?? ""} (married)` 
            : `${applicant.legalName?.first ?? ""} ${applicant.legalName?.middle ?? ""} ${applicant.birthName?.last ?? ""} (maiden)`;
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
    text: (applicant) => applicant.residentLocality,
    field: "RESIDENT OF COUNTY OHIO",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
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
    text: (applicant) => applicant.parentsAreOkay ? 
      fullName(representativeName(applicant)) : "",
    field: "NAME",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ? 
      applicant.streetAddress : "",
    field: "ADDRESS",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ? 
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}` : "",
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.residentLocality,
    field: "COUNTY OHIO",
  },
  {
    check: () => true,
    field: "APPLICANT HAS BEEN A BONA FIDE RESIDENT",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "RESIDENT OF COUNTY OHIO",
  },
  {
    check: () => true,
    field: "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "APPLICANT HAS NOT BEEN CONVICTED OF, PLEADED GUILTY TO, OR BEEN ADJUSICATED A DELINQUENT CHILD FOR IDENTITY",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "APPLICANT DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR 2950.041",
  },
];

/**
 * Affidavit in Support of Application for Change of Name of Minor (Ohio form 21.02)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameAffidavitMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.residentLocality,
    field: "MINOR HAS BEEN A BONA FIDE RESIDENT OF COUNTY OHIO",
  },
  {
    check: () => true,
    field: "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "MINOR HAS NOT BEEN ADJUDICATED A DELINQUENT CHILD FOR IDENTITY FRAUD",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "MINOR DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR R.C. 2950.041",
  },
];

/**
 * Judgement Entry - Change of Name of Adult (Ohio form 21.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameJudgementMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "STATE",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "STATE",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.residentLocality,
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
    field: "BY PUBLICATION ONCE IN A NEWSPAPER OF GENERAL CIRCULATION IN THIS COUNTY",
  },
];

/**
 * Notice of Hearing on Change of Name (Ohio form 21.5)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hearingNoticeMap: Formfill[] = [
  {
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "FIRST NAME",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    field: "MIDDLE NAME",
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "LAST NAME",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "FIRST NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "MIDDLE NAME_2",
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "LAST NAME_2",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "PROBATE COURT OF COUNTY OHIO_2",
  },
  {
    text: (applicant) => applicant.court?.address,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) => isMinor(applicant) 
      ? applicant.representativeName?.first
      : applicant.legalName?.first,
    loc: { x: 270, y: 248 },
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? applicant.representativeName?.middle
      : applicant.legalName?.middle,
    loc: { x: 270, y: 273 },
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`
      : `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    loc: { x: 270, y: 298 },
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? applicant.representativeName?.first
      : applicant.legalName?.first,
    loc: { x: 225, y: 493 },
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? applicant.representativeName?.last
      : applicant.legalName?.last,
    loc: { x: 575, y: 493 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }) : "",
    loc: { x: 245, y: 539 },
  },
  {
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    loc: { x: 210, y: 580 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
      applicant.legalName?.first : "",
    loc: { x: 75, y: 672 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
      applicant.legalName?.last : "",
    loc: { x: 263, y: 672 },
  },
  {
    text: (applicant) => isMinor(applicant) ? "x" : "",
    loc: { x: 423, y: 663 },
  },
  {
    text: (applicant) => 
      isMinor(applicant) && 
      applicant.parentsAreOkay 
      ? "Child" : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "City State  ZIP",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    field: "Full Name indicate childs full name as shown on the original birth record",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.legalName) : "",
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
    text: (applicant) => `${applicant.birthCity ?? ""},`,
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
      `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
    loc: { page: 1, x: 45, y: 188 },
  },
  {
    text: (applicant) => applicant.legalName?.first,
    loc: { page: 1, x: 410, y: 188 },
  },
  {
    text: (applicant) => applicant.legalName?.middle,
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
    text: (applicant) => 
      abbreviateJurisdiction(applicant.residentJurisdiction ?? ""),
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
    text: (applicant) => nameInitials(applicant.legalName),
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "City State  ZIP",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    field: "Full Name indicate childs full name as shown on the original birth record",
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
    text: (applicant) => `${applicant.birthCity ?? ""},`,
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
    text: (applicant) => applicant.residentLocality,
    field: "CourtCounty",
  },
  /** Add Judges Name Here.*/
  /** Adjust several fields to chosen name if this is done after a legal name change*/
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "BirthRecordName",
  },
  {
    text: (applicant) => applicant.residentLocality,
    field: "CourtCounty2",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(applicant.representativeName) ?? "" 
      : fullName(applicant.legalName),
    field: "FormSubject Name",
  },
  {
    text: (applicant) => fullName(applicant.birthName) 
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
    text: (applicant) => `${applicant.birthCity ?? ""},`,
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
    text: (applicant) => fullName(applicant.mothersBirthName) ?? "",
    field: "ParentName",
  },
  {
    text: (applicant) => fullName(applicant.fathersBirthName) ?? "",
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
    text: () => "4",
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
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "Date",
  },
  {
    text: (applicant) => isMinor(applicant) 
      ? fullName(applicant.representativeName) ?? "" 
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
    text: (applicant) => applicant.chosenName?.last ?? "",
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtLastName[0]",
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? "",
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFirstName[0]",
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? "",
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtMiddleInitial[0]",
  },
  {
    text: (applicant) => applicant.chosenName?.suffix ?? "",
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtSuffix[0]",
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingAddress[0]",
  },
  {
    text: (applicant) => applicant.residentCity,
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingCity[0]",
  },
  {
    text: (applicant) => applicant.zip,
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingZip[0]",
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { x: 610, y: 693 },
  },
  {
    text: (applicant) =>
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }),
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtBirthdate[0]",
  },
  {
    text: (applicant) => applicant.phone,
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtPhoneNumber[0]",
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFormerName[0]",
  },
];

/**
 * Adams County Adult Packet (forms listed below)
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
    text: (applicant) => applicant.legalName?.first,
    loc: { x: 127, y: 459 },
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    loc: { x: 335, y: 459 },
  },
  {
    text: (applicant) => applicant.legalName?.last,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => fullName(applicant.birthName) ? 
      fullName(applicant.birthName) ?? "" : "",
    loc: { page: 2, x: 375, y: 748 },
  },
  /** Webcheck Beckgound Check Form */
  {
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) =>
      `${applicant.birthCity ?? ""}, ${applicant.birthJurisdiction ?? ""}`,
    field: "CSBTH",
  },
  /** Webcheck Beckgound Check Form */
  {
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) =>
      `${applicant.birthCity ?? ""}, ${applicant.birthJurisdiction ?? ""}`,
    field: "CSBTH",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        fullName(representativeName(applicant)) ?? "" : "",
    field: "Name",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        applicant.streetAddress : "",
    field: "ST2",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}` : "",
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
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.parentsAreOkay &&
        applicant.chosenName?.last === applicant.representativeName?.last ? 
        "The childs last name is the same as the child's residential parent." : "",
    loc: { x: 130, y: 574 },
  },
  {
    text: (applicant) => applicant.parentsAreOkay &&
        applicant.chosenName?.last === applicant.representativeName?.last ? 
        "Not applicable, see #5." : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.legalName?.last ?? "",
    field: "Last Name",
  },
  {
    text: (applicant) => applicant.legalName?.first ?? "",
    field: "First name",
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
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
    text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "Male" : ""),
    loc: { x: 265, y: 183 },
  },
  {
    text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "Female" : ""),
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    field: "Text11" 
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => isMinor(applicant) ?
        fullName(representativeName(applicant)) ?? "" : "",
    loc: { x: 403, y: 465 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
        applicant.streetAddress : "",
    loc: { x: 228, y: 492 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
        applicant.residentCity : "",
    loc: { x: 195, y: 520 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
        applicant.residentJurisdiction : "",
    loc: { x: 407, y: 520 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
        applicant.zip : "",
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
    text: (applicant) => isMinor(applicant) ?
        fullName(representativeName(applicant)) ?? "" : "",
    loc: { x: 134, y: 806 },
  },
  {
    text: () => "Personal Info Sheet",
    loc: { x: 580, y: 786 },
  },
  {
    text: (applicant) => isMinor(applicant) ?
        "Personal Info Sheet" : "",
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
    text: (applicant) => fullName(applicant.birthName) ? 
      fullName(applicant.birthName) ?? "" : "",
    field: "AKA",
  },
  {
    text: (applicant) => 
      `${applicant.streetAddress ?? ""}, ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => fullName(applicant.birthName) ? 
      fullName(applicant.birthName) ?? "" : "",
    field: "Minors AKA",
  },
  {
    text: (applicant) => 
      `${applicant.streetAddress ?? ""}, ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    field: "Date" 
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    field: "Date_2" 
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
    field: "Date" 
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    field: "Date_2" 
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
    text: (applicant) => fullName(applicant.birthName) ?
      fullName(applicant.birthName) ?? "" : fullName(applicant.legalName),
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "State of Birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction ?
      "USA" : "",
    field: "Country of Birth",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      `/S/ ${applicant.representativeName?.first ?? ""} ${applicant.representativeName?.last ?? ""}` 
      : `/S/ ${applicant.legalName?.first ?? ""} ${applicant.legalName?.last ?? ""}`,
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
    field: "Text11" 
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
    field: "Date" 
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    field: "Date" 
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    field: "Date" 
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
    text: (applicant) => fullName(applicant.birthName) ?
      fullName(applicant.birthName) ?? "" : fullName(applicant.legalName),
    field: "Name at Birth",
  },
  {
    text: (applicant) => applicant.birthCity,
    loc: { page: 4, x: 70, y: 446 },
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => !applicant.isChangingLegalSex ?
      applicant.reasonForNameChange : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => fullName(applicant.birthName) ?
      fullName(applicant.birthName) ?? "" : fullName(applicant.legalName),
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => !applicant.isChangingLegalSex ?
      applicant.reasonForNameChange : "",
    field: "All other provide detailed reason for all other name changes 2",
  },
  {
    check: (applicant) => applicant.parentsAreOkay,
    field: "Check Box10",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      fullName(representativeName(applicant)) ?? "" : "",
    field: "Name",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}` : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => fullName(applicant.birthName) ?
      fullName(applicant.birthName) ?? "" : fullName(applicant.legalName),
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => isMinor(applicant) ?
      applicant.representativeName?.first ?? "" 
      : applicant.legalName?.first ?? "",
    field: "Text1a",
  },
  {
    text: (applicant) => isMinor(applicant) ?
      applicant.representativeName?.last ?? "" 
      : applicant.legalName?.last ?? "",
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
    text: (applicant) => 
        `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
    field: "Text7",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ? 
      applicant.legalName?.first : "",
    field: "Text8",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ? 
      applicant.legalName?.last : "",
    field: "Text9",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ?
      "x" : "",
    loc: { x: 423, y: 709 },
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ? 
      "Child" : "",
    field: "Text9",
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ?
      "x" : "",
    loc: { x: 497, y: 740 },
  },
  {
    text: (applicant) => 
      isMinor(applicant) && applicant.parentsAreOkay ? 
      "Spouse" : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: () => "•",
    loc: { x: 530, y: 114 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { x: 100, y: 203 },
  },
  {
    text: (applicant) => !isMinor(applicant) ?
      formatDate(applicant.birthdate, {
        format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
        separator: "/",
      }) : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => isMinor(applicant)
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.legalName?.first ?? "",
    loc: { page: 1, x: 200, y: 280 },
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    loc: { page: 1, x: 375, y: 280 },
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => applicant.residentJurisdiction,
    loc: { page: 1, x: 630, y: 361 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 730, y: 361 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 1, x: 135, y: 398 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? "x" : "",
    loc: { page: 1, x: 683, y: 893 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? "" : "x",
    loc: { page: 1, x: 768, y: 893 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? 
        fullName(applicant.birthName) : "",
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
    text: (applicant) => applicant.legalName?.first ?? "",
    loc: { page: 1, x: 187, y: 268 },
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? "",
    loc: { page: 1, x: 330, y: 268 },
  },
  {
    text: (applicant) => applicant.legalName?.last ?? "",
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => applicant.residentJurisdiction,
    loc: { page: 1, x: 630, y: 358 },
  },
  {
    text: (applicant) => applicant.zip,
    loc: { page: 1, x: 745, y: 358 },
  },
  {
    text: (applicant) => applicant.residentLocality,
    loc: { page: 1, x: 140, y: 398 },
  },
  {
    text: (applicant) => fullName(representativeName(applicant)),
    loc: { page: 1, x: 135, y: 566 },
  },
  {
    text: (applicant) => applicant.parentsAreOkay ? 
      "Parent" : "",
    loc: { page: 1, x: 700, y: 565 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? "x" : "",
    loc: { page: 2, x: 453, y: 302 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? "" : "x",
    loc: { page: 2, x: 553, y: 302 },
  },
  {
    text: (applicant) => fullName(applicant.birthName) ? 
        fullName(applicant.birthName) : "",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""} ${applicant.zip ?? ""}`,
    field: "City State Zip Code",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number",
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) =>
      `Name Change of ${fullName(applicant.legalName) }`,
    field: "IN THE MATTER OF",
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    field: "State of birth",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Ohio" ? 
      "Ohio Bureau of Vital Statistics" : "",
    field: "Name of Vital Statics Office",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Ohio" ? 
      "4200 Surface Road" : "",
    field: "Address",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Ohio" ? 
      "Columbus" : "",
    field: "City",
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => applicant.birthJurisdiction === "Ohio" ? 
      "43228" : "",
    field: "Zip",
  },
  { 
    text: () => new Date().toLocaleDateString(), 
    field: "Date" 
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName) ?? "" 
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "State of Birth",
  },
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Adult (21.1)*/
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName) ?? "" 
      : fullName(applicant.legalName),
    field: "As Name Appears on Birth Certificate",
  },
  /** Request for a Background Check via WebCheck */
  {
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => nameInitials(applicant.representativeName),
    field: "Initials has or has not been covvicted",
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "has not been convicted",
  },
  {
    text: (applicant) => nameInitials(applicant.representativeName),
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName) ?? "" 
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "State of Birth",
  },
  /** Judgement Entry Adopting Magistrate's Decision Change of Name, Minor (21.3)*/
  {
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName) ?? "" 
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    field: "Date" 
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    field: "Date" 
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
    text: (applicant) => fullName(applicant.birthName) 
      ? fullName(applicant.birthName) ?? "" 
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
    text: (applicant) =>
      `${applicant.birthCity ?? ""}, ${applicant.birthJurisdiction ?? ""}`,
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
    field: "Date" 
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    field: "Date" 
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.residentLocality,
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
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => applicant.birthJurisdiction,
    field: "State",
  },
  {
    text: (applicant) => nameInitials(applicant.legalName),
    loc: { x: 79, y: 636 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-01",
  },
  {
    text: (applicant) => nameInitials(applicant.legalName),
    loc: { x: 79, y: 676 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-02",
  },
  {
    text: (applicant) => nameInitials(applicant.legalName),
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.parentsAreOkay ?
        fullName(representativeName(applicant)) ?? "" : "",
    field: "Name",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        applicant.streetAddress : "",
    field: "Address",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        applicant.residentCity : "",
    field: "City",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        applicant.residentJurisdiction : "",
    field: "State",
  },
  {
    text: (applicant) => applicant.parentsAreOkay ?
        applicant.zip : "",
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
    text: (applicant) => nameInitials(applicant.representativeName),
    loc: { page: 1, x: 89, y: 227 },
  },
  {
    check: (applicant) => !applicant.hasCriminalRecord,
    field: "Checkbox-09",
  },
  {
    text: (applicant) => nameInitials(applicant.representativeName),
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => applicant.residentJurisdiction,
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
    text: (applicant) => applicant.legalName?.first,
    loc: { page: 2, x: 345, y: 250 },
  },
  {
    text: (applicant) => applicant.legalName?.middle,
    loc: { page: 2, x: 345, y: 275 },
  },
  {
    text: (applicant) => 
        `${applicant.legalName?.last ?? ""} ${applicant.legalName?.suffix ?? ""}`,
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
    text: (applicant) => fullName(applicant.birthName)
      ? fullName(applicant.birthName) ?? ""
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => fullName(applicant.birthName)
      ? fullName(applicant.birthName) ?? ""
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
    text: (applicant) => applicant.birthJurisdiction,
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
    text: (applicant) => fullName(applicant.birthName)
      ? fullName(applicant.birthName) ?? ""
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
    text: (applicant) =>
      `${applicant.streetAddress ?? ""} ${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
    field: "Address",
  },
  {
    text: (applicant) => applicant.phone,
    field: "Telephone Number",
  },
];

/**
 * Williams County Adult Packet (forms listed below)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const williamsAdultMap: Formfill[] = [
  /** Request for a Background Check via WebCheck */
  {
    text: () => "•",
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
      `${applicant.residentCity ?? ""}, ${applicant.residentJurisdiction ?? ""}, ${applicant.zip ?? ""}`,
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
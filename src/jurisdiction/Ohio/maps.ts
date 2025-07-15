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
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: (() => {
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
    })(),
    fieldName: "NAME BEFORE CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NAME AFTER CHANGE",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "RESIDENT OF COUNTY OHIO",
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
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "LAST NAME_2",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "CHANGE REQUESTED FOR THE FOLLOWING REASON(S)",
  }),
  /** For typed only docs do /S/ then the name in the signature fieldName. */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "TYPE OF PRINTED NAME_2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "ADDRESS_2",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "CITY_2",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "STATE_2",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "ZIP_2",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "TELEPHONE NUMBER_2",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "EMAIL ADDRESS_2",
  }),
];

/**
 * Application for Change of Name of Minor (Ohio form 21.2)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PRESENT NAME",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "PARENT",
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
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "LAST NAME_2",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "REASON FOR REQUESTING THIS NAME CHANGE_2",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "WAIVER OF NOTICE OF HEARING AND CONSENT OF PARENT",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? fullName(representativeName(applicant))
      : "",
    fieldName: "NAME",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.streetAddress : "",
    fieldName: "ADDRESS",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentCityAndStateAndZip)
      : "",
    fieldName: "CITY",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "NAME AND ADDRESS OF PARENT",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "WAIVER OF NOTICE OF HEARING AND CONSENT OF PARENT_2",
  }),
  /** For typed only docs do /S/ then the name in the signature fieldName. */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TYPE OF PRINTED NAME_2",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "ADDRESS_4",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "CITY_4",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "STATE_4",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "ZIP CODE_4",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "TELEPHONE NUMBER (INCLUDING AREA CODE)_2",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "EMAIL ADDRESS_2",
  }),
];

/**
 * Affidavit in Support of Application for Change of Name of Adult (Ohio form 21.01)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameAffidavitMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CHANGE OF NAME PRIOR TO CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "CHANGE OF NAME AFTER",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "COUNTY OHIO",
  }),
  () => ({
    check: true,
    fieldName: "APPLICANT HAS BEEN A BONA FIDE RESIDENT",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "RESIDENT OF COUNTY OHIO",
  }),
  () => ({
    check: true,
    fieldName:
      "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "APPLICANT HAS NOT BEEN CONVICTED OF, PLEADED GUILTY TO, OR BEEN ADJUSICATED A DELINQUENT CHILD FOR IDENTITY",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "APPLICANT DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR 2950.041",
  }),
];

/**
 * Affidavit in Support of Application for Change of Name of Minor (Ohio form 21.02)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameAffidavitMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME BEFORE REQUESTED CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED CHANGE OF NAME",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "COUNTY OHIO",
  }),
  () => ({
    check: true,
    fieldName: "APPLICANT",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "PARENT",
  }),
  () => ({
    check: true,
    fieldName: "MINOR HAS BEEN A BONA FIDE RESIDENT",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "MINOR HAS BEEN A BONA FIDE RESIDENT OF COUNTY OHIO",
  }),
  () => ({
    check: true,
    fieldName:
      "APPLICATION IS NOT MADE FOR THE PURPOSE OF EVADING ANY CREDITORS OR OTHER OBLIGATIONS",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "MINOR HAS NOT BEEN ADJUDICATED A DELINQUENT CHILD FOR IDENTITY FRAUD",
  }),
  (applicant) => ({
    check: !applicant.hasCriminalRecord,
    fieldName:
      "MINOR DOES NOT HAVE A DUTY TO COMPLY WITH R.C. 2950.04 OR R.C. 2950.041",
  }),
];

/**
 * Judgement Entry - Change of Name of Adult (Ohio form 21.1)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const adultChangeOfNameJudgementMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME PRIOR TO REQUESTED CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "APPLICANTS DATE OF BIRTH (MM/DD/YYYY)",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "CITY",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    fieldName: "STATE",
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
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "LAST NAME_2",
  }),
];

/**
 * Judgement Entry - Change of Name of Minor (Ohio form 21.3)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameJudgementMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME BEFORE REQUESTED CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "NAME AT BIRTH",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "MINOR'S DATE OF BIRTH",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "CITY",
  }),
  (applicant) => ({
    text: applicant.birthJurisdiction?.name,
    fieldName: "STATE",
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
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "LAST NAME_2",
  }),
];

/**
 * Consent to Change of Name (Ohio form 21.4)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const minorChangeOfNameConsentMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CURRENT NAME BEFORE CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "PARENT",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "CURRENT NAME BEFORE CHANGE_2",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE_2",
  }),
];

/**
 * Judgement Entry Setting Hearing and Ordering Notice (Ohio form 21.03)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const judgementSettingHearingMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME PRIOR TO REQUEST",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME",
  }),
  () => ({
    check: true,
    fieldName:
      "BY PUBLICATION ONCE IN A NEWSPAPER OF GENERAL CIRCULATION IN THIS COUNTY",
  }),
];

/**
 * Notice of Hearing on Change of Name (Ohio form 21.5)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const hearingNoticeMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PRESENT NAME",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME",
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
    text: applicant.legalName.last,
    fieldName: "LAST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "LAST NAME_2",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO_2",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.court.address,
    fieldName: "LOCATION OF PROBATE COURT",
  }),
  /** For typed only docs do /S/ then the name in the signature fieldName. */
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TYPED OR PRINTED NAME",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "ADDRESS",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName: "CITY",
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.name,
    fieldName: "STATE",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName: "ZIP CODE",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "EMAIL ADDRESS",
  }),
];

/**
 * Release for Criminal Background Check (Ohio form 21.14)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const backgroundCheckReleaseMap: Formfill[] = [
  () => ({
    text: formatDate(new Date().toLocaleDateString(), {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE (MM/DD/YYYY)",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PRINTED NAME",
  }),
  /** For typed only docs do /S/ then the name in the signature fieldName. */
];

/**
 * Application to Waive Publication Requirement and Seal File (Ohio form 21.6)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const waivePublicationOneMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY, OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PRESENT NAME",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PURSUANT TO R.C. 2717.11",
  }),
];

/**
 * Application to Waive Publication and Seal File (Ohio form 21.6A)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const waivePublicationTwoMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "PROBATE COURT OF COUNTY OHIO",
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NAME BEFORE REQUESTED CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "REQUESTED NAME CHANGE",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "PURSUANT R.C. 2717.11, REQUESTS COURT WAIVE PUBLICATION",
  }),
];

/**
 * Civil Fee Waiver Affidavit and Order (Ohio form 20.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 265, y: 173 },
  }),
  /** Add Judges Name Here.*/
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.legalName.first,
    loc: { x: 270, y: 248 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.middle
      : applicant.legalName.middle,
    loc: { x: 270, y: 273 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? `${applicant.representativeName?.last ?? ""} ${applicant.representativeName?.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 270, y: 298 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.first
      : applicant.legalName.first,
    loc: { x: 225, y: 493 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? applicant.representativeName?.last
      : applicant.legalName.last,
    loc: { x: 575, y: 493 },
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? formatDate(applicant.birthdate, {
          format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
          separator: "/",
        })
      : "",
    loc: { x: 245, y: 539 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullContactInfo),
    loc: { x: 210, y: 580 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.first : "",
    loc: { x: 75, y: 672 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? applicant.legalName.last : "",
    loc: { x: 263, y: 672 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "x" : "",
    loc: { x: 423, y: 663 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "Child" : "",
    loc: { x: 590, y: 672 },
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 90, y: 610 },
  }),
];

/**
 * Application for Ohio Certified Birth Record Copies (Ohio form HEA 2709) (BC Request)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCertOrderMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Birth Certificate",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicant Name",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State  ZIP",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName:
      "Full Name indicate childs full name as shown on the original birth record",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.legalName) : "",
    fieldName: "If Name was Changed Since Birth Indicate New Name",
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
    fieldName: "City and County Where Birth Occurred",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Name Before First Marriage",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Name Before First Marriage_2",
  }),
  () => ({
    text: "Other: Name Change",
    loc: { x: 320, y: 838 },
  }),
  () => ({
    text: "1",
    fieldName: "Number of Birth Record Copies",
  }),
  () => ({
    text: "21.50",
    fieldName: "x $21.50",
  }),
  () => ({
    text: "21.50",
    fieldName: "x $21.50",
  }),
  () => ({
    text: "21.50",
    fieldName: "Total Amount Due",
  }),
];

/**
 * Declaration of Gender Change (BMV 2369)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const bmvGenderDeclarationMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { page: 1, x: 45, y: 188 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { page: 1, x: 410, y: 188 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { page: 1, x: 695, y: 188 },
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    loc: { page: 1, x: 45, y: 223 },
  }),
  (applicant) => ({
    text: applicant.residentCity,
    loc: { page: 1, x: 410, y: 223 },
  }),
  (applicant) => ({
    text: applicant.residentJurisdiction?.abbreviation,
    loc: { page: 1, x: 630, y: 223 },
  }),
  (applicant) => ({
    text: applicant.zip,
    loc: { page: 1, x: 695, y: 223 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { page: 1, x: 237, y: 258 },
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    loc: { page: 1, x: 415, y: 257 },
  }),
  (applicant) => ({
    text: phoneStart(applicant.phone),
    loc: { page: 1, x: 442, y: 257 },
  }),
  (applicant) => ({
    text: phoneEnd(applicant.phone),
    loc: { page: 1, x: 482, y: 257 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.M ? "X" : "",
    loc: { page: 1, x: 629, y: 254 },
  }),
  (applicant) => ({
    text: applicant.gender === GenderMarker.F ? "X" : "",
    loc: { page: 1, x: 711, y: 254 },
  }),
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
      format: [FML.FIRST, FML.MIDDLE, FML.LAST],
    }),
    loc: { page: 1, x: 597, y: 449 },
  }),
];

/**
 * Application for Ohio Certified Birth Record Copies (Ohio form HEA 2709) (BC Update)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCertUpdateMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "Birth Certificate",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicant Name",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName: "Street Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    fieldName: "City State  ZIP",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName:
      "Full Name indicate childs full name as shown on the original birth record",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "If Name was Changed Since Birth Indicate New Name",
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
    fieldName: "City and County Where Birth Occurred",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Name Before First Marriage",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Name Before First Marriage_2",
  }),
  () => ({
    text: "Other: Updating birth record",
    loc: { x: 320, y: 838 },
  }),
  () => ({
    text: "1",
    fieldName: "Number of Birth Record Copies",
  }),
  () => ({
    text: "21.50",
    fieldName: "x $21.50",
  }),
  () => ({
    text: "21.50",
    fieldName: "x $21.50",
  }),
  () => ({
    text: "21.50",
    fieldName: "Total Amount Due",
  }),
];

/**
 * Application for Correction of Birth Record (Ohio form 30.0)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const birthCorrectionMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "CourtCounty",
  }),
  /** Add Judges Name Here.*/
  /** Adjust several fieldNames to chosen name if this is done after a legal name change*/
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "BirthRecordName",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    fieldName: "CourtCounty2",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(applicant.representativeName)
      : fullName(applicant.legalName),
    fieldName: "FormSubject Name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName)
      ? fullName(applicant.birthName)
      : fullName(applicant.legalName),
    fieldName: "ChildName",
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
    fieldName: "Birthplace",
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
    fieldName: "ChildSex",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "ParentName",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "ParentName2",
  }),
  (applicant) => ({
    text: formatDate(applicant.mothersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "ParentDOB",
  }),
  (applicant) => ({
    text: formatDate(applicant.fathersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Parent2DOB",
  }),
  () => ({
    text: "Sex:",
    fieldName: "BoxNo1",
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
    fieldName: "ReadsAs1",
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
    fieldName: "ShouldRead1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.FullContactInfo),
    fieldName: "Date",
  }),
  (applicant) => ({
    text: isMinor(applicant)
      ? fullName(applicant.representativeName)
      : fullName(applicant.legalName),
    fieldName: "ApplicantName",
  }),
];

/**
 * Voter Registration and Information Update Form (Ohio form unnumbered)
 * Updated 6/2025.
 * @type {Formfill[]}
 */
export const voterRegistrationMap: Formfill[] = [
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtLastName[0]",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFirstName[0]",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtMiddleInitial[0]",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix ?? "",
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtSuffix[0]",
  }),
  (applicant) => ({
    text: applicant.streetAddress,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingAddress[0]",
  }),
  (applicant) => ({
    text: applicant.residentCity,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingCity[0]",
  }),
  (applicant) => ({
    text: applicant.zip,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtVotingZip[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocality?.name,
    loc: { x: 610, y: 693 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtBirthdate[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtPhoneNumber[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName:
      "VoterRegistrationForm[0].TitleAndFormInstructions[0].InputInformation[0].txtFormerName[0]",
  }),
];

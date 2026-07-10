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
  phoneAreaCode,
  phoneEnd,
  phoneStart,
  addZero,
  representativeName,
  getJurisdiction,
  ContactFormat as cf,
  formatContactInfo,
  abbreviateJurisdiction,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);

/*!
 * Petition for Change of Name (Missouri form CAFC401) (Adult)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const adultNamePetitionMap: Formfill[] = [
  (applicant) => ({
    fieldName: "Circuit_Court_County",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "Petitioner_Legal_First_Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Current_Legal_Middle_Name",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "Current_Legal_Last_Name",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "Current_Legal_Suffix",
  }),
  (applicant) => ({
    fieldName: "Birth_Legal_Name",
    choice: applicant.birthName.first ? "different from current" : "Same as current",
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    fieldName: "Birth_Legal_First_Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle,
    fieldName: "Birth_Legal_Middle_Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last,
    fieldName: "Birth_Legal_Last_Name",
  }),
  (applicant) => ({
    text: applicant.birthName.suffix,
    fieldName: "Birth_Legal_Suffix",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "Change_First_Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Change_Middle_Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "Change_Last_Name",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "Change_Suffix",
  }),
  () => ({
    fieldName: "Petition_Filing_Count",
    choice: "First petition",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "Mailing_Street",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "Mailing_City",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "Mailing_State",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "Mailing_Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone_Number_Area_Code",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email_Address_Optional",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Birth_Date",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "Birth_City",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "Birth_State",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "Birth_Country",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "Change_Name_Reason",
  }),
  () => ({
    fieldName: "Residence_Country",
    choice: "United States",
  }),
  (applicant) => ({
    text: applicant.residentJurisdictionName,
    fieldName: "Residence_State",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "Residence_County",
  }),
  (applicant) => ({
    fieldName: "Name_Change_History",
    choice: applicant.birthName.first ? "Previously been changed" : "Never been changed",
  }),
];

/*!
 * Petition for Change of Name by Parent (Missouri form CAFC402) (Minor)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const minorNamePetitionMap: Formfill[] = [
  (applicant) => ({
    fieldName: "nmpCountyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "nmpPetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "nmpPetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "nmpPetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "nmpPetitionerSuffix",
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    fieldName: "nmpYourFirstName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    fieldName: "nmpYourMiddleName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    fieldName: "nmpYourLastName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix,
    fieldName: "nmpYourSuffix",
  }),
  () => ({
    fieldName: "nmpWhichPetition",
    choice: "This is the first petition that has been filed in this case. (Original petition)",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmpYourStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmpYourCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmpYourState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmpYourZip",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmpOtherParentStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmpOtherParentCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmpOtherParentState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmpOtherParentZip",
  }),
  () => ({
    fieldName: "nmpOtherParentSigned412",
    choice: "The other parent of the child has signed Consent to Minor Child's Change of Name CAFC412, which is attached hereto.",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "nmpChildWantsFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "nmpChildWantsMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "nmpChildWantsLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "nmpChildWantsSuffix",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmpChildsStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmpChildsCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmpChildsState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmpChildsZip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "nmpChildsPhone",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "nmpChildsEmail",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "nmpChildsDOB",
  }),
  (applicant) => ({
    text: applicant.birthCity,
    fieldName: "nmpChildPlaceOfBirthCity",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "nmpChildPlaceOfBirthState",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "nmpChildPlaceOfBirth",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "nmpReasonsChildWantsChange",
  }),
  () => ({
    fieldName: "nmpChildResidesWhichCountry",
    choice: "The child resides in the United States.",
  }),
  (applicant) => ({
    text: applicant.residentJurisdictionName,
    fieldName: "nmpChildResidesWhichState",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "nmpChildResidesCounty",
  }),
  (applicant) => ({
    fieldName: "nmpChangedNameBeforeOrNot",
    choice: applicant.birthName.first ? "The child's name has previously been changed as follows:" : "The child's name has never been changed.",
  }),
];

/*!
 * Petition, Consent and Order for Parent's Appointment as Next Friend (Missouri form CAFC411) (Minor)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const minorConsentMap: Formfill[] = [
  (applicant) => ({
    fieldName: "nmnfCountyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "nmnfPetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "nmnfPetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "nmnfPetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "nmnfPetitionerSuffix",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "nmnfPetitionerDOB",
  }),
  (applicant) => ({
    fieldName: "nmnfChildAge",
    choice: applicant.age && applicant.age < 14 ? "The child whose name is to be changed is age 0 to 13 years." : "The child whose name is to be changed is age 14 to 17 years.",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.legalName.first,
    fieldName: "nmnfPetitionerFirstName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.legalName.middle,
    fieldName: "nmnfPetitionerMiddleName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.legalName.last,
    fieldName: "nmnfPetitionerLastName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.legalName.suffix,
    fieldName: "nmnfPetitionerSuffix2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.representativeName?.first,
    fieldName: "nmnfYourFirstName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.representativeName?.middle,
    fieldName: "nmnfYourMiddleName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.representativeName?.last,
    fieldName: "nmnfYour LastName2",
  }),
  (applicant) => ({
    text: applicant.age && applicant.age < 14 ? "" : applicant.representativeName?.suffix,
    fieldName: "nmnfYourSuffix2",
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    fieldName: "nmnfYourFirstName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    fieldName: "nmnfYourMiddleName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    fieldName: "nmnfYour LastName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix,
    fieldName: "nmnfYourSuffix",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmnfYourStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmnfYourCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmnfYourState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmnfYourZip",
  }),
  (applicant) => ({
    fieldName: "nmnfResidesWithWhom",
    choice: applicant.parentsAreOkay ? "The child resides with me." : undefined,
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    loc: { page: 1, x: 435, y: 512 },
  }),
];

/*!
 * Consent to Minor Child's Change of Name (Missouri form CAFC412) (Minor)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const minorParentConsentMap: Formfill[] = [
  (applicant) => ({
    fieldName: "nmcCountyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "nmcPetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "nmcPetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "nmcPetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "nmcPetitionerSuffix",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmcYourStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmcYourCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmcYourState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail && applicant.parentsAreOkay
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmcYourZip",
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    fieldName: "nmcOtherParentFirstName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    fieldName: "nmcOtherParentMiddleName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    fieldName: "nmcOtherParentsLastName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix,
    fieldName: "nmcOtherParentSuffix",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "nmcOtherParentStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "nmcOtherParentCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "nmcOtherParentState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "nmcOtherParentZip",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "nmcChildWantsFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "nmcChildWantsMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "nmcChildWantsLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "nmcChildWantsSuffix",
  }),
 ];

/*!
 * Judgment for Change of Name of Adult Individual (Missouri form CAFC470) (Adult)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const adultNameOrderMap: Formfill[] = [
  (applicant) => ({
    fieldName: "CountyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "petitionersFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "petitionersMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "petitionersLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "petitionersSuffix",
  }),
  () => ({
    check: true,
    fieldName: "appearsInPerson",
  }),
  (applicant) => ({
    fieldName: "page1Group1",
    choice: applicant.birthName.first ? "My full legal name at birth (prior to first marriage) was" : "My full legal name at birth (prior to first marriage) was same as current full legal name.",
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    fieldName: "petitionersFirstNameAtBirth",
  }),
  (applicant) => ({
    text: applicant.birthName.middle,
    fieldName: "petitionersMiddleNameAtBirth",
  }),
  (applicant) => ({
    text: applicant.birthName.last,
    fieldName: "petitionersLastNameAtBirth",
  }),
  (applicant) => ({
    text: applicant.birthName.suffix,
    fieldName: "petitionersJrSrIIIAtBirth",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "petitionersRequestedFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "petitionersRequestedMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "petitionersRequestedLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "petitionersRequestedJrSrIII",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "birthDate",
  }),
];

/*!
 * Judgment for Change of Name of Minor Child (Missouri form CAFC472) (Minor)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const minorNameOrderMap: Formfill[] = [
  (applicant) => ({
    fieldName: "nmjCountyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "nmjPetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "nmjPetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "nmjPetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "nmjPetitionerSuffix",
  }),
  (applicant) => ({
    check: applicant.age !== undefined && applicant.age >= 14,
    fieldName: "nmjPetIs14AgreesToNextFriendListed",
  }),
  (applicant) => ({
    text: fullName(applicant.representativeName),
    fieldName: "nmjNameOfNextFriend",
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    fieldName: "nmjNextFriendFname",
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    fieldName: "nmjNextFriendMname",
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    fieldName: "nmjNextFriendLName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix,
    fieldName: "nmjNextFriendSuffix",
  }),
  () => ({
    check: true,
    fieldName: "nmjNextFriendAppearsInPerson",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "nmjOtherParentAppearsInPerson",
  }),
  () => ({
    check: true,
    fieldName: "nmjOtherParentFiledConsent",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "nmjChildWantsFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "pnmjChildWantsMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "nmjChildWantsLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "nmjChildWantsSuffix",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "nmjChildsDOB",
  }),
];

/*!
 * Motion and Affidavit in Support of Request to Proceed As a Poor Person (Missouri form GN10) (All)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.court.circuit,
    fieldName: "Judicial Circuit Court Number",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "COUNTY NAME",
  }),
  /*
  This formfill is imcomplete, need minor question answer to complete
  */
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Petitioner Name",
  }),
  (applicant) => ({
    text: 
      `${formatContactInfo(applicant, cf.ResidentFullAddress)},
      ${applicant.phone}`,
    fieldName: "Petitioners AddressTelephone",
  }),
];

/*!
 * Confidential Case Filing Information Sheet (Missouri form FI-10) (All)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const confidentialInfoMap: Formfill[] = [
  (applicant) => ({
    text: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "City of St. Louis";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
    fieldName: "CountyCity of St Louis",
  }),
  () => ({
    text: "Petitioner v. Respondent",
    fieldName: "Style of Case",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "QD" : "DD",
    fieldName: "Case Type Code",
    // Case type info found here: https://www.courts.mo.gov/file.jsp?id=411
  }),
  () => ({
    text: "Change of Name",
    fieldName: "Case Type Description",
  }),
  (applicant) => ({
    check: isMinor(applicant) ? undefined : true,
    fieldName: "PETP",
    // Party info found here: https://www.courts.mo.gov/file.jsp?id=491
  }),
  (applicant) => ({
    check: isMinor(applicant) ? true : undefined,
    fieldName: "PET Other",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "NOFP" : "",
    fieldName: "P_Party Type Code",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "Next Friend Acting Pro Se (with no attorney)" : "",
    fieldName: "P_Party Type Description",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "P Last Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "P_First Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "P_Middle name",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "P_suffix",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentStreet),
    fieldName: "P_Address",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "P_City",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.residentJurisdictionName ?? ""),
    fieldName: "P_State",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "P_Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "P_Contact Telephone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "P Email_Address",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "P DOB",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "P_Male",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "P_Female",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay 
      ? formatContactInfo(applicant, cf.ResidentStreet) : "",
    fieldName: "R_Address",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay 
      ? applicant.homeAddress?.city : "",
    fieldName: "R_City",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay 
    ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "") : "",
    fieldName: "R_State",
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay
    ? applicant.homeAddress?.zip : "",
    fieldName: "R_Zip",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "SUBMITTED_BY",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.phone,
    fieldName: "PHONE_SUBMITTED_BY",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.email,
    fieldName: "EMAIL_SUBMITTED_BY",
  }),
];

/*!
 * Redaction Certification (Missouri form GN320) (All)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const redactionCertificationMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocality?.court.circuit,
    fieldName: "JUDICIAL_CIRCUIT",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "COUNTY_NAME",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NAME",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "ADDRESS",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "Change of Name (QD)" : "Change of Name (DD)",
    fieldName: "CASE_TYPE",
    // Case type info found here: https://www.courts.mo.gov/file.jsp?id=411
  }),
  () => ({
    text: "Petitioner v. Respondent",
    fieldName: "STYLE_OF_CASE",
  }),
   (applicant) => ({
    text: isMinor(applicant) 
      ? "CAFC472, CAFC411, & CAFC412" 
      : "CAFC401",
    fieldName: "DOCUMENT_FILED",
  }), 
];

/*!
 * Request for Publication after Judgement of Change of Name for Adult Individual 
   (Missouri form CAFC480) (Adult)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const adultPublicationMap: Formfill[] = [
  (applicant) => ({
    fieldName: "countyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "petitionersFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "petitionersMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "petitionersLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "petitionersSuffixJrSrIII",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "petitionersStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "petitionersCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "petitionersState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "petitionersZip",
  }),
  (applicant) => ({
    fieldName: "countyListWithoutCounty",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis";
        case "":
          return applicant.residentLocalityName;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "petitionersFirstNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "petitionersMiddleNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "petitionersLastNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "petitionersSuffixJrSrIIIAfterChange",
  }),
];

/*!
 * Request for Publication after Judgement of Change of Name for Minor Child 
   (Missouri form CAFC482) (Minor)
 * Updated 6/2026.
 * @type {Formfill[]}
 */
export const minorPublicationMap: Formfill[] = [
  (applicant) => ({
    fieldName: "countyList",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis County";
        case "":
          return `${applicant.residentLocalityName} County`;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "petitionersFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "petitionersMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "petitionersLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "petitionersSuffixJrSrIII",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "petitionersStreet",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "petitionersCity",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "petitionersState",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "petitionersZip",
  }),
  (applicant) => ({
    fieldName: "countyListWithoutCounty",
    value: (() => {
      switch (applicant.residentLocalityName) {
        case "St. Louis (City)":
          return "St. Louis City";
        case "St. Louis (County)":
          return "St. Louis";
        case "":
          return applicant.residentLocalityName;
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "petitionersFirstNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "petitionersMiddleNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "petitionersLastNameAfterChange",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "petitionersSuffixJrSrIIIAfterChange",
  }),
];

/*!
 * Affidavit for Correction of a Birth, Death, or Fetal Death Record (Missouri form 580-0645) (All)
 * Updated 6/2026.
 * @type {Formfill[]}
 * 
 * !!! This form is, to my knowledge, not needed. I am keeping it here just in case. !!!
 * 
 */
export const birthCertCorrectionMap: Formfill[] = [
  () => ({
    fieldName: "Correction Type",
    value: "Birth",
  }),
  (applicant) => ({
    text: applicant.birthName.first ? applicant.birthName.first : applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle ? applicant.birthName.middle : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last 
      ? `${applicant.birthName.last} ${applicant.birthName.suffix}` 
      : `${applicant.legalName.last} ${applicant.legalName.suffix}` ,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH],
      separator: "",
    }),
    fieldName: "DOB - Month",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.DAY],
      separator: "",
    }),
    fieldName: "DOB - Day",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.YEAR],
      separator: "",
    }),
    fieldName: "DOB - Year",
  }),
  (applicant) => ({
    fieldName: "Sex",
    value: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "Unknown";
      }
    })(),
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "Name" : "",
    fieldName: "Item Number or Item Name.0",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.isChangingLegalName) {
        case true:
          return applicant.birthName.first 
            ? fullName(applicant.birthName) 
            : fullName(applicant.legalName);
        case false:
          return "";
      }
    })(),
    fieldName: "Instead of.0",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Should Read.0",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "Sex" : "",
    fieldName: "Item Number or Item Name.1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
      }
    })(),
    fieldName: "Instead of.1",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
      }
    })(),
    fieldName: "Should Read.1",
  }),
  (applicant) => ({
    text: isMinor(applicant) 
      ? applicant.representativeName?.first 
      : applicant.legalName.first,
    fieldName: "Affiant First Name",
  }),
  (applicant) => ({
    text: isMinor(applicant) 
      ? applicant.representativeName?.middle 
      : applicant.legalName.middle,
    fieldName: "Affiant Middle Name",
  }),
  (applicant) => ({
    text: isMinor(applicant)  
      ? `${applicant.representativeName?.last} ${applicant.representativeName?.suffix}` 
      : `${applicant.legalName.last} ${applicant.legalName.suffix}` ,
    fieldName: "Affiant Last Name",
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? "Parent" : "";
        case false:
          return "Self";
      }
    })(),
    fieldName: "Should Read.1",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? formatContactInfo(applicant, cf.ResidentStreet) 
      : formatContactInfo(applicant, cf.MailStreet),
    fieldName: "Affiant Mailing Address",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.city
      : applicant.mailAddress?.mailCity,
    fieldName: "Affiant Mailing City",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? abbreviateJurisdiction(applicant.residentJurisdictionName ?? "")
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "Affiant Mailing State",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip,
    fieldName: "Affiant Mailing Zip Code",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.phone,
    fieldName: "Affiant Phone Number",
  }),
];

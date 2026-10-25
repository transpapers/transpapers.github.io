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
  ContactFormat as cf,
  formatContactInfo,
  abbreviateJurisdiction,
  getVALocality,
} from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then county/city specific forms which are listed in alphabetical order based on county/city name
// then state documents (which need no map information);

/*!
 * Cover Sheet for Filing Civil Actions (Virginia form CC-1416) (All)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const VACoverSheetMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    fieldName: "User.CourtName",
  }),
  (applicant) => ({
    text: isMinor(applicant) 
      ? fullName(representativeName(applicant))
      : fullName(applicant.legalName),
    fieldName: "User.Plaintiff",
  }),
  () => ({
    text: "x",
    loc: { x: 158, y: 162 },
  }),
  () => ({
    check: true,
    fieldName: "User.CB374",
  }),
  () => ({
    text: "x",
    loc: { x: 377, y: 929 },
  }),
  (applicant) => ({
    text: isMinor(applicant) 
      ? fullName(representativeName(applicant))
      : fullName(applicant.legalName),
    fieldName: "User.PrintName",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "User.AddressPhoneSignator",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "User.AddressPhoneSignator2",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "User.EmailAddress",
  }),
];

/*!
 * Application for Change of Name (Virginia form CC-1411) (Adult)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const adultNamePetitionMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "" : "X",
    loc: { x: 327, y: 100 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "X" : "",
    loc: { x: 384, y: 100 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    fieldName: "User.Court",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "User.InReFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "User.InReMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "User.InReLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "User.InReSuffix",
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    fieldName: "User.PetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.birthName.middle,
    fieldName: "User.PetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.birthName.last,
    fieldName: "User.PetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.birthName.suffix,
    fieldName: "User.PetitionerSuffix",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "User.CountyOfResidence",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentStreet),
    fieldName: "User.PetitionerAddress",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "User.PetitionerCity",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.residentJurisdictionName ?? ""),
    fieldName: "User.PetitionerState",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "User.PetitionerZip",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "User.PetitionerCountry\\",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail ? "" 
      : formatContactInfo(applicant, cf.MailFullAddress),
    fieldName: "User.PetitionerMailingAddress",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "User.PetitionerDOB",
  }),
  (applicant) => ({
    text: `${applicant.birthCity ?? ""}, ${abbreviateJurisdiction(applicant.birthJurisdictionName ?? "") ?? ""}`,
    fieldName: "User.PetitionerPlaceOfBirtg",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "User.ChangeB",
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 753, y: 604 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 753, y: 630 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 753, y: 709 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 753, y: 782 },
  }),
  (applicant) => ({
    text: applicant.birthName.first ? "X" : "",
    loc: { x: 699, y: 868 },
  }),
  (applicant) => ({
    text: applicant.birthName.first ? "" : "X",
    loc: { x: 753, y: 868 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName),
    fieldName: "User.PreviousNames",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "User.FromFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "User.FromMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "User.FromLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "User.FromSuffix",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "User.ToFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "User.ToMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "User.ToLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "User.ToSuffix",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "User.EmailAddress",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "User.Telephone",
  }),
];

/*!
 * Application for Change of Name (Virginia form CC-1427) (Minor)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const minorNamePetitionMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "" : "X",
    loc: { x: 252, y: 79 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "X" : "",
    loc: { x: 300, y: 79 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    fieldName: "User.Court",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "User.InReFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "User.InReMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "User.InReLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "User.InReSuffix",
  }),
  (applicant) => ({
    check: applicant.birthName.first ? true : undefined,
    fieldName: "User.HasCB",
  }),
  (applicant) => ({
    check: !applicant.birthName.first,
    fieldName: "User.HasNotCB",
  }),
  (applicant) => ({
    text: applicant.representativeName?.first,
    fieldName: "User.PetitionerFirstName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.middle,
    fieldName: "User.PetitionerMiddleName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.last,
    fieldName: "User.PetitionerLastName",
  }),
  (applicant) => ({
    text: applicant.representativeName?.suffix,
    fieldName: "User.PetitionerSuffix",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentStreet),
    fieldName: "User.Address",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "User.PetitionerCity",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.residentJurisdictionName ?? ""),
    fieldName: "User.PetitionerState",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "User.PetitionerZip",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "User.PetitionerCountry",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail ? "" 
      : formatContactInfo(applicant, cf.MailFullAddress),
    fieldName: "User.MailingAddress",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "User.CBParent",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "User.PetitionerDOB",
  }),
  (applicant) => ({
    text: `${applicant.birthCity ?? ""}, ${abbreviateJurisdiction(applicant.birthJurisdictionName ?? "") ?? ""}`,
    fieldName: "User.PetitionerPlaceOfBirtg",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "User.CityOfRes",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.representativeName?.first : "",
    fieldName: "User.ParentFirstName2",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.representativeName?.middle : "",
    fieldName: "User.ParentMiddleName2",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.representativeName?.last : "",
    fieldName: "User.ParentLastName2",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? applicant.representativeName?.suffix : "",
    fieldName: "User.ParentSuffix2",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentStreet),
    fieldName: "User.ResAddress",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "User.ResCity",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.residentJurisdictionName ?? ""),
    fieldName: "User.ResState",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "User.ResZip",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName ? "USA" : "",
    fieldName: "User.ResCountry",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail ? "" 
      : formatContactInfo(applicant, cf.MailFullAddress),
    fieldName: "User.AddressDiffRes",
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 743, y: 732 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 743, y: 754 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 743, y: 818 },
  }),
  (applicant) => ({
    text: applicant.hasCriminalRecord ? "" : "X",
    loc: { x: 740, y: 863 },
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "User.Reason",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "User.FromFirstName",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "User.FromMiddleName",
  }),
  (applicant) => ({
    text: applicant.legalName.last,
    fieldName: "User.FromLastName",
  }),
  (applicant) => ({
    text: applicant.legalName.suffix,
    fieldName: "User.FromSuffix",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "User.ToFirstName",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "User.ToMiddleName",
  }),
  (applicant) => ({
    text: applicant.chosenName.last,
    fieldName: "User.ToLastName",
  }),
  (applicant) => ({
    text: applicant.chosenName.suffix,
    fieldName: "User.ToSuffix",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "User.CBJointApplication",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "Parent" : "",
    fieldName: "User.RelationshipC",
  }),
];

/*!
 * Order for Change of Name (Virginia form CC-1412) (Adult)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const adultNameOrderMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "" : "X",
    loc: { x: 304, y: 116 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "X" : "",
    loc: { x: 351, y: 116 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    loc: { x: 433, y: 112 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 78, y: 171 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 78, y: 225 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName),
    loc: { x: 332, y: 269 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 233, y: 286 },
  }),
];

/*!
 * Order for Change of Name (Virginia form CC-1428) (Minor)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const minorNameOrderMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "" : "X",
    loc: { x: 304, y: 106 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "X" : "",
    loc: { x: 351, y: 106 },
  }),
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    loc: { x: 433, y: 101 },
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 90, y: 195 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 90, y: 224 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentFullAddress) : "",
    loc: { x: 90, y: 250 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? "X" : "",
    loc: { x: 74, y: 281 },
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentFullAddress) : "",
    loc: { x: 90, y: 277 },
  }),
];

/*!
 * Petition for Proceeding in Civil Case without Payment of Fees or Costs 
 * (Virginia form CC-1414) (All)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.FilingLocality,
    fieldName: "User.CourtName",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "User.Name1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "User.PrintNamePetitioner",
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentFullAddress) : "";
        case false:
          return formatContactInfo(applicant, cf.ResidentFullAddress);
      }
    })(),
    fieldName: "User.PetitionerResidenceAddress",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.phone,
    fieldName: "User.PetitionerTelephone",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.email,
    fieldName: "User.PetitionerEmail",
  }),
];

/*!
 * Driver’s Licence and Identification Card Application (Virginia form DL 1P) (All)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const DMVMap: Formfill[] = [
  () => ({
    fieldName: "form1[0].PrimaryPage[0].ApplicationType[0].Part3[0].RadioButtonList[0]",
    choice: "0",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : fullName(applicant.legalName),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].LegalName[0]",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].DateTimeField3[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].TelNum[0]",
  }),
  (applicant) => ({
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].GenderInd[0]",
    choice: (() => {
      switch (applicant.isChangingLegalSex) {
        case true:
          switch (applicant.gender) {
            case GenderMarker.M:
              return "0";
            case GenderMarker.F:
              return "1";
            case GenderMarker.X:
              return "2";
          }
        case false:
          switch (applicant.assignedSex) {
            case GenderMarker.M:
              return "0";
            case GenderMarker.F:
              return "1";
            case GenderMarker.X:
              return "2";
          }
      }
    })(),
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentStreet),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].StreetAddress[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].City[0]",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.residentJurisdictionName ?? ""),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.MailStreet),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].StreetAddress2[0]",
  }),
  (applicant) => ({
    text: applicant.mailAddress?.mailCity,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].City2[0]",
  }),
  (applicant) => ({
    text: abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].State2[0]",
  }),
  (applicant) => ({
    text: applicant.mailAddress?.mailZip,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].Zip2[0]",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].#area[1].NameChange[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].EmailAddr[0]",
  }),
  (applicant) => ({
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].#area[0].RadioButtonList[0]",
    choice: 
      getVALocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.CountyTrueCityFalse ? "1" : "0",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "form1[0].PrimaryPage[0].Applicant_Info[0].BasicInfo[0].#area[0].TextField1[0]",
  }),
  (applicant) => ({
    fieldName: "form1[0].Page2[0].Parent-Gaurdian-Consent[0].Signatures[0].Certify-Applicant-Under18[0].YesNo[0]",
    choice: isMinor(applicant) && !applicant.hasCriminalRecord ? "1" : undefined,
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : fullName(applicant.legalName),
    fieldName: "form1[0].Page2[0].Certification[0].Cert[0].TextField2[1]",
  }),
];

/*!
 * Birth Certificate Amendment Request Form (Virginia form VS43) (All)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const birthCertUpdateMap: Formfill[] = [
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return fullName(representativeName(applicant));
        case false:
          return applicant.isChangingLegalName ?
            fullName(applicant.chosenName) : fullName(applicant.legalName);
      }
    })(),
    loc: { x: 178, y: 207 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.phone,
    loc: { x: 683, y: 207 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? formatContactInfo(applicant, cf.ResidentStreet) : "";
        case false:
          return formatContactInfo(applicant, cf.ResidentStreet);
      }
    })(),
    loc: { x: 153, y: 240 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? applicant.homeAddress?.city : "";
        case false:
          return applicant.homeAddress?.city;
      }
    })(),
    loc: { x: 459, y: 240 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? 
            abbreviateJurisdiction(applicant.residentJurisdictionName ?? "") : "";
        case false:
          return abbreviateJurisdiction(applicant.residentJurisdictionName ?? "");
      }
    })(),
    loc: { x: 635, y: 240 },
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return applicant.parentsAreOkay ? applicant.homeAddress?.zip : "";
        case false:
          return applicant.homeAddress?.zip;
      }
    })(),
    loc: { x: 735, y: 240 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : applicant.email,
    loc: { x: 148, y: 273 },
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : "X",
    loc: { x: 42, y: 331 },
  }),
  (applicant) => ({
    text: isMinor(applicant) && applicant.parentsAreOkay ? "X" : "",
    loc: { x: 216, y: 331 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? "Registrant's name" : "",
    loc: { x: 35, y: 596 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    loc: { x: 260, y: 596 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    loc: { x: 570, y: 596 },
  }),
  (applicant) => ({
    text: applicant.isChangingLegalSex ? "Registrant's sex" : "",
    loc: { x: 35, y: 625 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return applicant.isChangingLegalSex ? "Female" : "";
        case GenderMarker.M:
          return applicant.isChangingLegalSex ? "Male" : "";
        case GenderMarker.X:
          return "Nonbinary (X)";
      }
    })(),
    loc: { x: 260, y: 625 },
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return applicant.isChangingLegalSex ? "Female" : "";
        case GenderMarker.M:
          return applicant.isChangingLegalSex ? "Male" : "";
        case GenderMarker.X:
          return "";
      }
    })(),
    loc: { x: 570, y: 625 },
  }),
];

/*!
 * Form for Changing Sex Designation (Virginia form VS42) (All)
 * Updated 10/2026.
 * @type {Formfill[]}
 */
export const birthCertGenderMarkerMap: Formfill[] = [
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : fullName(applicant.legalName),
    fieldName: "Patient Full Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Patient's Date of Birth",
  }),
  (applicant) => ({
    text: applicant.birthCounty,
    fieldName: "Place of Birth (City/County)",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "";
      }
    })(),
    fieldName: "Enter male or female",
  }),
];
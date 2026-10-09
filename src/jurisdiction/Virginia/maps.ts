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

import { /*GenderMarker,*/ DateFormatPart as DATE } from "../../types/types";
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
    text: applicant.residentLocalityName,
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
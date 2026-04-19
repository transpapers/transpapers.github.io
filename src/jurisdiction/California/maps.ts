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
  getJurisdiction,
  abbreviateJurisdiction,
  nameInitials,
  phoneAreaCode,
  phoneStart,
  phoneEnd,
} from "../../lib/util";

import { ContactFormat as cf, formatContactInfo } from "../../lib/util";

import { GenderMarker, DateFormatPart as DATE, NameFormatPart as FML } from "../../types/types";
import { Formfill } from "../../types/formfill";

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then county forms for specific courts;

/*!
 * Civil Case Cover Sheet (California form CM-010.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const civilCaseCoverMap: Formfill[] = [
  (applicant) => ({
    text: 
      `${fullName(representativeName(applicant))}, 
      ${formatContactInfo(applicant, cf.ResidentFullAddress) ?? ""}`,
    fieldName: "CM-010[0].Page1[0].P1Caption[0].AttyPartyInfo[0].TextField1[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "CM-010[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "CM-010[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "CM-010[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Email[1]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "CM-010[0].Page1[0].P1Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "CM-010[0].Page1[0].P1Caption[0].TitlePartyName[0].Party1[0]",
  }),
  () => ({
    check: true,
    fieldName: "CM-010[0].Page1[0].P1Caption[0].FormTitle[0].Civil[0].limited1[0]",
  }),
  () => ({
    check: true,
    fieldName: "CM-010[0].Page1[0].List1[0].Li12[0].CheckBox2[1]",
  }),
  () => ({
    check: true,
    fieldName: "CM-010[0].Page1[0].List2[0].is1[1]",
  }),
  () => ({
    check: true,
    fieldName: "CM-010[0].Page1[0].List3[0].Lib[0].Ch2[0]",
  }),
  () => ({
    text: "1",
    fieldName: "CM-010[0].Page1[0].List4[0].item4[0].FillText1[0]",
  }),
  () => ({
    check: true,
    fieldName: "CM-010[0].Page1[0].List5[0].item5[0].is[1]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "CM-010[0].Page1[0].sign[0].SigName[0]",
  }),
];

/*!
 * Petition for Change of Name (California form NC-100.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyPetitionMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-100[0].Page1[0].Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-100[0].Page1[0].Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-100[0].Page1[0].Caption[0].TitlePartyName[0].TextField1[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-100[0].Page1[0].List1[0].PetitionerPresentName[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName === "California",
    fieldName: "NC-100[0].Page1[0].List1[0].LI1A[0].residence[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName !== "California",
    fieldName: "NC-100[0].Page1[0].List1[0].LI1B[0].residence[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName !== "California",
    fieldName: "NC-100[0].Page1[0].List1[0].LI1B[0].SubLIB[0].SubLiB2[0].TwoParents_rb[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-100[0].Page1[0].List2[0].Item2[0].SubItems[0].SubitemA[0].PresentName1[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-100[0].Page1[0].List2[0].Item2[0].SubItems[0].SubitemA[0].ProposedName1[0]",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "1" : "0",
    fieldName: "NC-100[0].Page1[0].List4[0].Under18Count[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "NC-100[0].Page1[0].List6[0].NameChangeGender_cb[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex && !isMinor(applicant),
    fieldName: "NC-100[0].Page1[0].List6[0].petitioner[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex && isMinor(applicant),
    fieldName: "NC-100[0].Page1[0].List6[0].petitioner[1]",
  }),
  (applicant) => ({
    text: 
      applicant.isChangingLegalSex && isMinor(applicant) 
      ? fullName(applicant.chosenName) : "",
    fieldName: "NC-100[0].Page1[0].List6[0].ConformToGenderOthName[0]",
  }),
];

/*!
 * Petition for Recognition of Change of Gender and Sex Identifier (California form NC-300.) (Adult)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const adultNameGenderPetitionMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-300[0].Page1[0].Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-300[0].Page1[0].Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-300[0].Page1[0].Caption[0].TitlePartyName[0].TextField1[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-300[0].Page1[0].Caption[0].FormTitle[0].namechange[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-300[0].Page1[0].List1[0].FillText44[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-300[0].Page1[0].List1[0].Li1A[0].gender1[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-300[0].Page1[0].List1[0].Li1B[0].gender1[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-300[0].Page1[0].List1[0].Li1C[0].gender1[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-300[0].Page1[0].List4[0].petitioner[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 216, y: 747 },
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName === "California",
    fieldName: "NC-300[0].Page1[0].List4[0].Li4A[0].#subform[0].#subform[1].petitioner_cb[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName !== "California",
    fieldName: "NC-300[0].Page1[0].List4[0].Li4A[0].#subform[0].#subform[2].petitioner_cb[1]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName !== "California",
    fieldName: "NC-300[0].Page1[0].List4[0].Li4A[0].#subform[0].#subform[2].#subform[3].#subform[4].petitioner_cb1[0]",
  }),
  () => ({
    check: true,
    fieldName: "NC-300[0].Page1[0].List4[0].Li4C[0].petitionerc[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-300[0].Page2[0].P2Caption[0].#subform[0].Party[0]",
  }),
  () => ({
    check: true,
    fieldName: "NC-300[0].Page2[0].List5[0].cacertificate[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-300[0].Page2[0].Declaration[0].Declaration[0].gender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-300[0].Page2[0].Declaration[0].Declaration[0].gender[1]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-300[0].Page2[0].Declaration[0].Declaration[0].gender[2]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-300[0].Page2[0].Declaration[0].PetitionerSign[0].T14[0]",
  }),
];

/*!
 * Petition for Recognition of Minor's Change of Gender and Sex Identifier and for Issuance of New Birth Certificate
 * (California form NC-500.) (Minor)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const minorNameGenderPetitionMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-500[0].Page1[0].P1Header[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-500[0].Page1[0].P1Header[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-500[0].Page1[0].P1Header[0].TitlePartyName[0].Party1_ft[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-500[0].Page1[0].P1Header[0].FormTitle[0].petitioner_cb[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-500[0].Page1[0].List1[0].FillText16[0]",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "NC-500[0].Page1[0].List1[0].Li1A[0].Requester_rb[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-500[0].Page1[0].List1[0].Li1A[0].FillText16[0]",
  }),
  (applicant) => ({
    check: applicant.parentsAreOkay,
    fieldName: "NC-500[0].Page1[0].List3[0].Li3B[0].parents[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-500[0].Page1[0].List5[0].Li5A[0].ReqGender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-500[0].Page1[0].List5[0].Li5B[0].ReqGender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-500[0].Page1[0].List5[0].Li5C[0].ReqGender[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-500[0].Page2[0].List9[0].request[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-500[0].Page2[0].List9[0].TextField[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName === "California",
    fieldName: "NC-500[0].Page2[0].List9[0].Li9B[0].Sublist9b[0].Li9B1[0].location[0]",
  }),
  (applicant) => ({
    check: applicant.residentJurisdictionName !== "California",
    fieldName: "NC-500[0].Page2[0].List9[0].Li9B[0].Sublist9b[0].Li9B2[0].location[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-500[0].Page2[0].Declaration[0].FillText44[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-500[0].Page2[0].Declaration[0].dgender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-500[0].Page2[0].Declaration[0].dgender[1]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-500[0].Page2[0].Declaration[0].dgender[2]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-500[0].Page2[0].Date[0].Date1[0].T14[0]",
  }),
  (applicant) => ({
    text: applicant.parentsAreOkay ?
     `${fullName(representativeName(applicant))}, Parent` : "",
    fieldName: "NC-500[0].Page2[0].Date[0].Date2[0].T14[0]",
  }),
];

/*!
 * Name and Information About the Person Whose Name is to be Changed (California form NC-110.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyInfoMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-110[0].Page1[0].Caption[0].Petitioner_ft[0]",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].person[0]",
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].person[1]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 256, y: 232 },
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    loc: { x: 268, y: 250 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 250, y: 266 },
  }),
  (applicant) => ({
    check: isMinor(applicant),
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].Subli7b[0].Subli7b3[0].eighteen[0]",
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].Subli7b[0].Subli7b3[0].eighteen[1]",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    loc: { x: 250, y: 299 },
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].Subli7b[0].SubLi7b5[0].gender[0]",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "NC-110[0].Page1[0].List7[0].LI7B[0].Subli7b[0].SubLi7b5[0].gender[1]",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndLocality),
    loc: { x: 119, y: 349 },
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    loc: { x: 93, y: 386 },
  }),
  (applicant) => ({
    check: !isMinor(applicant),
    fieldName: "NC-110[0].Page1[0].List7[0].LI7D[0].Sublist7d[0].Subli7d1[0].relationship[0]",
  }),
  (applicant) => ({
    check: isMinor(applicant) && applicant.parentsAreOkay,
    fieldName: "NC-110[0].Page1[0].List7[0].LI7D[0].Sublist7d[0].Subli7d2[0].relationship[0]",
  }),
  (applicant) => ({
    text: 
      isMinor(applicant) && applicant.parentsAreOkay 
      ? fullName(representativeName(applicant)) : "",
    loc: { x: 206, y: 513 },
  }),
    (applicant) => ({
    text: 
      isMinor(applicant) && applicant.parentsAreOkay ?
      formatContactInfo(applicant, cf.ResidentFullAddress) : "",
    loc: { x: 462, y: 513 },
  }),
  (applicant) => ({
    check: !isMinor(applicant) && !applicant.hasCriminalRecord,
    fieldName: "NC-110[0].Page1[0].Declaration[0].SubDec[0].declaration1[0]",
  }),
  (applicant) => ({
    check: !isMinor(applicant) && !applicant.hasCriminalRecord,
    fieldName: "NC-110[0].Page1[0].Declaration[0].SubDec[0].declaration2[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-110[0].Page1[0].Declaration[0].DecSign[0].T14[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-110[0].Page1[0].PetitionerSign[0].T1444[0]",
  }),
];

/*!
 * Declaration of Guardian (California form NC-110G.) (Minors w/Guardian)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const minorGuardianDeclarationMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TEXT.0.1.1",
  }),
  () => ({
    text: "1",
    fieldName: "TEXT.0.2.1.1",
  }),
  () => ({
    text: "1",
    fieldName: "TEXT.0.2.1.2",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TEXT.0.2.0.1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndLocality),
    fieldName: "TEXT.0.2.0.2.1",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "TEXT.0.2.0.3.1.1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndLocality),
    fieldName: "TEXT.0.2.0.3.1.2.1",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TEXT.0.2.0.3.1.3.1.1.1.2.1.0.1.1.1.1.2.1.1.1.1.0",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "TEXT.0.2.0.3.1.3.1.1.1.2.1.0.1.1.1.1.2.1.1.1.1.1",
  }),
];

/*!
 * Order to Show Cause--Change of Name (California form NC-120.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyNoticeMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-120[0].Page1[0].P1Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-120[0].Page1[0].P1Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-120[0].Page1[0].P1Caption[0].TitlePartyName[0].TextField29[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-120[0].Page1[0].List1[0].PetitionerPresentName[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-120[0].Page1[0].List1[0].Item1[0].Sublist1[0].LiA[0].PresentName1[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-120[0].Page1[0].List1[0].Item1[0].Sublist1[0].LiA[0].ProposedName1[0]",
  }),
];

/*!
 * Order to Show Cause--Change of Name to Conform to Gender Identity (California form NC-125.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyConformMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-125_NC-225[0].Page1[0].Caption[0].TitlePartyName[0].Petitioner_ft[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-125_NC-225[0].Page1[0].List1[0].PetitionerName_ft[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-125_NC-225[0].Page1[0].List1[0].Li1A[0].PresentName1_ft[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-125_NC-225[0].Page1[0].List1[0].Li1A[0].ProposedName1_ft[0]",
  }),
];

/*!
 * Order to Show Cause--Recognition of Minor's Change of Gender and Issuance of New Birth Certificate
 * (California form NC-520.) (Minors)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const minorNameGenderConformMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-520[0].Page1[0].Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-520[0].Page1[0].Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-520[0].Page1[0].Caption[0].TitlePartyName[0].Petitioner_ft[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-520[0].Page1[0].Caption[0].FormTitle[0].#area[0].petitioner_cb[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-520[0].Page1[0].List1[0].CheckBox19[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-520[0].Page1[0].List1[0].LiA[0].TextField[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-520[0].Page1[0].List1[0].LiA[0].TextField[1]",
  }),
];

/*!
 * Decree Changing Name (California form NC-130.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "topmostSubform[0].Page1[0].Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "topmostSubform[0].Page1[0].Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "topmostSubform[0].Page1[0].Caption[0].TitlePartyName[0].TextField1[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "topmostSubform[0].Page1[0].PresentName1_ft[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "topmostSubform[0].Page1[0].NewName1_ft[0]",
  }),
];

/*!
 * Decree Changing Name of Minor (By Guardian) (California form NC-130G.) (Minor w/Guardian)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameChangeOnlyOrderGuardianMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "topmostSubform[0].Page1[0].StdP1Header_sf[0].TitlePartyName[0].TextField1[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "topmostSubform[0].Page1[0].PresentName_ft[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "topmostSubform[0].Page1[0].NewName_ft[0]",
  }),
];

/*!
 * Order Recognizing Change of Gender and Sex Identifier (California form NC-330.) (Adult)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const adultNameGenderOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-330[0].Page1[0].P1Header[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-330[0].Page1[0].P1Header[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-330[0].Page1[0].P1Header[0].Petition[0].Party1_ft[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-330[0].Page1[0].P1Header[0].FormTitle[0].Checkbox[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-330[0].Page1[0].List3[0].Checkbox[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-330[0].Page2[0].List9[0].identifier[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-330[0].Page2[0].List9[0].identifier[1]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-330[0].Page2[0].List9[0].identifier[2]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-330[0].Page2[0].List10[0].Checkbox[0]",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName: "NC-330[0].Page2[0].List10[0].PresentName[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-330[0].Page2[0].List10[0].Li10A[0].Checkbox10[0]",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    loc: { page: 1, x: 320, y: 308 },
  }),
];

/*!
 * Order Recognizing Minor's Change of Gender and Sex Identifier and for Issuance of New Birth Certificate
 * (California form NC-530.) (Minor)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const minorNameGenderOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Name[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.apt
      ? `${applicant.homeAddress.street}, ${applicant.homeAddress.apt}`
      : applicant.homeAddress?.street,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Street[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].City[0]",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].State[0]",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Zip[0]",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Phone[0]",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].Email[0]",
  }),
  () => ({
    text: "Self-Represented",
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].AttyPartyInfo[0].AttyFor[0]",
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].CourtInfo[0].CrtCounty[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].TitlePartyName[0].Party1[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page1[0].P1Caption[0].FormTitle[0].ChangeNameDecree[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-530G[0].Page1[0].List3[0].Li3B[0].MinorCurrentName[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page1[0].List3[0].Li3C[0].petitioner_cb[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page1[0].List3[0].Li3C[0].Sublist[0].Subli3c1[0].petitionerc[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "NC-530G[0].Page1[0].List3[0].Li3C[0].Sublist[0].Subli3c1[0].TextField6[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page1[0].List3[0].Li3E[0].checkbox34[0]",
  }),
  () => ({
    check: true,
    fieldName: "NC-530G[0].Page2[0].List4[0].Checkbox[0]",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "NC-530G[0].Page2[0].List4[0].PresentName[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.F,
    fieldName: "NC-530G[0].Page2[0].List4[0].Li4a[0].gender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.M,
    fieldName: "NC-530G[0].Page2[0].List4[0].Li4b[0].gender[0]",
  }),
  (applicant) => ({
    check: applicant.gender === GenderMarker.X,
    fieldName: "NC-530G[0].Page2[0].List4[0].Li4c[0].gender[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page2[0].List5[0].Checkbox[0]",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.legalName) : "",
    fieldName: "NC-530G[0].Page2[0].List5[0].PresentName[0]",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalName,
    fieldName: "NC-530G[0].Page2[0].List5[0].Li5a[0].Checkbox55[0]",
  }),
  (applicant) => ({
    text: applicant.isChangingLegalName ? fullName(applicant.chosenName) : "",
    loc: { page: 1, x: 275, y: 614 },
  }),
];

/*!
 * Request to Waive Court Fees (California form FW-001.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const feeWaiverMap: Formfill[] = [
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "FW-001[0].Page1[0].RightCaption[0].CourtInfo[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerName1[0]",
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
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerStrAddress[0]",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.city 
      : applicant.mailAddress?.mailCity,
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerCity[0]",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? getJurisdiction(applicant.residentJurisdictionName)?.abbreviation
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerState[0]",
  }),
  (applicant) => ({ 
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip, 
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerZip[0]", 
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "FW-001[0].Page1[0].List1[0].item1[0].PetitionerTel[0]",
  }),
  () => ({
    check: true,
    fieldName: "FW-001[0].Page1[0].List4[0].item4[0].WaiveSuperiorCrtFee[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FW-001[0].Page1[0].Sign[0].PetitionerName[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { page: 1, x: 145, y: 73 },
  }),
];

/*!
 * Order on Court Fee Waiver (Superior Court) (California form FW-003.) (All)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const feeWaiverOrderMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FW-003[0].Page1[0].PersonWaivingName_ft[0]",
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
    fieldName: "FW-003[0].Page1[0].FillText23[0]",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.city 
      : applicant.mailAddress?.mailCity,
    fieldName: "FW-003[0].Page1[0].FillText21[0]",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? getJurisdiction(applicant.residentJurisdictionName)?.abbreviation
      : abbreviateJurisdiction(applicant.mailAddress?.mailState ?? ""),
    fieldName: "FW-003[0].Page1[0].FillText20[0]",
  }),
  (applicant) => ({ 
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip, 
    fieldName: "FW-003[0].Page1[0].FillText22[0]", 
  }),
  (applicant) => ({
    text: applicant.residentLocalityName,
    fieldName: "FW-003[0].Page1[0].Stamp_court_case[0].CourtInfo_ft[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FW-003[0].Page2[0].PE_P2Header_gp[0].PersonWaivingName_ft[0]",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FW-003[0].#subform[2].PE_P2Header_gp[0].PersonWaivingName_ft[0]",
  }),
];

/*!
 * Statement of Facts (California form REG 256.) (All)
 * Updated 3/2026.
 * @type {Formfill[]}
 */
export const DMVTitleMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "F. Changing name box",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "F. changing name from",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "F. Changing name to",
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    fieldName: "PRINTED NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "FIRST NAME",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "MIDDLE NAME",
  }),
  (applicant) => ({
    text: phoneAreaCode(applicant.phone),
    fieldName: "App sign area code",
  }),
  (applicant) => ({
    text: `${phoneStart(applicant.phone)}-${phoneEnd(applicant.phone)}`,
    fieldName: "App sign phone no",
  }),
];

/*!
 * Application to Amend a Birth Record After a Court Order Name Change (California form VS 23 Birth.)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameOnlyBirthCertMap: Formfill[] = [
  (applicant) => ({
    text: isMinor(applicant) ? 
      fullName(applicant.representativeName) : fullName(applicant.chosenName),
    fieldName: "Name",
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
    fieldName: "Street",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.city 
      : applicant.mailAddress?.mailCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.residentJurisdictionName
      : applicant.mailAddress?.mailState,
    fieldName: "State",
  }),
  (applicant) => ({ 
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip, 
    fieldName: "Zip Code", 
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone",
  }),
  (applicant) => ({
    text: applicant.birthName.first
      ? applicant.birthName.first
      : applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle
      ? applicant.birthName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
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
    fieldName: "City of Birth if known",
  }),
  (applicant) => ({
    text: applicant.birthCounty,
    fieldName: "County of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Full Name of First Parent",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Full Name of Second Parent if applicable",
  }),
  (applicant) => ({
    text: applicant.chosenName.first,
    fieldName: "First Name_2",
  }),
  (applicant) => ({
    text: applicant.chosenName.middle,
    fieldName: "Middle Name_2",
  }),
  (applicant) => ({
    text: `${applicant.chosenName.last} ${applicant.chosenName.suffix ?? ""}`,
    fieldName: "Last Name_2",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Printed Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Address Street and Number City State and Zip",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Printed Name",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Registrant Name of person whose certificate you are requestingRow1",
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
    fieldName: "Applicants Relationship to Registrant Must be an authorized personRow1",
  }),
];

/*!
 * Application to Amend a Birth Record (California form VS 24B.)
 * Updated 12/2025.
 * @type {Formfill[]}
 */
export const nameGenderBirthCertMap: Formfill[] = [
  (applicant) => ({
    text: isMinor(applicant) ? 
      fullName(applicant.representativeName) : fullName(applicant.chosenName),
    fieldName: "Name",
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
    fieldName: "Street",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.homeAddress?.city 
      : applicant.mailAddress?.mailCity,
    fieldName: "City",
  }),
  (applicant) => ({
    text: applicant.streetEqualsMail 
      ? applicant.residentJurisdictionName
      : applicant.mailAddress?.mailState,
    fieldName: "State",
  }),
  (applicant) => ({ 
    text: applicant.streetEqualsMail
      ? applicant.homeAddress?.zip
      : applicant.mailAddress?.mailZip, 
    fieldName: "Zip Code", 
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone",
  }),
  (applicant) => ({
    text: applicant.birthName.first
      ? applicant.birthName.first
      : applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.birthName.middle
      ? applicant.birthName.middle
      : applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: applicant.birthName.last
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}`
      : `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
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
    fieldName: "City of Birth if known",
  }),
  (applicant) => ({
    text: applicant.birthCounty,
    fieldName: "County of Birth",
  }),
  (applicant) => ({
    text: fullName(applicant.mothersBirthName),
    fieldName: "Full Name of First Parent",
  }),
  (applicant) => ({
    text: fullName(applicant.fathersBirthName),
    fieldName: "Full Name of Second Parent if applicable",
  }),
  (applicant) => ({
    check: (() => {
      switch (!applicant.birthName.first) {
        case true:
          return applicant.legalName.first !== applicant.chosenName.first 
            ? true : undefined;
        case false:
          return applicant.birthName.first !== applicant.chosenName.first 
            ? true : undefined;
        default:
          return undefined;
      }
    })(),
    fieldName: "Child's First Name",
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.birthName.first) {
        case true:
          return applicant.legalName.first !== applicant.chosenName.first 
            ? applicant.chosenName.first : "";
        case false:
          return applicant.birthName.first !== applicant.chosenName.first 
            ? applicant.chosenName.first : "";
        default:
          return "";
      }
    })(),
    fieldName: "Enter the New Corrected Name or ValueChild  s First Name",
  }),
  (applicant) => ({
    check: (() => {
      switch (!applicant.birthName.middle) {
        case true:
          return applicant.legalName.middle !== applicant.chosenName.middle 
            ? true : undefined;
        case false:
          return applicant.birthName.middle !== applicant.chosenName.middle 
            ? true : undefined;
        default:
          return undefined;
      }
    })(),
    fieldName: "Child's Middle Name",
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.birthName.middle) {
        case true:
          return applicant.legalName.middle !== applicant.chosenName.middle 
            ? applicant.chosenName.middle : "";
        case false:
          return applicant.birthName.middle !== applicant.chosenName.middle 
            ? applicant.chosenName.middle : "";
        default:
          return "";
      }
    })(),
    fieldName: "Enter the New Corrected Name or ValueChild  s Middle Name",
  }),
  (applicant) => ({
    check: (() => {
      switch (!applicant.birthName.last) {
        case true:
          return applicant.legalName.last !== applicant.chosenName.last 
            ? true : undefined;
        case false:
          return applicant.birthName.last !== applicant.chosenName.last
            ? true : undefined;
        default:
          return undefined;
      }
    })(),
    fieldName: "Child's last name",
  }),
  (applicant) => ({
    text: (() => {
      switch (!applicant.birthName.last) {
        case true:
          return applicant.legalName.last !== applicant.chosenName.last
            ? applicant.chosenName.last : "";
        case false:
          return applicant.birthName.last !== applicant.chosenName.last
            ? applicant.chosenName.last : "";
        default:
          return "";
      }
    })(),
    fieldName: "Enter the New Corrected Name or ValueChilds Last Name",
  }),
  (applicant) => ({
    check: applicant.isChangingLegalSex,
    fieldName: "Sex",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.gender) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "Nonbinary (X)";
      }
    })(),
    fieldName: "Enter the New Corrected Name or ValueSex",
  }),
  (applicant) => ({
    text: applicant.reasonForNameChange,
    fieldName: "Enter the Reason for the Correction",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Printed Name",
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
    fieldName: "Relationship",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Address Street and Number City State and Zip",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Applicants Printed Name",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Registrant Name of person whose certificate you are requestingRow1",
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
    fieldName: "Applicants Relationship to Registrant Must be an authorized personRow1",
  }),
];

/*!
 * Alameda County Civil Case Cover Sheet Addendum (202-19, All)
 * @type {Formfill[]}
 */
export const alamedaCoverMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 113, y: 66 },
  }),
  () => ({
    text: "X",
    loc: { x: 385, y: 1023 },
  }),
];

/*!
 * Amador County Superior Court Case Intake Sheet (MISC-049, All)
 * @type {Formfill[]}
 */
export const amadorIntakeMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    loc: { x: 45, y: 418 },
  }),
  () => ({
    text: "X",
    loc: { x: 193, y: 434 },
  }),
  (applicant) => ({
    text: 
      !isMinor(applicant) && fullName(applicant.birthName) 
      ? fullName(applicant.birthName) : "",
    loc: { x: 45, y: 471 },
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
          return "";
        default:
          return "";
        }
    })(),
    loc: { x: 45, y: 507 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.MailCityAndStateAndZip),
    loc: { x: 45, y: 543 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 45, y: 578 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ?
      formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }) : "",
    loc: { x: 45, y: 648 },
  }),
  (applicant) => ({
    text: applicant.email,
    loc: { x: 45, y: 683 },
  }),
];

/*!
 * Amador County CLETS Background Information Form Name Change (CIV-136, Any)
 * @type {Formfill[]}
 */
export const amadorBackgroundCheckMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "LAST NAME FIRST NAME MIDDLE NAME.0.0",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "LAST NAME FIRST NAME MIDDLE NAME.0.1",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Text1",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName),
    fieldName: "LAST NAME FIRST NAME MIDDLE NAME.1",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "RESIDENCE STREET ADDRESS CITYSTATE ZIP",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "PHONE NUMBER",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? formatContactInfo(applicant, cf.MailFullAddress) : "",
    fieldName: "MAILING ADDRESS IF DIFFERENT FROM RESIDENCE",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "AGE",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "PLACE OF BIRTH STATE OR COUNTRY",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "SEX",
  }),
  (applicant) => ({
    fieldName: "I AM UNDER THE JURISDICTION OF THE DEPARTMENT OF",
    choice: !applicant.hasCriminalRecord ? "NO_2" : undefined,
  }),
  (applicant) => ({
    fieldName: "PURSUANT TO PENAL CODE 290",
    choice: !applicant.hasCriminalRecord ? "NO_3" : undefined,
  }),
];

/*!
 * El Dorado County Confidential Information RE: Petition for Name Change (West Slope) (C-2, Adult)
 * @type {Formfill[]}
 */
export const elDoradoWestSlopeMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "2927 Meder Road, Cameron Park, CA 95682",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text Field0",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name of Applicant",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "AKA' S",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date & Place of Birth",
  }),
];

/*!
 * El Dorado County Confidential Information RE: Petition for Name Change (SLT) (C-2S, Adult)
 * @type {Formfill[]}
 */
export const elDoradoSLTMap: Formfill[] = [
  () => ({
    check: true,
    fieldName: "1354 Johnson Blvd, South Lake Tahoe, CA 96150",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Text Field0",
  }),
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Name of Applicant",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "AKA' S",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Address",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Phone Number",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date & Place of Birth",
  }),
];

/*!
 * Kern County Party Identification and Notice of Related Case(s) (KRN SUP CRT FL-0122, Minor)
 * @type {Formfill[]}
 */
export const kernCaseNoticeMap: Formfill[] = [
  (applicant) => ({
    text: 
    `${fullName(representativeName(applicant))}, 
    ${formatContactInfo(applicant, cf.ResidentFullAddress) ?? ""}`,
    fieldName: "Attorney or Party",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone No",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email Address",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "CASE NAME",
  }),
  () => ({
    check: true,
    fieldName: "PETITIONERPLAINTIFF",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TYPE OR PRINT NAME OF PARTY OR ATTORNEY",
  }),
];

/*!
 * Lassen County Name Change Criminal History Assessment (LSC-CIV-050, All)
 * @type {Formfill[]}
 */
export const lassenCriminalHistoryMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Name",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Address 1",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone No",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Petitioner / Plaintiff",
  }),
  (applicant) => ({
    fieldName: "Sex",
    value: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        default:
          return "";
      }
    })(),
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "Age",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "Place of Birth",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Current Address",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "Other name(s) used",
  }),
];

/*!
 * Los Angeles County Civil Case Cover Sheet Addendum and Statement of Location (LASC CIV 109, All)
 * @type {Formfill[]}
 */
export const losAngelesCaseTypeMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "SHORT TITLE",
  }),
  () => ({
    check: true,
    fieldName: "undefined_50",
  }),
  () => ({
    check: true,
    fieldName: "undefined_59",
  }),
  () => ({
    check: true,
    fieldName: "undefined_64",
  }),
  (applicant) => ({
    text: !applicant.homeAddress?.apt
      ? applicant.homeAddress?.street 
      : `${applicant.homeAddress.street}, ${applicant.homeAddress.apt ?? ""}`,
    fieldName: "ADDRESSZIP CODE",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.city,
    fieldName: "CITY",
  }),
  (applicant) => ({
    text: getJurisdiction(applicant.residentJurisdictionName)?.abbreviation,
    fieldName: "STATE",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "ZIP",
  }),
];

/*!
 * Los Angeles County Name Change Criminal History Assessment (LASC CIV 226, All)
 * @type {Formfill[]}
 */
export const losAngelesCriminalHistoryMap: Formfill[] = [
  (applicant) => ({
    text: 
    `${formatContactInfo(applicant, cf.ResidentFullContactInfo) ?? ""}
    ${applicant.email ?? ""}`,
    fieldName: "ADDRESS01",
  }),
  (applicant) => ({
    text: 
      isMinor(applicant) ? 
        `${fullName(representativeName(applicant))} (${fullName(applicant.legalName)})` 
        : fullName(representativeName(applicant)),
    fieldName: "NAME OF PETITIONER Person having the name change",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return isMinor(applicant) ? "" : "Female";
        case GenderMarker.M:
          return isMinor(applicant) ? "" : "Male";
        case GenderMarker.X:
          return isMinor(applicant) ? "" : "X";
      }
    })(),
    fieldName: "Sex",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : String(applicant.age),
    fieldName: "Age",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : 
      formatContactInfo(applicant, cf.BirthCityAndState),
    fieldName: "Place of Birth",
  }),
  (applicant) => ({
    text: isMinor(applicant) ? "" : 
      formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Current Address",
  }),
  (applicant) => ({
    text: (() => {
      switch (isMinor(applicant)) {
        case true:
          return "";
        case false:
          return fullName(applicant.birthName) ? fullName(applicant.birthName) : "";
      }
    })(),
    fieldName: "Other names used",
  }),
];

/*!
 * Mendocino County Declaration re: Change of Name (MNC-110, All)
 * @type {Formfill[]}
 */
export const mendocinoCriminalHistoryMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 65, y: 309 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 270, y: 309 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 470, y: 309 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 670, y: 309 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    loc: { x: 65, y: 393 },
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
    loc: { x: 65, y: 461 },
  }),
];

/*!
 * Monterey County Criminal History Assessment (form unnumbered, All)
 * @type {Formfill[]}
 */
export const montereyCriminalHistoryMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    fieldName: "Applicants Current Name",
  }),
  (applicant) => ({
    text: fullName(applicant.chosenName),
    fieldName: "Applicants Proposed New Name",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Applicants Date of Birth",
  }),
  (applicant) => ({
    fieldName: "Group1",
    choice: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.M:
          return "Choice1";
        case GenderMarker.F:
          return "Choice2";
        default:
          return "";
      }
    })(),
  }),
];

/*!
 * Orange County Name Change Notice of Related Cases (L-3008, Minor)
 * @type {Formfill[]}
 */
export const orangeCaseNoticeMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text1.0.0",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Text1.0.1",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Telephone Number",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Email",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "CASE TITLE",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "TYPE OR PRINT NAME OF PETITIONEROR ATTORNEY",
  }),
];

/*!
 * Placer County Clets Background Information Supplement (PL-CV003, All)
 * @type {Formfill[]}
 */
export const placerCriminalHistoryMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Full Name",
  }),
  (applicant) => ({
    text: 
      !isMinor(applicant) && fullName(applicant.birthName) 
      ? fullName(applicant.birthName) : "",
    fieldName: "Also Known As",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Date of Birth",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.M,
    fieldName: "Male or",
  }),
  (applicant) => ({
    check: applicant.assignedSex === GenderMarker.F,
    fieldName: "Female",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddressAndCountry),
    fieldName: "Current Residence Address Street City Country and Zip Code",
  }),
];

/*!
 * Riverside County Cover Sheet (RI-MC010, All)
 * @type {Formfill[]}
 */
export const riversideCoverSheetMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text9.0",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Text9.1",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Text9.4",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Text9.6",
  }),
  () => ({
    fieldName: "Party1",
    value: "Petitioner:",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Plaintiff or Petitioner Name",
  }),
  () => ({
    fieldName: "Party2",
    value: "In the Matter Of:",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Case Name, Defendant, or Respondent",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Name",
  }),
];

/*!
 * Riverside County Notice of Related Cases (RI-CI040, Minor)
 * @type {Formfill[]}
 */
export const riversideCaseNoticeMap: Formfill[] = [
  //Add zip code checks for courts when system is working
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text5.0",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Text5.1",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Text5.4",
  }),
  (applicant) => ({
    text: applicant.email,
    fieldName: "Text5.6",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text5.8",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "Text7.3",
  }),
];

/*!
 * San Benito County Name Change Background Information Form (SB-CV-2, All)
 * @type {Formfill[]}
 */
export const sanBenitoBackgroundCheckMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Last Name",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "First Name",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Middle Name",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "AKA 1",
  }),
  (applicant) => ({
    text: !applicant.homeAddress?.apt
      ? applicant.homeAddress?.street 
      : `${applicant.homeAddress.street}, ${applicant.homeAddress.apt ?? ""}`,
    fieldName: "Address",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndState),
    fieldName: "City/State",
  }),
  (applicant) => ({
    text: applicant.homeAddress?.zip,
    fieldName: "Zip",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "PHONE NUMBER",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? formatContactInfo(applicant, cf.MailFullAddress) : "",
    fieldName: "MAILING ADDRESS IF DIFFERENT FROM RESIDENCE",
  }),
  (applicant) => ({
    text: !isMinor(applicant) ?
      formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }) : "",
    fieldName: "DATE OF BIRTH",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "AGE",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "PLACE OF BIRTH STATE OR COUNTRY",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "SEX",
  }),
];

/*!
 * Santa Barbara County Civil Case Cover Sheet Addendum (SC-2069, All)
 * @type {Formfill[]}
 */
export const santaBarbaraCoverSheetMap: Formfill[] = [
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullContactInfo),
    fieldName: "ATTORNEY",
  }),
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "PLAINTIFF",
  }),
  () => ({
    check: true,
    fieldName: "A defendant resides or has its principal place of business in this region at",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "BUSINESS2",
  }),
];

/*!
 * Santa Clara County CLETS Background Information Form (PB-4010, All)
 * @type {Formfill[]}
 */
export const santaClaraBackgroundCheckMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    fieldName: "Text1",
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    fieldName: "Text2",
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    fieldName: "Text3",
  }),
  (applicant) => ({
    text: fullName(applicant.birthName) ? fullName(applicant.birthName) : "",
    fieldName: "Text4",
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    fieldName: "Text7",
  }),
  (applicant) => ({
    text: applicant.phone,
    fieldName: "Text8",
  }),
  (applicant) => ({
    text: !applicant.streetEqualsMail ? formatContactInfo(applicant, cf.MailFullAddress) : "",
    fieldName: "Text9",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "Text11",
  }),
  (applicant) => ({
    text: String(applicant.age),
    fieldName: "Text12",
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    fieldName: "Text13",
  }),
  (applicant) => ({
    text: (() => {
      switch (applicant.assignedSex) {
        case GenderMarker.F:
          return "Female";
        case GenderMarker.M:
          return "Male";
        case GenderMarker.X:
          return "X";
      }
    })(),
    fieldName: "Text14",
  }),
];

/*!
 * Siskiyou County Information Sheet (unnumbered, All)
 * @type {Formfill[]}
 */
export const siskiyouInfoMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 175, y: 218 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 380, y: 218 },
  }),
  (applicant) => ({
    text: nameInitials(applicant.legalName, {
      format: [FML.MIDDLE]}),
    loc: { x: 575, y: 218 },
  }),
  (applicant) => ({
    text: applicant.birthName.last 
      ? `${applicant.birthName.last} ${applicant.birthName.suffix ?? ""}` : "",
    loc: { x: 175, y: 264 },
  }),
  (applicant) => ({
    text: applicant.birthName.first,
    loc: { x: 380, y: 264 },
  }),
  (applicant) => ({
    text: 
      applicant.birthName.middle 
      ? nameInitials(applicant.birthName, {
      format: [FML.MIDDLE]}) : "",
    loc: { x: 575, y: 264 },
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
          return "";
        default:
          return "";
        }
    })(),
    loc: { x: 210, y: 315 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.MailCityAndStateAndZip),
    loc: { x: 210, y: 335 },
  }),
  (applicant) => ({
    text: !applicant.homeAddress?.apt
      ? applicant.homeAddress?.street 
      : `${applicant.homeAddress.street}, ${applicant.homeAddress.apt ?? ""}`,
    loc: { x: 577, y: 315 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentCityAndStateAndZip),
    loc: { x: 575, y: 335 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ?
      formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }) : "",
    loc: { x: 210, y: 391 },
  }),
];

/*!
 * Siskiyou County CLETS Background Information Form (CCP 1279.5, All)
 * @type {Formfill[]}
 */
export const siskiyouBackgroundCheckMap: Formfill[] = [
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 80, y: 281 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 330, y: 281 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 535, y: 281 },
  }),
  (applicant) => ({
    text: fullName(applicant.birthName),
    loc: { x: 95, y: 320 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 80, y: 428 },
  }),
  (applicant) => ({
    text: applicant.phone,
    loc: { x: 625, y: 428 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.MailFullAddress),
    loc: { x: 80, y: 464 },
  }),
  (applicant) => ({
    text: !isMinor(applicant) ?
      formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }) : "",
    loc: { x: 80, y: 506 },
  }),
  (applicant) => ({
    text: String(applicant.age),
    loc: { x: 225, y: 506 },
  }),
  (applicant) => ({
    text: applicant.birthJurisdictionName,
    loc: { x: 277, y: 506 },
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
    loc: { x: 406, y: 506 },
  }),
];

/*!
 * Solano County Application for Change of Name (3009, Age 14 and above)
 * @type {Formfill[]}
 */
export const solanoCoverSheetMap: Formfill[] = [
  (applicant) => ({
    text: fullName(representativeName(applicant)),
    fieldName: "FULL NAME OF APPLICANT",
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    fieldName: "DATE OF BIRTH",
  }),
];

/*!
 * Yuba County CLETS/CJIS Information Sheet (G04050B, Adult)
 * @type {Formfill[]}
 */
export const yubaBackgroundCheckMap: Formfill[] = [
  (applicant) => ({
    text: fullName(applicant.legalName),
    loc: { x: 65, y: 323 },
  }),
  (applicant) => ({
    text: `${applicant.legalName.last} ${applicant.legalName.suffix ?? ""}`,
    loc: { x: 110, y: 545 },
  }),
  (applicant) => ({
    text: applicant.legalName.first,
    loc: { x: 355, y: 545 },
  }),
  (applicant) => ({
    text: applicant.legalName.middle,
    loc: { x: 605, y: 545 },
  }),
  (applicant) => ({
    text: formatContactInfo(applicant, cf.ResidentFullAddress),
    loc: { x: 125, y: 584 },
  }),
  (applicant) => ({
    text: formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: "/",
    }),
    loc: { x: 155, y: 642 },
  }),
];
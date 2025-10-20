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

import { isMinor, numericalAge } from "../../lib/util";

import {
  nameChangeAdultMap,
  nameChangeOrderAdultMap,
  genderChangeAdultMap,
  nameChangeMinorBothParentsMap,
  nameChangeMinorBothParentsOrderMap,
  nameChangeMinorSingleParentMap,
  nameChangeMinorSingleParentOrderMap,
  nameChangeMinorGuardianMap,
  nameChangeMinorGuardianOrderMap,
  nameChangeMinorsConsentMap,
  genderChangeMinorMap,
  genderMinorConsentMap,
  genderServiceWaiverMap,
  feeWaiverMap,
  caseInformationMap,
  nameChangeMinorFamilyInfoMap,
  primaryIDTexasMap,
  birthCertNameCorrectionMap,
  birthCertGenderCorrectionMap,
  birthCertNameAndGenderCorrectionMap,
  andersonCountyMap,
  fanninCountyMap,
} from "./maps";

import TexasAdultGenderChangeGuide from "../../components/guides/Texas/AdultGenderChange";
import TexasAdultNameOrderGuide from "../../components/guides/Texas/AdultNameOrder";
import TexasAdultNamePetitionGuide from "../../components/guides/Texas/AdultNamePetition";
import TexasAndersonNameGuide from "../../components/guides/Texas/AndersonName";
import TexasCourtHearingGuide from "../../components/guides/Texas/CourtHearing";
import TexasDMVGuide from "../../components/guides/Texas/DMV";
import TexasEverythingElseGuide from "../../components/guides/Texas/EverythingElse";
import TexasFanninNameGuide from "../../components/guides/Texas/FanninName";
import TexasFeeWaiverGuide from "../../components/guides/Texas/FeeWaiver";
import TexasFilingInitialFormsGuide from "../../components/guides/Texas/FilingInitialForms";
import TexasFingerprintingGuide from "../../components/guides/Texas/Fingerprinting";
import TexasGenderChangeAllGuide from "../../components/guides/Texas/GenderChangeAll";
import TexasGenderChangeLetterGuide from "../../components/guides/Texas/GenderChangeLetter";
import TexasGetBirthCertGuide from "../../components/guides/Texas/GetBirthCert";
import TexasMinorGenderChangeGuide from "../../components/guides/Texas/MinorGenderChange";
import TexasMinorGenderConsentGuide from "../../components/guides/Texas/MinorGenderConsent";
import TexasMinorGenderWaiverGuide from "../../components/guides/Texas/MinorGenderWaiver";
import TexasMinorNameConsentGuide from "../../components/guides/Texas/MinorNameConsent";
import TexasMinorNameOtherCustodyGuide from "../../components/guides/Texas/MinorNameOtherCustody";
import TexasMinorNameParentsOrderGuide from "../../components/guides/Texas/MinorNameParentsOrder";
import TexasMinorNameParentsPetitionGuide from "../../components/guides/Texas/MinorNameParentsPetition";
import TexasResourcesGuide from "../../components/guides/Texas/Resources";
import TexasUpdateBirthCertGuide from "../../components/guides/Texas/UpdateBithCert";

import { type Process, Target } from "../../types/process";
import { TexasCounty } from "../../types/locality";

export const texasNameChange: Process<TexasCounty> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Petition to Change the Name of an Adult",
      id: "FM-NCA-100",
      filename: "Texas/Adult Name Change Petition.pdf",
      guide: TexasAdultNamePetitionGuide,
      map: nameChangeAdultMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Order Changing Name of an Adult",
      id: "FM-NCA-200",
      filename: "Texas/Adult Name Change Order.pdf",
      guide: TexasAdultNameOrderGuide,
      map: nameChangeOrderAdultMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Petition to Change the Name of a Child or Children",
      id: "FM-NCC1-100",
      filename: "Texas/Minor Name Change Parents Petition.pdf",
      guide: TexasMinorNameParentsPetitionGuide,
      map: nameChangeMinorBothParentsMap,
      include: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    },
    {
      name: "Order Changing the Name of a Child [Set A]",
      id: "FM-NCC1-200",
      filename: "Texas/Minor Name Change Parents Order.pdf",
      guide: TexasMinorNameParentsOrderGuide,
      map: nameChangeMinorBothParentsOrderMap,
      include: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    },
    {
      name: "Petition to Change the Name of a Child or Children",
      id: "FM-NCC1-100",
      filename: "Texas/Minor Name Change Parents Petition.pdf",
      map: nameChangeMinorBothParentsMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Order Changing the Name of a Child [Set A]",
      id: "FM-NCC1-200",
      filename: "Texas/Minor Name Change Parents Order.pdf",
      map: nameChangeMinorBothParentsOrderMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Petition to Change the Name of a Child [Set C]",
      id: "FM-NCC3-100",
      filename: "Texas/Minor Name Change Single Petition.pdf",
      map: nameChangeMinorSingleParentMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Order Changing the Name of a Child [Set C]",
      id: "FM-NCC3-200",
      filename: "Texas/Minor Name Change Single Order.pdf",
      map: nameChangeMinorSingleParentOrderMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Petition to Change the Name of a Child [Set E]",
      id: "FM-NCC5-100",
      filename: "Texas/Minor Name Change Guardian Petition.pdf",
      map: nameChangeMinorGuardianMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Order Changing the Name of a Child [Set E]",
      id: "FM-NCC5-200",
      filename: "Texas/Minor Name Change Guardian Order.pdf",
      map: nameChangeMinorGuardianOrderMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Minor Name Change Other Custody",
      guide: TexasMinorNameOtherCustodyGuide,
    },
    {
      name: "Child's Consent to Name Change",
      id: "FM-NCC1-113",
      filename: "Texas/Minor Name Change Consent.pdf",
      guide: TexasMinorNameConsentGuide,
      map: nameChangeMinorsConsentMap,
      include: (applicant) =>
        isMinor(applicant) && numericalAge(applicant.birthdate ?? "") > 9,
    },
    {
      name: "Anderson Public Filing Pro Se Information Sheet",
      filename: "Texas/Anderson County All.pdf",
      guide: TexasAndersonNameGuide,
      map: andersonCountyMap,
      include: (applicant) => applicant.residentLocalityName === "Anderson",
    },
    {
      name: "Fannin Public Filing Pro Se Information Sheet",
      filename: "Texas/Fannin County All.pdf",
      guide: TexasFanninNameGuide,
      map: fanninCountyMap,
      include: (applicant) => applicant.residentLocalityName === "Fannin",
    },
    {
      name: "Statement of Inability to Afford Payment of Court Costs or an Appeal Bond",
      id: "CB-CFFW-100",
      filename: "Texas/Fee Waiver.pdf",
      guide: TexasFeeWaiverGuide,
      map: feeWaiverMap,
    },
    {
      name: "Fingerprinting",
      guide: TexasFingerprintingGuide,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Get Birth Certificate",
      guide: TexasGetBirthCertGuide,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Filing Initial Documents",
      guide: TexasFilingInitialFormsGuide,
    },
    {
      name: "Civil Case Information Sheet",
      filename: "Texas/Case Information.pdf",
      map: caseInformationMap,
    },
    {
      name: "Information on Suit Affecting the Family Relationship (Excluding Adoptions)",
      id: "VS-165",
      filename: "Texas/Minor Name Change Family Info.pdf",
      map: nameChangeMinorFamilyInfoMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Court Hearing",
      guide: TexasCourtHearingGuide,
    },
  ],
};

export const texasGenderMarker: Process<TexasCounty> = {
  target: Target.GenderMarker,
  documents: [
    {
      name: "Gender Change Warning",
      guide: TexasGenderChangeAllGuide,
    },
    {
      name: "Petition to Change the Sex/Gender Identifier of an Adult",
      id: "TC-FM-GI1-100",
      filename: "Texas/Adult Gender Change.pdf",
      guide: TexasAdultGenderChangeGuide,
      map: genderChangeAdultMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Agreed Petition to Change the Sex/Gender Identifier of a Minor",
      id: "TC-FM-GI3-100",
      filename: "Texas/Minor Gender Change.pdf",
      guide: TexasMinorGenderChangeGuide,
      map: genderChangeMinorMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Statement of Consent of Minor For Change of Sex/Gender Identifier",
      id: "TC-FM-GI3-113",
      filename: "Texas/Minor Gender Change Consent.pdf",
      guide: TexasMinorGenderConsentGuide,
      map: genderMinorConsentMap,
      include: (applicant) =>
        isMinor(applicant) && numericalAge(applicant.birthdate ?? "") > 9,
    },
    {
      name: "Respondent's Waiver of Service Only (Specific Waiver)",
      id: "FM-Mod1-103",
      filename: "Texas/Minor Gender Change Waiver Of Service.pdf",
      guide: TexasMinorGenderWaiverGuide,
      map: genderServiceWaiverMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Gender Change Template Letter",
      filename: "Texas/Gender Change Template Letter.pdf",
      guide: TexasGenderChangeLetterGuide,
    },
  ],
};

export const texasPrimaryIdentification: Process<TexasCounty> = {
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "DMV",
      guide: TexasDMVGuide,
    },
    {
      name: "Texas Driver License or Identification Card Application",
      id: "DL-14A",
      filename: "Texas/DPS DL14A.pdf",
      map: primaryIDTexasMap,
    },
  ],
};

export const texasBirthRecord: Process<TexasCounty> = {
  target: Target.BirthRecord,
  depends: [Target.NameChange],
  documents: [
    {
      name: "Update Birth Certificate",
      guide: TexasUpdateBirthCertGuide,
    },
    {
      name: "Correcting a Birth Certificate (Name)",
      id: "VS-170a",
      filename: "Michigan/birth-cert.pdf",
      map: birthCertNameCorrectionMap,
      include: (applicant) => !applicant.isChangingLegalSex,
    },
    {
      name: "Correcting a Birth Certificate (Gender)",
      id: "VS-170b",
      filename: "Michigan/birth-cert.pdf",
      map: birthCertGenderCorrectionMap,
      include: (applicant) => !applicant.isChangingLegalName,
    },
    {
      name: "Correcting a Birth Certificate (Name and Gender)",
      id: "VS-170c",
      filename: "Michigan/birth-cert.pdf",
      map: birthCertNameAndGenderCorrectionMap,
      include: (applicant) => !applicant.isChangingLegalSex,
    },
  ],
  isBirth: true,
};

export const texasPostamble: Process<TexasCounty> = {
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: TexasEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: TexasResourcesGuide,
    },
  ],
  isJustGuide: true,
};

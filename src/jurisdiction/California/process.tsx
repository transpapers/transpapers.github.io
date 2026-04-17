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

import { isMinor } from "../../lib/util";

import {
  civilCaseCoverMap,
  nameChangeOnlyPetitionMap,
  //adultNameGenderPetitionMap,
  //minorNameGenderPetitionMap,
  nameChangeOnlyInfoMap,
  minorGuardianDeclarationMap,
  nameChangeOnlyNoticeMap,
  //nameChangeOnlyConformMap,
  //minorNameGenderConformMap,
  nameChangeOnlyOrderMap,
  nameChangeOnlyOrderGuardianMap,
  //adultNameGenderOrderMap,
  //minorNameGenderOrderMap,
  feeWaiverMap,
  feeWaiverOrderMap,
  DMVTitleMap,
  nameOnlyBirthCertMap,
  nameGenderBirthCertMap,
  alamedaCoverMap,
  amadorIntakeMap,
  amadorBackgroundCheckMap,
  elDoradoWestSlopeMap,
  elDoradoSLTMap,
  kernCaseNoticeMap,
  lassenCriminalHistoryMap,
  losAngelesCaseTypeMap,
  losAngelesCriminalHistoryMap,
  mendocinoCriminalHistoryMap,
  montereyCriminalHistoryMap,
  orangeCaseNoticeMap,
  placerCriminalHistoryMap,
  riversideCoverSheetMap,
  riversideCaseNoticeMap,
  sanBenitoBackgroundCheckMap,
  santaBarbaraCoverSheetMap,
  santaClaraBackgroundCheckMap,
  siskiyouInfoMap,
  siskiyouBackgroundCheckMap,
  solanoCoverSheetMap,
  yubaBackgroundCheckMap,
} from "./maps";

import AlamedaCoverSheetGuide from "../../components/guides/California/AlamedaCoverSheet";
import AmadorBackgroundCheckGuide from "../../components/guides/California/AmadorBCSheet";
import AmadorIntakeSheetGuide from "../../components/guides/California/AmadorIntakeSheet";
import CaliforniaBirthCertNameGender from "../../components/guides/California/BirthCertNameGender";
import CaliforniaBirthCertNameOnly from "../../components/guides/California/BirthCertNameOnly";
import CaliforniaCoverSheetGuide from "../../components/guides/California/CivilCoverSheet";
import CaliforniaCourtHearingGuide from "../../components/guides/California/CourtHearing";
import CaliforniaDMVGuide from "../../components/guides/California/DMV";
import ElDoradoBackgroundCheckGuide from "../../components/guides/California/ElDoradoBCSheets";
import CaliforniaEverythingElseGuide from "../../components/guides/California/EverythingElse";
import CaliforniaFeeWaiverGuide from "../../components/guides/California/FeeWaiver";
import CaliforniaFeeWaiverOrderGuide from "../../components/guides/California/FeeWaiverOrder";
import CaliforniaFilingGuide from "../../components/guides/California/FilingInitialForms";
import CaliforniaNC110GGuide from "../../components/guides/California/GuardianDeclaration";
import KernRelatedCasesGuide from "../../components/guides/California/KernRelatedCases";
import LassenBCGuide from "../../components/guides/California/LassenBCSheet";
import LosAngelesBCGuide from "../../components/guides/California/LosAngelesBCSheet";
import LosAngelesCoverSheetGuide from "../../components/guides/California/LosAngelesCivilSheet";
import MendocinoBCGuide from "../../components/guides/California/MendocinoBCSheet";
import MontereyBCGuide from "../../components/guides/California/MontereyBCSheet";
import CaliforniaNC100Guide from "../../components/guides/California/NC100NameOnlyAll";
import CaliforniaNC110Guide from "../../components/guides/California/NC110InfoAll";
import CaliforniaNC120Guide from "../../components/guides/California/NC120PublicationAll";
//import CaliforniaNC125Guide from "../../components/guides/California/NC125GenderNotice";
import CaliforniaNC130GGuide from "../../components/guides/California/NC130GuardianOrder";
import CaliforniaNC130Guide from "../../components/guides/California/NC130OrderAll";
//import CaliforniaNC300Guide from "../../components/guides/California/NC300Adult";
//import CaliforniaNC330Guide from "../../components/guides/California/NC330OrderAdult";
//import CaliforniaNC500Guide from "../../components/guides/California/NC500Minor";
//import CaliforniaNC520Guide from "../../components/guides/California/NC520GenderMinor";
//import CaliforniaNC530Guide from "../../components/guides/California/NC530OrderMinor";
import OrangeRelatedCasesGuide from "../../components/guides/California/OrangeRelatedCases";
import PlacerBCGuide from "../../components/guides/California/PlacerBCSheet";
import CaliforniaResourcesGuide from "../../components/guides/California/Resources";
import RiversideCoverSheetGuide from "../../components/guides/California/RiversideCoverSheet";
import RiversideRelatedCasesGuide from "../../components/guides/California/RiversideRelatedCases";
import SanBenitoBCGuide from "../../components/guides/California/SanBenitoBCSheet";
import SantaBarbaraCoverSheetGuide from "../../components/guides/California/SantaBarbaraCoverSheet";
import SantaClaraBCGuide from "../../components/guides/California/SantaClaraBCSheet";
import SiskiyouBCGuide from "../../components/guides/California/SiskiyouBCSheet";
import SiskiyouInfoGuide from "../../components/guides/California/SiskiyouInfoSheet";
import SolanoBCGuide from "../../components/guides/California/SolanoBCSheet";
import YubaBCGuide from "../../components/guides/California/YubaBCSheet";

import { type CaliforniaCounty } from "../../types/locality";

import { type Process, Target } from "../../types/process";

export const californiaNameChange: Process<CaliforniaCounty> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    //Cover sheet stuff here
    {
      name: "Civil Case Cover Sheet",
      id: "CM-010",
      filename: "California/Civil Cover Sheet.pdf",
      guide: CaliforniaCoverSheetGuide,
      map: civilCaseCoverMap,
    },
    {
      name: "Civil Case Cover Sheet Addendum",
      id: "202-19",
      filename: "California/Alameda Civil Addendum.pdf",
      guide: AlamedaCoverSheetGuide,
      map: alamedaCoverMap,
      include: (applicant) => applicant.residentLocalityName === "Alameda",
    },
    {
      name: "Amador Superior Court Case Intake Sheet",
      id: "MISC-049",
      filename: "California/Amador Intake Form.pdf",
      guide: AmadorIntakeSheetGuide,
      map: amadorIntakeMap,
      include: (applicant) => applicant.residentLocalityName === "Amador",
    },
    {
      name: "Civil Case Cover Sheet Addendum and Statement of Location",
      id: "LASC CIV 109",
      filename: "California/Los Angeles Civil Addendum.pdf",
      guide: LosAngelesCoverSheetGuide,
      map: losAngelesCaseTypeMap,
      include: (applicant) => applicant.residentLocalityName === "Los Angeles",
    },
    {
      name: "Riverside Cover Sheet",
      id: "RI-MC010",
      filename: "California/Riverside Cover Sheet.pdf",
      guide: RiversideCoverSheetGuide,
      map: riversideCoverSheetMap,
      include: (applicant) => applicant.residentLocalityName === "Riverside",
    },
    {
      name: "Civil Case Cover Sheet Addendum",
      id: "SC-2069",
      filename: "California/Santa Barbara Cover Addendum.pdf",
      guide: SantaBarbaraCoverSheetGuide,
      map: santaBarbaraCoverSheetMap,
      include: (applicant) => applicant.residentLocalityName === "Santa Barbara",
    },
    {
      name: "Siskiyou Information Sheet",
      filename: "California/Siskiyou Information Sheet.pdf",
      guide: SiskiyouInfoGuide,
      map: siskiyouInfoMap,
      include: (applicant) => applicant.residentLocalityName === "Siskiyou",
    },

    //Name Only (all) stuff here
    {
      name: "Petition for Change of Name",
      id: "NC-100",
      filename: "California/NC-100 Name Petition All.pdf",
      guide: CaliforniaNC100Guide,
      map: nameChangeOnlyPetitionMap,
      include: (applicant) => !applicant.isChangingLegalSex,
    },
    {
      name: "Order to show cause - Change of Name",
      id: "NC-120",
      filename: "California/NC-120 Hearing Notice.pdf",
      guide: CaliforniaNC120Guide,
      map: nameChangeOnlyNoticeMap,
      include: (applicant) => !applicant.isChangingLegalSex,
    },
    {
      name: "Declaration of Guardian",
      id: "NC-110G",
      filename: "California/NC-110G Guardian Declaration.pdf",
      guide: CaliforniaNC110GGuide,
      map: minorGuardianDeclarationMap,
      include: (applicant) => isMinor(applicant) 
        && !applicant.parentsAreOkay,
    },
    {
      name: "Decree Changing Name",
      id: "NC-130",
      filename: "California/NC-130 Court Order.pdf",
      guide: CaliforniaNC130Guide,
      map: nameChangeOnlyOrderMap,
      include: (applicant) => !applicant.isChangingLegalSex,
    },
    {
      name: "Decree Changing Name of Minor (By Guardian)",
      id: "NC-130G",
      filename: "California/NC-130G Court Order Guardian.pdf",
      guide: CaliforniaNC130GGuide,
      map: nameChangeOnlyOrderGuardianMap,
      include: (applicant) => isMinor(applicant)
        && !applicant.parentsAreOkay,
    },

   /*
    //Name and Gender stuff here
    {
      name: "Petition for Recognition of Change of Gender and Sex Identifier",
      id: "NC-300",
      filename: "California/NC-300 Adult Name Gender Petition.pdf",
      guide: CaliforniaNC300Guide,
      map: adultNameGenderPetitionMap,
      include: (applicant) => !isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    {
      name: "Order to Show Cause--Change of Name to Conform to Gender Identity",
      id: "NC-125",
      filename: "California/NC-125 Gender Hearing Notice.pdf",
      guide: CaliforniaNC125Guide,
      map: nameChangeOnlyConformMap,
      include: (applicant) => !isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    {
      name: "Order Recognizing Change of Gender and Sex Identifier",
      id: "NC-330",
      filename: "California/NC-330 Adult Name Gender Order.pdf",
      guide: CaliforniaNC330Guide,
      map: adultNameGenderOrderMap,
      include: (applicant) => !isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    {
      name: "Petition for Recognition of Minor's Change of Gender and Sex Identifier and for Issuance of New Birth Certificate",
      id: "NC-500",
      filename: "California/NC-500 Minor Name Gender Petition.pdf",
      guide: CaliforniaNC500Guide,
      map: minorNameGenderPetitionMap,
      include: (applicant) => isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    {
      name: "Order to Show Cause--Recognition of Minor's Change of Gender and Issuance of New Birth Certificate",
      id: "NC-520",
      filename: "California/NC-520 Minor Name Gender Hearing Notice.pdf",
      guide: CaliforniaNC520Guide,
      map: minorNameGenderConformMap,
      include: (applicant) => isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    {
      name: "Order Recognizing Minor's Change of Gender and Sex Identifier and for Issuance of New Birth Certificate",
      id: "NC-530",
      filename: "California/NC-530 Minor Name Gender Order.pdf",
      guide: CaliforniaNC530Guide,
      map: minorNameGenderOrderMap,
      include: (applicant) => isMinor(applicant)
        && applicant.isChangingLegalSex,
    },
    */

    //Background check or Criminal history stuff here
    {
      name: "Amador County CLETS Background Information Form Name Change",
      id: "CIV-136",
      filename: "California/Amador Name Background Check.pdf",
      guide: AmadorBackgroundCheckGuide,
      map: amadorBackgroundCheckMap,
      include: (applicant) => applicant.residentLocalityName === "Amador",
    },
    {
      name: "El Dorado County Confidential Information RE: Petition for Name Change (West Slope)",
      id: "C-2",
      filename: "California/El Dorado Background Check 1.pdf",
      map: elDoradoWestSlopeMap,
      include: (applicant) => !isMinor(applicant) 
        && applicant.residentLocalityName === "El Dorado",
    },
    {
      name: "El Dorado County Confidential Information RE: Petition for Name Change (SLT)",
      id: "C-2S",
      filename: "California/El Dorado Background Check 2.pdf",
      map: elDoradoSLTMap,
      include: (applicant) => !isMinor(applicant) 
        && applicant.residentLocalityName === "El Dorado",
    },
    {
      name: "El Dorado County Background Check Guide",
      guide: ElDoradoBackgroundCheckGuide,
      include: (applicant) => !isMinor(applicant) 
        && applicant.residentLocalityName === "El Dorado",
    },
    {
      name: "Lassen County Name Change Criminal History Assessment",
      id: "LSC-CIV-050",
      filename: "California/Lassen Name Criminal History.pdf",
      guide: LassenBCGuide,
      map: lassenCriminalHistoryMap,
      include: (applicant) => applicant.residentLocalityName === "Lassen",
    },
    {
      name: "Los Angeles County Name Change Criminal History Assessment",
      id: "LASC CIV 226",
      filename: "California/Los Angeles Name Criminal History.pdf",
      guide: LosAngelesBCGuide,
      map: losAngelesCriminalHistoryMap,
      include: (applicant) => applicant.residentLocalityName === "Los Angeles",
    },
    {
      name: "Declaration re: Change of Name",
      id: "MNC-110",
      filename: "California/Mendocino Name Criminal History.pdf",
      guide: MendocinoBCGuide,
      map: mendocinoCriminalHistoryMap,
      include: (applicant) => applicant.residentLocalityName === "Mendocino",
    },
    {
      name: "Criminal History Assessment",
      filename: "California/Monterey Name Criminal History.pdf",
      guide: MontereyBCGuide,
      map: montereyCriminalHistoryMap,
      include: (applicant) => applicant.residentLocalityName === "Monterey",
    },
    {
      name: "Clets Background Information Supplement",
      id: "PL-CV003",
      filename: "California/Placer Name Criminal History.pdf",
      guide: PlacerBCGuide,
      map: placerCriminalHistoryMap,
      include: (applicant) => applicant.residentLocalityName === "Placer",
    },
    {
      name: "Name Change Background Information Form",
      id: "SB-CV-2",
      filename: "California/San Benito Name Background Check.pdf",
      guide: SanBenitoBCGuide,
      map: sanBenitoBackgroundCheckMap,
      include: (applicant) => applicant.residentLocalityName === "San Benito",
    },
    {
      name: "CLETS Background Information Form",
      id: "PB-4010",
      filename: "California/Santa Clara Name Background Check.pdf",
      guide: SantaClaraBCGuide,
      map: santaClaraBackgroundCheckMap,
      include: (applicant) => applicant.residentLocalityName === "Santa Clara",
    },
    {
      name: "CLETS Background Information Form",
      id: "CCP 1279.5",
      filename: "California/Siskiyou Name Background Check.pdf",
      guide: SiskiyouBCGuide,
      map: siskiyouBackgroundCheckMap,
      include: (applicant) => applicant.residentLocalityName === "Siskiyou",
    },
    {
      name: "Application for Change of Name",
      id: "3009",
      filename: "California/Solano Name Background Check.pdf",
      guide: SolanoBCGuide,
      map: solanoCoverSheetMap,
      include: (applicant) => applicant.residentLocalityName === "Solano",
    },
    {
      name: "CLETS/CJIS Information Sheet",
      id: "G04050B",
      filename: "California/Yuba Name Background Check.pdf",
      guide: YubaBCGuide,
      map: yubaBackgroundCheckMap,
      include: (applicant) => applicant.residentLocalityName === "Yuba",
    },

    //Everything else here
    {
      name: "Name and Information About the Person Whose Name is to be Changed",
      id: "NC-110",
      filename: "California/NC-110 Info All.pdf",
      guide: CaliforniaNC110Guide,
      map: nameChangeOnlyInfoMap,
    },
    {
      name: "Request to Waive Court Fees",
      id: "FW-001",
      filename: "California/Fee Waiver.pdf",
      guide: CaliforniaFeeWaiverGuide,
      map: feeWaiverMap,
    },
    {
      name: "Order on Court Fee Waiver",
      id: "FW-003",
      filename: "California/Fee Waiver Order.pdf",
      guide: CaliforniaFeeWaiverOrderGuide,
      map: feeWaiverOrderMap,
    },
    {
      name: "Party Identification and Notice of Related Case(s)",
      id: "KRN SUP CRT FL-0122",
      filename: "California/Kern Minor Related Cases.pdf",
      guide: KernRelatedCasesGuide,
      map: kernCaseNoticeMap,
      include: (applicant) => applicant.residentLocalityName === "Kern",
    },
    {
      name: "Name Change Notice of Related Cases",
      id: "L-3008",
      filename: "California/Orange Minor Name Notice.pdf",
      guide: OrangeRelatedCasesGuide,
      map: orangeCaseNoticeMap,
      include: (applicant) => isMinor(applicant)
        && applicant.residentLocalityName === "Orange",
    },
    {
      name: "Notice of Related Cases",
      id: "RI-CI040",
      filename: "California/Riverside Related Cases.pdf",
      guide: RiversideRelatedCasesGuide,
      map: riversideCaseNoticeMap,
      include: (applicant) => isMinor(applicant)
        && applicant.residentLocalityName === "Riverside",
    },
    {
      name: "Filing Initial Documents",
      guide: CaliforniaFilingGuide,
    },
    {
      name: "Court Hearing",
      guide: CaliforniaCourtHearingGuide,
    },
  ],
};

/** This process is empty because California has no solo
 * Gender Marker forms or processes but without a
 * Gender Marker process the isChangingLegalSex variable
 * reads false.*/
export const californiaGenderMarker: Process<CaliforniaCounty> = {
  target: Target.GenderMarker,
  documents: [],
};

export const californiaPrimaryIdentification: Process<CaliforniaCounty> =
  {
    target: Target.PrimaryIdentification,
    depends: [Target.NameChange, Target.GenderMarker],
    documents: [
      {
        name: "DMV Guide",
        guide: CaliforniaDMVGuide,
      },
      {
        name: "DMV Statement of Facts",
        id: "REG 256",
        filename: "California/REG-256 DMV Title Form_unlocked.pdf",
        map: DMVTitleMap,
        include: (applicant) => applicant.isChangingLegalName === true,
      },
    ],
  };

export const californiaBirthRecord: Process<CaliforniaCounty> = {
  target: Target.BirthRecord,
  depends: [
    Target.NameChange,
    Target.PrimaryIdentification,
    Target.SocialSecurity,
  ],
  documents: [
    {
      name: "Application to Amend a Birth Record After a Court Order Name Change",
      id: "VS 23 Birth",
      filename: "California/Birth Cert Name Only.pdf",
      guide: CaliforniaBirthCertNameOnly,
      map: nameOnlyBirthCertMap,
      include: (applicant) => applicant.isChangingLegalSex === false,
    },
    {
      name: "Application to Amend a Birth Record",
      id: "VS 24B",
      filename: "California/Birth Cert Name and Gender.pdf",
      guide: CaliforniaBirthCertNameGender,
      map: nameGenderBirthCertMap,
      include: (applicant) => applicant.isChangingLegalSex === true,
    },
  ],
  isBirth: true,
};

export const californiaPostamble: Process<CaliforniaCounty> = {
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: CaliforniaEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: CaliforniaResourcesGuide,
    },
  ],
  isJustGuide: true,
};

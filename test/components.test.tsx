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

import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { vi, expect, describe, test } from "vitest";
import axe from "./axe-setup";

import Step1 from "../src/components/Step1";
import Step2 from "../src/components/Step2";
import Step3 from "../src/components/Step3";
import Step4 from "../src/components/Step4";
import Step4b from "../src/components/Step4b";
import Step5 from "../src/components/Step5";
import Step6 from "../src/components/Step6";

import MichiganBirthCertificateGuide from "../src/components/guides/Michigan/BirthCertificate";
import MichiganCourtHearingGuide from "../src/components/guides/Michigan/CourtHearing";
import MichiganEverythingElseGuide from "../src/components/guides/Michigan/EverythingElse";
import MichiganFilingInitialFormsGuide from "../src/components/guides/Michigan/FilingInitialForms";
import MichiganM97aGuide from "../src/components/guides/Michigan/M97a";
import MichiganMC20Guide from "../src/components/guides/Michigan/MC20";
import MichiganPC51Guide from "../src/components/guides/Michigan/PC51";
import MichiganPC52Guide from "../src/components/guides/Michigan/PC52";
import MichiganResourcesGuide from "../src/components/guides/Michigan/Resources";
import MichiganSecretaryOfStateGuide from "../src/components/guides/Michigan/SecretaryOfState";

import OregonAdultPetitionGuide from "../src/components/guides/Oregon/AdultPetition";
import OregonBirthCertUpdateGuide from "../src/components/guides/Oregon/BirthCertUpdate";
import OregonCourtHearingGuide from "../src/components/guides/Oregon/CourtHearing";
import OregonDMVGuide from "../src/components/guides/Oregon/DMV";
import OregonEverythingElseGuide from "../src/components/guides/Oregon/EverythingElse";
import OregonFeeWaiverGuide from "../src/components/guides/Oregon/FeeWaiver";
import OregonFilingInitialFormsGuide from "../src/components/guides/Oregon/FilingInitialForms";
import OregonMinorPetitionGuide from "../src/components/guides/Oregon/MinorPetition";
import OregonResourcesGuide from "../src/components/guides/Oregon/Resources";

import AlaskaAdultPetitionGuide from "../src/components/guides/Alaska/AdultPetition";
import AlaskaBirthCertificateGuide from "../src/components/guides/Alaska/BirthCertificate";
import AlaskaCIV695Guide from "../src/components/guides/Alaska/CIV695";
import AlaskaCIV708Guide from "../src/components/guides/Alaska/CIV708";
import AlaskaCIV709Guide from "../src/components/guides/Alaska/CIV709";
import AlaskaCourtHearingGuide from "../src/components/guides/Alaska/CourtHearing";
import AlaskaDMVGuide from "../src/components/guides/Alaska/DMV";
import AlaskaEverythingElseGuide from "../src/components/guides/Alaska/EverythingElse";
import AlaskaFeeWaiverGuide from "../src/components/guides/Alaska/FeeWaiver";
import AlaskaFilingInitialFormsGuide from "../src/components/guides/Alaska/FilingInitialForms";
import AlaskaMinorPetitionGuide from "../src/components/guides/Alaska/MinorPetition";
import AlaskaResourcesGuide from "../src/components/guides/Alaska/Resources";
import AlaskaVS405Guide from "../src/components/guides/Alaska/VS405";

import IllinoisAdultOrderGuide from "../src/components/guides/Illinois/AdultOrder";
import IllinoisAdultPetitionGuide from "../src/components/guides/Illinois/AdultPetition";
import IllinoisBirthCertUpdateGuide from "../src/components/guides/Illinois/BirthCertUpdate";
import IllinoisChildInfoGuide from "../src/components/guides/Illinois/ChildInfo";
import IllinoisCourtHearingGuide from "../src/components/guides/Illinois/CourtHearing";
import IllinoisEverythingElseGuide from "../src/components/guides/Illinois/EverythingElse";
import IllinoisFeeOrderGuide from "../src/components/guides/Illinois/FeeOrder";
import IllinoisFeeWaiverGuide from "../src/components/guides/Illinois/FeeWaiver";
import IllinoisFilingInitialFormsGuide from "../src/components/guides/Illinois/FilingInitialForms";
import IllinoisMinorOrderGuide from "../src/components/guides/Illinois/MinorOrder";
import IllinoisMinorPetitionGuide from "../src/components/guides/Illinois/MinorPetition";
import IllinoisNotaryGuide from "../src/components/guides/Illinois/Notary";
import IllinoisParentInfoGuide from "../src/components/guides/Illinois/ParentInfo";
import IllinoisPrivacyOrderGuide from "../src/components/guides/Illinois/PrivacyOrder";
import IllinoisPrivacyRequestGuide from "../src/components/guides/Illinois/PrivacyRequest";
import IllinoisResourcesGuide from "../src/components/guides/Illinois/Resources";
import IllinoisSecretaryOfStateGuide from "../src/components/guides/Illinois/SecretaryOfState";

import TexasAdultGenderChangeGuide from "../src/components/guides/Texas/AdultGenderChange";
import TexasAdultNameOrderGuide from "../src/components/guides/Texas/AdultNameOrder";
import TexasAdultNamePetitionGuide from "../src/components/guides/Texas/AdultNamePetition";
import TexasAndersonNameGuide from "../src/components/guides/Texas/AndersonName";
import TexasCourtHearingGuide from "../src/components/guides/Texas/CourtHearing";
import TexasDMVGuide from "../src/components/guides/Texas/DMV";
import TexasEverythingElseGuide from "../src/components/guides/Texas/EverythingElse";
import TexasFanninNameGuide from "../src/components/guides/Texas/FanninName";
import TexasFeeWaiverGuide from "../src/components/guides/Texas/FeeWaiver";
/** Both guides below require texas Locality Data
 * import TexasFilingInitialFormsGuide from "../src/components/guides/Texas/FilingInitialForms";
 * import TexasFingerprintingGuide from "../src/components/guides/Texas/Fingerprinting";
 */
import TexasGenderChangeAllGuide from "../src/components/guides/Texas/GenderChangeAll";
import TexasGenderChangeLetterGuide from "../src/components/guides/Texas/GenderChangeLetter";
import TexasGetBirthCertGuide from "../src/components/guides/Texas/GetBirthCert";
import TexasMinorGenderChangeGuide from "../src/components/guides/Texas/MinorGenderChange";
import TexasMinorGenderConsentGuide from "../src/components/guides/Texas/MinorGenderConsent";
import TexasMinorGenderWaiverGuide from "../src/components/guides/Texas/MinorGenderWaiver";
import TexasMinorNameConsentGuide from "../src/components/guides/Texas/MinorNameConsent";
import TexasMinorNameOtherCustodyGuide from "../src/components/guides/Texas/MinorNameOtherCustody";
import TexasMinorNameParentsOrderGuide from "../src/components/guides/Texas/MinorNameParentsOrder";
import TexasMinorNameParentsPetitionGuide from "../src/components/guides/Texas/MinorNameParentsPetition";
import TexasResourcesGuide from "../src/components/guides/Texas/Resources";
import TexasUpdateBirthCertGuide from "../src/components/guides/Texas/UpdateBithCert";

import AlamedaCoverSheetGuide from "../src/components/guides/California/AlamedaCoverSheet";
import AmadorBackgroundCheckGuide from "../src/components/guides/California/AmadorBCSheet";
import AmadorIntakeSheetGuide from "../src/components/guides/California/AmadorIntakeSheet";
import CaliforniaBirthCertNameGender from "../src/components/guides/California/BirthCertNameGender";
import CaliforniaBirthCertNameOnly from "../src/components/guides/California/BirthCertNameOnly";
import CaliforniaCoverSheetGuide from "../src/components/guides/California/CivilCoverSheet";
import CaliforniaCourtHearingGuide from "../src/components/guides/California/CourtHearing";
import CaliforniaDMVGuide from "../src/components/guides/California/DMV";
import ElDoradoBackgroundCheckGuide from "../src/components/guides/California/ElDoradoBCSheets";
import CaliforniaEverythingElseGuide from "../src/components/guides/California/EverythingElse";
import CaliforniaFeeWaiverGuide from "../src/components/guides/California/FeeWaiver";
import CaliforniaFeeWaiverOrderGuide from "../src/components/guides/California/FeeWaiverOrder";
import CaliforniaFilingGuide from "../src/components/guides/California/FilingInitialForms";
import CaliforniaNC110GGuide from "../src/components/guides/California/GuardianDeclaration";
import KernRelatedCasesGuide from "../src/components/guides/California/KernRelatedCases";
import LassenBCGuide from "../src/components/guides/California/LassenBCSheet";
import LosAngelesBCGuide from "../src/components/guides/California/LosAngelesBCSheet";
import LosAngelesCoverSheetGuide from "../src/components/guides/California/LosAngelesCivilSheet";
import MendocinoBCGuide from "../src/components/guides/California/MendocinoBCSheet";
import MontereyBCGuide from "../src/components/guides/California/MontereyBCSheet";
import CaliforniaNC100Guide from "../src/components/guides/California/NC100NameOnlyAll";
import CaliforniaNC110Guide from "../src/components/guides/California/NC110InfoAll";
import CaliforniaNC120Guide from "../src/components/guides/California/NC120PublicationAll";
import CaliforniaNC125Guide from "../src/components/guides/California/NC125GenderNotice";
import CaliforniaNC130GGuide from "../src/components/guides/California/NC130GuardianOrder";
import CaliforniaNC130Guide from "../src/components/guides/California/NC130OrderAll";
import CaliforniaNC300Guide from "../src/components/guides/California/NC300Adult";
import CaliforniaNC330Guide from "../src/components/guides/California/NC330OrderAdult";
import CaliforniaNC500Guide from "../src/components/guides/California/NC500Minor";
import CaliforniaNC520Guide from "../src/components/guides/California/NC520GenderMinor";
import CaliforniaNC530Guide from "../src/components/guides/California/NC530OrderMinor";
import OrangeRelatedCasesGuide from "../src/components/guides/California/OrangeRelatedCases";
import PlacerBCGuide from "../src/components/guides/California/PlacerBCSheet";
import CaliforniaResourcesGuide from "../src/components/guides/California/Resources";
import RiversideCoverSheetGuide from "../src/components/guides/California/RiversideCoverSheet";
import RiversideRelatedCasesGuide from "../src/components/guides/California/RiversideRelatedCases";
import SanBenitoBCGuide from "../src/components/guides/California/SanBenitoBCSheet";
import SantaBarbaraCoverSheetGuide from "../src/components/guides/California/SantaBarbaraCoverSheet";
import SantaClaraBCGuide from "../src/components/guides/California/SantaClaraBCSheet";
import SiskiyouBCGuide from "../src/components/guides/California/SiskiyouBCSheet";
import SiskiyouInfoGuide from "../src/components/guides/California/SiskiyouInfoSheet";
import SolanoBCGuide from "../src/components/guides/California/SolanoBCSheet";
import YubaBCGuide from "../src/components/guides/California/YubaBCSheet";

import DelawareAdultPetitionGuide from "../src/components/guides/Delaware/AdultPetition";
import DelawareBirthCertUpdateGuide from "../src/components/guides/Delaware/BirthCertUpdate";
import DelawareCourtHearingGuide from "../src/components/guides/Delaware/CourtHearing";
import DelawareDMVGuide from "../src/components/guides/Delaware/DMV";
import DelawareEverythingElseGuide from "../src/components/guides/Delaware/EverythingElse";
import DelawareFeeWaiverGuide from "../src/components/guides/Delaware/FeeWaiver";
import DelawareFilingGuide from "../src/components/guides/Delaware/FilingInitialForms";
import DelawareGatherDocsGuide from "../src/components/guides/Delaware/GatherDocs";
import DelawareMinorInfoGuide from "../src/components/guides/Delaware/MinorInfo";
import DelawareMinorPetitionGuide from "../src/components/guides/Delaware/MinorPetition";
import DelawareNotaryGuide from "../src/components/guides/Delaware/Notary";
import DelawareParentInfoGuide from "../src/components/guides/Delaware/ParentInfo";
import DelawareResourcesGuide from "../src/components/guides/Delaware/Resources";

import MissouriBirthCertGuide  from "../src/components/guides/Missouri/BirthCertificate";
import MissouriConfidentialInfoGuide from "../src/components/guides/Missouri/ConfidentialInfoSheet";
import MissouriCourtHearingGuide from "../src/components/guides/Missouri/CourtHearing";
import MissouriDMVGuide from "../src/components/guides/Missouri/DMV";
import MissouriEverythingElseGuide from "../src/components/guides/Missouri/EverythingElse";
import MissouriFeeWaiverGuide from "../src/components/guides/Missouri/FeeWaiver";
import MissouriFilingGuide from "../src/components/guides/Missouri/FilingInitialForms";
import MissouriGenderChangeGuide from "../src/components/guides/Missouri/GenderChange";
import JacksonCountyInfoGuide from "../src/components/guides/Missouri/JacksonInfoSheet";
import MissouriConsentMinorGuide from "../src/components/guides/Missouri/NameConsentMinor";
import MissouriOrderAdultGuide from "../src/components/guides/Missouri/NameOrderAdult";
import MissouriOrderMinorGuide from "../src/components/guides/Missouri/NameOrderMinor";
import MissouriPetitionAdultGuide from "../src/components/guides/Missouri/NamePetitionAdult";
import MissouriPetitionMinorGuide from "../src/components/guides/Missouri/NamePetitionMinor";
import MissouriNotaryGuide from "../src/components/guides/Missouri/Notary";
import MissouriParentConsentMinorGuide from "../src/components/guides/Missouri/ParentConsentMinor";
import MissouriPublicationGuide from "../src/components/guides/Missouri/Publication";
import MissouriPublicationAdultGuide from "../src/components/guides/Missouri/PublicationAdult";
import MissouriPublicationMinorGuide from "../src/components/guides/Missouri/PublicationMinor";
import MissouriRedactingGuide from "../src/components/guides/Missouri/RedactingForms";
import MissouriRedactionCertGuide from "../src/components/guides/Missouri/RedactionCertification";
import MissouriResourcesGuide from "../src/components/guides/Missouri/Resources";
import StLouisAdultInfoGuide from "../src/components/guides/Missouri/StLouisAdultInfo";
import StLouisMinorInfoGuide from "../src/components/guides/Missouri/StLouisMinorInfo";

import DS5504Guide from "../src/components/guides/Federal/ds5504";
import DS82Guide from "../src/components/guides/Federal/ds82";
import DS11Guide from "../src/components/guides/Federal/ds11";
import SocialSecurityGuide from "../src/components/guides/Federal/SocialSecurity";
import SelectiveServiceGuide from "../src/components/guides/Federal/SelectiveService";

import { sampleData } from "../src/types/person";

const formComponents = [
  { name: "Step1", component: <Step1 /> },
  { name: "Step2", component: <Step2 /> },
  { name: "Step3", component: <Step3 /> },
  { name: "Step4", component: <Step4 /> },
  { name: "Step4b", component: <Step4b /> },
  { name: "Step5", component: <Step5 /> },
  { name: "Step6", component: <Step6 /> },
];

const michiganGuideComponents = [
  {
    name: "MichiganBirthCertificateGuide",
    component: <MichiganBirthCertificateGuide person={sampleData} />,
  },
  {
    name: "MichiganCourtHearingGuide",
    component: <MichiganCourtHearingGuide person={sampleData} />,
  },
  {
    name: "MichiganEverythingElseGuide",
    component: <MichiganEverythingElseGuide />,
  },
  {
    name: "MichiganFilingInitialFormsGuide",
    component: <MichiganFilingInitialFormsGuide person={sampleData} />,
  },
  { name: "MichiganM97aGuide", component: <MichiganM97aGuide /> },
  {
    name: "MichiganMC20Guide",
    component: <MichiganMC20Guide person={sampleData} />,
  },
  {
    name: "MichiganPC51Guide",
    component: <MichiganPC51Guide person={sampleData} />,
  },
  { name: "MichiganPC52Guide", component: <MichiganPC52Guide /> },
  { name: "MichiganResourcesGuide", component: <MichiganResourcesGuide /> },
  {
    name: "MichiganSecretaryOfStateGuide",
    component: <MichiganSecretaryOfStateGuide person={sampleData} />,
  },
];

const oregonGuideComponents = [
  {
    name: "OregonAdultPetitionGuide",
    component: <OregonAdultPetitionGuide person={sampleData} />,
  },
  {
    name: "OregonBirthCertificateGuide",
    component: <OregonBirthCertUpdateGuide person={sampleData} />,
  },
  {
    name: "OregonCourtHearingGuide",
    component: <OregonCourtHearingGuide person={sampleData} />,
  },
  {
    name: "OregonDMVGuide",
    component: <OregonDMVGuide person={sampleData} />,
  },
  {
    name: "OregonEverythingElseGuide",
    component: <OregonEverythingElseGuide />,
  },
  {
    name: "OregonFeeWaiverGuide",
    component: <OregonFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "OregonFilingInitialFormsGuide",
    component: <OregonFilingInitialFormsGuide person={sampleData} />,
  },
  {
    name: "OregonMinorPetitionGuide",
    component: <OregonMinorPetitionGuide person={sampleData} />,
  },
  { name: "OregonResourcesGuide", component: <OregonResourcesGuide /> },
];

const alaskaGuideComponents = [
  {
    name: "AlaskaAdultPetitionGuide",
    component: <AlaskaAdultPetitionGuide person={sampleData} />,
  },
  {
    name: "AlaskaMinorPetitionGuide",
    component: <AlaskaMinorPetitionGuide person={sampleData} />,
  },
  {
    name: "AlaskaCIV695Guide",
    component: <AlaskaCIV695Guide />,
  },
  {
    name: "AlaskaVS405Guide",
    component: <AlaskaVS405Guide />,
  },
  {
    name: "AlaskaCIV708Guide",
    component: <AlaskaCIV708Guide />,
  },
  {
    name: "AlaskaCIV709Guide",
    component: <AlaskaCIV709Guide />,
  },
  {
    name: "AlaskaFeeWaiverGuide",
    component: <AlaskaFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "AlaskaFilingInitialFormsGuide",
    component: <AlaskaFilingInitialFormsGuide person={sampleData} />,
  },
  {
    name: "AlaskaCourtHearingGuide",
    component: <AlaskaCourtHearingGuide person={sampleData} />,
  },
  {
    name: "AlaskaDMVGuide",
    component: <AlaskaDMVGuide person={sampleData} />,
  },
  {
    name: "AlaskaBirthCertificateGuide",
    component: <AlaskaBirthCertificateGuide person={sampleData} />,
  },
  {
    name: "AlaskaEverythingElseGuide",
    component: <AlaskaEverythingElseGuide />,
  },
  {
    name: "AlaskaResourcesGuide",
    component: <AlaskaResourcesGuide />,
  },
];

const illinoisGuideComponents = [
  {
    name: "IllinoisAdultOrderGuide",
    component: <IllinoisAdultOrderGuide person={sampleData} />,
  },
  {
    name: "IllinoisAdultPetitionGuide",
    component: <IllinoisAdultPetitionGuide person={sampleData} />,
  },
  {
    name: "IllinoisBirthCertUpdateGuide",
    component: <IllinoisBirthCertUpdateGuide person={sampleData} />,
  },
  {
    name: "IllinoisChildInfoGuide",
    component: <IllinoisChildInfoGuide person={sampleData} />,
  },
  {
    name: "IllinoisCourtHearingGuide",
    component: <IllinoisCourtHearingGuide person={sampleData} />,
  },
  {
    name: "IllinoisEverythingElseGuide",
    component: <IllinoisEverythingElseGuide />,
  },
  {
    name: "IllinoisFeeOrderGuide",
    component: <IllinoisFeeOrderGuide />,
  },
  {
    name: "IllinoisFeeWaiverGuide",
    component: <IllinoisFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "IllinoisFilingInitialFormsGuide",
    component: <IllinoisFilingInitialFormsGuide person={sampleData} />,
  },
  {
    name: "IllinoisMinorOrderGuide",
    component: <IllinoisMinorOrderGuide person={sampleData} />,
  },
  {
    name: "IllinoisMinorPetitionGuide",
    component: <IllinoisMinorPetitionGuide person={sampleData} />,
  },
  {
    name: "IllinoisNotaryGuide",
    component: <IllinoisNotaryGuide person={sampleData} />,
  },
  {
    name: "IllinoisParentInfoGuide",
    component: <IllinoisParentInfoGuide />,
  },
  {
    name: "IllinoisPrivacyOrderGuide",
    component: <IllinoisPrivacyOrderGuide />,
  },
  {
    name: "IllinoisPrivacyRequestGuide",
    component: <IllinoisPrivacyRequestGuide person={sampleData} />,
  },
  {
    name: "IllinoisResourcesGuide",
    component: <IllinoisResourcesGuide />,
  },
  {
    name: "IllinoisSecretaryOfStateGuide",
    component: <IllinoisSecretaryOfStateGuide person={sampleData} />,
  },
];

const texasGuideComponents = [
  {
    name: "TexasAdultGenderChangeGuide",
    component: <TexasAdultGenderChangeGuide person={sampleData} />,
  },
  {
    name: "TexasAdultNameOrderGuide",
    component: <TexasAdultNameOrderGuide person={sampleData} />,
  },
  {
    name: "TexasAdultNamePetitionGuide",
    component: <TexasAdultNamePetitionGuide person={sampleData} />,
  },
  {
    name: "TexasAndersonNameGuide",
    component: <TexasAndersonNameGuide person={sampleData} />,
  },
  {
    name: "TexasCourtHearingGuide",
    component: <TexasCourtHearingGuide person={sampleData} />,
  },
  { name: "TexasDMVGuide", component: <TexasDMVGuide person={sampleData} /> },
  { name: "TexasEverythingElseGuide", component: <TexasEverythingElseGuide /> },
  {
    name: "TexasFanninNameGuide",
    component: <TexasFanninNameGuide person={sampleData} />,
  },
  {
    name: "TexasFeeWaiverGuide",
    component: <TexasFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "TexasGenderChangeAllGuide",
    component: <TexasGenderChangeAllGuide person={sampleData} />,
  },
  {
    name: "TexasGenderChangeLetterGuide",
    component: <TexasGenderChangeLetterGuide />,
  },
  {
    name: "TexasGetBirthCertGuide",
    component: <TexasGetBirthCertGuide person={sampleData} />,
  },
  {
    name: "TexasMinorGenderChangeGuide",
    component: <TexasMinorGenderChangeGuide person={sampleData} />,
  },
  {
    name: "TexasMinorGenderConsentGuide",
    component: <TexasMinorGenderConsentGuide person={sampleData} />,
  },
  {
    name: "TexasMinorGenderWaiverGuide",
    component: <TexasMinorGenderWaiverGuide />,
  },
  {
    name: "TexasMinorNameConsentGuide",
    component: <TexasMinorNameConsentGuide />,
  },
  {
    name: "TexasMinorNameOtherCustodyGuide",
    component: <TexasMinorNameOtherCustodyGuide person={sampleData} />,
  },
  {
    name: "TexasMinorNameParentsOrderGuide",
    component: <TexasMinorNameParentsOrderGuide />,
  },
  {
    name: "TexasMinorNameParentsPetitionGuide",
    component: <TexasMinorNameParentsPetitionGuide person={sampleData} />,
  },
  { name: "TexasResourcesGuide", component: <TexasResourcesGuide /> },
  {
    name: "TexasUpdateBirthCertGuide",
    component: <TexasUpdateBirthCertGuide person={sampleData} />,
  },
];

const californiaGuideComponents = [
  {
    name: "AlamedaCoverSheetGuide",
    component: <AlamedaCoverSheetGuide />,
  },
  {
    name: "AmadorBackgroundCheckGuide",
    component: <AmadorBackgroundCheckGuide />,
  },
  {
    name: "AmadorIntakeSheetGuide",
    component: <AmadorIntakeSheetGuide person={sampleData} />,
  },
  {
    name: "CaliforniaBirthCertNameGender",
    component: <CaliforniaBirthCertNameGender person={sampleData} />,
  },
  {
    name: "CaliforniaBirthCertNameOnly",
    component: <CaliforniaBirthCertNameOnly person={sampleData} />,
  },
  {
    name: "CaliforniaCoverSheetGuide",
    component: <CaliforniaCoverSheetGuide person={sampleData} />,
  },
  {
    name: "CaliforniaCourtHearingGuide",
    component: <CaliforniaCourtHearingGuide person={sampleData} />,
  },
  {
    name: "CaliforniaDMVGuide",
    component: <CaliforniaDMVGuide person={sampleData} />,
  },
  {
    name: "ElDoradoBackgroundCheckGuide",
    component: <ElDoradoBackgroundCheckGuide />,
  },
  {
    name: "CaliforniaEverythingElseGuide",
    component: <CaliforniaEverythingElseGuide />,
  },
  {
    name: "CaliforniaFeeWaiverGuide",
    component: <CaliforniaFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "CaliforniaFeeWaiverOrderGuide",
    component: <CaliforniaFeeWaiverOrderGuide />,
  },
  {
    name: "CaliforniaFilingGuide",
    component: <CaliforniaFilingGuide person={sampleData} />,
  },
  {
    name: "CaliforniaNC110GGuide",
    component: <CaliforniaNC110GGuide />,
  },
  {
    name: "KernRelatedCasesGuide",
    component: <KernRelatedCasesGuide person={sampleData} />,
  },
  {
    name: "LassenBCGuide",
    component: <LassenBCGuide person={sampleData} />,
  },
  {
    name: "LosAngelesBCGuide",
    component: <LosAngelesBCGuide person={sampleData} />,
  },
  {
    name: "LosAngelesCoverSheetGuide",
    component: <LosAngelesCoverSheetGuide person={sampleData} />,
  },
  {
    name: "MendocinoBCGuide",
    component: <MendocinoBCGuide person={sampleData} />,
  },
  {
    name: "MontereyBCGuide",
    component: <MontereyBCGuide person={sampleData} />,
  },
  {
    name: "CaliforniaNC100Guide",
    component: <CaliforniaNC100Guide person={sampleData} />,
  },
  {
    name: "CaliforniaNC110Guide",
    component: <CaliforniaNC110Guide person={sampleData} />,
  },
  {
    name: "CaliforniaNC120Guide",
    component: <CaliforniaNC120Guide person={sampleData} />,
  },
  {
    name: "CaliforniaNC125Guide",
    component: <CaliforniaNC125Guide person={sampleData} />,
  },
  {
    name: "CaliforniaNC130GGuide",
    component: <CaliforniaNC130GGuide />,
  },
  {
    name: "CaliforniaNC130Guide",
    component: <CaliforniaNC130Guide person={sampleData} />,
  },
  {
    name: "CaliforniaNC300GGuide",
    component: <CaliforniaNC300Guide />,
  },
  {
    name: "CaliforniaNC330Guide",
    component: <CaliforniaNC330Guide />,
  },
  {
    name: "CaliforniaNC500Guide",
    component: <CaliforniaNC500Guide />,
  },
  {
    name: "CaliforniaNC520Guide",
    component: <CaliforniaNC520Guide />,
  },
  {
    name: "CaliforniaNC530Guide",
    component: <CaliforniaNC530Guide />,
  },
  {
    name: "OrangeRelatedCasesGuide",
    component: <OrangeRelatedCasesGuide />,
  },
  {
    name: "PlacerBCGuide",
    component: <PlacerBCGuide person={sampleData} />,
  },
  {
    name: "CaliforniaResourcesGuide",
    component: <CaliforniaResourcesGuide />,
  },
  {
    name: "RiversideCoverSheetGuide",
    component: <RiversideCoverSheetGuide person={sampleData} />,
  },
  {
    name: "RiversideRelatedCasesGuide",
    component: <RiversideRelatedCasesGuide />,
  },
  {
    name: "SanBenitoBCGuide",
    component: <SanBenitoBCGuide person={sampleData} />,
  },
  {
    name: "SantaBarbaraCoverSheetGuide",
    component: <SantaBarbaraCoverSheetGuide person={sampleData} />,
  },
  {
    name: "SantaClaraBCGuide",
    component: <SantaClaraBCGuide person={sampleData} />,
  },
  {
    name: "SiskiyouBCGuide",
    component: <SiskiyouBCGuide person={sampleData} />,
  },
  {
    name: "SiskiyouInfoGuide",
    component: <SiskiyouInfoGuide person={sampleData} />,
  },
  {
    name: "SolanoBCGuide",
    component: <SolanoBCGuide />,
  },
  {
    name: "YubaBCGuide",
    component: <YubaBCGuide />,
  },
];

const delawareGuideComponents = [
  {
    name: "DelawareAdultPetitionGuide",
    component: <DelawareAdultPetitionGuide person={sampleData} />,
  },
  {
    name: "DelawareBirthCertUpdateGuide",
    component: <DelawareBirthCertUpdateGuide person={sampleData} />,
  },
  {
    name: "DelawareCourtHearingGuide",
    component: <DelawareCourtHearingGuide person={sampleData} />,
  },
  {
    name: "DelawareDMVGuide",
    component: <DelawareDMVGuide person={sampleData} />,
  },
  {
    name: "DelawareEverythingElseGuide",
    component: <DelawareEverythingElseGuide />,
  },
  {
    name: "DelawareFeeWaiverGuide",
    component: <DelawareFeeWaiverGuide person={sampleData} />,
  },
  {
    name: "DelawareFilingGuide",
    component: <DelawareFilingGuide person={sampleData} />,
  },
  {
    name: "DelawareGatherDocsGuide",
    component: <DelawareGatherDocsGuide person={sampleData} />,
  },
  {
    name: "DelawareMinorInfoGuide",
    component: <DelawareMinorInfoGuide person={sampleData} />,
  },
  {
    name: "DelawareMinorPetitionGuide",
    component: <DelawareMinorPetitionGuide person={sampleData} />,
  },
  {
    name: "DelawareNotaryGuide",
    component: <DelawareNotaryGuide person={sampleData} />,
  },
  {
    name: "DelawareParentInfoGuide",
    component: <DelawareParentInfoGuide person={sampleData} />,
  },
  {
    name: "DelawareResourcesGuide",
    component: <DelawareResourcesGuide />,
  },
];

const missouriGuideComponents = [
  {
    name: "MissouriBirthCertGuide",
    component: <MissouriBirthCertGuide  person={sampleData} />,
  },
  {
    name: "MissouriConfidentialInfoGuide",
    component: <MissouriConfidentialInfoGuide  person={sampleData} />,
  },
  {
    name: "MissouriCourtHearingGuide",
    component: <MissouriCourtHearingGuide  person={sampleData} />,
  },
  {
    name: "MissouriDMVGuide",
    component: <MissouriDMVGuide  person={sampleData} />,
  },
  {
    name: "MissouriEverythingElseGuide",
    component: <MissouriEverythingElseGuide  person={sampleData} />,
  },
  {
    name: "MissouriFeeWaiverGuide",
    component: <MissouriFeeWaiverGuide  person={sampleData} />,
  },
  {
    name: "MissouriFilingGuide",
    component: <MissouriFilingGuide  person={sampleData} />,
  },
  {
    name: "MissouriGenderChangeGuide",
    component: <MissouriGenderChangeGuide  person={sampleData} />,
  },
  {
    name: "JacksonCountyInfoGuide",
    component: <JacksonCountyInfoGuide />,
  },
  {
    name: "MissouriConsentMinorGuide",
    component: <MissouriConsentMinorGuide  person={sampleData} />,
  },
  {
    name: "MissouriOrderAdultGuide",
    component: <MissouriOrderAdultGuide />,
  },
  {
    name: "MissouriOrderMinorGuide",
    component: <MissouriOrderMinorGuide  person={sampleData} />,
  },
  {
    name: "MissouriPetitionAdultGuide",
    component: <MissouriPetitionAdultGuide  person={sampleData} />,
  },
  {
    name: "MissouriPetitionMinorGuide",
    component: <MissouriPetitionMinorGuide  person={sampleData} />,
  },
  {
    name: "MissouriNotaryGuide",
    component: <MissouriNotaryGuide  person={sampleData} />,
  },
  {
    name: "MissouriParentConsentMinorGuide",
    component: <MissouriParentConsentMinorGuide  person={sampleData} />,
  },
  {
    name: "MissouriPublicationGuide",
    component: <MissouriPublicationGuide  person={sampleData} />,
  },
  {
    name: "MissouriPublicationAdultGuide",
    component: <MissouriPublicationAdultGuide />,
  },
  {
    name: "MissouriPublicationMinorGuide",
    component: <MissouriPublicationMinorGuide />,
  },
  {
    name: "MissouriRedactingGuide",
    component: <MissouriRedactingGuide  person={sampleData} />,
  },
  {
    name: "MissouriRedactionCertGuide",
    component: <MissouriRedactionCertGuide />,
  },
  {
    name: "MissouriResourcesGuide",
    component: <MissouriResourcesGuide />,
  },
  {
    name: "StLouisAdultInfoGuide",
    component: <StLouisAdultInfoGuide />,
  },
  {
    name: "StLouisMinorInfoGuide",
    component: <StLouisMinorInfoGuide />,
  },
];

const federalGuideComponents = [
  { name: "DS5504Guide", component: <DS5504Guide person={sampleData} /> },
  { name: "DS82Guide", component: <DS82Guide person={sampleData} /> },
  { name: "DS11Guide", component: <DS11Guide person={sampleData} /> },
  {
    name: "SocialSecurityGuide",
    component: <SocialSecurityGuide person={sampleData} />,
  },
  {
    name: "SelectiveServiceGuide",
    component: <SelectiveServiceGuide person={sampleData} />,
  },
];

const allComponents = [
  ...formComponents,
  ...michiganGuideComponents,
  ...oregonGuideComponents,
  ...alaskaGuideComponents,
  ...illinoisGuideComponents,
  ...texasGuideComponents,
  ...californiaGuideComponents,
  ...delawareGuideComponents,
  ...missouriGuideComponents,
  ...federalGuideComponents,
];

describe.each(allComponents)(
  "React component $name",
  ({
    // Ignore ESLint warnings for variables used in test name.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name,
    component,
  }) => {
    test("generates no browser console errors", () => {
      const consoleSpy = vi.spyOn(console, "error");

      render(<BrowserRouter>{component}</BrowserRouter>);

      expect(consoleSpy).not.toHaveBeenCalled();
    });

    test("generates no a11y warnings", async () => {
      const { container } = render(<BrowserRouter>{component}</BrowserRouter>);

      expect(await axe(container)).toHaveNoViolations();
    });
  },
);

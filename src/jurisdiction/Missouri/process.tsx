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

import { isMinor, getMOLocality } from "../../lib/util";

import {
  adultNamePetitionMap,
  minorNamePetitionMap,
  minorConsentMap,
  minorParentConsentMap,
  adultNameOrderMap,
  minorNameOrderMap,
  feeWaiverMap,
  confidentialInfoMap,
  redactionCertificationMap,
  adultPublicationMap,
  minorPublicationMap,
  adultNameCoverMap,
  minorNameCoverMap,
  adultNameGenderCoverMap,
  minorNameGenderCoverMap,
  birthCertCorrectionMap,
  voterRegistrationMap,
  jacksonInfoSheetMinor,
  stLouisCityInfoSheetAdult,
  stLouisCityInfoSheetMinor,
} from "./maps";

import MissouriBirthCertGuide from "../../components/guides/Missouri/BirthCertificate";
import MissouriConfidentialInfoGuide from "../../components/guides/Missouri/ConfidentialInfoSheet";
import MissouriCourtHearingGuide from "../../components/guides/Missouri/CourtHearing";
import MissouriDMVGuide from "../../components/guides/Missouri/DMV";
import MissouriEverythingElseGuide from "../../components/guides/Missouri/EverythingElse";
import MissouriFeeWaiverGuide from "../../components/guides/Missouri/FeeWaiver";
import MissouriFilingGuide from "../../components/guides/Missouri/FilingInitialForms";
import MissouriGenderChangeGuide from "../../components/guides/Missouri/GenderChange";
import JacksonCountyInfoGuide from "../../components/guides/Missouri/JacksonInfoSheet";
import MissouriConsentMinorGuide from "../../components/guides/Missouri/NameConsentMinor";
import MissouriOrderAdultGuide from "../../components/guides/Missouri/NameOrderAdult";
import MissouriOrderMinorGuide from "../../components/guides/Missouri/NameOrderMinor";
import MissouriPetitionAdultGuide from "../../components/guides/Missouri/NamePetitionAdult";
import MissouriPetitionMinorGuide from "../../components/guides/Missouri/NamePetitionMinor";
import MissouriNotaryGuide from "../../components/guides/Missouri/Notary";
import MissouriParentConsentMinorGuide from "../../components/guides/Missouri/ParentConsentMinor";
import MissouriPublicationGuide from "../../components/guides/Missouri/Publication";
import MissouriPublicationAdultGuide from "../../components/guides/Missouri/PublicationAdult";
import MissouriPublicationMinorGuide from "../../components/guides/Missouri/PublicationMinor";
import MissouriRedactingGuide from "../../components/guides/Missouri/RedactingForms";
import MissouriRedactionCertGuide from "../../components/guides/Missouri/RedactionCertification";
import MissouriResourcesGuide from "../../components/guides/Missouri/Resources";
import StLouisAdultInfoGuide from "../../components/guides/Missouri/StLouisAdultInfo";
import StLouisMinorInfoGuide from "../../components/guides/Missouri/StLouisMinorInfo";

import { type MissouriCounty } from "../../types/locality";

import { type Process, Target } from "../../types/process";

export const missouriNameChange: Process<MissouriCounty> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Petition for Change of Name",
      id: "CAFC401",
      filename: "Missouri/Adult Name Change Petition.pdf",
      guide: MissouriPetitionAdultGuide,
      map: adultNamePetitionMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Petition for Change of Name by Parent (For Minor Child)",
      id: "CAFC402",
      filename: "Missouri/Minor Name Change Petition.pdf",
      guide: MissouriPetitionMinorGuide,
      map: minorNamePetitionMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Petition, Consent and Order for Parent's Appointment as Next Friend",
      id: "CAFC411",
      filename: "Missouri/Minor Name Change Petitioner Appointment.pdf",
      guide: MissouriConsentMinorGuide,
      map: minorConsentMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Consent to Minor Child’s Change of Name",
      id: "CAFC412",
      filename: "Missouri/Minor Name Change Parent Consent.pdf",
      guide: MissouriParentConsentMinorGuide,
      map: minorParentConsentMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Judgment for Change of Name (For Adult Individual)",
      id: "CAFC470",
      filename: "Missouri/Adult Name Change Order.pdf",
      guide: MissouriOrderAdultGuide,
      map: adultNameOrderMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Judgment for Change of Name of Minor Child",
      id: "CAFC472",
      filename: "Missouri/Minor Name Change Order.pdf",
      guide: MissouriOrderMinorGuide,
      map: minorNameOrderMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Motion and Affidavit in Support of Request to Proceed As a Poor Person",
      id: "GN10",
      filename: "Missouri/Fee Waiver.pdf",
      guide: MissouriFeeWaiverGuide,
      map: feeWaiverMap,
    },
    {
      name: "Request for Publication Adult",
      guide: MissouriPublicationAdultGuide,
      include: (applicant) => !isMinor(applicant) 
        && getMOLocality(applicant.residentJurisdictionName, 
            applicant.residentLocalityName)?.courtPublishes === true,
    },
    {
      name: "Request for Publication Minor",
      guide: MissouriPublicationMinorGuide,
      include: (applicant) => isMinor(applicant)
        && getMOLocality(applicant.residentJurisdictionName, 
            applicant.residentLocalityName)?.courtPublishes === true,
    },
    {
      name: "Confidential Case Filing Information Sheet",
      id: "FI-10",
      filename: "Missouri/Confidential Info Sheet.pdf",
      guide: MissouriConfidentialInfoGuide,
      map: confidentialInfoMap,
    },
    {
      name: "Redaction Certification Note",
      guide: MissouriRedactionCertGuide,
    },
    {
      name: "Family Court Information Sheet",
      id: "CIRCT 1452",
      filename: "Missouri/Jackson County Information Sheet.pdf",
      guide: JacksonCountyInfoGuide,
      map: jacksonInfoSheetMinor,
      include: (applicant) => isMinor(applicant) && applicant.residentLocalityName === "Jackson",
    },
    {
      name: "Confidential Case Filing Information Sheet - Non-Domestic Relations",
      filename: "Missouri/St Louis City Info Sheet Adults.pdf",
      guide: StLouisAdultInfoGuide,
      map: stLouisCityInfoSheetAdult,
      include: (applicant) =>!isMinor(applicant) && 
        applicant.residentLocalityName === "St. Louis (City)",
    },
    {
      name: "Confidential Case Filing Information Sheet - Domestic Relations",
      filename: "Missouri/St Louis City Info Sheet Minors.pdf",
      guide: StLouisMinorInfoGuide,
      map: stLouisCityInfoSheetMinor,
      include: (applicant) => isMinor(applicant) && 
        applicant.residentLocalityName === "St. Louis (City)",
    },
    {
      name: "Finding a Notary",
      guide: MissouriNotaryGuide,
    },
    {
      name: "Redacting Forms",
      guide: MissouriRedactingGuide,
    },
    {
      name: "Redaction Certification",
      id: "GN320",
      filename: "Missouri/Redaction Certification.pdf",
      map: redactionCertificationMap,
    },
    {
      name: "Filing Initial Documents",
      guide: MissouriFilingGuide,
    },
    {
      name: "Court Hearing",
      guide: MissouriCourtHearingGuide,
    },
    {
      name: "Publication",
      guide: MissouriPublicationGuide,
      include: (applicant) => getMOLocality(applicant.residentJurisdictionName, 
        applicant.residentLocalityName)?.courtPublishes === true,
    },
    {
      name: "Request for Publication after Judgment of Change of Name for Adult Individual",
      id: "CAFC480",
      filename: "Missouri/Adult Name Change Publication.pdf",
      map: adultPublicationMap,
      include: (applicant) => !isMinor(applicant) 
        && getMOLocality(applicant.residentJurisdictionName, 
            applicant.residentLocalityName)?.courtPublishes === true,
    },
    {
      name: "Request for Publication after Judgment of Change of Name for Minor Child",
      id: "CAFC482",
      filename: "Missouri/Minor Name Change Publication.pdf",
      map: minorPublicationMap,
      include: (applicant) => isMinor(applicant)
        && getMOLocality(applicant.residentJurisdictionName, 
            applicant.residentLocalityName)?.courtPublishes === true,
    },
  ],
};

export const missouriGenderMarker: Process<MissouriCounty> = {
  target: Target.GenderMarker,
  documents: [
    {
      name: "Gender Change",
      guide: MissouriGenderChangeGuide,
    },
  ],
};

export const missouriPrimaryIdentification: Process<MissouriCounty> =
  {
    target: Target.PrimaryIdentification,
    depends: [Target.NameChange, Target.GenderMarker],
    documents: [
      {
        name: "DMV Guide",
        guide: MissouriDMVGuide,
      },
    ],
  };

export const missouriBirthRecord: Process<MissouriCounty> = {
  target: Target.BirthRecord,
  depends: [
    Target.NameChange,
    Target.PrimaryIdentification,
    Target.SocialSecurity,
  ],
  documents: [
    {
      name: "Birth Certificate",
      guide: MissouriBirthCertGuide,
    },
    {
      name: "Affidavit for Correction of a Birth, Death, or Fetal Death Record",
      id: "580-0645",
      filename: "Missouri/Birth Cert Correction.pdf",
      map: birthCertCorrectionMap,
    },
    {
      name: "DHSS Adult Name Cover Letter",
      filename: "Missouri/DHSS Adult Name Cover Letter.pdf",
      map: adultNameCoverMap,
      include: (applicant) => !isMinor(applicant) && applicant.isChangingLegalSex === false,
    },
    {
      name: "DHSS Adult Name Gender Cover Letter",
      filename: "Missouri/DHSS Adult Name Gender Cover Letter.pdf",
      map: adultNameGenderCoverMap,
      include: (applicant) => !isMinor(applicant) && applicant.isChangingLegalSex === true,
    },
    {
      name: "DHSS Minor Name Cover Letter",
      filename: "Missouri/DHSS Minor Name Cover Letter.pdf",
      map: minorNameCoverMap,
      include: (applicant) => isMinor(applicant) && applicant.isChangingLegalSex === false,
    },
    {
      name: "DHSS Minor Name Gender Cover Letter",
      filename: "Missouri/DHSS Minor Name Gender Cover Letter.pdf",
      map: minorNameGenderCoverMap,
      include: (applicant) => isMinor(applicant) && applicant.isChangingLegalSex === true,
    },
  ],
  isBirth: true,
};

export const missouriPostamble: Process<MissouriCounty> = {
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: MissouriEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: MissouriResourcesGuide,
    },
    {
      name: "Missouri Voter Registration Application",
      id: "231-0169",
      filename: "Missouri/Voter Registration.pdf",
      map: voterRegistrationMap,
    },
  ],
  isJustGuide: true,
};

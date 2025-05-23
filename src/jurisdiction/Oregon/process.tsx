/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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
    isMinor,
} from "../../lib/util";

import {
  adultNameSexPetitionOregonMap,
  minorNameSexPetitionOregonMap,
  feeWaiverOregonMap,
  birthCertOregonMap,
  voterOregonMap,
} from "./maps";

import OregonAdultPetitionGuide from "../../components/guides/Oregon/AdultPetition";
import OregonBirthCertUpdateGuide from "../../components/guides/Oregon/BirthCertUpdate";
import OregonCourtHearingGuide from "../../components/guides/Oregon/CourtHearing";
import OregonDMVGuide from "../../components/guides/Oregon/DMV";
import OregonEverythingElseGuide from "../../components/guides/Oregon/EverythingElse";
import OregonFeeWaiverGuide from "../../components/guides/Oregon/FeeWaiver";
import OregonFilingInitialFormsGuide from "../../components/guides/Oregon/FilingInitialForms";
import OregonMinorPetitionGuide from "../../components/guides/Oregon/MinorPetition";
import OregonResourcesGuide from "../../components/guides/Oregon/Resources";

import { type Process, Target } from "../../types/process";

export const oregonNameChange: Process = {
  jurisdiction: "OR",
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Change of Name or Sex (Adult)",
      filename: "Oregon/Name and Sex Change Petition Adult.pdf",
      guide: OregonAdultPetitionGuide,
      map: adultNameSexPetitionOregonMap,
      include: (applicant) => isMinor(applicant) === false
    },
    {
      name: "Change of Name or Sex (Minor)",
      filename: "Oregon/Name and Sex Change Petition Minor.pdf",
      guide: OregonMinorPetitionGuide,
      map: minorNameSexPetitionOregonMap,
      include: (applicant) => isMinor(applicant) === true && 
        applicant.birthJurisdiction !== "Oregon"
    },
    {
      name: "Application for Deferral or Waiver of Fees and Declaration in Support",
      filename: "Oregon/Fee Waiver Form.pdf",
      guide: OregonFeeWaiverGuide,
      map: feeWaiverOregonMap,
      include: (applicant) => isMinor(applicant) === false || 
        applicant.birthJurisdiction !== "Oregon"
    },
    {
      name: "Filing Initial Documents",
      guide: OregonFilingInitialFormsGuide,
      include: (applicant) => isMinor(applicant) === false || 
        applicant.birthJurisdiction !== "Oregon"
    },
    {
      name: "Court Hearing",
      guide: OregonCourtHearingGuide,
      include: (applicant) => isMinor(applicant) === false || 
        applicant.birthJurisdiction !== "Oregon"
    },
  ],
};

/** Testing empty process because Oregon has no solo 
 * Gender Marker forms or processes*/
export const oregonGenderMarker: Process = {
    jurisdiction: "OR",
    target: Target.GenderMarker,
    documents: [],
};

export const oregonPrimaryIdentification: Process = {
  jurisdiction: "OR",
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "DMV",
      guide: OregonDMVGuide,
    },
  ],
};

export const oregonBirthRecord: Process = {
  jurisdiction: "OR",
  target: Target.BirthRecord,
  depends: [Target.NameChange],
  documents: [
    {
      name: "Birth Certificate",
      guide: OregonBirthCertUpdateGuide,
    },
    {
      name: "Application to Change the Name and/or Sex on a Record of Live Birth to Support Gender Identity",
      id: "OHA 2673",
      filename: "Oregon/Birth Certificate Form.pdf",
      map: birthCertOregonMap,
    },
    {
      name: "Alternate ID",
      filename: "Oregon/Alternate ID List Birth Certificate.pdf",
    },
  ],
  isBirth: true,
};

export const oregonPostamble: Process = {
  jurisdiction: "OR",
  target: Target.BirthRecord,
  documents: [
    {
      name: "Everything Else",
      guide: OregonEverythingElseGuide,
    },
    {
      name: "Oregon Voter Registration Card",
      id: "SEL 500",
      filename: "Oregon/Voter Registration Form.pdf",
      map: voterOregonMap,
    },
    {
      name: "Resources",
      guide: OregonResourcesGuide,
    },
  ],
};

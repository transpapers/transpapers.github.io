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
  adultNamePetition,
  minorNamePetition,
  minorInfoSheet,
  parentInfoSheet,
  feeWaiver,
  birthCertRequest,
  DMVTitleMap,
  birthCertGenderProvider,
  birthCertGenderAffidavit,
} from "./maps";

import DelawareAdultPetitionGuide from "../../components/guides/Delaware/AdultPetition";
import DelawareBirthCertUpdateGuide from "../../components/guides/Delaware/BirthCertUpdate";
import DelawareCourtHearingGuide from "../../components/guides/Delaware/CourtHearing";
import DelawareDMVGuide from "../../components/guides/Delaware/DMV";
import DelawareEverythingElseGuide from "../../components/guides/Delaware/EverythingElse";
import DelawareFeeWaiverGuide from "../../components/guides/Delaware/FeeWaiver";
import DelawareFilingGuide from "../../components/guides/Delaware/FilingInitialForms";
import DelawareGatherDocsGuide from "../../components/guides/Delaware/GatherDocs";
import DelawareMinorInfoGuide from "../../components/guides/Delaware/MinorInfo";
import DelawareMinorPetitionGuide from "../../components/guides/Delaware/MinorPetition";
import DelawareNotaryGuide from "../../components/guides/Delaware/Notary";
import DelawareParentInfoGuide from "../../components/guides/Delaware/ParentInfo";
import DelawareResourcesGuide from "../../components/guides/Delaware/Resources";

import { type Process, Target } from "../../types/process";
import { DelawareCounty } from "../../types/locality";

export const delawareNameChange: Process<DelawareCounty> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Petition for Name Change",
      filename: "Delaware/Adult Name Change Petition.pdf",
      guide: DelawareAdultPetitionGuide,
      map: adultNamePetition,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Petition for Minor Name Change",
      id: "492",
      filename: "Delaware/Minor Name Change Petition.pdf",
      guide: DelawareMinorPetitionGuide,
      map: minorNamePetition,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Custody Separate Statement",
      id: "346",
      filename: "Delaware/Minor Info Sheet.pdf",
      guide: DelawareMinorInfoGuide,
      map: minorInfoSheet,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Information Sheet",
      id: "240",
      filename: "Delaware/Parent Info Sheet.pdf",
      guide: DelawareParentInfoGuide,
      map: parentInfoSheet,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Affidavit in Support of Application to Proceed in Forma Pauperis",
      id: "257P",
      filename: "Delaware/Fee Waiver.pdf",
      guide: DelawareFeeWaiverGuide,
      map: feeWaiver,
    },
    {
      name: "Application for a certified copy of a Delaware Birth Certificate",
      filename: "Delaware/Birth Cert Request.pdf",
      map: birthCertRequest,
      include: (applicant) => applicant.birthJurisdictionName === "Delaware",
    },
    {
      name: "Gathering Documents",
      guide: DelawareGatherDocsGuide,
    },
    {
      name: "Notary",
      guide: DelawareNotaryGuide,
    },
    {
      name: "Filing Initial Documents",
      guide: DelawareFilingGuide,
    },
    {
      name: "Court Hearing",
      guide: DelawareCourtHearingGuide,
    },
  ],
};

/** This process is empty because Delaware has no solo
 * Gender Marker forms or processes but without a
 * Gender Marker process the isChangingLegalSex variable
 * reads false.*/
export const delawareGenderMarker: Process<DelawareCounty> = {
  target: Target.GenderMarker,
  documents: [],
};

export const delawarePrimaryIdentification: Process<DelawareCounty> = {
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "DMV",
      guide: DelawareDMVGuide,
    },
    {
      name: "Request for Gender Change on Driver License/Identification Card",
      id: "MV2020",
      filename: "Delaware/DMV Gender Change.pdf",
      map: DMVTitleMap,
      include: (applicant) => applicant.isChangingLegalSex,
    },
  ],
};

export const delawareBirthRecord: Process<DelawareCounty> = {
  target: Target.BirthRecord,
  depends: [Target.NameChange],
  documents: [
    {
      name: "Birth Certificate Update",
      guide: DelawareBirthCertUpdateGuide,
    },
    {
      name: "Healthcare Provider's Affidavit for Sex Change on Birth Certificate",
      filename: "Delaware/Birth Cert Gender Change.pdf",
      map: birthCertGenderProvider,
      include: (applicant) => applicant.isChangingLegalSex,
    },
    {
      name: "Requester's Affidavit for Sex Change on Birth Certificate",
      filename: "Delaware/Birth Cert Gender Affidavit.pdf",
      map: birthCertGenderAffidavit,
      include: (applicant) => applicant.isChangingLegalSex,
    },
  ],
  isBirth: true,
};

export const delawarePostamble: Process<DelawareCounty> = {
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: DelawareEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: DelawareResourcesGuide,
    },
  ],
  isJustGuide: true,
};

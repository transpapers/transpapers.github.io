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

import { isMinor } from "../../lib/util";

import {
  adultNameChangeMap,
  adultNameChangeOrderMap,
  minorNameChangeMap,
  minorChildInfoMap,
  minorAdditionalParentMap,
  minorNameChangeOrderMap,
  requestCourtRecordsPrivateMap,
  orderCourtRecordsPrivateMap,
  feeWaiverApplicationMap,
  feeWaiverJudgementMap,
  efileExemptionMap,
  dmvGenderDesignationMap,
  birthCertCorrectionMap,
} from "./maps";

import IllinoisAdultOrderGuide from "../../components/guides/Illinois/AdultOrder";
import IllinoisAdultPetitionGuide from "../../components/guides/Illinois/AdultPetition";
import IllinoisBirthCertUpdateGuide from "../../components/guides/Illinois/BirthCertUpdate";
import IllinoisChildInfoGuide from "../../components/guides/Illinois/ChildInfo";
import IllinoisCourtHearingGuide from "../../components/guides/Illinois/CourtHearing";
import IllinoisEverythingElseGuide from "../../components/guides/Illinois/EverythingElse";
import IllinoisFeeOrderGuide from "../../components/guides/Illinois/FeeOrder";
import IllinoisFeeWaiverGuide from "../../components/guides/Illinois/FeeWaiver";
import IllinoisFilingInitialFormsGuide from "../../components/guides/Illinois/FilingInitialForms";
import IllinoisMinorOrderGuide from "../../components/guides/Illinois/MinorOrder";
import IllinoisMinorPetitionGuide from "../../components/guides/Illinois/MinorPetition";
import IllinoisNotaryGuide from "../../components/guides/Illinois/Notary";
import IllinoisParentInfoGuide from "../../components/guides/Illinois/ParentInfo";
import IllinoisPrivacyOrderGuide from "../../components/guides/Illinois/PrivacyOrder";
import IllinoisPrivacyRequestGuide from "../../components/guides/Illinois/PrivacyRequest";
import IllinoisResourcesGuide from "../../components/guides/Illinois/Resources";
import IllinoisSecretaryOfStateGuide from "../../components/guides/Illinois/SecretaryOfState";

import { type Process, Target } from "../../types/process";
import { Locality } from "../../types/locality";

export const illinoisNameChange: Process<Locality> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Request for Name Change (Adult)",
      id: "ATJ 303.10",
      filename: "Illinois/Adult Request for Name Change.pdf",
      guide: IllinoisAdultPetitionGuide,
      map: adultNameChangeMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Order for Name Change (Adult)",
      id: "ATJ 305.7",
      filename: "Illinois/Adult Order for Name Change.pdf",
      guide: IllinoisAdultOrderGuide,
      map: adultNameChangeOrderMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Request for Name Change (Minor)",
      id: "NCM-R 2003.5",
      filename: "Illinois/Minor Request for Name Change.pdf",
      guide: IllinoisMinorPetitionGuide,
      map: minorNameChangeMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Request for Name Change - Child Information",
      id: "NCM-CI 2004.5",
      filename: "Illinois/Minor Child Information.pdf",
      guide: IllinoisChildInfoGuide,
      map: minorChildInfoMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Additional Parent Request for Name Change",
      id: "NCM-AP 2006.4",
      filename: "Illinois/Minor Additional Parent.pdf",
      guide: IllinoisParentInfoGuide,
      map: minorAdditionalParentMap,
      include: (applicant) => isMinor(applicant) && !applicant.parentsAreOkay,
    },
    {
      name: "Order for Name Change (Minor)",
      id: "NCM-O 2009.5",
      filename: "Illinois/Minor Order for Name Change.pdf",
      guide: IllinoisMinorOrderGuide,
      map: minorNameChangeOrderMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Motion to Impound (Make Court Records Private)",
      id: "ATJ 308.1",
      filename: "Illinois/NC Motion to Impound.pdf",
      guide: IllinoisPrivacyRequestGuide,
      map: requestCourtRecordsPrivateMap,
      include: (applicant) => applicant.doNotPublish,
    },
    {
      name: "Order on Motion to Impound (Make Court Records Private)",
      id: "ATJ 309.1",
      filename: "Illinois/NC Order to Impound.pdf",
      guide: IllinoisPrivacyOrderGuide,
      map: orderCourtRecordsPrivateMap,
      include: (applicant) => applicant.doNotPublish,
    },
    {
      name: "Application for Waiver of Court Fees (Civil)",
      id: "WA-P 603.8",
      filename: "Illinois/Fee Waiver.pdf",
      guide: IllinoisFeeWaiverGuide,
      map: feeWaiverApplicationMap,
    },
    {
      name: "Order on Application for Waiver of Court Fees (Civil)",
      id: "WA-O 604.7",
      filename: "Illinois/Fee Waiver Judgement.pdf",
      guide: IllinoisFeeOrderGuide,
      map: feeWaiverJudgementMap,
    },
    {
      name: "Getting Documents and a Notary",
      guide: IllinoisNotaryGuide,
    },
    {
      name: "Filing Initial Documents",
      guide: IllinoisFilingInitialFormsGuide,
    },
    {
      name: "Certification for Exemption from E-Filing",
      id: "EW-C 3401.4",
      filename: "Illinois/eFiling Exemption.pdf",
      map: efileExemptionMap,
    },
    {
      name: "Court Hearing",
      guide: IllinoisCourtHearingGuide,
    },
  ],
};

export const illinoisGenderMarker: Process<Locality> = {
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "Gender Designation Change Form",
      id: "DSD A 329.3",
      filename: "Illinois/SOS Gender Designation.pdf",
      map: dmvGenderDesignationMap,
    },
  ],
};

export const illinoisPrimaryIdentification: Process<Locality> = {
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "Secretary Of State",
      guide: IllinoisSecretaryOfStateGuide,
    },
  ],
};

export const illinoisBirthRecord: Process<Locality> = {
  target: Target.BirthRecord,
  depends: [
    Target.NameChange,
    Target.PrimaryIdentification,
    Target.SocialSecurity,
  ],
  documents: [
    {
      name: "Birth Certificate Update",
      guide: IllinoisBirthCertUpdateGuide,
    },
    {
      name: "State of Illinois Affidavit and Certificate of Correction Request",
      id: "IOCI 19-184",
      filename: "Illinois/Birth Certificate Correction Request.pdf",
      map: birthCertCorrectionMap,
    },
  ],
  isBirth: true,
};

export const illinoisPostamble: Process<Locality> = {
  documents: [
    {
      name: "Everything Else",
      guide: IllinoisEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: IllinoisResourcesGuide,
    },
  ],
  isJustGuide: true,
};

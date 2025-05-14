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
  changeOfNameMap,
  bciMap,
  birthCertOneMap,
  primaryIDRhodeIslandMap,
  genderIDMap,
  birthCertTwoMap,
} from "./maps";

import RhodeIslandBCIGuide from "../../components/guides/RhodeIsland/BCI";
import RhodeIslandBirthCertRequestGuide from "../../components/guides/RhodeIsland/BirthCertRequest";
import RhodeIslandBirthCertUpdateGuide from "../../components/guides/RhodeIsland/BirthCertUpdate";
import RhodeIslandCourtHearingGuide from "../../components/guides/RhodeIsland/CourtHearing";
import RhodeIslandDMVGuide from "../../components/guides/RhodeIsland/DMV";
import RhodeIslandEverythingElseGuide from "../../components/guides/RhodeIsland/EverythingElse";
import RhodeIslandFilingGuide from "../../components/guides/RhodeIsland/FilingInitialForms";
import RhodeIslandNotaryGuide from "../../components/guides/RhodeIsland/Notary";
import RhodeIslandPC8_1Guide from "../../components/guides/RhodeIsland/PC8-1";
import RhodeIslandResourcesGuide from "../../components/guides/RhodeIsland/Resources";

import { type Process, Target } from "../../types/process";

export const rhodeislandNameChange: Process = {
  jurisdiction: "RI",
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Change of Name",
      id: "PC8.1",
      filename: "RhodeIsland/PC8.1-change-of-name.pdf",
      guide: RhodeIslandPC8_1Guide,
      map: changeOfNameMap,
    },
    {
      name: "Authorization to Release Information",
      filename: "RhodeIsland/BCI_BackgroundCheck.pdf",
      guide: RhodeIslandBCIGuide,
      map: bciMap,
    },
    {
      name: "Application for a Certified Copy of a Birth Record",
      filename: "RhodeIsland/Birth Cert Request.pdf",
      guide: RhodeIslandBirthCertRequestGuide,
      map: birthCertOneMap,
    },
    {
      name: "Getting Documents and a Notary",
      guide: RhodeIslandNotaryGuide,
    },
    {
      name: "Filing Initial Documents",
      guide: RhodeIslandFilingGuide,
    },
    {
      name: "Court Hearing",
      guide: RhodeIslandCourtHearingGuide,
    },
  ],
};

export const rhodeislandGenderMarker: Process = {
  jurisdiction: "RI",
  target: Target.GenderMarker,
  documents: [
    {
      name: "Gender Designation on a License or Identification Card",
      filename: "RhodeIsland/DMV Gender Designation.pdf",
      map: genderIDMap,
    },
  ],
};

export const rhodeislandPrimaryIdentification: Process = {
  jurisdiction: "RI",
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "DMV",
      filename: "RhodeIsland/DMV LI-1.pdf",
      id: "LI-1",
      guide: RhodeIslandDMVGuide,
      map: primaryIDRhodeIslandMap,
    },
  ],
};

export const rhodeislandBirthRecord: Process = {
  jurisdiction: "RI",
  target: Target.BirthRecord,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "Birth Certificate",
      guide: RhodeIslandBirthCertUpdateGuide,
    },
    {
      name: "Application for a Certified Copy of a Birth Record",
      filename: "RhodeIsland/Birth Cert Request.pdf",
      map: birthCertTwoMap,
    },
  ],
  isBirth: true,
};

export const rhodeislandPostamble: Process = {
  depends: [Target.BirthRecord, Target.PrimaryIdentification],
  documents: [
    {
      name: "Everything Else",
      guide: RhodeIslandEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: RhodeIslandResourcesGuide,
    },
  ],
};

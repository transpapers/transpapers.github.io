/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import { numericalAge } from "../../lib/util";
import { GenderMarker } from "../../types/types";

import { ssnMap, ds5504Map, ds82Map, ds11Map, statusLetterMap } from "./maps";

import DS5504Guide from "../../components/guides/Federal/ds5504";
import DS82Guide from "../../components/guides/Federal/ds82";
import DS11Guide from "../../components/guides/Federal/ds11";
import SocialSecurityGuide from "../../components/guides/Federal/SocialSecurity";
import SelectiveServiceGuide from "../../components/guides/Federal/SelectiveService";

import { type Process, Target } from "../../types/process";

import { Locality } from "../../types/locality";

export const socialSecurity: Process<Locality> = {
  target: Target.SocialSecurity,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "Application for a Social Security Card",
      id: "SS-5",
      filename: "Federal/ss-5.pdf",
      guide: SocialSecurityGuide,
      map: ssnMap,
    },
  ],
};

export const passport: Process<Locality> = {
  target: Target.Passport,
  documents: [
    {
      name: "Application for a Passport",
      id: "DS 5504",
      filename: "Federal/passport_ds5504.pdf",
      map: ds5504Map,
      guide: DS5504Guide,
      include: (applicant) => applicant.passport === "ds5504",
    },
    {
      name: "Application for a Passport",
      id: "DS 82",
      filename: "Federal/passport_ds82.pdf",
      map: ds82Map,
      guide: DS82Guide,
      include: (applicant) => applicant.passport === "ds82",
    },
    {
      name: "Application for a Passport",
      id: "DS 11",
      filename: "Federal/passport_ds11.pdf",
      map: ds11Map,
      guide: DS11Guide,
      include: (applicant) => applicant.passport === "ds11",
    },
  ],
};

export const selectiveService: Process<Locality> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Request for Status Information Letter",
      filename: "Federal/selective_service_status_letter.pdf",
      map: statusLetterMap,
      include: (applicant) =>
        numericalAge(applicant.birthdate) < 26 && applicant.assignedSex === GenderMarker.F,
    },
    {
      name: "Selective Service",
      guide: SelectiveServiceGuide,
      include: (applicant) =>
        numericalAge(applicant.birthdate) < 26,
    },
  ],
};

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

import { Target, Process } from '../types/process';
import { County } from '../types/county';

import {
  michiganBirthRecord, michiganGenderMarker, michiganNameChange, michiganPrimaryIdentification,
} from './Michigan/process';
import michiganCounties from './Michigan/counties';

import { passport, socialSecurity } from './Federal/process';

/**
 * A single US state or territory.
 */
export interface Jurisdiction {
  /**
   * Human-readable name.
   *
   * @remarks This will be shown to the user in Step 1.
   * Unless folderName is set, this is also the name of the directories under
   * which the requisite forms and guides are located. For instance, Michigan
   * forms are served under `forms/Michigan` and appear under
   * `public/forms/Michigan`.
   */
  name: string,

  /**
   * Name of the folder under which the requisite forms and guides are located.
   * Defaults to being the same as `name`.
   */
  folderName?: string,

  /**
   * Map from `Target`s to `Process`es.
   */
  processes?: { [key in Target]?: Process },

  /**
   * Map of counties (or county equivalents.)
   */
  counties?: { [key: string]: County },

  /**
   * `true` if this is the dummy `Jurisdiction` used for federal processes.
   */
  isFederal?: boolean,
}

export const michigan: Jurisdiction = {
  name: 'Michigan',
  processes: {
    [Target.BirthRecord]: michiganBirthRecord,
    [Target.GenderMarker]: michiganGenderMarker,
    [Target.NameChange]: michiganNameChange,
    [Target.PrimaryIdentification]: michiganPrimaryIdentification,
  },
  counties: michiganCounties,
};

export const federal: Jurisdiction = {
  name: 'Federal',
  processes: {
    [Target.SocialSecurity]: socialSecurity,
    [Target.Passport]: passport,
  },
  isFederal: true,
};

export const allJurisdictions = [
  federal,
  michigan,
];

export function getJurisdiction(name: string): Jurisdiction | undefined {
  return allJurisdictions.find((jurisdiction) => jurisdiction.name === name);
}

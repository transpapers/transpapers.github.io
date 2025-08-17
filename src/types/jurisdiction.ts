/**
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

import { type Process } from "./process";
import { type Locality } from "./locality";
import { type AnyProcess, type AnyJurisdiction } from "./generic";

import { allJurisdictions } from "../jurisdiction/all";

/**
 * A single US state or territory.
 */
export interface Jurisdiction<T extends Locality> {
  /**
   * Human-readable name.
   *
   * @remarks This will be shown to the user in Step 1.
   * Unless folderName is set, this is also the name of the directories under
   * which the requisite forms and guides are located. For instance, Michigan
   * forms are served under `forms/Michigan` and appear under
   * `public/forms/Michigan`.
   */
  name: string;

  /**
   * Two-letter postal abbreviation.
   *
   * @remarks At this time, only used for testing. We may need it later, though.
   */
  abbreviation: string;

  /**
   * Name of the folder under which the requisite forms and guides are located.
   * Defaults to being the same as `name`.
   */
  folderName?: string;

  /**
   * Map from `Target`s to `Process`es.
   */
  processes: Process<T>[];

  /**
   * Map of counties (or county equivalents.)
   */
  localities: T[];
}

export function getProcesses(name: string | undefined): AnyProcess[] {
  if (name === undefined) {
    return [];
  }

  return (
    allJurisdictions.find((jurisdiction) => jurisdiction.name === name)
      ?.processes ?? []
  );
}

export function allProcesses(
  residentJurisdiction: AnyJurisdiction,
  birthJurisdiction: AnyJurisdiction,
): AnyProcess[] {
  const residentProcesses = residentJurisdiction.processes.filter(
    (proc) => !proc.isBirth,
  );

  const birthProcesses = birthJurisdiction.processes.filter(
    (proc) => proc.isBirth,
  );

  const federalProcesses = getProcesses("Federal");

  return [...residentProcesses, ...birthProcesses, ...federalProcesses];
}

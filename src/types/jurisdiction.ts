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

import { type Process } from "./process";
import { type Locality } from "./locality";

import { allJurisdictions } from "../jurisdiction/all";

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
  name: string;

  /**
   * Name of the folder under which the requisite forms and guides are located.
   * Defaults to being the same as `name`.
   */
  folderName?: string;

  /**
   * Map from `Target`s to `Process`es.
   */
  processes?: Process[];

  /**
   * Map of counties (or county equivalents.)
   */
  counties?: { [key: string]: Locality };

  /**
   * `true` if this is the dummy `Jurisdiction` used for federal processes.
   */
  isFederal?: boolean;
}

export function getJurisdiction(
  name: string | undefined,
): Jurisdiction | undefined {
  if (name === undefined) {
    return undefined;
  }
  return allJurisdictions.find((jurisdiction) => jurisdiction.name === name);
}

export function getProcesses(name: string | undefined): Process[] {
  if (name === undefined) {
    return [];
  }

  const jurisdiction = getJurisdiction(name);

  if (jurisdiction === undefined) {
    return [];
  }

  if (jurisdiction.processes === undefined) {
    return [];
  }

  return jurisdiction.processes;
}

export function allProcesses(
  residentJurisdiction: string | undefined,
  birthJurisdiction: string | undefined,
): Process[] {
  const residentJurisdictionProcesses =
    getJurisdiction(residentJurisdiction)?.processes || [];
  const residentProcesses = residentJurisdictionProcesses.filter(
    (proc) => !proc.isBirth && !proc.isJustGuide,
  );

  const birthJurisdictionProcesses =
    getJurisdiction(birthJurisdiction)?.processes || [];
  const birthProcesses = birthJurisdictionProcesses.filter(
    (proc) => proc.isBirth && !proc.isJustGuide,
  );

  const federalProcesses = getJurisdiction("Federal")?.processes || [];

  return [...residentProcesses, ...birthProcesses, ...federalProcesses];
}

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

import React from "react";

import { type Person } from "../types/person";
import { type Process, type Document } from "../types/process";
import { type Jurisdiction } from "../types/jurisdiction";
import { type Locality } from "../types/locality";

import {
  AlaskaAdministrativeDivision,
  CaliforniaCounty,
  DelawareCounty,
  MichiganCounty,
  NewYorkCounty,
  OhioCounty,
  RhodeIslandCityOrTown,
  TexasCounty,
} from "../types/locality";

export type AnyLocality =
  | Locality
  | AlaskaAdministrativeDivision
  | CaliforniaCounty
  | DelawareCounty
  | MichiganCounty
  | NewYorkCounty
  | OhioCounty
  | RhodeIslandCityOrTown
  | TexasCounty
  ;

// NOTE This cannot be effectively genericized (yet) because TypeScript does not
// properly support higher-kinded types. (2025-06-05, but unlikely to ever happen.)
// Cf. https://github.com/microsoft/TypeScript/issues/1213
type JurisdictionDistribute<U> = U extends Locality ? Jurisdiction<U> : never;
export type AnyJurisdiction = JurisdictionDistribute<AnyLocality>;

type ProcessDistribute<U> = U extends Locality ? Process<U> : never;
export type AnyProcess = ProcessDistribute<AnyLocality>;

type DocumentDistribute<U> = U extends Locality ? Document<U> : never;
export type AnyDocument = DocumentDistribute<AnyLocality>;

export type Guide<T extends Locality> = React.FunctionComponent<{
  person: Partial<Person>;
  locality: T;
}>;
type GuideDistribute<U> = U extends Locality ? Guide<U> : never;
export type AnyGuide = GuideDistribute<AnyLocality>;

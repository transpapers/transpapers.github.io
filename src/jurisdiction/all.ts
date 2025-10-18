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

import { type AnyJurisdiction } from "../types/generic";
import { type Jurisdiction } from "../types/jurisdiction";
import { type Locality } from "../types/locality";

import {
  michiganBirthRecord,
  michiganGenderMarker,
  michiganNameChange,
  michiganPrimaryIdentification,
  michiganPostamble,
} from "./Michigan/process";
import michiganCounties from "./Michigan/localities";
import { MichiganCounty } from "../types/locality";

import {
  rhodeislandBirthRecord,
  rhodeislandGenderMarker,
  rhodeislandNameChange,
  rhodeislandPrimaryIdentification,
  rhodeislandPostamble,
} from "./RhodeIsland/process";
import rhodeislandCounties from "./RhodeIsland/localities";
import { RhodeIslandCityOrTown } from "../types/locality";

import {
  newyorkBirthRecord,
  newyorkGenderMarker,
  newyorkNameChange,
  newyorkPrimaryIdentification,
  newyorkPostamble,
} from "./NewYork/process";
import newyorkCounties from "./NewYork/localities";
import { NewYorkCounty } from "../types/locality";

import {
  oregonBirthRecord,
  oregonNameChange,
  oregonPrimaryIdentification,
  oregonGenderMarker,
  oregonPostamble,
} from "./Oregon/process";
import oregonCounties from "./Oregon/localities";

import {
  alaskaBirthRecord,
  alaskaNameChange,
  alaskaPrimaryIdentification,
  alaskaGenderMarker,
  alaskaPostamble,
} from "./Alaska/process";
import alaskaCounties from "./Alaska/localities";
import { AlaskaAdministrativeDivision } from "../types/locality";

import {
  illinoisBirthRecord,
  illinoisNameChange,
  illinoisPrimaryIdentification,
  illinoisGenderMarker,
  illinoisPostamble,
} from "./Illinois/process";
import illinoisCounties from "./Illinois/counties";

import { passport, socialSecurity } from "./Federal/process";

export const michigan: Jurisdiction<MichiganCounty> = {
  name: "Michigan",
  abbreviation: "MI",
  processes: [
    michiganNameChange,
    socialSecurity,
    michiganPrimaryIdentification,
    michiganGenderMarker,
    michiganBirthRecord,
    michiganPostamble,
  ],
  localities: michiganCounties,
};

export const rhodeIsland: Jurisdiction<RhodeIslandCityOrTown> = {
  name: "Rhode Island",
  abbreviation: "RI",
  processes: [
    rhodeislandNameChange,
    socialSecurity,
    rhodeislandPrimaryIdentification,
    rhodeislandGenderMarker,
    rhodeislandBirthRecord,
    rhodeislandPostamble,
  ],
  localities: rhodeislandCounties,
};

export const newYork: Jurisdiction<NewYorkCounty> = {
  name: "New York",
  abbreviation: "NY",
  processes: [
    newyorkNameChange,
    socialSecurity,
    newyorkPrimaryIdentification,
    newyorkBirthRecord,
    newyorkGenderMarker,
    newyorkPostamble,
  ],
  localities: newyorkCounties,
};

export const oregon: Jurisdiction<Locality> = {
  name: "Oregon",
  abbreviation: "OR",
  processes: [
    oregonNameChange,
    socialSecurity,
    oregonPrimaryIdentification,
    oregonBirthRecord,
    oregonGenderMarker,
    oregonPostamble,
  ],
  localities: oregonCounties,
};

export const alaska: Jurisdiction<AlaskaAdministrativeDivision> = {
  name: "Alaska",
  abbreviation: "AK",
  processes: [
    alaskaNameChange,
    socialSecurity,
    alaskaPrimaryIdentification,
    alaskaGenderMarker,
    alaskaBirthRecord,
    alaskaPostamble,
  ],
  localities: alaskaCounties,
};

export const illinois: Jurisdiction<Locality> = {
  name: "Illinois",
  abbreviation: "IL",
  processes: [
    illinoisNameChange,
    socialSecurity,
    illinoisPrimaryIdentification,
    illinoisGenderMarker,
    illinoisBirthRecord,
    illinoisPostamble,
  ],
  localities: illinoisCounties,
};

export const federal: Jurisdiction<Locality> = {
  name: "Federal",
  abbreviation: "FED",
  processes: [passport],

  localities: [],
};

export const allJurisdictions: AnyJurisdiction[] = [
  alaska,
  illinois,
  michigan,
  newYork,
  oregon,
  rhodeIsland,

  federal,
];

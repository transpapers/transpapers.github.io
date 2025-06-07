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
import michiganCounties from "./Michigan/counties";
import { MichiganCounty } from "../types/locality";

import {
  rhodeislandBirthRecord,
  rhodeislandGenderMarker,
  rhodeislandNameChange,
  rhodeislandPrimaryIdentification,
  rhodeislandPostamble,
} from "./RhodeIsland/process";
import rhodeislandCounties from "./RhodeIsland/counties";
import { RhodeIslandCityOrTown } from "../types/locality";

import {
  newyorkBirthRecord,
  newyorkGenderMarker,
  newyorkNameChange,
  newyorkPrimaryIdentification,
  newyorkPostamble,
} from "./NewYork/process";
import newyorkCounties from "./NewYork/counties";
import { NewYorkCounty } from "../types/locality";

import {
  oregonBirthRecord,
  oregonNameChange,
  oregonPrimaryIdentification,
  oregonGenderMarker,
  oregonPostamble,
} from "./Oregon/process";
import oregonCounties from "./Oregon/counties";
import { OregonCounty } from "../types/locality";

import {
  alaskaBirthRecord,
  alaskaNameChange,
  alaskaPrimaryIdentification,
  alaskaGenderMarker,
  alaskaPostamble,
} from "./Alaska/process";
import alaskaCounties from "./Alaska/counties";
import { AlaskaAdministrativeDivision } from "../types/locality";

import { passport, socialSecurity } from "./Federal/process";

export const michigan: Jurisdiction<MichiganCounty> = {
  name: "Michigan",
  abbreviation: "MI",
  processes: [
    michiganNameChange,
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
    newyorkPrimaryIdentification,
    newyorkBirthRecord,
    newyorkGenderMarker,
    newyorkPostamble,
  ],
  localities: newyorkCounties,
};

export const oregon: Jurisdiction<OregonCounty> = {
  name: "Oregon",
  abbreviation: "OR",
  processes: [
    oregonNameChange,
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
    alaskaPrimaryIdentification,
    alaskaGenderMarker,
    alaskaBirthRecord,
    alaskaPostamble,
  ],
  localities: alaskaCounties,
};

export const federal: Jurisdiction<Locality> = {
  name: "Federal",
  abbreviation: "DC",
  processes: [socialSecurity, passport],
  isFederal: true,
};

// FIXME is there a nicer way to do this?
export const allJurisdictions = new Map<string, AnyJurisdiction>();
allJurisdictions.set("Michigan", michigan);
allJurisdictions.set("Oregon", oregon);
allJurisdictions.set("Rhode Island", rhodeIsland);
allJurisdictions.set("New York", newYork);
allJurisdictions.set("Federal", federal);

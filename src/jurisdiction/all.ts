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

import { type Jurisdiction } from '../types/jurisdiction';

import {
  michiganBirthRecord,
  michiganGenderMarker,
  michiganNameChange,
  michiganPrimaryIdentification,
  michiganPostamble,
} from './Michigan/process';
import michiganCounties from './Michigan/counties';

import { passport, socialSecurity } from './Federal/process';

export const michigan: Jurisdiction = {
  name: 'Michigan',
  processes: [
    michiganBirthRecord,
    michiganGenderMarker,
    michiganNameChange,
    michiganPrimaryIdentification,
    michiganPostamble,
  ],
  counties: michiganCounties,
};

export const federal: Jurisdiction = {
  name: 'Federal',
  processes: [
    socialSecurity,
    passport,
  ],
  isFederal: true,
};

export const allJurisdictions = [federal, michigan];

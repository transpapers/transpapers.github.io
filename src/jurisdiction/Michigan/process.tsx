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

import * as React from 'react';

import {
  nameChangeMap,
  nameChangePrivateMap,
  followingMap,
  piiMap,
  noticeMap,
  feeWaiverMap,
  mdosSexMap,
  miSexMap,
  birthCertMap,
} from './maps';

import MichiganBirthCertificateGuide from '../../components/guides/Michigan/BirthCertificate';
import MichiganCourtHearingGuide from '../../components/guides/Michigan/CourtHearing';
import MichiganEverythingElseGuide from '../../components/guides/Michigan/EverythingElse';
import MichiganFilingInitialFormsGuide from '../../components/guides/Michigan/FilingInitialForms';
import MichiganM97aGuide from '../../components/guides/Michigan/M97a';
import MichiganMC20Guide from '../../components/guides/Michigan/MC20';
import MichiganPC50Guide from '../../components/guides/Michigan/PC50';
import MichiganPC51Guide from '../../components/guides/Michigan/PC51';
import MichiganPC52Guide from '../../components/guides/Michigan/PC52';
import MichiganResourcesGuide from '../../components/guides/Michigan/Resources';

import { Process, Target } from '../../types/process';

export const michiganNameChange: Process = {
  jurisdiction: 'MI',
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: 'Petition to Change Name',
      id: 'PC 51',
      filename: 'Michigan/pc51.pdf',
      guide: <MichiganPC51Guide />,
      map: nameChangeMap,
      include: (applicant) => !applicant.doNotPublish,
    },
    {
      name: 'Petition to Change Name and Ex Parte Request for Nonpublication and Confidential Record',
      id: 'PC 51c',
      filename: 'Michigan/pc51c.pdf',
      guide: <MichiganPC51Guide />,
      map: nameChangePrivateMap,
      include: (applicant) => applicant.doNotPublish,
    },
    {
      name: 'Addendum to Protected Personal Identifying Information',
      id: 'M 97a',
      filename: 'Michigan/m97a.pdf',
      guide: <MichiganM97aGuide />,
      map: piiMap,
    },
    {
      name: "Minor's Consent to Name Change",
      id: 'PC 51b',
      filename: 'Michigan/pc51b.pdf',
      include: (applicant) => applicant.age !== undefined
        && applicant.age >= 14
        && applicant.age < 18,
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change',
      id: 'PC 50',
      filename: 'Michigan/pc50.pdf',
      guide: <MichiganPC50Guide />,
      map: noticeMap,
      include: (applicant) => !(applicant.doNotPublish && !applicant.parentsAreOkay),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change (Noncustodial Parent)',
      id: 'PC 50c',
      filename: 'Michigan/pc50c.pdf',
      guide: <MichiganPC50Guide />,
      include: (applicant) => applicant.doNotPublish && !applicant.parentsAreOkay,
    },
    {
      name: 'Order Following Hearing Regarding Petition For Name Change',
      id: 'PC 52',
      filename: 'Michigan/pc52.pdf',
      guide: <MichiganPC52Guide />,
      map: followingMap,
      include: (applicant) => applicant.residentCounty === 'Saginaw',
    },
    {
      name: 'Fee Waiver Request',
      id: 'MC 20',
      filename: 'Michigan/mc20.pdf',
      guide: <MichiganMC20Guide />,
      map: feeWaiverMap,
    },
    {
      name: 'Filing Initial Documents',
      guide: <MichiganFilingInitialFormsGuide />,
    },
    {
      name: 'Court Hearing',
      guide: <MichiganCourtHearingGuide />,
    },
  ],
};

export const michiganGenderMarker: Process = {
  jurisdiction: 'MI',
  target: Target.GenderMarker,
  documents: [
    {
      name: 'Michigan Dept. of State Sex Designation Form',
      filename: 'Michigan/mdos_sdf.pdf',
      map: mdosSexMap,
    },
    {
      name: 'State of Michigan Sex Designation Form',
      filename: 'Michigan/mi_sdf.pdf',
      map: miSexMap,
    },
  ],
};

export const michiganPrimaryIdentification: Process = {
  jurisdiction: 'MI',
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [],
};

export const michiganBirthRecord: Process = {
  jurisdiction: 'MI',
  target: Target.BirthRecord,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: 'Birth Certificate',
      guide: <MichiganBirthCertificateGuide />,
    },
    {
      name: 'Application to Change or Correct a Michigan Birth Record',
      id: 'DCH-0847-CHGBX',
      filename: 'Michigan/birth-cert.pdf',
      map: birthCertMap,
    },
    {
      name: 'Acceptable ID',
      filename: 'Michigan/acceptable-id.pdf',
    },
  ],
  isBirth: true,
};

export const michiganPostamble: Process = {
  depends: [Target.BirthRecord, Target.PrimaryIdentification],
  documents: [
    {
      name: 'Everything Else',
      guide: <MichiganEverythingElseGuide />,
    },
    {
      name: 'Resources',
      guide: <MichiganResourcesGuide />,
    },
  ],
  isJustGuide: true,
};

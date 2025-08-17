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

export interface Locality {
  name: string;
  court: Court;
}

export type OregonCounty = Locality;

export type IllinoisCounty = Locality;

export type AlaskaAdministrativeDivision = Locality & {
  doesNameChange: boolean;
  inPersonFiling: boolean;
  emailFiling: boolean;
  emailCourt?: string;
  faxFiling: boolean;
  faxNumber?: string;
  trueFiling: boolean;
  forwardsTo?: ForwardsTo;
};

export interface ForwardsTo {
  court: Court;

  inPersonFiling: boolean;
  emailFiling: boolean;
  emailCourt?: string;
  faxFiling: boolean;
  faxNumber?: string;
  trueFiling: boolean;
}

export type NewYorkCounty = Locality & {
  borough?: string;
  courtType: string;
  isNYC?: boolean;
};

export type TexasCounty = Locality & {
  backgroundCheckRequired: boolean;
  standingOrderRequired: boolean;
};

export type RhodeIslandCityOrTown = Locality & {
  county: string;
  advertisementRequired: boolean;
  courtDoesAdvertisement: boolean;

  backgroundCheckRequired: boolean;
  courtDoesBackgroundCheck: boolean;

  publications?: Publication[];

  filingCost: string;
};

export type OhioCounty = Locality & {
  courtDemandsPublication: boolean;
  courtDoesAdvertisement?: boolean;
  publications?: Publication[];

  backgroundCheckRequired: boolean;
  fingerprintLocations?: FingerprintLocation[];

  typeOfBirthCert: string;

  adultApplication: boolean;
  adultSupportAffidavit: boolean;
  minorSupportAffidavit: boolean;
  judgmentEntryHearing: boolean;
  adultJudgementEntry: boolean;
  minorApplication: boolean;
  minorJudgementEntry: boolean;
  consentWaiver: boolean;
  publicationNotice: boolean;
  publicationWaiverOne: boolean;
  publicationWaiverTwo: boolean;
  backgroundCheckRelease: boolean;
  birthCorrection: boolean;

  judgeName: string;

  filingCost: string;
};

export type MichiganCounty = Locality & {
  fingerprintLocations: FingerprintLocation[];
  publications: Publication[];
};

export interface Court {
  address: string;
  city: string;
  circuit?: string;
  phone: string;
  website?: string;
  specificCourtInfo?: string;
}

export interface FingerprintLocation {
  name: string;
  address: string;
  website: string;
}

export interface Publication {
  name: string;
  website?: string;
  email?: string;
}


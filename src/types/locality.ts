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

export type Locality = AlaskaAdministrativeDivision
  | MichiganCounty
  | RhodeIslandCityOrTown
  | NewYorkCounty
  | OtherCounty;

export interface AlaskaAdministrativeDivision {
  court: Court;
  doesNameChange: boolean;

  inPersonFiling: boolean;
  emailFiling: boolean;
  emailCourt?: string;
  faxFiling: boolean;
  faxNumber?: string;
  trueFiling: boolean;

  forwardsTo?: AlaskaAdministrativeDivision;
}

export interface OtherCounty {
  court: Court;
}
export interface NewYorkCounty {
    borough?: string;
    court: Court;
    courtType: string;
    isNYC?: boolean;
}

export interface RhodeIslandCityOrTown {
  county: string;
  court: Court;

  advertisementRequired: boolean;
  courtDoesAdvertisement: boolean;

  backgroundCheckRequired: boolean;
  courtDoesBackgroundCheck: boolean;

  publications?: Publication[];

  filingCost: string;
}

export interface MichiganCounty {
  court: Court;
  fingerprintLocations: FingerprintLocation[];
  publications: Publication[];
}

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

interface PublicationWebsite {
  name: string;
  website: string;
  email?: string;
}

interface PublicationEmail {
  name: string;
  email: string;
  website?: string;
}

export type Publication = PublicationWebsite | PublicationEmail;

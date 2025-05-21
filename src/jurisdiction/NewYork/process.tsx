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

import {
    isMinor,
} from "../../lib/util";

import {
  adultNameSexPetitionMap,
  minorNameSexPetitionMap,
  feeWaiverNYStateMap,
  feeWaiverNYCMap,
  primaryIDNewYorkMap,
  vehicleRegistrationMap,
  birthCertAdultNYStateMap,
  birthCertMinorNYStateMap,
  birthCertNYCMap,
  genderAffidavitAdultNYStateMap,
  genderAffidavitMinorNYStateMap,
  selfAttestationAdultNYCMap,
  selfAttestationMinorNYCMap,
} from "./maps";

import NewYorkBirthCertificateGuide from "../../components/guides/NewYork/BirthCertUpdate";
import NewYorkDMVGuide from "../../components/guides/NewYork/DMV";
import NewYorkEverythingElseGuide from "../../components/guides/NewYork/EverythingElse";
import NewYorkFilingInitialFormsGuide from "../../components/guides/NewYork/FilingInitialForms";
import NewYorkNotaryGuide from "../../components/guides/NewYork/Notary";
import NYCFeeWaiverGuide from "../../components/guides/NewYork/NYCFeeWaiver";
import NYSFeeWaiverGuide from "../../components/guides/NewYork/NYSFeeWaiver";
import NewYorkResourcesGuide from "../../components/guides/NewYork/Resources";
import NewYorkUCS_NC1Guide from "../../components/guides/NewYork/UCS-NC1";
import NewYorkUCS_NC2Guide from "../../components/guides/NewYork/UCS-NC2";

import { type Process, Target } from "../../types/process";

export const newyorkNameChange: Process = { 
  jurisdiction: "NY",
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: "Name Change and/or Sex Designation Change Petition for Individual Adult",
      id: "UCS NC1",
      filename: "NewYork/UCS-NC1 Adult.pdf",
      guide: NewYorkUCS_NC1Guide,
      map: adultNameSexPetitionMap,
      include: (applicant) => isMinor(applicant) !== true
    },
    {
      name: "Name Change and/or Sex Designation Change Petition for Individual Minor",
      id: "UCS NC2",
      filename: "NewYork/UCS-NC2 Minor.pdf",
      guide: NewYorkUCS_NC2Guide,
      map: minorNameSexPetitionMap,
      include: (applicant) => isMinor(applicant) === true
    },
    {
      name: "Application to Waive Court Costs, Fees, and Expenses",
      id: "UCS FW1",
      filename: "NewYork/NY State Fee Waiver UCS-FW1.pdf",
      guide: NYSFeeWaiverGuide,
      map: feeWaiverNYStateMap,
      include: (applicant) =>
        !(applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Affirmation in Support of an Application to Proceed as a Poor Person and to Waive Court Fees",
      id: "CIV GP 15 i",
      filename: "NewYork/NYC Fee Waiver.pdf",
      guide: NYCFeeWaiverGuide,
      map: feeWaiverNYCMap,
      include: (applicant) => 
        applicant.residentCounty === "Bronx" || 
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond"
    },
    {
      name: "Notary",
      guide: NewYorkNotaryGuide,
    },
    {
      name: "Filing Initial Documents",
      guide: NewYorkFilingInitialFormsGuide,
    },
  ],
};

export const newyorkGenderMarker: Process = {
  jurisdiction: "NY",
  target: Target.GenderMarker,
  depends: [Target.BirthRecord],
  documents: [
    {
      name: "Notarized Affidavit of Gender Change for a Person 17 Years of Age or Older",
      id: "DOH 5303",
      filename: "NewYork/Gender Affidavit 17 and up NY State.pdf",
      map: genderAffidavitAdultNYStateMap,
      include: (applicant) =>
        !isMinor(applicant) && !(applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Parent/Legal Guardian Notarized Affidavit of Gender for a Person 16 Years of Age or Under",
      id: "DOH 5304",
      filename: "NewYork/Gender Affidavit Under 17 NY State.pdf",
      map: genderAffidavitMinorNYStateMap,
      include: (applicant) =>
        isMinor(applicant) && !(applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Self-Attestation Form for Registrants 18 Years of Age and Older",
      filename: "NewYork/BC Self-attestation Adult NYC.pdf",
      map: selfAttestationAdultNYCMap,
      include: (applicant) =>
        !isMinor(applicant) && (applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Attestation Form for Named Parents or Legal Guardians of a Registrant Younger Than 18 Years Old",
      filename: "NewYork/BC Self-attestation Minor NYC.pdf",
      map: selfAttestationMinorNYCMap,
      include: (applicant) =>
        isMinor(applicant) && (applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
  ],
};

export const newyorkPrimaryIdentification: Process = {
  jurisdiction: "NY",
  target: Target.PrimaryIdentification,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: "Application for Permit, Driver License or Non-Driver ID Card",
      id: "MV 44",
      filename: "NewYork/Primary ID MV44.pdf",
      guide: NewYorkDMVGuide,
      map: primaryIDNewYorkMap,
    },
    {
      name: "Vehicle Registration/Title of Application",
      id: "MV 82",
      filename: "NewYork/Primary ID Vehicle Title MV82.pdf",
      map: vehicleRegistrationMap,
    },
  ],
};

export const newyorkBirthRecord: Process = {
  jurisdiction: "NY",
  target: Target.BirthRecord,
  depends: [Target.NameChange],
  documents: [
    {
      name: "Birth Certificate",
      guide: NewYorkBirthCertificateGuide,
    },
    {
      name: "Application for Amendment of Certificate of Birth for Gender Designation for an Adult",
      id: "DOH 5305",
      filename: "NewYork/BC Update 17 and up NY State.pdf",
      map: birthCertAdultNYStateMap,
      include: (applicant) =>
        !isMinor(applicant) && !(applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Parent/Legal Guardian Application for Amendment of Certificate of Birth for Gender Designation for a Minor",
      id: "DOH 5306",
      filename: "NewYork/BC Update 17 and up NY State.pdf",
      map: birthCertMinorNYStateMap,
      include: (applicant) =>
        isMinor(applicant) && !(applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond")
    },
    {
      name: "Application for the Correction of a NYC Birth Certificate",
      id: "VR 172",
      filename: "NewYork/BC Update NYC.pdf",
      map: birthCertNYCMap,
      include: (applicant) =>
        applicant.residentCounty === "Bronx" ||
        applicant.residentCounty === "Kings" ||
        applicant.residentCounty === "New York" ||
        applicant.residentCounty === "Queens" ||
        applicant.residentCounty === "Richmond"
    },
  ],
  isBirth: true,
};

export const newyorkPostamble: Process = {
  jurisdiction: "NY",
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: NewYorkEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: NewYorkResourcesGuide,
    },
  ],
};

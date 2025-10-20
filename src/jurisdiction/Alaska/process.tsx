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

//import { isMinor } from "../../lib/util";

import {
  //adultNamePetitionAlaskaMap,
  //minorNamePetitionAlaskaMap,
  //nonpetitionParentalConsentAlaskaMap,
  //applicationNameAlaskaMap,
  //adultWaivePublicationAlaskaMap,
  //minorWaivePublicationAlaskaMap,
  //feeWaiverAlaskaMap,
  //additionalServiceAlaskaMap,
  primaryIDAlaskaMap,
  primaryIDSexDesignationAlaskaMap,
  birthCertRequestAlaskaMap,
} from "./maps";

//import AlaskaAdultPetitionGuide from "../../components/guides/Alaska/AdultPetition";
import AlaskaBirthCertificateGuide from "../../components/guides/Alaska/BirthCertificate";
//import AlaskaCIV695Guide from "../../components/guides/Alaska/CIV695";
//import AlaskaCIV708Guide from "../../components/guides/Alaska/CIV708";
//import AlaskaCIV709Guide from "../../components/guides/Alaska/CIV709";
//import AlaskaCourtHearingGuide from "../../components/guides/Alaska/CourtHearing";
import AlaskaDMVGuide from "../../components/guides/Alaska/DMV";
import AlaskaEverythingElseGuide from "../../components/guides/Alaska/EverythingElse";
//import AlaskaFeeWaiverGuide from "../../components/guides/Alaska/FeeWaiver";
//import AlaskaFilingInitialFormsGuide from "../../components/guides/Alaska/FilingInitialForms";
//import AlaskaMinorPetitionGuide from "../../components/guides/Alaska/MinorPetition";
import AlaskaResourcesGuide from "../../components/guides/Alaska/Resources";
//import AlaskaVS405Guide from "../../components/guides/Alaska/VS405";

import { type AlaskaAdministrativeDivision } from "../../types/locality";

import { type Process, Target } from "../../types/process";

export const alaskaNameChange: Process<AlaskaAdministrativeDivision> = {
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    /**
    {
      name: "Petition for Change of Name",
      id: "CIV 700",
      filename: "Alaska/Petition for Change of Name Adult.pdf",
      guide: AlaskaAdultPetitionGuide,
      map: adultNamePetitionAlaskaMap,
      include: (applicant) => !isMinor(applicant),
    },
    {
      name: "Petition to Change Child's Name",
      id: "CIV 694",
      filename: "Alaska/Petition for Change of Name Minor.pdf",
      guide: AlaskaMinorPetitionGuide,
      map: minorNamePetitionAlaskaMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Parental Consent from Non-Petitioning Parent",
      id: "CIV 695",
      filename: "Alaska/Non-petitioning Parental Consent.pdf",
      guide: AlaskaCIV695Guide,
      map: nonpetitionParentalConsentAlaskaMap,
      include: (applicant) => isMinor(applicant),
    },
    {
      name: "Application for Legal Name Change",
      id: "VS 405",
      filename: "Alaska/Application for Legal Name Change.pdf",
      guide: AlaskaVS405Guide,
      map: applicationNameAlaskaMap,
    },
    {
      name: "Request to Waive Posting in Adult Change of Name Case",
      id: "CIV 708",
      filename: "Alaska/Waive Publication Adult.pdf",
      guide: AlaskaCIV708Guide,
      map: adultWaivePublicationAlaskaMap,
      include: (applicant) =>
        isMinor(applicant) && applicant.doNotPublish === true,
    },
    {
      name: "Request to Waive Posting in Child's Change of Name Case",
      id: "CIV 709",
      filename: "Alaska/Waive Publication Minor.pdf",
      guide: AlaskaCIV709Guide,
      map: minorWaivePublicationAlaskaMap,
      include: (applicant) =>
        isMinor(applicant) && applicant.doNotPublish === true,
    },
    {
      name: "Request for Exemption from Payment of Fees",
      id: "TF 920",
      filename: "Alaska/Fee Waiver.pdf",
      guide: AlaskaFeeWaiverGuide,
      map: feeWaiverAlaskaMap,
    },
    {
      name: "Filing Initial Documents",
      guide: AlaskaFilingInitialFormsGuide,
    },
    {
      name: "Court Hearing",
      guide: AlaskaCourtHearingGuide,
    },
    {
      name: "Affidavit of Additional Service",
      id: "CIV 702",
      filename: "Alaska/Affidavit of Additional Service.pdf",
      map: additionalServiceAlaskaMap,
    },
   */
  ],
};

/** This process is empty because Alaska has no solo
 * Gender Marker forms or processes but without a
 * Gender Marker process the isChangingLegalSex variable
 * reads false.*/
export const alaskaGenderMarker: Process<AlaskaAdministrativeDivision> = {
  target: Target.GenderMarker,
  documents: [],
};

export const alaskaPrimaryIdentification: Process<AlaskaAdministrativeDivision> =
  {
    target: Target.PrimaryIdentification,
    depends: [Target.NameChange, Target.GenderMarker],
    documents: [
      {
        name: "Drivers License, Permit, or Identification Card Transaction Application",
        id: "D1",
        filename: "Alaska/Primary ID.pdf",
        guide: AlaskaDMVGuide,
        map: primaryIDAlaskaMap,
      },
      {
        name: "Certification for Change of Sex Designator on Driver License or Identification Card",
        id: "427",
        filename: "Alaska/Primary ID Sex Designation Change.pdf",
        map: primaryIDSexDesignationAlaskaMap,
        include: (applicant) => applicant.isChangingLegalSex === true,
      },
    ],
  };

export const alaskaBirthRecord: Process<AlaskaAdministrativeDivision> = {
  target: Target.BirthRecord,
  depends: [
    Target.NameChange,
    Target.PrimaryIdentification,
    Target.SocialSecurity,
  ],
  documents: [
    {
      name: "Birth Certificate",
      guide: AlaskaBirthCertificateGuide,
    },
    {
      name: "Alaska Birth Certificate Request Form",
      filename: "Alaska/Birth Cert Name Change.pdf",
      map: birthCertRequestAlaskaMap,
    },
    {
      name: "Gender Change Template Letter",
      filename: "Alaska/Alaska Gender Change Letter.pdf",
      include: (applicant) => applicant.isChangingLegalSex === true,
    },
  ],
  isBirth: true,
};

export const alaskaPostamble: Process<AlaskaAdministrativeDivision> = {
  target: Target.BirthRecord,
  depends: [Target.PrimaryIdentification, Target.Passport],
  documents: [
    {
      name: "Everything Else",
      guide: AlaskaEverythingElseGuide,
    },
    {
      name: "Resources",
      guide: AlaskaResourcesGuide,
    },
  ],
  isJustGuide: true,
};

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
    formatDate,
    fullName,
    isMinor,
    numericalAge,
    phoneAreaCode,
    phoneEnd,
    phoneStart,
    abbreviateJurisdiction,
    representativeName,
  } from "../../lib/util";
  
  import {
    GenderMarker,
    isEmptyName,
    DateFormatPart as DATE,
  } from "../../types/types";
  import { Formfill } from "../../types/formfill";
  
  // Maps appear in the order they will be collated.
  // State/NYC forms come first, in the order they should be filed;
  // then state documents (which need no map information);

  /**
 * Petition for Change of Name Adult (Alaska form CIV-700.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
  export const adultNamePetitionAlaskaMap: Formfill[] = [
    {
        text: (applicant) => applicant.residentCounty,
        field: "courtLocation",
    },
    {
        text: (applicant) => fullName(applicant.legalName),
        field: "legalName",
    },
    {
        text: (applicant) => formatDate(applicant.birthdate, 
          {format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: "/", }),
          field: "DOB",
    },
    {
        text: (applicant) => applicant.legalName?.first,
        field: "firstName",
    },
    {
        text: (applicant) => applicant.legalName?.middle,
        field: "middleName",
    },
    {
        text: (applicant) => applicant.legalName?.last,
        field: "lastName",
    },
    /** There's a checkbox that needs closer scruitiny here, my attempt is below.*/
    {
        check: (applicant) => isEmptyName(applicant.birthName),
        field: "currentLegalN",
    },
    {
        check: (applicant) => !isEmptyName(applicant.birthName),
        field: "currentLegalN",
    },
    {
        text: (applicant) => isEmptyName(applicant.birthName) ? 
          applicant.legalName?.first : applicant.birthName?.first,
          field: "firstName0",
    },
    {
        text: (applicant) => isEmptyName(applicant.birthName) ? 
          applicant.legalName?.middle : applicant.birthName?.middle,
          field: "middleName0",
    },
    {
        text: (applicant) => isEmptyName(applicant.birthName) ? 
          applicant.legalName?.last : applicant.birthName?.last,
          field: "lastName0",
    },
    {
        text: (applicant) => applicant.chosenName?.first,
        field: "firstName1",
    },
    {
        text: (applicant) => applicant.chosenName?.middle,
        field: "middleName1",
    },
    {
        text: (applicant) => applicant.chosenName?.last,
        field: "lastName1",
    },
    {
        text: (applicant) => applicant.reasonForNameChange,
        field: "reasonForNameChange",
    },
    {
        text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
            && ", " && applicant.residentJurisdiction && " " && applicant.zip,
            field: "mailingAddress",
    },
    {
        text: (applicant) => applicant.phone,
        field: "daytimePhone",
    },
    {
        text: (applicant) => applicant.email,
        field: "email",
    },
  ];

/**
 * Petition for Change of Name Minor (Alaska form CIV-694.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const minorNamePetitionAlaskaMap: Formfill[] = [
        {
            text: (applicant) => fullName(applicant.representativeName),
            field: "namePetitioner",
        },
        {
            text: (applicant) => applicant.residentCounty,
            field: "courtLocation",
        },
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "legalName",
        },
        {
            text: (applicant) => formatDate(applicant.birthdate, 
              {format: [DATE.MONTH, DATE.DAY, DATE.YEAR], separator: "/", }),
              field: "DOB",
        },
        {
            text: (applicant) => fullName(applicant.representativeName),
            field: "By",
        },
        {
            text: (applicant) => applicant.legalName?.first,
            field: "firstName",
        },
        {
            text: (applicant) => applicant.legalName?.middle,
            field: "middleName",
        },
        {
            text: (applicant) => applicant.legalName?.last,
            field: "lastName",
        },
        {
            check: (applicant) => isEmptyName(applicant.birthName),
            field: "childsCurrentName",
        },
        {
            check: (applicant) => !isEmptyName(applicant.birthName),
            field: "childsCurrentName",
        },
        {
            text: (applicant) => applicant.birthName?.first,
            field: "firstName0",
        },
        {
            text: (applicant) => applicant.birthName?.middle,
            field: "middleName0",
        },
        {
            text: (applicant) => applicant.birthName?.last,
            field: "lastName0",
        },
        {
            text: (applicant) => applicant.chosenName?.first,
            field: "firstName1",
        },
        {
            text: (applicant) => applicant.chosenName?.middle,
            field: "middleName1",
        },
        {
            text: (applicant) => applicant.chosenName?.last,
            field: "lastName1",
        },
        {
            text: (applicant) => applicant.reasonForNameChange,
            field: "reasonForNameChange",
        },
        {
            text: (applicant) => fullName(applicant.representativeName),
            loc: { page: 6, x: 855, y: 1120 },
        },
    ];

/**
 * Parental Consent from Non-Petitioning Parent (Alaska form CIV-695.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
export const nonpetitionParentalConsentAlaskaMap: Formfill[] = [
    {
        text: (applicant) => applicant.residentCounty,
        field: "courtLocations",
    },
    {
        text: (applicant) => fullName(applicant.legalName),
        field: "minor",
    },
    {
        text: (applicant) => fullName(applicant.representativeName),
        field: "guardian",
    },
    {
        text: (applicant) => fullName(applicant.chosenName),
        field: "nameOf",
    },
];

/**
 * Application for Legal Name Change (Alaska form VS-405.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const applicationNameAlaskaMap: Formfill[] = [
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.first : applicant.birthName?.first,
                loc: { x: 370, y: 750 },
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.middle : applicant.birthName?.middle,
                loc: { x: 370, y: 810 },
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.last : applicant.birthName?.last,
                loc: { x: 370, y: 867 },
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.suffix : applicant.birthName?.suffix,
                loc: { x: 1440, y: 867 },
        },
        {
            text: (applicant) =>
              formatDate(applicant.birthdate, {
                format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
                separator: "/",
              }),
            loc: { x: 375, y: 925 },
        },
        {
            text: (applicant) => applicant.birthJurisdiction,
            loc: { x: 870, y: 925 },
        },
        {
            text: (applicant) => applicant.birthCity,
            loc: { x: 1415, y: 925 },
        },
        {
            text: (applicant) => fullName(applicant.fathersBirthName),
            loc: { x: 450, y: 985 },
        },
        {
            text: (applicant) => fullName(applicant.mothersBirthName),
            loc: { x: 535, y: 1050 },
        },
        {
            text: (applicant) => fullName(applicant.legalName),
            loc: { x: 100, y: 1190 },
        },
        {
            text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
            && ", " && applicant.residentJurisdiction && " " && applicant.zip,
            loc: { x: 870, y: 1190 },
        },
        {
            text: (applicant) => applicant.phone,
            loc: { x: 100, y: 1275 },
        },
        {
            text: (applicant) => applicant.email,
            loc: { x: 870, y: 1275 },
        },
    ];

/**
 * Request to Waive Publication Adult (Alaska form CIV-708.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const adultWaivePublicationAlaskaMap: Formfill[] = [
        {
            text: (applicant) => applicant.residentCounty,
            field: "location",
        },
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "ITMO",
        },
        {
            text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
                && ", " && applicant.residentJurisdiction && " " && applicant.zip,
                field: "mailing",
        },
        {
            text: (applicant) => applicant.phone,
            field: "myPhone",
        },
        {
            text: (applicant) => applicant.email,
            field: "myEmail",
        },
    ];

/**
 * Request to Waive Publication Minor (Alaska form CIV-709.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const minorWaivePublicationAlaskaMap: Formfill[] = [
        {
            text: (applicant) => applicant.residentCounty,
            field: "location",
        },
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "ITMO",
        },
        {
            text: (applicant) => fullName(applicant.representativeName),
            field: "petitioner",
        },
        {
            text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
                && ", " && applicant.residentJurisdiction && " " && applicant.zip,
                field: "mailing",
        },
        {
            text: (applicant) => applicant.phone,
            field: "myPhone",
        },
        {
            text: (applicant) => applicant.email,
            field: "myEmail",
        },
    ];

/**
 * Request for Exemption from Fees (Alaska form TF-920.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const feeWaiverAlaskaMap: Formfill[] = [
        {
            text: (applicant) => applicant.residentCounty,
            field: "location",
        },
        {
            text: (applicant) => isMinor(applicant) ? 
            fullName(applicant.representativeName) : fullName(applicant.legalName),
            field: "plaintiff",
        },
        {
            text: (applicant) => isMinor(applicant) ? 
            fullName(applicant.representativeName) : fullName(applicant.legalName),
            field: "requestor",
        },
        {
            check: () => true,
            field: "filingFee",
        },
    ];

/**
 * Affidavit of Additional Service (Alaska form CIV-702.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const additionalServiceAlaskaMap: Formfill[] = [
        {
            text: (applicant) => applicant.residentCounty,
            field: "enter court location here",
        },
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "enter name here",
        },
        /** Adult/Minor radio buttons here. */
        {
            text: (applicant) => isMinor(applicant) ? 
            fullName(applicant.representativeName) : fullName(applicant.legalName),
            field: "yourName",
        },
        {
            text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
                && ", " && applicant.residentJurisdiction && " " && applicant.zip,
                field: "mailingAddress",
        },
    ];

    /**
 * Drivers License, Permit, or ID Card (Alaska form D-1.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const primaryIDAlaskaMap: Formfill[] = [
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "Text1",
        },
        {
            text: (applicant) =>
              formatDate(applicant.birthdate, {
                format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
                separator: "/",
              }),
            field: "Text3",
        },
        {
            text: (applicant) => (applicant.assignedSex === GenderMarker.M ? "Male" : ""),
            field: "Text5",
        },
        {
            text: (applicant) => (applicant.assignedSex === GenderMarker.F ? "Female" : ""),
            field: "Text5",
        },
        {
            text: (applicant) => applicant.email,
            field: "Text10",
        },
        {
            text: (applicant) => applicant.phone,
            field: "Text11",
        },
        {
            text: (applicant) => applicant.birthCity && ", " 
                && applicant.birthJurisdiction,
                field: "Text12",
        },
        {
            text: (applicant) => applicant.streetAddress && " " && applicant.residentCity
                && ", " && applicant.residentJurisdiction && " " && applicant.zip,
                field: "Text15",
        },
        {
            check: (applicant) => !isEmptyName(applicant.birthName),
            field: "Check Box41",
        },
        {
            check: (applicant) => isEmptyName(applicant.birthName),
            field: "Check Box42",
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ?
                "" : fullName(applicant.birthName),
                field: "Text43",
        },
        {
            text: (applicant) => isMinor(applicant) ? 
                fullName(applicant.representativeName) : "",
                field: "Text64",
        },
    ];

/**
 * Change of Sex Designator on Drivers License or ID Card (Alaska form 427.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const primaryIDSexDesignationAlaskaMap: Formfill[] = [
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "First Middle Last Suffix",
        },
        {
            text: (applicant) =>
              formatDate(applicant.birthdate, {
                format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
                separator: "/",
              }),
            field: "Date of Birth",
        },
        /** Radio Button genders here. */
        {
            text: (applicant) => fullName(applicant.legalName),
            field: "Printed Name",
        },
    ];

/**
 * Alaska Birth Certificate Request (Alaska form unnumbered.)
 * Updated 7/2024.
 * @type {Formfill[]}
 */
    export const birthCertRequestAlaskaMap: Formfill[] = [
        {
            text: (applicant) => isMinor(applicant) ? 
                fullName(applicant.representativeName) : 
                fullName(applicant.legalName),
                field: "Applicant Name",
        },
        {
            check: (applicant) => !isMinor(applicant),
            field: "Self",
        },
        {
            text: (applicant) => applicant.email,
            field: "Email address",
        },
        {
            text: (applicant) => applicant.phone,
            field: "Phone number",
        },
        {
            check: (applicant) => !isMinor(applicant),
            field: "Self",
        },
        {
            check: () => true,
            field: "Other",
        },
        {
            text: () => "Updating Info",
            field: "Other Purpose",
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.first : applicant.birthName?.first,
                field: "Child first name",
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.middle : applicant.birthName?.middle,
                field: "Child middle name",
        },
        {
            text: (applicant) => isEmptyName(applicant.birthName) ? 
                applicant.legalName?.last : applicant.birthName?.last,
                field: "Child last name",
        },
        {
            text: (applicant) =>
              formatDate(applicant.birthdate, {
                format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
                separator: "/",
              }),
            field: "Date of birth",
        },
        {
            text: (applicant) => applicant.birthCity,
            field: "City or village of birth",
        },
        {
            text: (applicant) => applicant.mothersBirthName?.first,
            field: "Parent A first name",
        },
        {
            text: (applicant) => applicant.mothersBirthName?.middle,
            field: "Parent A middle name",
        },
        {
            text: (applicant) => applicant.mothersBirthName?.last,
            field: "Parent A last name",
        },
        {
            text: (applicant) => applicant.fathersBirthName?.first,
            field: "Parent B first name",
        },
        {
            text: (applicant) => applicant.fathersBirthName?.middle,
            field: "Parent B middle name",
        },
        {
            text: (applicant) => applicant.fathersBirthName?.last,
            field: "Parent B last name",
        },
        {
            text: () => "1",
            field: "Amendment",
        },
        {
            text: () => "30",
            field: "Amendment Fee",
        },
    ];
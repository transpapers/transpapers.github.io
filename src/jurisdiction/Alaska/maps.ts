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
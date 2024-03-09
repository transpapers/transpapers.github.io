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
  phoneAreaCode,
  phoneStart,
  phoneEnd,
  abbreviateJurisdiction,
  isMinor,
  representativeName,
} from '../../lib/util';

import { GenderMarker, DateFormatPart as DATE } from '../../types/types';
import { Formfill } from '../../types/formfill';

/**
 * Application for a Social Security Card (federal form SS-5.)
 * @type {Formfill[]}
 */
export const ssnMap: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.first ?? '',
    field: 'topmostSubform[0].Page5[0].firstname[0]',
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? '',
    field: 'topmostSubform[0].Page5[0].Middlename[0]',
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? '',
    field: 'topmostSubform[0].Page5[0].LastName[0]',
  },
  {
    text: (applicant) => applicant.legalName?.first ?? '',
    field: 'topmostSubform[0].Page5[0].firstdiffname[0]',
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? '',
    field: 'topmostSubform[0].Page5[0].Middlediffname[0]',
  },
  {
    text: (applicant) => applicant.legalName?.last ?? '',
    field: 'topmostSubform[0].Page5[0].Lastdiffname[0]',
  },
  {
    text: (applicant) => applicant.birthCity,
    field: 'topmostSubform[0].Page5[0].cityofbirth[0]',
  },
  {
    text: (applicant) => applicant.birthJurisdiction,
    field: 'topmostSubform[0].Page5[0].stateatbirth[0]',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'topmostSubform[0].Page5[0].DateTimeField1[0]',
  },
  { check: () => true, field: 'topmostSubform[0].Page5[0].citizenship[0]' },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    field: 'topmostSubform[0].Page5[0].Gender[0]',
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    field: 'topmostSubform[0].Page5[0].Gender[1]',
  },
  {
    text: (applicant) => applicant.mothersBirthName?.first ?? '',
    field: 'topmostSubform[0].Page5[0].mothersfirstname[0]',
  },
  {
    text: (applicant) => applicant.mothersBirthName?.middle ?? '',
    field: 'topmostSubform[0].Page5[0].mothersmiddlename[0]',
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? '',
    field: 'topmostSubform[0].Page5[0].motherslastname[0]',
  },
  {
    text: (applicant) => applicant.fathersBirthName?.first ?? '',
    field: 'topmostSubform[0].Page5[0].fathersfirstname[0]',
  },
  {
    text: (applicant) => applicant.fathersBirthName?.middle ?? '',
    field: 'topmostSubform[0].Page5[0].fathersmiddlename[0]',
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? '',
    field: 'topmostSubform[0].Page5[0].fatherslastname[0]',
  },
  { check: () => true, field: 'topmostSubform[0].Page5[0].ssnbefore[0]' },
  {
    text: (applicant) => applicant.legalName?.first ?? '',
    field: 'topmostSubform[0].Page5[0].firstnameonrecentcard[0]',
  },
  {
    text: (applicant) => applicant.legalName?.middle ?? '',
    field: 'topmostSubform[0].Page5[0].middlenameonrecentcard[0]',
  },
  {
    text: (applicant) => applicant.legalName?.last ?? '',
    field: 'topmostSubform[0].Page5[0].lastnameonrecentcard[0]',
  },
  {
    text: () => new Date().toLocaleDateString(),
    field: 'topmostSubform[0].Page5[0].DateTimeField2[1]',
  },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: 'topmostSubform[0].Page5[0].areacode[0]',
  },
  {
    text: (applicant) => phoneStart(applicant.phone) + phoneEnd(applicant.phone),
    field: 'topmostSubform[0].Page5[0].phonenumber[0]',
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: 'topmostSubform[0].Page5[0].streetaddress[0]',
  },
  {
    text: (applicant) => applicant.residentCity,
    field: 'topmostSubform[0].Page5[0].mailingcity[0]',
  },
  {
    text: (applicant) => applicant.residentJurisdiction,
    field: 'topmostSubform[0].Page5[0].state[0]',
  },
  {
    text: (applicant) => applicant.zip,
    field: 'topmostSubform[0].Page5[0].zipcode[0]',
  },
  {
    check: (applicant) => !isMinor(applicant),
    field: 'topmostSubform[0].Page5[0].relationship[0]',
  },
  {
    check: (applicant) => isMinor(applicant) && applicant.parentsAreOkay,
    field: 'topmostSubform[0].Page5[0].relationship[1]',
  },
];

/**
 * Application for a Passport (federal form DS 5504.)
 * @type {Formfill[]}
 */
export const ds5504Map: Formfill[] = [
  { text: () => 'X', loc: { x: 38, y: 278 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? '',
    field: 'App Name Last',
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? '',
    field: 'App First',
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? '',
    field: 'App Middle',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: '' }),
    field: 'App DOB MM',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.DAY], separator: '' }),
    field: 'App DOB DD',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: '' }),
    field: 'App DOB YYYY',
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    loc: { page: 4, x: 283, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    loc: { page: 4, x: 301, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    loc: { page: 4, x: 319, y: 298 },
  },
  { check: () => true, field: 'Yes' },
  {
    text: (applicant) => `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    field: 'App Place of Birth',
  },
  { text: (applicant) => applicant.email, field: 'App Email' },
  { text: (applicant) => phoneAreaCode(applicant.phone), field: 'App Phone 1' },
  { text: (applicant) => phoneStart(applicant.phone), field: 'App Phone 2' },
  { text: (applicant) => phoneEnd(applicant.phone), field: 'App Phone 3' },
  {
    text: (applicant) => applicant.streetAddress,
    field: 'App Mailing Address Line 1 Street RFD PO Box or URB',
  },
  {
    text: (applicant) => (isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : ''),
    field: 'App Mailing Address Line 2',
  },
  { text: (applicant) => applicant.residentCity, field: 'App Mailing City' },
  {
    text: (applicant) => abbreviateJurisdiction(applicant.residentJurisdiction || '') || '',
    field: 'App Mailing State',
  },
  { text: (applicant) => applicant.zip, field: 'App Mailing Zip' },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: 'App List all other name you have used',
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field:
      'Your name as printed on your most recent U.S. passport book and/or passport card',
  },
  {
    text: (applicant) => `${applicant.chosenName?.last ?? ''} ${applicant.chosenName?.first ?? ''} ${applicant.chosenName?.middle ?? ''}`,
    field: 'Name of Applicant 2',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'Date of Birth',
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    loc: { page: 5, x: 120, y: 592 },
  },
  {
    text: (applicant) => applicant.chosenName?.last ?? '',
    field: 'Changed Last Name',
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? '',
    field: 'Changed First',
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? '',
    field: 'Changed Middle',
  },
];

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map: Formfill[] = [
  { text: () => 'X', loc: { x: 38, y: 260 } },
  { text: () => 'X', loc: { x: 38, y: 295 } },
  { text: () => 'X', loc: { x: 38, y: 328 } },
  { text: () => 'X', loc: { x: 38, y: 489 } },
  {
    text: (applicant) => applicant.chosenName?.last ?? '',
    field: 'App Name Last',
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? '',
    field: 'App First',
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? '',
    field: 'App Middle',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: '' }),
    field: 'App DOB MM',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.DAY], separator: '' }),
    field: 'App DOB DD',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: '' }),
    field: 'App DOB YYYY',
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    loc: { page: 4, x: 283, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    loc: { page: 4, x: 301, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    loc: { page: 4, x: 319, y: 298 },
  },
  { check: () => true, field: 'Yes' },
  {
    text: (applicant) => `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    field: 'App Place of Birth',
  },
  { text: (applicant) => applicant.email, field: 'App Email' },
  { text: (applicant) => phoneAreaCode(applicant.phone), field: 'App Phone 1' },
  { text: (applicant) => phoneStart(applicant.phone), field: 'App Phone 2' },
  { text: (applicant) => phoneEnd(applicant.phone), field: 'App Phone 3' },
  {
    text: (applicant) => applicant.streetAddress,
    field: 'App Mailing Address Line 1',
  },
  {
    text: (applicant) => (isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : ''),
    field: 'App Mailing Address Line 2',
  },
  {
    text: (applicant) => applicant.residentCity,
    field: 'App Mailing Address City',
  },
  {
    text: (applicant) => abbreviateJurisdiction(applicant.residentJurisdiction || '') || '',
    field: 'App Mailing Address State',
  },
  { text: (applicant) => applicant.zip, field: 'App Mailing Address Zip Code' },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: 'App List all other name you have used',
  },
  {
    text: (applicant) => fullName(applicant.legalName),
    field:
      'Your name as printed on your most recent U.S. passport book and/or passport card',
  },
  { check: () => true, field: 'Changed by Court Order' },
  /** Place name change location (city/state format) here */
  {
    text: (applicant) => `${applicant.chosenName?.last ?? ''} ${applicant.chosenName?.first ?? ''} ${applicant.chosenName?.middle ?? ''}`,
    field: 'Name of Applicant (Last, First, Middle) 2',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'Date of Birth 2',
  },
];

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map: Formfill[] = [
  {
    text: (applicant) => applicant.chosenName?.last ?? '',
    field: 'Applicant Last Name',
  },
  {
    text: (applicant) => applicant.chosenName?.first ?? '',
    field: 'Applicant First Name',
  },
  {
    text: (applicant) => applicant.chosenName?.middle ?? '',
    field: 'Applicant Middle Name',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.MONTH], separator: '' }),
    field: 'Applicant DOB M',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.DAY], separator: '' }),
    field: 'Applicant DOB D',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, { format: [DATE.YEAR], separator: '' }),
    field: 'Applicant DOB Y',
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.M,
    loc: { page: 4, x: 283, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.F,
    loc: { page: 4, x: 301, y: 298 },
  },
  {
    check: (applicant) => applicant.gender === GenderMarker.X,
    loc: { page: 4, x: 319, y: 298 },
  },
  {
    text: (applicant) => `${applicant.birthCity} ${applicant.birthJurisdiction}`,
    field: 'Applicant Place of Birth',
  },
  { text: (applicant) => applicant.email, field: 'Applicant Email' },
  {
    text: (applicant) => phoneAreaCode(applicant.phone),
    field: 'Applicant Phone 1',
  },
  {
    text: (applicant) => phoneStart(applicant.phone),
    field: 'Applicant Phone 2',
  },
  {
    text: (applicant) => phoneEnd(applicant.phone),
    field: 'Applicant Phone 3',
  },
  {
    text: (applicant) => applicant.streetAddress,
    field: 'Applicant Address Street',
  },
  {
    text: (applicant) => (isMinor(applicant)
      ? `In Care Of - ${fullName(representativeName(applicant))}`
      : ''),
    field: 'Address Line 2',
  },
  {
    text: (applicant) => applicant.residentCity,
    field: 'Applicant Address CIty',
  },
  {
    text: (applicant) => abbreviateJurisdiction(applicant.residentJurisdiction || '') || '',
    field: 'Applicant Address State',
  },
  { text: (applicant) => applicant.zip, field: 'Applicant Address Zip Code' },
  {
    text: (applicant) => fullName(applicant.legalName),
    field: 'List all other name you have used',
  },
  {
    text: (applicant) => `${applicant.chosenName?.last ?? ''} ${applicant.chosenName?.first ?? ''} ${applicant.chosenName?.middle ?? ''}`,
    field: 'Name of Applicant 2',
  },
  {
    text: (applicant) => formatDate(applicant.birthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'Applicant DOB 2',
  },
  {
    text: (applicant) => `${applicant.mothersBirthName?.first ?? ''} ${applicant.mothersBirthName?.middle ?? ''}`,
    field: 'Parent 1 FM Name',
  },
  {
    text: (applicant) => applicant.mothersBirthName?.last ?? '',
    field: 'Parent 1 Last Name',
  },
  {
    text: (applicant) => formatDate(applicant.mothersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'Parent 1 DOB',
  },
  {
    text: (applicant) => `${applicant.fathersBirthName?.first ?? ''} ${applicant.fathersBirthName?.middle ?? ''}`,
    field: 'Parent 2 FM Name',
  },
  {
    text: (applicant) => applicant.fathersBirthName?.last ?? '',
    field: 'Parent 2 Last Name',
  },
  {
    text: (applicant) => formatDate(applicant.fathersBirthdate, {
      format: [DATE.MONTH, DATE.DAY, DATE.YEAR],
      separator: '/',
    }),
    field: 'Parent 2 DOB',
  },
];

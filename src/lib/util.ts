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

import { Name, DateFormat, DateFormatPart } from "../types/types";
import { Person } from "../types/person";

export function abbreviateJurisdiction(
  jurisdiction: string,
): string | undefined {
  const map: { [name: string]: string } = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    "District of Columbia": "DC",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
    "American Samoa": "AS",
    Guam: "GU",
    "Northern Mariana Islands": "MP",
    "Puerto Rico": "PR",
    "US Virgin Islands": "VI",
    "US Minor Outlying Islands": "UM",
  };

  return map[jurisdiction];
}

/**
 * Calculate a person's numerical age from their birthdate, as a string.
 * Since a "date of birth" is a legal fiction and not a timestamp, we can do
 * this without resorting to any funky time nonsense.
 * @param {string} birthdate - DOB, formatted as YYYY-MM-DD.
 * @return {number}
 */
export function numericalAge(birthdate: string): number {
  if (!birthdate) {
    return Infinity;
  }
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;
  const thisDay = new Date().getDay();
  const birthYear = Number.parseInt(birthdate.substring(0, 4), 10);
  const birthMonth = Number.parseInt(birthdate.substring(5, 7), 10);
  const birthDay = Number.parseInt(birthdate.substring(8), 10);

  if (thisMonth < birthMonth) {
    return thisYear - birthYear - 1;
  }

  if (thisMonth === birthMonth && thisDay < birthDay) {
    return thisYear - birthYear - 1;
  }

  return thisYear - birthYear;
}

/**
 * Format a Date as a string
 * @param {string} date - date, formatted as YYYY-MM-DD.
 * @param {DateFormat} fmt - Ugh
 * @return {string}
 */
export function formatDate(date: string | undefined, fmt: DateFormat): string {
  if (!date || !fmt) {
    return "";
  }

  const year = Number.parseInt(date.substring(0, 4), 10);
  const month = Number.parseInt(date.substring(5, 7), 10);
  const day = Number.parseInt(date.substring(8), 10);

  return fmt.format
    .map((part) => {
      if (part === DateFormatPart.MONTH) {
        return month;
      }

      if (part === DateFormatPart.DAY) {
        return day;
      }

      if (part === DateFormatPart.YEAR) {
        return year;
      }

      return "";
    })
    .join(fmt.separator);
}

export function phoneAreaCode(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }
  return phoneNumber.substring(0, 4);
}

/** Split phone number into first three digits */
export function phoneStart(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }
  return phoneNumber.substring(4, 7);
}

/** Split phone number into last 4 digits */
export function phoneEnd(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }
  return phoneNumber.substring(7);
}

/**
 * Format a full `name` as a string.
 * @param {Name} name
 * @return {string}
 */
export function fullName(name: Name | undefined): string {
  if (!name) {
    return "";
  }
  return [name.first, name.middle, name.last, name.suffix]
    .filter((n) => n && n.length > 0)
    .join(" ");
}

/**
 * Determine whether a person is a minor (i.e., under 18.)
 * @param {Person} applicant
 * @return {boolean}
 */
export function isMinor(applicant: Person): boolean {
  if (!applicant) {
    return false;
  }

  if (applicant.age !== undefined) {
    return applicant.age < 18;
  }

  // Age was not set.
  if (applicant.birthdate === undefined) {
    return false;
  }

  return numericalAge(applicant.birthdate) < 18;
}

/**
 * Return the legal name of a person's legal representative (themself or their
 * parent/guardian) from the given `data`.
 * @param {Person} applicant
 * @return {Name}
 */
export function representativeName(applicant: Person): Name {
  if (!isMinor(applicant) && applicant.legalName) {
    return applicant.legalName;
  }

  if (applicant.representativeName) {
    return applicant.representativeName;
  }

  return {
    first: "",
    middle: "",
    last: "",
    suffix: "",
  };
}

/**
 * Return a person's full contact info, i.e., full name, street address, and phone.
 * @param {Person} applicant
 * @return {string}
 */
export function fullContactInfo(applicant: Person, separator = "\n"): string {
  const lines = [
    fullName(representativeName(applicant)),
    applicant.streetAddress,
    `${applicant.residentCity}, ${applicant.residentJurisdiction} ${applicant.zip}`,
    applicant.phone,
  ];

  return lines.join(separator);
}

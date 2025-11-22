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

import {
  Name,
  DateFormat,
  DateFormatPart,
  NameFormat,
  NameFormatPart,
} from "../types/types";
import { Person } from "../types/person";

import { parsePhoneNumber } from "react-phone-number-input";
import { allJurisdictions } from "../jurisdiction/all";
import { Jurisdiction } from "../types/jurisdiction";
import { AnyLocality } from "../types/generic";
import { 
  Locality,
  NewYorkCounty,
  RhodeIslandCityOrTown,
} from "../types/locality";

export function abbreviateJurisdiction(
  jurisdiction: string,
): string | undefined {
  
  if (jurisdiction === "") {
    return "";
  }

  const map: Record<string, string> = {
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

/*!
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

/*!
 * Format a Date as a string
 * @param {string} date - date, formatted as YYYY-MM-DD.
 * @param {DateFormat} fmt - Ugh
 * @return {string}
 */
export function formatDate(date: string | undefined, fmt: DateFormat): string {
  if (!date) {
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

      return year;
    })
    .join(fmt.separator);
}

function phoneDigits(phoneNumber: string): string {
  const phone = parsePhoneNumber(phoneNumber, { defaultCountry: "US" });
  if (phone) {
    return phone.nationalNumber.replaceAll(/[^\d]/g, "");
  } else {
    return "";
  }
}

export function phoneAreaCode(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }

  return phoneDigits(phoneNumber).substring(0, 3);
}

/** Split phone number into first three digits */
export function phoneStart(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }

  return phoneDigits(phoneNumber).substring(3, 6);
}

/** Split phone number into last 4 digits */
export function phoneEnd(phoneNumber: string | undefined): string {
  if (!phoneNumber) {
    return "";
  }

  return phoneDigits(phoneNumber).substring(6);
}

/*!
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

/*!
 * Determine whether a person is a minor (i.e., under 18.)
 * @param {Person} applicant
 * @return {boolean}
 */
export function isMinor(applicant: Partial<Person>): boolean {
  if (applicant.age !== undefined) {
    return applicant.age < 18;
  }

  // Age was not set.
  if (applicant.birthdate === undefined) {
    return false;
  }

  return numericalAge(applicant.birthdate) < 18;
}

/*!
 * Return the legal name of a person's legal representative (themself or their
 * parent/guardian) from the given `data`.
 * @param {Person} applicant
 * @return {Name}
 */
export function representativeName(applicant: Person): Name {
  if (!isMinor(applicant)) {
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

/*!
 * Find a jurisdiction given it's name.
 * @param {String} jurisdictionKey
 * @return {AnyJurisdiction | undefined}
 */
export function getJurisdiction(jurisdictionKey: string | undefined) {
  if (!jurisdictionKey) {
    return undefined;
  }

  const foundJurisdiction = allJurisdictions.find(
    (j) => j.name === jurisdictionKey,
  );

  return foundJurisdiction as Jurisdiction<Locality>;
}

/*!
 * Find a generic locality given it's name and the jurisdiction name.
 * @param {String} jurisdictionKey
 * @param {String} localityKey
 * @return {AnyLocality | undefined}
 */
export function getLocality(jurisdictionKey: string | undefined, localityKey: string | undefined): AnyLocality | undefined {
  if (!jurisdictionKey) {
    return undefined;
  }

  if (!localityKey) {
    return undefined;
  }

  const foundJurisdiction = allJurisdictions.find(
    (j) => j.name === jurisdictionKey,
  );

  if (!foundJurisdiction) {
    return undefined;
  }

  const localities = foundJurisdiction.localities;
  const foundLocality: AnyLocality = localities.find(
    (j) => j.name === localityKey,
  ) as AnyLocality;

  return foundLocality;
}

/*!
 * Get an RI locality object to pull RI specific properties for forms.
 * @param {String} jurisdictionKey
 * @param {String} localityKey
 * @return {RhodeIslandCityOrTown | undefined}
 */
export function getRILocality(jurisdictionKey: string | undefined, localityKey: string | undefined): RhodeIslandCityOrTown | undefined {
  if (!jurisdictionKey) {
    return undefined;
  }

  if (!localityKey) {
    return undefined;
  }

  const foundJurisdiction = allJurisdictions.find(
    (j) => j.name === jurisdictionKey,
  );

  if (!foundJurisdiction) {
    return undefined;
  }

  const localities = foundJurisdiction.localities;
  const foundLocality: RhodeIslandCityOrTown = localities.find(
    (j) => j.name === localityKey,
  ) as RhodeIslandCityOrTown;

  return foundLocality;
}

/*!
 * Get an NY locality object to pull NY specific properties for forms.
 * @param {String} jurisdictionKey
 * @param {String} localityKey
 * @return {NewYorkCounty | undefined}
 */
export function getNYLocality(jurisdictionKey: string | undefined, localityKey: string | undefined): NewYorkCounty | undefined {
  if (!jurisdictionKey) {
    return undefined;
  }

  if (!localityKey) {
    return undefined;
  }

  const foundJurisdiction = allJurisdictions.find(
    (j) => j.name === jurisdictionKey,
  );

  if (!foundJurisdiction) {
    return undefined;
  }

  const localities = foundJurisdiction.localities;
  const foundLocality: NewYorkCounty = localities.find(
    (j) => j.name === localityKey,
  ) as NewYorkCounty;

  return foundLocality;
}

/*!
 * Return a person's full contact info, i.e., full name, street address, and phone.
 * @param {Person} applicant
 * @return {string}
 */
export enum ContactFormat {
  BirthCityAndState,
  BirthCityStateCountry,
  BirthStateAndCountry,
  ResidentFullContactInfo,
  ResidentFullContactInfoAndCountry,
  ResidentFullAddress,
  ResidentFullAddressAndLocality,
  ResidentFullAddressAndCountry,
  ResidentCityAndState,
  ResidentLocalityAndState,
  ResidentCityAndStateAndZip,
  ResidentCityAndLocalityAndStateAndZip,
  ResidentCityAndStateAndZipAndCountry,
  MailCityAndStateAndZip,
  MailFullAddress,
}

export function formatContactInfo(
  applicant: Person,
  fmt: ContactFormat,
): string | undefined {
  const {
    birthCity,
    birthJurisdictionName,
    homeAddress,
    mailAddress,
    residentJurisdictionName,
    residentLocalityName,
    phone,
  } = applicant;
  const birthJurisdiction = getJurisdiction(birthJurisdictionName)
  const residentJurisdiction = getJurisdiction(residentJurisdictionName)
  const residentLocality = getJurisdiction(residentLocalityName)
  switch (fmt) {
    case ContactFormat.BirthCityAndState:
      if (!birthCity || !birthJurisdiction) {
        return undefined;
      }
      return `${birthCity}, ${birthJurisdiction.abbreviation}`;

    case ContactFormat.BirthCityStateCountry:
      if (!birthCity || !birthJurisdiction) {
        return undefined;
      }
      return `${birthCity}, ${birthJurisdiction.abbreviation}, USA`;

    case ContactFormat.BirthStateAndCountry:
      if (!birthJurisdiction) {
        return undefined;
      }
      return `${birthJurisdiction.abbreviation}, USA`;

    case ContactFormat.ResidentCityAndState:
      if (!homeAddress?.city || !residentJurisdiction) {
        return undefined;
      }
      return `${homeAddress.city}, ${residentJurisdiction.abbreviation}`;

    case ContactFormat.ResidentLocalityAndState:
      if (!residentLocality || !residentJurisdiction) {
        return undefined;
      }
      return `${residentLocality.name}, ${residentJurisdiction.name}`;

    case ContactFormat.ResidentCityAndStateAndZip:
      if (!homeAddress?.city || !residentJurisdiction || !homeAddress.zip) {
        return undefined;
      }
      return `${homeAddress.city}, ${residentJurisdiction.name}, ${homeAddress.zip}`;

    case ContactFormat.MailCityAndStateAndZip:
      if (!mailAddress?.mailCity || !mailAddress.mailState || !mailAddress.mailZip) {
        return undefined;
      }
      return `${mailAddress.mailCity}, ${abbreviateJurisdiction(mailAddress.mailState) ?? ""}, ${mailAddress.mailZip}`;

    case ContactFormat.ResidentCityAndLocalityAndStateAndZip:
      if (!homeAddress?.city || !residentLocality || !residentJurisdiction || !homeAddress.zip) {
        return undefined;
      }
      return `${homeAddress.city}, ${residentLocality.name}, ${residentJurisdiction.name}, ${homeAddress.zip}`;

    case ContactFormat.ResidentCityAndStateAndZipAndCountry:
      if (!homeAddress?.city || !residentJurisdiction || !homeAddress.zip) {
        return undefined;
      }
      return `${homeAddress.city}, ${residentJurisdiction.name}, ${homeAddress.zip} USA`;

    case ContactFormat.ResidentFullAddress:
      if (!homeAddress?.street || !homeAddress.city || !residentJurisdiction || !homeAddress.zip) {
        return undefined;
      }
      if (!homeAddress.apt) {
        return `${homeAddress.street} ${homeAddress.city}, ${residentJurisdiction.abbreviation} ${homeAddress.zip}`;
      } else {
        return `${homeAddress.street}, ${homeAddress.apt}, ${homeAddress.city}, ${residentJurisdiction.abbreviation} ${homeAddress.zip}`;
      }

    case ContactFormat.MailFullAddress:
      if (!mailAddress?.mailStreet || !mailAddress.mailCity || !mailAddress.mailState || !mailAddress.mailZip) {
        return undefined;
      }
      if (!mailAddress.mailApt) {
        if (!mailAddress.poBox) {
          return `${mailAddress.poBox ?? ""}, ${mailAddress.mailApt ?? ""}, ${mailAddress.mailCity}, ${abbreviateJurisdiction(mailAddress.mailState) ?? ""} ${mailAddress.mailZip}`;
        } else {
          return `${mailAddress.mailStreet}, ${mailAddress.mailApt ?? ""}, ${mailAddress.mailCity}, ${abbreviateJurisdiction(mailAddress.mailState) ?? ""} ${mailAddress.mailZip}`;
        }
      } else {
        if (!mailAddress.poBox) {
          return `${mailAddress.poBox ?? ""}, ${mailAddress.mailCity}, ${abbreviateJurisdiction(mailAddress.mailState) ?? ""} ${mailAddress.mailZip}`;
        } else {
          return `${mailAddress.mailStreet} ${mailAddress.mailCity}, ${abbreviateJurisdiction(mailAddress.mailState) ?? ""} ${mailAddress.mailZip}`;
        }
      }

    case ContactFormat.ResidentFullAddressAndLocality:
      if (
        !homeAddress?.street ||
        !homeAddress.city ||
        !residentLocality ||
        !residentJurisdiction ||
        !homeAddress.zip
      ) {
        return undefined;
      }
      if (!homeAddress.apt) {
        return `${homeAddress.street} ${homeAddress.city}, ${residentLocality.name} ${residentJurisdiction.abbreviation} ${homeAddress.zip}`;
      } else {
        return `${homeAddress.street}, ${homeAddress.apt}, ${homeAddress.city}, ${residentLocality.name} ${residentJurisdiction.abbreviation} ${homeAddress.zip}`;
      }

    case ContactFormat.ResidentFullAddressAndCountry:
      if (!homeAddress?.street || !homeAddress.city || !residentJurisdiction || !homeAddress.zip) {
        return undefined;
      }
      if (!homeAddress.apt) {
        return `${homeAddress.street} ${homeAddress.city}, ${residentJurisdiction.abbreviation} ${homeAddress.zip} USA`;
      } else {
        return `${homeAddress.street}, ${homeAddress.apt}, ${homeAddress.city}, ${residentJurisdiction.abbreviation} ${homeAddress.zip} USA`;
      }

    case ContactFormat.ResidentFullContactInfo:
      if (
        !homeAddress?.street ||
        !homeAddress.city ||
        !residentJurisdiction ||
        !homeAddress.zip ||
        !phone
      ) {
        return undefined;
      }
      if (!homeAddress.apt) {
        return `
          ${fullName(representativeName(applicant))} 
          ${applicant.homeAddress?.street ?? ""} ${applicant.homeAddress?.city ?? ""}, ${residentJurisdiction.abbreviation} ${applicant.homeAddress?.zip ?? ""}
          ${applicant.phone ?? ""}`;
      } else {
        return `
          ${fullName(representativeName(applicant))}
          ${applicant.homeAddress?.street ?? ""}, ${applicant.homeAddress?.apt ?? ""} ${applicant.homeAddress?.city ?? ""}, ${residentJurisdiction.abbreviation} ${applicant.homeAddress?.zip ?? ""}
          ${applicant.phone ?? ""}`;
      }

    case ContactFormat.ResidentFullContactInfoAndCountry:
      if (
        !homeAddress?.street ||
        !homeAddress.city ||
        !residentJurisdiction ||
        !homeAddress.zip ||
        !phone
      ) {
        return undefined;
      }
      if (!homeAddress.apt) {
        return `
          ${fullName(representativeName(applicant))}
          ${applicant.homeAddress?.street ?? ""} ${applicant.homeAddress?.city ?? ""}, ${residentJurisdiction.abbreviation} ${applicant.homeAddress?.zip ?? ""} USA
          ${applicant.phone ?? ""}`;
      } else {
        return `
          ${fullName(representativeName(applicant))}
          ${applicant.homeAddress?.street ?? ""}, ${applicant.homeAddress?.apt ?? ""} ${applicant.homeAddress?.city ?? ""}, ${residentJurisdiction.abbreviation} ${applicant.homeAddress?.zip ?? ""} USA
          ${applicant.phone ?? ""}`;
      }

    default:
      return undefined;
  }
}

/*!
 * Return entered string with leading "0" if it was single digit.
 * This is for adding 0's to the day or month for particular forms.
 * @param {string} zeroString
 * @return {string}
 */
export function addZero(zeroString: string): string {
  if (!zeroString) {
    return "";
  }

  if (zeroString.length == 1) {
    return "0" + zeroString;
  }
  return zeroString;
}

/*!
 * Returns combined and capitalized first letters of entered
 * first, middle, and last name to make initials for certain
 * forms. Can re-format order or amount as needed.
 * @param {Name} name
 * @return {string}
 */
export function nameInitials(name: Name | undefined, fmt: NameFormat): string {
  if (!name) {
    return "";
  }

  const firstInitial: string = name.first.substring(0, 1).toUpperCase();
  const middleInitial: string = name.middle.substring(0, 1).toUpperCase();
  const lastInitial: string = name.last.substring(0, 1).toUpperCase();

  return fmt.format
    .map((part) => {
      if (part === NameFormatPart.FIRST) {
        return firstInitial;
      }

      if (part === NameFormatPart.MIDDLE) {
        return middleInitial;
      }

      return lastInitial;
    })
    .join();
}

export function numericalBirthYear(birthdate: string | undefined): number {
  if (!birthdate) {
    return Infinity;
  }
  const birthYear = Number.parseInt(birthdate.substring(0, 4), 10);

  return birthYear;
}

/*!
 * Capitalize and return entered string.
 * Some forms require all CAPS entries.
 * @param {string} capString
 * @return {string}
 */
export function allCAPS(capString: string | undefined): string {
  if (!capString) {
    return "";
  }

  const upperString = capString.toLocaleUpperCase();

  return upperString;
}

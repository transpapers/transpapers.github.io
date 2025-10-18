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

import { expect, describe, test } from "vitest";

import { neededFieldNames } from "../src/lib/shakeTree";

import { michiganNameChange } from "../src/jurisdiction/Michigan/process";

import { isMinor, phoneAreaCode, phoneStart, phoneEnd } from "../src/lib/util";

describe("neededFieldNames()", () => {
  test("regression test", () => {
    const expected = [
      "age",
      "birthCity",
      "birthJurisdictionName",
      "birthdate",
      "chosenName",
      "fathersBirthName",
      "hasCriminalRecord",
      "isChangingLegalSex",
      "legalName",
      "mothersBirthName",
      "parentsAreOkay",
      "phone",
      //"doNotPublish",
      "reasonForNameChange",
      "representativeName",
      "residentCity",
      "residentJurisdictionName",
      "residentLocalityName",
      "sealBirthCertificate",
      "streetAddress",
      "zip",
    ];

    const received = neededFieldNames(michiganNameChange);

    expect(new Set(received)).toEqual(new Set(expected));
  });
});

describe("phone number handling", () => {
  test("phoneAreaCode()", () => {
    expect(phoneAreaCode("6065551110")).toBe("606");
    expect(phoneAreaCode("606 555 1110")).toBe("606");
    expect(phoneAreaCode("(606) 555 1110")).toBe("606");
    expect(phoneAreaCode("(606)-555-1110")).toBe("606");
    expect(phoneAreaCode("606-555-1110")).toBe("606");
    expect(phoneAreaCode("+16065551110")).toBe("606");
  });

  test("phoneStart()", () => {
    expect(phoneStart("6065551110")).toBe("555");
    expect(phoneStart("606 555 1110")).toBe("555");
    expect(phoneStart("(606) 555 1110")).toBe("555");
    expect(phoneStart("(606)-555-1110")).toBe("555");
    expect(phoneStart("606-555-1110")).toBe("555");
    expect(phoneStart("+16065551110")).toBe("555");
  });

  test("phoneEnd()", () => {
    expect(phoneEnd("6065551110")).toBe("1110");
    expect(phoneEnd("606 555 1110")).toBe("1110");
    expect(phoneEnd("(606) 555 1110")).toBe("1110");
    expect(phoneEnd("(606)-555-1110")).toBe("1110");
    expect(phoneEnd("606-555-1110")).toBe("1110");
    expect(phoneEnd("+16065551110")).toBe("1110");
  });
});

describe("numericalAge()/isMinor()", () => {
  test("recognizes me as an adult", () => {
    const me = { birthdate: "1997-10-07" };

    expect(isMinor(me)).toBe(false);
  });
});

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

import * as React from "react";

import { type Person } from "../../../types/person";

function AlaskaBirthCertificateGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, residentJurisdiction } = person;

  return (
    <section key="Alaska-BirthCertificate">
      <h3>Updating your Birth Certificate (AK)</h3>
      <p>
        For this process {age && age < 18 ? " a parent/guardian " : " you "}{" "}
        will need an “Alaska Birth Certificate Request Form”, they will not
        change the birth certificate but will include the updated information in
        an addendum. On page 2 {age && age < 18 ? " they " : " you "} will need
        to fill out any blanks in the “Applicant Information” section as well as
        sign at the bottom right of that section. Below that in the “What would
        you like to order?” section we put a “1” in the spot indicating that you
        want to change the certificate, you will also need to put in however
        many copies of the changed certificate you want directly above that, you
        need at least 1. The minimum fee should be $60 (Information change fee
        plus one copy) without including any additional copies that you may
        choose to order. Select an option in the “How would you like it
        shipped?” section and total up the fee at the bottom. Payment methods
        and information are located at the bottom of the form. Do{" "}
        <strong>not</strong> use cash for the fee unless you are hand delivering
        it.
      </p>

      {isChangingLegalSex ? (
        <p>
          {residentJurisdiction?.name === "Alaska" ? (
            <>
              To get an amended sex designation you will need a letter from the
              person giving you trans related care.
            </>
          ) : (
            <>
              To get an amended sex designation you will either need a letter
              from the person giving you trans related care or a court ordered
              gender change.
            </>
          )}
          We have included a template letter with a list of qualifying
          professions to take to this person for their reference. Email
          “BVSSpecialServices@alaska.gov” with any questions.
        </p>
      ) : (
        ""
      )}

      <p>
        If {age && age < 18 ? " a parent/guardian is " : " you are "} delivering
        this form in-person there are offices in Anchorage or Juneau on page one
        of the form. Take this form, acceptable ID (also listed on page one of
        the form), a certified copy of the court order, and payment to one of
        the offices.
      </p>

      <p>
        If {age && age < 18 ? " a parent/guardian is " : " you are "} mailing
        this, a photocopy of both sides of an acceptable ID is needed instead.
        Place the photocopies, the “Alaska Birth Certificate Request Form”, and
        a certified copy of the court order in an envelope. For payment by check
        address it to the “Alaska Vital Records Office” for the fee amount. The
        mailing address is on the first page of the form in the bottom left
        corner. It may take several weeks to get an updated copy back.
      </p>
    </section>
  );
}

export default AlaskaBirthCertificateGuide;

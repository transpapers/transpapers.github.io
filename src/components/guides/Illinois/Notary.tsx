/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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

function IllinoisNotaryGuide({ person }: { person: Partial<Person> }) {
  const { residentLocalityName, hasCriminalRecord, age } = person;

  return (
    <section key="Illinois-Notary">
      <h3>Getting Documents and a Notary (IL)</h3>
      {age && age < 18 ? (
        <p>
          Notaries can be found in court buildings, banks, some{" "}
          <a href="https://www.theupsstore.com/tools/find-a-store">
            UPS locations
          </a>
          , or <a href="https://www.notarize.com/">online</a>. All of these
          services have different fees and payment methods but all of them
          require a photo ID.
        </p>
      ) : (
        ""
      )}

      <p>
        A redacted scanned copy of your {age && age < 18 && "petitioner's "}
        photo ID is required. A Drivers License, State ID, or passport will
        work. If it is one of the first two make sure to scan both sides, if it
        is the last one only the page with the passport ID and photo is needed.
        If the photo ID does not have a {residentLocalityName ?? ""} county address
        additional proof of address is needed such as a lease or utility bill.
      </p>

      <p>
        Illinois allows for the following information to be redacted from
        scanned documents: Social Security Numbers, Taxpayer ID Numbers, Drivers
        License/State ID Numbers, Passport ID Numbers, Bank Account Numbers, and
        Credit/Debit card information. If any of these appear in the documents
        that need to be scanned, make a photocopy of the document and redact
        that <strong>photocopy</strong> with a black marker. If the scan of the
        photocopy still shows the information through the marker, keep repeating
        the process until it does not.
      </p>

      {residentLocalityName && residentLocalityName === "Cook" ? (
        <p>
          Cook county requires a copy of your birth certificate
          {age && age < 18 && " as well as your petitioner's"}.
        </p>
      ) : (
        <>
          {age && age < 18 && (
            <p>
              A copy of your birth certificate, not your petitioners, is
              required.
            </p>
          )}
        </>
      )}
      {residentLocalityName && residentLocalityName === "Cook" || (age && age < 18) ? (
        <p>
          If a certified copy of a birth certificate is needed they are
          available online through{" "}
          <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">
            VitalChek
          </a>{" "}
          or your state/territory&apos;s{" "}
          <a href="https://www.cdc.gov/nchs/w2w/index.htm">
            Vital Records department
          </a>
          . If you
          {residentLocalityName && residentLocalityName === "Cook" && age && age < 18
            ? " or your petitioner "
            : ""}
          were born in another country it will be through your birth country&apos;s
          records department instead to get proof of birth. Any document not in
          English needs a professional translation.
        </p>
      ) : (
        ""
      )}

      {hasCriminalRecord ? (
        <p>
          You will want to gather records of your criminal history including the
          charges, release paperwork, parole paperwork, or any documents showing
          that your sentence has been entirely served. Those can be added to the
          petition as supporting documents and will reduce the likelihood of a
          hearing.
        </p>
      ) : (
        ""
      )}
    </section>
  );
}

export default IllinoisNotaryGuide;

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

import * as React from "react";

import { type Person } from "../../../types/person";

function IllinoisBirthCertUpdateGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalName } = person;

  return (
    <section key="Illinois-BirthCertificateUpdate">
      <h3>Updating your Birth Certificate (IL)</h3>
      <p>
        This process is done by mail using the &ldquo;State of Illinois
        Affidavit and Certificate of Correction Request&rdquo; (IOCI 19-184)
        form.
        {age && age < 18 ? (
          <>
            Have your petitioner fill out their relationship to you on the
            second blank of page 2.
          </>
        ) : (
          " "
        )}
        On the “Place of Birth or Death” line
        {age && age < 18 ? " have your petitioner " : " "}
        write in the exact location you were born in this format: hospital name,
        city, and county. If you live in an apartment or have some other floor
        or suite number add it in the third section where we put your street
        address if it wasn&apos;t otherwise included.
        {age && age < 18 ? " Your petitioner should " : " Do "}
        <strong>not</strong> sign {age && age < 18 ? "" : " in your new name "}
        or date this until a notary says to.
      </p>

      {age && age > 17 ? (
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
        Once the form is complete and notarized
        {age && age < 18
          ? " have your petitioner make a photocopy of their ID. "
          : " make a photocopy of your ID. "}
        Ensure both sides of the ID are photocopied and do <strong>not</strong> 
        {" "}redact them. The fee should be $15 and include one updated copy, 
        additional copies should be $2 but check the{" "}
        <a href="https://dph.illinois.gov/topics-services/birth-death-other-records/birth-records/gender-reassignment.html">
          website
        </a>
        {" "}to be sure. Have 
        a check made out to the “Illinois Department of Public Health” for the 
        fee amount plus any extra copies, if any. Then place the form,
        {isChangingLegalName ? " certified copy of the court order, " : ""}
        ID photocopies, and check into an envelope. Mail it to:
      </p>

      <p>
        <span>Illinois Department of Public Health</span>
        <br />
        <span>Division of Vital Records</span>
        <br />
        <span>925 E. Ridgely Ave.</span>
        <br />
        <span>Springfield, IL 62702-2737</span>
      </p>

      <p>
        It will take a few weeks to process. The returned birth certificate will
        display your new information and will not show any evidence that there
        was a change. The original certificate and the mailed items will be
        sealed away.
      </p>
    </section>
  );
}

export default IllinoisBirthCertUpdateGuide;

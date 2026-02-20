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

function CaliforniaBirthCertNameGender({ person }: { person: Partial<Person> }) {
  const { age, parentsAreOkay } = person;

  return (
    <section key="California-BirthCertificateNameGender">
      <h3>Updating your Birth Certificate (CA, VS 24B)</h3>
      <p>
        This process is done by mail using the &ldquo;Application to Amend a Birth 
        Record&rdquo; (VS 24B) form. You will recieve a single copy of the updated 
        certificate unless you request more. To do so fill in the fee calculation box 
        on the right for additional copies, otherwise just put $0 in that box. Total the 
        fee directly below that.
      </p>

      <p>
        On page {age && age < 18 ? "your petitioner" : "you"} should then sign
        and date at the bottom. You will need someone else to also sign at the bottom of 
        page 2, a list of authorized person is available on the next page in the 
        &ldquo;Relationship to Registrant&rdquo; section. Do <strong>not</strong> sign 
        or date anywhere else, that should only be done in front of a notary.
        {age && age < 18 && !parentsAreOkay ? 
          <>
            Have your petitioner fill in their relationship to you on the bottom of page 2
            and the &ldquo;Sworn Statement&rdquo; section.
          </> 
        : ""}
      </p>

      <p>
        Notaries can be found in court buildings, banks, some{" "}
        <a href="https://www.theupsstore.com/tools/find-a-store">
          UPS locations
        </a>
        , or <a href="https://www.notarize.com/">online</a>. All of these
        services have different fees and payment methods but all of them
        require a photo ID.
      </p>

      <p>
        Once it is notarized {age && age < 18 ? "your petitioner" : "you"} should make out
        a check or money order for the fee amount to &ldquo;CDPH - Vital Records&rdquo;.
        Then place this form, the payment, and a certified copy of your court order in an
        envelope and mail it to:
      </p>

      <p>
        <span>CDPH - Vital Records</span>
        <br />
        <span>MS 5015</span>
        <br />
        <span>P.O. Box 997410</span>
        <br />
        <span>Sacramento, CA 95899-7410</span>
      </p>

      <p>
        The estimated processing times are listed on the Vital Records website
        <a href="https://www.cdph.ca.gov/Programs/CHSI/Pages/Vital-Records-Processing-Times.aspx">
          here
        </a>. 
      </p>
    </section>
  );
}

export default CaliforniaBirthCertNameGender;

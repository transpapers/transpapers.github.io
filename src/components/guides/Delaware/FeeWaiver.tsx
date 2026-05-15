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

function DelawareFeeWaiverGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Delaware-FeeWaiver">
      <h3>Affidavit in Support of Application to Proceed in Forma Pauperis (DE, 257P)</h3>
      <p>
        The “Affidavit in Support of Application to Proceed in Forma Pauperis” (Form 
        257P) is an optional form that may waive the filing fee. In Delaware the 
        filing fee is typically between $85 to $100 but may vary. Courts will typically 
        not grant a waiver unless your household is on public assistance or annual 
        income is below 125% of the federal poverty line. However,
        {age && age < 18 
          ? " your petitioner may file this request at their " 
          : " you may file this request at your "}
        discretion; the worst they can do is deny it. 
      </p>

      <p>
        If {age && age < 18 ? "your petitioner chooses" : "you choose"} to file this 
        form it will need the following things done.{" "}
        {age && age < 18 ? (
          <>
            The “Respondent” section at the top should be filled out, if there is more 
            than one respondent on the petition put the information for both in this 
            spot, clearly marked.
          </>
        ) : (
          ""
        )}
        {age && age < 18 ? " Your petitioner" : " You"} should fill out sections 1 
        through 9 as applicable. Attached paystubs or other proof of income as well as 
        proof of public benefits (if any) is required in addition to the information 
        on the form. {age && age < 18 ? "Your petitioner" : "You"} should{" "}
        <strong>not</strong> sign or date the bottom of page 2 until a notary tells you 
        to.
      </p>

      {age && age < 18 ? (
        <p>
          On the “Order on Application to Proceed in Forma Pauperis” (Form 259) your 
          petitioner just needs to fill in the Respondent(s) line, the rest is for 
          the judge to fill out.
        </p>
      ) : (
        <p>
          The “Order on Application to Proceed in Forma Pauperis” (Form 259) is already 
          complete, do <strong>not</strong> fill out anything on it.
        </p>
      )}

    </section>
  );
}

export default DelawareFeeWaiverGuide;

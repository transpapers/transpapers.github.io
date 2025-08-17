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

function AlaskaFeeWaiverGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Alaska-Fee-Waiver">
      <h3>Request for Exemption from Payment of Fees (AK, TF-920)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee charged
        upon submitting the name change petition to the court. In Alaska the filing 
        fee for that petition is around $200. Courts will typically not grant the 
        waiver unless your household is on public assistance, or the household 
        annual income is below 125% of the federal poverty line. However, you may 
        file the request at your discretion; the worst they can do is deny it.
        {age && age < 18 ? " Your petitioner" : " You"} should fill out the 
        “Financial Statement” section as needed. 
        {age && age < 18 ? " Your petitioner should " : " Do "}
        <strong>not</strong> sign or date this form until a notary or court clerk 
        says to.
      </p>
    </section>
  );
}

export default AlaskaFeeWaiverGuide;

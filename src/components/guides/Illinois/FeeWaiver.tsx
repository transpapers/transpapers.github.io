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

function IllinoisFeeWaiverGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Illinois-FeeWaiver">
      <h3>Application for Waiver of Court Fees (Civil) (IL, WA-P 603.8)</h3>
      <p>
        The “Application for Waiver of Court Fees (Civil)” (WA-P 603.8) is an
        optional form to waive some or all of the cost for filing a petition.
        The cost varies widely from county to county and changes regularly but
        it is generally the largest single fee in the process. Courts will{" "}
        <strong>always</strong> partially or fully grant this waiver if
        {age && age < 18 ? " your petitioner" : " you"} is using one of the
        public benefits listed in section 3. Otherwise the petition is not
        guaranteed to be granted but the worst they can do is deny it.
        {age && age < 18 ? " Your petitioner" : " You"} should fill in any
        blanks in section 1 through 3. If
        {age && age < 18 ? " your petitioner checks" : " you check"} at least
        one box in section 3 then skip sections 4 and 5. Otherwise fill those
        out as well. For section 6 a judge will only request a hearing if they
        have questions or need more information about the form, check the box
        for the preferred hearing method. In the event of a hearing{" "}
        {age && age < 18 ? " your petitioner" : " you"} should gather documents
        showing that the form was filled correctly such as benefits statements,
        pay stubs, bank records, bills, etc…
      </p>
    </section>
  );
}

export default IllinoisFeeWaiverGuide;

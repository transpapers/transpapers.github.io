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

import * as React from "react";

import { type Person } from "../../../types/person";

function FeeWaiverGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="NYC-Fee-Waiver">
      <h3>Fee Waiver Application (OR)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee charged
        upon submitting the "Change of Name or Sex" petition to the court. In 
        Oregon the filing fee for that petition is around $125. Courts will 
        typically not grant the waiver unless your household is on public 
        assistance, is enrolled in the Oregon Health Plan (OHP), or the household 
        annual income is below 125% of the federal poverty line. However, 
        you may file the request at your discretion; the worst they can do is 
        deny it. On the second page 
        {age && age < 18 ? ( " your petitioner should " ) : (" ")}
        fill in any remaining blanks in sections 1 through 7 and then sign/date 
        at the bottom of page 3. The "Order Re: Referal or Waiver of Fees" is 
        already set and should be filed with the waiver.
      </p>
    </section>
  );
}

export default FeeWaiverGuide;

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

function NYStateFeeWaiverGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="NY-State-Fee-Waiver">
      <h3>Fee Waiver Request (NY State, UCS-FW1)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee charged
        upon submitting {age && age < 18 ? " the UCS-NC2" : " the UCS-NC1 "} petition
        to the court. In New York State the filing fee is $210 (in NYC it's $65). 
        Courts will typically not grant your waiver request unless you are on public 
        assistance or your annual income is below 125% of the federal poverty line. 
        However, you may file the request at your discretion; the worst they can do 
        is deny it.
      </p>

      {age && age < 18 ? (
        <p>
            If a parent/guardian chooses to file this form, they need to fill out 
            items 4, 5, and 6 as it applies to them. Then they can sign and date at 
            the bottom of page 3.
        </p>
      ) : (
        <p>
            If you choose to file this form fill out items 4, 5, and 6 as needed. 
            Then sign and date the bottom of page 3.
        </p>
      )}
    </section>
  );
}

export default NYStateFeeWaiverGuide;

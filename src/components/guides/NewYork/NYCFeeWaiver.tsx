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

function NYCFeeWaiverGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="NYC-Fee-Waiver">
      <h3>Fee Waiver Request (NYC, CIV-GP-15-i)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee charged
        upon submitting {age && age < 18 ? " the UCS-NC2" : " the UCS-NC1 "} petition
        to the court. In New York City the filing fee is $65 (outside NYC is $210). 
        Courts will typically not grant your waiver request unless you are on public 
        assistance or your annual income is below 125% of the federal poverty line. 
        However, you may file the request at your discretion; the worst they can do 
        is deny it.
      </p>

      {age && age < 18 ? (
        <p>
            If a parent/guardian chooses to file this form, they need to circle
            "I am" or "am not" on item number 7. They also need to fill out items
            8 & 9 then sign and date at the bottom.
        </p>
      ) : (
        <p>
            If you choose to file this form, circle "I am" or "am not" on item
            number 7. Fill out items 8 & 9 as well then sign and date at the bottom.
        </p>
      )}
    </section>
  );
}

export default NYCFeeWaiverGuide;

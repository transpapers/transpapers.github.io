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

function SantaBarbaraCoverSheetGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Santa-Barbara-SC-2069">
      <h3>Civil Case Cover Sheet Addendum (Santa Barbara County, SC-2069)</h3>

      <p>
        This is an addendum to the Civil Case Cover Sheet specifically for Santa Barbara 
        county residents. When we cover which court to file at later in this guide check 
        the appropriate box at the top of this sheet. Then check the “North County” or
        “South County” box in the lower section based on the selected court. Finally
        {age && age < 18 ? " your petitioner" : " you"} should sign and date at the bottom.
      </p>

    </section>
  );
}

export default SantaBarbaraCoverSheetGuide;

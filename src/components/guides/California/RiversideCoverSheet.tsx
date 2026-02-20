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

function RiversideCoverSheetGuide({ person }: { person: Partial<Person> }) {
    const { age } = person;

  return (
    <section key="Riverside-MC010">
      <h3>Civil Case Cover Sheet (Riverside County, RI-MC010)</h3>

      <p>
        This cover sheet is unique to Riverside county and is meant to replace the 
        California Civil Case Cover Sheet (CM-010). All this form needs is your 
        {age && age < 18 ? " parent/guardians" : " "} date and signature at the bottom
        of the page.
      </p>

    </section>
  );
}

export default RiversideCoverSheetGuide;

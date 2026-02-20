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

function KernRelatedCasesGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Kern-FL-0122">
      <h3>Kern Party Identification and Notice of Related Case(s) (Kern County, FL-0122)</h3>

      <p>
        This is a form unique to Kern county. {age && age < 18 ? "A petitioner " : "You "} 
        should fill in any blanks in section 1. Do <strong>not</strong> check the 
        &ldquo;Respondent/Defendent&rdquo; box as there are not any for this type of case.
        If there are no other cases that {age && age < 18 ? " a petitioner is " : " you are "} 
        involved in check the box in section 2. Otherwise fill out section 3. Finally
        {age && age < 18 ? " a petitioner" : " you"} should sign/date at the bottom.
      </p>

    </section>
  );
}

export default KernRelatedCasesGuide;

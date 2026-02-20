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

function LosAngelesCoverSheetGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Los-Angeles-CIV109">
      <h3>Civil Case Cover Sheet Addendum and Statement of Location (Los Angeles county, CIV 109)</h3>

      <p>
        Los Angeles county uses this cover sheet addendum to determine which court(s)
        {age && age < 18 ? " your petitioner" : " you"} are able to file in. We have
        checked the appropriate boxes for the case type and will have a list of courts
        to file at in a later section. When 
        {age && age < 18 ? " your petitioner has" : " you have"} read that section and 
        picked a court, write the name of the district we provide on the last page of this 
        form in step 5. At that point {age && age < 18 ? "your petitioner" : "you"} can 
        sign and date this form to complete it.
      </p>

    </section>
  );
}

export default LosAngelesCoverSheetGuide;

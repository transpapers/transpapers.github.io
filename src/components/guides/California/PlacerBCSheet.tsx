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

function PlacerBCGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Placer-CV003">
      <h3>CLETS Background Information Supplement (Placer county, PL-CV003)</h3>
      <p>
        Placer county requires that the petitioner undergo a background check for
        a name change. {age && age < 18 ? "Your petitioner" : "You"} should fill out
        any blanks we left and double check the “Also Known As” line for accuracy. 
        Then this form is complete.
      </p>
    </section>
  );
}

export default PlacerBCGuide;

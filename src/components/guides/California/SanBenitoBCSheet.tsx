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

function SanBenitoBCGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="San-Benito-CV-2">
      <h3>Name Change Background Information Form (San Benito county, CV-2)</h3>
      <p>
        San Benito county requires that {age && age < 18 ? "you, the minor, " : "you "} 
        undergo a background check for a name change. 
        {age && age < 18 ? " Your petitioner" : " You"} should fill out
        any blanks we left above the signature line, if they do not apply to you then 
        write “NA” in the box instead of leaving it blank. Then 
        {age && age < 18 ? " your petitioner" : " you"} can sign and date at the bottom. 
        Do <strong>not</strong> fill out anything below the signature line or add “NA” 
        to those boxes.
      </p>
    </section>
  );
}

export default SanBenitoBCGuide;

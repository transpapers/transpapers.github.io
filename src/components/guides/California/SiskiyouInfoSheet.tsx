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

function SiskiyouInfoGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Siskiyou-Info-Form">
      <h3>Confidential Information Form (Siskiyou county, unnumbered)</h3>
      <p>
        Siskiyou county has a custom information form that they require. 
        {age && age < 18 ? " Your petitioner" : " You"} should fill out any blanks we 
        left in the “Petitioner/Plantiff/Victim” section. If there are any other court
        cases involving you {age && age < 18 ? "or any of your petitioners" : ""} then
        add them to the bottom of the “Petitioner/Plantiff/Victim” section. Do{" "}
        <strong>not</strong> fill out anything in the “Defendent/Respondent” section.
        This form is then complete.
      </p>
    </section>
  );
}

export default SiskiyouInfoGuide;

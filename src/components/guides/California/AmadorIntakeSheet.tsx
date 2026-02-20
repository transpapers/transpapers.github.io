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

function AmadorIntakeSheetGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Amador-MISC-049">
      <h3>Amador Superior Court Case Intake Sheet (Amador County, MISC-049)</h3>

      <p>
        This is a form unique to Amador county. If there are other cases that 
        {age && age < 18 ? " a petitioner is" : " you are"} involved in list them at the top.
        {age && age < 18 ? " A petitioner" : " You"} should fill in any blanks in the 
        &ldquo;Plaintiff/Petitioner&rdquo; section. Do <strong>not</strong> fill out anything 
        on the &ldquo;Defendent/Respondent&rdquo; side as there are not any for this type of 
        case.
        {age && age < 18 ? 
          <>
            If you have more than one petitioner have them fill out their information as well
            below the first. If you have more than 2 petitioners check the box on the bottom
            left of the form and attach an additional sheet with their information.
          </>
        : ""}
      </p>

    </section>
  );
}

export default AmadorIntakeSheetGuide;

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

function CaliforniaNC110Guide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="California-NC110">
      <h3>Name and Information About the Person Whose Name is to be Changed (CA, NC-110)</h3>

      <p>
        {age && age < 18 ?
          <>
            Add the names of any additional petitioners to the top to match your petition form.
            Then have a petitioner fill out sections 7d and 7e as needed.
          </>
        : ""}{" "}
        You {age && age < 18 ? ",the minor," : ""} should review the criteria in the “Declaration” 
        section. Then check the appropriate boxes, sign, and date it.{" "}
        {age && age < 18 ? "Your petitioner(s)" : "You"} need to sign and date at the bottom.{" "}
        {age && age < 18 ?
          <>
            If your petitioners need more signature lines attach a sheet to this form and check 
            the box on the bottom left.
          </>
        : ""}
      </p>

    </section>
  );
}

export default CaliforniaNC110Guide;

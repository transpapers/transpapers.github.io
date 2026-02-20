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

function CaliforniaNC130Guide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="California-NC130">
      <h3>Decree Changing Name (CA, NC-130)</h3>

      <p>
        This form is the order the judge signs to officially change a name, we call this
        document the “court order”.
        {age && age < 18 ?
          <>
            Add the names of any additional petitioners to the top to match your petition form.
          </>
        : ""}{" "}
        This form is {age && age < 18 ? "otherwise" : "already"} complete, do{" "}
        <strong>not</strong> sign it, thats for the judge to do.
      </p>

    </section>
  );
}

export default CaliforniaNC130Guide;

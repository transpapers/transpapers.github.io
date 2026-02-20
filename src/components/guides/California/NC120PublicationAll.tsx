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

function CaliforniaNC120Guide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="California-NC120">
      <h3>Order to Show Cause - Change of Name (CA, NC-120)</h3>

      <p>
        {age && age < 18 ?
          <>
            If you have any living parents or other adults with custody of you that have not
            signed on as petitioners a completed copy of this form will need to be served to
            them. Instructions for how to serve this paperwork will be available when your
            petitioner files at court. Additional newspaper publication may also be required,
            if so it will be addressed during filing and a list of court approved newspapers will
            be available in a later part of this guide. For now simply add the names of any 
            additional petitioners to the top to match your petition form, leave the rest as is.
            Do <strong>not</strong> sign this form.
          </>
        : 
          <>
            This form is already complete, do <strong>not</strong> sign it. Newspaper publication
            will likely be required, more information will be available in a later guide section.
          </>
        }
      </p>

    </section>
  );
}

export default CaliforniaNC120Guide;

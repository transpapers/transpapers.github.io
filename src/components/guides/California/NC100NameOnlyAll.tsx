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

function CaliforniaNC100Guide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="California-NC100">
      <h3>Petition for Change of Name (CA, NC-100)</h3>

      {age && age < 18 ?
        <p>
          This is the state form for name changes. Any parent(s) or legal guardian(s) can 
          fill this form out and file it on your behalf. It is best, but not required, for 
          every adult with custody over you to jointly file this petition together. To do 
          this have each petitioners name in the “Petition of” section in the top left. 
          Then fill out section 5 as it applies to your situation.
        </p>

      : 
        <p>
          This is the state form for name changes. This form should already be complete.
        </p>
      }

    </section>
  );
}

export default CaliforniaNC100Guide;

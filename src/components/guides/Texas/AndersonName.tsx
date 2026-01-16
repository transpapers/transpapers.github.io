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

function TexasAndersonNameGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Texas-Anderson-County-Name">
      <h3>Anderson County Form (TX, unnumbered)</h3>
      <p>
        Anderson county also requires a “Public Filing Pro Se Information Sheet”
        in addition to everything else.
        {age && age < 18 ? " Your petitioner" : " You"} should read the form and
        sign on the bottom left.
      </p>
    </section>
  );
}

export default TexasAndersonNameGuide;

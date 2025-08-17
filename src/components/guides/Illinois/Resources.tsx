/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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

function IllinoisResourcesGuide() {
  return (
    <section key="IL-Resources">
      <h3>Resources (IL)</h3>
      <ul>
        <li>
          <a href="https://www.illinoislegalaid.org/get-legal-help">
            Illinois Legal Aid
          </a>
          : They are a law group that helps anyone find legal aid and
          representation anywhere in the state.
        </li>
        <li>
          <a href="https://gsc.uic.edu/trans-resource-guide/legal-services-and-education/">
            University of Chicago
          </a>
          : They have a free legal assistance program to all Illinois residents
          with a special focus on Name and Gender updates.
        </li>
        <li>
          <a href="https://www.tjlp.org/">
            Transformative Justice Law Project of Illinois
          </a>
          : They are another legal group that covers the whole state and is able
          to set up virtual or in-person assistance. They also have other name
          change resources listed.
        </li>
      </ul>
    </section>
  );
}

export default IllinoisResourcesGuide;

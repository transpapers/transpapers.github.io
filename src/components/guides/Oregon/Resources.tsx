/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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
 */

import * as React from "react";

function OregonResourcesGuide() {
  return (
    <section key="OR-Resources">
      <h3>Resources (OR)</h3>
      <ul>
        <li>
          <a href="https://www.ogalla.org/contact-us">
            Ogalla Bar Association
          </a>
          : They can help you find an LGBT supportive lawyer if needed.
        </li>
        <li>
            <a href="https://www.basicrights.org/resources">
                Basic Rights Oregon
            </a>
            : They provide a wide range of resources and help connect 
            LGBT Oregon residents to other resources for their specific 
            situation.
        </li>
        <li>
          <a href="https://outsidein.org/health-services/transgender-and-gender-non-conforming/">
            Outside In
          </a>
          : Helps provide financial aid and other resources for 
          name/gender marker changes in Multnomah, Clackamas, 
          and Washington counties.
        </li>
        <li>
          <a href="https://transponder.community/legal-id-change-program/">
            Transponder
          </a>
          : Helps provide financial aid and other resources for 
          name/gender marker changes anywhere in Oregon.
        </li>
      </ul>
    </section>
  );
}

export default OregonResourcesGuide;

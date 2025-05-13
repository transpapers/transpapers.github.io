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

function RhodeIslandResourcesGuide() {
  return (
    <section key="RI-Resources">
      <h3>Resources (RI)</h3>
      <ul>
        <li>
          <a href="https://weberrenew.org/programs/#trans-support">
            Weber Renew
          </a>
          : Helps people through the document updating process as well as
          some of the fees associated with it. They also connect to
          a variety of other Trans resources in the Rhode Island area.
        </li>
        <li>
          <a href="https://www.glad.org/know-your-rights/glad-answers/">
            GLAD Law
          </a>
          : A New England based organization that assists with legal name
          changes among other legal help. They can help with complex
          cases by providing legal advice or services.
        </li>
        <li>
          <a href="https://www.thundermisthealth.org/services/trans-health-access/">
            Thundermist Health
          </a>
          : Offers transition related health care, wellness, and access to other resources.
        </li>
      </ul>
    </section>
  );
}

export default RhodeIslandResourcesGuide;

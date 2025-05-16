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

function NewYorkResourcesGuide() {
  return (
    <section key="NY-Resources">
      <h3>Resources (NY)</h3>
      <ul>
        <li>
          <a href="https://www.nyc.gov/site/doh/health/health-topics/transgender-health.page">
            NYC Health Service
          </a>
          : Maintains an extensive and up to date list of LGBT resources in 
          New York City. This includes both legal assistance and healthcare 
          resources for transgender people.
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
          <a href="https://ag.ny.gov/resources/individuals/health-care-insurance/transgender-nonbinary-intersex-health-care">
            The New York State Attorney General 
          </a>
          : Maintains an extensive list of legal resources for transgender
          people across the whole state.
        </li>
      </ul>
    </section>
  );
}

export default NewYorkResourcesGuide;

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

function CaliforniaResourcesGuide() {
  return (
    <section key="CA-Resources">
      <h3>Resources (CA)</h3>
      <ul>
        <li>
          <a href="https://legal.eqca.org/">
            Equality California
          </a>
          : Maintains an extensive and up to date list of legal resources for
          all of California to help with name and gender changes. This includes
          lawyers and legal groups for contested cases.
        </li>
        <li>
          <a href="https://transgenderlawcenter.org/resources/id/">
            Transgender Law Center
          </a>
          : They are a legal group advocating for trans rights and maintain several
          guides and other legal resources to help with updating documents or other
          legal issues.
        </li>
        <li>
          <a href="https://community.lalgbtcenter.org/tgi-enby-resource-index/legal-resources/">
            Los Angeles LGBT Center
          </a>
          : A Los Angeles county based organization that provides a full scope of resources
          including a list of legal resources available in the county to help with name
          and/or gender changes.
        </li>
        <li>
          <a href="https://saccenter.org/location-hours">
            Sacramento LGBT Center
          </a>
          : Provides legal assistance for transgender people across most of northern california.
        </li>
      </ul>
    </section>
  );
}

export default CaliforniaResourcesGuide;

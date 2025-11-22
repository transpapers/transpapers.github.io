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

function NewYorkBoroughInfo() {
  return (
    <section key="NY-Info">
      <p>
        Attention NYC residents click on the county corresponding with your borough:
      </p>

      <p>
        <span>Borough: The Bronx = County: Bronx</span>
        <br />
        <span>Borough: Brooklyn = County: Kings</span>
        <br />
        <span>Borough: Manhatten = County: New York</span>
        <br />
        <span>Borough: Queens = County: Queens</span>
        <br />
        <span>Borough: Staten Island = County: Richmond</span>
        <br />
      </p>
    </section>
  );
}

export default NewYorkBoroughInfo;

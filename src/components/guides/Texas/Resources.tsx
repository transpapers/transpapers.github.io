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

function TexasResourcesGuide() {
  return (
    <section key="TX-Resources">
      <h3>Resources (TX)</h3>
      <ul>
        <li>
          <a href="https://translegalaidtx.com/">Trans Legal Aid Clinic</a>: hey
          walk people through the process and fill out their documents by hand.
          It is the go to place for more difficult or nuanced name/gender
          changes.
        </li>
        <li>
          <a href="https://lambdalegal.org/helpdesk/">Lambda Legal</a>: They are
          a national organization that provides legal assistance to many
          marginalized groups including trans people.
        </li>
        <li>
          <a href="https://www.transtexas.org/">
            Transgender Education Network of Texas
          </a>
          : They are a statewide organization advocating for trans rights. They
          have many resources including an updated list on the current legal
          situation for trans rights in Texas.
        </li>
      </ul>
    </section>
  );
}

export default TexasResourcesGuide;

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

import { type Person } from "../../../types/person";

function TexasGenderChangeAllGuide({ person }: { person: Partial<Person> }) {
  const { birthJurisdictionName } = person;

  return (
    <section key="Texas-Gender-Change-All">
      <h3>Gender Change Warning (TX)</h3>
      <p>
        The Texas governor signed{" "}
        <a href="https://www.texastribune.org/2025/05/29/texas-trans-sex-definition-state-documents-impact/">
          House Bill 229
        </a>{" "}
        into law barring the update of gender markers for all state
        forms/documents including ID&apos;s and Texas Birth Certificates. Due to this
        legal situation, getting a gender change court order will{" "}
        <strong>not</strong> be effective at the state level at this time.
        {birthJurisdictionName === "Texas" ? (
          <>
            It is not advisable to go through this process at this time, we will
            update this message if the legal situation changes. We have left the
            instructions and forms in case you choose to do this anyway,
            otherwise skip this section.
          </>
        ) : (
          <>
            Since you were not born in Texas check the Birth Certificate section
            below or this{" "}
            <a href="https://www.cdc.gov/nchs/w2w/index.htm">link</a>. If{" "}
            {birthJurisdictionName} requires a gender change order to update
            your birth certificate you should still get one.
          </>
        )}
      </p>

      <p>
        Some Texas courts will either outright refuse to change gender markers
        or make the process particularly difficult to do, beyond the scope of
        our help. Travis county will accept gender change petitions from any
        Texas resident who submits one and they can do E-File. They also will
        generally grant the changes without a hearing. For these reasons this
        guide will use the Travis county process in all gender change cases.
      </p>
    </section>
  );
}

export default TexasGenderChangeAllGuide;

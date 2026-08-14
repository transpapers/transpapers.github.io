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

function MissouriDMVGuide({ person }: { person: Partial<Person> }) {
  const { isChangingLegalSex, age } = person;

  return (
    <section key="MO-License-Office">
      <h3>Primary ID (MO)</h3>

      <p>
        This section covers the process of updating your primary identification 
        (driver&apos;s license/state ID). If this is not relevant to you, then skip this 
        section. You can update your ID at any License Office in the state; this{" "}
        <a href="https://dor.mo.gov/license-office-locator/">
          link
        </a>
        {" "}has a map of all of them. Every office listed on that map should be 
        walk-in, though some allow you to call to set up an appointment and skip the 
        line. If you are updating your current driver&apos;s license/state ID bring that 
        along with your receipt from social security
        {isChangingLegalSex === true ? ", gender change order, " : " "}
        and court order. If you don’t have a driver&apos;s license or state ID, you will 
        need some additional ID documents in place of one. Use this{" "}
        <a href="https://dor.mo.gov/driver-license/issuance/real-id/interactive-guide.html">
          link
        </a>
        {" "}to find out what those are.{" "}
        {age && age < 18 && 
          <>
            You will need at least one parent/legal guardian to accompany you for this process.{" "}
          </>
        }
        The fee will be somewhere between $10 and $30, depending on the type of ID 
        and change being made.
      </p>

      <p>
        If you encounter a clerk who is hostile or who does not know the process, 
        ask for their manager to handle it. If this does not work try another 
        location, remember you can do this at any License Office in the state.
      </p>

    </section>
  );
}

export default MissouriDMVGuide;

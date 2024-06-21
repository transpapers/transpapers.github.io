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

import { type Person } from "../../../types/person";

function MichiganMC20Guide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="Michigan-MC20">
      <h3>Fee Waiver Request (MI, MC20)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee assessed
        upon submitting these documents to the court. It usually ranges from
        $175-200, depending on the county, and is the largest single fee in the
        process. Courts will typically not grant your waiver request unless you
        are on public assistance or your annual income is below 125% of the
        federal poverty line. However, you may file the request at your
        discretion; the worst they can do is deny it.
      </p>

      <p>
        If you choose to file this form, complete <strong>items 1 and 3</strong>{" "}
        as applicable.{" "}
        {age && age < 18
          ? "Your parent should sign at the bottom of the first page."
          : "Sign at the bottom of the first page."}
      </p>
    </section>
  );
}

export default MichiganMC20Guide;

/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

function IllinoisAdultOrderGuide({ person }: { person: Partial<Person> }) {
  const { birthJurisdiction } = person;

  return (
    <section key="Illinois-AdultOrder">
      <h3>Order for Name Change (IL, ATJ 305.7)</h3>
      <p>
        The “Order for Name Change” (ATJ 305.7) is what the judge fills out to
        approve a name change.
        {birthJurisdiction?.name === "Illinois" ? (
          "This form is already complete."
        ) : (
          <>
            Check the “Birth Certificate Update” section of your birth state, if
            applicable, near the end of this guide. Some states require more
            specific information to change the name or gender on your birth
            certificate. That information can be added to the &ldquo;Additional
            Orders&rdquo; section of this form. Use this{" "}
            <a href="https://www.cdc.gov/nchs/w2w/index.htm">link</a>
            or the contact info provided in that section to find out what
            specifically needs to be present in this order to change your birth
            certificate in {birthJurisdiction?.name ?? ""}.
          </>
        )}
      </p>
    </section>
  );
}

export default IllinoisAdultOrderGuide;

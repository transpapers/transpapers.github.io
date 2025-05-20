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

function RhodeIslandBCIGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="RhodeIsland-BCI">
      <h3>Background Check Authorization Form (RI)</h3>

      {age && age < 18 ? (
        <p>
          For a Rhode Island name change the parent/guardian who is filing the
          Change of Name form for you will need a background check.
        </p>
      ) : (
        <p>
          For a Rhode Island name change you will need a background check.
        </p>
      )}

      <p>
        This form, from the State of Rhode Island Office of the Attorney
        General, is specifically for requesting a background check{" "}
        <strong>by mail</strong>. Going in-person doesn&apos;t require a form.
        {age && age < 18 ? (
          " If the parent/guardian filing the Name Change has "
        ) : (
          " If you have "
        )}
        ever had any other legal names those names need to be listed on the
        "Maiden Name / other names used" line if they aren't already listed. 
        After that this form is ready for a notary, do <strong>not</strong> fill
        anything else out.
      </p>
    </section>
  );
}

export default RhodeIslandBCIGuide;

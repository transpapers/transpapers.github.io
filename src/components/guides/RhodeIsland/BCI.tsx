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
          For a Rhode Island name change the parent/guardian
          who is filing the Change of Name form for you will
          need a background check.
        </p>
      ) : (
        <p>
          For a Rhode Island name change you will need a background
          check.
        </p>
      )}

      <p>
        This form, from the State of Rhode Island Office of the
        Attorney General, is specifically for requesting a background
        check <strong>by mail</strong>. Going in-person doesn't require
        a form. If you want to use this form it's already filled out
        and ready for a notary.
      </p>
    </section>
  );
}

export default RhodeIslandBCIGuide;

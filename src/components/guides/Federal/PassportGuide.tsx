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

import useStore from "../../../store";

function PassportGuide() {
  const { passport } = useStore((state) => state.person);

  let passportForm;
  let isInPerson;
  switch (passport) {
    case "ds82":
      passportForm = "DS 82";
      isInPerson = false;
      break;
    case "ds5504":
      passportForm = "DS 5504";
      isInPerson = false;
      break;
    case "ds11":
    default:
      passportForm = "DS 11";
      isInPerson = true;
  }

  return (
    <section key="Federal-Passport">
      <h3>Updating Your Passport</h3>
      <p>
        You will need to file form
        <strong>{passportForm}</strong>.
        {isInPerson
          ? 'This form must be filed in-person. Filing locations near you are available at <a href="https://iafdb.travel.state.gov">https://iafdb.travel.state.gov</a>.'
          : "This form should be mailed in to the appropriate address listed at the bottom of page 1."}
      </p>

    </section>
  );
}

export default PassportGuide;

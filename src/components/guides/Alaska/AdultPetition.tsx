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

function AlaskaAdultPetitionGuide({ person }: { person: Person }) {
  const { hasCriminalRecord } = person;
  return (
    <section key="Alaska-Adult-Petition">
      <h3>Petition for Change of Name (AK, CIV-700)</h3>
      <p>
        The “Petition for Change of Name” (CIV-700) is the primary name change
        document. You may need to fill out
        {hasCriminalRecord
          ? " items 6-10 as they apply to you. "
          : " item 6, ignore the rest. "}
        Also at the bottom you will need to decide if you would like to check
        the box to have the court email your documents rather than snail mail
        them. Do <strong>not</strong> sign and date the form until a notary or
        court clerk instructs you to do so.
      </p>
    </section>
  );
}

export default AlaskaAdultPetitionGuide;

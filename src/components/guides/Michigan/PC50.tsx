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

function MichiganPC50Guide({ person }: { person: Person }) {
  const { age, parentsAreOkay } = person;

  return (
    <section key="Michigan-PC50">
      <h3>
        Publication of Notice of Hearing Regarding Petition for Name Change (MI,
        PC50)
      </h3>
      <p>
        The state of Michigan generally requires name change hearings to be
        documented in a local newspaper unless there are compelling reasons not
        to. This will take the form of a notice containing the old and new legal
        names as well as the date, time, and location of the hearing.
        {age &&
          age < 18 &&
          !parentsAreOkay &&
          "List the legal names of any noncustodial parents under the heading “TO ALL PERSONS, including:”."}
        You may need to write in the name of the publication that the notice
        will be displayed in during filing; if so, refer to the list above. This
        form is otherwise complete.
      </p>
    </section>
  );
}

export default MichiganPC50Guide;

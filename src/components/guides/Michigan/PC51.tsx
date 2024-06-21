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

function MichiganPC51Guide({ person }: { person: Person }) {
  const { age, doNotPublish } = person;

  return (
    <section key="Michigan-PC51">
      <h3>Petition for Name Change (MI, PC51)</h3>
      If necessary, complete <strong>item 1</strong> (concerning active court
      cases) and <strong>item 5</strong> (concerning criminal record.)
      {doNotPublish &&
        " Also complete page 3 to the best of your ability. If your request for nonpublication has been granted, skip the publication section."}
      {age && age < 18 ? (
        <p>
          Also fill out <strong>item 2c</strong> and <strong>item 7</strong> as
          applicable. Your parent(s) should complete and sign under the heading
          “Signature of Parent/Guardian for Minor.” If one of your parent(s) is
          deceased or noncustodial, only one parent should sign on page 2 in the
          field labeled “Petitioner Signature.” If both are deceased your
          guardian should do the above instead and attach letters of
          guardianship to this form.
        </p>
      ) : (
        " Sign with your legal name on page 2, in the field labeled “Petitioner Signature.”"
      )}
    </section>
  );
}

export default MichiganPC51Guide;

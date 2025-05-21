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
  const { age, residentCounty, parentsAreOkay, hasCriminalRecord } = person;

  return (
    <section key="Michigan-PC51">
      <h3>Petition for Name Change (MI, PC51)</h3>
      In {residentCounty} county the court will <strong>not</strong> hold 
      hearings for name changes meaning the process will not be published 
      in a newspaper even when filing with the standard petition like this. 
      You need to have lived in {residentCounty} county for at least one 
      year to file this form. If necessary complete item 1 for any active 
      court cases.
      {hasCriminalRecord && hasCriminalRecord === true ? (
        <p>
          {age && age < 18 ? (" Fill out items 8 and/or 9 as needed for just you and the parent/guardian filing as your petitioner. Be sure to include any pending charges. "): (
              " Fill out item 8 and include pending charges, you can attach sheets to the petition as necessary. Only your record needs to be attached. ")}
        </p>
      ): ("")}
      {age && age < 18 ? (
        <p>
          Also fill out <strong>item 4</strong>, <strong>item 5</strong>, and
          <strong>item 10</strong> as applicable. The parent/guardian that is 
          filing this at court should date and sign the bottom of page 2 and 
          the left side of the “Signature of Parent/Guardian for Minor” 
          section on page 3.
          {parentsAreOkay && parentsAreOkay === true ? (" The other should complete the right side of the same section.") : (
            " If one of your parents is deceased or noncustodial then only the first signature is needed. If both are deceased or noncustodial your legal guardian(s) should do the above instead and attach copies of their letters of guardianship to this form.")}
          {age && age < 14
            ? " Since you are below the age of 14 you should not sign the first “Consent by Minor” section on page 3, sign the second instead."
            : " Since you are over the age of 13 you should sign the first “Consent by Minor” section on page 3 and ignore the second."}
        </p>
      ) : (
        " Sign and date on page 2 with your legal name, in the field labeled “Petitioner's Signature”."
      )}
    </section>
  );
}

export default MichiganPC51Guide;

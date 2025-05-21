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

function MichiganPC51cGuide({ person }: { person: Person }) {
  const { age, residentCounty, parentsAreOkay, hasCriminalRecord } = person;

  return (
    <section key="Michigan-PC51c">
    <h3>Confidential Petition for Name Change (MI, PC51c)</h3>
    <p>
      This form will keep the process confidential and make sure that even if
      there is a hearing it will be private with no publication of your
      information. You do need to have lived in {residentCounty} county for at
      least a year to file this form though.
    </p>

    <p>
      If necessary complete item 1 for any active court cases.
      {hasCriminalRecord && hasCriminalRecord === true ? (
        <p>
          {age && age < 18 ? (" Fill out items 8 and/or 9 as needed for just you and the parent/guardian filing as your petitioner. Be sure to include any pending charges. "): (
              " Fill out item 8 and include pending charges, you can attach sheets to the petition as necessary. Only your record needs to be attached. ")}
        </p>
      ): ("")} If you would like for the judge to see personal details 
      of why you may be at risk of discrimination or retaliation add them to
      the bottom of page 3, this is optional.
    <p>

    <p>
      {age && age < 18 ? (
        <>
          Also fill out <strong>item 4</strong>, <strong>item 5</strong>, and{" "}
          <strong>item 10</strong> as applicable. The parent that is filing this
          at court should date and sign the bottom of pages 2, 3, and the left
          side of the “Signature of Parent/Guardian for Minor” section on page 
          4.
          {parentsAreOkay && parentsAreOkay === true ? (" The other should complete the right side of the same section.") : (
            " If one of your parents is deceased or noncustodial then only the first signature is needed. If both are deceased or noncustodial your legal guardian(s) should do the above instead and attach copies of their letters of guardianship to this form.")}
          {age && age < 14
            ? " Since you are below the age of 14 you should not sign the first “Consent by Minor” section on page 4, sign the second instead."
            : " Since you are over the age of 13 you should sign the first “Consent by Minor” section on page 4 and ignore the second."}
        </>
      ) : (
        " Sign and date on page 2 with your legal name, in the field labeled “Petitioner's Signature.” Do the same on the bottom of page 3."
      )}
    </p>
    </section>
  );
}

export default MichiganPC51cGuide;

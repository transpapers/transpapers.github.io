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
  const { age, residentCounty } = person;

  return (
    <section key="Michigan-PC51">
      <h3>Confidential Petition for Name Change (MI, PC51c)</h3>

        <p>
          This form will keep
          the process confidential and make sure that even if there is a hearing
          it will be private with no publication of your information. You do need to
          have lived in {residentCounty} county for at least a year to file this
          form though.
        </p>

      If necessary complete <strong>item 1</strong> (concerning active court
      cases), <strong>item 8</strong>, and <strong>item 9</strong> (concerning criminal record.)

      {age && age < 18 ? (
        <p>
          Also fill out <strong>item 4</strong>, <strong>item 5</strong>, and
          <strong>item 10</strong> as applicable. The parent that is
          filing this at court should date and sign the bottom of pages 2, 3, and complete the
          “Signature of Parent/Guardian for Minor” section on page 4. The other should complete
          the "Consent by Spouse of Petitoner" on page 4. If one of your parents
          is deceased or noncustodial then only the first signature is needed.
          If both are deceased or noncustodial your legal guardian should do the above
          instead and attach copies of their letters of guardianship to this form.

        {age && age < 14 ? (
            " Since you are below the age of 14 you should not sign the first “Consent by Minor” section, sign the second instead."
        ) : (
            " Since you are over the age of 13 you should sign the first “Consent by Minor” section and ignore the second."
        )}
        </p>
      ) : (
          " Sign with your legal name and date on page 2, in the field labeled “Petitioner's Signature.” Do the same on the bottom of page 3."
      )}
    </section>
  );
}

export default MichiganPC51Guide;

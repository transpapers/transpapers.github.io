/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import * as React from "react";

import { type Person } from "../../../types/person";

function MissouriParentConsentMinorGuide({ person }: { person: Partial<Person> }) {
  const { parentsAreOkay } = person;

  return (
    <section key="Missouri-CAFC412">
      <h3>Consent to Minor Child’s Change of Name (MO, CAFC412)</h3>
      <p>
        The “Consent to Minor Child’s Change of Name” (Form CAFC412) is for the 
        parent who is <strong>not</strong> the next friend on the petition; we will 
        call them the “respondent parent.”{" "}
        {parentsAreOkay === false && 
          <>
            If one or both of your parents are deceased, then your next friend can 
            skip this form.{" "}
          </>
        }
        The respondent parent should fill out their information in #1 through #3 and 
        then check the box at the top of page 2. The next friend should fill out any 
        blanks left in #4. After #6 on page 2 is a “Proof of Service on Other 
        Parties” section.{" "}
        {parentsAreOkay === false ? 
          <>
            If your parents are on good terms, your next friend can just hand this 
            form to them and they can fill out the date, the respondent parent’s 
            name, and the respondent parent’s address in this section together. If 
            they are not on good terms, official service will be required and we 
            recommend a lawyer for that; see our resources section for help if that 
            is the case.{" "}
          </>
        :
          <>
            Your parents don’t need to serve each other; they can just fill out this 
            form together and write the date, the respondent parent’s name, and the 
            respondent parent’s address in this section.{" "}
          </>
        }
        Page 3 should be left <strong>blank</strong>; that&apos;s for a notary and the 
        respondent parent later.
      </p>
    </section>
  );
}

export default MissouriParentConsentMinorGuide;

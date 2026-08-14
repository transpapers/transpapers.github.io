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

function MissouriConfidentialInfoGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Missouri-FI-10">
      <h3>Confidential Case Filing Information Sheet (MO, FI-10)</h3>
      <p>
        The “Confidential Case Filing Information Sheet” (Form FI-10) is for sensitive 
        information that the court considers confidential about your case. On page 1 
        {age && age > 17 ? " " : " your next friend should "} write in your social 
        security number on the bottom right. On page 2
        {age && age > 17 ? " " : " your next friend should "} check at least one box 
        corresponding to your race. This can be self-identified or as listed on an 
        official document. If it is self-identified, check the “petitioner” box in 
        the “Race & Ethnicity Source” section and the “self-identified” box below 
        that. Otherwise, check the institution that provided the official document 
        and the “observed/perceived” box below that.
      </p>

      <p>
      {age && age > 17 ? 
        <>
          Skip the “Respondent Information” and “Additional Parties” sections
        </>
        :
        <>
          Fill out any blanks we left in the “Respondent Information” section. If 
          your respondent parent is using an attorney to help them with this process, 
          check the “RES” box. Otherwise, check the “RESP” box. Skip the “Additional 
          Parties” section
        </>
      }
      {" "} and proceed directly to the “Employer Information” section at the bottom 
      of page 4. If you {age && age > 17 ? " " : ", the minor, or the respondent parent "}
      are employed, fill out this section.{" "}
      {age && age > 17 ? 
        <>
          You can skip the “Children” section as well.
        </>
        :
        <>
          In the “Children” section, you, the minor, only need to provide your information, 
          as you are the only child requesting a name change.
        </>
      }
      {" "} Lastly, fill out any blanks we left in the “Submitted by:” section on page 6.
      </p>
    </section>
  );
}

export default MissouriConfidentialInfoGuide;

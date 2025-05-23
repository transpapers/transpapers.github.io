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

function OregonCourtHearingGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="OR-CourtHearing">
      <h3>Court Hearing (OR)</h3>
      <p>
        On the day of your hearing, you
        {age && age < 18 && "and your parent(s)/guardian(s)"} should dress 
        appropriately for a courtroom, even if the hearing is virtual. You
        {age && age < 18 && "and/or your parent(s)/guardian(s)"} will be 
        sworn in and questioned. The questions and process vary between 
        courts.{" "}

        {age && age < 18 ? (
          <>
            The judge will be trying to decide what is in the best
            interest of the minor. Depending on your age, your testimony will 
            be taken into account. If the change is denied we{" "}
            <strong>strongly</strong> recommend hiring a lawyer for an appeal 
            if your petitioner has not already done so. If not you will need to 
            wait until you are 18.
          </>
        ) : (
        <>
            The judge cannot deny the change unless they think the attempt is 
            for fraudulant reasons. For more details see this{" "}
            <a href="https://samuelslaw.com/2022/02/oregon-appellate-court-requires-that-a-judge-give-specific-reasons-before-denying-a-name-or-gender-marker-change/">link</a>
            . If your petition is denied we <strong>strongly</strong> recommend 
            hiring a lawyer for an appeal if you have not already done so.
        </>
        )}
      </p>

      <p>
        If the change is granted make sure to have 2 or 3 certified copies of 
        the court order purchased. Once you have the certified copies of the 
        court order, you are ready to file with the Social Security 
        Administration. Keep the original court order in a safe place.
      </p>
    </section>
  );
}

export default OregonCourtHearingGuide;

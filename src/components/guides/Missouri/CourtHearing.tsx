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

function MissouriCourtHearingGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="MO-CourtHearing">
      <h3>Court Hearing (MO)</h3>
      <p>
        On the day of your hearing, you
        {age && age < 18 && "and your parent(s)"} should dress appropriately for
        a courtroom, even if the hearing is virtual. The hearing may begin late,
        but it should only take a few minutes once it starts. Please note that your 
        hearing is public and it is possible for others to attend, including objectors. 
        If this is a concern for any of you, consider bringing supportive friends/family.
      </p>

      <p>
        You
        {age && age < 18 && "and/or your parent(s)"} will be sworn in and
        questioned. The questions vary between courts, but you can expect some
        of the following:
      </p>

      <ul>
        <li>What is your current legal name?</li>
        <li>What is your desired legal name?</li>
        <li>What is your current address?</li>
        <li>What is your date of birth?</li>
        <li>Where were you born?</li>
        <li>
          Do the names of your parents on this petition match the names of your parents 
          on your birth certificate?
        </li>
        <li>Are you doing this for fraudulent reasons?</li>
        <li>Are there any money judgements against you or anyone suing you for money?</li>
        <li>(If you are married) Does your spouse consent to your name change?</li>
        <li>Is there anything else you&apos;d like the court to know?</li>
        <li>
          You may also be asked “Do you know of anyone who would oppose this
          name change?” The authors of this guide are not lawyers, but our
          understanding is that, having answered “no” to the “fraudulent
          reasons” question, you can answer “no” to this one. In particular,{" "}
          <strong>
            you can safely disregard any “opposition” on purely transphobic
            grounds.
          </strong>{" "}
          (Compare the history of the phrase “speak now or forever hold your
          peace.”)
        </li>
      </ul>
      <p>
        At this point the name change should be granted and the hearing should
        end promptly. Once you have the certified copies of the court order, you are 
        ready to file with the Social Security administration.
      </p>
    </section>
  );
}

export default MissouriCourtHearingGuide;

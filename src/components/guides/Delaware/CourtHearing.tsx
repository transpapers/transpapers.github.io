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

function DelawareCourtHearingGuide({ person }: { person: Partial<Person> }) {
  const { age, residentLocalityName } = person;

  return (
    <section key="DE-CourtHearing">
      <h3>Court Hearing (DE)</h3>
      <p>
        On the day of your hearing, you
        {age && age < 18 && "and your parent(s)"} should dress appropriately for
        a courtroom, even if the hearing is virtual. If the hearing is at the 
        court arrive for the hearing at least 30 minutes early to get checked in. 
        The hearing may begin late, but it should only take a few minutes once it 
        starts.
      </p>

      <p>
        You
        {age && age < 18 && "and/or your parent(s)"} will be sworn in and
        questioned.
        {age && age < 18 && 
          <>
            In Delaware the court must decide whether the name change will be in the 
            child’s best interest and can deny a name change based on that reason. To 
            ensure a smooth court process we recommend that in addition to your 
            petitioner, you, any other parents, legal guardians, and/or any other 
            supportive adults should be present at the court hearing to speak in 
            support of the change. If the hearing is virtual, share the link, court 
            hearings are public unless otherwise stated so others can be on the call. 
            State early on that they are here for this purpose if the judge does not 
            ask.
          </>
        }
        The questions vary between courts, but you can expect some
        of the following:
        </p>

        {age && age < 18 ? (
          <ul>
            <li>What is the child’s current legal name?</li>
            <li>What is the child’s desired legal name?</li>
            <li>Has the child lived in {residentLocalityName} county for over 6 months?</li>
            <li>Is this being done for fraudulent reasons?</li>
            <li>What length of time has the child used this name?</li>
            <li>Does the minor consent to this change?</li>
            <li>Is this change in the child’s best interests and if so, why?</li>
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
        ) : (
          <ul>
            <li>What is your current legal name?</li>
            <li>What is your desired legal name?</li>
            <li>What is your date of birth?</li>
            <li>Have you lived in {residentLocalityName} county for over six months?</li>
            <li>Are you doing this for fraudulent reasons?</li>
            <li>In your own words, why do you want to change your name?</li>
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
        )}

      <p>
        At this point the name change should be granted and the hearing should end 
        promptly. The court will provide a document we will call the court order as 
        well as some certified copies of said order. Have the original placed 
        somewhere safe and use the others to update your name everywhere else.
        {age && age < 18 && 
          <>
            Once the name change is granted you and your petitioner will have{" "}
            <strong>30 days</strong> to update it at the Social Security office and 
            then the DMV.
          </>
        }
      </p>
    </section>
  );
}

export default DelawareCourtHearingGuide;

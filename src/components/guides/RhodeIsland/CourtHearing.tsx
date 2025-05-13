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

function RhodeIslandCourtHearingGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="RI-CourtHearing">
      <h3>Court Hearing (RI)</h3>
      <p>
        On the day of your hearing, you
        {age && age < 18 && " and your parent(s)/guardian(s) "} should dress appropriately for
        a courtroom, even if the hearing is virtual. The hearing may begin late,
        but it should only take a few minutes once it starts.
      </p>
      <p>
        You
        {age && age < 18 && " and/or your parent(s)/guardian(s) "} will be sworn in and
        questioned. The questions vary between courts, but you can expect some
        of the following:
      </p>
      <ul>
        <li>What is your current legal name?</li>
        <li>What is your desired legal name?</li>
        <li>What is your date of birth?</li>
        <li>Have you lived in this county for over a year?</li>
        <li>Are you doing this for fraudulent reasons?</li>
        <li>Have you paid the publication fee to an approved newspaper?</li>
        <li>In your own words, why do you want to change your name?</li>
        <li>Is there anything else you’d like the court to know?</li>
        <li>
          You may also be asked “Do you know of anyone who would oppose this
          name change?” The authors of this guide are not lawyers, but our
          understanding is that, having answered “no” to the “fraudulent
          reasons” question, you can answer “no” to this one. In particular,
          <strong>
            you can safely disregard any “opposition” on purely transphobic
            grounds.
          </strong>{" "}
          (Compare the history of the phrase “speak now or forever hold your
          peace.”)
        </li>
      </ul>

      <p>
        You may also ask that the court seal the records relating to your name
        change and this hearing from the public. If you want that you will need
        to explain why, specifically relating to your safety or discrimmination
        risks. Examples relating to you specifically are not strictly required,
        general transgender risks will also work.
      </p>

      <p>
        At this point the name change should be granted and the hearing should
        end promptly. The document that you will get afterward is the exact
        &quot;Change of Name&quot; petition that was submitted earlier but with
        page 2 filled out, we will call it the “court order” from here on. You
        will probably be asked whether you want to pick up your court order at
        the court or have it mailed. The court should have the order ready for
        pickup within a few hours or the next day. Mailing the order will take
        several days. Be sure to request a certified copy of your court order if
        you haven&apos;t done so yet and the court does not automatically
        provide one.
      </p>
      <p>
        Once you have the certified copy of the court order, you are ready to
        file with the Social Security administration. Keep the original court
        order in a safe place.
      </p>
    </section>
  );
}

export default RhodeIslandCourtHearingGuide;

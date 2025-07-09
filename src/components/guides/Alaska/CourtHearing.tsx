/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

function AlaskaCourtHearingGuide({ person }: { person: Partial<Person> }) {
  const { age, residentLocality } = person;

  return (
    <section key="AK-CourtHearing">
      <h3>Court Hearing (AK)</h3>

      {residentLocality?.name === "Anchorage" ? (
        <p>
          For Anchorage, hearings are held in one of two locations. On weekdays
          they are at {residentLocality.court.address} but on weekends they are
          at the Boney courthouse, 303 K St, Anchorage, AK 99501.
        </p>
      ) : (
        ""
      )}

      <p>
        On the day of your hearing, you
        {age && age < 18 && "and your petitioner"} should dress appropriately
        for a courtroom, even if the hearing is virtual. The hearing may begin
        late, but it should only take a few minutes once it starts.
      </p>
      <p>
        You
        {age && age < 18 && "and/or your petitioner"} will be sworn in and
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
        At this point the name change should be granted and the hearing should
        end promptly. In rare cases
        {age && age < 18 ? " your petitioner " : " you "} may also be told to
        send notice to individuals that the name change was granted. If so,
        inform whoever the court says to and use the copy of the “Affidavit of
        Additional Service” (CIV-702) we provided and return a completed and
        notarized copy to the court within 20 days.
        {age && age < 18 ? "Your petitioner " : "You "} will receive two copies
        of the “Certificate of Name Change” (CIV-705) which we will call the
        court order. You will likely want to order an additional 1 or 2 copies
        if you plan on updating the rest of your information by mail. The date
        listed on the certificate is the day when you can begin using our new
        legal name, it is also the date by which you have to notify the DMV of
        the change which is covered in the “Primary ID” section below.
      </p>
      <p>
        Once you have the court order, you are ready to file with the Social
        Security administration. Keep the original court order in a safe place.
      </p>
    </section>
  );
}

export default AlaskaCourtHearingGuide;

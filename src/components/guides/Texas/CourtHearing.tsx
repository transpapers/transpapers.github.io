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

function TexasCourtHearingGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, isChangingLegalName, hasCriminalRecord } = person;

  return (
    <section key="TX-CourtHearing">
      <h3>Court Hearing (TX)</h3>
      <p>
        On the day of your hearing, you
        {age && age < 18 && "and your parent(s)/guardian(s)"} should dress 
        appropriately for a courtroom, even if the hearing is virtual. The 
        hearing may begin late, but it should only take a few minutes once 
        it starts.
      </p>
      <p>
        You
        {age && age < 18 && "and/or your parent(s)/guardian(s)"} will be 
        sworn in and questioned. The questions vary between courts, but you 
        can expect some of the following:
      </p>
      <ul>
        <li>What is your current legal name?</li>
        {age && age < 18 ? (
          <>
            <li>What is the reason you are seeking a change for this minor?</li>
          </>
        ):("")}
        {age && age < 18 ? (
          <>
            <li>Why is this change in the child's best interest?</li>
          </>
        ):("")}
        {isChangingLegalName ? (
          <>
            <li>What is your desired legal name?</li>
          </>
        ):("")}
        <li>What is your date of birth?</li>
        {hasCriminalRecord ? (
          <>
            <li>Have you completed the required law enforcement notices, 
            if any?</li>
          </>
        ):("")}
        <li>Have you lived in Texas for over 6 months and this county for 
        over 90 days?</li>
        <li>Are you {age && age < 18 && ", the petitioner, "} doing this 
        for fraudulent reasons?</li>
        {age && age < 18 && isChangingLegalName ? (
          <>
            <li>Why do you, the petitioner, want to change this minor’s name?</li>
          </>
        ):("")}
        {age && age < 18 && isChangingLegalSex ? (
          <>
            <li>Why do you, the petitioner, want to change this minor’s gender?</li>
          </>
        ):("")}
        {isChangingLegalName ? (
          <>
            <li> {age && age < 18 && "(To the minor) "} In your own words, 
            why do you want to change your name?</li>
          </>
        ):("")}
        {isChangingLegalSex ? (
          <>
            <li> {age && age < 18 && "(To the minor) "} In your own words, 
            why do you want to change your gender?</li>
          </>
        ):("")}
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

      {age && age < 18 ? (
        <p>
          The judge will then direct any petitioners who did not sign the “Order 
          Changing Name of a Minor” to do so and should then sign as well. Your 
          petitioner should receive that signed copy of the “Order Changing Name 
          of a Minor” which we will call the court order from now on. Your 
          petitioner will want to get two or three certified copies of that court 
          order from the clerk's office if they haven’t already pre-ordered them. 
          Keep the original in a safe place and use the copies to update your 
          other documents.
        </p>
      ):(
        <p>
          At this point the name change should be granted and the hearing 
          should end promptly. You should receive a signed copy of the “Order 
          Changing Name of an Adult”, which we will call the court order from 
          now on, as well as the pre-ordered copies from earlier. Keep the 
          original court order in a safe place and use the copies to update 
          your other documents.
        </p>
      )}
    </section>
  );
}

export default TexasCourtHearingGuide;

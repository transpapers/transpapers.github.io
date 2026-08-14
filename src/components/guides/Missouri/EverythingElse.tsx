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
import { type MissouriCounty } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";

function MissouriEverythingElseGuide({
  person,
}: {
  person: Person;
}) {
  const { residentJurisdictionName, residentLocalityName } = person;
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;
    const residentLocality: MissouriCounty = localities.find(
    (j) => j.name === residentLocalityName,
  ) as MissouriCounty;

  return (
    <section key="MO-EverythingElse">
      <h3>Everything Else (MO)</h3>
      <p>
        Once you have the court order and primary identification in your new name, 
        you should be able to  change your name almost everywhere else without issue. 
        Some places will even allow for digital updates by scanning in your new ID 
        and court order. What follows is a list of places, in no particular order, 
        where you may want to update your name. Any forms that you fill out should 
        be signed in your new legal name.
      </p>

      <p>
        <strong>Bank</strong>: Bring your new ID and court order and request that 
        the name on your account(s) be changed. If you have a debit card or 
        checkbook linked to this account, you will need to request new ones. Any 
        joint account holders must also be present to sign.
      </p>
      <p>
        <strong>Credit Card</strong>: Most creditors will require you to snail 
        mail or fax a photocopy of your ID and court order. If a particular 
        company is stubborn in updating the account name, consider canceling 
        the card and opening a new card with them or another provider.
      </p>
      <p>
        <strong>Work</strong>: If you have an HR system, bring your new ID, new 
        social security card, and court order to them and ask them to update your 
        name. If you get your health insurance through your work, you can have 
        your employer  send the updated information to your health insurer on 
        your behalf.
      </p>
      <p>
        <strong>Healthcare Providers</strong>: You should be able to bring only 
        your new ID to your next in-person visit and go to the front desk to 
        have your name updated in the system. Be aware that certain medical 
        professionals will still need to know your transition status.
      </p>
      <p>
        <strong>Property/House Title</strong>: Go to your local county recorder’s 
        office and state that you want to correct the name on your property. They 
        should issue a correction deed that you can fill out and submit to update 
        your name.
      </p>
      <p>
        <strong>Phone Service</strong>: Go to the nearest store of your carrier 
        network with your new ID and court order and request that your information 
        be updated.
      </p>
      <p>
        <strong>Taxes (IRS)</strong>: The IRS will be informed of your name change 
        when you update your information with Social Security. You do not need to 
        contact them directly.
      </p>
      <p>
        <strong>Voter Registration</strong>: To update your voter registration or 
        to register for the first time, you will need to finish filling out the 
        “Missouri Voter Registration Application” (Form 231-0169) we provided. 
        Specifically, fill out any blanks we left and boxes 7, 8, 13, and 15 if 
        applicable. Then sign and date in box 14. If this is your first time 
        registering, read section 6 in the “Other Information” section and include 
        one of the mentioned items with this application. There is{" "}
        <strong>no fee</strong> for this process. Mail this application to the 
        following address: 
        <br />
        <br />
        {residentLocality.voteClerkAddress}
      </p>
      <p>
        <strong>Primary School Records</strong>: Each school will have different 
        requirements and protocols; contact them and see what theirs are. Usually, 
        they will change records based on an updated birth certificate.
      </p>
      <p>
        <strong>College Records</strong>: Contact the Student Records Department 
        of your university. Required documents will vary by institution. You may 
        also consider updating your school profile and email, if applicable.
      </p>
    <p>
        <strong>Government Assistance</strong>: Contact your assistance agency to 
        update their case file. You should only need a primary ID and a court 
        order.
      </p>
      <p>
        <strong>Some other places to consider:</strong>
      </p>
      <ul>
        <li>Gas/heating provider</li>
        <li>Electricity provider</li>
        <li>Water/sewer company</li>
        <li>Internet provider</li>
        <li>Garbage service</li>
        <li>Mortgage</li>
        <li>Retirement account</li>
        <li>Clubs/memberships</li>
        <li>Municipal tax authorities</li>
        <li>Online payment services (Venmo, PayPal, etc.)</li>
        <li>Public transit accounts</li>
        <li>Monthly subscriptions (Netflix, Hulu, etc.)</li>
        <li>Voicemail</li>
      </ul>
    </section>
  );
}}

export default MissouriEverythingElseGuide;

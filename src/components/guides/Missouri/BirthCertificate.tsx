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

function MissouriBirthCertGuide({ person }: { person: Partial<Person> }) {
  const { gender, age, residentJurisdictionName, isChangingLegalName, isChangingLegalSex } = person;

  return (
    <section key="MO-Gender-Change">
      <h3>Court Order Gender Change (MO)</h3>

      <p>
        <strong>Warning</strong>: We have received reports that individuals within 
        the Missouri Department of Health and Senior Services are being increasingly 
        antagonistic and transphobic. That being said, we have still been able to 
        successfully get requests processed at this time. Monitor the status of your 
        request closely and follow our instructions carefully, as they will attempt 
        to deny any request that they can for any reason. This warning will update 
        if the situation changes.
      </p>

      {gender && (gender as string) === "X" ? (
        <p>
          <strong>Note</strong>: Missouri does not currently support an “X” marker 
          on any ID document, so it is not possible to change to that marker here. 
          Only “M” (i.e., male) or “F” (i.e., female) is accepted. We apologize. If 
          you want to change to one of those, you can reload the website and select 
          that marker to receive the updated “Affidavit for Correction of a Birth, 
          Death, or Fetal Death Record” (form 580-0645) and DHSS Cover letter. 
          Ignore everything else.
        </p>
      ) : ("")}

      <p>
        This process is done by mail. The first thing to do is to find the “Affidavit 
        for Correction of a Birth, Death, or Fetal Death Record” (form 580-0645) we 
        provided.
        {age && age < 18 ? (
          <>
            Have the parent/guardian listed in step 4 fill out any blanks we left in 
            that step; they should <strong>not</strong> sign their name until a 
            notary tells them to do so.
          </>
        ) : (
          <>
            Double-check that the information on the form is correct and bring it to 
            a notary; do <strong>not</strong> sign the form until a notary tells you 
            to do so.
          </>
        )}
      </p>

      {isChangingLegalName === false || residentJurisdictionName !== "Missouri" ? (
        <p>
          Notaries can be found in court buildings, banks, some{" "}
          <a href="https://www.theupsstore.com/tools/find-a-store">
            UPS Locations
          </a>
          , or <a href="https://www.notarize.com/">online</a>. All of these
          services have different fees and payment methods but all of them require
          a photo ID.
        </p>
      ) : (
        <p>
          Go back to the “Finding a Notary” section and use the links there to locate 
          another notary to handle the “Affidavit for Correction of a Birth, Death, 
          or Fetal Death Record” (form 580-0645). Once
          {age && age < 18 ? " your parent/guardian has" : " you have"} met with the 
          notary, proceed on
        </p>
      )}

      <p>
       Then grab the DHSS Cover letter we provided and{" "}
       {age && age < 18 && "have both you and your parent/guardian "} sign and date 
       it. Then place that cover letter, the notarized affidavit form,
       {isChangingLegalSex === true ? ", a certified copy of the gender change order, " : ", "}
       and a certified copy of the court order into an envelope. Have a $30 check 
       or money order made out to “Missouri Department of Health and Senior Services” 
       and placed in the envelope as well (this will cover the $15 fee to process the 
       court order and the $15 fee for a copy of the new birth certificate).{" "}
       <strong>Do not send cash.</strong> Then write the following address on the front 
       of the envelope:
      </p>

      <p>
        <span>DHSS - Bureau of Vital Records,</span>
        <br />
        <span>Missouri Department of Health and Senior Services,</span>
        <br />
        <span>930 Wildwood Drive,</span>
        <br />
        <span>Jefferson City, MO 65109</span>
      </p>

      <p>
        Take the envelope to your local post office and pay $4 to have it sent by 
        certified mail, so you will have proof that they received it. It will take 
        several weeks for the change to be processed, but the returned (amended) 
        birth certificate will include evidence of your former information by 
        indicating which field(s) were changed (e.g., Sex, First Name). If you need 
        to contact Vital Records, you can call them at (573) 751-6387 or email them 
        at VitalRecordsInfo@health.mo.gov to inquire about your request.
      </p>

      <p>
        After you have submitted your application (via certified or priority mail), 
        we recommend calling Vital Records to ask what date they’re working on and 
        continuing to call to check up on your application’s status.
      </p>

    </section>
  );
}

export default MissouriBirthCertGuide;

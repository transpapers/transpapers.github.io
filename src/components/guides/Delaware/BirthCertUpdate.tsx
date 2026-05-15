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

function DelawareBirthCertUpdateGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, gender, parentsAreOkay, isChangingLegalName, residentJurisdictionName } = person;

  return (
    <section key="Delaware-BirthCertUpdate">
      <h3>Updating your Birth Certificate (DE)</h3>
      <p>
        This process can be done either in-person or by mail.
      </p>

      {isChangingLegalSex &&
        <>
          <p>
            <strong>Note</strong>: There is a new law that is under consideration,{" "}
            <a href="HB375">
              https://www.billtrack50.com/billdetail/1998788
            </a> 
            {" "}, that would make this process much easier by removing the need to get 
            medical approval.{" "}
            {gender && (gender as string) === "X" && 
              "It will also add an “X” option for the gender marker."}
            {" "}If it passes send us a{" "}
            <a href="tip">
              https://tinyurl.com/mgdc-feedback
            </a> 
            {" "} and this note will update on the date of passage as well as the date of 
            implementation. For now though use the steps below to update your gender 
            marker.
          </p>

          <p>
            The first form you will need is the “Healthcare Provider's Affidavit for Sex 
            Change on Birth Certificate”. You will need to bring this form to a licensed 
            therapist, counselor, physician, nurse, or social worker. They can then fill 
            it out on your behalf.{" "}
            {gender && (gender as string) === "X" && 
              <>
                Unfortunately Delaware currently does not have an “X” designation, you 
                will need to tell your provider to mark either “Male” or “Female” in the 
                certification paragraph near the bottom of the first page.
              </>
            }
            It is important to note that you do <strong>not</strong> need any specific 
            medical treatment or surgeries for this person to be able to sign the form. 
            Do <strong>not</strong> have anything in the “Notary Acknowledgment” filled 
            out, that's for a notary later.
          </p>

          <p>
            The second form is the “Requester's Affidavit for Sex Change on Birth 
            Certificate” which is for you to fill out.{" "}
            {age && age < 18 && !parentsAreOkay &&
              <>
                If you have a legal guardian they will need to check the “guardian” box 
                on the form and attach certified copies of the court ordered 
                guardianship papers.
              </>
            }{" "}
            {gender && (gender as string) === "X" && 
              <>
                Unfortunately Delaware currently does not have an “X” designation, you 
                will need to check either “male” or “female” in the applicable box.
              </>
            }{" "}
            Write the name of the provider who filled out your Healthcare Affidavit on 
            the line below the “For Minors” section. Do <strong>not</strong> fill out 
            anything else unless a notary instructs you to do so.
          </p>

          {residentJurisdictionName !== "Delaware" || !isChangingLegalName ?
          <p>
            Notaries are needed to witness signatures and provide their own. Notaries can
            be found in court buildings, banks, some{" "}
            <a href="UPS locations">
              https://www.theupsstore.com/tools/find-a-store
            </a>
            , or <a href="online">https://www.notarize.com/</a>. All of these
            services have different fees and payment methods but all of them require
            a photo ID.
          </p>
          :
          <p>
            {age && age < 18 ? "Your parent/guardian" : "You"} will need to meet with a 
            notary to stamp both of these forms.
          </p>
          }
        </>
      }

      <p>
        If you want to do this by mail {age && age < 18 ? "your parent/guardian " : "you "}
        will need to make a photocopy of both sides of
        {age && age < 18 ? " their" : " your"} drivers license/state ID. Otherwise make 
        sure to bring it to the Office of Vital Statistics.
        {age && age < 18 ? " Your parent/guardian" : " You"} will also need your original 
        birth certificate and any certified copies,
        {isChangingLegalName && " a certified copy of your court order, "}
        {isChangingLegalSex && " both of the affidavit forms from earlier, "} and a $25 
        check/money order made out to “Office of Vital Statistics”. Then either take or mail 
        these things to the following address:
      </p>

      <p>
        <span>Office of Vital Statistics</span>
        <br />
        <span>Jesse Cooper Building</span>
        <br />
        <span>417 Federal St, Dover, DE 19901</span>
      </p>

      <p>
        It should take approximately two weeks for them to send back the updated birth 
        certificate. If not, call them at (302) 744-4549 to check if there are any 
        issues. The new certificate should not have any evidence of a change and all 
        traces of your old information should be removed from it.
      </p>

    </section>
  );
}

export default DelawareBirthCertUpdateGuide;

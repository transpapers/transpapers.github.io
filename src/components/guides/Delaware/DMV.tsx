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

function DelawareDMVGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, birthName, gender, birthJurisdictionName, isChangingLegalName } = person;

  return (
    <section key="Delaware-DMV">
      <h3>Primary ID (DE)</h3>
      <p>
        This section covers the process of updating your primary identification 
        (driver’s license/state ID) and any vehicle registrations you may have. If 
        this is not relevant to you, then skip this section. You can update your ID at 
        any DMV in the state, this{" "}
        <a href="link">
          https://dmv.de.gov/About/contact_info/index.shtml
        </a> 
        {" "}has the location and contact information for all of them. If you opt 
        for the Wilmington location you will need to make an appointment at this{" "}
        <a href="link">
          https://appointments.dmv.de.gov/
        </a> 
        , the rest are walk-in. It costs $10 to update an existing license or state 
        ID and $40 to apply for the first time.
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
            If you are applying for a license or ID for the first time they will use the 
            gender marker on your{" "}
            <a href="proof of ID">
              https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_doc_table
            </a> 
            {" "}, usually your birth certificate.{" "}
            {birthJurisdictionName === "Delaware" ? 
              <>
                You can update the marker on your birth certificate before you do this to 
                have the marker set correctly from the start. To do so go to the “Birth 
                Certificate” section below.
              </> 
              : 
              <>
                Depending on where you were born it may not be possible to update the 
                gender marker on your birth certificate. All you need to do then is apply 
                for a license or state ID and update the marker afterwards.
              </>
            }
          </p>

          <p>
            To update the gender marker on an existing drivers license or state ID you 
            will need the “Request for Gender Change on Driver License/Identification 
            Card” (MV2020) form. In section A you need to fill in the driver license 
            number field and check what type of license it is at the bottom of the 
            section.{" "}
            {gender && (gender as string) === "X" && 
              <>
                Unfortunately Delaware currently does not have an “X” designation, you 
                will need to pick either “Male” or “Female” in section B.
              </>
            }
            {" "}Do <strong>not</strong> fill anything else out at this time.
          </p>

          <p>
            You will then need to bring this form to a licensed therapist, counselor, 
            physician, or social worker. If you are updating the marker on your birth 
            certificate you can do both of these at the same time. The best option is 
            someone who is already giving you trans-related care but that is not 
            required. They will need to fill out and sign section C. It is important 
            to note that you do <strong>not</strong> need any specific medical treatment 
            or surgeries for this person to be able to sign the form. Once this has been 
            accomplished, sign and date with your old name in section D. Do{" "}
            <strong>not</strong> fill out anything in section E. Bring this form with you 
            when you go to the DMV and give it to the clerk.
          </p>
        </>
      }

      <p>
        If you have a Delaware drivers license or state ID already you will need to bring 
        it. If you are applying for the first time you will need to bring an ID on this{" "}
        <a href="list">
          https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_doc_table
        </a> 
        {" "}under the “Proof of Identity/Legal Presence” section.{" "}
        {isChangingLegalName && 
          "You will also need to bring a certified copy of your court order."}
        {" "}
        {birthName && 
          <>
            Since your name has changed multiple times you will need to bring a certified 
            copy of every change just like {age && age < 18 ? "your Petitioner" : "you"} did
            for the court. For first time ID applications the fee is $40, to update an 
            existing ID the fee is $10.
          </>
        }
        {age && age < 18 &&
          <>
            You will need at least one parent/legal guardian to accompany you to the DMV 
            for this process.
          </>
        }
      </p>

      <p>
        Optionally you may also update the name on your vehicle registration(s) and 
        title(s). You will need to bring along your vehicle's current certificate of 
        title, registration card, and valid proof of Delaware liability insurance to do 
        this. Ask the clerk for a new certificate of title and registration card and be 
        prepared to pay an additional $35.
      </p>

      <p>
        If your vehicle has a lien, tell the clerk and they will give you an MV35 form. 
        Fill it out with your new name and give that to the lienholder. They will mail 
        it to the DMV who will notify you when to pick up the documents and pay $55.
      </p>

    </section>
  );
}

export default DelawareDMVGuide;

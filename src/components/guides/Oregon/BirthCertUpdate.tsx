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

function OregonBirthCertUpdateGuide({ person }: { person: Person }) {
  const { age, parentsAreOkay, birthJurisdiction} = person;

  return (
    <section key="Oregon-BC-Update">
      <h3>Birth Certificate Update (OR)</h3>

      
      {age && age < 18 ? (
        <>
          <p>
            {birthJurisdiction && birthJurisdiction === "Oregon" ? (
              " A court case is not required to update your information, instead it can be updated by changing your birth certificate information and updating everything else using that. "
            ) : ("")}
            The form used to update a birth certificate is the "Application to Change the Name
            and/or Sex on a Record of Live Birth to Support Gender Identity". If your 
            parents/guardians mailing address is different from their listed address they will 
            need to put it in number 3. They will also need to fill out items 6 and 15. 
            Do <strong>not</strong> sign/date the form until a notary instructs you to do so. 
          </p>

          <p>
            Notaries can be found in court buildings, banks,{" "}
            <a href="https://www.onpointcu.com/faq/do-you-offer-notary-services/">OnPoint Credit Unions</a>
            , some <a href="https://www.theupsstore.com/tools/find-a-store">UPS Locations</a>
            , or{" "} <a href="https://www.notarize.com/">online</a>. There may
            be a fee for this required service.
          </p>

          <p>
            After the form is notarized your parent/guardian will need a large envelope,
            {birthJurisdiction && birthJurisdiction === "Oregon" ? (" ") : (
                " a copy of your court order, ")}
            a photocopy of their ID (both sides), and payment. If your parent is filling this 
            out and their name does not match the one on your birth certificate they will need to 
            attach documentation of the change (e.g. marriage certificate, divorce certificate, 
            court order, etc…) <strong>photocopies only</strong>.
            {parentsAreOkay && parentsAreOkay === true ? ("") : (
                " Legal guardians need to provide proof of guardianship. "
            )}
            If they do not have a driver's license or state ID the “Oregon Vital Records 
            Acceptable Proofs of Identity” we included has a list of acceptable alternatives 
            to photocopy. For payment they take either checks or money orders made out to 
            “Oregon Vital Records”. Mail the application to the following address:
          </p>
        </>
      ) : (
        <>
          <p>
            The form used to update a birth certificate is the “Application to Change the Name 
            and/or Sex on a Record of Live Birth to Support Gender Identity”. If your mailing 
            address is different from your listed address put it in number 3. You will then need 
            to fill out item 15, specifically the number of copies that you want and what form 
            you want them in. Do <strong>not</strong> sign/date the form until a notary 
            instructs you to do so.
          </p>

          <p>
            Notaries can be found in court buildings, banks,{" "}
            <a href="https://www.onpointcu.com/faq/do-you-offer-notary-services/">OnPoint Credit Unions</a>
            , some <a href="https://www.theupsstore.com/tools/find-a-store">UPS Locations</a>
            , or{" "} <a href="https://www.notarize.com/">online</a>. There may
            be a fee for this required service.
          </p>

          <p>
            After your form is notarized you will need a large envelope, a copy of your court 
            order, a photocopy of your ID (both sides), and payment. If you do not have a 
            driver's license or state ID the “Oregon Vital Records Acceptable Proofs of Identity” 
            we included has a list of acceptable alternatives to photocopy. For payment they take 
            either checks or money orders made out to “Oregon Vital Records”. Mail the 
            application to the following address:
          </p>
        </>
      )}

      <p>
        <span>Oregon Vital Records</span>
        <br />
        <span>PO Box 14050</span>
        <br />
        <span>Portland, OR 97293</span>
      </p>

      <p>
        Alternatively the letter can be placed in a dropbox at 800 NE Oregon St, Portland. 
        It may take up to six months to process once the letter is sent.
        {age && age < 18 ? (
          <>
            {birthJurisdiction && birthJurisdiction === "Oregon" ? (
              " According to the Social Security Administration's " +
              <a href="https://secure.ssa.gov/poms.nsf/lnx/0110212090">rules</a> + 
              " when the new birth certificate and correspondence letter arrive a " +
              " parent/guardian can update your information at Social Security using " +
              " those documents. Ignore any mention of the court order in those guides."
            ) : ("")}
          </>
        ) : ("")}
      </p>
    </section>
  );
}

export default OregonBirthCertUpdateGuide;

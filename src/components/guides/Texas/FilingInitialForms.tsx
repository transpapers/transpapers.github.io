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
import { TexasCounty } from "../../../types/locality";

function TexasFilingInitialFormsGuide({
  person,
  locality,
}: {
  person: Person;
  locality: TexasCounty;
}) {
  const { age, residentLocality, isChangingLegalSex, isChangingLegalName, hasCriminalRecord, birthJurisdiction } = person;
  const { backgroundCheckRequired } = locality;

  return (
    <section key="TX-InitialForms">
      <h3>Filing Initial Forms (TX)</h3>

      {residentLocality ? (
      <>
        <p>
          {isChangingLegalName && isChangingLegalSex ? (
            <>
              <span> Name Change Section: </span>
              <br />
            </>
          ):("")}
            Some counties have specific requirements for attaching standing orders, county 
            specific forms, or other unique processes specific to them. In addition some 
            counties have several different courts that the case could be assigned to. We 
            have tried to record all of them but some may have slipped through the cracks. 
            If this is the case for you please give us a{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsFASZLlzuD10ILk2xQar2Hu__iv4zCE-XpIGw9_EQck9Sjw/viewform?usp=sf_link">
              tip
            </a>
            . If there is a standing order for your court it will be in the documents list, 
            include it when filing. The filing location is at the {residentLocality.name} 
            {" "}county district clerk’s office, located at {residentLocality.court.address}.
          {age && age < 18 && (
            <>
              Whoever filled out the paperwork as your petitioner has to be
              the one who files the paperwork at court if they are doing
              in-person filing.
            </>
          )}
        </p>

        {residentLocality.court.specificCourtInfo && (
          <p>{residentLocality.court.specificCourtInfo}</p>
        )}

        <p>
          <strong>
            By state law, court clerks are barred from answering questions
            about the forms.
          </strong>{" "}
          We recommend that you direct any questions you may have to the
          court’s legal assistance center, a local LGBT organization, or an
          attorney.
        </p>

        <p>
          The clerk will need all of the name change forms
          {age && age < 18 ? " and the fee waiver. " : 
          ", the fee waiver, and the filled out fingerprint card(s). "}
          {hasCriminalRecord ? (
            <>
              If you meet the requirements of the criminal history questions you also need 
              to provide the applicable documents listed on the checksheet at the end of 
              the petition form.
            </>
          ):("")}
          Payment for the filing fee will be needed if the fee waiver is not filed,
          {age && age < 18 ? " Your petitioner" : " You"} can call ahead at
          {residentLocality.court.phone} to check the filing fee cost and accepted payment 
          types. Some counties also allow E-filing instead of in-person, 
          {age && age < 18 ? " they " : " you "} can check with the clerk and E-file{" "}
          <a href="https://efiletx.tylertech.cloud/OfsEfsp/ui/landing">
            here
          </a>
          {" "}if they say yes.{" "}
          {age && age < 18 ? "" : 
            " If so, take the fingerprinting card to your court hearing unless the clerk says otherwise. "}
        </p>

        <p>
          For in-person filing the “Civil Case Information Sheet” is also needed.
          {age && age < 18 ? (
            <>
              All petitioners and co-petitioners need to be listed in section 1 under the 
              “Plaintiff(s)/Petitioner(s)” header, add names to the back if needed. Then 
              your petitioner should sign in section 1 on the bottom left.
            </>
          ):(" Just sign in the bottom left corner of section 1. ")}
          Make sure to pre-pay for one or two certified copies of the “Order Changing 
          Name of {age && age < 18 ? "a Child”" : "an Adult”"} if possible. The fee waiver 
          will <strong>not</strong> cover the cost of the copies. Once they have all of 
          the paperwork they should give back a case number and a hearing date.
        </p>

        {age && age > 17 && backgroundCheckRequired ? (
          <>
            <p>
              For the background check you will need to send a fingerprint card, a court 
              stamped copy of your petition, and a check/money order made out to the 
              “Texas Department of Public Safety” for $28.25. The mailing address is:
            </p>

            <p>
              <span>Texas Department of Public Safety</span>
              <br />
              <span>Central Cash Receiving</span>
              <br />
              <span>P. O. Box 15999</span>
              <br />
              <span>Austin, Texas 78761-5999</span>
            </p>

            <p>
              They will send the results directly to the court so do{" "}
              <strong>not</strong> expect a response from DPS.
            </p>
          </>
        ):("")}
      </>
      ) : (
        <p>Could not generate, missing residentLocality</p>
      )}

      <p>
        Some courts will require a hearing, others will not.
        {age && age < 18 && (
          <>
            If there is no hearing they may ask for your petitioner to file an “Information 
            on Suit Affecting the Family Relationship (Excluding Adoptions)” (VS-165) 
            form in addition to everything else. In that case they should use the one we 
            provided. Otherwise that form will be asked for after the hearing. This form 
            needs to be printed out <strong>double-sided</strong>, if that is not possible 
            your petitioner should instead get one from the court and fill it out like we 
            have. They should also fill out box “19d” and then hand it to the clerk who 
            will fill out the rest.
          </>
        )}
        Without a hearing the court will send the “Order Changing Name of 
        {age && age < 18 ? "a Child”" : "an Adult”"} in the mail several weeks later. 
        If this happens you can skip the “Hearing” section.
      </p>

      <p>
        {isChangingLegalName && isChangingLegalSex ? (
          <>
            <span> Gender Change Section: </span>
            <br />
          </>
        ):("")}
        For gender changes Travis county offers either in-person filing or E-filing. For 
        in-person filing they are located at the Travis county district clerk’s office, on 
        the 3rd floor of 1700 Guadalupe St, Austin, TX 78701. 
        {age && age < 18 ? " Only the petitioner needs to be present to file in-person. " : ""}
        For E-filing use this{" "}
        <a href="https://efiletx.tylertech.cloud/OfsEfsp/ui/landing">
          link
        </a>
        . Help with E-filing is available as a guide{" "}
        <a href="https://selfhelp.efiletexas.gov/srl">
          here
        </a>
        {" "}or as a series of step by step videos from the Trans Legal Aid Clinic{" "}
        <a href="https://www.youtube.com/watch?v=2HODDeFNztg">
          here
        </a>.
      </p>

      <p>
        <strong>
          By state law, the court clerks in Travis county are barred from answering 
          questions about the forms.
        </strong>{" "}
        We recommend that you direct any questions you may have to the
        court’s legal assistance center, a local LGBT organization, or an
        attorney.
      </p>

      <p>
        For in-person filing the clerk will need all of the completed gender change forms,
        {age && age < 18 ? 
          " a copy of the minors birth certificate, " : " a completed fingerprint card, "}
        {hasCriminalRecord ? (
          <>
            If you meet the requirements of the criminal history questions you also need 
            to provide the applicable documents listed on the checksheet at the end of 
            the petition form.
          </>
        ):("")}
        Once everything has been filed they will process the documents and send out a 
        notice either by email or snail mail several weeks later. If this notice has not 
        been received after 4 months of waiting 
        {age && age < 18 ? " your petitioner" : " you"} can call the Travis county law 
        library at (512) 854-8677 to check up on the case. A hearing will be very unlikely, 
        if one is scheduled that usually means that there was a paperwork error or 
        something related to criminal history.
      </p>

      <p>
        When the court reaches out with notice 
        {age && age < 18 ? " your petitioner" : " you"} will need to contact the district 
        clerk and order one certified copy of the signed Order Following to use for later. 
        We will call the Order Following that the judge signed the “court order” from here 
        on. Keep the original in a safe place. 
        {birthJurisdiction?.name === "Texas" ? "" : 
          " You can use the copy to update your birth certificate in a later section."}
      </p>
    </section>
  );
}

export default TexasFilingInitialFormsGuide;

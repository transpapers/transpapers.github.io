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

function NewYorkBirthCertUpdateGuide({ person }: { person: Person }) {
  const { age, parentsAreOkay, residentJurisdiction } = person;

  return (
    <section key="NewYork-BC-Update">
      <h3>Birth Certificate Update (NY)</h3>

      <p>
        If you were <strong>born</strong> in New York City use the below
        section, otherwise use the New York State section.
      </p>

      {age && age < 18 ? (
        <>
          <p>
            <span><strong>New York City</strong>:</span>
            <br />
            To change the name and/or gender marker on your birth certificate you will
            need a copy of the court order, the "Application for the Correction of a
            NYC Birth Certificate" (VR 172), and the "Attestation Form for Named Parents
            or Legal Guardians or a Registrant Younger Than 18 Years Old". For the 
            application a parent/guardian will need to fill out their apartment
            number (if applicable), marital status, and your birth certificate number at
            the top of page 2. They will also need to fill out your place of birth at the
            bottom of page 2. Any parents listed on the birth certificate will need to
            sign and date at the top of page 4. The only exceptions for this are if one
            or both of the parents listed on the birth certificate are deceased. If that
            is the case have certified copies of the death certificate(s) ready. If you
            have a legal guardian and neither parent listed is alive they need to sign and
            date the third signature box on page 4. The fee is $40 + (the number of
            requested copies x $15). For one copy the fee should be $55, fill in the fee
            information on page 4 accordingly.
          </p>

          <p>
            For the self-attestation form have a parent/guardian fill in any blanks for
            sections 1 through 3. Section 4 can only be completed in front of a notary
            so do <strong>not</strong> sign until directed to do so.
            {residentJurisdiction && residentJurisdiction === "New York" ? (
              "For notary resources see the 'Getting Documents and a Notary' section above.") : ("")}
          </p>
        </>
      ) : (
        <>
          <p>
            <span><strong>New York City</strong>:</span>
            <br />
            To change the name and/or gender marker on your birth certificate you
            will need a copy of your court order, the "Application for the Correction
            of a NYC Birth Certificate" (VR 172), and the "Self-Attestation Form for
            Registrants 18 Years of Age and Older". Use black ink when filling out
            the forms. For the Application you will need to fill out your mailing 
            address, apartment number (if applicable), Marital status, and birth 
            certificate number at the top of page 2. You will also need to fill out 
            your place of birth at the bottom of page 2. You can then sign and date on 
            page 4 in the bottom signature box marked “Your Signature”. The fee is 
            $40 + (the number of requested copies x $15). For one copy the fee should
            be $55, fill in the fee information on page 4 accordingly.
          </p>

          <p>
            For the self-attestation form you will need to enter your birth certificate
            number in the “certificate number” box. Also add an apartment number to the
            street address, if applicable. The Attestation part below must be signed in
            front of a notary so do <strong>not</strong> sign until then.
            {residentJurisdiction && residentJurisdiction === "New York" ? (
              "For notary resources see the 'Getting Documents and a Notary' section above.") : ("")}
          </p>
        </>
      )}

      {residentJurisdiction && residentJurisdiction === "New York" ? ("") : (
        <p>
            Notaries can be found in court buildings, banks, some{" "}
            <a href="UPS locations">https://www.theupsstore.com/tools/find-a-store</a>
            , or{" "} <a href="online">https://www.notarize.com/</a>. There will
            be a fee for this required service.
        </p>
      )}

      <p>
        New York City allows for either an in-person appointment or a mail in. If you opt
        for mailing, have a check or money order made out to the “NYC Department of Health
        and Mental Hygiene” for the total amount as listed on page 4.
        {age && age < 18 ? (
          " Any living parents listed on the birth certificate will need to provide photocopies of a drivers license or state ID (front and back)"
        ) : (
          " You will need to make a photocopy of a state ID or drivers license (front and back). "
        )}
        {parentsAreOkay && parentsAreOkay === true ? (". ") : (
            ", otherwise provide a certified copy of a death certificate. If you have no living parents a legal guardian can send a photocopy of their ID, letter of guardianship, and both death certificates. "
        )}
        Place everything into an envelope and mail it to:
      </p>

      <p>
        <span>NYC Department of Health and Mental Hygiene Corrections</span>
        <br />
        <span>Unit Attention: Group A</span>
        <br />
        <span>125 Worth Street, Room 144, CN-4</span>
        <br />
        <span>New York, NY 10013</span>
      </p>

      <p>
        If you prefer an in-person appointment use this{" "}
        <a href="link">https://wb-nycdohmh.qmatic.cloud/qmaticwebbooking/#/</a> \
        {" "}to schedule one.
        {age && age < 18 ? (
            " Any living parents listed on the birth certificate will need to go and bring photo ID "
        ) : (
            " You will need to bring photo ID. "
        )}
        {parentsAreOkay && parentsAreOkay === true ? (". ") : (
            " or a death certificate for the other parent. If you have no living parents a legal guardian can bring both death certificates and their photo ID. "
        )}
        They accept credit/debit cards, checks, or money orders. <strong>No cash.</strong>
      </p>

      {age && age < 17 ? (
      <p>
        <span><strong>New York State</strong>:</span>
        <br />
        To change the name and/or gender marker on your birth certificate your parent/guardian(s) 
        will need a copy of the court order, a certified copy of your birth certificate, the 
        "Application for Amendment of Certificate of Birth for Gender Designation for a Minor" 
        (DOH-5306), and the "Notarized Affidavit of Gender Change for a Person 16 Years of Age or 
        Under" (DOH-5304). Use black ink when filling out the forms. For the DOH-5306 Application 
        there is a section asking for information from your current birth certificate that they 
        can fill out. Both parents/guardians will need to sign and date at the bottom.
        {parentsAreOkay && parentsAreOkay === true ? ("") : (
          " If you only have one parent/guardian they need to check the box above the signature line indicating that. "
        )}
        The DOH-5304 Affidavit will need to be filled out in front of a notary, do <strong>not</strong> 
        fill it out until directed.
        {residentJurisdiction && residentJurisdiction === "New York" ? (
            "For notary resources see the 'Getting Documents and a Notary' section above.") : ("")}
      </p>
      ) : (
      <p>
        <span><strong>New York State</strong>:</span>
        <br />
        To change the name and/or gender marker on your birth certificate you will need 
        a copy of your court order, a copy certified of your birth certificate, the 
        "Application for Amendment of Certificate of Birth for Gender Designation for an 
        Adult" (DOH-5305), and the "Notarized Affidavit of Gender Change for a Person 17 
        Years of Age or Older" (DOH-5303). Use black ink when filling out the forms. 
        For the DOH-5305 Application there is an optional section asking for information
        from your current birth certificate that you can fill out or you can give them a
        copy of the birth certificate instead. Sign and date it at the bottom. Leave the
        DOH-5303 Affidavit alone until you are in front of a notary, do 
        <strong>not</strong> sign or date it until directed.
        {residentJurisdiction && residentJurisdiction === "New York" ? (
            "For notary resources see the 'Getting Documents and a Notary' section above.") : ("")}
      </p>
      )}

      {residentJurisdiction && residentJurisdiction === "New York" ? ("") : (
        <p>
            Notaries can be found in court buildings, banks, some{" "}
            <a href="UPS locations">https://www.theupsstore.com/tools/find-a-store</a>
            , or{" "} <a href="online">https://www.notarize.com/</a>. There will
            be a fee for this required service.
        </p>
      )}

      <p>
        The New York State Vital Records department does mail in updates only. Have
        a $30 check or money order made out to the “NYS Department of Health”. Then
        place the payment, certified copy of your court order,
        {age && age < 17 ? (
            " DOH-5306 form, notarized DOH-5304 form, "
        ) : (
            " DOH-5305 form, notarized DOH-5303 form, "
        )}
        and a certified copy of your birth certificate into an envelope and mail it
        to:
      </p>

      <p>
        <span>New York State Department of Health</span>
        <br />
        <span>Vital Records Fulfillment Unit</span>
        <br />
        <span>P.O. Box 2602</span>
        <br />
        <span>Albany, NY 12220-2602</span>
      </p>
    </section>
  );
}

export default NewYorkBirthCertUpdateGuide;

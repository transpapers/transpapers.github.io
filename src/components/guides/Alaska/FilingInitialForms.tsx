/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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
import { AlaskaAdministrativeDivision } from "../../../types/locality";

function AlaskaFilingInitialFormsGuide({
  person,
}: {
  person: Partial<Person>;
}) {
  const { age } = person;
  const locality: AlaskaAdministrativeDivision =
    person.residentLocality as AlaskaAdministrativeDivision;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!locality) {
    return "";
  }
  const {
    doesNameChange,
    forwardsTo,
    inPersonFiling,
    trueFiling,
    emailFiling,
    emailCourt,
    faxFiling,
    faxNumber,
    court,
  } = locality;
  return (
    <section key="AK-InitialForms">
      <h3>Filing Initial Forms (AK)</h3>

      <p>
        Alaska has several different methods of filing depending on the court.
        Additionally some courts do not do name changes themselves but will
        still accept the paperwork, notarize it, and forward it to another
        court. Finally, if the paperwork was filed at the wrong court
        {age && age < 18 ? " your petitioner " : " you "} may ask them to
        forward the paperwork and payment to the correct court.
        {age && age < 18
          ? " In this case the correct court for your petitioner to file at is based on where you (the minor) lives, not the petitioner. "
          : " "}
        No matter what method is used a valid photo ID is needed to notarize the
        forms. Below is a list of filing methods for the {locality.name} court.
        {doesNameChange && forwardsTo?.court
          ? ""
          : " This court only forwards to the " +
            (forwardsTo?.court.city ?? "") +
            " superior court whose methods are also listed, file at either."}
      </p>

      {inPersonFiling ? (
        <p>
          <span> In-person - </span>
          <br />
          {age && age < 18 ? "Your petitioner " : "You "} can go directly to the{" "}
          {locality.name} court at {court.address} to file. The forms can be
          signed, dated, and notarized there. A webpage with more information is
          available{" "}
          <a href={court.website} title="here">
            {court.website}
          </a>
          . It has the hours of operation, accepted payment types, and a phone
          number to confirm that it is the correct place to file.
        </p>
      ) : (
        ""
      )}

      {trueFiling ? (
        <p>
          <span> True Filing - </span>
          <br />
          {age && age < 18 ? "Your petitioner " : "You "} can file online with
          the state&apos;s TrueFiling system at this{" "}
          <a href="https://akfile.truefiling.com/register">website</a>. There is
          also a video tutorial{" "}
          <a href="https://courts.alaska.gov/efile/videos/How_to_File_a_New_Civil_Case.mp4">
            here
          </a>
          . As a backup measure we have transcribed the instructions from the
          video below for {age && age < 18 ? " your petitioner " : " you "} if
          needed.
        </p>
      ) : (
        ""
      )}

      {trueFiling ? (
        <p>
          You can fill out the form to register an account and begin the filing
          process. Log in, click on “File” in the upper right hand section, and
          choose the “AK Trial Court” option. Under “Action” select “Initiate a
          new case” and select your name under “Filer”. Case types should then
          appear, one of which should say “Change of Name”. After you hit
          “Initiate Case” there will be a screen asking for Case information,
          select {locality.name} for “Filing Location” and then fill out the
          case type information as applicable. Then you should see a screen for
          “Party Information” which is just
          {age && age < 18 ? " you and your minor child. " : " you. "} Fill in
          the information there and hit “Finish” which should take you to a page
          where you can upload the filled out forms from earlier in our guide.
          Upload all of your forms listed in the previous part here, with the
          exception of the “Request for Exemption from Payment of Fees” (TF-920)
          do <strong>not</strong> upload that form here. Make sure that the
          names of your uploaded forms match the official form names as written
          in our guide above then hit “Next” twice to proceed to payment
          checkout. If you are paying the fee you can enter credit/debit card
          information here, otherwise hit the “Request Fee Waiver”, select the
          top option, and upload the completed (TF-920) form there.
        </p>
      ) : (
        ""
      )}

      {emailFiling ? (
        <p>
          <span> Email - </span>
          <br />
          {age && age < 18 ? "Your petitioner " : "You "} can file with the
          court using this email address {emailCourt}. In order to use this
          service the forms will need to be notarized by either a notary service
          or a court clerk from another court before they are sent. Notaries can
          be found in banks, some{" "}
          <a href="https://www.theupsstore.com/tools/find-a-store">
            UPS Locations
          </a>
          , or <a href="https://www.notarize.com/">online</a>. There will be a
          fee for this service and photo ID is required. Write an email to
          request a name change and attach all of the completed and notarized
          forms from the previous section. All emailed forms must also be
          emailed in PDF format, we recommend scanning the signed and notarized
          documents as separate PDF attachments and naming them exactly like
          they are in the previous sections of this guide. The court clerk will
          then send an email back with a special payment link if a completed
          “Request for Exemption from Payment of Fees” (TF-920) form with your
          documents was not sent.
        </p>
      ) : (
        ""
      )}

      {faxFiling ? (
        <p>
          <span> Fax - </span>
          <br />
          {age && age < 18 ? "Your petitioner " : "You "} can file with the
          court by faxing the completed and notarized forms from the previous
          section to this number {faxNumber}. In order to use this service the
          forms will need to be notarized by either a notary service or a court
          clerk from another court before the fax is sent. Notaries can be found
          in banks, some{" "}
          <a href="https://www.theupsstore.com/tools/find-a-store">
            UPS Locations
          </a>
          , or <a href="https://www.notarize.com/">online</a>. There will be a
          fee for this service and photo ID is required. If the fee waiver was
          denied or wasn&apos;t used the payment will be due on the day of the
          hearing.
        </p>
      ) : (
        ""
      )}

      {doesNameChange ? (
        ""
      ) : (
        <p>
          The {forwardsTo?.court.city} superior court allows for the following
          filing methods:
          {forwardsTo?.inPersonFiling ? (
            <>
              <span>In-person - at {forwardsTo.court.address}.</span>
              <br />
            </>
          ) : (
            ""
          )}
          {forwardsTo?.trueFiling ? (
            <>
              <span>
                True Filing - at this{" "}
                <a href="https://akfile.truefiling.com/register">website</a>.
              </span>
              <br />
            </>
          ) : (
            ""
          )}
          {forwardsTo?.emailFiling ? (
            <>
              <span>Email - at {forwardsTo.emailCourt}.</span>
              <br />
            </>
          ) : (
            ""
          )}
          {forwardsTo?.faxFiling ? (
            <>
              <span>Fax - at {forwardsTo.faxNumber}.</span>
              <br />
            </>
          ) : (
            ""
          )}
          Instructions for each method are listed in the above section.
        </p>
      )}

      <p>
        Once everything has been filed the clerk will send an “Order For
        Hearing, Posting, and Additional Service” (CIV-701) which will have the
        date of the hearing, whether the court will publicize your case
        information on the Alaska Court Systems legal notice website, whether
        others need to be informed about the hearing, and whether additional
        action is needed for publication. Additional publication and informing
        steps are rare and are usually due to
        {age && age < 18
          ? " name changes involving absentee parents/guardians, criminal records, or probation. "
          : " petitioners with criminal records or petitioners who are on probation. "}
        If {age && age < 18 ? " your petitioner has " : " you have "} been
        instructed to do this, {age && age < 18 ? " they should " : " "} follow
        the court&apos;s directions and fill out the Affidavit of Additional
        Service (CIV-702) and return a completed and notarized copy to the court
        as soon as possible. If the “Request for Exemption from Payment of Fees”
        (TF-920) was denied a filing fee will need to be paid in order to
        continue.
      </p>
    </section>
  );
}

export default AlaskaFilingInitialFormsGuide;

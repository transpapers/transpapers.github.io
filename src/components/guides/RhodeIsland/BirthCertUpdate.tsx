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

function RhodeIslandBirthCertUpdateGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="RhodeIsland-BC-Update">
      <h3>Birth Certificate Update (RI)</h3>

      <p>
        To update the name on a birth certificate you need the
        &quot;Application for a Certified Copy of a Birth
        Record&quot; form we provided. Specifically the one with &quot;Updating
        record&quot; written in the bottom right of section 3. Finish filling
        out the section 1 &quot;hospital&quot;
        field. If you have had your name changed by court order before this time
        then fill out the &quot;New name if changed in court&quot; field as
        well.
        {age && age < 18
        ? " Then have the parent/guardian whose name is listed in section 5 check the appropriate box in section 2 and sign/date section 5. "
        : " Then sign and date section 5 with your new name. "}
      </p>

      <p>
        To update the gender marker of a birth certificate you need to
        {age && age < 18 ? " have a parent/guardian " : " "} contact
        the RI Office of Vital Records directly by either calling (401) 222-2811
        or sending an email to doh.website@health.ri.gov. During this contact they
        need to be told that you want an updated gender marker on your birth
        certificate. They need to know your new legal name, your name at birth,
        date of birth, place of birth, old gender marker, and what the new marker
        will be. They accept M, F, or X as options. Finally make sure they have a
        good phone number and email address so they can send you a sworn affidavit.{" "}
        <strong>Leave this document unsigned until directed otherwise.</strong>
        {" "}Once you have the affidavit you are ready to file with the RI Office
        of Vital Records, this can be done either in person or by mail.
      </p>

      <p>
        For mail filing 
        {age && age < 18
            ? " a parent/guardian that is listed on the court order will "
            : " you will "}
        need to make a photocopy of a photo ID, such as a drivers license. The
        sworn affidavit will also need to be signed in front of a notary (see
        notary section above for resources). Finally place the notarized sworn
        affidavit, Application for a Certified Copy of a Birth Certificate,
        certified copy of the Court Order, and payment into an envelope. The
        fee is $35.00, they take cash, check, or money order. Make any checks
        payable to "General Treasurer, State of Rhode Island". Then mail it to:
        <p>
            <span>Rhode Island Department of Health</span>
            <br />
            <span>Office of Vital Records</span>
            <br />
            <span>6 Harrington Road</span>
            <br />
            <span>Cranston, Rhode Island 02920</span>
        </p>
      </p>

      <p>
        For in-person filing
        {age && age < 18
            ? " have a parent/guardian call "
            : " call "}
        (401) 222-5339 to make an appointment. Then
        {age && age < 18
            ? " a parent/guardian will need to "
            : " "}
              bring the{" "} <strong>unsigned</strong>
        {" "}sworn affidavit, Application for a Certified Copy of a
        Birth Certificate, the court order, and a photo ID. The address
        is the same as the mailing address above but the fee is $32.00
        for in-person. The affidavit can be signed in front of a notary
        at the Office of Vital Records when they say to. They will then
        check ID, collect the forms, and ask for the fee. 
      </p>

      <p>
        The updated birth certificate will arrive in the mail a few weeks
        later. There will be a marker showing that the name was updated,
        however, there will be no indicication that the gender marker was
        updated.
      </p>
    </section>
  );
}

export default RhodeIslandBirthCertUpdateGuide;

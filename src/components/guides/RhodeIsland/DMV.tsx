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

function RhodeIslandDMVGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="RI-DMV">
      <h3>Updating Primary ID (RI)</h3>
      <p>
        To update your primary ID you will need the following two forms, the
        &quot;Application for a License, Identification Card and Permit&quot;
        (LI-1) for changing name and the &quot;Gender Designation on a License
        or Identification Card&quot; for changing gender. For the LI-1 form you
        will need to select what type of primary ID you want in the first two
        sections of the &quot;Transaction Type&quot; category. From there review
        section A and fill in any blanks that are applicable to you (such as
        social security and/or driver&apos;s license number). Complete sections
        C & D as it pertains to you and ignore sections E & F. Do{" "}
        <strong>not</strong> sign in section G yet.
      </p>

      <p>
        As for the gender designation form, fill in your social security number
        and driver&apos;s license number (if applicable). Do{" "}
        <strong>not</strong> sign yet.
      </p>

      <p>
        You will need to schedule an in-person appointment at your local DMV,
        all Rhode Island locations are listed{" "}
        <a href="here">https://dmv.ri.gov/locations-hours</a>. You will need
        both forms, your current ID, your court order, and the receipt from
        social security. If you don’t have a current ID then bring the ID
        documents you used for Social Security. If you selected &quot;REAL
        ID&quot; you will also need an additional document, pick one on page 3
        of the LI-1 form under &quot;Proof of Identity&quot;. It is unusual but
        not impossible for them to ask for Proof of Residency which are also
        listed on page 3 of the LI-1 form. You <strong>don&apos;t</strong> need
        any proof or medical records for the gender form.
      </p>

      <p>
        When you {age && age < 18 ? " and a parent/guardian " : " "} arrive, tell
        the clerk that you want to update the name and/or gender marker on your
        ID and present the above documents to the clerk. Sign and date both
        forms in front of the clerk.
        {age && age < 18
          ? " A parent/guardian will need to sign the LI-1 form as well just below section G. "
          : " "}
        If you do not already have a driver’s license or state ID, tell the
        clerk that you are applying for one and take the same steps. Make sure
        the gender marker is set correctly before you leave. If you experience
        any issues or pushback politely insist on speaking to a manager, they
        should be more knowledgeable about this process. This should cost around
        $30.00 total.
      </p>

      <p>
        Optionally, you may also update your vehicle registration(s). You will
        be given another form, which you should sign and initial in your new
        legal name. You will be charged a fee for each vehicle.
      </p>
    </section>
  );
}

export default RhodeIslandDMVGuide;

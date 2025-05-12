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

// TODO Give this a once-over for style.
function SocialSecurityGuide({ person }: { person: Person }) {
  const { age, parentsAreOkay } = person;

  return (
    <section key="Federal-SocialSecurity">
      <h3>Updating Your Social Security Info</h3>

      <p>
        <strong>Warning</strong>, do not attempt to update your gender marker on
        this form, it will be rejected. If you changed your marker before
        January 31st 2025 and are coming back to change your name you should be
        safe to do so.
      </p>

      <p>
        Since all government databases use data from the Social Security
        administration, you must change your information with them first before
        you can change it anywhere else.
      </p>
      <p>
        First, complete the “Application for a Social Security Card” (form
        SS-5.) If you have had a legal name not shown in section 1 write it in
        "Other Names Used". Enter your SSN in section 2, and those of your parents
        in sections 9-10. If you do not know and/or cannot obtain their SSNs, mark
        “Unknown” in the appropriate section. The “Race” and “Ethnicity” fields
        are optional, and left blank; you may fill them in at your discretion.
      </p>

      {age && age < 18 ? (
        <p>
          Your parent/guardian should sign in section 17.
          {!parentsAreOkay &&
            " They should also complete section 18, as applicable."}
        </p>
      ) : (
        <p>Sign the document in section 17 in your old name.</p>
      )}

      <p>
        You can find the nearest Social Security office at{" "}
        <a href="https://secure.ssa.gov/ICON/main.jsp">
          https://secure.ssa.gov/ICON/main.jsp
        </a>
        . Social Security will only do name changes by appointment so call the
        number of the local office you selected using the above link and say you
        want a name change appointment. You will need identification to prove
        your identity, age, and citizenship. A state ID, drivers license, or
        passport will be acceptable. If you do not have those, refer to page 2
        of form SS-5 for other accepted forms of ID. You will also need to bring
        your completed Application for a Social Security Card (SS-5), as well as
        your court order. You will not be charged a fee for updating your
        information, it&apos;s free.
      </p>
      <p>
        At your appointment tell the clerk that you are updating your Social
        Security information. They will request the Social Security form, ID
        documents, and court order. They should then approve the name change and
        give you a receipt, which you should check for accuracy and keep for
        your records. This receipt is sufficient to update your Drivers License
        or State ID as early as the next business day; you do{" "}
        <strong>not</strong> need to wait for the new Social Security card in
        the mail.
      </p>
    </section>
  );
}

export default SocialSecurityGuide;

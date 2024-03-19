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

import * as React from 'react';

import { useSelector } from 'react-redux';

import { GenderMarker } from '../../../types/types';

// TODO Give this a once-over for style.
function SocialSecurityGuide() {
  const { gender, age, parentsAreOkay } = useSelector((state) => state.person);

  return (
    <section>
      <h3>Updating Your Social Security Card</h3>
      <p>
        Since all government databases use data from the Social Security
        administration, you must change your information with them first before
        you can change it anywhere else.
      </p>
      <p>
        First, complete the “Application for a Social Security Card” (form
        SS-5.) Enter your SSN in section 2, and those of your parents in
        sections 9-10. If you do not know and/or cannot obtain their SSNs, mark
        “Unknown” in the appropriate section. The “Race” and “Ethnicity” fields
        are optional, and left blank; you may fill them in at your
        discretion.
      </p>

      { gender === GenderMarker.X
        && (
        <p>
          Unfortunately, the SSA does not currently
          provide a nonbinary/”X” gender marker. You will need to check a binary
          gender in section 8; mark whichever you want.
        </p>
        )}

      { (age < 18)
        ? (
          <p>
            Your parent/guardian should sign in section 17.
            { !parentsAreOkay && ' They should also complete section 18, as applicable.' }
          </p>
        )
        : (<p>Sign the document in section 17 in your old name.</p>)}

      <p>
        You can find the nearest Social Security office at
        <a
          href="https://secure.ssa.gov/ICON/main.jsp"
        >
          https://secure.ssa.gov/ICON/main.jsp
        </a>
        .
        We recommend that you call to check if your chosen location is by
        appointment only. You will need identification to prove your identity,
        age, and citizenship. A state ID, drivers license, or passport will be
        acceptable. If you do not have those, refer to page two of form SS-5 for
        other accepted forms of ID. You will also need to bring your completed
        Application for a Social Security Card, as well as your court order.
        This service is provided free of charge.
      </p>
      <p>
        Tell the clerk that you are updating your Social Security
        information. They will request the Social Security form, ID documents,
        and court order. You should be informed that, as of 20 October 2022, the
        administration’s policy allows you to update your gender marker at any
        time without giving a reason. (See
        <a
          href="https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/"
        >
          https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/
        </a>
        .)
        They should approve the change and give you a receipt, which you should
        keep for your records. This receipt is sufficient to update your primary
        identification with the Secretary of State as early as the next business
        day; you do not need to wait for the new Social Security card in the
        mail.
      </p>
    </section>
  );
}

export default SocialSecurityGuide;

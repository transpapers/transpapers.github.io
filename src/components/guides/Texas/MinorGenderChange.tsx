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

function TexasMinorGenderChangeGuide({ person }: { person: Partial<Person> }) {
  const { hasCriminalRecord, parentsAreOkay, gender } = person;

  return (
    <section key="Texas-Minor-Gender-Change">
      <h3>Minor Gender Change (TX, Travis County)</h3>
      <p>
        Travis county uses the “Agreed Petition to Change the Sex/Gender
        Identifier of a Minor” (TC-FM-GI3-100) for this process. The
        parent/guardian listed in section 2A is your petitioner and will go with
        you to court. They will need to fill out the remaining blanks on these
        documents for you. If you have another parent/guardian they{" "}
        <strong>must</strong> sign this petition as a co-petitioner.
        {parentsAreOkay ? (
          <>
            In addition if there are any other adults with custody of you they{" "}
            <strong>must</strong> sign a “Respondent&apos;s Waiver of Service”
            form in front of a notary. This form will be covered later in this
            section.
          </>
        ) : (
          ""
        )}
        If a parent/guardian is deceased, get a certified copy of their death
        certificate and attach it to this form instead. If a parent/guardian
        with parental rights or custody doesn’t sign the case will become
        contested, which is beyond the scope of this guide. If that happens your
        petitioner will need to either hire a lawyer or you will need to wait
        until you are 18 to do the adult process. You can find legal help in the
        “Resources” section if needed.
      </p>

      <p>
        {gender && (gender as string) === "X" ? (
          <>
            Unfortunately Texas doesn&apos;t allow for an “X” identifier on its
            ID’s or Birth Certificates so there is no “X” option on these forms.
            Please go through these forms and check “M” or “F” where they are
            blank.
          </>
        ) : (
          ""
        )}
        Your petitioner should fill in any blanks that appear in sections 2,
        {parentsAreOkay ? " 3," : ""} 4C,
        {hasCriminalRecord ? (
          <>
            {" "}
            4H, and 4I. For 4H they are talking about using a “Sex Offender
            Update Form” (CR-32) to notify law enforcement.{" "}
          </>
        ) : (
          " and 4I. "
        )}
        Then your petitioner and any potential co-petitioner will need to sign
        in section 7. They will also need to fill out sections 8 or 9 as needed.
        Signing in sections 8 or 9 is under threat of perjury, make sure the
        information on the form is accurate <strong>before</strong> signing.
        Section 10 is a checklist for additional documents, we will cover the
        first 3 items later in this section and in the next section.
      </p>

      <p>
        The “Final Order to Change the Name and Sex/Gender Identifier of a
        Minor” (TC-FM-GI3-200) is the form that the judge will sign and give
        back if they approve the change. They want it to be pre-filled so your
        petitioner will need to fill out any blanks in section 1. For any
        checkboxes about being present or not present check “not present” unless
        there was a hearing that said person attended. From there they should
        fill out any blanks in sections 4C through 4H with the same information
        as the petition. The petitioner and any co-petitioners should then sign
        and fill in their contact information in section 6 in the appropriate
        spots.
      </p>
    </section>
  );
}

export default TexasMinorGenderChangeGuide;

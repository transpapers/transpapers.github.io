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

function IllinoisChildInfoGuide({ person }: { person: Partial<Person> }) {
  const { parentsAreOkay, hasCriminalRecord } = person;

  return (
    <section key="Illinois-ChildInfo">
      <h3>Request for Name Change - Child Information (IL, NCM-CI 2004.5)</h3>
      <p>
        For the “Request for Name Change - Child Information” (NCM-CI 2004.5)
        form we have a{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/2e9231f7-fbb8-4b96-af93-692750debf13/NC-M%20Request%20for%20Name%20Change%20Child%20Information.pdf">
          blank
        </a>{" "}
        form in case your petitioner opts for an alternate address for 1d.
        {parentsAreOkay ? (
          ""
        ) : (
          <>
            Your parent/guardian needs to check the applicable box in section 2.
          </>
        )}
        {hasCriminalRecord ? (
          <>
            If you, the minor, have a criminal record your petitioner will need
            to check “yes” for any boxes that apply or “No” if they don&apos;t in
            section 3. Your petitioner cannot file this petition if you have
            been convicted of a felony and have yet to finish your sentence,
            including any parole. If box 23 is checked “Yes” your petitioner{" "}
            <strong>needs</strong> to check the “Gender-related identity as
            defined by the Illinois Human Rights Act” in order to ensure that
            the petition is still accepted and they will not face felony
            charges. If there is a hearing expect questions related to your
            gender identity. They should fill out 2g as needed.
          </>
        ) : (
          ""
        )}
      </p>

      <p>
        Moving to section 5 on page 4 your petitioner needs to fill out the
        other parent information section as it pertains to you.
        {parentsAreOkay ? (
          <>
            Your petitioner needs the signed and notarized consent of your other
            parent, said parent should <strong>not</strong> sign until a notary
            instructs them to do so.
          </>
        ) : (
          <>
            For 2a if one or both of your parents are deceased your petitioner
            will need to get certified copies of their death certificates to
            submit. Your petitioner needs the signed and notarized consent of
            any other parent(s), guardian(s), or other individuals with custody
            of you. Anyone who has had their parental rights terminated does not
            count, just have a certified copy of that parental rights
            termination order ready to submit. A non-petitioning parent should{" "}
            <strong>not</strong> sign this form until a notary instructs them to
            do so. If you have a guardian or other individual with custody of
            you then your petitioner needs the “Additional Parent Request for
            Name Change” (NCM-AP 2006.4) form we attached. Otherwise they can
            skip it.
          </>
        )}
        If your petitioner cannot get the signature(s) needed then the case will
        become contested which is beyond the scope of this guide, in that case
        we strongly recommend getting a lawyer. See the “Resources” section for
        help with that if needed.
      </p>
    </section>
  );
}

export default IllinoisChildInfoGuide;

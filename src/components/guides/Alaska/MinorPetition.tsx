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

function AlaskaMinorPetitionGuide({ person }: { person: Person }) {
  const { parentsAreOkay } = person;
  return (
    <section key="Alaska-Minor-Petition">
      <h3>Petition to Change Child&apos;s Name (AK, CIV-694)</h3>

      <p>
        The “Petition to Change Child’s Name” (CIV-694) is the primary name
        change document. Any parent or legal guardian can fill this form out and
        file it on your behalf. Whoever does becomes your petitioner and will be
        going through this process with you. Your parent/guardian will need to
        decide whether to check the box at the top to receive court documents to
        an email account instead of regular mail.
        {parentsAreOkay
          ? ""
          : " Afterwards they will need to check a box for item 4. "}
        Item 5 is talking about the “Parental Consent From Non-Petitioning
        Parent” (CIV-695) form which we have included. Any parent/guardian needs
        to sign one of those forms unless they are deceased or are non-custodial
        {parentsAreOkay
          ? ". "
          : " in which case attach certified copies of a death certificate or custody order. Legal Guardians also need to provide a certified copy of their letter of guardianship. "}
        If a parent/guardian with custody of you refuses to sign that form in
        front of a notary or court clerk this process will be contested and we
        recommend getting a lawyer. Your petitioner should <strong>not</strong>{" "}
        sign and date the form until a notary or court clerk instructs them to
        do so.
      </p>
    </section>
  );
}

export default AlaskaMinorPetitionGuide;

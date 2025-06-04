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

function MichiganFilingInitialFormsGuide({ person }: { person: Person }) {
  const { court, age, residentLocality } = person;

  return (
    <section key="MI-InitialForms">
      <h3>Filing Initial Forms (MI)</h3>
      <p>
        Your filing location is the {residentLocality} county court at{" "}
        {court?.address}.{age && age < 18 ? " A parent/guardian " : " You "} may
        file by mail or in person; in either case, include the Petition, the
        Addendum (m97a),
        {residentLocality && residentLocality == "Saginaw"
          ? " the Order Following (pc52), "
          : " "}
        the optional Fee Waiver (mc20), as well as payment. Even if the fee
        waiver is granted payment still needs to be provided for at least one
        certified copy. To ask for one when filing by mail either write
        &ldquo;Certified copy fee&rdquo; in a checks memo line or include a
        letter stating thats what the extra money is for. No matter what the
        filing method we recommend calling the court at {court?.phone} or
        visiting their website:{" "}
        <a href="{court?.website}" title="website">
          {court?.website}
        </a>
        . This is to confirm their accepted payment types, Name Change Petition
        fee, and Certified Copy fee as these vary by county and are updated
        frequently.
      </p>

      <p>
        {age && age < 18 && (
          <>
            Whoever filled out the paperwork as your petitioner has to be the
            one who files the paperwork at court if they are doing in-person
            filing.
          </>
        )}
      </p>

      {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}

      <p>
        <strong>
          By state law, court clerks are barred from answering questions about
          the forms.
        </strong>{" "}
        We recommend that you direct any questions you may have to the court’s
        legal assistance center, a local LGBT organization, or an attorney.
      </p>

      <p>
        Once the paperwork has been filed it will be several weeks before you
        get a response. From this point you just need to wait. The vast majority
        of cases will not even have a hearing you will simply recieve your
        “Order Following Hearing On Petition To Change Name” and certified copy
        in the mail. We call those documents the &quot;Court Order&quot;. If you
        recieved notice of a hearing instead read the next section, otherwise
        skip it.
      </p>

      {residentLocality && residentLocality !== "Kent" ? (
        <p>
          If you want an update on your case{" "}
          {age && age < 18 ? " your petitioner has " : " you have to "} to go to
          court and show an ID, they will not confirm anything on the phone to
          protect privacy.
        </p>
      ) : (
        ""
      )}
    </section>
  );
}

export default MichiganFilingInitialFormsGuide;

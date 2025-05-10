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

function MichiganFilingInitialFormsGuide({ person }: { person: Person }) {
  const { court, age } = person;

  return (
    <section key="MI-InitialForms">
      <h3>Filing Initial Forms (MI)</h3>
      <p>
        Your filing location is {court?.address}. You may file by mail or in
        person; in either case, include the Petition (pc51c) the Addendum
        (m97a), the optional Fee Waiver (mc20), as well as payment. Even if the
        fee waiver is granted you still need to provide payment for at least one
        certified copy. No matter how you file we recommend that you call the
        court at {court?.phone} or visit their website here {court?.website}.
        This is to confirm their accepted payment types, Name Change Petition
        fee, and Certified Copy fee as these vary by county and are updated
        frequently.
      </p>

      <p>
        {age && age < 18 && (
          <>
            Whoever filled out the paperwork as your petitioner has to be the
            one who files the paperwork at court if you are doing in-person
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

      <p>
        {age && age < 18 ? (
          <>
            If you want an update on your case your petitioner has to go to
            court and show an ID, they will not confirm anything on the phone to
            protect your privacy.
          </>
        ) : (
          <>
            If you want an update on your case you have to go to court and show
            ID, they will not confirm anything over the phone to protect your
            privacy.
          </>
        )}
      </p>
    </section>
  );
}

export default MichiganFilingInitialFormsGuide;

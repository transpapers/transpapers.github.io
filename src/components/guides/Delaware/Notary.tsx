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

function DelawareNotaryGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Delaware-Notary">
      <h3>Finding a Notary (DE)</h3>
      <p>
        Notaries are needed to witness signatures and provide their own. Notaries can
        be found in court buildings, banks, some{" "}
        <a href="UPS locations">
          https://www.theupsstore.com/tools/find-a-store
        </a>
        , or <a href="online">https://www.notarize.com/</a>. All of these
        services have different fees and payment methods but all of them require
        a photo ID {age && age < 18 && "for everyone signing"}.{" "}
        {age && age > 13 && age < 18 &&
          <>
            If you, the minor, don’t have a photo ID your birth certificate will 
            work instead.
          </>
        }{" "}
        {age && age < 18 ? (
          <>
            Your petitioner needs to gather all of the forms we had them hold off on 
            signing and make an appointment that they and any other parents/guardians 
            can also be present at.
          </>
        ) : (
          <>
            You need to gather all of the forms we had you hold off on signing and make 
            an appointment with one.
          </>
        )}{" "}
        {age && age > 13 && age < 18 &&
          <>
            You will need to be there to sign your consent as well.
          </>
        }{" "}
        Once every form is signed and notarized 
        {age && age < 18 ? " your Petitioner" : " you"} will need to make 2 photocopies 
        of every form. The original and one photocopy will be filed at the court, the 
        last photocopy is for safekeeping.
      </p>

    </section>
  );
}

export default DelawareNotaryGuide;

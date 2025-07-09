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

function IllinoisPrivacyRequestGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex } = person;

  return (
    <section key="Illinois-PrivacyRequest">
      <h3>Motion to Impound (Make Court Records Private) (IL, ATJ 308.1)</h3>
      <p>
        Illinois courts can make court records private so the public can’t see 
        them using the “Motion to Impound (Make Court Records Private)” 
        (ATJ 308.1) form.
        {isChangingLegalSex && age && age > 17 ? (
          <>
            Just being transgender is enough proof for them to make the court 
            records private.
          </>
        ):(
          <>
            Check the box in section 3 that most closely matches your 
            situation.
            {age && age < 18 ? (
              " The top checkbox only applies if your petitioner meets the criteria not you. "
            ):("")}
            Evidence can be attached if desired but it is optional.
          </>
        )}
        We have a{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/c739a9d8-27a9-47e3-af18-a7ec5cfeef00/NC%20Motion%20to%20Impound.pdf">
          blank
        </a>
        {" "}form in case 
        {age && age < 18 ? (
          " your petitioner opts"
        ):(
          " you opt "
        )}
        for an alternate address for the “Sign” section. Make sure the 
        applicable box is checked if so.
      </p>
    </section>
  );
}

export default IllinoisPrivacyRequestGuide;

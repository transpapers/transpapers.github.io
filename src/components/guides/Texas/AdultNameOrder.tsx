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

function TexasAdultNameOrderGuide({ person }: { person: Partial<Person> }) {
  const { hasCriminalRecord } = person;

  return (
    <section key="Texas-FM-NCA-200">
      <h3>Order Changing Name of an Adult (TX, FM-NCA-200)</h3>
      <p>
        This is the form you will get back from the judge if your petition is
        successful. They want this form to be pre-filled. You will need to fill
        it out with the same information as the petition above in sections 4C,
        4E, 4F, and 4J.
        {hasCriminalRecord ? (
          <>
            Sections 4K through 4N are for any criminal history and should be
            filled to match the name change petition as well.
          </>
        ) : (
          ""
        )}
        Leave the date and signature line <strong>blank</strong> as that’s for
        the judge to sign.
      </p>
    </section>
  );
}

export default TexasAdultNameOrderGuide;

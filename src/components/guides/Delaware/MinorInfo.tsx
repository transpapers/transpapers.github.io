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

function DelawareMinorInfoGuide({ person }: { person: Partial<Person> }) {
  const { parentsAreOkay } = person;

  return (
    <section key="Delaware-MinorInfo">
      <h3>Custody Separate Statement (DE, 346)</h3>
      <p>
        The “Custody Separate Statement” (Form 346) gives the court information about 
        your living arrangements so they can make sure they have the authority to 
        grant the name change. Your petitioner should finish filling out section 3 
        then answer the questions for sections 4, {!parentsAreOkay && "5,"} 6, and 7. 
        They should <strong>not</strong> sign on the last page until a notary 
        instructs them to do so.
      </p>

    </section>
  );
}

export default DelawareMinorInfoGuide;

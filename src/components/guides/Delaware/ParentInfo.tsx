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

function DelawareParentInfoGuide({ person }: { person: Partial<Person> }) {
  const { parentsAreOkay } = person;

  return (
    <section key="Delaware-ParentInfo">
      <h3>Information Sheet (DE, 240)</h3>
      <p>
        The “Information Sheet” (Form 240) gives the court information on all adult 
        parties to this case so they can contact them as needed. On the first page 
        your petitioner should fill out sections D through K with their information. 
        On page 2 they should 
        {!parentsAreOkay ? " fill out section L and then " : " fill out "} 
        any blanks <strong>below</strong> section M. The third page is for the other 
        living parent/guardians information, which should be filled out as completely 
        as possible. If there is more than one respondent on your petition copy this 
        page and fill one out for each. The last page can be skipped if the other 
        living parent/guardian consents to your name change.
      </p>

    </section>
  );
}

export default DelawareParentInfoGuide;

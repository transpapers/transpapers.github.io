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

function DelawareAdultPetitionGuide({ person }: { person: Partial<Person> }) {
  const { residentLocalityName, hasCriminalRecord } = person;

  return (
    <section key="Delaware-AdultPetition">
      <h3>Petition for Name Change (DE, unnumbered)</h3>
      <p>
        The “Petition for Name Change” is the main form for this process. You must 
        have lived in {residentLocalityName} county for at least 6 months to file 
        this form.{" "}
        {hasCriminalRecord ? (
          <>
            On page 2 check the applicable boxes in section 7. If you checked the 
            “Does” box fill out section 8. If you checked the “Is” box fill out 
            section 9. Otherwise skip both. In any case, sign your current legal name 
            and date at the bottom.
          </>
        ) : (
          <>
            Skip sections 7 through 9 and sign your current legal name and date 
            below section 9.
          </>
        )}
        {" "}Do <strong>not</strong> fill out anything on page 3 until a notary 
        tells you to.
      </p>

    </section>
  );
}

export default DelawareAdultPetitionGuide;

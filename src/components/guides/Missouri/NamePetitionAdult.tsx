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

function MissouriPetitionAdultGuide({ person }: { person: Partial<Person> }) {
  const { residentLocalityName, birthJurisdictionName, legalName, birthName } = person;

  return (
    <section key="Missouri-CAFC401">
      <h3>Petition for Change of Name (MO, CAFC401)</h3>
      <p>
        In Missouri, there is a 90 day wait period for new residents to change their 
        name. You can change it as soon as that wait period passes and you can prove 
        residency with something like an ID or utility bill in your current legal 
        name with a {residentLocalityName}
        {residentLocalityName === "St. Louis (City)" ? " city" : " county"} address.
      </p>

      <p>
        The “Petition for Change of Name” (CAFC401) is the main form for this process. 
        On page 2, fill out numbers 6, 7, and 8 if applicable.{" "}
        {birthJurisdictionName === "Elsewhere"
          && "Fill out your state/country of birth in #10 if it is blank. "}
        {legalName?.first !== birthName?.first && 
          <>
            Since your current name does not match the one on your original birth 
            certificate, you will need to fill out #16 and bring certified copies 
            documenting <strong>every name change</strong>. This would include documents 
            like your original birth certificate, adoption papers, marriage certificates, 
            divorce documents, or other court orders.{" "}
          </>
        }
        Fill out sections 17 through 19 on page 3 as they apply to you. If section 20 
        applies to you, fill that out as well; otherwise, skip it. Do{" "} 
        <strong>not</strong> fill out or sign anything on page 5 until a notary instructs 
        you to do so.
      </p>
    </section>
  );
}

export default MissouriPetitionAdultGuide;

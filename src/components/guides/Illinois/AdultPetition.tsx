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

function IllinoisAdultPetitionGuide({ person }: { person: Partial<Person> }) {
  const { residentLocality, hasCriminalRecord } = person;

  return (
    <section key="Illinois-AdultPetition">
      <h3>Request for Name Change (IL, ATJ 303.10)</h3>
      <p>
        Illinois has their own help guides for these forms. We have linked 
        them{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/b7a5b9eb-93a1-4889-b81d-641afa444a13/NC-A%20Instructions.pdf">
          here
        </a>
        {" "}just in case they are needed.
      </p>
      
      <p>
        The “Request for Name Change” (ATJ 303.10) serves as the main petition 
        for your name change. Fill in items 1c and 1e.
        {hasCriminalRecord ? (
          <>
            Check any boxes in section 2 that apply to you. You cannot file 
            this petition if you have been convicted of a felony and have yet 
            to finish your sentence, including any parole. If you check “Yes” 
            on box 2e you <strong>need</strong> to check the “Gender-related 
            identity as defined by the Illinois Human Rights Act” in order to 
            ensure that the petition is still accepted and you will not face 
            felony charges. If there is a hearing expect questions related to 
            your gender identity. Fill out 2h as needed.
          </>
        ):("")}
        Skip the rest of the sections and proceed directly to the “Sign” 
        section on the last page. We have pre-filled the address as you wrote 
        it but if that is unsafe you can use this{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/74f342af-7d93-4f93-b5b7-fbb92635d45a/NC-A%20Request%20for%20Name%20Change.pdf">
          blank
        </a>
        {" "}form and change that to a PO box or other alternate address. 
        Be sure to check the relevant box if you do. This form is otherwise 
        complete. In order to file this form you must have lived in{" "}
        {residentLocality} county for at least 3 months.
      </p>
    </section>
  );
}

export default IllinoisAdultPetitionGuide;

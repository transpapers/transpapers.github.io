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

function DelawareMinorPetitionGuide({ person }: { person: Partial<Person> }) {
  const { residentLocalityName, parentsAreOkay, hasCriminalRecord } = person;

  return (
    <section key="Delaware-MinorPetition">
      <h3>Petition for Minor Name Change (DE, 492)</h3>
      <p>
        The “Petition for Minor Name Change” (Form 492) is the main form for this 
        process. If you, the minor, have lived in {residentLocalityName} county for 
        over 6 months the parent that is named on this form can file on your behalf.
        {" "}
        {!parentsAreOkay ? (
          <>
            If both of your parents are deceased a legal guardian can file this 
            petition, otherwise a parent has to do it.
          </>
        ) : (
          ""
        )}
        {" "}
        This person then becomes your petitioner and will be going through this 
        process with you. All living parents must give consent in order for this 
        petition to be uncontested, this guide assumes that all living parents are 
        consenting. If a parent does not give consent then this matter becomes 
        contested which is beyond the scope of this guide. If that happens 
        we <strong>strongly</strong> recommend a lawyer, see our resources section 
        for help if that is the case.
      </p>

      <p>
        For the petition, on page 1, your petitioner should fill out any blanks left 
        in the “Petitioner” and “Respondent 1” sections. Whichever parent/guardian 
        that is not your Petitioner is Respondent 1.
        {" "}
        {!parentsAreOkay ? (
          <>
            If there are more adults with custody of you than this your petitioner 
            should add them to the “Respondent 2” section.
          </>
        ) : (
          "Ignore the “Respondent 2” section."
        )}
        {" "}
        You petitioner should also fill out information for and answer the questions 
        listed near the bottom of the form below the “The reason for the proposed 
        change:” line.
        {" "}
        {!parentsAreOkay ? (
          <>
            This potentially includes the “Respondent 2” section at the bottom and 
            on the second page.
          </>
        ) : (
          <>
            Ignore the “Respondent 2” section at the bottom and on the top of page 2.
          </>
        )}
        {" "}
        {hasCriminalRecord ? (
          <>
            Your petitioner should check the boxes and write explanations below the 
            “Respondent 2” section regarding criminal history as is applies to you.
          </>
        ) : (
          ""
        )}
        {" "}
        {!parentsAreOkay ? (
          <>
            If one of your parents is deceased the “Deceased Parent(s) Death 
            Certificate(s)” checkbox needs to be checked. If both parents are deceased, 
            that checkbox and the one directly above it both need to be checked.
          </>
        ) : (
          ""
        )}
        {" "}
        Do <strong>not</strong> fill out anything else on page 2 until a notary tells 
        you to do so.
      </p>

      <p>
        On page 3 your petitioner should fill out any blanks we left in the
        {!parentsAreOkay ? (
          " “Petitioner”, “Respondent 1”, “Respondent 2” sections "
        ) : (
          " “Petitioner” and “Respondent 1” sections "
        )}
        just like on the first page. Do <strong>not</strong> fill out anything else 
        on page 3 until a notary tells you to do so
      </p>

    </section>
  );
}

export default DelawareMinorPetitionGuide;

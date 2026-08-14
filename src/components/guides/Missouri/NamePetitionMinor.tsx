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

function MissouriPetitionMinorGuide({ person }: { person: Partial<Person> }) {
  const { residentLocalityName, birthJurisdictionName, legalName, birthName, parentsAreOkay } = person;

  return (
    <section key="Missouri-CAFC402">
      <h3>Petition for Change of Name by Parent (For Minor Child) (MO, CAFC402)</h3>
      <p>
        In Missouri, there is a 90 day wait period for new residents to change their 
        name. You can change it as soon as that wait period passes and your parents 
        can prove residency with something like an ID or utility bill with a
        {" "}{residentLocalityName}
        {residentLocalityName === "St. Louis (City)" ? " city" : " county"} address.
      </p>

      <p>
        The “Petition for Change of Name by Parent (For Minor Child)” (CAFC402) is the 
        main form for this process. If you, the minor, are a Missouri resident, the 
        parent named on this form can file on your behalf.{" "}
        {parentsAreOkay === false && 
          <>
            If both of your parents are deceased, a legal guardian can file this 
            petition instead. They will need to bring official copies of both parents&apos; 
            death certificates when they file.{" "}
          </>
        }
        This person then becomes your “Next Friend” on this form and will be going 
        through this process with you. All living parents listed on your birth 
        certificate must give consent in order for this petition to be uncontested. 
        This is done by one parent being your next friend and the other signing the 
        “Consent to Minor Child’s Change of Name” form later. This guide assumes that 
        all living parents are consenting. If a parent does not give consent, then 
        this matter becomes contested, which is beyond the scope of this guide. If 
        that happens, we <strong>strongly</strong> recommend you consult a lawyer; 
        see our resources section for help if that is the case.
        </p>

        <p>
        For the petition, on page 1, your next friend should fill out #3 and #5.{" "}
        {parentsAreOkay === false && 
          <>
            If one or both of your parents are deceased, then your next friend can 
            skip anything regarding the “respondent parent.” They will just need to 
            bring an official copy of the death certificate(s) when they file.{" "}
          </>
        }
        {birthJurisdictionName === "Elsewhere"
          && "On page 2, your next friend should fill out your state and/or country of birth in #11. "}
        {legalName?.first !== birthName?.first && 
          <>
            Since your current name does not match the one on your original birth 
            certificate, your next friend will need to fill out #17 on page 3 and 
            bring certified copies documenting <strong>every name change</strong>. 
            This would include documents like your original birth certificate, 
            adoption papers, amended birth certificates, or other court orders.{" "}
          </>
        }
        Finally, your next friend should fill out #18 through #20 as they apply to 
        you, the minor. They should <strong>not</strong> sign on page 4 until a 
        notary instructs them to do so.
      </p>
    </section>
  );
}

export default MissouriPetitionMinorGuide;

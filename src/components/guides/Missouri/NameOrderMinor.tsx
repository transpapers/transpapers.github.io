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

function MissouriOrderMinorGuide({ person }: { person: Partial<Person> }) {
  const { parentsAreOkay } = person;

  return (
    <section key="Missouri-CAFC472">
      <h3>Judgment for Change of Name of Minor Child (MO, CAFC472)</h3>
      <p>
        The “Judgment for Change of Name of Minor Child" (Form CAFC472) is the 
        document the judge will sign to grant the name change. You, the minor, 
        should decide with your parents whether you want to attend the court 
        hearing or not. Your attendance is encouraged but not required, as the 
        judge may want to make sure that you want this change. Your next friend 
        can answer in your place if needed, though. If you are attending the court 
        hearing, you should check the “appears in person” box below your name in 
        section 1, otherwise, check the “appears by Next Friend” box. Your next friend 
        should check either the “is the mother of Petitioner” or “is the father of 
        Petitioner” box below their name in section 1. The respondent parent’s name 
        and mother/father checkbox should be filled out below that on the “Other parent” 
        line.{" "}
        {parentsAreOkay === false && 
          <>
            We have also left the “appears in person” and “appears by Attorney” boxes 
            blank in case your respondent parent cannot make it to the hearing and 
            hires a lawyer to stand in. Please check one of those two boxes.{" "}
          </>
        }
        Leave the second page <strong>blank</strong>; that is for a judge to fill out. 
        Make extra sure that all of the information on this form is correct and legible.
      </p>
    </section>
  );
}

export default MissouriOrderMinorGuide;

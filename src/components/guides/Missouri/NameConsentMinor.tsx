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

function MissouriConsentMinorGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Missouri-CAFC411">
      <h3>Petition, Consent and Order for Parent&apos;s Appointment as Next Friend (MO, CAFC411)</h3>
      <p>
        The “Petition, Consent and Order for Parent&apos;s Appointment as Next Friend” 
        (Form CAFC411) is for {age && age > 13 ? "you, the minor, and" : ""} your
        next friend to give consent.{" "}
        {age && age > 13 ? 
          <>
            You, the minor, need to sign on page 1 just above #3.
          </>
        :
          <>
            You, the minor, are too young to sign the consent on this form; please 
            leave the minor signature line blank.
          </>
        }
        {" "}Your next friend should fill in any blanks we left on #4 through #6, and 
        then sign and date below #6.
      </p>
    </section>
  );
}

export default MissouriConsentMinorGuide;

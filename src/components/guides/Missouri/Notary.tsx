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

function MissouriNotaryGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Missouri-Notary">
      <h3>Finding a Notary (MO)</h3>
      <p>
        Notaries are needed to witness signatures and provide their own for the{" "}
        {age && age > 17 ? (
          <>
            “Petition for Change of Name” form.
          </>
        ) : (
          <>
            “Petition for Change of Name by Parent” and “Consent to Minor Child’s 
            Change of Name” forms. These forms can both be notarized in a single 
            appointment or in two separate appointments by your next friend and 
            respondent parent, respectively.
          </>
        )}{" "}Notaries can be found in court buildings, banks, some{" "}
        <a href="https://www.theupsstore.com/tools/find-a-store">
          UPS Locations
        </a>
        , some public libraries (
        <a href="https://www.slcl.org/library-services/notary-services">
          example
        </a>
        ), or <a href="https://www.notarize.com/">online</a>. The Center Project 
        in Columbia provides trans-inclusive notary services as well; you can set 
        up an appointment with them on their{" "}
        <a href="https://centerproject.org/resources/name-gender-changes/">
          website
        </a>
        . You can also visit the LGBTQ Notary Association’s{" "}
        <a href="https://lgbtnotary.com/">
          website
        </a>
        {" "}for in-person and virtual options. All of these
        services have different fees and payment methods but all of them require
        a photo ID{age && age < 18 && " for everyone signing"}.{" "}
        {age && age < 18 &&
          <>
            If you, the minor, don’t have a photo ID your birth certificate will 
            work instead.
          </>
        }
    </p>
    </section>
  );
}

export default MissouriNotaryGuide;

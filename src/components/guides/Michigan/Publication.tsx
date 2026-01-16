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
import { MichiganCounty } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";

function MichiganPublicationGuide({
  person,
}: {
  person: Person;
}) {
  const { age, residentJurisdictionName, residentLocalityName } = person;
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;
  const residentLocality: MichiganCounty = localities.find(
    (j) => j.name === residentLocalityName,
  ) as MichiganCounty;

  return (
    <section key="MI-Publication">
      <h3>Publication (MI)</h3>

      <p>
        If the clerk instructed
        {age && age < 18 ? " your parent/guardian " : " you "} to place an ad
        with a local newspaper the court-approved newspaper(s) in your county
        are as follows:
      </p>

      {...residentLocality.publications.map(({ name, website, email }) => (
        <p key="{residentLocality.publications.name}">
          <span>Newspaper: {name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{website}" title="link">
              {website}
            </a>
          </span>
          <br />
          <span>Contact Email: {email}</span>
        </p>
      ))}

      <p>
        At the provided link(s),
        {age && age < 18 ? " your parent/guardian " : " you "}
        should contact a newspaper about placing a legal notice for the name
        change hearing. Make sure the publication date is more than seven days
        before the hearing date. After a few days, confirm with the court that
        they have received the necessary paperwork from the newspaper.
      </p>
    </section>
  );
}}

export default MichiganPublicationGuide;

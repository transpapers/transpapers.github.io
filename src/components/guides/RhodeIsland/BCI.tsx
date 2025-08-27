/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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
import { RhodeIslandCityOrTown } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";

function RhodeIslandBCIGuide({
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
  const residentLocality: RhodeIslandCityOrTown = localities.find(
    (j) => j.name === residentLocalityName,
  ) as RhodeIslandCityOrTown;

  return (
    <section key="RhodeIsland-BCI">
      <h3>Background Check Authorization Form (RI)</h3>

        {residentLocality ? (
          <>
            {residentLocality.courtDoesBackgroundCheck ? (
              <p>
                Our records show that the {residentLocality.court.city} court either 
                does the background check report for you when you file or gives its 
                own unique instructions for one upon filing. You can ignore this 
                section and the “Background Check Authorization” form for the time 
                being. We have included this form and its instructions just in case.
              </p>
            ) : (
              ""
            )}

            {age && age < 18 ? (
              <p>
                For a Rhode Island name change you and the parent/guardian who is
                filing the Change of Name form for you will need a background check.
              </p>
            ) : (
              <p>
                For a Rhode Island name change you will need a background check.
              </p>
            )}

            <p>
              This form, from the State of Rhode Island Office of the Attorney
              General, is specifically for requesting a background check{" "}
              <strong>by mail</strong>. Going in-person doesn&apos;t require a form.
              {age && age < 18
                ? " If the parent/guardian filing the Name Change has "
                : " If you have "}
              ever had any other legal names those names need to be listed on the
              &ldquo;Maiden Name / other names used&rdquo; line if they aren&apos;t
              already listed. After that this form is ready for a notary, do{" "}
              <strong>not</strong> fill anything else out.
            </p>
        </>
      ) : (
        <p>residentLocality not found.</p>
      )}
    </section>
  );
}}

export default RhodeIslandBCIGuide;

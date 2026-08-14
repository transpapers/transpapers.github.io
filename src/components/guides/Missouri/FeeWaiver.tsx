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
import { type MissouriCounty } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";

function MissouriFeeWaiverGuide({
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
    const residentLocality: MissouriCounty = localities.find(
    (j) => j.name === residentLocalityName,
  ) as MissouriCounty;

  return (
    <section key="Missouri-GN10">
      <h3>Motion and Affidavit in Support of Request to Proceed As a Poor Person (MO, GN10)</h3>
      <p>
        The “Motion and Affidavit in Support of Request to Proceed As a Poor Person” 
        (Form GN10) is an optional form that may waive the filing fee. In{" "} 
        {residentLocalityName}
        {residentLocalityName === "St. Louis (City)" ? " city" : " county"}, the filing 
        fee should be {residentLocality.filingFee}.
        {age && age > 17 ? 
          " You may file this request at your " : " Your next friend may file this request at their "
        }
        discretion; the worst they can do is deny it. To complete the form
        {age && age > 17 ? " you " : " your next friend "} should fill out the
        {age && age > 17 ? " " : " respondent section and "} the household 
        financial information. Then sign and date at the bottom.
      </p>
    </section>
  );
}}

export default MissouriFeeWaiverGuide;

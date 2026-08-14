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

function MissouriPublicationGuide({
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
    <section key="Missouri-Publication">
      <h3>Publication (MO)</h3>
      <p>
        Once you have your court order
        {age && age > 17 ? " you need" : " your next friend needs"} to 
        immediately contact a newspaper to publish notice of your legal name 
        change. To do this, take the{" "}
        {age && age > 17 ? 
          <>
            “Request for Publication after Judgment of Change of Name for Adult 
            Individual” (Form CAFC480)
          </>
        :
          <>
             “Request for Publication after Judgment of Change of Name for Minor 
             Child” (Form CAFC482)
          </>
        }
        {" "} that we had you set to the side and fill it out. For the case 
        number and division number, use the numbers provided on your court order. 
        In the section that reads “made entered on the record on,” use the date 
        the judge signed your court order.
        {age && age > 17 ? " You" : " Your next friend"} should sign at the bottom 
        now before you enter the name of the newspaper. Lastly, you will need to 
        write the name of the newspaper in which this will be published. In{" "}
        {residentLocalityName}
        {residentLocalityName === "St. Louis (City)" ? " city" : " county"}, the 
        court recommends the following:
      </p>

      {...residentLocality.publications.map(({ name, website }) => (
        <p key="{residentLocality.publications.name}">
          <span>Newspaper: {name}</span>
          <br />
          <span>
            Website:{" "}
            <a href="{website}" title="link">
              {website}
            </a>
          </span>
        </p>
      ))}

      <p>
        Under Missouri law, if a court grants your legal name change, you must give 
        public notice of the change (i.e., first publication){" "}
        <strong>within 20 days</strong> of the court order date. So if a newspaper 
        declines to publish or does not respond in a timely manner, move on to 
        another. If there are no others left in the county, check the neighboring 
        counties. If all else fails, you can publish in the{" "}
        <a href="https://molawyersmedia.com/submit-your-public-notice/">
          St. Louis Daily Record
        </a>
        .
      </p>
    </section>
  );
}}

export default MissouriPublicationGuide;

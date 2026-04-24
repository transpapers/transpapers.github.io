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
import { type CaliforniaCounty } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";
import { caliZipCodeMatch } from "../../../lib/util";

function CaliforniaFilingGuide({
  person,
}: {
  person: Person;
}) {
  const { age, residentJurisdictionName, residentLocalityName, parentsAreOkay, homeAddress } = person;
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;
    const residentLocality: CaliforniaCounty = localities.find(
    (j) => j.name === residentLocalityName,
  ) as CaliforniaCounty;

  if (homeAddress) {
    const foundCourt = caliZipCodeMatch(homeAddress.zip, residentLocalityName, residentJurisdictionName)
  

  return (
    <section key="California-Filing">
      <h3>Filing Initial Forms (CA)</h3>
    
    {age && age < 18 && parentsAreOkay === false ? (
        <p>
          If you have a legal guardian their filing location will be in whatever court 
          they recieved their guardianship from <strong>instead of</strong> the result(s) 
          listed below. If the guardianship court was in another state they should use 
          the location(s) listed below but be sure notify the clerk upon filing of the 
          situation to make absolutely sure.
        </p>
      ) : ("")}
    
      <p>
        {age && age < 18 ? "A parent/guardian " : "You "} should bring all of the completed
        forms listed above as well as photo ID and payment. The fee in California for filing 
        varies between courts and is updated frequently but is typically between $350 to 
        $450 dollars without the fee waiver. Payment methods should still be brought in any 
        case.
      </p>

    {residentLocality.courtByZip ? (
      <>
        <p>
          The {residentLocalityName} county superior courts determine venue by zip code. Based
          on your zip code these court(s) are acceptable to file at:
        </p>

        {foundCourt === "Split" || foundCourt === "" ?
        <p>
          The zip code lookup used to identify your filing court could not return a valid result.
          Either your zip code is split between multiple court jurisdictions or the zip code was 
          entered incorrectly. Either way please consult this{" "}
          <a href="https://www.google.com/maps/d/u/0/edit?mid=1Q_vnd6T1KIGtC-YjS2_qK9p2JVIzlzs&usp=sharing">
            map
          </a>
          . It lists every filing location in the state as well as the jurisdictions 
          they cover. Check your address to see which one(s) you fall under.
        </p>
        :

        {...Array.from(
          residentLocality.allCourts
          .filter((foundCourt) => foundCourt)
          .map(({ name, address, phone }) => (
          <p key="{foundCourt}">
            {name}: {address}. 
            <br />
            Phone Number: {phone}
            <br />
            <br />
            If the court(s) listed above appear wrong or you simply want more information check 
            this{" "}
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1Q_vnd6T1KIGtC-YjS2_qK9p2JVIzlzs&usp=sharing">
              map
            </a>
            . It lists every filing location in the state as well as the jurisdictions 
            they cover. Check your address to see which one(s) you fall under.
          </p>
          )),
        )}

        /*
        {...residentLocality.allCourts.map(({ address, phone }) => (
          <p key="{foundCourt}">
            {foundCourt}: {address}. 
            <br />
            Phone Number: {phone}
            <br />
            <br />
            If the court(s) listed above appear wrong or you simply want more information check 
            this{" "}
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1Q_vnd6T1KIGtC-YjS2_qK9p2JVIzlzs&usp=sharing">
              map
            </a>
            . It lists every filing location in the state as well as the jurisdictions 
            they cover. Check your address to see which one(s) you fall under.
          </p>
        ))}
        */
        }

        {residentLocalityName === "Los Angeles" ? 
          <p>
            If you are unsure of which court to file in even after looking at the results and
            map you can always file at the Stanley Mosk Courthouse. Any LA county resident can
            file there. In the map it is the court with the yellow pin, click that pin on 
            the{" "}
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1Q_vnd6T1KIGtC-YjS2_qK9p2JVIzlzs&usp=sharing">
              map
            </a> 
            {" "}for more information.
          </p>
        :""}
      </>
    ) : (
      <>
        {residentLocality.multiCourt ?
          <p>
            In {residentLocalityName} county there are multiple courts a resident can file in, it
            does not matter which one:
          </p>
        : 
          <p>
            In {residentLocalityName} county everyone files here:
          </p>
        }

        {...residentLocality.allCourts.map(({ name, address, phone }) => (
          <p key="{residentLocality.allCourts.name}">
            {name}: {address}. 
            <br />
            Phone Number: {phone}
            <br />
            <br />
            If the court(s) listed above appear wrong or you simply want more information check 
            this{" "}
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1Q_vnd6T1KIGtC-YjS2_qK9p2JVIzlzs&usp=sharing">
              map
            </a>
            . It lists every filing location in the state as well as the jurisdictions 
            they cover. Check your address to see which one(s) you fall under.
          </p>
        ))}
      </>
    )}

      <p>
        Once you are sure what court to file at grap the “Civil Case Cover Sheet” (CM-010)
        and fill in the courts street address, city, zip code, and branch name near the 
        top of the page if they are blank.
      </p>

      {residentLocalityName === "Alameda" ? (
         <p>
           Additionally, once you have picked a court to file at grab the 
           “Civil Case Cover Sheet Addendum” (202-19) and make a check next 
           to the court you chose near the top of the page.
         </p>
      ):("")}

      {residentLocalityName === "Los Angeles" ? (
         <p>
           Additionally, once you have picked a court to file at grab the “Civil Case Cover
           Sheet Addendum and Statement of Location” (LASC CIV 109) and go to
           page 4. On the third row from the bottom will be a checkmark with your
           case type and a “2, 7” on the right from that. If you picked the 
           Stanley Mosk court to file at then circle the 2, otherwise circle the 7.
           If the Stanley Mosk court is your only filing option circle either, it
           will not matter. Then on the last page there will be a section at the
           top that says “Reason:” with numbered checkboxes. Check the box that
           matches the number you circled. Finally in step 5 write the name of the
           court district you will be filing in. If you are unsure of what the
           district name is consult the map from the previous paragraph, if you
           click on the district the name will pop up on the top.
         </p>
      ):("")}

      {residentLocalityName === "Santa Barbara" ? (
         <p>
           Additionally, once you have picked a court to file at grab the “Civil Case Cover
           Sheet Addendum” (SC-2069) and make a check next to the court you 
           chose near the top of the page.
         </p>
      ):("")}

      <p>
        <strong>
          By state law, court clerks are barred from answering questions about
          the forms.
        </strong>{" "}
        We recommend that you direct any questions you may have to the court&apos;s
        legal assistance center, a local LGBT organization, or an attorney.
      </p>

      <p>
        Once the paperwork has been filed, the court will likely make a judgment without
        a hearing and will mail the results. If so skip the “Court Hearing” section.
        While at the court be sure to ask the clerk if it is possible to pre-pay for
        2 or 3 additional certified copies of the court order. By requesting additional 
        copies now you can save a trip or call. Note: the cost for additional copies 
        is small but <strong>not</strong> covered by the fee waiver. Use the copies 
        in later sections and keep the original in a safe place.
      </p>

    </section>
  );
}}}

export default CaliforniaFilingGuide;

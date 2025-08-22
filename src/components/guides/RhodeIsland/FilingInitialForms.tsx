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

function RhodeIslandFilingGuide({
  person,
  //residentLocality,
}: {
  person: Person;
  //residentLocality: RhodeIslandCityOrTown;
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
  //const { courtDoesBackgroundCheck, filingCost } = residentLocality;
  if (!residentLocality) {
    return "";
  }

  return (
    <section key="RhodeIsland-Filing">
      <h3>Filing Initial Forms (RI)</h3>

      {residentLocality.name === "West Greenwich" ? (
        <p>
          A recent law was passed called{" "}
          <a href="https://webserver.rilegislature.gov/Statutes/TITLE33/33-22/33-22-28.htm">
            §33-22-28
          </a>
          . In section D it states that there will be no publication required
          before a hearing. The West Greenwich court is openly defying that law
          by still requiring publications for everyone before their hearings and
          charging for it. If you have the will and ability{" "}
          <a href="https://tinyurl.com/mgdc-feedback">notify</a> us with a tip
          and send Patience Crozier at GLAD Law an email at
          pcrozier@gladlaw.org.
        </p>
      ) : (
        ""
      )}

      {residentLocality.name === "Glocester" ? (
        <p>
          A recent law was passed called{" "}
          <a href="https://webserver.rilegislature.gov/Statutes/TITLE33/33-22/33-22-28.htm">
            §33-22-28
          </a>
          . In section D it states that there will be no publication required
          before a hearing. The Glocester court has decided to instead publicize
          your case after the name change hearing and charge for it. Due to this
          their price is roughly triple what it should be. If you have the will
          and ability <a href="https://tinyurl.com/mgdc-feedback">notify</a> us
          with a tip and send Patience Crozier at GLAD Law an email at
          pcrozier@gladlaw.org.
        </p>
      ) : (
        ""
      )}

      {residentLocality.name === "Warren" ? (
        <p>
          A recent law was passed called{" "}
          <a href="https://webserver.rilegislature.gov/Statutes/TITLE33/33-22/33-22-28.htm">
            §33-22-28
          </a>
          . In section D it states that there will be no publication required
          before a hearing. The Warren court has decided to instead publicize
          your case after the name change hearing and charge for it. Due to this
          their price is roughly triple what it should be. If you have the will
          and ability <a href="https://tinyurl.com/mgdc-feedback">notify</a> us
          with a tip and send Patience Crozier at GLAD Law an email at
          pcrozier@gladlaw.org.
        </p>
      ) : (
        ""
      )}

      <p>
        <strong>
          By state law, court clerks are barred from answering questions about
          the forms.
        </strong>{" "}
        We recommend that you direct any questions you may have to the court’s
        legal assistance center, a local LGBT organization, or an attorney.
      </p>

      {age && age < 18 ? (
        <>
          {residentLocality.name === "East Providence" ? (
            <p>
              The filing location is the East Providence Family court which is
              located at 1 Dorrance St, Providence, RI 02903.
            </p>
          ) : (
            <p>
              The filing location is the {residentLocality.name} court at{" "}
              {residentLocality.court.address}.
            </p>
          )}
          <p>
            A parent/guardian will need to bring the notarized Change of Name
            petition, useable copy of your birth certificate
            {residentLocality.courtDoesBackgroundCheck ? ", " : ", BCI report, "}
            and photo ID. According to our data the filing fee will be{" "}
            {residentLocality.filingCost}. The courts are not in session every day so the clerk
            will tell them when your hearing date will be when they file. Each
            court is specific with what payment types they accept so they need
            to either call to ask or cover their bases by bringing cash, check,
            and card.
          </p>
          {residentLocality.court.specificCourtInfo && <p>{residentLocality.court.specificCourtInfo}</p>}
        </>
      ) : (
        <p>
          The filing location is at {residentLocality.court.address}. Bring the notarized Change
          of Name petition, useable copy of your birth certificate
          {residentLocality.courtDoesBackgroundCheck ? ", " : ", BCI report, "}
          and photo ID. According to our data the filing fee will be{" "}
          {residentLocality.filingCost}. The courts are not in session every day so the clerk
          will tell you when your hearing date will be when you file. Each court
          is specific with what payment types they accept so either call to ask
          or try to cover your bases by bringing cash, check, and card.
        </p>
      )}

      {residentLocality.court.specificCourtInfo && <p>{residentLocality.court.specificCourtInfo}</p>}

      <p>
        If the clerk doesn&apos;t give a hearing date then ask about it. Some
        courts no longer do name change hearings and will instead send a court
        order granting the change in the mail. If this is the case ask and pay
        for at least one other certified copy of that order to be sent, it
        should cost about $5.00. You can then skip the &quot;Court Hearing&quot;
        section.
      </p>
    </section>
  );
}}

export default RhodeIslandFilingGuide;

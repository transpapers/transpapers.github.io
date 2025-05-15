/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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
 */

import * as React from "react";

import { type Person } from "../../../types/person";
import { type Locality, RhodeIslandCityOrTown } from "../../../types/locality";

function RhodeIslandFilingGuide(
  { person }: { person: Person },
  { RIcityortown }: { RIcityortown: RhodeIslandCityOrTown },
  { locality }: { locality: Locality },
) {
  const { court, age, residentCounty } = person;
  const { courtDoesBackgroundCheck, filingCost } = RIcityortown;

  return (
    <section key="RhodeIsland-Filing">
      <h3>Filing Initial Forms (RI)</h3>

      <p>
        A recent law was passed called{" "}
        <a href="H8155">
          https://webserver.rilegislature.gov/BillText/BillText24/HouseText24/H8155A.pdf
        </a>
        . In section D (line 12) it states that there will be no publication
        required which means you shouldn&apos;t be charged for that. Some courts
        haven&apos;t yet updated their pricing to reflect that. If the amount
        they charge you is significantly higher than what we list ask about it
        and politely insist that it be changed or{" "}
        <a href="report">https://tinyurl.com/mgdc-feedback</a> it to us as a
        tip.
      </p>

      {age && age < 18 ? (
        <>
          {residentCounty && residentCounty == "East Providence" ? (
            <p>
              The filing location is the East Providence Family court which is
              located at 1 Dorrance St, Providence, RI 02903.
            </p>
          ) : (
            <p>
              The filing location is the {residentCounty} court at{" "}
              {court?.address}.
            </p>
          )}
          <p>
            A parent/guardian will need to bring the notarized Change of Name
            petition, useable copy of your birth certificate
            {courtDoesBackgroundCheck && courtDoesBackgroundCheck == true
              ? ", "
              : ", BCI report, "}
            and photo ID. According to our data the filing fee will be{" "}
            {filingCost}. The courts are not in session every day so the clerk
            will tell them when your hearing date will be when they file. Each
            court is specific with what payment types they accept so they need
            to either call to ask or cover their bases by bringing cash, check,
            and card.
          </p>
            {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}
        </>
      ) : (
        <p>
          The filing location is at {court?.address}. Bring the notarized Change
          of Name petition, useable copy of your birth certificate
          {courtDoesBackgroundCheck && courtDoesBackgroundCheck == true
            ? ", "
            : ", BCI report, "}
          and photo ID. According to our data the filing fee will be{" "}
          {filingCost}. The courts are not in session every day so the clerk
          will tell you when your hearing date will be when you file. Each court
          is specific with what payment types they accept so either call to ask
          or try to cover your bases by bringing cash, check, and card.
        </p>
      )}

      {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}

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
}

export default RhodeIslandFilingGuide;

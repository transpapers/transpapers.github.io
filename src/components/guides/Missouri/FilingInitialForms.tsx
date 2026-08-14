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

function MissouriFilingGuide({
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
    <section key="Missouri-Filing">
      <h3>Filing Initial Forms (MO)</h3>
      <p>
        {age && age > 17 ? "You are " : "Your next friend is "} now ready to file 
        at {residentLocalityName === "Marion" || residentLocalityName === "Jasper" ? "a " : "the "}
        {residentLocalityName} 
        {residentLocalityName === "St. Louis (City)" ? " city" : " county"} circuit court
        {residentLocalityName === "Jasper" ? 
        <>
          . Jasper County has 2 valid filing locations; the Carthage location at 302 S 
          Main St #206, Carthage, MO 64836 and the Joplin location located at 633 S Pearl 
          Ave, Joplin, MO 64801. It does not matter which one is used. To check things like 
          hours of operation or accepted payment types, call the Carthage court at (417) 358-0450 
          and the Joplin court at (417) 625-4310.
        </>
        : residentLocalityName === "Marion" ? 
        <>
          . Marion County has 2 valid filing locations; the Hannibal location at 906 
          Broadway #105, Hannibal, MO 63401 and the Palmyra location at 100 S Main St 
          #207, Palmyra, MO 63461. The Hannibal Circuit Court only serves Miller and Mason 
          townships; the Palmyra Circuit Court serves the rest of the county. See this{" "}
          <a href="https://www.google.com/maps/d/u/0/edit?mid=1b17SgI7EVDsLqBK-LIbDDWF2OHUOG84&usp=sharing">
            map
          </a>
          {" "}for the exact court boundaries. To check things like hours of operation or 
          accepted payment types, call the Hannibal court at (573) 221-0198 and the Palmyra
          court at (573) 769-2550.
        </>
        : residentLocalityName === "Jackson" && age && age < 18 ?
        <>
          . Jackson County has 2 valid filing locations for minor cases, the Kansas City 
          location at 625 E 26th St, Kansas City, MO 64108 and the Independence location 
          at 308 W Kansas Ave, Independence, MO 64050. It does not matter which one is 
          used; just make sure to check the appropriate box at the top of the “Family 
          Court Information Sheet” (form CIRCT 1452). To check things like hours of 
          operation or accepted payment types, call the courts at (816) 474-3606 and (816) 
          881-3522, respectively.
        </>
        :
        <>
          located at {residentLocality.court.address}. To check things like hours of operation 
          or accepted payment types, call the court at {residentLocality.court.phone}.
        </>
        }
      </p>

      {residentLocality.court.specificCourtInfo && (
        <p>{residentLocality.court.specificCourtInfo}</p>
      )}

      {residentLocality.onlineFile && 
        <p>
          The {residentLocalityName} circuit court will accept online filings.
          {age && age > 17 ? " You" : " Your next friend"} will need to scan all of your 
          documents onto your computer separately, label them as their form names as we did 
          above, and then go to this{" "}
          <a href={residentLocality.court.website} title="link">
              {residentLocality.court.website}
          </a>
          {" "} to upload them. Two copies of the photo ID, redacted and un-redacted, will 
          need to be uploaded as well. There is an instruction video that goes over this 
          process
          <a href="https://www.courts.mo.gov/page.jsp?id=5240">
            here
          </a>
        </p>
      }

      {residentLocality.inPersonFile && 
        <p>
          The {residentLocalityName} circuit court will accept in-person filings.
          {age && age > 17 ? " You" : " Your next friend"} will need to bring all of the 
          documents we had {age && age > 17 ? "you" : "them"} gather, the notarized forms, 
          photo ID, the redacted photocopies of everything. In addition 
          {age && age > 17 ? " you" : " they"} will need either the fee waiver form or an 
          accepted payment method for {residentLocality.filingFee} to the court.
        </p>
      }

      {residentLocality.mailFile && 
        <p>
          The {residentLocalityName} circuit court will accept mail-in filings.
          {age && age > 17 ? " You" : " Your next friend"} will need to place all of the 
          documents we had {age && age > 17 ? "you" : "them"} gather, the notarized forms, 
          photo ID, the redacted photocopies of everything into an envelope. In addition
          {age && age > 17 ? " you" : " they"} will need either the fee waiver form or a 
          check/money order made out to “{residentLocalityName} circuit court” for{" "}
          {residentLocality.filingFee} to the court. Write the court&apos;s mailing address,{" "}
          {residentLocality.mailAddress}, on the front of the envelope. Then you will 
          need to take the envelope to your local post office and pay $4 to have it sent 
          by certified mail, so you will have proof that they received it.
        </p>
      }

      <p>
        Once everything has been filed, you {age && age > 17 && "and your next friend "}
        will need to wait for the court to send you mail. It will be one of two things: 
        either a notice for a hearing or a signed{" "}
        {age && age > 17 ? 
          <>
            “Judgment for Change of Name of Adult Individual” (Form CAFC470)
          </>
        :
          <>
            “Judgment for Change of Name of Minor Child” (Form CAFC472)
          </>
        }
        , which we will call the “court order” from now on. If you got a notice for a 
        hearing, proceed to the next section.  If you got a signed court order, skip that 
        section and proceed to the next one instead. Regardless of which outcome, make 
        sure you stop by the court to get 2 or 3 extra certified copies of the court order 
        (after you get it) before you head to social security. Keep the original in a safe 
        place.
      </p>
    </section>
  );
}}

export default MissouriFilingGuide;

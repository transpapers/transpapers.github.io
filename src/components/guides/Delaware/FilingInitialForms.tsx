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
import { DelawareCounty } from "../../../types/locality";
import { allJurisdictions } from "../../../jurisdiction/all";

function DelawareFilingGuide({
  person,
}: {
  person: Person;
}) {
  const { age, residentJurisdictionName, residentLocalityName, hasCriminalRecord, isChangingLegalSex } = person;
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;
  const residentLocality: DelawareCounty = localities.find(
    (j) => j.name === residentLocalityName,
  ) as DelawareCounty;

  return (
    <section key="Delaware-Filing">
      <h3>Filing Initial Forms (DE)</h3>
      <p>
        The filing location is the {residentLocalityName}{" "}
        {age && age < 18 ? "Family Court" : "Court of Common Pleas"} located
        at{" "}
        {age && age < 18 
          ? residentLocality.minorCourt.address 
          : residentLocality.court.address
        }
        . To check things like hours of operation or accepted payment types you can 
        either call the court at{" "}
        {age && age < 18 
          ? residentLocality.minorCourt.phone 
          : residentLocality.court.phone
        }
        {" "}or check their{" "}
        {age && age < 18 ? (
          <a href={residentLocality.minorCourt.website} title="website">
            website
          </a>
        ) : (
          <a href={residentLocality.court.website} title="website">
            website
          </a>
        )}
        .
      </p>

      {age && age > 18 &&
        <p>
          <strong>
            By state law, court clerks are barred from answering questions
            about the forms.
          </strong>{" "}
          We recommend that you direct any questions you may have to the
          court&apos;s legal assistance center, a local LGBT organization, or an
          attorney. You can also use the courts dedicated email for questions 
          on the forms: {residentLocality.adultCourtEmail}.
        </p>
      }

      <p>
        Delaware allows for E-filing, mail filing, or in-person filing. For E-filing 
        use this {" "}
        <a href="https://fileandservedelaware.com/Registration/IndependentUserInfromation">
          link
        </a>
        , they also have instructional videos for registering as a 
        self-representing litigant and filing in a new case{" "}
        <a href="https://www.fileandservexpress.com/knowledge-base/video-library/#DelawareVideos">
          here
        </a> 
        {" "}that will explain the e-filing process. All of the documents we had 
        {age && age < 18 ? " your petitioner" : " you"} gather as well as the 
        completed and notarized forms will need to be scanned in as pdf’s in order 
        to do this process.
      </p>

      <p>
        For mail filing {age && age < 18 ? "your petitioner" : "you"} will need 
        to place all of the documents we had {age && age < 18 ? "them " : "you "}
        gather, the notarized forms, the photocopies of the notarized forms, a 
        scanned copy of {age && age < 18 ? "their" : "your"} photo ID (both sides), 
        and the fee waiver (plus photocopy) into an envelope. If
        {age && age < 18 ? " your petitioner is" : " you are"} not using the fee waiver 
        a check/money order made out to the{" "}
        {age && age < 18 ? (
          <>
            “{residentLocalityName} County Family Court”
          </>
        ) : (
          <>
            “{residentLocalityName} County Court of Common Pleas”
          </>
        )}
        {" "}for the filing fee amount will be needed instead. Call the court at the 
        number provided above for the filing fee amount. Then mail it to the address 
        we provided above.
      </p>

      <p>
        For in-person filing {age && age < 18 ? "your petitioner" : "you"} will need 
        to bring all of the documents we had {age && age < 18 ? "them " : "you "}
        gather, the notarized forms, the photocopies of the notarized forms, photo ID, 
        and either the notarized fee waiver form (plus photocopy) or an accepted 
        payment method to the court.
      </p>

      {age && age < 18 ? (
        <>
          {residentLocality.minorCourt.specificCourtInfo && (
            <p>{residentLocality.minorCourt.specificCourtInfo}</p>
          )}
        </>
      ) : (
        <>
          {residentLocality.court.specificCourtInfo && (
            <p>{residentLocality.court.specificCourtInfo}</p>
          )}
        </>
      )}

      {age && age < 18 ? (
        <p>
          Once everything has been filed your petitioner will need to wait for the 
          court to mail them a court hearing date. This will likely take a few weeks. 
          If it has not arrived by the 4th week since filing they should call the 
          court at the number provided above. If the fee waiver was filed and 
          rejected the court will notify them and they will need to pay the filing 
          fee in order for the case to continue.{" "}
          {hasCriminalRecord && 
            <>
              There is a small chance that the court requests a background check for 
              you, if so your petitioner should follow the court&apos;s instructions if 
              this occurs.
            </>
          }
        </p>
      ) : (
        <p>
          Once everything has been filed you will need to wait. If the court grants 
          the change without a hearing they will send you a court order and a few 
          certified copies of said order. If that happens skip the  “Court Hearing” 
          section. Otherwise they will send you a hearing date. In any case this 
          will likely take a few weeks. If nothing has arrived by the 4th week since 
          filing, call the court at the number provided above. If the fee waiver was 
          filed and rejected the court will notify you and you will need to pay the 
          filing fee in order for the case to continue.{" "}
          {hasCriminalRecord && 
            <>
              There is a small chance that the court requests a background check. If 
              so, you should follow the court&apos;s instructions for this process.
            </>
          }{" "}
          Once the name change is granted you will have <strong>30 days</strong> to 
          update it at the Social Security office and then the DMV.
        </p>
      )}

      {isChangingLegalSex && 
        <p>
          While you are waiting we recommend completing the “Request for Gender 
          Change on Driver License/Identification Card” (MV2020) form in the “DMV” 
          section later in this guide. You will have limited time to do this after 
          the court grants the name change so it is best to do it now.
        </p>
      }

    </section>
  );
}}

export default DelawareFilingGuide;

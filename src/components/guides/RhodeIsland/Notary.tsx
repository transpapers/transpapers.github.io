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
import { type RhodeIslandCityOrTown } from "../../../types/locality";

function RhodeIslandNotaryGuide({ person }: { person: Person }, { RIcityortown }: { RIcityortown: RhodeIslandCityOrTown }) {
  const { court, age, birthJurisdiction } = person;
  const { courtDoesBackgroundCheck } = RIcityortown;

  return (
    <section key="RhodeIsland-Notary">
      <h3>Getting Documents and a Notary (RI)</h3>

      <p>
        Everything in this section can be done in whatever order is most convinient.
      </p>

    {birthJurisdiction && birthJurisdiction == "RI" ? (
      <>
        <p>
            To do the birth certificate request by mail have a check or money
            order made out to the "General Treasurer of RI" for $25.00.
            {age && age < 18 ? (" The parent/guardian that is listed on the form will ") : (" You will then ")}
            need to make a photocopy of a Drivers License, State ID, or Passport.
            Place the form, photocopy, and payment into an envelope, place a stamp, and 
            mail it to:
        </p>

        <p>
            <span>Rhode Island Department of Health - Office of Vital Records</span>
            <br />
            <span>6 Harrington Road</span>
            <br />
            <span>Cranston, Rhode Island 02920</span>
        </p>

        <p>
            To do the process in-person {age && age < 18 ? (" a parent/guardian ") : (" you ")}
            will need to make an appointment at this{" "}
            <a href="link">https://outlook.office365.com/book/VitalRecordsAppointments@health.ri.gov/</a>
            {" "}and click "Record Request". Then fill out the requested info and go to
            the Cranston address listed above when it's time. Just bring photo ID,
            the completed form, and a payment method for the fee (cash, check, or card).
            Additionally the Attorney General's office is located very close to this 
            address and only does walk-ins so it's possible to knock out both in one trip.
        </p>
      </>
    ) : ("")}

      <p>
        Notaries are needed to witness {age && age < 18 ? (" both parent(s)/guardian(s) ") : (" your ")}
        signatures and provide their own. The Change of Name form and (optionally) the
        Background Check Authorization form both need a notary and can be done
        during the same appointment. Rhode Island maintains a list of notaries{" "}
        <a href="here">https://business.sos.ri.gov/PublicNotarySearch/Home</a>.
        Notaries can also be found in court buildings, banks, some{" "}
        <a href="UPS locations">https://www.theupsstore.com/tools/find-a-store</a>, or{" "}
        <a href="online">https://www.notarize.com/</a>. All of these services have
        different fees and payment methods but all of them require a photo ID.
      </p>

    {courtDoesBackgroundCheck && courtDoesBackgroundCheck == true ? (
      <p>
        Our records show that the {court?.city} court either does the
        background check report for you when you file or gives its
        own unique instructions for one upon filing.
      </p>
    ) : (
      <>
        <p>
            To do the background check by mail
            {age && age < 18 ? (" the parent/guardian that is listed on the form will ") : (" you will ")}
            need to make a photocopy of a Drivers License, State ID, or Passport.
            Then have a check or money order for $5.00 made out to "BCI". After
            that make a self-addressed and stamped envelope for them to send
            the report back in. Finally place the notarized Authorization form,
            photocopy, payment, and self-addressed envelope into a large envelope
            and mail it to this address:
        </p>
        <p>
            <span>Rhode Island Office of the Attorney General</span>
            <br />
            <span>4 Howard Avenue</span>
            <br />
            <span>Cranston, Rhode Island 02920</span>
        </p>

        <p>
            To do the background check in-person
            {age && age < 18 ? (" the parent/guardian that is filing these documents at court will ") : (" you will ")}
            need to head to the above address. They only do walk-ins so
            the only things needed are a photo ID and a credit/debit
            card for the $5.00 fee. They will mail you the report.
        </p>
      </>
    )}

      <p>
        {age && age < 18 ? ("Once you and your parent(s)/guardian(s) ") : ("Once you ")}
        have a useable copy of the birth certificate
        {courtDoesBackgroundCheck && courtDoesBackgroundCheck == true ? (
            "and a notarized Change of Name petition you are ready to file. The court should take care of the background check when you file."
        ) : (
            ", a notarized Change of Name petition, and the background check results you are ready to file."
        )}
      </p>
    </section>
  );
}

export default RhodeIslandNotaryGuide;

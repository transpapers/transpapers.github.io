/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import { newYork } from "../../../jurisdiction/all";

import { type Person } from "../../../types/person";
import { type NewYorkCounty } from "../../../types/locality";

const nycCourts = newYork.localities
  .filter((loc) => loc.isNYC)
  .map((loc) => loc.court);

function NewYorkFilingGuide({
  person,
  locality,
}: {
  person: Person;
  locality: NewYorkCounty;
}) {
  const { age } = person;
  const { name, isNYC, borough, court } = locality;
  return (
    <section key="NewYork-Filing">
      <h3>Filing Initial Forms (NY)</h3>

      {isNYC ? (
        <>
          <p>
            {age && age < 18 ? "A parent/guardian " : "You "} can file in any of
            the 5 NYC Civil courts. We have them listed below with your borough
            bolded.
          </p>
          {...Array.from(
            nycCourts.map((court) => (
              <span key="{court.name}">
                <strong>{borough}</strong>: {court.address}. Phone Number:{" "}
                {court.phone}
              </span>
            )),
          )}
          <p>
            {court.specificCourtInfo ?? ""}
            The cost to file is currently $65. If you bring cash make sure
            it&apos;s exact as they probably won&apos;t make change for you.
          </p>
        </>
      ) : (
        <>
          <p>
            The filing location is the {name} county court at {court.address}.
            {age && age < 18 ? "A parent/guardian " : "You "} may want to call
            ahead to check accepted payment types, their phone number is{" "}
            {court.phone}. Generally speaking though as long as you have cash,
            check, and card all ready to go then you are good. The cost to file
            is currently $210, there will not be a hearing.
          </p>

          {court.specificCourtInfo && <p>{court.specificCourtInfo}</p>}
        </>
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
        <p>
          After the clerk receives the filled out & notarized petition, your
          parent/guardian(s) ID, the certified copy of the minors birth
          certificate, and the filing fee (or optional fee waiver) they should
          then give a reference number. The clerk should also tell your
          parent/guardian(s) when to come back for the court order confirming
          the changes. There shouldn’t be a hearing unless there is a
          parent/guardian who refused to give consent for the change. When they
          return they only need their ID(s) and the reference slip that the
          clerk gave them. Finally a document called &ldquo;Order Granting Name
          Change and/or Sex Designation Change for an Individual Minor&rdquo;
          (UCS-NC02) will be given that we will refer to as the court order. We
          recommend requesting and paying for an additional certified copy or 2
          of the order for later use. Have the original kept in a safe place.
        </p>
      ) : (
        <p>
          After the clerk recieves your notarized UCS-NC1 form, your ID, a copy
          of your birth certificate, and the filing fee (or optional fee waiver)
          they should give you a reference number. They will also tell you when
          to return for your court order confirming the changes as there will
          not be a hearing. When you return you only need your ID and the
          reference slip they gave you. You should recieve a document called
          &ldquo;Order Granting Name Change and/or Sex Designation Change for an
          Individual Adult&rdquo; (UCS-NC01) that we will refer to as the court
          order. We recommend paying for an additional certified copy or 2 for
          later use. Keep the original in a safe space.
        </p>
      )}
    </section>
  );
}

export default NewYorkFilingGuide;

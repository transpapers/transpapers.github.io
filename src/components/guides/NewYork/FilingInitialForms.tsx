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
import { type NewYorkCounty } from "../../../types/locality";

function NewYorkFilingGuide(
    { person }: { person: Person },
    { NYcounty }: { NYcounty: NewYorkCounty },
) {
  const { court, age, residentCounty } = person;
  const { isNYC, borough } = NYcounty;
  return (
    <section key="NewYork-Filing">
      <h3>Filing Initial Forms (NY)</h3>

    {isNYC && isNYC == true ? (
      <>
        <p>
          {age && age < 18 ? ("A parent/guardian ") : ("You ")} can file in any of
          the 5 NYC Civil courts. We have them listed below with your borough bolded.
        </p>

        /** Is there a way to list these courts by direct calling from counties.ts?*/
        {residentCounty && residentCounty == "Bronx" ? (
          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
        ) : (
          <span>The Bronx: 851 Grand Concourse, Bronx, NY 10451. Phone Number: (646) 386-5700</span>
        )}
        <br />

        {residentCounty && residentCounty == "Kings" ? (
          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
        ) : (
          <span>Brooklyn: 141 Livingston St, Brooklyn, NY 11201. Phone Number: (646) 386-5700</span>
        )}
        <br />

        {residentCounty && residentCounty == "New York" ? (
          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
        ) : (
          <span>Manhatten: 111 Centre St, New York, NY 10013. Phone Number: (646) 386-5750</span>
        )}
        <br />

        {residentCounty && residentCounty == "Queens" ? (
          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
        ) : (
          <span>Queens: 89-17 Sutphin Blvd, Queens, NY 11435. Phone Number: (718) 262-7100</span>
        )}
        <br />

        {residentCounty && residentCounty == "Richmond" ? (
          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
        ) : (
          <span>Staten Island: 927 Castleton Ave, Staten Island, NY 10310. Phone Number: (646) 386-5700</span>
        )}

        <p>
          {court?.specificCourtInfo && court?.specificCourtInfo}
          The cost to file is currently $65. If you bring cash make sure it's exact as they
          probably won't make change for you.
        </p>
      </>
    ) : (
      <>
        <p>
          The filing location is the {residentCounty} county court at {court?.address}.
          {age && age < 18 ? ("A parent/guardian ") : ("You ")} may want to call ahead
          to check accepted payment types, their phone number is {court?.phone}.
          Generally speaking though as long as you have cash, check, and card all ready
          to go then you are good. The cost to file is currently $210, there will not
          be a hearing.
        </p>

        {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}
      </>
    )}

    {age && age < 18 ? (
      <p>
        After the clerk receives the filled out & notarized petition, your
        parent/guardian(s) ID, the certified copy of the minors birth certificate,
        and the filing fee they should then give a reference number. The clerk
        should also tell your parent/guardian(s) when to come back for the court
        order confirming the changes. There shouldn’t be a hearing unless there is
        a parent/guardian who refused to give consent for the change. When they
        return they only need their ID(s) and the reference slip that the clerk
        gave them. Finally a document called "Order Granting Name Change and/or
        Sex Designation Change for an Individual Minor" (UCS-NC02) will be given
        that we will refer to as the court order. We recommend requesting and
        paying for an additional certified copy or 2 of the order for later use.
        Have the original kept in a safe place.
      </p>
    ) : (
      <p>
        After the clerk recieves your notarized UCS-NC1 form, your ID, a copy
        of your birth certificate, and the filing fee they should give you a
        reference number. They will also tell you when to return for your court
        order confirming the changes. When you return you only need your ID and
        the reference slip they gave you. You should recieve a document called
        "Order Granting Name Change and/or Sex Designation Change for an
        Individual Adult" (UCS-NC01) that we will refer to as the court order.
        We recommend paying for an additional certified copy or 2 for later use.
        Keep the original in a safe space.
      </p>
    )}
    </section>
  );
}

export default NewYorkFilingGuide;

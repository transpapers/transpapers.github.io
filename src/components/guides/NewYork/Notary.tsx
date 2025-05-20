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

function NewYorkNotaryGuide({ person }: { person: Person }) {
  const { age, birthJurisdiction } = person;

  return (
    <section key="NewYork-Notary">
      <h3>Getting Documents and a Notary (NY)</h3>


    {birthJurisdiction && birthJurisdiction === "New York" ? (
        <p>
            In order to file {age && age < 18 ? (" a parent/guardian ") : (" you ")}
            will need a certified copy of your birth certificate. If you don't have
            one you can get one{" "}
            <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">online</a>
            {" "}no matter where in New York state you were born. There is an in-person
            option if you were born in New York City. Appointments can be made at this{" "}
            <a href="https://wb-nycdohmh.qmatic.cloud/qmaticwebbooking/#/">link</a>
            and selecting "Purchase a Birth Certificate". They accept credit/debit cards,
            checks, or money orders. <strong>No Cash.</strong>
        </p>
    ) : (
        <p>
            {age && age < 18 ? ("A parent/guardian ") : ("You ")} can get a copy of
            your birth certificate{" "}
            <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">online</a>
            {" "}if you were born in the US. If you were born in another country
            {age && age < 18 ? (" a parent/guardian ") : (" you ")} will need to
            contact your birth country's records department to get proof of birth.
        </p>
    )}

    {age && age < 18 ? (
        <p>
            Notaries can be found in court buildings, banks, some{" "}
            <a href="https://www.theupsstore.com/tools/find-a-store">UPS locations</a>
            , or{" "} <a href="https://www.notarize.com/">online</a>. There will
            be a fee for this required service.
            {age && age > 13 ? (" ") :
              (" You and the petitioner need to meet with the notary together to sign.")}
            Once all signatures are signed, witnessed, and stamped the form is ready
            to be filed at court.
        </p>
    ) : (
        <p>
            You will need a notary to witness your signature and provide
            their own. Notaries can be found in court buildings, banks, some{" "}
            <a href="https://www.theupsstore.com/tools/find-a-store">UPS locations</a>
            , or{" "} <a href="https://www.notarize.com/">online</a>. You will
            be charged a fee for this required service. Once you have met with
            one to get the required signature and stamp you are ready to file.
        </p>
    )}
    </section>
  );
}

export default NewYorkNotaryGuide;

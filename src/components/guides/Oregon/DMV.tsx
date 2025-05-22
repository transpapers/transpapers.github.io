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

function OregonDMVGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="Oregon-DMV">
      <h3>Updating your Primary ID (OR)</h3>
      <p>
        This section covers the process of updating your primary identification
        (driver’s license/state ID) and any vehicle registrations you may have.
        If this is not relevant to you, proceed to the next section. You will
        need to schedule an in-person appointment at any DMV in the state,
        which can be done by hitting the "Let's get started" button at this{" "}
        <a href="https://www.oregon.gov/odot/DMV/pages/appointments.aspx">link</a>.
        The website will walk you through making an appointment and finding the 
        closest DMV to you. 
      </p>

      <p>
        When you {age && age < 18 && "and a parent/guardian"} go to your 
        appointment you will need to bring your old license if you have one or 
        another proof of ID if you don't.{" "}
        <a href="https://www.oregon.gov/odot/dmv/pages/driverid/idproof.aspx">Here</a>
        {" "}are other acceptable documents for proof of ID, they don't need to have 
        your new information. You will also need a certified copy of the court order 
        and the receipt from social security. Finally, if your address is different now 
        than on your old ID or if you don’t have an old ID you will need proof of 
        address. This is any two bits of mail, other forms of ID, bills, or other 
        documents with your old full legal name on it and your current address. The 
        proof of ID link above also contains a complete list of acceptable documents 
        for proof of address. For payment the DMV accepts cash, checks, money order, 
        credit/debit cards, and mobile payments. When you are there, state that you 
        want your name and/or gender marker updated on your ID and present the above 
        documents, you will be charged a fee for this service.
      </p>

      <p>
        Optionally, you may also update your vehicle registration(s). You
        will be given another form, which you should sign and initial in your
        new legal name. You will be charged a fee for each vehicle.
      </p>
    </section>
  );
}

export default OregonDMVGuide;

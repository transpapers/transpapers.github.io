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

function RhodeIslandBirthCertRequestGuide({ person }: { person: Person }) {
  const { court, age, birthJurisdiction } = person;

  return (
    <section key="RhodeIsland-BC-Req">
      <h3>Birth Certificate Request (RI)</h3>

      <p>
        {age && age < 18
          ? "A parent/guardian needs a copy of your "
          : "You need a copy of your "}
        birth certificate in order to file for a name change. Call the local
        court at this number {court?.phone} to check if they allow a photocopy
        or if they need a certified copy. If they need a certified copy and you
        happen to have that, ask if it is useable as some courts will only take
        a recent certified copy.
      </p>

      {birthJurisdiction && birthJurisdiction === "Rhode Island" ? (
        <p>
          If you don&apos;t have a useable copy you can either request one
          online through{" "}
          <a href="https://www.vitalchek.com/v/vital-records/rhode-island">VitalChek</a> 
          {" "}or by mail using the &quot;Application for a Certified Copy of a Birth
          Record&quot; form we provided. Specifically the one with &quot;name
          change&quot; written in the bottom right of section 3. If you want to
          use this form finish filling out the section 1 &quot;hospital&quot;
          field. If you have had your name changed by court order before now
          then fill out the &quot;New name if changed in court&quot; field as
          well.
          {age && age < 18
            ? " Then have the parent/guardian whose name is listed in section 5 check the appropriate box in section 2 and sign/date section 5. "
            : " Then sign and date section 5 with your current legal name. "}
          Instructions for in-person or mail ordering are in the next section.
        </p>
      ) : (
        <p>
          If you don&apos;t have a useable copy you will need to either
          {age && age < 18 ? " have a parent/guardian" : " "} order one online
          through{" "}
          <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">VitalChek</a>
          {" "}or go through your birth state/territory&apos;s Vital Records
          department. If you were born in another country it will be through
          your birth country&apos;s records department instead to get proof of
          birth.
        </p>
      )}
    </section>
  );
}

export default RhodeIslandBirthCertRequestGuide;

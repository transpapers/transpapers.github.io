/**
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

function TexasGetBirthCertGuide({ person }: { person: Partial<Person> }) {
  const { birthJurisdiction } = person;

  return (
    <section key="Texas-Get-Birth-Cert">
      <h3>Get Your Birth Certificate (TX)</h3>
      <p>
        A certified copy of your birth certificate is needed for the gender 
        change petition. If you don’t have one available they can be ordered 
        online through{" "}
      {birthJurisdiction?.name === "Texas" ? (
        <>
          the Texas Department of{" "}
          <a href="https://ovra.txapps.texas.gov/ovra/order-vital-records">
            Vital Records
          </a>
        </>
      ):(
        <>
          your birth state/territory&apos;s{" "}
          <a href="https://www.cdc.gov/nchs/w2w/index.htm">
            Vital Records department
          </a>
        </>
      )}
      . If you were born in another country it will be through your birth 
      country&apos;s records department instead to get proof of birth. Any 
      document not in English needs a professional translation. Write “Exhibit 
      B” at the top of the birth certificate.
      </p>
    </section>
  );
}

export default TexasGetBirthCertGuide;

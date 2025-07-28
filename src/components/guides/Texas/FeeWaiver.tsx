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

import { type Person } from "../../../types/person";

function TexasFeeWaiverGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalName, isChangingLegalSex } = person;

  return (
    <section key="Texas-CB-CFFW-100">
      <h3>Fee Waiver (TX, CB-CFFW-100)</h3>
      <p>
        The filing fee for submitting the petition and other forms is around 
        $300 to $400 dollars depending on the county. This fee can potentially 
        be waived using the “Statement of Inability to Afford Payment of Court 
        Costs or an Appeal Bond” (CB-CFFW-100).
      {age && age < 18 ? (
        " Your petitioner should fill out their date of birth on page 2. If their"
      ) : (" If your")} mailing address is different from the home address that 
        should be filled in on page 2. All dependents in your household need 
        to be listed on page 3, minors only need their initials. Sections 4 
        through 8 ask for detailed financial information that should be carefully 
        filled out.
      </p>

      <p>
        Review the form to ensure the information is correct, then sign and date 
        in Option 1 on page 12. Generally if your household is on government 
        assistance or makes around 125% or below the federal poverty line in 
        income it will be granted. The worst that the court can do is deny it.
      {isChangingLegalName && isChangingLegalSex ? (
        <>
          This form can be printed and filled out twice, once for the name change 
          and once for the gender change, if desired.
        </>
      ) : ("")}
      </p>
    </section>
  );
}

export default TexasFeeWaiverGuide;

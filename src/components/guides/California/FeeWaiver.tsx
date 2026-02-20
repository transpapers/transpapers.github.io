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

function CaliforniaFeeWaiverGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="California-Fee-Waiver">
      <h3>Request to Waive Court Fees (CA, FW-001)</h3>
      <p>
        This form is optional. It is a request to waive the filing fee charged
        upon submitting the paperwork to the court. In California the filing fee for 
        this varies but is usually around $450.
        {age && age < 18 ? " Your petitioner" : " You"} should fill out sections 2, 5, and
        6 the follow the directions at the top of page 2. If your household meets at least 
        one of the criteria in sections 5a or 5b the judge will likely grant the waiver.
        {age && age < 18 ? " Your petitioner" : " You"} may file the request at 
        {age && age < 18 ? " their" : " your"} discretion; the worst they can do is deny 
        it.
      </p>
    </section>
  );
}

export default CaliforniaFeeWaiverGuide;

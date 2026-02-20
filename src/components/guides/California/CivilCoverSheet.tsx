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

function CaliforniaCoverSheetGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex } = person;

  return (
    <section key="California-CM010">
      <h3>Civil Case Cover Sheet (CA, CM-010)</h3>

      <p>
        This is a cover sheet showing what type of case the court will hear. In California
        name {isChangingLegalSex ? "/gender" : ""} changes are Unlimited Civil Cases. This
        form is not required in every county but was included just in case. All this form
        needs is your {age && age < 18 ? "parent/guardians" : ""} signature on the bottom
        right of the first page.
      </p>

    </section>
  );
}

export default CaliforniaCoverSheetGuide;

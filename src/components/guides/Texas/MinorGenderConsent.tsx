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

function TexasMinorGenderConsentGuide({ person }: { person: Partial<Person> }) {
  const { isChangingLegalName } = person;

  return (
    <section key="Texas-TC-FM-GI3-113">
      <h3>Statement of Consent of Minor For Change of Sex/Gender Identifier (TX, TC-FM-GI3-113)</h3>
      <p>
        This form allows you, the minor, to consent to the Gender Change. You 
        will need to sign and date it at the bottom
        {isChangingLegalName ? (" in your curent name.") : (".")} You can also 
        fill in any other information you want the judge to know about right 
        above the signature line.
      </p>
    </section>
  );
}

export default TexasMinorGenderConsentGuide;

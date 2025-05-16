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

function NewYorkUCS_NC1Guide({ person }: { person: Person }) {
  const { residentCounty } = person;
  return (
  <section key="NewYork-UCS-NC1">
    <h3>Name and/or Sex Change Petition (NY, UCS-NC1)</h3>

  <p>
    The first form to be filled out is the "Name Change and/or Sex
    Designation Change Petition for an Individual Adult" (UCS-NC1).
    In order to file this you need to live in{" "} {residentCounty}
    {" "}and have lived in New York State for at least 6 months. It
    has some sections that you will need to review. Look through
    sections A, B, and C to see if the information we filled in is
    accurate for your circumstances. If it's not then type in the
    missing info or write with black ink if it's already printed.
    You will need to sign with your current legal name below item 30
    on the last page but do <strong>not</strong> additionally sign on
    the line that reads “Petitioner Signature in Presence of Notary”
    until you meet with one.
  </p>
    </section>
  );
}

export default NewYorkUCS_NC1Guide;

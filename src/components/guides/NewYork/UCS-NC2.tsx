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

function NewYorkUCS_NC2Guide({ person }: { person: Person }) {
    const { age, residentCounty, parentsAreOkay } = person;
  return (
  <section key="NewYork-UCS-NC2">
    <h3>Name and/or Sex Change Petition (NY, UCS-NC2)</h3>

  <p>
    The first form to be filled out is the "Name Change and/or Sex
    Designation Change Petition for Individual Minor" (UCS-NC2).
    It has some sections that a parent/legal guardian will need to
    review. They need to look through sections A, B, and C to see
    if the information we filled in is accurate for your
    circumstances. If it's not the missing info needs to be typed
    or written with black ink. You need to have lived in{" "}
    {residentCounty} {" "}for at least 6 months before a
    parent/guardian can file this on your behalf.
  </p>

  {parentsAreOkay && parentsAreOkay == true ? (
    <p>
        If both parents are able to meet with a notary at the
        same time they will need to have both of their names
        present on page 1 and signed below item 30 on page 4.
        This does <strong>not</strong> mean both have to be
        present at court to file, only one is required there.
        If both parents cannot meet with a notary at the same
        time for any reason than have the parent who isn't listed
        as the petitioner on page 1 fill out the top part of
        page 5. Then the non-petitioning parent can meet with
        a notary to sign on page 5. The petitioning parent can
        then take {age && age > 13 ? " you and " : " "} that
        form to another appointment for the remaining sections.
        Information about notaries is in the next section.
    </p>
  ) : (
    <p>
        The parent/guardian whos name is listed as the petitoner
        on page 1 needs to get any other parent(s)/guardian(s)
        to sign their consent on page 5 in front of a notary before
        {age && age > 13 ? " either of you " : " they "} do. If a
        parent is deceased or non-custodial have a certified copy
        of the death certificate or court ordered custody submitted
        with this form. If you have a guardian they need to make
        a copy of their letter of guardianship to submit with this
        form. Information about notaries is in the next section.
    </p>
  )}

  <p>
    If you have a non-consenting parent/guardian with custody over
    you the process gets more complicated, there will be a hearing,
    and we recommend using the following link to assist in the process{" "}
    <a href="https://lawhelpinteractive.org/Interview/GenerateInterview/5031/engine">
        https://lawhelpinteractive.org/Interview/GenerateInterview/5031/engine</a>
    . It will generate the paperwork and instructions for the
    particulars of your case. Otherwise we recommend getting
    a lawyer to assist with your case or wait until you are 18.
  </p>
    </section>
  );
}

export default NewYorkUCS_NC2Guide;

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

function OregonMinorPetitionGuide({ person }: { person: Person }) {
  const { residentCounty, isChangingLegalSex, isChangingLegalName } = person;
  return (
  <section key="Oregon-Minor-Petition">
    <h3>Name and/or Sex Change Petition (OR)</h3>

  <p>
    The Petition for Change of Name/Sex allows for name and/or gender 
    changes all in one form. Any parent or legal guardian can fill this 
    form out and file it on your behalf. Whoever does becomes your 
    petitioner and will be going through this process with you.
    {isChangingLegalSex && isChangingLegalSex === true ? (
      <>
        In order to file this your petitioner needs to be a resident of 
        Oregon, which just means they need an ID or some mail with their 
        name and Oregon address on it.
      </>
    ) : (
      <>
        In order to file this your petitioner needs to be a resident of{" "}
        {residentCounty} county, which just means you need an ID or some mail 
        with their name and an address within {residentCounty} county on it.
      </>
    )}
  </p>

  <p>
    {isChangingLegalName && isChangingLegalName === true ? (
      <>
        Your petitioner will <strong>not</strong> need to fill out the legal
        notice section on page 2 yet, thats for after filing. Your 
        petitioner can fill out why this is in your best interest on page 3 
        then sign and the form is ready to file. We will cover what to do 
        about sending notice on the filing step.
      </>
    ) : (
      <>
        Your petitioner will <strong>not</strong> need to fill out the legal
        notice section on page 2 since you are not requesting a name change. 
        Your petitioner can fill out why this is in your best interest on 
        page 3 then sign and the form is ready to file.
      </>
    )}
    The "General Judgement" is on pages 6 and 7 should already be set, file it 
    with the petition.
    </p>
    </section>
  );
}

export default OregonMinorPetitionGuide;

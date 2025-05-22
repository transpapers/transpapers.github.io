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

function OregonAdultPetitionGuide({ person }: { person: Person }) {
  const { residentCounty, isChangingLegalSex } = person;
  return (
  <section key="Oregon-Adult-Petition">
    <h3>Name and/or Sex Change Petition (OR)</h3>

    The Petition for Change of Name/Sex allows for name and/or gender 
    changes all in one form.
    {isChangingLegalSex && isChangingLegalSex === true ? (
      <p>
        In order to file this you need to be a resident of Oregon, which 
        just means you need an ID or some mail with your legal name and 
        Oregon address on it.
      </p>
    ) : (
      <p>
        In order to file this you need to be a resident of {residentCounty} 
        {" "}county, which just means you need an ID or some mail with 
        your legal name and an address within {residentCounty} county on it.
      </p>
    )}

  <p>
    You will need to check and fill out any of the lines below the “Public
    Interest” section as they apply to you. You will also need to list down 
    any prior names/aliases that you have used in the past below the “Public 
    Interest” section. If you are in the Address Confidentiality Program you 
    can check the box on page 1 near the bottom to seal this court record. 
    You then need to sign the form with your current legal name on page 3. The
    "General Judgement" on page 4 should already be set, file it with your 
    petition.
  </p>
    </section>
  );
}

export default OregonAdultPetitionGuide;

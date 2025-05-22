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

function OregonMinorBirthGuide({ person }: { person: Person }) {
  const { isChangingLegalSex, isChangingLegalName } = person;
  return (
  <section key="Oregon-Minor-Birth">
    <h3>Updating Birth Certificate (OR)</h3>

  <p>
    A court case is not needed to update your information, instead it can 
    be updated by changing your birth certificate information and 
    updating everything else using that.
    {isChangingLegalSex && isChangingLegalSex === true ? (
      <>

      </>
    ) : (
      <>

      </>
    )}
  </p>

    {isChangingLegalName && isChangingLegalName === true ? (
      <p>

      </p>
    ) : (
      <p>

      </p>
          )}
          According to the Social Security Administration's rules
          (https://secure.ssa.gov/poms.nsf/lnx/0110212090) when the new birth
          certificate and correspondence letter arrive a parent/guardian can
          update your information at Social Security using those documents.
    </section>
  );
}

export default OregonMinorBirthGuide;

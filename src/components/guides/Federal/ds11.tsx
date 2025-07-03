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

// TODO Give this a once-over for style.
function DS11Guide({ person }: { person: Person }) {
  const { age, isChangingLegalSex } = person;
  return (
    <section key="Federal-Passport">
      <h3>Obtaining Your Passport</h3>

      <p>
        <strong>Attention</strong>: The court case Orr v. Trump has concluded and
        the state department is now required to update gender markers on passports
        again. It is safe to do so and the passport will reflect the correct marker.
      </p>

      <p>
        This step should be started after you have updated your primary ID.
        Pages 1-4 of your passport application (DS-11) contain instructions and
        clarification, on page 5 at the top you will need to select which
        documents you want. Then fill out your social security number in section
        5. If you have changed your name multiple times before then you will
        need to add them to section 9. For the photo we suggest going to a
        business for the highest chance of success.{" "}
        <strong>Do not staple it to the form.</strong> For section 10 on page 6
        please fill out your parents place of birth, legal gender, and
        citizenship status. On page 6 complete sections 11 through 21 as they 
        apply to you. For section 18 if you have no current travel plans write
        &quot;none&quot; in every box.
      </p>

        {isChangingLegalSex ? (
        <p>
          The &ldquo;Attestation of Orr v. Trump Class Membership&rdquo; form is new and allows
          for updating gender markers once again. To complete the form simply
          {age && age < 18 ? (" have a parent/guardian sign ") : (" sign ")}
          on page 2.
        </p>
      ):("")}

      <p>
        Now you will need to go to a location that you can apply in with this
        DS-11 passport form, {isChangingLegalSex ? (" attestation form, "):("")} 
        your primary id, a checkbook for fees, and your photo. You can find 
        application locations at his URL:{" "}
        <a href="https://iafdb.travel.state.gov/">
          https://iafdb.travel.state.gov/
        </a>
        .
      </p>

      {age && age < 18 ? (
        <p>
          {age && age < 16 ? (
            <>
              Federal policy states that both parents must be present for you to
              apply for a passport. If one or more of your parent(s)/guardian(s)
              cannot attend for any reason go to this{" "}
              <a href="webpage">
                https://travel.state.gov/content/travel/en/passports/need-passport/under-16.html
              </a>
              {" "}and click on step #5 to see a list of potential workarounds for
              all situations.
            </>
          ) : (
            <>
              You will need to appear with at least one parent/guardian. If no
              one can appear with you see this{" "}
              <a href="webpage">
                https://travel.state.gov/content/travel/en/passports/need-passport/16-17.html
              </a>
              {" "}and click on step #3 to see a list of potential workarounds for
              all situations.
            </>
          )}
        </p>
      ) : (
        ""
      )}

      <p>
        If you have had a passport in the past then you should bring it and a
        certified copy of the court order. It will likely take a few months for
        them to process a nonexpedited request, you can keep tabs on it using
        this url:{" "}
        <a href="https://passportstatus.state.gov/">
          https://passportstatus.state.gov/
        </a>
      </p>
    </section>
  );
}

export default DS11Guide;

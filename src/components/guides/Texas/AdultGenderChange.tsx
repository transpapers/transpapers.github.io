/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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

function TexasAdultGenderChangeGuide({ person }: { person: Partial<Person> }) {
  const { hasCriminalRecord, gender } = person;

  return (
    <section key="Texas-Adult-Gender-Change">
      <h3>Adult Gender Change (TX, Travis County)</h3>
      <p>
        Travis county uses the “Petition to Change the Sex/Gender Identifier of
        an Adult” (TC-FM-GI1-100) as the main form for this process.
        {gender && (gender as string) === "X" ? (
          <>
            Unfortunately Texas doesn&apos;t allow for an “X” identifier on its
            ID&apos;s or Birth Certificates so there is no “X” option on these forms.
            Please go through these forms and check “M” or “F” where they are
            blank.
          </>
        ) : (
          ""
        )}
      </p>

      <p>
        You will need to enter your social security number in section 3B and any
        drivers license numbers you have had over the past 10 years as well as
        the state(s) you got them in into section 3D. Enter your birth county
        into section 3E and your race, as shown on your birth certificate, into
        section 3G. If your birth certificate doesn&apos;t have a race listed, put
        “Not Shown”.
        {hasCriminalRecord ? (
          <>
            Detail your criminal record in section 4, class C misdemeanors do
            not need to be listed. If you need help with documenting that
            history you can get fingerprinted and do a criminal history{" "}
            <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
              report
            </a>{" "}
            with the Texas DPS. For 4C they are talking about using a “Sex
            Offender Update Form” (CR-32) to notify law enforcement.
          </>
        ) : (
          " Skip sections 4 through 6."
        )}
      </p>

      <p>
        Sign and date section 7 then fill in your mailing address. Use the
        checklist in section 8 to gather any documents you might need. We have
        provided a template letter to show your doctor/therapist and an
        explanation of how to do this later in this section. We will cover
        fingerprinting in the next section.
      </p>

      <p>
        The second form you will need is the “Final Order to Change the
        Sex/Gender Identifier of an Adult” (TC-FM-GI1-200) which the judge will
        sign and give back if they approve the change. They want it to be
        pre-filled so you will need to fill out sections 3D, 3E, 3F, and 3G with
        the same information that was on the petition earlier.
        {hasCriminalRecord ? (
          <>
            Sections 3I through 3L are for criminal history and should also
            match your earlier petition.
          </>
        ) : (
          " Skip 3I through 3L."
        )}
        Leave the date and signature line <strong>blank</strong> as that&apos;s for
        the judge to sign.
      </p>
    </section>
  );
}

export default TexasAdultGenderChangeGuide;

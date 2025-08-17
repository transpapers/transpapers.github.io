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

function TexasAdultNamePetitionGuide({ person }: { person: Partial<Person> }) {
  const { hasCriminalRecord, residentLocality } = person;

  return (
    <section key="Texas-FM-NCA-100">
      <h3>Petition to Change the Name of an Adult (TX, FM-NCA-100)</h3>
      <p>
        This is the state form for name changes. You need to have lived in Texas
        for at least 6 months and {residentLocality?.name} for at least 90 days
        in order to file this. You will need to fill out your social security
        number in sections 3B, the drivers license section in 3D, birth country
        (if applicable) in section 3E, and race, as shown on your birth
        certificate, in section 3G. If your birth certificate doesn’t have a
        race listed, put “Not Shown”. If you have gone by different names other
        than your current legal name and/or birth name please list them in
        section 3I.
      </p>

      {hasCriminalRecord ? (
        <p>
          Detail your criminal record in section 4. Class C misdemeanors do not
          need to be listed. If you need help with documenting that history you
          can get fingerprinted and do a criminal history{" "}
          <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
            report
          </a>{" "}
          with the Texas DPS. For 4C they are talking about using a “Sex
          Offender Update Form” (CR-32) to notify law enforcement.
        </p>
      ) : (
        ""
      )}

      <p>
        In section 5 you will need to sign and provide your mailing address.
        Section 6 has you sign under penalty of perjury meaning it is a crime to
        lie on this form so double check that everything is correct before
        signing. Finally sign and date at the bottom of section 6 to complete
        the document.
      </p>
    </section>
  );
}

export default TexasAdultNamePetitionGuide;

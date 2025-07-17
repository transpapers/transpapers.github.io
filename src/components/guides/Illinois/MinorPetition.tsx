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

function IllinoisMinorPetitionGuide({ person }: { person: Partial<Person> }) {
  const { residentLocality } = person;

  return (
    <section key="Illinois-MinorPetition">
      <h3>Request for Name Change (IL, NCM-R 2003.5)</h3>
      <p>
        Illinois has their own help guides for these forms. We have linked them{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/16f815a6-c2b3-4a20-bbee-75ed1c325654/NC-M%20Instructions.pdf">
          here
        </a>{" "}
        just in case they are needed.
      </p>

      <p>
        The “Request for Name Change” (NCM-R 2003.5) is the main form for this
        process. The parent or legal guardian that is named on this form needs
        to file this on your behalf. This person then becomes your petitioner
        and will be going through this process with you. In order for your
        petitioner to file this on your behalf you need to have lived in{" "}
        {residentLocality?.name} for at least 6 months. This form is already
        complete unless your petitioner wants to use an alternate address for
        safety. If so, here is a{" "}
        <a href="https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/76ab40ea-58b3-420b-84de-dd4a1a8662c1/NC-M%20Request%20for%20Name%20Change.pdf">
          blank
        </a>{" "}
        form to fill out, they should also check the appropriate box in the
        “Sign” section to indicate the altered address.
      </p>
    </section>
  );
}

export default IllinoisMinorPetitionGuide;

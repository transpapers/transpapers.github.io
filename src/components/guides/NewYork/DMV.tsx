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

function NewYorkDMVGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="NY-DMV">
      <h3>Updating Primary ID (NY)</h3>
      <p>
        To update your primary ID you will need the &ldquo;Application for
        Permit, Driver License or Non-Driver ID Card&rdquo; (MV-44). Fill it out
        any blanks in the following sections digitally or using black ink. Check
        the box for what ID you want in the top left. If you have or ever had a
        New York ID fill out the &ldquo;Identification Information&rdquo;
        section. For any other state fill out the boxes just below and to the
        right of that section. Fill out the Height, Eye Color, and Social
        Security boxes. We left the &ldquo;Address where you get your
        Mail&rdquo; box intentionally blank just in case it&apos;s different
        than your lived address, please fill it in. If either address is
        different than the one they have on file check the boxes below that
        section. We have also left the veteran status and organ donor boxes
        blank for you to fill as needed. Do <strong>not</strong> check the box
        in the Selective Service section. On Page 2 answer questions 1 through
        4. Do <strong>not</strong> sign the &ldquo;Certification&rdquo; section
        yet. The fee to change info on an ID is $12.50.
      </p>

      <p>
        For updating vehicle titles/registrations you need a &ldquo;Vehicle
        Registration/Title Application&rdquo; (MV-82) filled out{" "}
        <strong>for each vehicle</strong> you want updated. We have included a
        partially filled out form that assumes you are the &ldquo;Primary
        Registrant&rdquo; if this is not true{" "}
        <a href="https://dmv.ny.gov/forms/mv82.pdf">here</a> is a blank form you
        can print. In any case, fill out the instructions as well as any blanks
        we left in sections 1 thru 4. If you are updating a commericial vehicle
        do section 5 as well. Do <strong>not</strong> sign section 6 yet. There
        is no fee for updating this information.
      </p>

      <p>
        You can go to any DMV in the state, you can find close locations{" "}
        <a href="https://dmv.ny.gov/offices/county-offices">here</a> to make an
        appointment. You will need to bring a certified copy of the court order,
        the receipt from Social Security, payment, the MV-44 form, and
        (optionally) any MV-82 forms. If you have a photo ID or passport bring
        it, otherwise bring the ID documents you used for social security.
        {age && age < 18
          ? " A parent/guardian will need to come with you. "
          : " "}
        For updating vehicles any other registrants listed on the form need to
        be present as well to sign.
      </p>

      <p>
        Right before you hand the clerk the MV-44 form{" "}
        {age && age < 18
          ? " have a parent/guardian fill out the consent section on page 2, then you "
          : " "}
        sign and date the &ldquo;Certification&rdquo; section. Sign any MV-82
        forms as well.
      </p>
    </section>
  );
}

export default NewYorkDMVGuide;

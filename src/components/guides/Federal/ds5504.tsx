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

import * as React from 'react';

function DS5504Guide() {
  return (
    <section>
      <h3>Obtaining Your Passport</h3>
      <p>
        This step should be started after you have updated your primary ID.
        Your form is the DS 5504 which is a mail-in form. Pages 1-4 contain
        instructions and clarification, on page 5 at the top you will need to select
        which documents you want. Then fill out your social security number in
        section 5. If you have changed your name multiple times before then you will
        need to add them to section 9. Fill out section 10 using your passports
        information. For the photo we suggest going to a business for the highest
        chance of success and stapling that to the form.  If you are 16 or older
        sign on the first line below the blue section otherwise have your
        parent/guardian sign on the second line instead. Write in the current date
        to the right of the signatures in the indicated section. On page 6 complete
        sections 11 through 19 as they apply to you. For section 19 if you have no
        current travel plans write &ldquo;none&rdquo; in every box.
      </p>

      <p>
        Now you will need to place the completed form, old passport, and a certified
        copy of your court order in an envelope. We suggest two stamps on the envelope for
        weight reasons. There is no fee involved unless you choose to
        expedite the process, to do so make out a check for $60 to the US Department of State.
        Otherwise place all of the above documents in the envelope and locate the mailing
        address you need on the form (page 3). It will likely take a few months for them to
        process a nonexpedited request, you can keep tabs on it using this url:
        <a
          href="https://passportstatus.state.gov/"
        >
          https://passportstatus.state.gov/
        </a>
      </p>
    </section>
  );
}

export default DS5504Guide;

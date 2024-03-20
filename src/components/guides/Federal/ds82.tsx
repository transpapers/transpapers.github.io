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

// TODO Give this a once-over for style.
// TODO Unify this with the other two passport forms.
function DS82Guide() {
  return (
    <section>
        <h3>Obtaining Your Passport</h3>
      <p>
        This step should be started after you have updated your primary ID.  Your
        form is the DS 82 which is a mail-in form. Pages 1-4 contain instructions
        and clarification, on page 5 at the top you will need to select which
        documents you want. Then fill out your social security number in section 5.
        If you have changed your name multiple times before then you will need to
        add them to section 9. Fill out section 10 using your passports information.
        In section 11 write in the date of your name change as it appears on your
        court order. For the photo we suggest going to a business for the highest
        chance of success and stapling that to the form.  Sign on the signature line
        below the blue section then write in the current date to the right of the
        signature in the indicated section. On page 6 complete sections 12 through
        20 as they apply to you. For section 20 if you have no current travel plans
        write "none" in every box.
      </p>

      <p>
        Now you will need to place the completed form, old passport, and a
        certified copy of your court order in an envelope. We suggest two stamps on
        the envelope for weight reasons. There is a fee involved which is dependent
        on your choices go to section 5 of the following URL to see the
        breakdown:
        <a href="https://travel.state.gov/content/travel/en/passports/have-passport/renew.html">https://travel.state.gov/content/travel/en/passports/have-passport/renew.html</a>
        Make out a check to the US Department of State and place all of the above
        documents in the envelope and locate the mailing address you need on the
        form (page 3).  It will likely take a few months for them to process a
        nonexpedited request, you can keep tabs on it using this
        url:
        {' '}
        <a href="https://passportstatus.state.gov/">https://passportstatus.state.gov/</a>
      </p>
    </section>
  );
}

export default DS82Guide;

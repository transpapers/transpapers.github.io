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
function DS11Guide() {
  return (
    <section>
      <p>
        This step should be started after you have updated your primary ID.
        Your form is the DS 11 which is an in-person appointment form. Pages 1-4
        contain instructions and clarification, on page 5 at the top you will need
        to select which documents you want. If you never had a passport before then
        skip the "Changing gender marker" checkbox otherwise check it. Then fill out
        your social security number in section 5. If you have changed your name multiple times before
        then you will need to add them to section 9. For the photo we suggest going to a
        business for the highest chance of success.
        <strong>Do not staple it to the form.</strong>
        For section 10 on page 6 please fill out your parents place of birth,
        legal gender, and citizenship. On page 6 complete sections 11 through 21
        as they apply to you. For section 18 if you have no current travel plans
        write "none" in every box.
      </p>

      <p>
        Now you will need to go to a location that you can apply in with this
        form, your primary id, a checkbook for fees, and your photo. If you are a
        minor you will need to appear with at least one parent/guardian. If you
        have had a passport in the past then you should bring it and a certified
        copy of your court order. You can find application locations at his URL:
        <a
          href="https://iafdb.travel.state.gov/"
        >
          https://iafdb.travel.state.gov/
        </a>
        .
        It will likely take a few months for them to process a nonexpedited request, you can
        keep tabs on it using this url:
        <a
          href="https://passportstatus.state.gov/"
        >
          https://passportstatus.state.gov/
        </a>
      </p>
    </section>
  );
}

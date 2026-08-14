/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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

function StLouisMinorInfoGuide() {
  return (
    <section key="St-Louis-Minor-Info">
      <h3>Confidential Case Filing Information Sheet - Domestic Relations (St. Louis - City, unnumbered)</h3>
      <p>
        St. Louis (City) has made their own local form that they require in addition 
        to the above forms. It is the “Confidential Case Filing Information Sheet - 
        Domestic Relations” form. Your next friend should fill out your social 
        security number in the “Petitioner section” on the “SSN:” line. In the respondent 
        section fill out the other living parent/guardians information if applicable. 
        For the “Party Type Code” and “Party Type Description” it will depend on whether 
        or not they have an attorney. “RES” and “Respondent” if yes and “RESP” and 
        “Respondent Acting Pro Se” if not.
      </p>

      <p>
        On the second page, fill out the “Employer Information” section if you, the minor, 
        are employed. In the next section, your next friend should write in your social 
        security number again, as you are a minor affected by the outcome of this case. 
        Finally on the bottom of the page your next friend should fill out their address 
        and contact information. This form is now complete.
      </p>
    </section>
  );
}

export default StLouisMinorInfoGuide;

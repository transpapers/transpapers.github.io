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

function ElsewhereBirthGuide() {
  return (
    <section key="Elsewhere-Birth">
      <h3>This is for those born outside our covered areas</h3>
      <p>
        If you are reading this section that means that we do not yet have your
        place of birth in our systems. This means that we are unable to assist in
        processes like updating your birth certificate. If you were born in the 
        USA you can make a request that your state be added{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsFASZLlzuD10ILk2xQar2Hu__iv4zCE-XpIGw9_EQck9Sjw/viewform?usp=sharing&ouid=116262791576704391708">
          here
        </a>
        . If you were born in another country we will likely not be able to help you,
        our deepest apologies.
      </p>
    </section>
  );
}

export default ElsewhereBirthGuide;

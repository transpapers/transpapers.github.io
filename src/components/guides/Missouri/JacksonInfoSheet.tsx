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

function JacksonCountyInfoGuide() {
  return (
    <section key="Jackson-County-CIRCT-1452">
      <h3>Family Court Information Sheet (Jackson County, CIRCT 1452)</h3>
      <p>
        Jackson County has made their own local form that they require in addition to 
        the above forms; it is the “Family Court Information Sheet” (form CIRCT 1452). 
        At the top of the sheet, there is a checkbox for the courthouse “at Kansas City” 
        or “at Independence.” This is for which court your next friend will file at; skip 
        this for now. You, the minor, should fill out your Social Security Number, Driver’s 
        License Number, and any Employer information in the “Petitioner” section of the 
        form if applicable. Your next friend or the respondent parent should fill out the 
        information in the “Respondent” section and in the “In Re the Matter of:” section. 
        Since you are a minor subject to this hearing, your social security number also 
        goes next to your name and date of birth below the “Petitioner” section. If you 
        live with the respondent parent, check the box to the right in that same section, 
        do <strong>not</strong> check the “petitioner” box as <strong>you</strong> are the 
        petitioner. Have your next friend or the respondent parent fill out the questions 
        regarding welfare, other court cases, and any other names that you or the respondent 
        parent have ever gone by. You, the respondent parent, and the next friend should 
        all sign this document, then put down the date. This form is then complete.
      </p>
    </section>
  );
}

export default JacksonCountyInfoGuide;

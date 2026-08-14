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

import { type Person } from "../../../types/person";

function MissouriRedactingGuide({ person }: { person: Partial<Person> }) {
  const { age } = person;

  return (
    <section key="Missouri-Redact">
      <h3>Redacting Forms (MO)</h3>

      <p>
        Most court documents are viewable by the public when filed. Missouri courts 
        handle this by having 2 versions of most of their forms: (1) a redacted 
        version that is viewable by the public and (2) an un-redacted version that 
        is confidential. This also applies to any documents that you might submit 
        with the forms, such as a driver’s license. In this section, we will list 
        which forms and documents require a redacted copy and what to redact on each.
      </p>

      <p>
        When we tell you to redact something in an instruction, what we want you to 
        do is make a photocopy of the completed form or document and use a black 
        marker to redact the <strong>photocopy</strong>. Do <strong>NOT</strong> redact 
        the <strong>original</strong> form or document. If the information shows through 
        the marker, you can run the document you just redacted back through the 
        photocopier to fix that.
      </p>

      <p>
        As a general note: if a person listed on any form you are filing has an order 
        of protection or restraining order, their name, address, and contact 
        information must be redacted.
      </p>


      {age && age > 17 ? (
        <p>
          On the “Petition for Change of Name” (CAFC401), redact your date of birth on 
          page 2, section 9. If you listed any children on pages 3 or 4 (section 20), 
          redact their names but not their addresses.
        </p>
      ) : (
        <p>
          You, the minor, need to have your next friend redact your name and date of 
          birth every time it appears on any form; this includes both your legal name 
          and your desired name. On the “Judgment for Change of Name of Minor Child" 
          (Form CAFC472), this should be in the following areas: on the top of page 1, 
          page 2 section 7, page 2 section 8, and page 2 section 10.
        </p>
      )}

    {age && age < 18 &&
        <p>
          On the “Petition, Consent and Order for Parent's Appointment as Next Friend” 
          (Form CAFC411), your next friend should redact your name and date of birth 
          on the top of page 1, both “In re” and in section 1.
          {age && age > 13 && 
            " Your name and signature should also be redacted in section 2 of the same page."}
        </p>
      }

    {age && age < 18 &&
      <p>
        On the “Consent to Minor Child’s Change of Name” (Form CAFC412), your next 
        friend should redact your name on the top of page 1 and on page 2, sections 
        5 & 6.
      </p>
    }

    <p>
      The last thing that will need to be redacted is a <strong>photocopy</strong> of
      whatever ID {age && age > 17 ? "you" : "your next friend"} will be using when 
      filing. If the ID is a driver's license or state ID, the identification number 
      and birthdate need to be redacted. For passports, the photocopy only needs to 
      include the page with all of the identifying information. On that page, redact 
      the passport number and date of birth.
    </p>

    <p>
      Now that all of the documents are redacted 
      {age && age > 17 ? " you" : " your next friend"} should sign and date the 
      “Redaction Certification” (Form GN320) at the bottom. If there is a mistake 
      with a redacted form or document, the court clerk will alert 
      {age && age > 17 ? " you" : " your next friend"} after filing.
    </p>

    </section>
  );
}

export default MissouriRedactingGuide;

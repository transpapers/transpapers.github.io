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

function MissouriGenderChangeGuide({ person }: { person: Partial<Person> }) {
  const { gender } = person;

  return (
    <section key="MO-Gender-Change">
      <h3>Court Order Gender Change (MO)</h3>

      {gender && (gender as string) === "X" ? (
        <p>
          <strong>Note</strong>: Missouri does not currently support an “X” marker on 
          any ID document, so it is not possible to change to that marker here. Only 
          “M” (i.e., male) or “F” (i.e., female) is accepted. We apologize. 
        </p>
      ) : ("")}

      <p>
        Missouri currently allows updates to gender markers on birth certificates and 
        state IDs, but requires proof of some form of surgical procedure, a 
        gender-change court order, and some form of name change to do so. 
        (Specifically, Missouri law requires: “Receipt of a certified copy of an order 
        of a court of competent jurisdiction indicating the sex of an individual born
        in this state has been changed by surgical procedure and that such individual’s 
        name has been changed.”{" "}
        <a href="https://revisor.mo.gov/main/OneSection.aspx?section=193.215">
          RSMo. § 193.215.9
        </a>
        .) The law is vague on what counts as a “surgical procedure” and name change, 
        which can work both for and against us. 
      </p>

      <p>
        As long as you can get a doctor&apos;s letter (preferably from an M.D. or D.O.) 
        stating that you have undergone some sort of surgical procedure for the 
        purpose of your transition, that should be enough. However, if you have not 
        undergone surgery or cannot obtain a letter with the word “surgery” in it, 
        there are some lawyers in Missouri who may still be willing to work with you 
        to explore your options. We have marked them specially on the list of attorneys 
        below.
      </p>

      <p>
        Once you have that doctor&apos;s letter, it’s time to start looking at courts. 
        Unlike name changes, a legal gender marker change can be filed in any circuit 
        court in Missouri, meaning we can direct you to the ones that have been flagged 
        as friendly for gender changes by experienced local lawyers. These are:
        <br />
        <br />
        <span>St. Louis (City)</span>
        <br />
        <span>10 N Tucker Blvd, St. Louis, MO 63101</span>
        <br />
        <span>Phone #: (314) 622-4500</span>
        <br />
        <br />
        <span>St. Louis (County)</span>
        <br />
        <span>105 S Central Ave, Clayton, MO 63105</span>
        <br />
        <span>Phone #: (314) 615-8029</span>
        <br />
        <br />
        <span>Boone County</span>
        <br />
        <span>705 E Walnut St, Columbia, MO 65201</span>
        <br />
        <span>Phone #: (573) 886-4000</span>
        <br />
        <br />
        <span>Greene County</span>
        <br />
        <span>1010 N Boonville Ave, Springfield, MO 65802</span>
        <br />
        <span>Phone #: (417) 868-4000</span>
        <br />
        <br />
        <span>Jackson County</span>
        <br />
        <span>415 E 12th St Unit 300, Kansas City, MO 64106</span>
        <br />
        <span>Phone #: (816) 881-3000</span>
        <br />
        <br />
        <span>Platte County</span>
        <br />
        <span>415 3rd St, Platte City, MO 64079</span>
        <br />
        <span>Phone #: (816) 858-2232</span>
      </p>

      <p>
        <strong>You will need a lawyer for this process.</strong> Missouri courts 
        do not provide standard forms for gender marker changes, so you will need 
        to work with a lawyer to draft a custom petition and navigate the legal 
        process. The ACLU of Missouri has provided a list of local supportive 
        attorneys/firms who can help with gender marker and/or more complex name 
        change cases; we have placed that list in our Resources section. We will 
        update this list as new connections/referrals become available.
      </p>

      <p>
        Once you have your gender change court order, as well as a few certified 
        copies, you are ready to proceed with updating the gender marker on your 
        birth certificate and primary state ID.
      </p>

    </section>
  );
}

export default MissouriGenderChangeGuide;

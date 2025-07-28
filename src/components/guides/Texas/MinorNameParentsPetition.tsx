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

function TexasMinorNameParentsPetitionGuide({ person }: { person: Partial<Person> }) {
  const { hasCriminalRecord, residentLocality } = person;

  return (
    <section key="Texas-FM-NCC1-100">
      <h3>Petition to Change the Name of a Child or Children (TX, FM-NCC1-100)</h3>
      <p>
        This is the main form for this process. You need to have lived in Texas for 
        at least 6 months and {residentLocality?.name} for at least 90 days in order 
        for your parents to file this. Your parents need to jointly file this on 
        your behalf as co-petitioners. They will both be going through this process 
        with you. If one parent objects it will turn into a contested hearing which 
        is beyond the scope of this guide, if this happens your supportive parent 
        will need a lawyer or you will need to wait until you are 18. See the 
        “Resources” section below for help finding a lawyer if needed.
      </p>

      <p>
        For section 2 your parents should fill in any blanks we left concerning their 
        contact information. For section 4C they need to enter your Social Security 
        Number or check the box if you don’t have one.
      {hasCriminalRecord ? (
        <>
          If you need help with documenting a criminal record you can do a criminal 
          history{" "}
          <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
            report
          </a>
          {" "}with the Texas DPS. A parent should check the applicable box in section 
          4G as it applies to you. For 4G they are talking about using a “Sex Offender 
          Update Form” (CR-32) to notify law enforcement.
        </>
      ) : ("")}
      </p>

      <p>
        Both parents should fill out section 4J in their own words then sign in section 
        6. Sections 7 and 8 have your parents sign under penalty of perjury meaning it 
        is a crime to lie on this form so they should double check that everything is 
        correct <strong>before</strong> signing. Finally they should fill out any blanks 
        left in sections 7 and 8, before they sign/date each section.
      </p>
    </section>
  );
}

export default TexasMinorNameParentsPetitionGuide;

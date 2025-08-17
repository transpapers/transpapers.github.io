/**
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

function TexasMinorNameOtherCustodyGuide({
  person,
}: {
  person: Partial<Person>;
}) {
  const { hasCriminalRecord, residentLocality } = person;

  return (
    <section key="Texas-FM-NCC1-100">
      <h3>Minor Name Change Petitions and Orders (TX, Multiple Forms)</h3>
      <p>
        There are a few different petition and order forms that could be filed
        depending on your custody situation. Since we don’t have a way to
        determine what your exact situation is, we have provided for all
        possibilities. In any case, all living adults with custody of you must
        sign the forms to become your petitioner(s). If that doesn’t happen the
        hearing will become contested which is beyond the scope of this guide.
        If this happens your supportive parent/guardian will need a lawyer or
        you will need to wait until you are 18. See the “Resources” section
        below for help finding a lawyer if needed. From the three sections below
        pick the section that matches your custody situation. Ignore the other
        sections and discard the unused petition/order forms. Most of the forms
        share the same names so we will use the form number to tell them apart,
        that number can be found on the bottom left of the forms. In any case
        you need to have lived in Texas for at least 6 months and{" "}
        {residentLocality?.name} for at least 90 days in order to use any of
        these forms.
      </p>

      <p>
        <span> Section 1: Both parents have custody </span>
        <br />
        If you have never had a legal guardian and both of your parents are
        alive and have custody of you then use forms “FM-NCC1-100” and
        “FM-NCC1-200”. For the petition the petitioner is whoever has their name
        listed at the top of section 2. They or their co-petitioner should fill
        in any missing information in sections 2 and 4.
        {hasCriminalRecord ? (
          <>
            If you need help with documenting a criminal record you can do a
            criminal history{" "}
            <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
              report
            </a>{" "}
            with the Texas DPS. Your petitioner should check the applicable box
            in section 4G as it applies to you. For 4G they are talking about
            using a “Sex Offender Update Form” (CR-32) to notify law
            enforcement.
          </>
        ) : (
          ""
        )}
        Both petitioners should then sign in section 6. Sections 7 and 8 involve
        signing under threat of perjury, meaning it is a crime to lie on this
        form. Both petitioners should review the form before filling out
        sections 7 & 8 respectively.
      </p>

      <p>
        The “FM-NCC1-200” order form needs to be filed with the petition. Your
        petitioners should fill in any blanks in section 1 and section 4 with
        the same information as the petition. On the third page they should
        again fill in any missing information and sign.
      </p>

      <p>
        <span> Section 2: One parent has custody </span>
        <br />
        If you have never had a legal guardian and only one of your parents is
        alive and/or has custody of you then use forms “FM-NCC3-100” and
        “FM-NCC3-200”. This parent will be your petitioner and should fill in
        any missing information in sections 2-5.
        {hasCriminalRecord ? (
          <>
            If you need help with documenting a criminal record you can do a
            criminal history{" "}
            <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
              report
            </a>{" "}
            with the Texas DPS. Your petitioner should check the applicable box
            in section 4G as it applies to you. For 4G they are talking about
            using a “Sex Offender Update Form” (CR-32) to notify law
            enforcement.
          </>
        ) : (
          ""
        )}
        Your petitioner should then fill in any blanks and sign in section 6.
        Section 7 involves signing under threat of perjury, meaning it is a
        crime to lie on this form. Your petitioner should review the form before
        filling out and signing section 7. A certified copy of a death
        certificate or court ordered parental rights termination for the other
        parent should be attached to this petition if applicable.
      </p>

      <p>
        For the “FM-NCC3-200” order form a petitioner should fill out any blanks
        in section 1 and section 4 with the same information as the petition.
        The petitioner should then sign at the bottom of page 2.
      </p>

      <p>
        <span> Section 3: Everyone Else </span>
        <br />
        If you don’t meet the criteria of the first two sections, use forms
        “FM-NCC5-100” and “FM-NCC5-200”. For the petition the petitioner is
        whoever has their name listed at the top of section 2. They or their
        co-petitioner(s) should fill in any missing information in section 2 for
        all living adults with custody of you, the minor. A petitioner should
        then fill out any blanks in sections 3 and 4.
        {hasCriminalRecord ? (
          <>
            If you need help with documenting a criminal record you can do a
            criminal history{" "}
            <a href="https://www.dps.texas.gov/section/crime-records/faq/crime-records-services-faqs">
              report
            </a>{" "}
            with the Texas DPS. A petitioner should check the applicable box in
            section 3G as it applies to you. For 3G they are talking about using
            a “Sex Offender Update Form” (CR-32) to notify law enforcement.
          </>
        ) : (
          ""
        )}
        The main petitioner should then fill out any blanks and sign in section
        5. Sections 6 and 7 involve signing under threat of perjury, meaning it
        is a crime to lie on this form. <strong>All</strong> petitioners should
        review the form before filling out sections 6 & 7 respectively. Any
        certified copies of death certificates or court ordered parental rights
        terminations should be filed with this petition.
      </p>

      <p>
        For the “FM-NCC5-200” order form a petitioner should fill out any blanks
        in section 1 and section 4. Then on page 4 each petitioner should fill
        out the information for their section. All petitioners should then fill
        out and sign their section on page 4.
      </p>
    </section>
  );
}

export default TexasMinorNameOtherCustodyGuide;

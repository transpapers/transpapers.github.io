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

import { type Person } from "../../../types/person";

function TexasDMVGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, isChangingLegalName, gender } = person;

  return (
    <section key="Texas-DMV">
      <h3>Updating your Primary ID (TX)</h3>
      <p>
        <strong>Warning</strong>: Do <strong>NOT</strong> attempt to update your
        gender marker on any Texas state documents such as an ID. They will deny
        the change and will add you to a list for attempting to. If you have
        updated your gender marker but not your name before the ban they
        shouldn’t revert it when you go to update your name. This message will
        update if the legal situation changes.
      </p>

      <p>
        This section covers the process of updating your primary identification
        (driver’s license/state ID) and any vehicle registrations you may have.
        If this is not relevant to you, proceed to the next section. If you
        already have an ID the Texas Department of Public Safety requires that
        you inform them about the name change within 30 days of the order being
        granted. You will <strong>not</strong> be penalized by DPS for showing
        up after 30 days but if you are arrested or pulled over after the time
        limit you may have issues. Updating your name with them counts as
        notifying them.
      </p>

      {isChangingLegalSex && (
        <p>
          If you have <strong>never</strong> had a Texas ID or Drivers License
          before, there is a way around this ban.
          {gender && (gender as string) === "X" ? (
            <>
              It will unfortunately not work with an “X” gender marker so you
              will need to pick an “M” or “F” marker for these documents
              instead.
            </>
          ) : (
            ""
          )}
          Get a passport with your {isChangingLegalName ? "new name and" : ""}{" "}
          updated gender marker, see the passport guide for more details on how.
          Then bring that, your social security card, and one of the documents
          from this list to your appointment. Make sure your old gender marker
          is <strong>not</strong> on any of these documents. Finally, mark the
          needed gender marker on the “Texas Driver License or Identification
          Card Application” (DL-14A) form in the “Sex” field. Do{" "}
          <strong>not</strong> bring{" "}
          {isChangingLegalName ? "the court order or " : ""}a birth certificate,
          the passport will be enough on its own.
        </p>
      )}

      <p>
        The “Texas Driver License or Identification Card Application” (DL-14A)
        form is needed in any case. For this form, if you selected “Driver
        License”, there is a required “Class” checkbox. This{" "}
        <a href="https://www.dps.texas.gov/section/driver-license/classes-driver-licenses">
          * @licend The above is the entire license notice for the JavaScript
          code in this file. link
        </a>{" "}
        has descriptions of each class to help you pick the correct box. If you
        are applying for the first time and are trying to get around the gender
        marker prohibition you <strong>must</strong> select “Original”,
        otherwise select “Address or Name Change” instead. Then fill out any
        blanks we left on the form and answer all of the questions relevant to
        your situation, be sure to check the section names to make sure the
        questions are for you. For the “Sex” field select your assigned gender
        at birth unless you are applying for the first time and meet the
        criteria from the warning above. If you want to update your voter
        registration information and are eligible to vote check the “Yes” box on
        question 2. Do <strong>not</strong> sign or date this form until the
        clerk from your appointment directs you to.
      </p>

      <p>
        Make an appointment with <strong>any</strong> Texas DPS Drivers License
        office using this <a href="https://public.txdpsscheduler.com/">link</a>.
        For those <strong>not</strong> attempting to get around the gender
        marker issue bring your court order, old ID, and payment. If you don’t
        have an old ID then consult this{" "}
        <a href="https://www.dps.texas.gov/section/driver-license/how-apply-texas-identification-card">
          link
        </a>{" "}
        to see acceptable alternatives.
        {age && age < 18
          ? " Bring a parent/guardian to your appointment as well. "
          : ""}
        If you run into issues during your appointment, ask for a manager. If
        that doesn’t resolve the issue, cancel the appointment and try again
        elsewhere. Wait until you have your new Drivers License/State ID before
        continuing on. After the change is finalized you can ensure your voter
        registration is correct using this{" "}
        <a href="https://teamrv-mvp.sos.texas.gov/MVP/mvp.do">link</a>.
      </p>

      <p>
        Optionally, you may also update your vehicle registration(s). You will
        be given another form, which you should sign and initial
        {isChangingLegalName ? " in your new legal name. " : ". "}
        You will be charged a fee for each vehicle.
      </p>
    </section>
  );
}

export default TexasDMVGuide;

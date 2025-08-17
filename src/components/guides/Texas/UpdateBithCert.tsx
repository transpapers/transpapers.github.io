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

function TexasUpdateBirthCertGuide({ person }: { person: Partial<Person> }) {
  const {
    age,
    isChangingLegalSex,
    isChangingLegalName,
    gender,
    assignedSex,
    parentsAreOkay,
  } = person;

  return (
    <section key="Texas-Update-Birth-Cert">
      <h3>Updating your Birth Certificate (TX)</h3>
      <p>
        <strong>Warning</strong>: Do <strong>NOT</strong> attempt to update your
        birth certificate&apos;s gender marker. They will deny the attempt and
        will add you to a list for attempting to do so. This message will update
        if the legal situation changes.
      </p>

      {isChangingLegalSex && (
        <p>
          There is one potential route for getting by the gender marker ban but
          it is not guaranteed to work. On the second page of the Birth
          Certificate Correction form it lists a method for correcting an error
          made by the hospital after the child&apos;s first birthday. There is
          also a section dedicated to this on the bottom of page 3 for sex
          designation specifically. What you would need then is a letter from
          your birth hospital, birth medical facility, or the doctor who
          delivered you stating that they made a mistake with your sex
          designation, aka you were assigned “{assignedSex}” but are actually “
          {gender}”.
          {gender && (gender as string) === "X" ? (
            <>
              This will <strong>not</strong> work for getting an “X” marker.
            </>
          ) : (
            ""
          )}
          If you can get that letter on official letterhead then you can submit
          it with the rest of your paperwork. The reason this is not guaranteed
          to work is individual employees may take it upon themselves to apply a
          double standard to these applications due to the vagueness of the bans
          wording. There is no difference between your letter and a cis-persons
          letter, if it is denied you should check our “Resources” section to
          access legal help.
        </p>
      )}

      <p>
        If you have already updated your gender marker but not your name before
        the ban they shouldn’t revert it if you go to update your name. If
        updating your birth certificate is not feasible a passport can be used
        in place of a birth certificate for nearly everything. They can also be
        completely updated with the correct name and gender marker.
      </p>

      <p>
        Vital Statistics uses the “Correcting a Birth Certificate” (VS-170)
        form. We included two copies depending on if you want to attempt to
        change the gender marker. If you are changing <strong>name only</strong>{" "}
        use the copy with the $15 dollar amount on page 1 in the “Fees” section
        otherwise use the other provided copy. Also in the “Fees” section write
        how many copies of the updated birth certificate you want then total up
        the fee.
        {age && age < 18 && !parentsAreOkay ? (
          <>
            On page 4 in section 1 your petitioner will need to check the box
            indicating their relationship to you. If you have a guardian they
            will need to attach a certified copy of their letters of
            guardianship to the form.
          </>
        ) : (
          ""
        )}
        In section 2 {age && age < 18 ? "your petitioner should" : ""} write
        down your original birth certificate ID number if possible as well as
        your county of birth. On the next page section 5 copy the number of
        birth certificate copies you asked for from page 1. This form should{" "}
        <strong>not</strong> be signed until a notary says to.
      </p>

      <p>
        {age && age < 18 ? (
          <>
            Anyone listed as a parent on your birth certificate{" "}
            <strong>must</strong> meet with a notary to sign. If one or both of
            them are deceased attach a certified copy of their death
            certificate(s) to this form. If all parents listed on the birth
            certificate are deceased your legal guardian(s) can sign instead. If
            it is not possible to get a needed signature you will need to wait
            until you are 18 to do the adult process.
          </>
        ) : (
          ""
        )}
        Notaries can be found in court buildings, banks, some{" "}
        <a href="UPS locations">
          https://www.theupsstore.com/tools/find-a-store
        </a>
        , or <a href="online">https://www.notarize.com/</a>. The respondent will
        be charged a fee for this service, all notary services require a photo
        ID.
      </p>

      <p>
        Once it is notarized {age && age < 18 ? "your petitioner" : "you"} will
        need to photocopy both sides of {age && age < 18 ? "their" : "your"}{" "}
        drivers license/state ID. They have a{" "}
        <a href="https://dshs.texas.gov/vital-statistics/acceptable-identification-id">
          list
        </a>{" "}
        of other acceptable ID’s to photocopy if needed. Then get a check or
        money order for the total fee amount from page 1 made out to “DSHS Vital
        Statistics”. Finally grab an envelope and place the notarized
        “Correcting a Birth Certificate” (VS-170) form,{" "}
        {isChangingLegalName ? "a certified copy of your court order," : ""}
        {isChangingLegalSex ? "the hospital letter," : ""} ID photocopies, and
        the payment into it. Mail it to:
      </p>

      <p>
        <span>DSHS – Vital Statistics Section</span>
        <br />
        <span>P.O. Box 12040</span>
        <br />
        <span>Austin, TX 78711-2040</span>
      </p>

      <p>
        It will take several weeks to a few months for them to return the
        updated birth certificate(s) and the other documents you sent. To keep
        track of the application submit a query with this{" "}
        <a href="https://www.dshs.texas.gov/vital-statistics/check-order-status/what-is-the-status-0">
          link
        </a>{" "}
        and an employee will respond within 2 business days.
      </p>
    </section>
  );
}

export default TexasUpdateBirthCertGuide;

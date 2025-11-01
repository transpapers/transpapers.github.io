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

function MichiganBirthCertificateGuide({
  person,
}: {
  person: Partial<Person>;
}) {
  const { age, isChangingLegalSex, isChangingLegalName, parentsAreOkay } = person;

  return (
    <section key="Michigan-BirthCertificate">
      <h3>Updating your Birth Certificate (MI)</h3>
      <p>
        This process is done by mail only, so you will need a large envelope in
        which to send the paperwork. You will need to complete the{" "}
        <strong>
          Application to Correct or Change a Michigan Birth Record
        </strong>{" "}
        (form DCH-0847-CHGBX)
        {isChangingLegalSex ? (
          <>
            {" "}and the <strong>State of Michigan Sex Designation Form</strong>.
          </>
        ) : (
          "."
        )}
      </p>

      <p>
        For the Application to Correct or Change a Michigan Birth Record if at any 
        point in the past you have undergone a different name change, such as part 
        of an adoption, you will need to fill out the &ldquo;Other
        Names Used:&rdquo; section in part 4 and check the applicable box.
        {isChangingLegalName
          ? " All signatures from now on can be done in your new name. "
          : " "}
        {age && age < 18 
          ? "Both parents listed on the birth certificate must sign in part 7. "
          : "Sign on the top line of part 7. "}
        {!parentsAreOkay && age && age < 18 ?
          <>
            If a parent is deceased or has had their parental rights removed 
            attach copies of either a death certificate or court order removing 
            parental rights. Legal guardians can sign if both parents are deceased 
            or no longer have parental rights but they need to attach copies of 
            their court issued guardianship documents. If you cannot get these
            signatures wait until you are 18 and fill this form out as an adult.
          </>
        : ""}
      </p>

      <p>
        {isChangingLegalSex && age && age < 18 ? (
          <>
            {age && age < 15 ? (
              "The State of Michigan Sex Designation Form just needs a parent/guardians signature."
            ):(
              "The State of Michigan Sex Designation Form needs both your signature and a parent/guardians too."
            )}
          </>
        ) : (
          "The State of Michigan Sex Designation Form just needs your signature."
        )}
      </p>

      {age && age < 18 ? (
        <>
          <p>
            Your parent or guardian should complete the “Payment” section on
            page 2 as applicable. Then, they should mail the completed forms to:
          </p>
          <p>
            <span>Vital Records Changes</span>
            <br />
            <span>P.O. Box 30721</span>
            <br />
            <span>Lansing, MI 48909</span>
          </p>
          <p>
            They should also enclose photocopies of the court order and of their
            primary identification.{" "}
            <strong>Original documents will not be returned.</strong> If they
            don&apos;t have a state ID or driver&apos;s license, they should
            refer to the &ldquo;Acceptable ID&rdquo; page we included in the
            downloaded forms. Then they should enclose a check in the amount
            entered under &ldquo;TOTAL ENCLOSED&rdquo; made out to the State of
            Michigan.
          </p>
        </>
      ) : (
        <>
          <p>
            Complete the “Payment” section on page 2 as applicable. Mail the
            completed forms to:
          </p>
          <p>
            <span>Vital Records Changes</span>
            <br />
            <span>P.O. Box 30721</span>
            <br />
            <span>Lansing, MI 48909</span>
          </p>
          <p>
            Enclose a check in the amount you entered under &ldquo;TOTAL
            ENCLOSED&rdquo;, made out to the State of Michigan, as well as
            photocopies of the court order and your primary identification.{" "}
            <strong>Original documents will not be returned.</strong> If you
            don&apos;t have a state ID or driver&apos;s license, refer to the
            &ldquo;Acceptable ID&rdquo; page we included in the downloaded
            forms.
          </p>
        </>
      )}
      <p>
        You should receive a copy of your updated birth certificate in 5 to 6
        weeks.
      </p>
    </section>
  );
}

export default MichiganBirthCertificateGuide;

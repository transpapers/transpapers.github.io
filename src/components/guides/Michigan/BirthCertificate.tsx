/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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

function MichiganBirthCertificateGuide({ person }: { person: Person }) {
  const { age } = person;

  return (
    <section key="Michigan-BirthCertificate">
      <h3>Updating your Birth Certificate (MI)</h3>
      <p>
        This process is done by mail only, so you will need a large envelope in
        which to send the paperwork. You will need to complete the{" "}
        <strong>
          Application to Correct or Change a Michigan Birth Record
        </strong>{" "}
        (form DCH-0847-CHGBX) and the{" "}
        <strong>State of Michigan Sex Designation Form.</strong>
      </p>

      <p>
        {/* The other options for doing this inside a JSX component are all worse. */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {age && age < 15
          ? "Your parent/guardian will need to sign both forms on the “Signature of Person Requesting Change” and the “Parent/Guardian Signature” lines respectively."
          : age && age < 18
            ? "You will need to sign the State of Michigan Sex Designation Form on the “Signature of Person on Record” line using your old name. Your Parent/Guardian will need to sign both forms on the “Signature of Person Requesting Change” and the “Parent/Guardian Signature” lines respectively."
            : "You will need to sign both forms on the “Signature of Person Requesting Change:” and the “Signature of Person on Record:” lines respectively using your old name."}{" "}
        If at any point in the past you have undergone a different name change, such as part of an
        adoption, you will need to fill out the &ldquo;Other Names Used:&rdquo;
        section on the{" "}
        <strong>
          Application to Correct or Change a Michigan Birth Record
        </strong>{" "}
        and check the applicable box underneath.
      </p>

      {age && age < 18 ? (
        <>
          <p>
            Your parent or guardian should complete the “Payment” section on
            page 2 as applicable. Then, they should mail the completed
            Application to Correct or Change a Michigan Birth Record to:
          </p>
          <p>
            <span>Vital Records Changes</span>
            <br />
            <span>P.O. Box 30721</span>
            <br />
            <span>Lansing, MI 48909</span>
          </p>
          <p>
            They should enclose photocopies of the court order and of their
            primary identification.{" "}
            <strong>Original documents will not be returned.</strong> If they
            don&apos;t have a state ID or driver&apos;s license, they should
            refer to the first link in our &ldquo;Resources&rdquo; section at
            the end of this guide. Then they should enclose a check in the
            amount entered under &ldquo;TOTAL ENCLOSED&rdquo; made out to the
            State of Michigan.
          </p>
        </>
      ) : (
        <>
          <p>
            Complete the “Payment” section on page 2 as applicable. Mail the
            Application to Correct or Change a Michigan Birth Record to:
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
            first link in our &ldquo;Resources&rdquo; section at the end of this
            guide.
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

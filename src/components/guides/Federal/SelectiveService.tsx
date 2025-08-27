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
import { GenderMarker } from "../../../types/types";

function SelectiveServiceGuide({ person }: { person: Partial<Person> }) {
  const { age, assignedSex } = person;
  return (
    <section key="FederalSelectiveService">
      <h3>Selective Service</h3>

      {assignedSex === GenderMarker.F && age && age < 26 ? (
        <>
          <p>
            Since you were assigned female at birth you were excluded from
            registering with the Selective Service. This may pose issues for
            things such as applying for financial aid, receiving certain
            government benefits, obtaining security clearances, or gaining
            citizenship as a man. If this is the case for you or could be, read
            this section, otherwise skip it.
          </p>

          <p>
            {age && age > 18 ? (
              "The Selective Service will not allow you to register in any case so "
            ) : (
              <>
                It is theoretically possible for you to register with selective
                service if you were born in a state that leaves no trace of an
                updated name or gender marker on a birth certificate and you
                have changed both. If you really want to then you can within 30
                days of when you turn 18 by using this{" "}
                <a href="https://www.sss.gov/register/">link</a>, make sure to
                document any subsequent name or address changes before age 26
                with them. If you don&apos;t want to register{" "}
              </>
            )}
            you will instead need to fill out and send the &ldquo;Request for
            Status Information Letter&rdquo; form to receive said letter.
          </p>

          <p>
            Fill out any blanks we left in section 1, if you have more past
            legal names than we have listed in the &ldquo;List any other names
            used&rdquo; section add them to it. Fill out all of sections 2 and 3
            if applicable otherwise check the &ldquo;No&rdquo; box at the top of
            each section to skip them. For section 5 if you are a citizen check
            the &ldquo;Yes&rdquo; box and skip the section otherwise check
            &ldquo;No&rdquo; and fill it out. They will <strong>not</strong>{" "}
            report anything you put in here to other agencies. Finally sign and
            date section 7.
          </p>

          <p>
            You will need a certified copy of your birth certificate, if you
            have already changed the name or gender marker on it make sure to
            include a certified copy of the name/gender court order(s) that were
            used to change it. If it was changed without a court order, send
            documentation of the change or medical documentation showing the
            transition. There is <strong>no fee</strong> for this process unless
            you don&apos;t have a copy of your birth certificate to send. If so then
            you can order one online through{" "}
            <a href="https://www.vitalchek.com/order_main.aspx?eventtype=BIRTH">
              VitalChek
            </a>{" "}
            or your birth state/territory&apos;s{" "}
            <a href="https://www.cdc.gov/nchs/w2w/index.htm">
              Vital Records Department
            </a>
            . Finally mail all of the above to:
          </p>

          <p>
            <span>Selective Service System</span>
            <br />
            <span>ATTN: SIL</span>
            <br />
            <span>P.O. Box 94638</span>
            <br />
            <span>Palatine, IL 60094-4638</span>
          </p>

          <p>
            You will receive your Status Letter several weeks later, it will{" "}
            <strong>not</strong> disclose why you are exempt.
          </p>
        </>
      ) : (
        ""
      )}

      {assignedSex === GenderMarker.M && age && age < 26 ? (
        <>
          <p>
            {age && age > 18 ? (
              <>
                The Selective Service requires you to document any name or
                address changes between now and your 26th birthday. You need to
                update them within 10 days of getting your court order by going
                to a post office, getting form{" "}
                <a href="https://www.sss.gov/wp-content/uploads/2022/11/Form-2-Resized-11-3-22.pdf">
                  SSS 2
                </a>
                , filling it out, and mailing it to them.
              </>
            ) : (
              <>
                The Selective Service still requires you to register with them
                within 30 days of your 18th birthday even if all of your
                documents are updated. There are a handful of{" "}
                <a href="https://www.sss.gov/register/who-needs-to-register/">
                  exceptions
                </a>{" "}
                for certain groups but transitioning is <strong>not</strong> one
                of them. You can register at this
                <a href="https://www.sss.gov/register/">link</a>. Make sure to
                document any subsequent name or address changes before age 26
                with them by going to a post office, getting form{" "}
                <a href="https://www.sss.gov/wp-content/uploads/2022/11/Form-2-Resized-11-3-22.pdf">
                  SSS 2
                </a>
                , filling it out, and mailing it to them.
              </>
            )}
          </p>
        </>
      ) : (
        ""
      )}

      {age && age > 25
        ? "You do not need to do anything for the Selective Service."
        : ""}
    </section>
  );
}

export default SelectiveServiceGuide;

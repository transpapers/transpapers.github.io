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

function RhodeIslandPC8_1Guide({ person }: { person: Person }) {
  const { age, residentCounty } = person;

  return (
    <section key="RhodeIsland-PC8-1">
      <h3>Change of Name (RI, PC8.1)</h3>

      {age && age < 18 ? (
        <>
          <p>
            <strong>Warning</strong> this guide assumes that no one is
            contesting this name change and every living parent/guardian
            (including non-custodial) is willing to sign this form and attend
            your hearing. If not you and your supportive adult will need to get
            a lawyer or you will need to wait until you are 18. There are links
            to help find LGBT organizations and lawyers that will help you in
            the resources section at the bottom of this guide. In the case of a
            deceased parent/guardian get a certified copy of the death
            certificate during filing to explain why there is no other
            signature.
          </p>

          <p>
            The first form to be filled out is the Change of Name (PC 8.1),
            because you are a minor a parent/guardian thats going to court with
            you will need to fill this out and file it on your behalf. On the
            bottom of the first section have a parent/guardian fill out their
            mailing address if it&apos;s different than your actual address.
            They should also fill in their occupation and (optionally) their
            marital status, just below the mothers name box. Right below that
            there is a checkbox. If it isn&apos;t already checked and they have
            changed their name by court order before, check the “Yes” box and
            attach a copy of the court order, otherwise check “No”. On the third
            section near the bottom of page 1 have your parent/guardian fill in
            any previous addresses that they have lived at.
          </p>
        </>
      ) : (
        <p>
          The first form to be filled out is the Change of Name (PC 8.1). On the
          bottom of the first section fill out your mailing address if it&apos;s
          different than your actual address. Fill in your occupation and
          (optionally) your marital status, just below your mothers name. Right
          below that there is a checkbox. If it isn&apos;t already checked and
          you have changed your name by court order before, check the “Yes” box
          and attach a copy of the court order, otherwise check “No”. On the
          third section near the bottom of page 1 fill in any previous addresses
          you have lived at.
        </p>
      )}

      <p>
        {residentCounty && residentCounty == "Providence"
          ? "You need to have lived in Providence for at least 6 months to file this form."
          : "You need to have lived in " +
            residentCounty +
            " for at least a year to file this form."}
        Do <strong>not</strong> sign it or fill out anything on page 2,
        that&apos;s for a notary later.
      </p>
    </section>
  );
}

export default RhodeIslandPC8_1Guide;

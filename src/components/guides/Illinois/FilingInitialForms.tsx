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
 *
 You should have received a copy of the GNU General Public License along with
 * Transpapers. If not, see <https://www.gnu.org/licenses/>.
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import * as React from "react";

import { type Person } from "../../../types/person";
import { allJurisdictions } from "../../../jurisdiction/all";

function IllinoisFilingInitialFormsGuide({
  person,
}: {
  person: Partial<Person>;
}) {
  const { age, hasCriminalRecord, residentJurisdictionName, residentLocalityName } = person;
  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;
  const residentLocality = localities.find(
    (j) => j.name === residentLocalityName,
  );

  return (
    <section key="Illinois-Filing">
      <h3>Filing Initial Forms (IL)</h3>
      {residentLocality ? (
        <>
          <p>
            Illinois mandates E-filing for all county courts unless
            {age && age < 18 ? " your petitioner" : " you"} meets certain
            criteria. If{" "}
            {age && age < 18 ? " your petitioner wants" : " you want"} to file
            in-person section 1 of the “Certification for Exemption from
            E-Filing” (EW-C 3401.4) contains a list of exceptions. If one is
            applicable then check the appropriate box, otherwise e-filing is
            required.
          </p>

          <p>
            For e-filing make sure that all of the scanned forms/documents are
            pdf&apos;s and are in portrait mode then gather them into one
            folder. If the forms were printed and then filled out scan them back
            in as pdf&apos;s. Make sure each form is separated and named exactly how
            it is written on the form. This can be done by printing to PDF and
            selecting page ranges to print. Then go to this{" "}
            <a href="https://efileil.tylertech.cloud/OfsEfsp/ui/landing">
              link
            </a>{" "}
            and click “Register for an Individual Account” from here the state
            of Illinois provides extensive{" "}
            <a href="https://www.illinoiscourts.gov/self-help/how-to-e-file/">
              guides
            </a>{" "}
            with pictures for the rest of the process.
          </p>

          <p>
            For in-person filing gather all of the forms as well as the original
            documents. Keep the redacted photocopies handy but make sure to take
            the originals as well as different courts will take different
            documents. The filing location is {residentLocality.court.address}{" "}
            and
            {age && age < 18 ? " your petitioner" : " you"} can call ahead for
            the court hours, petition fee, and accepted payment methods using
            this number {residentLocality.court.phone}.
          </p>

          <p>
            A hearing is unlikely unless the judge needs more information
            {hasCriminalRecord
              ? " or they have questions about your criminal record"
              : ""}
            . They cannot deny the change unless they think it is for fraud. In
            the extremely unlikely event that it is denied, seek a lawyer
            immediately. The “Resources” section of this guide can help with
            that. Provided that there is no hearing and the change is accepted
            they will return the “Order for Name Change” which we will not call
            the court order. Make sure to get one or two certified copies for
            later use and keep the original in a safe place. You are then ready
            to file with the Social Security Administration.
          </p>
        </>
      ) : (
        <p>Could not generate, residentLocality missing.</p>
      )}
    </section>
  );
}}

export default IllinoisFilingInitialFormsGuide;

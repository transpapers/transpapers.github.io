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

function IllinoisSecretaryOfStateGuide({ person }: { person: Partial<Person> }) {
  const { age, isChangingLegalSex, isChangingLegalName } = person;

  return (
    <section key="Illinois-SecretaryOfState">
      <h3>Updating your Primary ID (IL)</h3>
      <p>
        This section covers the process of updating your primary identification 
        (driver’s license/state ID) and any vehicle registrations you may have. 
        If this is not relevant to you, then skip this section. Illinois lets 
        you update your primary ID at any facility in the state, a full list of 
        locations is{" "}
        <a href="https://www.ilsos.gov/facilities/facilitylist.html">
          here
        </a>.
        {age && age < 18 ? " A parent/guardian will need to go with you. ": ""}
        Some locations on that webpage are listed as appointment only, call the 
        provided number or click the link to set an appointment if needed.
      </p>

      {isChangingLegalSex ? (
        <p>
          If you already have a license or state ID you will need the “Gender 
          Designation Change Form” (DSD A 329.3) in order to change your gender 
          marker. In section A fill out your Drivers License/State ID number, then 
          sign with your old name and date.
        </p>
      ) : ("")}

      <p>
        Bring your court order, 
        {isChangingLegalSex ? (" the Gender Designation Change Form, "):("")}
        the receipt from Social Security, and your current Drivers License/State ID. 
        If you don’t have a license see this{" "}
        <a href="https://www.ilsos.gov/publications/pdf_publications/dsd_x173.pdf">
          link
        </a>
        {" "}for other acceptable ID documents. If you don’t have an ID already the 
        appointment should proceed normally, just make sure they set the gender 
        marker correctly. Otherwise tell the clerk that you want to update the name
        {isChangingLegalSex ? (" and gender marker"):("")} on your license and 
        present the above items. There will be a small fee for this process the 
        amount depends on if you are renewing and which ID you get but shouldn’t 
        total more than $30. If at any point you get pushback over this ask for a 
        manager, failing that you can report discrimination at this{" "}
        <a href="https://dhr.illinois.gov/filing-a-charge/public-accommodations.html">
          link
        </a>.
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

export default IllinoisSecretaryOfStateGuide;

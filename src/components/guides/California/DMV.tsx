/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
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

function CaliforniaDMVGuide({
  person,
}: {
  person: Partial<Person>;
}) {
  const { age, isChangingLegalSex, isChangingLegalName } = person;

  return (
    <section key="California-DMV">
      <h3>Updating your Primary ID (CA)</h3>
      <p>
        This section covers the process of updating your primary identification
        (driver&apos;s license/state ID) and any vehicle registrations you may have.
        If this is not relevant to you, proceed to the next section. You will
        need to fill out an online application at this
        <a href="https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/">
          link
        </a>
        . After that is done find your nearest field office
        <a href="https://www.dmv.ca.gov/portal/locations/field-offices/">
          here
        </a>
        . You can then go without an appointment or make one
        <a href="https://www.dmv.ca.gov/portal/appointments/select-appointment-type/">
          here
        </a>
        .{" "}
        {age && age < 18
          ? " A parent/guardian will need to go with you to this appointment."
          : ""}
        {isChangingLegalSex ? 
          <>
            California does <strong>not</strong> require any medical documentation or other 
            proof to change a gender marker, simply select the one you want.
          </> : ""}
      </p>

      <p>
        If you do <strong>not</strong> already have a driver&apos;s license or 
        state ID, tell the clerk that you are applying for one. For first time
        applications for Real ID check this 
        <a href="https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/real-id-checklist/">
          list
        </a>
        {" "}for what documents you need to bring, for non-Real ID use this
        <a href="https://www.dmv.ca.gov/portal/file/federal-non-compliant-dl-id-card-documents-list-pdf/">
          list
        </a>
        {" "}instead. The appointment should proceed normally but make sure the gender 
        marker is set correctly before you leave.
      </p>

      <p>
        If you already have a driver&apos;s license or state ID bring it to the
        office then tell the clerk that you are updating the name and/or gender marker 
        on it. They will ask for
        {isChangingLegalName ? " the court-ordered name change and ID. " : " your ID. "}
        If at any point you experience issues or pushback politely insist on
        speaking to a supervisor for assistance.
      </p>

      {isChangingLegalName ?
        <p>
          Optionally, you may also update the name on your vehicle registration(s). If so 
          grab the “DMV Statement of Facts” (REG 256) form we provided. Fill out your 
          license plate, vehicle ID number (VIN), and year/make fields at the top of both 
          pages. Then sign in your new name and date at the bottom of page 2. Give this 
          completed form to the clerk.
        </p>
      : ""}
    </section>
  );
}

export default CaliforniaDMVGuide;

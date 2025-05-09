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

function MichiganSecretaryOfStateGuide() {
  return (
    <section key="Michigan-SecretaryOfState">
      <h3>Updating your Primary ID (MI)</h3>
      <p>
        This section covers the process of updating your primary identification
        (driver’s license/state ID) and any vehicle registrations you may have.
        If this is not relevant to you, proceed to the next section. You will
        need to schedule an in-person appointment at your local Secretary of
        State office, which can be done here{" "}
        <a href="https://dsvsesvc.sos.state.mi.us/TAP/_/">
          https://dsvsesvc.sos.state.mi.us/TAP/_/
        </a>
        .
      </p>

      <p>
        If you already have a driver’s license or state ID bring it to the appointment
        as well as the <strong>Michigan Secretary of State Sex Designation</strong> form.
        For that form, if you have a drivers license, add the license number in section A.
        If not, bring the forms of identification you used for Social Security. Arrive
        a few minutes early and check in at the kiosk.
      </p>

      <p>
        If you do not already have a driver’s license or state ID, tell the
        clerk that you are applying for one; the appointment should proceed
        normally. Make sure the gender marker is set correctly.
      </p>

      <p>
        If you do have primary identification, tell the clerk that you are
        updating the name and/or gender marker on it. They will ask for
        identification, your court-ordered name change, and the Sex Designation
        Form. Sign and date it in front of them with your new legal name.
        If at any point you experience issues or pushback politely inisist
        on speaking to a supervisor for assistence.
      </p>

      <p>
        Optionally, you may also update your vehicle registration(s). You
        will be given another form, which you should sign and initial in your
        new legal name. You will be charged a fee for each vehicle.
      </p>
    </section>
  );
}

export default MichiganSecretaryOfStateGuide;

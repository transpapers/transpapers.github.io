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

function OregonFilingInitialFormsGuide({ person }: { person: Person }) {
  const { court, age, residentCounty, isChangingLegalSex } = person;

  return (
    <section key="OR-InitialForms">
      <h3>Filing Initial Forms (OR)</h3>

    {isChangingLegalSex && isChangingLegalSex === true ? (
      <p>
        Your county's circuit court is at {court?.address}. However the petition can be 
        filed at any other Oregon circuit court as well. We have provided a map of all 
        Oregon circuit courts{" "}
        <a href="https://www.google.com/maps/d/u/0/viewer?mid=11l4y7lcd51YLjlNXl2Qcbb4Fmg_1aaI&hl=en&ll=44.22287483137777%2C-120.8304999&z=7">here</a> 
        {" "}and if another court is more safe/convenient then file there instead. 
        Every circuit court in Oregon has their info on this{" "}
        <a href="https://www.courts.oregon.gov/courts/Pages/default.aspx">website</a>.
        Some courts accept filing by mail or even online, the web link we provided will
        have the details for those. Make sure to fill in the "County" field at the top 
        of every page on all of the forms with the name of whatever county they will be 
        filed at. If the filing method is in-person or by mail
        {age && age < 18 ? (" your petitioner ") : (" you ")} will need the petition 
        forms, photo ID, payment, and (optionally) the fee waiver forms. To find out 
        what payment methods the court accepts check the link or call them to ask.
      </p>
    ) : (
      <p>
        {residentCounty && residentCounty === "Umatilla" ? (
          " Umatilla county has two valid circuit court locations to file at " + court?.address + ". Pick whichever is most convenient."
        ) : (
          " The filing location is the " + residentCounty + " circuit court at " + court?.address + "."
        )}
        They have a webpage with their open hours and other information here{" "} 
        {court?.website}. That link may also show what filing methods the court 
        accepts, some will accept filing by mail or even online, others are 
        in-person only. It may also show accepted payment types. If not it will 
        have a phone number to call for questions. If the filing method is in-person 
        or by mail {age && age < 18 ? (" your petitioner ") : (" you ")} will need 
        the petition forms, photo ID, payment, and (optionally) the fee waiver forms.
      </p>
    )}

    <p>
        <strong>
            By state law, court clerks are barred from answering questions about
            how to fill out the forms.
        </strong>{" "}
        We recommend that you direct any of those questions to the court’s
        legal assistance center, a local LGBT organization, or an attorney.
    </p>

    {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}

    {age && age < 18 ? (
      <p>
        Your petitioner will need to send out written notice to any other parents or 
        legal guardians regardless of custody, the only exceptions being if the minor 
        has not lived with them and they haven’t given support (or tried to). You 
        do <strong>not</strong> need their consent, if they have an issue they can 
        contact the court using the notice. A copy of that notice has been provided; 
        your petitioner simply needs to add the case number. Once notice has been sent 
        your petitioner can fill out the table in the "Declaration of Notice" form with 
        everyone they contacted. At that point they can sign it and send it to the 
        court, then the court will likely make a judgment without a hearing and mail 
        the results. If so skip the "Court Hearing" section. Assuming there isn't a 
        hearing you will need to wait for the "General Judgement", which we will call 
        the court order, to arrive. Once it does your petitioner will also need to 
        order 2 or 3 certified copies of the court order for use later in this process 
        as some places will not return them. Keep the original in a safe place. If 
        there is a hearing your petitioner will recieve a court date instead and we 
        recommend getting help from a lawyer or our "Resources" section.
      </p>
    ) : (
      <p>
        Once you have filed, the court will likely make a judgment without 
        a hearing and will mail you the results. If so skip the "Court Hearing" 
        section. There are a few exceptions such as a paperwork mishap or some types 
        of criminal record that could cause a hearing though. Assuming there isn't 
        one you will need to wait for the "General Judgement", which we will call the 
        court order, to arrive. Once it does you will also need to order 2 or 3 
        certified copies of the court order for use later in the process as some 
        places will not return them. Keep the original in a safe place. If there is 
        a hearing you will recieve a court date instead.
      </p>
    )}
    </section>
  );
}

export default OregonFilingInitialFormsGuide;

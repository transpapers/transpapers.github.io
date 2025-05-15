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

import { type NewYorkCounty } from "../../../types/locality";

function NewYorkFilingGuide(
    { person }: { person: Person },
    { NYcounty }: { NYcounty: NewYorkCounty },
) {
  const { court, age, residentCounty } = person;
  const { isNYC, borough } = NYcounty;
  return (
    <section key="NewYork-Filing">
      <h3>Filing Initial Forms (NY)</h3>

          {isNYC && isNYC == true ? (
              <>
              <p>
                  {age && age < 18 ? ("A parent/guardian ") : ("You ")} can file in any of
                  the 5 NYC Civil courts. We have them listed below with your borough bolded.
                  </p>
                      {residentCounty && residentCounty == "Bronx" ? (
                      <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
                      ) : (
                              <span>{borough}: {court?.address}. Phone Number: {court?.phone}</span>
                      )}
                      <br />
                      {residentCounty && residentCounty == "Kings" ? (
                          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
                      ) : (
                              <span>{borough}: {court?.address}. Phone Number: {court?.phone}</span>
                      )}
                      <br />
                      {residentCounty && residentCounty == "New York" ? (
                          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
                      ) : (
                              <span>{borough}: {court?.address}. Phone Number: {court?.phone}</span>
                      )}
                      <br />
                      {residentCounty && residentCounty == "Queens" ? (
                          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
                      ) : (
                              <span>{borough}: {court?.address}. Phone Number: {court?.phone}</span>
                      )}
                      <br />
                      {residentCounty && residentCounty == "Richmond" ? (
                          <span><strong>{borough}</strong>: {court?.address}. Phone Number: {court?.phone}</span>
                      ) : (
                              <span>{borough}: {court?.address}. Phone Number: {court?.phone}</span>
                      )}
                  <p>

                  </p>
              </>
          ) : (
            <>
              <p>
                The filing location is the {residentCounty} county court at {court?.address}.
                {age && age < 18 ? ("A parent/guardian ") : ("You ")} may want to call ahead
                to check accepted payment types, their phone number is {court?.phone}.
                Generally speaking though as long as you have cash, check, and card all ready
                to go then you are good. The cost to file is currently $210.
              </p>
                {court?.specificCourtInfo && <p>{court?.specificCourtInfo}</p>}
            </>
          )}

    {age && age < 18 ? (
        <p>
            Notaries can be found in court buildings, banks, some{" "}
            <a href="UPS locations">https://www.theupsstore.com/tools/find-a-store</a>
            , or{" "} <a href="online">https://www.notarize.com/</a>. There will
            be a fee for this required service.
            {age && age < 13 ? (" ") :
              (" You and the petitioner need to meet with the notary together to sign.")}
            Once all signatures are signed, witnessed, and stamped the form is ready
            to be filed at court.
        </p>
    ) : (
        <p>
            You will need a notary to witness your signature and provide
            their own. Notaries can be found in court buildings, banks, some{" "}
            <a href="UPS locations">https://www.theupsstore.com/tools/find-a-store</a>
            , or{" "} <a href="online">https://www.notarize.com/</a>. You will
            be charged a fee for this required service. Once you have met with
            one to get the required signature and stamp you are ready to file.
        </p>
    )}
    </section>
  );
}

export default NewYorkFilingGuide;

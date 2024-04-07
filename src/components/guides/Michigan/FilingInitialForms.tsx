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

import * as React from 'react';

import useStore from '../../../store';

function MichiganFilingInitialFormsGuide() {
  const {
    court, age, fingerprintLocations, publications,
  } = useStore((state) => state.person);

  return (
    <section key="MI-InitialForms">
      <h3>Filing Initial Forms (MI)</h3>
      <p>
        Your filing location is
        {' '}
        { court?.address }
        .
        You may file by mail or in person; in either case, include all the forms
        listed in Part 1, as well as payment. If you are filing by mail, you
        must pay by check or money order. If you are filing in person, we
        recommend that you call the court at
        { court?.phone }
        {' '}
        to confirm their
        open hours and accepted payment types.
      </p>

      { court?.specificCourtInfo
        && <p>{ court?.specificCourtInfo }</p>}

      <p>
        <strong>
          By state law, court clerks are barred from answering
          questions about the forms.
        </strong>
        {' '}
        We recommend that you direct any
        questions you may have to the court’s legal assistance center, a local
        LGBT organization, or an attorney. The clerk will return a copy of the
        Petition to Change Name with a case number.
      </p>

      <p>
        While you do these next steps, we recommend that you call the court
        every few weeks until you receive your court hearing date to make sure
        that there were no mistakes. Do not simply wait for a notice in the
        mail.
      </p>

      { age && (age >= 22)
        && (
        <>
          <p>
            The following location(s) are recommended for fingerprinting in your county:
            <ul>
              { fingerprintLocations?.map(({ name, address, website }) => (
                <li key={name}>
                  { name }
                  ,
                  {' '}
                  { address }
                  {' '}
                  (
                  <a href={website}>{ website }</a>
                  )
                </li>
              ))}
            </ul>
          </p>

          <p>
            If you cannot schedule an appointment online at the listed URL, you
            will need to schedule by phone or email, using the information listed on
            their website. We also recommend that you check their accepted payment
            options.
          </p>
          <p>
            At your appointment, you will probably be asked if you want an FBI or
            state fingerprint card; either is acceptable. Do not use live-scan
            fingerprinting services unless so instructed by the court.
            <strong>
              Do not bend or fold your fingerprint card.
            </strong>
          </p>
          <p>After receiving your fingerprint card, mail it to:</p>
          <p>Michigan State Police</p>
          <p>CJIC</p>
          <p>PO Box 30266, Lansing, MI 48909</p>
          <p>
            Enclose a copy of your Petition to Change Name and a check in the
            amount of $43.25 made out to the State of Michigan.
          </p>
        </>
        )}

      <p>
        Upon filing the Petition to Change Name, you may be instructed by the
        clerk to place a legal notice with a local newspaper. If you were not,
        we recommend that you confirm that the court is handling this, as well
        as in which paper they are publishing. If they are, wait for an invoice
        from that paper. Remit payment by check at your earliest convenience. If
        you do not pay at least seven days in advance of your hearing date, your
        hearing may be canceled or postponed.
      </p>
      <p>
        If you were instructed to place the notice yourself, the
        court-approved newspapers in your county are as follows:
      </p>
      <ul>
        { publications?.map(({ name, website, email }) => (
          <li key={name}>
            { name }
            ,
            {' '}
            { website && <a href={website}>{ website }</a>}
            {' '}
            { email && <a href={email}>{ email }</a>}
          </li>
        ))}
      </ul>

      <p>
        At the provided link, contact the newspaper about placing a legal
        notice for your name change hearing. Make sure the publication date is
        more than seven days before your court date. After a few days, confirm
        with the court that they have received the necessary paperwork from the
        newspaper.
      </p>
    </section>
  );
}

export default MichiganFilingInitialFormsGuide;

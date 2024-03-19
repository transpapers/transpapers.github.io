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

import { useSelector } from 'react-redux';

function PassportGuide() {
  const { passport } = useSelector((state) => state.person);

  let passportForm; let
    isInPerson;
  switch (passport) {
    case 'ds11':
      passportForm = 'DS 11';
      isInPerson = true;
      break;
    case 'ds82':
      passportForm = 'DS 82';
      isInPerson = false;
      break;
    case 'ds5504':
      passportForm = 'DS 5504';
      isInPerson = false;
  }

  return (
    <section>
      <h3>Updating Your Passport</h3>
      <p>
        You will need to file form
        <strong>{ passportForm }</strong>
        .
        { isInPerson
          ? 'This form must be filed in-person. Filing locations near you are available at <a href="https://iafdb.travel.state.gov">https://iafdb.travel.state.gov</a>.'
          : 'This form should be mailed in.'}
      </p>

      <p>
        On page 5, indicate the documents for which you are submitting fees.
        On page 6, complete items 11-21 as applicable.

      </p>
    </section>
  );
}

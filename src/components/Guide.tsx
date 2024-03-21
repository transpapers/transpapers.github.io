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

import { useAppSelector as useSelector } from '../store';

import { compileGuides, finalizeApplicant } from '../lib/fill';
import { allProcesses } from '../jurisdiction/all';

function Guide() {
  let applicant = useSelector((state) => state.person);
  applicant = finalizeApplicant(applicant)!;

  const { residentJurisdiction, birthJurisdiction } = applicant;

  const processes = allProcesses(residentJurisdiction, birthJurisdiction);

  const guides = compileGuides(processes, applicant);

  return (
    <>
      <h2>Thank you for using Transpapers!</h2>

      <p>
        Your gender-affirming documents have been compiled and automatically downloaded.
        What follows is a personalized guide to filing them.
        <strong>
          You should print both this webpage
          and the PDF containing your compiled documents.
        </strong>
      </p>

      {guides}
    </>
  );
}

export default Guide;

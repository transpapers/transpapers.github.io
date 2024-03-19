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

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { neededFieldNames } from '../lib/shakeTree';

import { fields, renderField } from './fields';

import { updatePerson } from '../slice';
import { targets } from '../types/process';
import { getJurisdiction } from '../jurisdiction/all';

import { compileDocuments, finalizeApplicant } from '../lib/fill';

function Step6() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { processNames } = useSelector((state) => state.process);
  const applicant = useSelector((state) => state.person);

  const { residentJurisdiction, birthJurisdiction } = applicant;

  const residentJurisdictionProcesses = getJurisdiction(residentJurisdiction)?.processes || [];
  const residentProcesses = residentJurisdictionProcesses
    .filter((proc) => !proc.isBirth && !proc.isJustGuide);

  const birthJurisdictionProcesses = getJurisdiction(birthJurisdiction)?.processes || [];
  const birthProcesses = birthJurisdictionProcesses
    .filter((proc) => proc.isBirth && !proc.isJustGuide);

  const federalProcesses = getJurisdiction('Federal')?.processes || [];

  const allProcesses = [...residentProcesses, ...birthProcesses, ...federalProcesses];

  const processes = processNames
    .map((procName) => allProcesses.find((proc) => proc.target === procName))
    .filter((proc) => proc !== undefined);

  const fieldNamesToShow = neededFieldNames(processes, applicant);

  const onSubmit = (data) => {
    const finalApplicant = finalizeApplicant(applicant);

    dispatch(updatePerson(finalApplicant));

    navigate('/guide');

    compileDocuments(processes, applicant)
        .then((doc) => {
            if (doc !== undefined) {
              const url = URL.createObjectURL(
                  new Blob([doc], { type: 'application/pdf' }),
              );
              const link = document.createElement('a');
              link.download = 'gender_affirming_documents.pdf';
              link.href = url;
              link.click();
              URL.revokeObjectURL(link.href);
            }
        });
  };

  // We do it this way to maintain ordering.
  const fieldsToShow = Object.entries(fields)
    .filter(([fieldName]) => fieldNamesToShow.includes(fieldName))
    .map(([,field]) => field);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Tell us about yourself...</h2>
      <ul className="spaced">
        {fieldsToShow.map((field) => (
          <li>
            {renderField(field, applicant.residentJurisdiction, register)}
          </li>
        ))}
      </ul>
      <input type="submit" value="Get my gender-affirming forms" />
    </form>
  );
}

export default Step6;

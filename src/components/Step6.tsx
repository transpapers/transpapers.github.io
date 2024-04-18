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

import useStore from '../store';

import { fields, renderField } from './fields';

import { neededFieldNames } from '../lib/shakeTree';

import { getJurisdiction } from '../types/jurisdiction';
import { type Person } from '../types/person';

function Step6() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const processNames = useStore((state) => state.processNames);
  const applicant = useStore((state) => state.person);
  const updatePerson = useStore((state) => state.updatePerson);
  const finalizeApplicant = useStore((state) => state.finalizeApplicant);

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
    .filter((proc) => proc !== undefined)
    .map((proc) => proc!);

  const fieldNamesToShow = neededFieldNames(processes, applicant);

  const onSubmit = (data: Partial<Person>) => {
    updatePerson(data);
    finalizeApplicant();

    navigate('/guide');
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
            {renderField(field, applicant.residentJurisdiction!, register)}
          </li>
        ))}
      </ul>
      <input type="submit" value="Get my gender-affirming forms" />
    </form>
  );
}

export default Step6;

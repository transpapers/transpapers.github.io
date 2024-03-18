
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

import { setProcessNames } from '../slice';

import { targets } from '../types/process';
import { getJurisdiction } from '../jurisdiction/all';

const Step5 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { residentJurisdiction, birthJurisdiction } = useSelector((state) => state.person);

  const residentJurisdictionProcesses = getJurisdiction(residentJurisdiction)?.processes || [];
  const residentProcesses = residentJurisdictionProcesses
    .filter((proc) => !proc.isBirth && !proc.isJustGuide);

  const birthJurisdictionProcesses = getJurisdiction(birthJurisdiction)?.processes || [];
  const birthProcesses = birthJurisdictionProcesses
    .filter((proc) => proc.isBirth && !proc.isJustGuide);

  const federalProcesses = getJurisdiction('Federal')?.processes || [];

  const allProcesses = [...residentProcesses, ...birthProcesses, ...federalProcesses];

  const onSubmit = (data) => {
      console.log(data);
      dispatch(setProcessNames(data.neededProcesses));
      navigate('/step6');
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>What do you need to do?</h2>
      <fieldset>
          <legend>I need to...</legend>
      <ul>
        {allProcesses.map((proc) =>
        <li><label>
            <input {...register('neededProcesses')} type='checkbox' value={proc.target}/>
            {targets[proc.target] || ''}
        </label></li>
        )}
      </ul>
      </fieldset>
      <input type='submit' />
    </form>
  );
};

export default Step5;

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

import { updatePerson } from '../slice';
import { useAppDispatch as useDispatch, useAppSelector as useSelector } from '../store';

import { Person } from '../types/person';

import { allJurisdictions } from '../jurisdiction/all';

function Step1() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: Partial<Person>) => {
    dispatch(updatePerson(data));
    navigate('/step2');
  };

  const { residentJurisdiction } = useSelector((state) => state.person)!;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>What state do you live in?</h2>

      <ul>
        {allJurisdictions
          .filter((jurisdiction) => !jurisdiction.isFederal)
          .map((jurisdiction) => (
            <li>
              <label>
                <input
                  {...register('residentJurisdiction', { required: true })}
                  type="radio"
                  value={jurisdiction.name}
                  defaultChecked={jurisdiction.name === residentJurisdiction}
                />
                { jurisdiction.name }
              </label>
            </li>
          ))}
      </ul>

      <input type="submit" />
    </form>
  );
}

export default Step1;

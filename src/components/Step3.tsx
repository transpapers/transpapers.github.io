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
import { type Person } from '../types/person';

import { allJurisdictions } from '../jurisdiction/all';

function Step3() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const updatePerson = useStore((state) => state.updatePerson);
  const { residentJurisdiction } = useStore((state) => state.person);

  const onSubmit = (data: Partial<Person>) => {
    updatePerson(data);
    navigate('/step4');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Where were you born?</h2>
      <ul>
        {allJurisdictions
          .filter((jurisdiction) => !jurisdiction.isFederal)
          .map((jurisdiction) => (
            <li key={jurisdiction.name}>
              <label>
                <input
                  {...register('birthJurisdiction', { required: true })}
                  type="radio"
                  value={jurisdiction.name}
                  defaultChecked={jurisdiction.name === residentJurisdiction}
                />
                { jurisdiction.name }
              </label>
            </li>
          ))}
        <li key={undefined}>
          <label>
            <input
              {...register('birthJurisdiction', { required: true })}
              type="radio"
              value={undefined}
              defaultChecked={residentJurisdiction === undefined}
            />
            Somewhere else
          </label>
        </li>
      </ul>
      <input type="submit" value="Next"/>
    </form>
  );
}

export default Step3;

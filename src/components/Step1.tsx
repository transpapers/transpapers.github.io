/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useStore from "../store";

import { type Person } from "../types/person";

import { jurisdictionNames } from "../jurisdiction/all";

function Step1() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { residentJurisdiction } = useStore((state) => state.person);
  const updatePerson = useStore((state) => state.updatePerson);

  const onSubmit = async (data: Partial<Person>) => {
    updatePerson(data);
    await navigate("/step2");
  };

  const choicesElements = Array.from(
    jurisdictionNames
      .filter(([, jurisdiction]) => !jurisdiction.isFederal)
      .map(([name]) => (
        <li key={name}>
          <label>
            <input
              {...register("residentJurisdiction", { required: true })}
              type="radio"
              value={name}
              defaultChecked={name === residentJurisdiction}
            />
            {name}
          </label>
        </li>
      )),
  );

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <h2>What state do you live in?</h2>

      <ul>{...choicesElements}</ul>

      <input type="submit" value="Next" />
    </form>
  );
}

export default Step1;

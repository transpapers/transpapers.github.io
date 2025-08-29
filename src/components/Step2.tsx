/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import * as React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useStore from "../store";

import { allJurisdictions } from "../jurisdiction/all";

interface Step2FormValues {
  residentLocalityName: string;
}

function Step2() {
  const { register, handleSubmit } = useForm<Step2FormValues>();
  const navigate = useNavigate();

  const { updateAppState } = useStore((state) => state);
  const updatePerson = useStore((state) => state.updatePerson);
  const { residentJurisdictionName, residentLocalityName } = useStore(
    (state) => state,
  );
  //const updatePerson = useStore((state) => state.updatePerson);

  const onSubmit: SubmitHandler<Step2FormValues> = async (
    data: Step2FormValues,
  ) => {
    updateAppState(data);
    updatePerson(data);
    await navigate("/step3");
  };

  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );

  if (residentJurisdiction) {
    const localities = residentJurisdiction.localities;

    return (
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h2>What {residentJurisdiction.name} county do you live in?</h2>
        <ul className="wrap">
          {localities.map(({ name }) => (
            <li key={name}>
              <label>
                <input
                  {...register("residentLocalityName", { required: true })}
                  type="radio"
                  value={name}
                  defaultChecked={name === residentLocalityName}
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
        <input type="submit" value="Next" />
      </form>
    );
  }
}

export default Step2;

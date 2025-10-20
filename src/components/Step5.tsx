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

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useStore from "../store";
import { type Target, targets } from "../types/process";

import { allJurisdictions } from "../jurisdiction/all";

function Step5() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const updateProcessNames = useStore((state) => state.updateProcessNames);
  const { residentJurisdictionName, birthJurisdictionName } = useStore(
    (state) => state,
  );

  const residentJurisdiction = allJurisdictions.find(
    (j) => j.name === residentJurisdictionName,
  );
  const birthJurisdiction = allJurisdictions.find(
    (j) => j.name === birthJurisdictionName,
  );
  const federalJurisdiction = allJurisdictions.find(
    (j) => j.name === "Federal",
  );

  if (residentJurisdiction && birthJurisdiction && federalJurisdiction) {
    const processes = [
      ...residentJurisdiction.processes.filter(
        (p) => !p.isJustGuide && !p.isBirth,
      ),
      ...birthJurisdiction.processes.filter((p) => !p.isJustGuide && p.isBirth),
      ...federalJurisdiction.processes.filter((p) => !p.isJustGuide),
    ];

    const onSubmit = async ({ processNames }: { processNames?: Target[] }) => {
      updateProcessNames(processNames ?? []);
      await navigate("/step6");
    };

    return (
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <h2>What do you need to do?</h2>
        <p>If you&apos;re not sure, leave everything checked.</p>
        <fieldset>
          <legend>I need to...</legend>
          <ul>
            {processes
              .filter((proc) => !proc.isJustGuide)
              .map((proc) => (
                <li key={proc.target}>
                  <label>
                    <input
                      {...register("processNames")}
                      type="checkbox"
                      value={proc.target}
                      defaultChecked
                    />
                    {(proc.target && targets[proc.target]) ?? ""}
                  </label>
                </li>
              ))}
          </ul>
        </fieldset>
        <input type="submit" value="Next" />
      </form>
    );
  }
}

export default Step5;

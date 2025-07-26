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

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useStore from "../store";
import { targets } from "../types/process";

import { AnyProcess } from "../types/generic";

import { federal } from "../jurisdiction/all";

function Step5() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { updateProcesses } = useStore();
  const { residentJurisdiction, birthJurisdiction } = useStore(
    (state) => state.person,
  );

  if (residentJurisdiction && birthJurisdiction) {
    const processes = [
      ...residentJurisdiction.processes.filter(
        (proc) => !proc.isBirth && !proc.isJustGuide,
      ),
      ...birthJurisdiction.processes.filter(
        (proc) => proc.isBirth && !proc.isJustGuide,
      ),
      ...federal.processes.filter((proc) => !proc.isJustGuide),
    ];

    const onSubmit = async ({ processes }: { processes?: AnyProcess[] }) => {
      updateProcesses(processes ?? []);
      await navigate("/step6");
    };

    const handleChange = (proc: AnyProcess) => {
      const newProcesses = [...processes];
      const alreadyThere = newProcesses.some(
        (proc2) => proc2.target === proc.target,
      );

      if (!alreadyThere) {
        newProcesses.push(proc);
      }

      return newProcesses;
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
                    <Controller
                      control={control}
                      name="processes"
                      render={({ field: { onChange } }) => (
                        <input
                          onChange={() => {
                            console.log(proc);
                            onChange(proc);
                          }}
                          type="checkbox"
                          value={proc.target}
                          defaultChecked
                        />
                      )}
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

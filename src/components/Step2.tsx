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

import { Process, Target, targets } from '../types/process';

/**
 * Pull in any needed dependencies of the selected processes.
 */
function resolveDependencies(
  allProcs: Process[],
  selectedProcs: Process[],
): Process[] | undefined {
  const neededProcs: Process[] = [];

  const procsToResolve: Process[] = [...selectedProcs];
  let resolutionFailed = false;
  while (!resolutionFailed && procsToResolve.length > 0) {
    const proc = procsToResolve.pop();
    const depends: Target[] = proc?.depends || [];

    const thisResolutionFailed = depends.reduce((failed, depend) => {
      if (failed) {
        return true;
      }
      const alreadySatisfied = neededProcs.some((p) => p.target === depend);

      if (!alreadySatisfied) {
        const satisfiesIt = allProcs.find((p) => p.target === depend);
        if (satisfiesIt === undefined) {
          // Could not satisfy this dependency.
          return true;
        }
        procsToResolve.push(satisfiesIt);
      }

      return false;
    }, false);

    resolutionFailed ||= thisResolutionFailed;
  }

  if (resolutionFailed) {
    return undefined;
  }
  return neededProcs;
}

interface Step2Props {
  birthJurisdiction: string | undefined
  allProcesses: Process[];
  neededProcesses: Process[];
  setNeededProcesses: React.Dispatch<React.SetStateAction<Process[]>>;
}

export default function Step2(props: Step2Props) {
  const { birthJurisdiction, allProcesses, neededProcesses, setNeededProcesses } = props;

  function updateNeededProcesses() {
    const checkboxes = document.querySelectorAll('#processes input:checked');
    const selectedTargets = Array.from(checkboxes).map(
      (checkbox) => checkbox.id as Target,
    );
    const selectedProcesses = allProcesses
      .filter((proc) => proc.target && selectedTargets.includes(proc.target));

    const allNeededProcesses = resolveDependencies(
      allProcesses,
      selectedProcesses,
    );

    if (allNeededProcesses !== undefined) {
      setNeededProcesses(allNeededProcesses);
    }
  }

  let availableTargets = Object.values(Target);
  if (birthJurisdiction === undefined) {
    availableTargets = availableTargets.filter((target) => target !== Target.BirthRecord);
  }

  return (
    <>
      <h2>What do you need to do?</h2>
      <p>If you&apos;re not sure, leave everything checked.</p>
      <fieldset id="processes">
        <legend>I need to...</legend>
        <ul>
          {availableTargets.map((value) => (
            <li key={value}>
              <input
                type="checkbox"
                id={value}
                name={value}
                onChange={updateNeededProcesses}
                checked={neededProcesses.some((proc) => proc.target === value)}
              />
              <label htmlFor={value}>{targets[value]}</label>
            </li>
          ))}
        </ul>
      </fieldset>
    </>
  );
}

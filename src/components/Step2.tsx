import * as React from 'react';

import { Process, Target, targets } from '../types/process';

/**
 * Pull in any needed dependencies of the selected processes.
 */
function resolveDependencies(
  allProcs: { [key in Target]?: Process },
  selectedProcs: Target[],
): Process[] {
  const allTargets: Set<Target> = new Set();

  // Resolve dependencies.
  let newTargets: Set<Target> = new Set(selectedProcs);
  do {
    newTargets.forEach((dep) => allTargets.add(dep));

    const currentTargets = [...allTargets].reduce((list, target) => {
      const deps = allProcs[target]?.depends;
      if (deps !== undefined) {
        deps.forEach((thisDep) => {
          if (!allTargets.has(thisDep)) {
            list.push(thisDep);
          }
        });
      }
      return list;
    }, [] as Target[]);

    newTargets = new Set(currentTargets);
  } while (newTargets.size > 0);

  const procs: Process[] = [...allTargets]
    .map((target) => allProcs[target])
    .filter((proc: Process | undefined): proc is Process => !!proc);

  return procs;
}

interface Step2Props {
  allProcesses: { [key in Target]?: Process },
  neededProcesses: Process[],
  setNeededProcesses: React.Dispatch<React.SetStateAction<Process[]>>
}

export default function Step2(props: Step2Props) {
  const { allProcesses, neededProcesses, setNeededProcesses } = props;

  function updateNeededProcesses() {
    const checkboxes = document.querySelectorAll('#processes input:checked');
    const selectedProcesses = Array.from(checkboxes)
      .map((checkbox) => checkbox.id as Target);

    const allNeededProcesses = resolveDependencies(allProcesses, selectedProcesses);

    setNeededProcesses(allNeededProcesses);
  }

  return (
    <>
      <h2>What do you need to do?</h2>
      <p>If you're not sure, leave everything checked.</p>
      <fieldset id="processes">
        <legend>I need to...</legend>
        <ul>
          { Object.values(Target).map((value) => (
            <li key={value}>
              <input type="checkbox" id={value} name={value} onChange={updateNeededProcesses} checked={neededProcesses.some((proc) => (proc.target === value))} />
              <label htmlFor={value}>{targets[value]}</label>
            </li>
          ))}
        </ul>
      </fieldset>
    </>
  );
}

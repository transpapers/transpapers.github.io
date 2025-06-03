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

import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { blankData, type Person } from "./types/person";
import { Target } from "./types/process";

import { numericalAge } from "./lib/util";
import { allJurisdictions } from "./jurisdiction/all";

interface ApplicationState {
  person: Person;
  processNames: string[];
}

interface Action {
  updatePerson: (newData: Partial<ApplicationState["person"]>) => void;
  updateProcessNames: (newProcessNames: string[]) => void;
  finalizeApplicant: () => void;
}

// Type for pointer walk code
type Node<T = unknown> = {
  [key: string]: Node | T;
};

function assignDeepProperty<T>(root: Node<T>, key: string, value: T): boolean {
  const path = key.split(":");

  const dirs = path.slice(0, -1);
  const file = path.at(-1)!;

  let pointer: Node<unknown> = root;
  dirs.forEach((dirname) => {
    if (!Object.prototype.hasOwnProperty.call(pointer, dirname)) {
      pointer[dirname] = {};
    }

    if (pointer[dirname] as Node) {
      pointer = pointer[dirname] as Node;
    } else {
      return false;
    }
  });

  pointer[file] = value;

  return true;
}

const useStore = create<ApplicationState & Action>()(
  persist(
    (set) => ({
      // Initial state.
      person: blankData,
      processNames: [],

      // Actions.
      updatePerson: (newData) =>
        set(
          produce((state: ApplicationState) => {
            const dataToAssign = {};

            Object.entries(newData).forEach(([key, value]) =>
              assignDeepProperty(dataToAssign, key, value),
            );

            Object.assign(state.person, dataToAssign);
          }),
        ),

      updateProcessNames: (newProcessNames) =>
        set(() => ({ processNames: newProcessNames })),

      finalizeApplicant: () =>
        set(
          produce((state: ApplicationState) => {
            /**
             * Infer any extra values for the applicant as needed.
             * Do any additional assignments here.
             */
            const { birthdate, age, residentJurisdiction, residentLocality } =
              state.person;

            const extraData: Partial<ApplicationState["person"]> = {};

            if (birthdate && !age) {
              extraData.age = numericalAge(birthdate);
            }

            const jurisdiction = residentJurisdiction ?? "";
            const jurisdictionObj = allJurisdictions.get(jurisdiction);

            if (
              jurisdictionObj !== undefined &&
              jurisdictionObj.localities !== undefined
            ) {
              const { localities } = jurisdictionObj;
              const locality = localities[residentLocality ?? ""];

              Object.assign(extraData, locality);
            }

            const isChangingLegalName = state.processNames.includes(
              Target.NameChange,
            );
            const isChangingLegalSex = state.processNames.includes(
              Target.GenderMarker,
            );
            Object.assign(extraData, {
              isChangingLegalName,
              isChangingLegalSex,
            });

            Object.assign(state.person, extraData);
          }),
        ),
    }),
    {
      name: "transpapers-storage",
    },
  ),
);

export default useStore;

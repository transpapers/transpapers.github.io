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

import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Person } from "./types/person";
import { Target } from "./types/process";

import { numericalAge } from "./lib/util";

interface ApplicationState {
  person: Person;
  residentJurisdictionName?: string;
  birthJurisdictionName?: string;
  residentLocalityName?: string;
  processNames: Target[];
}

interface Action {
  updatePerson: (newData: Partial<ApplicationState["person"]>) => void;
  updateAppState: (newData: Partial<ApplicationState>) => void;
  updateProcessNames: (newProcessNames: Target[]) => void;
  finalizeApplicant: () => void;
}

// Type for pointer walk code
interface Node<T = unknown> {
  [key: string]: Node | T;
}

function assignDeepProperty<T>(root: Node<T>, key: string, value: T): boolean {
  const path = key.split(":");

  const dirs = path.slice(0, -1);
  const file = path.at(-1);
  if (!file) {
    return false;
  }

  let pointer: Node = root;
  dirs.forEach((dirname) => {
    if (!Object.prototype.hasOwnProperty.call(pointer, dirname)) {
      pointer[dirname] = {};
    }

    if (pointer[dirname]) {
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
      person: new Person(),
      processNames: [],

      // Actions.
      updatePerson: (newData) => {
        set(
          produce((state: ApplicationState) => {
            const dataToAssign = {};

            Object.entries(newData).forEach(([key, value]) =>
              assignDeepProperty(dataToAssign, key, value),
            );

            Object.assign(state.person, dataToAssign);
          }),
        );
      },
      updateAppState: (newAppState) => {
        set(() => newAppState);
      },

      updateProcessNames: (newProcessNames) => {
        set(() => ({ processNames: newProcessNames }));
      },

      finalizeApplicant: () => {
        set(
          produce((state: ApplicationState) => {
            /**
             * Infer any extra values for the applicant as needed.
             * Do any additional assignments here.
             */
            const { birthdate, age } = state.person;

            const extraData: Partial<ApplicationState["person"]> = {};

            if (birthdate && !age) {
              extraData.age = numericalAge(birthdate);
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
        );
      },
    }),
    {
      name: "transpapers-storage",
    },
  ),
);

export default useStore;

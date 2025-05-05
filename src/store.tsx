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

import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { blankData, type Person } from "./types/person";
import { Target } from "./types/process";

import { numericalAge } from "./lib/util";
import { getJurisdiction } from "./types/jurisdiction";

interface ApplicationState {
  person: Person;
  processNames: string[];
}

interface Action {
  updatePerson: (newData: Partial<ApplicationState["person"]>) => void;
  updateProcessNames: (newProcessNames: string[]) => void;
  finalizeApplicant: () => void;
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

            Object.entries(newData).forEach(([key, value]) => {
              const path = key.split(":");

              const dirs = path.slice(0, -1);
              const file = path.at(-1)!;

              let pointer: any = dataToAssign;
              dirs.forEach((dirname) => {
                if (!pointer.hasOwnProperty(dirname)) {
                  pointer[dirname] = {};
                }

                pointer = pointer[dirname];
              });

              pointer[file] = value;
            });
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
            const { birthdate, age, residentJurisdiction, residentCounty } =
              state.person;

            const extraData: Partial<ApplicationState["person"]> = {};

            if (birthdate && !age) {
              extraData.age = numericalAge(birthdate);
            }

            const jurisdiction = residentJurisdiction ?? "";
            const jurisdictionObj = getJurisdiction(jurisdiction);

            if (
              jurisdictionObj !== undefined &&
              jurisdictionObj.counties !== undefined
            ) {
              const { counties } = jurisdictionObj;
              const county = counties[residentCounty ?? ""];

              Object.assign(extraData, county);
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

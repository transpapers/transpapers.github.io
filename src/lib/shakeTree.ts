/**
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

import { AnyProcess } from "../types/generic";

import { type Formfill } from "../types/formfill";
import { type Person, sampleData } from "../types/person";

function makeHandler<T extends object>(array: (keyof T & string)[]) {
  return {
    get(target: T, prop: keyof T): T[keyof T] {
      if (typeof prop === "string") {
        array.push(prop);
      }
      return target[prop];
    },
  };
}

function fieldNamesOf(fill: Formfill): (keyof Person)[] {
  const names: (keyof Person)[] = [];

  const testDummy = new Proxy<Person>(sampleData, makeHandler<Person>(names));
  fill(testDummy);

  return names;
}

export function neededFieldNames(proc: AnyProcess): (keyof Person)[] {
  return proc.documents
    .flatMap((doc) => doc.map ?? [])
    .flatMap((fill) => fieldNamesOf(fill))
    .sort()
    .filter((name, i, array) => i == 0 || name != array[i - 1]);
}

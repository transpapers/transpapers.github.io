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

import { Person, sampleData } from "../types/person";
import { Process } from "../types/process";
import { Name } from "../types/types";

import { fields } from "../components/fields";

/**
 * Union of the types we want shakeTree() to ignore/not descend to.
 */
type Opaque = Name;

// TODO better-tree-shaker branch
// eslint-disable-next-line
function isOpaque(obj: any): obj is Opaque {
  return (obj as Name).first !== undefined;
}

/**
 * Determine the properties of a `Person` accessed by `object`.
 */
// TODO better-tree-shaker branch
// eslint-disable-next-line
export function shakeTree(obj: any, accessed: string[] = []) {
  const recursePropertyNames = ["documents", "map"];

  const functionPropertyNames = ["include", "text", "check"];

  const handler = {
    // Handle nested properties correctly.
    // cf. https://stackoverflow.com/questions/41299642/
    // TODO better-tree-shaker branch
    // eslint-disable-next-line
    get(target: any, prop: string) {
      if (isOpaque(target)) {
        return undefined;
      }

      if (prop === "isProxy") {
        return true;
      }

      // TODO better-tree-shaker branch
      // eslint-disable-next-line
      const func = target[prop];

      if (typeof func === "undefined") {
        return undefined;
      }

      // TODO better-tree-shaker branch
      // eslint-disable-next-line
      if (!func.isProxy && typeof func === "object") {
        // TODO better-tree-shaker branch
        // eslint-disable-next-line
        target[prop] = new Proxy(func, handler);
      }

      if (!accessed.includes(prop)) {
        accessed.push(prop);
      }

      // TODO better-tree-shaker branch
      // eslint-disable-next-line
      return target[prop];
    },
  };

  if (obj) {
    recursePropertyNames.forEach((name) => {
      if (Object.prototype.hasOwnProperty.call(obj, name)) {
        // TODO better-tree-shaker branch
        // eslint-disable-next-line
        const subobj = obj[name];
        if (Array.isArray(subobj)) {
          subobj.forEach((item) => shakeTree(item, accessed));
        } else {
          shakeTree(subobj, accessed);
        }
      }
    });

    functionPropertyNames.forEach((name) => {
      if (Object.prototype.hasOwnProperty.call(obj, name)) {
        // TODO better-tree-shaker branch
        // eslint-disable-next-line
        const func = obj[name];
        // TODO better-tree-shaker branch
        // eslint-disable-next-line
        const proxiedDummy = new Proxy(sampleData, handler);

        // TODO better-tree-shaker branch
        // eslint-disable-next-line
        func(proxiedDummy);
      }
    });
  }

  return accessed;
}

/**
 * Convert the list of needed procedures into a list of needed field names.
 */
export function neededFieldNames(
  neededProcs: Process[],
  applicant: Person,
): string[] {
  const names: string[] = [];
  neededProcs.forEach((process) => shakeTree(process, names));

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (
      field.include !== undefined &&
      field.include(applicant) &&
      !names.includes(fieldName)
    ) {
      names.push(fieldName);
    }
  });

  return names;
}

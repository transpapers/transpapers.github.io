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

import { Person, sampleData } from '../types/person';
import { Process } from '../types/process';

import { fields } from '../components/fields';

/**
 * Determine the properties of a `Person` accessed by `object`.
 *
 * @remarks TODO is there a way to do this with just the interface?
 *
 * TODO Better documentation. Typing?
 */
export function shakeTree(obj: any, accessed: string[] = []) {
  const recursePropertyNames = ['documents', 'map'];

  const functionPropertyNames = ['include', 'text', 'check'];

  const handler = {
    // Handle nested properties correctly.
    // cf. https://stackoverflow.com/questions/41299642/

    get(target: any, prop: string) {
      if (prop === 'isProxy') {
        return true;
      }

      const func = target[prop];

      if (typeof func === 'undefined') {
        return undefined;
      }

      if (!func.isProxy && typeof func === 'object') {
        // Ignoring ESLint here because we do actually need to mutate `target`.
        // The `no-param-reassign` rule is irrelevant since we aren't touching `arguments`.
        target[prop] = new Proxy(func, handler); // eslint-disable-line no-param-reassign
      }

      if (!accessed.includes(prop)) {
        accessed.push(prop);
      }

      return target[prop];
    },
  };

  if (obj) {
    recursePropertyNames.forEach((name) => {
      if (Object.prototype.hasOwnProperty.call(obj, name)) {
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
        const func = obj[name];
        const proxiedDummy = new Proxy(sampleData, handler);

        func(proxiedDummy);
      }
    });
  }

  return accessed;
}

/**
 * Convert the list of needed procedures into a list of needed field names.
 */
export function neededFieldNames(neededProcs: Process[], applicant: Person): string[] {
  const names: string[] = [];
  neededProcs.forEach((process) => shakeTree(process, names));

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (
      field.include !== undefined
      && field.include(applicant)
      && !names.includes(fieldName)
    ) {
      names.push(fieldName);
    }
  });

  return names;
}

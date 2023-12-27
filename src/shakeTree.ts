import { sampleData } from './person';

/**
 * Determine the properties of a `Person` accessed by `object`.
 *
 * @remarks TODO is there a way to do this with just the interface?
 *
 * TODO Better documentation. Typing?
 */
export default function shakeTree(obj: any, accessed: string[] = []) {
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

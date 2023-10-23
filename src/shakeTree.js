import {sampleData} from './person.js';

export default function shakeTree(object, accessed = []) {
	const recursePropertyNames = ['documents', 'map'];

	const functionPropertyNames = ['include', 'text', 'check'];

	const handler = {
		// Handle nested properties correctly.
		// cf. https://stackoverflow.com/questions/41299642/
		get(target, prop) {
			if (prop === 'isProxy') {
				return true;
			}

			const func = target[prop];

			if (typeof func === 'undefined') {
				return;
			}

			if (!func.isProxy && typeof func === 'object') {
				target[prop] = new Proxy(func, handler);
			}

			if (!accessed.includes(prop)) {
				accessed.push(prop);
			}

			return target[prop];
		},
	};

	recursePropertyNames.forEach(name => {
		if (Object.prototype.hasOwnProperty.call(object, name)) {
			const subobject = object[name];
			if (Array.isArray(subobject)) {
				subobject.forEach(item => shakeTree(item, accessed));
			} else {
				shakeTree(subobject, accessed);
			}
		}
	});

	functionPropertyNames.forEach(name => {
		if (Object.prototype.hasOwnProperty.call(object, name)) {
			const func = object[name];
			const proxiedDummy = new Proxy(sampleData, handler);

			func(proxiedDummy);
		}
	});

	return accessed;
}

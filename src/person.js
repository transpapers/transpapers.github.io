import {fullName, numericalAge} from './util.js';

/**
 * @typedef {Object} Person - A person's information
 * @property {Name} legalName
 * @property {Name} chosenName
 * @property {string} reasonForNameChange
 * @property {boolean} sealBirthCertificate
 * @property {Object} birthplace FIXME
 * @property {string} dateOfBirth - A person's date of birth.
 *
 * This is Chesterton's fence!! Read before you modify. I got an earful about
 * time/date handling from an alter and now you have to hear it too.
 *
 * These are strings and not Dates for the sake of sanity.
 * One's "date of birth" is a legal abstraction, not a timestamp, which is
 * what a Date represents. In fact, it only needs to be treated as anything
 * other than a string for the purposes of determining majority.
 * There are some further corner cases to consider [0] but it's beyond scope
 * and so handled by the "age" field.
 * If the person was not born in the last 22 [1] years, that is to say, if
 * their legal year of birth is less than the current year minus 22, we don't
 * do any additional date math. We never convert the given DOB to a Date and
 * so avoid philosophically perplexing questions of time by shunting them to
 * whatever remedy the user and the legal system may have.
 *
 * [0] Cf. "Some oddities of the law on age: So you thought you reached age 21
 * on your 21st birthday?", Wilberforce Chambers.
 * [1] In the state of Michigan, this is the last "breakpoint" at which the
 * legal process changes. The other breakpoints are 15 and 18 years. Being
 * that the MI process is particularly onerous, the last breakpoint is
 * most likely 18 in other states.
 *
 * @property {number} age
 * @property {string} assignedSex
 * @property {string} gender
 * @property {boolean} doNotPublish
 * @property {boolean} parentsAreOkay
 * @property {Name} mothersBirthName
 * @property {string} mothersDateOfBirth
 * @property {Name} fathersBirthName
 * @property {string} fathersDateOfBirth
 * @property {string} areaCode FIXME
 * @property {string} phone
 * @property {string} streetAddress
 * @property {string} city
 * @property {string} state
 * @property {string} county
 * @property {string} zip
 * @property {string} email
 * @property {Name} representativeName
 */

/**
 * Return the legal name of a person's legal representative (themself or their
 * parent/guardian) from the given `data`.
 * @param {Person} data
 * @return {Name}
 */
export function representativeName(data) {
	if (!isMinor(data)) {
		return data.legalName;
	}

	if (data.representativeName) {
		return data.representativeName;
	}

	return {first: '', middle: '', last: ''};
}

/**
 * Return a person's full contact info, i.e., full name, street address, and phone.
 * @param {Person} data
 * @return {string}
 */
export function fullContactInfo(data, separator = '\n') {
	const lines = [fullName(representativeName(data)), data.streetAddress, `${data.city}, ${data.state} ${data.zip}`, `(${data.areaCode}) ${data.phone}`];
	return lines.join(separator);
}

/**
* Determine whether a person is a minor (i.e., under 18.)
* @param {Person} data
* @return {boolean}
*/
export function isMinor(data) {
	return numericalAge(data.dateOfBirth) < 18;
}

// This should come in handy for documentation purposes.
/**
 * @type {Person}
 */
export const sampleData = {
	legalName: {
		first: 'Jane',
		middle: 'Michelle',
		last: 'Doe',
		suffix: '',
	},
	chosenName: {
		first: 'John',
		middle: 'Michael',
		last: 'Doe',
		suffix: '',
	},

	reasonForNameChange: 'Gender transition',
	sealBirthCertificate: true,
	birthplace: {
		city: 'New York',
		state: 'New York',
	},

	dateOfBirth: '2010-01-01',

	assignedSex: 'F',
	gender: 'X',

	mothersBirthName: {
		first: 'Jane',
		middle: 'Michelle',
		last: 'Doe',
		suffix: '',
	},

	doNotPublish: false,
	parentsAreOkay: true,

	mothersDateOfBirth: '1970-01-01',

	fathersBirthName: {
		first: 'John',
		middle: 'Michael',
		last: 'Doe',
		suffix: '',
	},

	fathersDateOfBirth: '1970-01-01',

	areaCode: '313',
	phone: '555-1234',

	streetAddress: '20 Monroe Street NW',

	city: 'Grand Rapids',
	state: 'Michigan',
	zip: '49503',

	email: 'jdoe@goodmail.com',

	county: 'Kent',

	representativeName: {
		first: 'John',
		middle: 'Michael',
		last: 'Doe',
		suffix: 'Sr.',
	},
};

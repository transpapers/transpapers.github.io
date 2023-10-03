/**
 * Calculate a person's numerical age from their birthdate, as a string.
 * Since a "date of birth" is a legal fiction and not a timestamp, we
 * can do this without resorting to any funky time nonsense.
 * @param {string} birthdate - DOB, formatted as YYYY-MM-DD.
 * @return {number}
 */
export function numericalAge(birthdate) {
  const thisYear = new Date().getFullYear()
  const thisMonth = new Date().getMonth()
  const thisDay = new Date().getDay()
  const birthYear = Number.parseInt(birthdate.substring(0, 4))
  const birthMonth = Number.parseInt(birthdate.substring(5, 7))
  const birthDay = Number.parseInt(birthdate.substring(8))

  if (thisMonth < birthMonth) {
    return thisYear - birthYear - 1
  } else if (thisMonth === birthMonth && thisDay < birthDay) {
    return thisYear - birthYear - 1
  } else {
    return thisYear - birthYear
  }
}

/**
 * Format a Date as a string 
 * @param {string} date - date, formatted as YYYY-MM-DD.
 * @param {DateFormat} fmt - Ugh
 * @return {string}
 */
export function formatDate(date, fmt) {
  const year = Number.parseInt(date.substring(0, 4))
  const month = Number.parseInt(date.substring(5, 7))
  const day = Number.parseInt(date.substring(8))

  return fmt.format.map((part) => {
	  if (part === 'month') { return month }
	  if (part === 'day') { return day }
	  if (part === 'year') { return year }
	  return ''
  }).join(fmt.separator)
}

/**
 * Format a full `name` as a string.
 * @param {Name} name
 * @return {string}
 */
export function fullName(name) {
  return [name.first, name.middle, name.last, name.suffix].filter(n => n && n.length > 0).join(' ')
}

/**
 * Return the legal name of a person's legal representative (themself or their
 * parent/guardian) from the given `data`.
 * @param {PersonalData} data
 * @return {Name}
 */
export function representativeName(data) {
  if (!isMinor(data)) {
    return data.legalName
  } else if (data.representativeName) {
    return data.representativeName
  } else {
    return { first: "", middle: "", last: "" }
  }
}

/**
 * Return a person's full contact info, i.e., full name, street address, and phone.
 * @param {PersonalData} data
 * @return {string}
 */
export function fullContactInfo(data, separator='\n') {
  const lines = [fullName(representativeName(data)), data.streetAddress, `${data.city}, ${data.state} ${data.zip}`, `(${data.areaCode}) ${data.phone}`]
  return lines.join(separator)
}

/**
 * Determine whether a person is a minor (i.e., under 18.)
 * @param {PersonalData} data
 * @return {boolean}
 */
export function isMinor(data) {
  return numericalAge(data.dateOfBirth) < 18
}

// This should come in handy for documentation purposes.
/**
 * @type {PersonalData}
 */
export const sampleData = {
  legalName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: ''
  },
  chosenName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: ''
  },

  reasonForNameChange: 'Gender transition',
  sealBirthCertificate: true,
  birthplace: {
    city: 'New York',
    state: 'New York',
  },

  dateOfBirth: "2010-01-01",

  assignedSex: 'F',
  gender: 'X',

  mothersBirthName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: ''
  },

  doNotPublish: false,
  parentsAreOkay: true,

  mothersDateOfBirth: "1970-01-01",

  fathersBirthName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: ''
  },

  fathersDateOfBirth: "1970-01-01",

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
    suffix: 'Sr.'
  },
}

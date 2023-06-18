import { type Name, type PersonalData } from './types'

export function fullName (name: Name): string {
  return [name.first, name.middle, name.last, name.suffix].filter(n => n.length > 0).join(' ')
}

export function representativeName(data: PersonalData): Name {
  if (!isMinor(data)) {
    return data.legalName
  } else {
    return data.representativeName
  }
}

export function fullContactInfo(data: PersonalData): string {
  return `${String(fullName(representativeName(data)))}
${String(data.streetAddress)}
${String(data.city)}, ${String(data.state)} ${String(data.zip)}
${String(data.areaCode)}${String(data.phone)}`
}

export function isMinor (data: PersonalData): boolean {
  const now = new Date()
  const maximumBirthYear = now.getFullYear() - 18
  const maximumBirthDate = new Date(maximumBirthYear, now.getMonth(), now.getDay())

  return data.dateOfBirth > maximumBirthDate
}

// This should come in handy for documentation purposes.
export const sampleData: PersonalData = {
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
  maritalStatus: 'Single',
  reasonForNameChange: 'Gender transition',
  sealBirthCertificate: true,
  birthplace: {
    city: 'New York',
    state: 'New York',
    foreignCountry: ''
  },

  // dateOfBirth: new Date(1970, 1, 1),
  dateOfBirth: new Date(2010, 1, 1),

  assignedSex: 'F',
  gender: 'X',

  mothersBirthName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: ''
  },

  parentsAreOkay: true,

  mothersDateOfBirth: new Date(1970, 1, 1),

  fathersBirthName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: ''
  },

  fathersDateOfBirth: new Date(1970, 1, 1),

  phone: '313-555-1234',

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

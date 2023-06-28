import { type CourtData, type Name, type PersonalData } from './types'

export function numericalAge(birthdate: string): number {
  console.log(birthdate)
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
  return numericalAge(data.dateOfBirth) < 18
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

  dateOfBirth: "2010-01-01", 

  assignedSex: 'F',
  gender: 'X',

  mothersBirthName: {
    first: 'Jane',
    middle: 'Michelle',
    last: 'Doe',
    suffix: ''
  },

  parentsAreOkay: true,

  mothersDateOfBirth: "1970-01-01",

  fathersBirthName: {
    first: 'John',
    middle: 'Michael',
    last: 'Doe',
    suffix: ''
  },

  fathersDateOfBirth: "1970-01-01",

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

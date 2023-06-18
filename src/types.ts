import { type PDFForm, type PDFField } from 'pdf-lib'

export interface Name {
  first: string
  middle: string
  last: string
  suffix?: string
}

export interface PersonalData {
  legalName: Name
  chosenName: Name

  maritalStatus: string
  reasonForNameChange: string

  sealBirthCertificate: boolean

  birthplace: {
    city: string
    state: string
  }

  dateOfBirth: Date

  assignedSex: string
  gender: string

  parentsAreOkay: boolean

  mothersBirthName: Name
  mothersDateOfBirth: Date

  fathersBirthName: Name
  fathersDateOfBirth: Date

  areaCode: string
  phone: string

  streetAddress: string
  city: string
  state: string
  county: string
  zip: string

  email: string

  representativeName?: Name
}

// A specification for filling a single form field. One fiber of a mapping
// from data to document.
//
// Exactly one of [text, check] and exactly one of [field, loc] is required.
// `text` or `check` determines the information to be entered into the field.
// `field` or `loc` determines the method by which the field will be filled.
// If `check` is set together with `loc`, a capital `X` will be entered.
// Setting `select` and `loc` is an error.
export interface Formfill {
  // Connotes a text field.
  text?: (d: PersonalData) => string
  // Connotes a checkbox, or if `select` is set, a radio group.
  check?: (d: PersonalData) => boolean
  // Connotes a radio group together with `check`.
  select?: string

  // To be used with a fillable PDF.
  field?: (f: PDFForm) => PDFField
  // To be used with a non-fillable PDF.
  loc?: { x: number, y: number }
}

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

  reasonForNameChange: string

  sealBirthCertificate: boolean

  birthplace: {
    city: string
    state: string
  }

  // This is Chesterton's fence!! Read before you modify. I got an earful about
  // time/date handling from an alter and now you have to hear it too.
  //
  // These are strings and not Dates for the sake of sanity.
  // One's "date of birth" is a legal abstraction, not a timestamp, which is
  // what a Date represents. In fact, it only needs to be treated as anything
  // other than a string for the purposes of determining majority.
  // There are some further corner cases to consider [0] but it's beyond scope
  // and so handled by the "age" field.
  // If the person was not born in the last 22 [1] years, that is to say, if
  // their legal year of birth is less than the current year minus 22, we don't
  // do any additional date math. We never convert the given DOB to a Date and
  // so avoid philosophically perplexing questions of time by shunting them to
  // whatever remedy the user and the legal system may have.
  //
  // [0] Cf. "Some oddities of the law on age: So you thought you reached age 21
  // on your 21st birthday?", Wilberforce Chambers.
  // [1] In the state of Michigan, this is the last "breakpoint" at which the
  // legal process changes. The other breakpoints are 15 and 18 years. Being
  // that the MI process is particularly onerous, the last breakpoint is
  // most likely 18 in other states.
  dateOfBirth: string
  age: number

  assignedSex: string
  gender: string

  parentsAreOkay: boolean

  mothersBirthName: Name
  mothersDateOfBirth: string

  fathersBirthName: Name
  fathersDateOfBirth: string

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
// `select` signals that the field is a radio group.
// `field` or `loc` determines the method by which the field will be filled.
// If `check` is set together with `loc`, a capital `X` will be entered.
// Setting `select` and `loc` is an error.
export interface Formfill {
  // Connotes a text field. Contains the information to be entered in the field.
  text?: (d: PersonalData) => string
  // Connotes a checkbox, or if `select` is also set, a radio group. Contains
  // `true` if and only if the checkbox should be checked.
  check?: (d: PersonalData) => boolean
  // Connotes a radio group together with `check`. Contains the (internal) name
  // of the choice to select.
  select?: string

  // To be used with a fillable PDF.
  field?: (f: PDFForm) => PDFField
  // To be used with a non-fillable PDF.
  loc?: { x: number, y: number }
}

import { type Formfill } from './types'
import { fullName, fullContactInfo, isMinor, representativeName } from './util'

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then finally federal forms.

// Petition to Change Name (Michigan form PC51.)
// COMPLETE.
export const nameChangeMap: Formfill[] = [
  { text: data => fullName(data.legalName), field: form => form.getField('In the matter of') },
  { text: fullContactInfo, field: form => form.getField('Petitioners name address and telephone no') },
  { check: data => !isMinor(data) , field: form => form.getField('b an adult') },
  { check: isMinor, field: form => form.getField('c a minor whose natural or adopted parents are') },
  { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.mothersBirthName) : '', field: form => form.getField("Parent") },
  { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.fathersBirthName) : '', field: form => form.getField("Parent") },
  { text: data => data.reasonForNameChange, field: form => form.getField('3 The name change is for the following reason') },
  { text: data => isMinor(data) ? '' : fullName(data.legalName), field: form => form.getField('Text6') },
  { text: data => isMinor(data) ? '' : fullName(data.chosenName), field: form => form.getField('TOPetitioner') },
  { text: data => isMinor(data) ? fullName(data.legalName) : '', field: form => form.getField('Text8') },
  { text: data => isMinor(data) ? fullName(data.chosenName) : '', field: form => form.getField('TOMinor child') },
  { check: data => data.sealBirthCertificate, field: form => form.getField('9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of') },
  { text: data => data.sealBirthCertificate ? fullName(data.legalName) : '', field: form => form.getField('Name_2') },
  { text: () => new Date().toLocaleDateString(), field: form => form.getField('of my information knowledge and belief') }
]

// Addendum to Personal Protected Identifying Information (Michigan form MC97a.)
// COMPLETE.
export const piiMap: Formfill[] = [
  { text: data => fullName(representativeName(data)), field: form => form.getField('PlaintiffsPetitioners name') },
  { text: data => fullName(data.legalName), field: form => form.getField('In the matter of') },
  { text: () => 'Petition to Change Name (PC 51)', field: form => form.getField('Name of formdocument that this MC 97a is being filed with 1') },
  { text: data => `${String(fullName(representativeName(data)))} ${String(new Date().toLocaleDateString())}`, field: form => form.getField('Name of formdocument that this MC 97a is being filed with 2') },
  { text: data => fullName(data.legalName), field: form => form.getField('Name') },
  { text: data => data.dateOfBirth, field: form => form.getField('DOB') }
]

// Publication of Notice of Hearing for Name Change (Michigan form PC50.)
// COMPLETE.
export const noticeMap: Formfill[] = [
  { text: data => fullName(data.legalName), field: form => form.getField('First and last name of children') },
  { text: data => fullName(data.legalName), field: form => form.getField('Current name') },
  { text: data => fullName(data.chosenName), field: form => form.getField('Proposed name') },
  { text: () => '1', field: form => form.getField('times in') },
  { text: () => '1', field: form => form.getField('copies to') },
  { text: () => 'Petitioner', field: form => form.getField('undefined') },
  { text: fullContactInfo, field: form => form.getField('undefined_2') },
]

// Fee Waiver Request (Michigan form MC20.)
// COMPLETE.
export const feeWaiverMap: Formfill[] = [
    { text: fullContactInfo, field: form => form.getField("PlaintiffPetitioners name address and telephone no")},
    { text: data => fullName(data.legalName), field: form => form.getField("In the matter of") },
    { text: () => new Date().toLocaleDateString(), field: form => form.getField("Date") }
]

// Application to Change or Correct a Michigan Birth Record (Michigan form DCH-0847-CHGBX.)
// COMPLETE.
export const birthCertMap: Formfill[] = [
  { text: data => isMinor(data) ? representativeName(data).first : data.chosenName.first, loc: { x: 48, y: 196 } },
  { text: data => isMinor(data) ? representativeName(data).middle: data.chosenName.middle, loc: { x: 337, y: 196 } },
  { text: data => isMinor(data) ? representativeName(data).last : data.chosenName.last, loc: { x: 588, y: 196 } },
  { text: data => data.streetAddress, loc: { x: 48, y: 237 } },
  { text: data => `${String(data.city)}, ${String(data.state)}`, loc: { x: 388, y: 237 } },
  { text: data => data.zip, loc: { x: 662, y: 237 } },
  { text: data => data.areaCode + data.phone, loc: { x: 48, y: 283 } },
  { text: data => data.email, loc: { x: 426, y: 283 } },
  { text: data => fullName(data.legalName), loc: { x: 48, y: 541 } },
  { text: data => fullName(data.legalName), loc: { x: 56, y: 800 } },
  { text: data => fullName(data.chosenName), loc: { x: 433, y: 800 } },
  { text: data => data.dateOfBirth, loc: { x: 534, y: 541 } },
  { text: data => `${String(data.birthplace.city)}, ${String(data.birthplace.state)}`, loc: { x: 249, y: 636 } },
  { text: data => fullName(data.mothersBirthName), loc: { x: 48, y: 710 } },
  { text: data => data.mothersDateOfBirth, loc: { x: 554, y: 710 } },
  { text: data => fullName(data.fathersBirthName), loc: { x: 48, y: 754 } },
  { text: data => data.fathersDateOfBirth, loc: { x: 554, y: 754 } },
  { text: () => new Date().toLocaleDateString(), loc: { x: 620, y: 956 } },

  { text: data => isMinor(data) ? '' : 'X', loc: { x: 50, y: 329 } },
  { text: data => isMinor(data) ? 'X' : '', loc: { x: 50, y: 358 } },
  { text: () => 'X', loc: { x: 312, y: 412 } },
  { text: data => data.assignedSex === 'M' ? 'X' : '', loc: { x: 594, y: 633 }},
  { text: data => data.assignedSex === 'F' ? 'X' : '', loc: { x: 675, y: 633 }},
  { text: data => data.assignedSex === 'X' ? 'X' : '', loc: { x: 769, y: 633 }},
]

// Michigan Dept. of State Sex Designation Form (Michigan form, unnumbered.)
// COMPLETE.
export const mdosSexMap: Formfill[] = [
    { text: data => data.legalName.last, loc: { x: 57, y: 388 } },
    { text: data => data.legalName.first, loc: { x: 351, y: 388 } },
    { text: data => data.legalName.middle, loc: { x: 600, y: 388 } },
    { text: data => data.legalName.suffix || "" , loc: { x: 750, y: 388 } },
    { text: data => data.streetAddress, loc: { x: 57, y: 441 } },
    { text: data => data.city, loc: { x: 351, y: 441 } },
    { text: data => data.zip, loc: { x: 701, y: 441 } },
    { text: data => data.dateOfBirth, loc: { x: 351, y: 489 } },
    { text: data => fullName(data.legalName), loc: { x: 67, y: 555 } },
    { check: data => data.gender === 'F', field: form => form.getField('ChoiceA'), select: 'Choice1' },
    { check: data => data.gender === 'M', field: form => form.getField('ChoiceA'), select: 'Choice2' },
    { check: data => data.gender === 'X', field: form => form.getField('ChoiceA'), select: 'Choice3' },
    { text: () => new Date().toLocaleDateString(), loc: { x: 649, y: 959 }},
]

// State of Michigan Sex Designation Form (Michigan form, unnumbered.)
// COMPLETE.
export const miSexMap: Formfill[] = [
  { text: data => fullName(data.legalName), loc: { x: 151, y: 299 }},
  { text: data => data.dateOfBirth, loc: { x: 193, y: 367 }},
  { text: data => data.assignedSex === 'M' ? 'X' : '', loc: { x: 159, y: 539 }},
  { text: data => data.assignedSex === 'F' ? 'X' : '', loc: { x: 159, y: 559 }},
  { text: data => data.assignedSex === 'X' ? 'X' : '', loc: { x: 159, y: 579 }},
  { text: data => data.gender === 'M' ? 'X' : '', loc: { x: 486, y: 539 }},
  { text: data => data.gender === 'F' ? 'X' : '', loc: { x: 486, y: 559 }},
  { text: data => data.gender === 'X' ? 'X' : '', loc: { x: 486, y: 579 }},
]

// Application for a Social Security Card (federal form SS-5.)
// COMPLETE.
export const ssnMap: Formfill[] = [
  { text: data => data.chosenName.first, field: form => form.getField('topmostSubform[0].Page5[0].firstname[0]') },
  { text: data => data.chosenName.middle, field: form => form.getField('topmostSubform[0].Page5[0].Middlename[0]') },
  { text: data => data.chosenName.last, field: form => form.getField('topmostSubform[0].Page5[0].LastName[0]') },
  { text: data => data.legalName.first, field: form => form.getField('topmostSubform[0].Page5[0].firstdiffname[0]') },
  { text: data => data.legalName.middle, field: form => form.getField('topmostSubform[0].Page5[0].Middlediffname[0]') },
  { text: data => data.legalName.last, field: form => form.getField('topmostSubform[0].Page5[0].Lastdiffname[0]') },
  { text: data => data.birthplace.city, field: form => form.getField('topmostSubform[0].Page5[0].cityofbirth[0]') },
  { text: data => data.birthplace.state, field: form => form.getField('topmostSubform[0].Page5[0].stateatbirth[0]') },
  { text: data => data.dateOfBirth, field: form => form.getField('topmostSubform[0].Page5[0].DateTimeField1[0]') },
  { check: () => true, field: form => form.getField('topmostSubform[0].Page5[0].citizenship[0]') },
  { check: data => data.gender === 'M', field: form => form.getField('topmostSubform[0].Page5[0].Gender[0]') },
  { check: data => data.gender === 'F', field: form => form.getField('topmostSubform[0].Page5[0].Gender[1]') },
  { text: data => data.mothersBirthName.first, field: form => form.getField('topmostSubform[0].Page5[0].mothersfirstname[0]') },
  { text: data => data.mothersBirthName.middle, field: form => form.getField('topmostSubform[0].Page5[0].mothersmiddlename[0]') },
  { text: data => data.mothersBirthName.last, field: form => form.getField('topmostSubform[0].Page5[0].motherslastname[0]') },
  { text: data => data.fathersBirthName.first, field: form => form.getField('topmostSubform[0].Page5[0].fathersfirstname[0]') },
  { text: data => data.fathersBirthName.middle, field: form => form.getField('topmostSubform[0].Page5[0].fathersmiddlename[0]') },
  { text: data => data.fathersBirthName.last, field: form => form.getField('topmostSubform[0].Page5[0].fatherslastname[0]') },
  { check: () => true, field: form => form.getField('topmostSubform[0].Page5[0].ssnbefore[0]') },
  { text: data => data.legalName.first, field: form => form.getField('topmostSubform[0].Page5[0].firstnameonrecentcard[0]') },
  { text: data => data.legalName.middle, field: form => form.getField('topmostSubform[0].Page5[0].middlenameonrecentcard[0]') },
  { text: data => data.legalName.last, field: form => form.getField('topmostSubform[0].Page5[0].lastnameonrecentcard[0]') },
  { text: () => new Date().toLocaleDateString(), field: form => form.getField('topmostSubform[0].Page5[0].DateTimeField2[1]') },
  { text: data => data.areaCode, field: form => form.getField('topmostSubform[0].Page5[0].areacode[0]') },
  { text: data => data.phone, field: form => form.getField('topmostSubform[0].Page5[0].phonenumber[0]') },
  { text: data => data.streetAddress, field: form => form.getField('topmostSubform[0].Page5[0].streetaddress[0]') },
  { text: data => data.city, field: form => form.getField('topmostSubform[0].Page5[0].mailingcity[0]') },
  { text: data => data.state, field: form => form.getField('topmostSubform[0].Page5[0].state[0]') },
  { text: data => data.zip, field: form => form.getField('topmostSubform[0].Page5[0].zipcode[0]') },
  { check: data => !isMinor(data), field: form => form.getField('topmostSubform[0].Page5[0].relationship[0]') },
  { check: data => isMinor(data) && data.parentsAreOkay, field: form => form.getField('topmostSubform[0].Page5[0].relationship[1]') }
]

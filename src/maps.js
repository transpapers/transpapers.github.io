import { formatDate, fullName, phoneStart, phoneEnd } from './util.js'
import { fullContactInfo, isMinor, representativeName } from './person.js'

// Maps appear in the order they will be collated.
// State forms come first, in the order they should be filed;
// then state documents (which need no map information);
// then finally federal forms.

/**
 * Petition to Change Name (Michigan form PC 51.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const nameChangeMap = [
    { text: data => fullName(data.legalName), field: 'In the matter of' },
    { text: data => fullContactInfo(data), field: 'Petitioners name address and telephone no' },
    { check: data => !isMinor(data), field: 'b an adult' },
    { check: data => isMinor(data), field: 'c a minor whose natural or adopted parents are' },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.mothersBirthName) : '', field: 'Parent' },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.fathersBirthName) : '', field: 'and' },
    { text: data => data.reasonForNameChange, field: '3 The name change is for the following reason' },

    { text: data => isMinor(data) ? '' : data.legalName.first, field: 'First' },
    { text: data => isMinor(data) ? '' : data.legalName.middle, field: 'Middle' },
    { text: data => isMinor(data) ? '' : data.legalName.last, field: 'Last' },
    { text: data => isMinor(data) ? '' : data.chosenName.first, field: 'First_2' },
    { text: data => isMinor(data) ? '' : data.chosenName.middle, field: 'Middle_2' },
    { text: data => isMinor(data) ? '' : data.chosenName.last, field: 'Last_2' },

    { text: data => isMinor(data) ? data.legalName.first : '', field: 'First_5' },
    { text: data => isMinor(data) ? data.legalName.middle : '', field: 'Middle_5' },
    { text: data => isMinor(data) ? data.legalName.last : '', field: 'Last_5' },
    { text: data => isMinor(data) ? data.chosenName.first : '', field: 'First_6' },
    { text: data => isMinor(data) ? data.chosenName.middle : '', field: 'Middle_6' },
    { text: data => isMinor(data) ? data.chosenName.last : '', field: 'Last_6' },

    { check: data => data.sealBirthCertificate, field: '9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of' },
    { text: data => data.sealBirthCertificate ? fullName(data.legalName) : '', field: 'Name_2' },
    { text: () => new Date().toLocaleDateString(), field: 'Date' }
]

/**
 * Petition to Change Name and Ex Parte Request for Nonpublication and
 * Confidential Record (Michigan form PC 51c.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const nameChangePrivateMap = [
    { text: data => fullName(data.legalName), field: 'In the matter of' },
    { text: data => fullContactInfo(data), field: 'Petitioners name address and telephone no' },
    { check: data => !isMinor(data), field: 'b an adult' },
    { check: data => isMinor(data), field: 'c a minor whose natural or adopted parents are' },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.mothersBirthName) : '', field: 'Parent' },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.fathersBirthName) : '', field: 'and' },
    { text: data => data.reasonForNameChange, field: '3 The name change is for the following reason' },

    { text: data => isMinor(data) ? '' : data.legalName.first, field: 'First' },
    { text: data => isMinor(data) ? '' : data.legalName.middle, field: 'Middle' },
    { text: data => isMinor(data) ? '' : data.legalName.last, field: 'Last' },
    { text: data => isMinor(data) ? '' : data.chosenName.first, field: 'First_2' },
    { text: data => isMinor(data) ? '' : data.chosenName.middle, field: 'Middle_2' },
    { text: data => isMinor(data) ? '' : data.chosenName.last, field: 'Last_2' },

    { text: data => isMinor(data) ? data.legalName.first : '', field: 'First_5' },
    { text: data => isMinor(data) ? data.legalName.middle : '', field: 'Middle_5' },
    { text: data => isMinor(data) ? data.legalName.last : '', field: 'Last_5' },
    { text: data => isMinor(data) ? data.chosenName.first : '', field: 'First_6' },
    { text: data => isMinor(data) ? data.chosenName.middle : '', field: 'Middle_6' },
    { text: data => isMinor(data) ? data.chosenName.last : '', field: 'Last_6' },

    { check: data => data.sealBirthCertificate, field: '9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of' },
    { text: data => data.sealBirthCertificate ? fullName(data.legalName) : '', field: 'Name_2' },
    { text: () => new Date().toLocaleDateString(), field: 'Date' }
]

/**
 * Addendum to Personal Protected Identifying Information (Michigan form MC 97a.)
 * @type {Formfill[]}
 */
export const piiMap = [
    { text: data => fullName(representativeName(data)), field: 'PlaintiffsPetitioners name' },
    { text: data => fullName(data.legalName), field: 'In the matter of' },
    { text: data => data.doNotPublish ? 'PC 51c' : 'PC 51', field: 'Name of formdocument that this MC 97a is being filed with 1' },
    { text: data => `${fullName(representativeName(data))} ${new Date().toLocaleDateString()}`, field: 'Name of formdocument that this MC 97a is being filed with 2' },
    { text: data => fullName(data.legalName), field: 'Name' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'DOB' }
]

/**
 * Publication of Notice of Hearing for Name Change (Michigan form PC 50.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const noticeMap = [
    { text: data => fullName(data.legalName), field: 'Current first middle and last names type or print' },
    { text: data => fullName(data.legalName), field: 'Current name' },
    { text: data => fullName(data.chosenName), field: 'Proposed name' },
    { text: data => isMinor(data) ? fullName(representativeName(data)) : fullName(data.legalName), field: 'Petitioners name' },
    { text: () => '1', field: 'times in' },
    { text: () => '1', field: 'copies to' },
    { text: data => data.county, field: 'in' },
    { text: () => 'Petitioner', field: 'undefined' },
    { check: () => true, field: 'Forward statement for publication charges to' },
    { text: () => 'Petitioner', field: 'undefined_2' },
    { text: data => fullContactInfo(data, ', '), loc: { x: 55, y: 943, fontSize: 8 } },
]

/**
 * Order Following Hearing Regarding Peition For Name Change PC 52.)
 * added 10/2023 for Saginaw County Only.
 * @type {Formfill[]}
 */
export const followingMap = [
    { text: data => isMinor(data) ? fullName(representativeName(data)) : fullName(data.legalName), field: 'Current first middle and last names type or print' }
]

/**
 * Fee Waiver Request (Michigan form MC 20.)
 * @type {Formfill[]}
 */
export const feeWaiverMap = [
    { text: data => fullContactInfo(data), field: 'PlaintiffPetitioners name address and telephone no' },
    { text: data => fullName(data.legalName), field: 'In the matter of' },
    { text: () => new Date().toLocaleDateString(), field: 'Date' }
]

/**
 * Application to Change or Correct a Michigan Birth Record (Michigan form DCH-0847-CHGBX.)
 * @type {Formfill[]}
 */
export const birthCertMap = [
    { text: data => isMinor(data) ? representativeName(data).first : data.chosenName.first, loc: { x: 48, y: 196 } },
    { text: data => isMinor(data) ? representativeName(data).middle : data.chosenName.middle, loc: { x: 337, y: 196 } },
    { text: data => isMinor(data) ? representativeName(data).last : data.chosenName.last, loc: { x: 588, y: 196 } },
    { text: data => data.streetAddress, loc: { x: 48, y: 237 } },
    { text: data => `${data.city}, ${data.state}`, loc: { x: 388, y: 237 } },
    { text: data => data.zip, loc: { x: 662, y: 237 } },
    { text: data => data.areaCode + data.phone, loc: { x: 48, y: 283 } },
    { text: data => data.email, loc: { x: 426, y: 283 } },
    { text: data => fullName(data.legalName), loc: { x: 48, y: 541 } },
    { text: data => fullName(data.legalName), loc: { x: 56, y: 800 } },
    { text: data => fullName(data.chosenName), loc: { x: 433, y: 800 } },
    { text: data => data.dateOfBirth, loc: { x: 534, y: 541 } },
    { text: data => `${data.birthplace.city}, ${data.birthplace.state}`, loc: { x: 249, y: 636 } },
    { text: data => fullName(data.mothersBirthName), loc: { x: 48, y: 710 } },
    { text: data => data.mothersDateOfBirth, loc: { x: 554, y: 710 } },
    { text: data => fullName(data.fathersBirthName), loc: { x: 48, y: 754 } },
    { text: data => data.fathersDateOfBirth, loc: { x: 554, y: 754 } },
    { text: () => new Date().toLocaleDateString(), loc: { x: 620, y: 956 } },

    { text: data => isMinor(data) ? '' : 'X', loc: { x: 50, y: 329 } },
    { text: data => isMinor(data) ? 'X' : '', loc: { x: 50, y: 358 } },
    { text: () => 'X', loc: { x: 312, y: 412 } },
    { text: data => data.assignedSex === 'M' ? 'X' : '', loc: { x: 594, y: 633 } },
    { text: data => data.assignedSex === 'F' ? 'X' : '', loc: { x: 675, y: 633 } },
    { text: data => data.assignedSex === 'X' ? 'X' : '', loc: { x: 769, y: 633 } },
]

/**
 * Michigan Dept. of State Sex Designation Form (Michigan form, unnumbered.)
 * @type {Formfill[]}
 */
export const mdosSexMap = [
    { text: data => data.legalName.last, loc: { x: 57, y: 388 } },
    { text: data => data.legalName.first, loc: { x: 351, y: 388 } },
    { text: data => data.legalName.middle, loc: { x: 600, y: 388 } },
    { text: data => data.legalName.suffix || "", loc: { x: 750, y: 388 } },
    { text: data => data.streetAddress, loc: { x: 57, y: 441 } },
    { text: data => data.city, loc: { x: 351, y: 441 } },
    { text: data => data.zip, loc: { x: 701, y: 441 } },
    { text: data => data.dateOfBirth, loc: { x: 351, y: 489 } },
    { text: data => fullName(data.legalName), loc: { x: 67, y: 555 } },
    { check: data => data.gender === 'F', field: 'ChoiceA', select: 'Choice1' },
    { check: data => data.gender === 'M', field: 'ChoiceA', select: 'Choice2' },
    { check: data => data.gender === 'X', field: 'ChoiceA', select: 'Choice3' },
    { text: () => new Date().toLocaleDateString(), loc: { x: 649, y: 959 } },
]

/**
 * State of Michigan Sex Designation Form (Michigan form, unnumbered.)
 * @type {Formfill[]}
 */
export const miSexMap = [
    { text: data => fullName(data.legalName), loc: { x: 151, y: 299 } },
    { text: data => data.dateOfBirth, loc: { x: 193, y: 367 } },
    { text: data => data.assignedSex === 'M' ? 'X' : '', loc: { x: 159, y: 539 } },
    { text: data => data.assignedSex === 'F' ? 'X' : '', loc: { x: 159, y: 559 } },
    { text: data => data.assignedSex === 'X' ? 'X' : '', loc: { x: 159, y: 579 } },
    { text: data => data.gender === 'M' ? 'X' : '', loc: { x: 486, y: 539 } },
    { text: data => data.gender === 'F' ? 'X' : '', loc: { x: 486, y: 559 } },
    { text: data => data.gender === 'X' ? 'X' : '', loc: { x: 486, y: 579 } },
]

/**
 * Application for a Social Security Card (federal form SS-5.)
 * @type {Formfill[]}
 */
export const ssnMap = [
    { text: data => data.chosenName.first, field: 'topmostSubform[0].Page5[0].firstname[0]' },
    { text: data => data.chosenName.middle, field: 'topmostSubform[0].Page5[0].Middlename[0]' },
    { text: data => data.chosenName.last, field: 'topmostSubform[0].Page5[0].LastName[0]' },
    { text: data => data.legalName.first, field: 'topmostSubform[0].Page5[0].firstdiffname[0]' },
    { text: data => data.legalName.middle, field: 'topmostSubform[0].Page5[0].Middlediffname[0]' },
    { text: data => data.legalName.last, field: 'topmostSubform[0].Page5[0].Lastdiffname[0]' },
    { text: data => data.birthplace.city, field: 'topmostSubform[0].Page5[0].cityofbirth[0]' },
    { text: data => data.birthplace.state, field: 'topmostSubform[0].Page5[0].stateatbirth[0]' },
    { text: data => data.dateOfBirth, field: 'topmostSubform[0].Page5[0].DateTimeField1[0]' },
    { check: () => true, field: 'topmostSubform[0].Page5[0].citizenship[0]' },
    { check: data => data.gender === 'M', field: 'topmostSubform[0].Page5[0].Gender[0]' },
    { check: data => data.gender === 'F', field: 'topmostSubform[0].Page5[0].Gender[1]' },
    { text: data => data.mothersBirthName.first, field: 'topmostSubform[0].Page5[0].mothersfirstname[0]' },
    { text: data => data.mothersBirthName.middle, field: 'topmostSubform[0].Page5[0].mothersmiddlename[0]' },
    { text: data => data.mothersBirthName.last, field: 'topmostSubform[0].Page5[0].motherslastname[0]' },
    { text: data => data.fathersBirthName.first, field: 'topmostSubform[0].Page5[0].fathersfirstname[0]' },
    { text: data => data.fathersBirthName.middle, field: 'topmostSubform[0].Page5[0].fathersmiddlename[0]' },
    { text: data => data.fathersBirthName.last, field: 'topmostSubform[0].Page5[0].fatherslastname[0]' },
    { check: () => true, field: 'topmostSubform[0].Page5[0].ssnbefore[0]' },
    { text: data => data.legalName.first, field: 'topmostSubform[0].Page5[0].firstnameonrecentcard[0]' },
    { text: data => data.legalName.middle, field: 'topmostSubform[0].Page5[0].middlenameonrecentcard[0]' },
    { text: data => data.legalName.last, field: 'topmostSubform[0].Page5[0].lastnameonrecentcard[0]' },
    { text: () => new Date().toLocaleDateString(), field: 'topmostSubform[0].Page5[0].DateTimeField2[1]' },
    { text: data => data.areaCode, field: 'topmostSubform[0].Page5[0].areacode[0]' },
    { text: data => data.phone, field: 'topmostSubform[0].Page5[0].phonenumber[0]' },
    { text: data => data.streetAddress, field: 'topmostSubform[0].Page5[0].streetaddress[0]' },
    { text: data => data.city, field: 'topmostSubform[0].Page5[0].mailingcity[0]' },
    { text: data => data.state, field: 'topmostSubform[0].Page5[0].state[0]' },
    { text: data => data.zip, field: 'topmostSubform[0].Page5[0].zipcode[0]' },
    { check: data => !isMinor(data), field: 'topmostSubform[0].Page5[0].relationship[0]' },
    { check: data => isMinor(data) && data.parentsAreOkay, field: 'topmostSubform[0].Page5[0].relationship[1]' }
]

/**
 * Application for a Passport (federal form DS 5504.)
 * @type {Formfill[]}
 */
export const ds5504Map = [
    { text: () => 'X', loc: { x: 38, y: 278 } },
    { text: data => data.chosenName.last, field: 'App Name Last' },
    { text: data => data.chosenName.first, field: 'App First' },
    { text: data => data.chosenName.middle, field: 'App Middle' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: 'App DOB MM' },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: 'App DOB DD' },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: 'App DOB YYYY' },
    { text: data => data.gender === 'M', loc: {page:4, x: 283, y: 298 } },
    { text: data => data.gender === 'F', loc: {page:4, x: 301, y: 298 } },
    { text: data => data.gender === 'X', loc: {page:4, x: 319, y: 298 } },
    { check: () => true, field: 'Yes' },
    { text: data => `${data.city} ${data.state}`, field: 'App Place of Birth' },
    { text: data => data.email, field: 'App Email' },
    { text: data => data.areaCode, field: 'App Phone 1' },
    { text: data => phoneStart(data.phone), field: 'App Phone 2' },
    { text: data => phoneEnd(data.phone), field: 'App Phone 3' },
    { text: data => data.streetAddress, field: 'App Mailing Address Line 1 Street RFD PO Box or URB' },
    { text: data => isMinor(data) ? `In Care Of - ${fullName(representativeName(data))}` : '', field: 'App Mailing Address Line 2' },
    { text: data => data.city, field: 'App Mailing City' },
    { text: data => data.state, field: 'App Mailing State' },
    { text: data => data.zip, field: 'App Mailing Zip' },
    { text: data => data.legalName, field: 'App List all other name you have used' },
    { text: data => data.legalName, field: ' passport book and/or passport card' },
    { text: data => `${data.chosenName.last} ${data.chosenName.first} ${data.chosenName.middle}`, field: 'Name of Applicant 2' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'Date Of Birth' },
    { text: data => data.gender === 'X', loc: {page:5, x: 120, y: 592 } },
    { text: data => data.chosenName.last, field: 'Changed Last Name' },
    { text: data => data.chosenName.first, field: 'Changed First' },
    { text: data => data.chosenName.middle, field: 'Changed Middle' }
]

/**
 * Application for a Passport (federal form DS 82.)
 * @type {Formfill[]}
 */
export const ds82Map = [
    { text: () => 'X', loc: { x: 38, y: 260 } },
    { text: () => 'X', loc: { x: 38, y: 295 } },
    { text: () => 'X', loc: { x: 38, y: 328 } },
    { text: () => 'X', loc: { x: 38, y: 489 } },
    { text: data => data.chosenName.last, field: 'App Name Last' },
    { text: data => data.chosenName.first, field: 'App First' },
    { text: data => data.chosenName.middle, field: 'App Middle' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: 'App DOB MM' },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: 'App DOB DD' },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: 'App DOB YYYY' },
    { text: data => data.gender === 'M', loc: {page:4, x: 283, y: 298 } },
    { text: data => data.gender === 'F', loc: {page:4, x: 301, y: 298 } },
    { text: data => data.gender === 'X', loc: {page:4, x: 319, y: 298 } },
    { check: () => true, field: 'Yes' },
    { text: data => `${data.city} ${data.state}`, field: 'App Place of Birth' },
    { text: data => data.email, field: 'App Email' },
    { text: data => data.areaCode, field: 'App Phone 1' },
    { text: data => phoneStart(data.phone), field: 'App Phone 2' },
    { text: data => phoneEnd(data.phone), field: 'App Phone 3' },
    { text: data => data.streetAddress, field: 'App Mailing Address Line 1' },
    { text: data => isMinor(data) ? `In Care Of - ${fullName(representativeName(data))}` : '', field: 'App Mailing Address Line 2' },
    { text: data => data.city, field: 'App Mailing Address City' },
    { text: data => data.state, field: 'App Mailing Address State' },
    { text: data => data.zip, field: 'App Mailing Address Zip Code' },
    { text: data => data.legalName, field: 'App List all other name you have used' },
    { text: data => data.legalName, field: ' passport book and/or passport card' },
    { check: () => true, field: 'Changed by Court Order' },
    /**Place name change location (city/state format) here */
    { text: data => `${data.chosenName.last} ${data.chosenName.first} ${data.chosenName.middle}`, field: 'Name of Applicant (Last, First, Middle) 2' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'Date Of Birth 2' }
]

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map = [
    { text: data => data.chosenName.last, field: 'Applicant Last Name' },
    { text: data => data.chosenName.first, field: 'Applicant First Name' },
    { text: data => data.chosenName.middle, field: 'Applicant Middle Name' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: 'App DOB M' },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: 'App DOB D' },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: 'App DOB Y' },
    { text: data => data.gender === 'M', loc: {page: 4, x: 283, y: 298 } },
    { text: data => data.gender === 'F', loc: {page: 4, x: 301, y: 298 } },
    { text: data => data.gender === 'X', loc: {page: 4, x: 319, y: 298 } },
    { text: data => `${data.city} ${data.state}`, field: 'Applicant Place of Birth' },
    { text: data => data.email, field: 'Applicant Email' },
    { text: data => data.areaCode, field: 'Applicant Phone 1' },
    { text: data => phoneStart(data.phone), field: 'Applicant Phone 2' },
    { text: data => phoneEnd(data.phone), field: 'Applicant Phone 3' },
    { text: data => data.streetAddress, field: 'Applicant Address Street' },
    { text: data => isMinor(data) ? `In Care Of - ${fullName(representativeName(data))}` : '', field: 'Address Line 2' },
    { text: data => data.city, field: 'Applicant Address CIty' },
    { text: data => data.state, field: 'Applicant Address State' },
    { text: data => data.zip, field: 'Applicant Address Zip Code' },
    { text: data => data.legalName, field: 'List all other name you have used' },
    { text: data => `${data.chosenName.last} ${data.chosenName.first} ${data.chosenName.middle}`, field: 'Name of Applicant 2' },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'Applicant DOB 2' },
    { text: data => `${data.mothersBirthName.first} ${data.mothersBirthName.middle}`, field: 'Parent 1 FM Name' },
    { text: data => data.mothersBirthName.last, field: 'Parent 1 Last Name' },
    { text: data => formatDate(data.mothersDateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'Parent 1 DOB' },
    { text: data => `${data.fathersBirthName.first} ${data.fathersBirthName.middle}`, field: 'Parent 2 FM Name' },
    { text: data => data.fathersBirthName.last, field: 'Parent 2 Last Name' },
    { text: data => formatDate(data.fathersDateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: 'Parent 2 DOB' }
]

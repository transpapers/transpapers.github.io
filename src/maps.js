import { formatDate, fullName, fullContactInfo, isMinor, representativeName, phoneStart, phoneEnd } from './util'

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
    { text: data => fullName(data.legalName), field: form => form.getField('In the matter of') },
    { text: fullContactInfo, field: form => form.getField('Petitioners name address and telephone no') },
    { check: data => !isMinor(data), field: form => form.getField('b an adult') },
    { check: isMinor, field: form => form.getField('c a minor whose natural or adopted parents are') },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.mothersBirthName) : '', field: form => form.getField('Parent') },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.fathersBirthName) : '', field: form => form.getField('and') },
    { text: data => data.reasonForNameChange, field: form => form.getField('3 The name change is for the following reason') },

    { text: data => isMinor(data) ? '' : data.legalName.first, field: form => form.getField('First') },
    { text: data => isMinor(data) ? '' : data.legalName.middle, field: form => form.getField('Middle') },
    { text: data => isMinor(data) ? '' : data.legalName.last, field: form => form.getField('Last') },
    { text: data => isMinor(data) ? '' : data.chosenName.first, field: form => form.getField('First_2') },
    { text: data => isMinor(data) ? '' : data.chosenName.middle, field: form => form.getField('Middle_2') },
    { text: data => isMinor(data) ? '' : data.chosenName.last, field: form => form.getField('Last_2') },

    { text: data => isMinor(data) ? data.legalName.first : '', field: form => form.getField('First_5') },
    { text: data => isMinor(data) ? data.legalName.middle : '', field: form => form.getField('Middle_5') },
    { text: data => isMinor(data) ? data.legalName.last : '', field: form => form.getField('Last_5') },
    { text: data => isMinor(data) ? data.chosenName.first : '', field: form => form.getField('First_6') },
    { text: data => isMinor(data) ? data.chosenName.middle : '', field: form => form.getField('Middle_6') },
    { text: data => isMinor(data) ? data.chosenName.last : '', field: form => form.getField('Last_6') },

    { check: data => data.sealBirthCertificate, field: form => form.getField('9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of') },
    { text: data => data.sealBirthCertificate ? fullName(data.legalName) : '', field: form => form.getField('Name_2') },
    { text: () => new Date().toLocaleDateString(), field: form => form.getField('Date') }
]

/**
 * Petition to Change Name and Ex Parte Request for Nonpublication and
 * Confidential Record (Michigan form PC 51c.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const nameChangePrivateMap = [
    { text: data => fullName(data.legalName), field: form => form.getField('In the matter of') },
    { text: fullContactInfo, field: form => form.getField('Petitioners name address and telephone no') },
    { check: data => !isMinor(data), field: form => form.getField('b an adult') },
    { check: isMinor, field: form => form.getField('c a minor whose natural or adopted parents are') },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.mothersBirthName) : '', field: form => form.getField('Parent') },
    { text: data => (isMinor(data) && data.parentsAreOkay) ? fullName(data.fathersBirthName) : '', field: form => form.getField('and') },
    { text: data => data.reasonForNameChange, field: form => form.getField('3 The name change is for the following reason') },

    { text: data => isMinor(data) ? '' : data.legalName.first, field: form => form.getField('First') },
    { text: data => isMinor(data) ? '' : data.legalName.middle, field: form => form.getField('Middle') },
    { text: data => isMinor(data) ? '' : data.legalName.last, field: form => form.getField('Last') },
    { text: data => isMinor(data) ? '' : data.chosenName.first, field: form => form.getField('First_2') },
    { text: data => isMinor(data) ? '' : data.chosenName.middle, field: form => form.getField('Middle_2') },
    { text: data => isMinor(data) ? '' : data.chosenName.last, field: form => form.getField('Last_2') },

    { text: data => isMinor(data) ? data.legalName.first : '', field: form => form.getField('First_5') },
    { text: data => isMinor(data) ? data.legalName.middle : '', field: form => form.getField('Middle_5') },
    { text: data => isMinor(data) ? data.legalName.last : '', field: form => form.getField('Last_5') },
    { text: data => isMinor(data) ? data.chosenName.first : '', field: form => form.getField('First_6') },
    { text: data => isMinor(data) ? data.chosenName.middle : '', field: form => form.getField('Middle_6') },
    { text: data => isMinor(data) ? data.chosenName.last : '', field: form => form.getField('Last_6') },

    { check: data => data.sealBirthCertificate, field: form => form.getField('9 I request the court to order the State Registrar to create a new live birth certificate that does not disclose the name of') },
    { text: data => data.sealBirthCertificate ? fullName(data.legalName) : '', field: form => form.getField('Name_2') },
    { text: () => new Date().toLocaleDateString(), field: form => form.getField('Date') }
]

/**
 * Addendum to Personal Protected Identifying Information (Michigan form MC 97a.)
 * @type {Formfill[]}
 */
export const piiMap = [
    { text: data => fullName(representativeName(data)), field: form => form.getField('PlaintiffsPetitioners name') },
    { text: data => fullName(data.legalName), field: form => form.getField('In the matter of') },
    { text: data => data.doNotPublish ? 'PC 51c' : 'PC 51', field: form => form.getField('Name of formdocument that this MC 97a is being filed with 1') },
    { text: data => `${String(fullName(representativeName(data)))} ${String(new Date().toLocaleDateString())}`, field: form => form.getField('Name of formdocument that this MC 97a is being filed with 2') },
    { text: data => fullName(data.legalName), field: form => form.getField('Name') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('DOB') }
]

/**
 * Publication of Notice of Hearing for Name Change (Michigan form PC 50.)
 * Updated 7/2023.
 * @type {Formfill[]}
 */
export const noticeMap = [
    { text: data => fullName(data.legalName), field: form => form.getField('Current first middle and last names type or print') },
    { text: data => fullName(data.legalName), field: form => form.getField('Current name') },
    { text: data => fullName(data.chosenName), field: form => form.getField('Proposed name') },
    { text: data => isMinor(data) ? fullName(representativeName(data)) : fullName(data.legalName), field: form => form.getField('Petitioners name') },
    { text: () => '1', field: form => form.getField('times in') },
    { text: () => '1', field: form => form.getField('copies to') },
    { text: data => data.county, field: form => form.getField('in') },
    { text: () => 'Petitioner', field: form => form.getField('undefined') },
    { check: () => true, field: form => form.getField('Forward statement for publication charges to') },
    { text: () => 'Petitioner', field: form => form.getField('undefined_2') },
    { text: data => fullContactInfo(data, ', '), loc: { x: 55, y: 943, fontSize: 8 } },
]

/**
 * Order Following Hearing Regarding Peition For Name Change PC 52.)
 * added 10/2023 for Saginaw County Only.
 * @type {Formfill[]}
 */
export const followingMap = [
    { text: data => isMinor(data) ? fullName(representativeName(data)) : fullName(data.legalName), field: form => form.getField('Current first middle and last names type or print') }
]

/**
 * Fee Waiver Request (Michigan form MC 20.)
 * @type {Formfill[]}
 */
export const feeWaiverMap = [
    { text: fullContactInfo, field: form => form.getField("PlaintiffPetitioners name address and telephone no") },
    { text: data => fullName(data.legalName), field: form => form.getField("In the matter of") },
    { text: () => new Date().toLocaleDateString(), field: form => form.getField("Date") }
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
    { check: data => data.gender === 'F', field: form => form.getField('ChoiceA'), select: 'Choice1' },
    { check: data => data.gender === 'M', field: form => form.getField('ChoiceA'), select: 'Choice2' },
    { check: data => data.gender === 'X', field: form => form.getField('ChoiceA'), select: 'Choice3' },
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
    { text: data => data.chosenName.first, field: form => form.getField('topmostSubform[0].Page5[0].firstname[0]') },
    { text: data => data.chosenName.middle, field: form => form.getField('topmostSubform[0].Page5[0].Middlename[0]') },
    { text: data => data.chosenName.last, field: form => form.getField('topmostSubform[0].Page5[0].LastName[0]') },
    { text: data => data.legalName.first, field: form => form.getField('topmostSubform[0].Page5[0].firstdiffname[0]') },
    { text: data => data.legalName.middle, field: form => form.getField('topmostSubform[0].Page5[0].Middlediffname[0]') },
    { text: data => data.legalName.last, field: form => form.getField('topmostSubform[0].Page5[0].Lastdiffname[0]') },
    { text: data => data.birthplace.city, field: form => form.getField('topmostSubform[0].Page5[0].cityofbirth[0]') },
    { text: data => data.birthplace.state, field: form => form.getField('topmostSubform[0].Page5[0].stateatbirth[0]') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('topmostSubform[0].Page5[0].DateTimeField1[0]') },
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

/**
 * Application for a Passport (federal form DS 5504.)
 * @type {Formfill[]}
 */
export const ds5504Map = [
    { text: () => 'X', loc: { x: 38, y: 278 } },
    { text: data => data.chosenName.last, field: form => form.getField('App Name Last') },
    { text: data => data.chosenName.first, field: form => form.getField('App First') },
    { text: data => data.chosenName.middle, field: form => form.getField('App Middle') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: form => form.getField('App DOB MM') },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: form => form.getField('App DOB DD') },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: form => form.getField('App DOB YYYY') },
    { check: data => data.gender === 'M', loc: {page:4, x: 283, y: 298 } },
    { check: data => data.gender === 'F', loc: {page:4, x: 301, y: 298 } },
    { check: data => data.gender === 'X', loc: {page:4, x: 319, y: 298 } },
    { check: () => true, field: form => form.getField('Yes') },
    { text: data => `${String(data.city)} ${String(data.state)}`, field: form => form.getField('App Place of Birth') },
    { text: data => data.email, field: form => form.getField('App Email') },
    { text: data => data.areaCode, field: form => form.getField('App Phone 1') },
    { text: data => phoneStart(data.phone), field: form => form.getField('App Phone 2') },
    { text: data => phoneEnd(data.phone), field: form => form.getField('App Phone 3') },
    { text: data => data.streetAddress, field: form => form.getField('App Mailing Address Line 1 Street RFD PO Box or URB') },
    { text: data => isMinor(data) ? `In Care Of - ${String(fullName(representativeName(data)))}` : '', field: form => form.getField('App Mailing Address Line 2') },
    { text: data => data.city, field: form => form.getField('App Mailing City') },
    { text: data => data.state, field: form => form.getField('App Mailing State') },
    { text: data => data.zip, field: form => form.getField('App Mailing Zip') },
	{ text: data => fullName(data.legalName), field: form => form.getField('App List all other name you have used') },
	// { text: data => fullName(data.legalName), field: form => form.getField(' passport book and/or passport card') },
    { text: data => `${String(data.chosenName.last)} ${String(data.chosenName.first)} ${String(data.chosenName.middle)}`, field: form => form.getField('Name of Applicant 2') },
    // { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('Date Of Birth') },
    { check: () => true, field: form => form.getField('Button14') },
    { text: data => data.chosenName.last, field: form => form.getField('Changed Last Name') },
    { text: data => data.chosenName.first, field: form => form.getField('Changed First') },
    { text: data => data.chosenName.middle, field: form => form.getField('Changed Middle') }
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
    { text: data => data.chosenName.last, field: form => form.getField('App Name Last') },
    { text: data => data.chosenName.first, field: form => form.getField('App First') },
    { text: data => data.chosenName.middle, field: form => form.getField('App Middle') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: form => form.getField('App DOB MM') },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: form => form.getField('App DOB DD') },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: form => form.getField('App DOB YYYY') },
    { check: data => data.gender === 'M', loc: {page:4, x: 283, y: 298 } },
    { check: data => data.gender === 'F', loc: {page:4, x: 301, y: 298 } },
    { check: data => data.gender === 'X', loc: {page:4, x: 319, y: 298 } },
    { check: () => true, field: form => form.getField('Yes') },
    { text: data => `${String(data.city)} ${String(data.state)}`, field: form => form.getField('App Place of Birth') },
    { text: data => data.email, field: form => form.getField('App Email') },
    { text: data => data.areaCode, field: form => form.getField('App Phone 1') },
    { text: data => phoneStart(data.phone), field: form => form.getField('App Phone 2') },
    { text: data => phoneEnd(data.phone), field: form => form.getField('App Phone 3') },
    { text: data => data.streetAddress, field: form => form.getField('App Mailing Address Line 1') },
    { text: data => isMinor(data) ? `In Care Of - ${String(fullName(representativeName(data)))}` : '', field: form => form.getField('App Mailing Address Line 2') },
    { text: data => data.city, field: form => form.getField('App Mailing Address City') },
    { text: data => data.state, field: form => form.getField('App Mailing Address State') },
    { text: data => data.zip, field: form => form.getField('App Mailing Address Zip Code') },
    { text: data => data.legalName, field: form => form.getField('App List all other name you have used') },
    // { text: data => data.legalName, field: form => form.getField(' passport book and/or passport card') },
    { check: () => true, field: form => form.getField('Changed by Court Order') },
    /**Place name change location (city/state format) here */
    { text: data => `${String(data.chosenName.last)} ${String(data.chosenName.first)} ${String(data.chosenName.middle)}`, field: form => form.getField('Name of Applicant (Last, First, Middle) 2') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('Date Of Birth 2') }
]

/**
 * Application for a Passport (federal form DS 11.)
 * @type {Formfill[]}
 */
export const ds11Map = [
    { text: data => data.chosenName.last, field: form => form.getField('Applicant Last Name') },
    { text: data => data.chosenName.first, field: form => form.getField('Applicant First Name') },
    { text: data => data.chosenName.middle, field: form => form.getField('Applicant Middle Name') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month'], separator: '' }), field: form => form.getField('App DOB M') },
    { text: data => formatDate(data.dateOfBirth, { format: ['day'], separator: '' }), field: form => form.getField('App DOB D') },
    { text: data => formatDate(data.dateOfBirth, { format: ['year'], separator: '' }), field: form => form.getField('App DOB Y') },
    { text: data => data.gender === 'M', loc: {page:4, x: 283, y: 298 } },
    { text: data => data.gender === 'F', loc: {page:4, x: 301, y: 298 } },
    { text: data => data.gender === 'X', loc: {page:4, x: 319, y: 298 } },
    { text: data => `${String(data.city)} ${String(data.state)}`, field: form => form.getField('Applicant Place of Birth') },
    { text: data => data.email, field: form => form.getField('Applicant Email') },
    { text: data => data.areaCode, field: form => form.getField('Applicant Phone 1') },
    { text: data => phoneStart(data.phone), field: form => form.getField('Applicant Phone 2') },
    { text: data => phoneEnd(data.phone), field: form => form.getField('Applicant Phone 3') },
    { text: data => data.streetAddress, field: form => form.getField('Applicant Address Street') },
    { text: data => isMinor(data) ? `In Care Of - ${String(fullName(representativeName(data)))}` : '', field: form => form.getField('Address Line 2') },
    { text: data => data.city, field: form => form.getField('Applicant Address CIty') },
    { text: data => data.state, field: form => form.getField('Applicant Address State') },
    { text: data => data.zip, field: form => form.getField('Applicant Address Zip Code') },
	{ text: data => fullName(data.legalName), field: form => form.getField('List all other name you have used') },
    { text: data => `${String(data.chosenName.last)} ${String(data.chosenName.first)} ${String(data.chosenName.middle)}`, field: form => form.getField('Name of Applicant 2') },
    { text: data => formatDate(data.dateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('Applicant DOB 2') },
    { text: data => `${String(data.mothersBirthName.first)} ${String(data.mothersBirthName.middle)}`, field: form => form.getField('Parent 1 FM Name') },
    { text: data => data.mothersBirthName.last, field: form => form.getField('Parent 1 Last Name') },
    { text: data => formatDate(data.mothersDateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('Parent 1 DOB') },
    { text: data => `${String(data.fathersBirthName.first)} ${String(data.fathersBirthName.middle)}`, field: form => form.getField('Parent 2 FM Name') },
    { text: data => data.fathersBirthName.last, field: form => form.getField('Parent 2 Last Name') },
    { text: data => formatDate(data.fathersDateOfBirth, { format: ['month', 'day', 'year'], separator: '/' }), field: form => form.getField('Parent 2 DOB') }
]

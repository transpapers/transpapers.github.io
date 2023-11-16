import {
  nameChangeMap, nameChangePrivateMap, followingMap, piiMap, ssnMap, noticeMap, feeWaiverMap,
  mdosSexMap, miSexMap, birthCertMap, ds5504Map, ds82Map, ds11Map,
} from './maps';

/**
 * @typedef {Object} Process - Procedural information for filing.
 * @property {?string} state - State or territory. Leave empty for federal forms.
 * @property {string} target - The object of filing the documents; e.g., birth
 *     record, primary identification, passport, etc.
 * @property {?Process[]} depends - A list of other Processes required before or
 *     concurrently with this one. Any sort of dependency loop is assumed to be
 *     filed simultaneously.
 * @property {Document[]} documents - An ordered list of documents to attach.
 */

/**
 * @typedef {Object} Document - A single document to be filed.
 * @property {string} name - Human-readable name of document.
 * @property {?string} id - State or federal document ID, if one exists.
 * @property {string} filename - Location of PDF file.
 * @property {?(function(Person): boolean)} include - Criterion for inclusion;
 *     defaults to () => true.
 * @property {?Formfill[]} map - List of form fields to fill, if any.
 */

export const targets = {
  'name-change': 'change my legal name.',
  'social-security': 'update my information with the Social Security Administration.',
  'birth-record': 'update my birth certificate.',
  passport: 'update my federal passport.',
};

export const socialSecurity = {
  target: 'social-security',
  documents: [
    {
      name: 'Application for a Social Security Card',
      id: 'SS-5',
      filename: 'ss-5.pdf',
      map: ssnMap,
    },
  ],
};

export const passport = {
  target: 'passport',
  documents: [
    {
      name: 'Application for a Passport',
      id: 'DS 5504',
      filename: 'ds5504.pdf',
      map: ds5504Map,
      include: (data) => data.passport === 'ds5504',
    },
    {
      name: 'Application for a Passport',
      id: 'DS 82',
      filename: 'ds82.pdf',
      map: ds82Map,
      include: (data) => data.passport === 'ds82',
    },
    {
      name: 'Application for a Passport',
      id: 'DS 11',
      filename: 'ds11.pdf',
      map: ds11Map,
      include: (data) => data.passport === 'ds11',
    },
  ],
};

export const michiganNameChange = {
  state: 'MI',
  target: 'name-change',
  documents: [
    {
      name: 'Petition to Change Name',
      id: 'PC 51',
      filename: 'pc51.pdf',
      map: nameChangeMap,
      include: (data) => !data.doNotPublish,
    },
    {
      name: 'Petition to Change Name and Ex Parte Request for Nonpublication and Confidential Record',
      id: 'PC 51c',
      filename: 'pc51c.pdf',
      map: nameChangePrivateMap,
      include: (data) => data.doNotPublish,
    },
    {
      name: 'Addendum to Protected Personal Identifying Information',
      id: 'M 97a',
      filename: 'm97a.pdf',
      map: piiMap,
    },
    {
      name: 'Minor\'s Consent to Name Change',
      id: 'PC 51b',
      filename: 'pc51b.pdf',
      include: (data) => data.age && data.age >= 14 && data.age < 18,
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change',
      id: 'PC 50',
      filename: 'pc50.pdf',
      map: noticeMap,
      include: (data) => !(data.doNotPublish && !data.parentsAreOkay),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change (Noncustodial Parent)',
      id: 'PC 50c',
      filename: 'pc50c.pdf',
      include: (data) => data.doNotPublish && !data.parentsAreOkay,
    },
    {
      name: 'Order Following Hearing Regarding Petition For Name Change',
      id: 'PC 52',
      filename: 'pc52.pdf',
      map: followingMap,
      include: (data) => data.county === 'Saginaw',
    },
    {
      name: 'Fee Waiver Request',
      id: 'MC 20',
      filename: 'mc20.pdf',
      map: feeWaiverMap,
    },
  ],
};

export const michiganSexDesignation = {
  state: 'MI',
  target: 'sex-designation',
  documents: [
    {
      name: 'Michigan Dept. of State Sex Designation Form',
      filename: 'mdos_sdf.pdf',
      map: mdosSexMap,
    },
    {
      name: 'State of Michigan Sex Designation Form',
      filename: 'mi_sdf.pdf',
      map: miSexMap,
    },
  ],
};

export const michiganBirthRecord = {
  state: 'MI',
  target: 'birth-record',
  depends: [michiganNameChange, michiganSexDesignation],
  documents: [
    {
      name: 'Application to Change or Correct a Michigan Birth Record',
      id: 'DCH-0847-CHGBX',
      filename: 'birth-cert.pdf',
      map: birthCertMap,
    },
    {
      name: 'Acceptable ID',
      filename: 'acceptable-id.pdf',
    },
  ],
};

const michiganProcesses = {
  'birth-record': michiganBirthRecord,
  'sex-designation': michiganSexDesignation,
  'name-change': michiganNameChange,
  'social-security': socialSecurity,
  passport,
};

export const processes = {
  'Michigan': michiganProcesses,
};

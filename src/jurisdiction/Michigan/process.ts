import { Process, Target } from '../../process';
import {
  nameChangeMap, nameChangePrivateMap, followingMap, piiMap, noticeMap, feeWaiverMap,
  mdosSexMap, miSexMap, birthCertMap,
} from './maps';

export const michiganNameChange: Process = {
  jurisdiction: 'MI',
  target: Target.NameChange,
  depends: [Target.GenderMarker],
  documents: [
    {
      name: 'Petition to Change Name',
      id: 'PC 51',
      filename: 'Michigan/pc51.pdf',
      guide: 'Michigan/pc51.html.njk',
      map: nameChangeMap,
      include: (applicant) => !applicant.doNotPublish,
    },
    {
      name: 'Petition to Change Name and Ex Parte Request for Nonpublication and Confidential Record',
      id: 'PC 51c',
      filename: 'Michigan/pc51c.pdf',
      guide: 'Michigan/pc51.html.njk',
      map: nameChangePrivateMap,
      include: (applicant) => applicant.doNotPublish,
    },
    {
      name: 'Addendum to Protected Personal Identifying Information',
      id: 'M 97a',
      filename: 'Michigan/m97a.pdf',
      guide: 'Michigan/m97a.html.njk',
      map: piiMap,
    },
    {
      name: 'Minor\'s Consent to Name Change',
      id: 'PC 51b',
      filename: 'Michigan/pc51b.pdf',
      include: (applicant) => (
        applicant.age !== undefined
        && applicant.age >= 14
        && applicant.age < 18
      ),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change',
      id: 'PC 50',
      filename: 'Michigan/pc50.pdf',
      guide: 'Michigan/pc50.html.njk',
      map: noticeMap,
      include: (applicant) => !(applicant.doNotPublish && !applicant.parentsAreOkay),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change (Noncustodial Parent)',
      id: 'PC 50c',
      filename: 'Michigan/pc50c.pdf',
      guide: 'Michigan/pc50.html.njk',
      include: (applicant) => (applicant.doNotPublish && !applicant.parentsAreOkay),
    },
    {
      name: 'Order Following Hearing Regarding Petition For Name Change',
      id: 'PC 52',
      filename: 'Michigan/pc52.pdf',
      guide: 'Michigan/pc52.html.njk',
      map: followingMap,
      include: (applicant) => applicant.residentCounty === 'Saginaw',
    },
    {
      name: 'Fee Waiver Request',
      id: 'MC 20',
      filename: 'Michigan/mc20.pdf',
      guide: 'Michigan/mc20.html.njk',
      map: feeWaiverMap,
    },
    { guide: 'Michigan/filing.html.njk'  },
    { guide: 'Michigan/court-hearing.html.njk' },
  ],
};

export const michiganGenderMarker: Process = {
  jurisdiction: 'MI',
  target: Target.GenderMarker,
  documents: [
    {
      name: 'Michigan Dept. of State Sex Designation Form',
      filename: 'Michigan/mdos_sdf.pdf',
      map: mdosSexMap,
    },
    {
      name: 'State of Michigan Sex Designation Form',
      filename: 'Michigan/mi_sdf.pdf',
      map: miSexMap,
    },
  ],
};

export const michiganBirthRecord: Process = {
  jurisdiction: 'MI',
  target: Target.BirthRecord,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    { guide: 'Michigan/birth-cert.html.njk'  },
    {
      name: 'Application to Change or Correct a Michigan Birth Record',
      id: 'DCH-0847-CHGBX',
      filename: 'Michigan/birth-cert.pdf',
      map: birthCertMap,
    },
    {
      name: 'Acceptable ID',
      filename: 'Michigan/acceptable-id.pdf',
    },
  ],
};

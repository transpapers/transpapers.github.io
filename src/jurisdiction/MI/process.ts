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
      filename: 'pc51.pdf',
      map: nameChangeMap,
      include: (applicant) => !applicant.doNotPublish,
    },
    {
      name: 'Petition to Change Name and Ex Parte Request for Nonpublication and Confidential Record',
      id: 'PC 51c',
      filename: 'pc51c.pdf',
      map: nameChangePrivateMap,
      include: (applicant) => applicant.doNotPublish,
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
      include: (applicant) => (applicant.age !== undefined && applicant.age >= 14 && applicant.age < 18),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change',
      id: 'PC 50',
      filename: 'pc50.pdf',
      map: noticeMap,
      include: (applicant) => !(applicant.doNotPublish && !applicant.parentsAreOkay),
    },
    {
      name: 'Publication of Notice of Hearing Regarding Petition for Name Change (Noncustodial Parent)',
      id: 'PC 50c',
      filename: 'pc50c.pdf',
      include: (applicant) => (applicant.doNotPublish && !applicant.parentsAreOkay),
    },
    {
      name: 'Order Following Hearing Regarding Petition For Name Change',
      id: 'PC 52',
      filename: 'pc52.pdf',
      map: followingMap,
      include: (applicant) => applicant.residentCounty === 'Saginaw',
    },
    {
      name: 'Fee Waiver Request',
      id: 'MC 20',
      filename: 'mc20.pdf',
      map: feeWaiverMap,
    },
  ],
};

export const michiganGenderMarker: Process = {
  jurisdiction: 'MI',
  target: Target.GenderMarker,
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

export const michiganBirthRecord: Process = {
  jurisdiction: 'MI',
  target: Target.BirthRecord,
  depends: [Target.NameChange, Target.GenderMarker],
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

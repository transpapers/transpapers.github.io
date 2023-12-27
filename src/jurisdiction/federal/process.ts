import { Process, Target } from '../../process';
import {
  ssnMap, ds5504Map, ds82Map, ds11Map,
} from './maps';

export const socialSecurity: Process = {
  target: Target.SocialSecurity,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: 'Application for a Social Security Card',
      id: 'SS-5',
      filename: 'ss-5.pdf',
      map: ssnMap,
    },
  ],
};

export const passport: Process = {
  target: Target.Passport,
  depends: [Target.NameChange, Target.GenderMarker],
  documents: [
    {
      name: 'Application for a Passport',
      id: 'DS 5504',
      filename: 'ds5504.pdf',
      map: ds5504Map,
      include: (applicant) => applicant.passport === 'ds5504',
    },
    {
      name: 'Application for a Passport',
      id: 'DS 82',
      filename: 'ds82.pdf',
      map: ds82Map,
      include: (applicant) => applicant.passport === 'ds82',
    },
    {
      name: 'Application for a Passport',
      id: 'DS 11',
      filename: 'ds11.pdf',
      map: ds11Map,
      include: (applicant) => applicant.passport === 'ds11',
    },
  ],
};

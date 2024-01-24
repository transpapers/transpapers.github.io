import { Target, Process } from '../process';
import { County } from '../county';

import { michiganBirthRecord, michiganGenderMarker, michiganNameChange } from './MI/process';
import michiganCounties from './MI/counties';

import { passport, socialSecurity } from './federal/process';

/**
 * A single US state or territory.
 */
export interface Jurisdiction {
  /**
   * Human-readable name.
   *
   * @remarks This will be shown to the user in Step 1. This is also the
   * name of the directories under which the requisite forms and guides are
   * located. For instance, Michigan forms are served under `forms/Michigan`
   * and appear under `public/forms/Michigan`.
   */
  name: string,

  /**
   * Map from `Target`s to `Process`es.
   */
  processes?: { [key in Target]?: Process },

  /**
   * Map of counties (or county equivalents.)
   */
  counties?: { [key: string]: County },

  /**
   * `true` if this is the dummy `Jurisdiction` used for federal processes.
   */
  isFederal?: boolean,
}

export const michigan: Jurisdiction = {
  name: 'Michigan',
  processes: {
    [Target.BirthRecord]: michiganBirthRecord,
    [Target.GenderMarker]: michiganGenderMarker,
    [Target.NameChange]: michiganNameChange,
  },
  counties: michiganCounties,
};

export const federal: Jurisdiction = {
  name: 'Federal',
  processes: {
    [Target.SocialSecurity]: socialSecurity,
    [Target.Passport]: passport,
  },
  isFederal: true,
};

export const allJurisdictions = [
  federal,
  michigan,
];

export function getJurisdiction(name: string): Jurisdiction | undefined {
  return allJurisdictions.find((jurisdiction) => jurisdiction.name === name);
}

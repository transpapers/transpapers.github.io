import { Target, Process } from '../process';
import { County } from '../county';

import { michiganBirthRecord, michiganGenderMarker, michiganNameChange } from './MI/process';
import michiganCounties from './MI/counties';

import { passport, socialSecurity } from './federal/process';

export interface Jurisdiction {
    name: string,
    processes?: { [key in Target]?: Process },
    counties?: { [key: string]: County },
    isFederal?: boolean,
}

export const michigan: Jurisdiction = {
    name: "Michigan",
    processes: {
        [Target.BirthRecord]: michiganBirthRecord,
        [Target.GenderMarker]: michiganGenderMarker,
        [Target.NameChange]: michiganNameChange,
    },
    counties: michiganCounties,
};

export const federal: Jurisdiction = {
    name: "Federal",
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

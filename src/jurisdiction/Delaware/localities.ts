/*!
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2026 Sasha Lišková and Stephanie Beckon
 *
 * This file is part of Transpapers.
 *
 * Transpapers is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Transpapers is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Transpapers. If not, see <https://www.gnu.org/licenses/>.
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import { DelawareCounty } from "../../types/locality";

const delawareCounties: DelawareCounty[] = [
  {
    name: "Kent",
    court: {
      address: "414 Federal St, Dover, DE 19901",
      city: "Dover",
      phone: "(302) 735-3900",
      website: "https://courts.delaware.gov/locations/ccp_kt.aspx",
    },
    minorCourt: {
      address: "400 Court St, Dover, DE 19901",
      city: "Dover",
      phone: "(302) 672-1000",
      website: "https://courts.delaware.gov/locations/family_kt.aspx",
      specificCourtInfo:
        "On arrival head to the courts Resource Center on the first floor, the paperwork can be filed there and the clerks will either be able to answer any questions directly or give directions to people in the building who can.",
    },
    adultCourtEmail: "ccp_kentcivilfilings@delaware.gov",
  },
  {
    name: "New Castle",
    court: {
      address: "500 N King St, Wilmington, DE 19801",
      city: "Wilmington",
      phone: "(302) 255-0900",
      website: "https://courts.delaware.gov/locations/ccp_nc.aspx",
    },
    minorCourt: {
      address: "500 N King St, Wilmington, DE 19801",
      city: "Wilmington",
      phone: "(302) 255-0300",
      website: "https://courts.delaware.gov/locations/family_nc.aspx",
      specificCourtInfo:
        "On arrival go to the Lower Level 1 of the Justice Center, the paperwork can be filed there and the clerks will either be able to answer any questions directly or give directions to people in the building who can.",
    },
    adultCourtEmail: "NCCCivilFilings@delaware.gov",
  },
  {
    name: "Sussex",
    court: {
      address: "1 The Cir, Georgetown, DE 19947",
      city: "Georgetown",
      phone: "(302) 858-5700",
      website: "https://courts.delaware.gov/locations/ccp_sx.aspx",
    },
    minorCourt: {
      address: "100 E Market St, Georgetown, DE 19947",
      city: "Georgetown",
      phone: "(302) 855-7400",
      website: "https://courts.delaware.gov/locations/family_sx.aspx",
      specificCourtInfo:
        "On arrival head to the courts Resource Center on the first floor, the paperwork can be filed there and the clerks will either be able to answer any questions directly or give directions to people in the building who can.",
    },
    adultCourtEmail: "CCPSussex_CivilFilings@delaware.gov",
  },
];

export default delawareCounties;

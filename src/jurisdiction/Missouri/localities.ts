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

import { MissouriCounty } from "../../types/locality";

const missouriCounties: MissouriCounty[] = [
  {
    name: "",
    court: {
      address: "",
      city: "",
      phone: "",
      website: "",
      specificCourtInfo: "",
      circuit: "",
    },
    filingFee: "",
    nameHearing: false,
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: false,
    inPersonFileOnly: false,
    onlineFileOnly: false,
    genderChanges: false,
  },
  {
    name: "Adair",
    court: {
      address: "106 W Washington St, Kirksville, MO 63501",
      city: "Kirksville",
      phone: "(660) 665-2283",
      website: "",
      specificCourtInfo: "Court employees indicated that court orders can take anywhere from a week to multiple months to arrive, call the court as needed if it is taking awhile to arrive to keep tabs on it.",
      circuit: "2nd",
    },
    filingFee: "$100.50",
    nameHearing: true,
    publications: [{
      name: "Kirksville Daily Express",
      website: "https://www.kirksvilledailyexpress.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFileOnly: true,
    onlineFileOnly: false,
    genderChanges: false,
  },
];

export default missouriCounties;

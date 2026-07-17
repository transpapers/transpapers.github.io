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
    mailAddress: "",
    genderChanges: false,
  },
  {
    name: "Adair",
    court: {
      address: "106 W Washington St, Kirksville, MO 63501",
      city: "Kirksville",
      phone: "(660) 665-2283",
      specificCourtInfo: "Court employees indicated that court orders can take anywhere from a week to multiple months to be approved, call the court as needed if it is taking awhile to arrive to keep tabs on it.",
      circuit: "2nd",
    },
    filingFee: "$100.50",
    nameHearing: true,
    publications: [{
      name: "Kirksville Daily Express",
      website: "https://www.kirksvilledailyexpress.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFileOnly: false,
    onlineFileOnly: false,
    mailAddress: "PO Box 690, Kirksville MO",
    genderChanges: false,
  },
  {
    name: "Andrew",
    court: {
      address: "411 Court St, Savannah, MO 64485",
      city: "Savannah",
      phone: "(816) 324-3921",
      circuit: "5th",
    },
    filingFee: "$98.50",
    nameHearing: false,
    publications: [{
      name: "Savannah Reporter",
      website: "https://www.savrep.com/submit-a-legal-notice/",
    }],
    courtPublishes: false,
    inPersonFileOnly: false,
    onlineFileOnly: false,
    mailAddress: "PO Box 318, Savannah MO 64485",
    genderChanges: false,
  },
  {
    name: "Atchison",
    court: {
      address: "400 S Washington St, Rock Port, MO 64482",
      city: "Rock Port",
      phone: "(660) 744-6214",
      circuit: "4th",
    },
    filingFee: "$102.50",
    nameHearing: true,
    publications: [{
      name: "Atchison County Mail",
      website: "https://farmerpublishing.com/advertise-with-us/",
    }],
    courtPublishes: false,
    inPersonFileOnly: true,
    onlineFileOnly: false,
    mailAddress: "",
    genderChanges: false,
  },
  {
    name: "Audrain",
    court: {
      address: "101 N Jefferson St, Mexico, MO 65265",
      city: "Mexico",
      phone: "(573) 473-5820",
      website: "",
      specificCourtInfo: "Please note that the filing location is on the 2nd floor of the courthouse. This court requires a $250 publication deposit in addition to the $100.50 filing fee, you will need to pay this $250 deposit even if you get the filing fee waived by the fee waiver form. You will be partially refunded after publication has been completed.",
      circuit: "12th",
    },
    filingFee: "$100.50",
    nameHearing: true,
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFileOnly: true,
    onlineFileOnly: false,
    mailAddress: "",
    genderChanges: false,
  },
];

export default missouriCounties;

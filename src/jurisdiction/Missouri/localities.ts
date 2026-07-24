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
    name: "Adair",
    court: {
      address: "106 W Washington St, Kirksville, MO 63501",
      city: "Kirksville",
      phone: "(660) 665-2283",
      specificCourtInfo: "Court employees indicated that court orders can take anywhere from a week to multiple months to be approved, call the court as needed if it is taking awhile to arrive to keep tabs on it.",
      circuit: "2nd",
    },
    filingFee: "$100.50",
    nameHearing: "Required",
    publications: [{
      name: "Kirksville Daily Express",
      website: "https://www.kirksvilledailyexpress.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: false,
    onlineFile: false,
    mailFile: true,
    mailAddress: "PO Box 690, Kirksville MO",
    genderChanges: false,
    voteClerkAddress: 
      `Adair County Clerk's Office
       106 W Washington St
       Kirksville, MO 63501`,
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
    nameHearing: "Not Required",
    publications: [{
      name: "Savannah Reporter",
      website: "https://www.savrep.com/submit-a-legal-notice/",
    }],
    courtPublishes: false,
    inPersonFile: false,
    onlineFile: false,
    mailFile: true,
    mailAddress: "PO Box 318, Savannah MO 64485",
    genderChanges: false,
    voteClerkAddress:
    `Andrew County Clerk's Office
     PO BOX 206
     SAVANNAH, MO 64485`,
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
    nameHearing: "Required",
    publications: [{
      name: "Atchison County Mail",
      website: "https://farmerpublishing.com/advertise-with-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Atchison County Clerk's Office
     PO BOX 280
     ROCK PORT, MO 64482`,
  },
  {
    name: "Audrain",
    court: {
      address: "101 N Jefferson St, Mexico, MO 65265",
      city: "Mexico",
      phone: "(573) 473-5820",
      specificCourtInfo: "Please note that the filing location is on the 2nd floor of the courthouse. This court requires a $250 publication deposit in addition to the $100.50 filing fee, you will need to pay this $250 deposit even if you get the filing fee waived by the fee waiver form. You will be partially refunded after publication has been completed.",
      circuit: "12th",
    },
    filingFee: "$100.50",
    nameHearing: "Required",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Audrain County Clerk's Office
     101 N. JEFFERSON, RM 101
     MEXICO, MO 65265`,
  },
  {
    name: "Barry",
    court: {
      address: "102 West St, Cassville, MO 65625",
      city: "Cassville",
      phone: "(417) 847-3133",
      circuit: "39th",
    },
    filingFee: "$100.50",
    nameHearing: "Required",
    publications: [{
      name: "Cassville Democrat",
      website: "https://www.cassville-democrat.com/submit-a-classified/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Barry County Clerk's Office
     700 MAIN STREET, STE 2
     CASSVILLE, MO 65625`,
  },
  {
    name: "Barton",
    court: {
      address: "1004 Gulf St, Lamar, MO 64759",
      city: "Lamar",
      phone: "(417) 682-3529",
      specificCourtInfo: "This court will NOT accept personal checks for the filing fee.",
      circuit: "28th",
    },
    filingFee: "$100.50",
    nameHearing: "Maybe Required",
    publications: [{
      name: "Lamar Democrat",
      website: "https://www.lamardemocrat.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1004 Gulf, Room 204, Lamar MO 64759",
    genderChanges: false,
    voteClerkAddress:
    `Barton County Clerk's Office
     1004 GULF, RM 103
     LAMAR, MO 64759`,
  },
  {
    name: "Bates",
    court: {
      address: "1 N Delaware St, Butler, MO 64730",
      city: "Butler",
      phone: "(660) 386-7776",
      specificCourtInfo: "This court requires a $100 publication deposit in addition to the $98.50 filing fee, you will need to pay this $100 deposit even if you get the filing fee waived by the fee waiver form. You will be partially refunded after publication has been completed.",
      circuit: "27th",
    },
    filingFee: "$98.50",
    nameHearing: "Required",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Bates County Clerk's Office
     103 W. Dakota Street, Room 1
     Butler, MO 64730`,
  },
  {
    name: "Benton",
    court: {
      address: "316 Van Buren St, Warsaw, MO 65355",
      city: "Warsaw",
      phone: "(660) 428-2900",
      specificCourtInfo: "The court will handle the publication of your name change for you and will give the newspaper your contact information so you can pay them.",
      circuit: "27th",
    },
    filingFee: "$100.50",
    nameHearing: "Maybe Required",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Benton County Clerk's Office
     PO BOX 1238
     WARSAW, MO 65355`,
  },
  {
    name: "Bollinger",
    court: {
      address: "204 High St #5, Marble Hill, MO 63764",
      city: "Marble Hill",
      phone: "(573) 238-1900",
      specificCourtInfo: "This judge is known to usually reject the fee waiver unless it is filed by a legal aid, be prepared to pay the full filing fee.",
      circuit: "32nd",
    },
    filingFee: "$100.50",
    nameHearing: "Required",
    publications: [{
      name: "Banner Press",
      website: "https://www.thebannerpress.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Bollinger County Clerk's Office
     PO BOX 169
     MARBLE HILL, MO 63764`,
  },
  {
    name: "Boone",
    court: {
      address: "705 E Walnut St, Columbia, MO 65201",
      city: "Columbia",
      phone: "(573) 886-4000",
      specificCourtInfo: "The specific location to file is the family and civil office on the right of the main hallway in the courthouse.",
      circuit: "13th",
    },
    filingFee: "$185.50",
    nameHearing: "Maybe Required",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Boone County Clerk's Office
     801 E. Walnut, Room 236
     Columbia, MO 65201`,
  },
  {
    name: "Buchanan",
    court: {
      address: "411 Jules St, St Joseph, MO 64501",
      city: "St Joseph",
      phone: "(816) 271-1462",
      website: "",
      specificCourtInfo: "",
      circuit: "5th",
    },
    filingFee: "$93.50",
    nameHearing: "",
    publications: [
      {
        name: "St. Joseph Daily Courier",
        website: "https://pulselegal.com/pay-for-a-legal-notice/",
      },
      {
        name: "News Press St. Joseph",
        website: "https://www.newspressnow.com/advertising/contactus/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Buchanan County Clerk's Office
     411 JULES STREET, ROOM 121
     SAINT JOSEPH, MO 64501`,
  },
  {
    name: "Butler",
    court: {
      address: "100 N Main St, Poplar Bluff, MO 63901",
      city: "Poplar Bluff",
      phone: "(573) 686-8082",
      website: "",
      specificCourtInfo: "",
      circuit: "36th",
    },
    filingFee: "$100.50",
    nameHearing: "Required",
    publications: [{
      name: "Daily American Republic",
      website: "https://www.darnews.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Butler County Clerk's Office
     100 N. Main St., Room #202
     Poplar Bluff, MO 63901`,
  },
  {
    name: "Caldwell",
    court: {
      address: "49 E Main St, Kingston, MO 64650",
      city: "Kingston",
      phone: "(816) 586-2571",
      specificCourtInfo: "This court would prefer that you file in person so that they can ensure that everything is correct at the time of filing rather than at the the hearing but filing by mail is also a valid option, there is no penalty for doing so.",
      circuit: "43rd",
    },
    filingFee: "$102.50",
    nameHearing: "Required",
    publications: [{
      name: "Caldwell County News",
      website: "http://www.mycaldwellcounty.com/contact",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "PO Box 68, Kingston, 64650",
    genderChanges: false,
    voteClerkAddress:
    `Caldwell County Clerk's Office
     PO BOX 67
     KINGSTON, MO 64650`,
  },
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
    nameHearing: "",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: false,
    inPersonFile: false,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `
    `,
  },
];

export default missouriCounties;

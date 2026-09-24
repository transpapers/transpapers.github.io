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
      circuit: "5th",
    },
    filingFee: "$93.50",
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
      circuit: "36th",
    },
    filingFee: "$100.50",
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
    name: "Callaway",
    court: {
      address: "5 E 2nd St, Fulton, MO 65251",
      city: "Fulton",
      phone: "(573) 642-0780",
      circuit: "13th",
    },
    filingFee: "$208.50",
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
    `Callaway County Clerk's Office
     10 E 5TH STREET ROOM 104
     FULTON, MO 65251`,
  },
  {
    name: "Camden",
    court: {
      address: "1 Ct Cir NW, Camdenton, MO 65020",
      city: "Camdenton",
      phone: "(573) 346-4440",
      specificCourtInfo: "The judge will tell you which newspaper to use for the publication step.",
      circuit: "26th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "N/A the judge should tell you",
      website: "https://www.google.com/?gws_rd=ssl",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Camden County Clerk's Office
     1 COURT CIRCLE NW, STE 2
     CAMDENTON, MO 65020`,
  },
  {
    name: "Cape Girardeau",
    court: {
      address: "203 N High St # 129, Jackson, MO 63755",
      city: "Jackson",
      phone: "(573) 335-8253",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing.",
      circuit: "32nd",
    },
    filingFee: "$102.50",
    publications: [
      {
        name: "The Cash-Book Journal",
        website: "https://thecash-book.com/contact-us/",
      },
      {
        name: "The Southeast Missourian",
        website: "https://www.semissourian.com/contact-us",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "203 N High St # 129, Jackson, MO 63755",
    genderChanges: false,
    voteClerkAddress:
    `Cape Girardeau County Clerk's Office
     100 Court Street, Ste. 301
     Jackson, MO 63755`,
  },
  {
    name: "Carroll",
    court: {
      address: "8 S Main St, Carrollton, MO 64633",
      city: "Carrollton",
      phone: "(660) 542-0615",
      circuit: "8th",
    },
    filingFee: "$98.00",
    publications: [{
      name: "Carrollton Democrat",
      website: "https://www.carrolltondemocrat.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Carroll County Clerk's Office
     8 SOUTH MAIN, SUITE 6
     CARROLLTON, MO 64633`,
  },
  {
    name: "Carter",
    court: {
      address: "1122 Main St, Van Buren, MO 63965",
      city: "Van Buren",
      phone: "(573) 323-4527",
      specificCourtInfo: "The contact email for the newspaper is taylor@thecurrentriverobserver.com.",
      circuit: "36th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Current River Observer",
      website: "https://www.facebook.com/thecurrentriverobserver/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1122 Main St, Van Buren, MO 63965",
    genderChanges: false,
    voteClerkAddress:
    `Carter County Clerk's Office
     PO BOX 517
     VAN BUREN, MO 63965`,
  },
  {
    name: "Cass",
    court: {
      address: "2501 W Mechanic St, Harrisonville, MO 64701",
      city: "Harrisonville",
      phone: "(816) 380-8227",
      specificCourtInfo: "This court requires a $150 publication deposit in addition to the $130.50 filing fee, you will need to pay this $150 deposit even if you get the filing fee waived by the fee waiver form. You will be partially refunded after publication has been completed.",
      circuit: "17th",
    },
    filingFee: "$130.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Cass County Clerk's Office
     102 E Wall St
     Harrisonville, MO 64701`,
  },
  {
    name: "Cedar",
    court: {
      address: "113 South St, Stockton, MO 65785",
      city: "Stockton",
      phone: "(417) 276-6700",
      specificCourtInfo: "The judge will tell you which newspaper to use for the publication step.",
      circuit: "28th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "N/A the judge should tell you",
      website: "https://www.google.com/?gws_rd=ssl",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Cedar County Clerk's Office
     113 SOUTH ST.
     STOCKTON, MO 65785`,
  },
  {
    name: "Chariton",
    court: {
      address: "306 S Cherry St, Keytesville, MO 65261",
      city: "Keytesville",
      phone: "(660) 288-3602",
      circuit: "9th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Chariton Marquee",
      website: "https://charitonmarquee.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "306 S Cherry St, Keytesville, MO 65261",
    genderChanges: false,
    voteClerkAddress:
    `Chariton County Clerk's Office
     306 S CHERRY ST
     KEYTESVILLE, MO 65261`,
  },
  {
    name: "Christian",
    court: {
      address: "110 W Elm St #202, Ozark, MO 65721",
      city: "Ozark",
      phone: "(417) 582-5140",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing.",
      circuit: "38th",
    },
    filingFee: "",
    publications: [{
      name: "Daily Events",
      website: "https://www.thedailyevents.com/Contact.html",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "110 W Elm St #202, Ozark, MO 65721",
    genderChanges: false,
    voteClerkAddress:
    `Christian County Clerk's Office
     100 W. CHURCH, ROOM 304
     OZARK, MO 65721`,
  },
  {
    name: "Clark",
    court: {
      address: "111 W Court St, Kahoka, MO 63445",
      city: "Kahoka",
      phone: "(660) 727-8240",
      circuit: "1st",
    },
    filingFee: "$150.00",
    publications: [
      {
        name: "Hometown Journal",
        website: "https://www.htjournal.net/contact",
      },
      {
        name: "The Media",
        website: "https://www.kahokamedia.com/contact-us/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Clark County Clerk's Office
     111 E COURT ST, STE. 110
     KAHOKA, MO 63445`,
  },
  {
    name: "Clay",
    court: {
      address: "11 S Water St, Liberty, MO 64068",
      city: "Liberty",
      phone: "(816) 407-3900",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check.",
      circuit: "7th",
    },
    filingFee: "$160.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "11 S Water St, Liberty, MO 64068",
    genderChanges: false,
    voteClerkAddress:
    `Board Of Elections
     100 WEST MISSISSIPPI ST.
     LIBERTY, MO 64068`,
  },
  {
    name: "Clinton",
    court: {
      address: "207 N Main St, Plattsburg, MO 64477",
      city: "Plattsburg",
      phone: "(816) 539-3731",
      specificCourtInfo: "The $500 filing fee is 4 to 5x the fee that other Missouri courts have, we are unsure why but have verified that this fee is accurate.",
      circuit: "43rd",
    },
    filingFee: "$500.00",
    publications: [
      {
        name: "Citizen Observer",
        website: "https://www.mycameronnews.com/contact/",
      },
      {
        name: "Clinton County Leader",
        website: "https://clintoncountyleader.com/contact/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "207 N Main St, Plattsburg, MO 64477",
    genderChanges: false,
    voteClerkAddress:
    `Clinton County Clerk's Office
     207 N. MAIN ST., ROOM 103
     PLATTSBURG, MO 64477`,
  },
  {
    name: "Cole",
    court: {
      address: "301 E High St, Jefferson City, MO 65101",
      city: "Jefferson City",
      phone: "(573) 634-9150",
      circuit: "19th",
    },
    filingFee: "$137.00",
    publications: [{
      name: "News Tribune",
      website: "https://www.newstribune.com/staff/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "301 E High St, Jefferson City, MO 65101",
    genderChanges: false,
    voteClerkAddress:
    `Cole County Clerk's Office
     311 E HIGH ST ROOM 201
     JEFFERSON CITY, MO 65101`,
  },
  {
    name: "Cooper",
    court: {
      address: "200 Main St, Boonville, MO 65233",
      city: "Boonville",
      phone: "(660) 882-2232",
      circuit: "18th",
    },
    filingFee: "$102.50",
    publications: [{
      name: "Boonvile Daily News",
      website: "https://www.boonvilledailynews.com/submit-a-legal-notice/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Cooper County Clerk's Office
     200 MAIN ST. RM. 23
     BOONVILLE, MO 65233`,
  },
  {
    name: "Crawford",
    court: {
      address: "111 S 3rd St, Steelville, MO 65565",
      city: "Steelville",
      phone: "(573) 775-2866",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing. If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check.",
      circuit: "42nd",
    },
    filingFee: "$110.50",
    publications: [
      {
        name: "Cuba Free Press",
        website: "https://www.threeriverspublishing.com/three-rivers/about-us/index.html",
      },
      {
        name: "Sullivan Independent",
        website: "https://www.mysullivannews.com/contact",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "111 S 3rd St, Steelville, MO 65565",
    genderChanges: false,
    voteClerkAddress:
    `Crawford County Clerk's Office
     PO BOX AS
     STEELVILLE, MO 65565`,
  },
  {
    name: "Dade",
    court: {
      address: "300 W Water St, Greenfield, MO 65661",
      city: "Greenfield",
      phone: "(417) 637-2271",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing. They can also notarize your forms on-site during filing.",
      circuit: "28th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Greenfield Vedette",
      website: "https://www.greenfieldvedette.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "300 W Water St, Greenfield, MO 65661",
    genderChanges: false,
    voteClerkAddress:
    `Dade County Clerk's Office
     300 W. Water St.
     GREENFIELD, MO 65661`,
  },
  {
    name: "Dallas",
    court: {
      address:"102 Cedar Dr, Buffalo, MO 65622",
      city: "Buffalo",
      phone: "(417) 345-2632",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check.",
      circuit: "30th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Buffalo Reflex",
      website: "https://buffaloreflex.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "102 Cedar Dr, Buffalo, MO 65622",
    genderChanges: false,
    voteClerkAddress:
    `Dallas County Clerk's Office
     PO BOX 436
     BUFFALO, MO 65622`,
  },
  {
    name: "Daviess",
    court: {
      address: "102 N Main St, Gallatin, MO 64640",
      city: "Gallatin",
      phone: "(660) 663-3300",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order or cashiers check ONLY. Do NOT send cash or personal check.",
      circuit: "43rd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Tri-County Weekly",
      website: "https://www.jamesporttricountyweekly.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "102 N Main St, Gallatin, MO 64640",
    genderChanges: false,
    voteClerkAddress:
    `Daviess County Clerk's Office
     102 N Main St
     Gallatin, MO 64640`,
  },
  {
    name: "DeKalb",
    court: {
      address: "109 W Main St, Maysville, MO 64469",
      city: "Maysville",
      phone: "(816) 449-5402",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check. Also the Dekalb County Record-Herald does not have a proper website that we can find, call them at (816) 449-2121 to set up publication.",
      circuit: "43rd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "DeKalb County Record-Herald",
      website: "https://www.google.com/maps/place/Dekalb+County+Record+Herald/@39.8903778,-94.3591724,21z/data=!4m6!3m5!1s0x87c1d579d2f59953:0x21cfef6de34b9671!8m2!3d39.890446!4d-94.3590589!16s%2Fg%2F1tjv40rh?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "109 W Main St, Maysville, MO 64469",
    genderChanges: false,
    voteClerkAddress:
    `De Kalb County Clerk's Office
     PO BOX 248
     MAYSVILLE, MO 64469`,
  },
  {
    name: "Dent",
    court: {
      address: "400 N Main St, Salem, MO 65560",
      city: "Salem",
      phone: "(573) 729-3931",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check.",
      circuit: "42nd",
    },
    filingFee: "$107",
    publications: [{
      name: "Salem News",
      website: "https://thesalemnewsonline.com/services/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "400 N Main St, Salem, MO 65560",
    genderChanges: false,
    voteClerkAddress:
    `Dent County Clerk's Office
     400 N. MAIN ST.
     SALEM, MO 65560`,
  },
  {
    name: "Douglas",
    court: {
      address: "203 E Lincoln Ave, Ava, MO 65608",
      city: "Ava",
      phone: "(417) 683-4714",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order ONLY. Do NOT send cash or personal check.",
      circuit: "44th",
    },
    filingFee: "$93.50",
    publications: [{
      name: "Douglas County Herald",
      website: "https://www.douglascountyherald.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "203 E Lincoln Ave, Ava, MO 65608",
    genderChanges: false,
    voteClerkAddress:
    `Douglas County Clerk's Office
     P.O BOX 398
     AVA, MO 65608`,
  },
  {
    name: "Dunklin",
    court: {
      address: "1175 Floyd St, Kennett, MO 63857",
      city: "Kennett",
      phone: "(573) 888-2456",
      specificCourtInfo: "If you select mail-in filing, send the filing fee by money order or cashiers check ONLY. Do NOT send cash or personal check. The clerk we spoke with was willing to contact the Campbell Courier newspaper on your behalf and/or set up a virtual hearing with the judge if needed. The contact email for the Campbell Courier newspaper is campbellcourier@bpsnetworks.com.",
      circuit: "35th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Campbell Courier",
      website: "https://www.facebook.com/campbellcourier/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1175 Floyd St, Kennett, MO 63857",
    genderChanges: false,
    voteClerkAddress:
    `Dunklin County Clerk's Office
     PO BOX 188
     KENNETT, MO 63857`,
  },
  {
    name: "Franklin",
    court: {
      address: "401 E Main St, Union, MO 63084",
      city: "Union",
      phone: "(636) 583-7365",
      circuit: "20th",
    },
    filingFee: "$130.50",
    publications: [
      {
        name: "The Missourian",
        website: "https://www.missourian.com/contact/",
      },
      {
        name: "Sullivan Independent",
        website: "https://www.mysullivannews.com/contact",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "401 E Main St, Union, MO 63084",
    genderChanges: false,
    voteClerkAddress:
    `Franklin County Clerk's Office
     400 E LOCUST ST, ROOM 201
     UNION, MO 63084`,
  },
  {
    name: "Gasconade",
    court: {
      address: "119 E 1st St, Hermann, MO 65041",
      city: "Hermann",
      phone: "(573) 486-2632",
      circuit: "20th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Gasconade County Republican",
      website: "https://www.gasconadecountyrepublican.com/republican/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "119 E 1st St, Hermann, MO 65041",
    genderChanges: false,
    voteClerkAddress:
    `Gasconade County Clerk's Office
     119 E. 1ST ST., RM 2
     HERMANN, MO 65041`,
  },
  {
    name: "Gentry",
    court: {
      address: "200 W Clay St, Albany, MO 64402",
      city: "Albany",
      phone: "(660) 726-3618",
      specificCourtInfo: "The contact email for the Tre-County Ledger newspaper is news@tricountynews.net.",
      circuit: "4th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Tri-County Ledger",
      website: "https://www.facebook.com/p/Tri-County-Ledger-61560910300989/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "200 W Clay St, Albany, MO 64402",
    genderChanges: false,
    voteClerkAddress:
    `Gentry County Clerk's Office
     200 W Clay St
     Albany, MO 64402`,
  },
  {
    name: "Greene",
    court: {
      address: "1010 N Boonville Ave, Springfield, MO 65802",
      city: "Springfield",
      phone: "(417) 868-4000",
      specificCourtInfo: "The filing fee includes the publication fee, they handle the entire publication process. These judges also have decent odds to just sign your name change order and mail it to you rather than hold a hearing but that is decided case by case.",
      circuit: "31st",
    },
    filingFee: "$207.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1010 N Boonville Ave, Springfield, MO 65802",
    genderChanges: false,
    voteClerkAddress:
    `Greene County Clerk's Office
     940 North Boonville, Room 113
     SPRINGFIELD, MO 65802`,
  },
  {
    name: "Grundy",
    court: {
      address: "700 Main St, Trenton, MO 64683",
      city: "Trenton",
      phone: "(660) 359-4040",
      circuit: "3rd",
    },
    filingFee: "$150",
    publications: [
      {
        name: "Trenton Telegraph",
        website: "https://www.trentontelegraph.com/contact-us/",
      },
      {
        name: "Tri-County Weekly",
        website: "https://www.jamesporttricountyweekly.com/about",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Grundy County Clerk's Office
     700 MAIN STREET
     TRENTON, MO 64683`,
  },
  {
    name: "Harrison",
    court: {
      address: "1500 Central St, Bethany, MO 64424",
      city: "Bethany",
      phone: "(660) 425-6425",
      circuit: "3rd",
    },
    filingFee: "$102.50",
    publications: [{
      name: "Bethany Republican-Clipper",
      website: "https://www.bethanyclipper.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1500 Central St, Bethany, MO 64424",
    genderChanges: false,
    voteClerkAddress:
    `Harrison County Clerk's Office
     PO BOX 525
     BETHANY, MO 64424`,
  },
  {
    name: "Henry",
    court: {
      address: "100 W Franklin St, Clinton, MO 64735",
      city: "Clinton",
      phone: "(660) 885-7200",
      specificCourtInfo: "This court will typically not hold a hearing and will instead simply sign the order and mail it to you.",
      circuit: "27th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Clinton Daily Democrat",
      website: "https://clintondailydemocrat.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 W Franklin St, Clinton, MO 64735",
    genderChanges: false,
    voteClerkAddress:
    `Henry County Clerk's Office
     100 W FRANKLIN
     CLINTON, MO 64735`,
  },
  {
    name: "Hickory",
    court: {
      address: "100 Polk St, Hermitage, MO 65668",
      city: "Hermitage",
      phone: "(417) 745-6421",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing. If you select mail-in filing, send the filing fee by money order or cashiers check ONLY. Do NOT send cash or personal check.",
      circuit: "30th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "The Index",
      website: "https://hermitageindex.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 Polk St, Hermitage, MO 65668",
    genderChanges: false,
    voteClerkAddress:
    `Hickory County Clerk's Office
     PO BOX 3
     HERMITAGE, MO 65668`,
  },
  {
    name: "Holt",
    court: {
      address: "102 W Nodaway St, Oregon, MO 64473",
      city: "Oregon",
      phone: "(660) 446-3301",
      circuit: "4th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Mound City News",
      website: "http://www.moundcitynews.com/node/216",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "102 W Nodaway St, Oregon, MO 64473",
    genderChanges: false,
    voteClerkAddress:
    `Holt County Clerk's Office
     PO BOX 437
     OREGON, MO 64473`,
  },
  {
    name: "Howard",
    court: {
      address: "1 Courthouse Sq, Fayette, MO 65248",
      city: "Fayette",
      phone: "(660) 248-2194",
      specificCourtInfo: "While the court will accept mail-in filings they would prefer in-person so they can correct errors upon filing. If you select mail-in filing, send the filing fee by money order or cashiers check ONLY. Do NOT send cash or personal check.",
      circuit: "14th",
    },
    filingFee: "$140",
    publications: [{
      name: "The Fayette Advertiser",
      website: "https://www.fayettenewspapers.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1 Courthouse Sq, Fayette, MO 65248",
    genderChanges: false,
    voteClerkAddress:
    `Howard County Clerk's Office
     HOWARD COUNTY COURTHOUSE #1 COURTHOUSE SQUARE
     FAYETTE, MO 65248`,
  },
  {
    name: "Howell",
    court: {
      address: "106 Courthouse, West Plains, MO 65775",
      city: "West Plains",
      phone: "(417) 256-4050",
      specificCourtInfo: "Howell County News states that they are a very christain conservative paper so I would suggest going with the West Plains Daily Quill for publishing.",
      circuit: "37th",
    },
    filingFee: "$130.50",
    publications: [
      {
        name: "Howell County News",
        website: "https://www.howellcountynews.com/about-us",
      },
      {
        name: "West Plains Daily Quill",
        website: "https://www.westplainsdailyquill.net/contact/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "106 Courthouse, West Plains, MO 65775",
    genderChanges: false,
    voteClerkAddress:
    `Howell County Clerk's Office
     35 COURT SQUARE, RM 200
     WEST PLAINS, MO 65775`,
  },
  {
    name: "Iron",
    court: {
      address: "250 S Main St, Ironton, MO 63650",
      city: "Ironton",
      phone: "(573) 546-2511",
      circuit: "42nd",
    },
    filingFee: "$110",
    publications: [{
      name: "The Mountain Echo",
      website: "https://www.myironcountynews.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "250 S Main St, Ironton, MO 63650",
    genderChanges: false,
    voteClerkAddress:
    `Iron County Clerk's Office
     PO BOX 42
     IRONTON, MO 63650`,
  },
  {
    name: "Jackson",
    court: {
      address: "415 E 12th St Unit 300, Kansas City, MO 64106",
      city: "Kansas City",
      phone: "(816) 881-3000",
      specificCourtInfo: "",
      circuit: "16th",
    },
    filingFee: "$142.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "415 E 12th St., Attn: Civil Records, 3rd Floor, Kansas City, MO 64106",
    genderChanges: false,
    voteClerkAddress:
    `Kansas City Board Of Elections
    4407 Dr. Martin Luther King, Jr. Blvd.
    KANSAS CITY, MO 64130
    or
    Jackson County Election Board
    P.O. Box 296
    Independence, MO 64051`,
  },
  {
    name: "Jasper",
    court: {
      address: "302 S Main St #206, Carthage, MO 64836 and 633 S Pearl Ave, Joplin, MO 64801",
      city: "Carthage and Joplin",
      phone: "(417) 358-0450 and (417) 625-4310",
      specificCourtInfo: "If you are filing by mail they will NOT accept personal checks or cash, pay by cashier's check or money order only. One of the judges is particular regarding which newspapers you can publish in, ask if the Sarcoxie Record is ok during your hearing if a newspaper is not specified. To contact the Sarcoxie Record call them at (417) 548-3311 or email then at fstop@centurytel.net.",
      circuit: "29th",
    },
    filingFee: "$127.50",
    publications: [{
      name: "Sarcoxie Record",
      website: "https://www.facebook.com/Sarcoxie/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "302 S Main St #206, Carthage, MO 64836 or 633 S Pearl Ave, Joplin, MO 64801",
    genderChanges: false,
    voteClerkAddress:
    `Jasper County Clerk's Office
     302 S MAIN ST, ROOM 102
     CARTHAGE, MO 64836`,
  },
  {
    name: "Jefferson",
    court: {
      address: "300 Main St #1, Hillsboro, MO 63050",
      city: "Hillsboro",
      phone: "(636) 797-5555",
      circuit: "23rd",
    },
    filingFee: "$128.50",
    publications: [
      {
        name: "The Countian",
        website: "https://molawyersmedia.com/about/contact-us/",
      },
      {
        name: "Jefferson County Reporter",
        website: "https://pulselegal.com/jefferson-county-reporter/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "300 Main St #1, Hillsboro, MO 63050",
    genderChanges: false,
    voteClerkAddress:
    `Jefferson County Clerk's Office
     729 Maple Street PO Box 100
     Hillsboro, MO 63050`,
  },
  {
    name: "Johnson",
    court: {
      address: "101 W Market St, Warrensburg, MO 64093",
      city: "Warrensburg",
      phone: "(660) 422-7413",
      specificCourtInfo: "The fee is split between the filing fee ($100.50) and the publication deposit ($150). The deposit cannot be waived by the fee waiver but you may get some of it back depending on the publication cost. The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "17th",
    },
    filingFee: "$250.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "101 W Market St, Warrensburg, MO 64093",
    genderChanges: false,
    voteClerkAddress:
    `Johnson County Clerk's Office
     300 N Holden St, Suite 204
     Warrensburg, MO 64093`,
  },
  {
    name: "Knox",
    court: {
      address: "107 North 4th, Edina, MO 63537",
      city: "Edina",
      phone: "(660) 397-2305",
      circuit: "2nd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "The Edina Sentinal",
      website: "https://www.edinasentinel.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Knox County Clerk's Office
     107 N FOURTH ST
     EDINA, MO 63537`,
  },
  {
    name: "Laclede",
    court: {
      address: "200 N Adams Ave, Lebanon, MO 65536",
      city: "Lebanon",
      phone: "(417) 532-2471",
      specificCourtInfo: "If the judge does NOT give you a newspaper to publish in during your hearing double check that the Laclede County Record is ok with them, we were unable to get a clerk from this court to confirm.",
      circuit: "26th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Laclede County Record",
      website: "https://www.laclederecord.com/advertise/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "200 N Adams Ave, Lebanon, MO 65536",
    genderChanges: false,
    voteClerkAddress:
    `Laclede County Clerk's Office
     200 N ADAMS AVE
     LEBANON, MO 65536`,
  },
  {
    name: "Lafayette",
    court: {
      address: "116 S 10th St, Lexington, MO 64067",
      city: "Lexington",
      phone: "(660) 259-6101",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "15th",
    },
    filingFee: "$100.50",
    publications: [
      {
        name: "The Higginsville Advance",
        website: "https://www.lafayettemonews.com/contact-us/",
      },
      {
        name: "The Lexington News",
        website: "https://www.lafayettemonews.com/contact-us/",
      },
      {
        name: "The Odessan",
        website: "https://theodessan.net/contact",
      },
      {
        name: "The Santa Fe Times",
        website: "https://www.lafayettemonews.com/contact-us/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "116 S 10th St, Lexington, MO 64067",
    genderChanges: false,
    voteClerkAddress:
    `Lafayette County Clerk's Office
     1001 MAIN STREET
     LEXINGTON, MO 64067`,
  },
  {
    name: "Lawrence",
    court: {
      address: "240 N Main St Ste 110, Mt Vernon, MO 65712",
      city: "Mt Vernon",
      phone: "(417) 466-2471",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "39th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Lawrence County Record",
      website: "https://www.lawrencecountyrecord.com/contact",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "240 N Main St Ste 110, Mt Vernon, MO 65712",
    genderChanges: false,
    voteClerkAddress:
    `Lawrence County Clerk's Office
     1 COURTHOUSE SQUARE, SUITE 101
     MT. VERNON, MO 65712`,
  },
  {
    name: "Lewis",
    court: {
      address: "100 E Lafayette St, Monticello, MO 63457",
      city: "Monticello",
      phone: "(573) 767-5352",
      circuit: "2nd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Press-News Journal",
      website: "https://www.lewispnj.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 E Lafayette St, Monticello, MO 63457",
    genderChanges: false,
    voteClerkAddress:
    `Lewis County Clerk's Office
     PO BOX 67
     MONTICELLO, MO 63457`,
  },
  {
    name: "Lincoln",
    court: {
      address: "45 Business Park Dr, Troy, MO 63379",
      city: "Troy",
      phone: "(636) 528-6300",
      specificCourtInfo: "If your paperwork is in order there should not be a hearing, the judge will simply sign your order and mail it to you.",
      circuit: "45th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Troy Free Press",
      website: "https://www.troyfreepress.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Lincoln County Clerk's Office
     201 MAIN ST
     TROY, MO 63379`,
  },
  {
    name: "Linn",
    court: {
      address: "108 N High St, Linneus, MO 64653",
      city: "Linneus",
      phone: "(660) 895-5212",
      circuit: "9th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Linn County Leader",
      website: "https://www.linncountyleader.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "108 N High St, Linneus, MO 64653",
    genderChanges: false,
    voteClerkAddress:
    `Linn County Clerk's Office
     PO BOX 92
     LINNEUS, MO 64653`,
  },
  {
    name: "Livingston",
    court: {
      address: "700 Webster St, Chillicothe, MO 64601",
      city: "Chillicothe",
      phone: "(660) 646-8000",
      specificCourtInfo: "The fee is split between the filing fee ($100.50) and the publication deposit ($399.50). The deposit cannot be waived by the fee waiver but you may get some of it back depending on the publication cost.",
      circuit: "43rd",
    },
    filingFee: "$500",
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
    `Livingston County Clerk's Office
     700 WEBSTER ST
     CHILLICOTHE, MO 64601`,
  },
  {
    name: "Macon",
    court: {
      address: "101 E Washington St, Macon, MO 63552",
      city: "Macon",
      phone: "(660) 385-4631",
      circuit: "41st",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Home Press",
      website: "https://www.maconhomepress.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "101 E Washington St, Macon, MO 63552",
    genderChanges: false,
    voteClerkAddress:
    `Macon County Clerk's Office
     101 E WASHINGTON ST, STE B
     MACON, MO 63552`,
  },
  {
    name: "Madison",
    court: {
      address: "1 Court Square, Fredericktown, MO 63645",
      city: "Fredericktown",
      phone: "(573) 783-2176",
      specificCourtInfo: "This court uses a custom publication form that the judge will fill out and hand to you during the hearing. This is to reduce your publication costs.",
      circuit: "24th",
    },
    filingFee: "$95.50",
    publications: [{
      name: "Democrat News",
      website: "https://www.democratnewsonline.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Madison County Clerk's Office
     1 COURTHOUSE SQ,
     FREDERICKTOWN, MO 63645`,
  },
  {
    name: "Maries",
    court: {
      address: "211 4th St #2, Vienna, MO 65582",
      city: "Vienna",
      phone: "(573) 422-3388",
      circuit: "25th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Maries County Advocate",
      website: "https://mariescountyadvocate.com/advocate/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "211 4th St #2, Vienna, MO 65582",
    genderChanges: false,
    voteClerkAddress:
    `Maries County Clerk's Office
     PO BOX 205
     VIENNA, MO 65582`,
  },
  {
    name: "Marion",
    court: {
      address: "100 S Main St #207, Palmyra, MO 63461 and 906 Broadway #105, Hannibal, MO 63401",
      city: "Palmyra and Hannibal",
      phone: "(573) 769-2550 and (573) 221-0198",
      circuit: "10th",
    },
    filingFee: "$175",
    publications: [{
      name: "Palmyra Spectator",
      website: "https://www.palmyra-spectator.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Marion County Clerk's Office
     100 S. MAIN STREET, SUITE 107
     PALMYRA, MO 63461`,
  },
  {
    name: "McDonald",
    court: {
      address: "602 Main St, Pineville, MO 64856",
      city: "Pineville",
      phone: "(417) 223-7512",
      circuit: "40th",
    },
    filingFee: "$97.50",
    publications: [{
      name: "McDonald County Press",
      website: "https://mdcp.nwaonline.com/contactus/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "602 Main St, Pineville, MO 64856",
    genderChanges: false,
    voteClerkAddress:
    `McDonald County Clerk's Office
     PO BOX 665
     PINEVILLE, MO 64856`,
  },
  {
    name: "Mercer",
    court: {
      address: "802 E Main St, Princeton, MO 64673",
      city: "Princeton",
      phone: "(660) 748-4335",
      specificCourtInfo: "For the newspaper website link look at the right side and use the contact information for the Post-Telegraph rather than the contact form.",
      circuit: "3rd",
    },
    filingFee: "$102.50",
    publications: [{
      name: "Post-Telegraph",
      website: "https://northmissourinews.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "802 E Main St, Princeton, MO 64673",
    genderChanges: false,
    voteClerkAddress:
    `Mercer County Clerk's Office
     802 E MAIN ST
     PRINCETON, MO 64673`,
  },
  {
    name: "Miller",
    court: {
      address: "2001 State Rte 52, Tuscumbia, MO 65082",
      city: "Tuscumbia",
      phone: "(573) 369-1980",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash. If you are filing an adult petition you will likely recieve your judgement automatically in the mail, minors will likely need to attend a hearing with their next friend and respondent parent.",
      circuit: "26th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "The Advertiser",
      website: "https://eldonadvertiser.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "2001 State Rte 52, Tuscumbia, MO 65082",
    genderChanges: false,
    voteClerkAddress:
    `Miller County Clerk's Office
     PO BOX 12
     TUSCUMBIA, MO 65082`,
  },
  {
    name: "Mississippi",
    court: {
      address: "200 N Main St, Charleston, MO 63834",
      city: "Charleston",
      phone: "(573) 683-2161",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method.",
      circuit: "33rd",
    },
    filingFee: "$130.50",
    publications: [{
      name: "The Standard Democrat",
      website: "https://www.standard-democrat.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "200 N Main St, Charleston, MO 63834",
    genderChanges: false,
    voteClerkAddress:
    `Mississippi County Clerk's Office
     200 N MAIN ST
     CHARLESTON, MO 63834`,
  },
  {
    name: "Moniteau",
    court: {
      address: "200 E Main St, California, MO 65018",
      city: "California",
      phone: "(573) 796-4661",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "26th",
    },
    filingFee: "$132.50",
    publications: [
      {
        name: "California Democrat",
        website: "https://www.californiademocrat.com/staff/",
      },
      {
        name: "Tipton Times",
        website: "https://tiptontimes.com/contact-us/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "200 E Main St, California, MO 65018",
    genderChanges: false,
    voteClerkAddress:
    `Moniteau County Clerk's Office
     200 EAST MAIN
     CALIFORNIA, MO 65018`,
  },
  {
    name: "Monroe",
    court: {
      address: "300 N Main St #201, Paris, MO 65275",
      city: "Paris",
      phone: "(877) 433-3061",
      circuit: "10th",
    },
    filingFee: "$105.50",
    publications: [
      {
        name: "Lake Gazette",
        website: "https://www.lakegazette.net/contact-us/",
      },
      {
        name: "Monroe County Appeal",
        website: "https://www.monroe-ralls.com/contact",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Monroe County Clerk's Office
     300 N MAIN ST, RM 204
     PARIS, MO 65275`,
  },
  {
    name: "Montgomery",
    court: {
      address: "211 E 3rd St, Montgomery City, MO 63361",
      city: "Montgomery City",
      phone: "(573) 564-3341",
      circuit: "12th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Montgomery Standard",
      website: "https://www.mystandardnews.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Montgomery County Clerk's Office
     211 E THIRD ST.
     MONTGOMERY CITY, MO 63361`,
  },
  {
    name: "Morgan",
    court: {
      address: "211 E Newton St #4, Versailles, MO 65084",
      city: "Versailles",
      phone: "(573) 378-4413",
      specificCourtInfo: "The contact email for the Morgan County Statesman newspaper is news@morgancountystatesman.com, the phone number is (573) 378-5441.",
      circuit: "26th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Morgan County Statesman",
      website: "https://www.facebook.com/TheMorganCountyStatesman/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "211 E Newton St #4, Versailles, MO 65084",
    genderChanges: false,
    voteClerkAddress:
    `Morgan County Clerk's Office
     100 E. NEWTON ST.
     VERSAILLES, MO 65084`,
  },
  {
    name: "New Madrid",
    court: {
      address: "450 Main St, New Madrid, MO 63869",
      city: "New Madrid",
      phone: "(573) 748-2228",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method.",
      circuit: "34th",
    },
    filingFee: "$93.50",
    publications: [{
      name: "Standard Democrat",
      website: "https://www.standard-democrat.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "450 Main St, New Madrid, MO 63869",
    genderChanges: false,
    voteClerkAddress:
    `New Madrid County Clerk's Office
     450 MAIN ST.
     NEW MADRID, MO 63869`,
  },
  {
    name: "Newton",
    court: {
      address: "101 S Wood St #201, Neosho, MO 64850",
      city: "Neosho",
      phone: "(417) 451-8221",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method.",
      circuit: "40th",
    },
    filingFee: "$97.50",
    publications: [{
      name: "Neosho Daily News",
      website: "https://neoshodaily.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "101 S Wood St #201, Neosho, MO 64850",
    genderChanges: false,
    voteClerkAddress:
    `Newton County Clerk's Office
     P.O. Box 488
     Neosho, MO 64850`,
  },
  {
    name: "Nodaway",
    court: {
      address: "305 N Main St, Maryville, MO 64468",
      city: "Maryville",
      phone: "(660) 582-4221",
      specificCourtInfo: "",
      circuit: "4th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Maryville Forum",
      website: "https://www.maryvilleforum.com/site/contact.html",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "305 N Main St, Maryville, MO 64468",
    genderChanges: false,
    voteClerkAddress:
    `Nodaway County Clerk's Office
     403 NORTH MARKET RM 211
     MARYVILLE, MO 64468`,
  },
  {
    name: "Oregon",
    court: {
      address: "1 Court Sq, Alton, MO 65606",
      city: "Alton",
      phone: "(417) 778-7460",
      circuit: "37th",
    },
    filingFee: "$130.50",
    publications: [{
      name: "South Missourian",
      website: "https://www.southmissouriannews.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Oregon County Clerk's Office
     PO BOX 324
     ALTON, MO 65606`,
  },
  {
    name: "Osage",
    court: {
      address: "106 E Main St, Linn, MO 65051",
      city: "Linn",
      phone: "(573) 897-3114",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "20th",
    },
    filingFee: "$130.50",
    publications: [{
      name: "Unterrified Democrat",
      website: "https://www.unterrifieddemocrat.com/democrat/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "106 E Main St, Linn, MO 65051",
    genderChanges: false,
    voteClerkAddress:
    `Osage County Clerk's Office
     PO BOX 826
     LINN, MO 65051`,
  },
  {
    name: "Ozark",
    court: {
      address: "1 Court Sq, Gainesville, MO 65655",
      city: "Gainesville",
      phone: "(417) 679-4232",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "44th",
    },
    filingFee: "$93.50",
    publications: [{
      name: "Ozark County Times",
      website: "https://www.ozarkcountytimes.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1 Court Sq, Gainesville, MO 65655",
    genderChanges: false,
    voteClerkAddress:
    `Ozark County Clerk's Office
     P.O. BOX 416
     GAINESVILLE, MO 65655`,
  },
  {
    name: "Permiscot",
    court: {
      address: "610 Ward Ave, Caruthersville, MO 63830",
      city: "Caruthersville",
      phone: "(573) 333-0187",
      specificCourtInfo: "The clerk at the court also has the contact information for the newspaper if needed.",
      circuit: "34th",
    },
    filingFee: "$93.50",
    publications: [{
      name: "Pemiscott Press",
      website: "https://www.pemiscotpress.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "PO Box 34, Caruthersville, MO 63830",
    genderChanges: false,
    voteClerkAddress:
    `Pemiscot County Clerk's Office
     610 Ward Ave., Suite 2A
     Caruthersville, MO 63830`,
  },
  {
    name: "Perry",
    court: {
      address: "400 W St Joseph St #4, Perryville, MO 63775",
      city: "Perryville",
      phone: "(573) 547-6581",
      circuit: "32nd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "The Republic Monitor",
      website: "https://republicmonitor.com/contact/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "400 W St Joseph St #4, Perryville, MO 63775",
    genderChanges: false,
    voteClerkAddress:
    `Perry County Clerk's Office
     15 W STE MARIE STREET STE 2
     PERRYVILLE, MO 63775`,
  },
  {
    name: "Pettis",
    court: {
      address: "415 S Ohio Ave, Sedalia, MO 65301",
      city: "Sedalia",
      phone: "(660) 826-5000",
      circuit: "18th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "The Sedalia Democrat",
      website: "https://www.sedaliademocrat.com/contact/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "415 S Ohio Ave, Sedalia, MO 65301",
    genderChanges: false,
    voteClerkAddress:
    `Pettis County Clerk's Office
     215 E. 5th Street
     Sedalia, MO 65301`,
  },
  {
    name: "Phelps",
    court: {
      address: "200 N Main St, Rolla, MO 65401",
      city: "Rolla",
      phone: "(573) 458-6000",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "25th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Phelps County Focus",
      website: "https://phelpscountyfocus.com/services/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "200 N Main St, Rolla, MO 65401",
    genderChanges: false,
    voteClerkAddress:
    `Phelps County Clerk's Office
     200 N MAIN ST STE 133
     ROLLA, MO 65401`,
  },
  {
    name: "Pike",
    court: {
      address: "115 W Main St #4, Bowling Green, MO 63334",
      city: "Bowling Green",
      phone: "(573) 324-5582",
      specificCourtInfo: "",
      circuit: "45th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Pike County News",
      website: "https://www.pikecountynews.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "115 W Main St #4, Bowling Green, MO 63334",
    genderChanges: false,
    voteClerkAddress:
    `Pike County Clerk's Office
     115 W MAIN ST
     BOWLING GREEN, MO 63334`,
  },
  {
    name: "Platte",
    court: {
      address: "415 3rd St, Platte City, MO 64079",
      city: "Platte City",
      phone: "(816) 858-2232",
      specificCourtInfo: "This court only accepts payment by cash, cashiers check, or money order. Credit, debit, and personal checks are NOT accepted. The fee waiver may not cover the publication costs included in the filing fee. The court prefers in person filing so they can correct any mistakes then and there.",
      circuit: "6th",
    },
    filingFee: "$175.50",
    publications: [{
      name: "",
      website: "",
    }],
    courtPublishes: true,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "415 3rd St, Platte City, MO 64079",
    genderChanges: false,
    voteClerkAddress:
    `Board Of Elections Platte County
     PO BOX 560
     PLATTE CITY, MO 64079`,
  },
  {
    name: "Polk",
    court: {
      address: "102 E Broadway St, Bolivar, MO 65613",
      city: "Bolivar",
      phone: "(417) 777-6599",
      specificCourtInfo: "",
      circuit: "30th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "Bolivar Herald-Free Press",
      website: "https://bolivarmonews.com/contact-us/index.html",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "102 E Broadway St, Bolivar, MO 65613",
    genderChanges: false,
    voteClerkAddress:
    `Polk County Clerk's Office
     102 E BROADWAY, RM 11
     BOLIVAR, MO 65613`,
  },
  {
    name: "Pulaski",
    court: {
      address: "301 U.S. Route 66, Waynesville, MO 65583",
      city: "Waynesville",
      phone: "(573) 774-4701",
      specificCourtInfo: "If you do a mail in petition without the fee waiver the court will only accept a money order as payment for the filing fee.",
      circuit: "25th",
    },
    filingFee: "$132.50",
    publications: [{
      name: "The Dixon Pilot",
      website: "https://www.dixonpilot.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "301 U.S. Route 66, Waynesville, MO 65583",
    genderChanges: false,
    voteClerkAddress:
    `Pulaski County Clerk's Office
     301 HISTORIC 66 E, STE 101
     WAYNESVILLE, MO 65583`,
  },
  {
    name: "Putnam",
    court: {
      address: "1601 Main St #101, Unionville, MO 63565",
      city: "Unionville",
      phone: "(660) 947-2117",
      circuit: "3rd",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Unionville Republican",
      website: "https://northmissourinews.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "1601 Main St #101, Unionville, MO 63565",
    genderChanges: false,
    voteClerkAddress:
    `Putnam County Clerk's Office
     1601 MAIN ST. ROOM 101
     UNIONVILLE, MO 63565`,
  },
  {
    name: "Ralls",
    court: {
      address: "311 S Main St, New London, MO 63459",
      city: "New London",
      phone: "(573) 985-7111",
      circuit: "10th",
    },
    filingFee: "$175",
    publications: [{
      name: "Monroe Ralls",
      website: "https://www.monroe-ralls.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "311 S Main St, New London, MO 63459",
    genderChanges: false,
    voteClerkAddress:
    `Ralls County Clerk's Office
     P.O. Box 400
     New London, MO 63459`,
  },
  {
    name: "Randolph",
    court: {
      address: "372 State Hwy JJ Ste 2b, Huntsville, MO 65259",
      city: "Huntsville",
      phone: "(844) 277-6555",
      circuit: "14th",
    },
    filingFee: "$105",
    publications: [{
      name: "Monitor Index",
      website: "https://www.moberlymonitor.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "372 State Hwy JJ Ste 2b, Huntsville, MO 65259",
    genderChanges: false,
    voteClerkAddress:
    `Randolph County Clerk's Office
     372 Highway JJ, Suite 2B
     Huntsville, MO 65259`,
  },
  {
    name: "Ray",
    court: {
      address: "100 W Main St, Richmond, MO 64085",
      city: "Richmond",
      phone: "(816) 776-4502",
      specificCourtInfo: "The contact email for the Lawson review newspaper is lawsonreview@gmail.com their phone number is (816) 296-3412.",
      circuit: "8th",
    },
    filingFee: "$100.50",
    publications: [
      {
        name: "Excelsior Springs Standard",
        website: "https://www.excelsiorspringsstandard.com/form/contact-the-standard",
      },
      {
        name: "Lawson Review",
        website: "https://www.facebook.com/LawsonReview1979/",
      },
      {
        name: "Richmond News",
        website: "https://www.richmond-dailynews.com/contact",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 W Main St, Richmond, MO 64085",
    genderChanges: false,
    voteClerkAddress:
    `Ray County Clerk's Office
     100 WEST MAIN STREET
     RICHMOND, MO 64085`,
  },
  {
    name: "Reynolds",
    court: {
      address: "2319 Green St, Centerville, MO 63633",
      city: "Centerville",
      phone: "(573) 648-2494",
      circuit: "42nd",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Reynolds County Courier",
      website: "https://www.reynoldscountycourier.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "2319 Green St, Centerville, MO 63633",
    genderChanges: false,
    voteClerkAddress:
    `Reynolds County Clerk's Office
     P. O. BOX 10
     CENTERVILLE, MO 63633`,
  },
  {
    name: "Ripley",
    court: {
      address: "100 Court House Square, Doniphan, MO 63935",
      city: "Doniphan",
      phone: "(573) 996-5500",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method.",
      circuit: "36th",
    },
    filingFee: "$100.50",
    publications: [
      {
        name: "Daily American Republic",
        website: "https://www.darnews.com/contact-us",
      },
      {
        name: "Prospect News",
        website: "https://www.theprospectnews.com/contact-us",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 Court House Square, Doniphan, MO 63935",
    genderChanges: false,
    voteClerkAddress:
    `Ripley County Clerk's Office
     100 COURTHOUSE SQUARE, SUITE #2
     DONIPHAN, MO 63935`,
  },
  {
    name: "Saline",
    court: {
      address: "19 E Arrow St # 301, Marshall, MO 65340",
      city: "Marshall",
      phone: "(660) 886-6988",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method. The Sweet Springs Herald contact email is sweetspringsherald@gmail.com and their phone number is (660) 335-6366.",
      circuit: "15th",
    },
    filingFee: "$175",
    publications: [
      {
        name: "Marshall Democrat-News",
        website: "https://www.marshallnews.com/contact-us/",
      },
      {
        name: "Slater Main Street News",
        website: "https://www.slatermainstreetnews.com/contact-us/",
      },
      {
        name: "Sweet Springs Herald",
        website: "https://www.facebook.com/TheSweetSpringsHerald/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "19 E Arrow St # 301, Marshall, MO 65340",
    genderChanges: false,
    voteClerkAddress:
    `Saline County Clerk's Office
     9 E North St
     MARSHALL, MO 65340`,
  },
  {
    name: "Schuyler",
    court: {
      address: "102 S Congress St Suite 103, Lancaster, MO 63548",
      city: "Lancaster",
      phone: "(660) 956-9058",
      specificCourtInfo: "If you are born in Missouri this court sends a copy of your name change judgement and an Application to update you birth certificate to the Missouri Vital Records as part of the name change process and charges an additional $30 for it somewhere in the process. This is not covered by the fee waiver.",
      circuit: "1st",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Schuyler County Times",
      website: "https://www.schuylercountytimes.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Schuyler County Clerk's Office
     PO Box 187
     Lancaster, MO 63548`,
  },
  {
    name: "Scotland",
    court: {
      address: "117 S Market St, Memphis, MO 63555",
      city: "Memphis",
      phone: "(660) 465-8605",
      specificCourtInfo: "This court sends out the application to the newspaper on your behalf but you still have to pay the newspaper yourself.",
      circuit: "1st",
    },
    filingFee: "$150",
    publications: [{
      name: "Memphis Democrat",
      website: "https://www.memphisdemocrat.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Scotland County Clerk's Office
     231 S MARKET ST., ROOM 2
     MEMPHIS, MO 63555`,
  },
  {
    name: "Scott",
    court: {
      address: "131 S Winchester St, Benton, MO 63736",
      city: "Benton",
      phone: "(573) 545-3549",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash.",
      circuit: "33rd",
    },
    filingFee: "$130.50",
    publications: [{
      name: "Sikeston Standard Democrat",
      website: "https://www.standard-democrat.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "131 S Winchester St, Benton, MO 63736",
    genderChanges: false,
    voteClerkAddress:
    `Scott County Clerk's Office
     PO BOX 188
     BENTON, MO 63736`,
  },
  {
    name: "Shannon",
    court: {
      address: "18529 Main St, Eminence, MO 65466",
      city: "Eminence",
      phone: "(573) 226-3414",
      circuit: "37th",
    },
    filingFee: "$128.50",
    publications: [{
      name: "The Current Wave",
      website: "https://www.currentwave.news/contact",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "18529 Main St, Eminence, MO 65466",
    genderChanges: false,
    voteClerkAddress:
    `Shannon County Clerk's Office
     PO Box 187
     Eminence, MO 65466`,
  },
  {
    name: "Shelby",
    court: {
      address: "100 E Main St, Shelbyville, MO 63469",
      city: "Shelbyville",
      phone: "(573) 633-2151",
      circuit: "41st",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Shelby County Herald",
      website: "https://www.shelbycountyherald.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 E Main St, Shelbyville, MO 63469",
    genderChanges: false,
    voteClerkAddress:
    `Shelby County Clerk's Office
     P.O. Box 186
     Shelbyville, MO 63469`,
  },
  {
    name: "St. Charles",
    court: {
      address: "300 N 2nd St, St Charles, MO 63301",
      city: "St Charles",
      phone: "(636) 949-3080",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes and you can leave the same day with a court date, if you select mail in filing do not send cash.",
      circuit: "11th",
    },
    filingFee: "$128.50",
    publications: [
      {
        name: "St. Charles Business Record",
        website: "https://molawyersmedia.com/about/contact-us/",
      },
      {
        name: "St. Charles County Journal",
        website: "https://pulselegal.com/saint-charles-county-journal/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "300 N 2nd St, St Charles, MO 63301",
    genderChanges: false,
    voteClerkAddress:
    `St. Charles County Clerk's Office
     397 TURNER BLVD
     ST. PETERS, MO 63376`,
  },
  {
    name: "St. Clair",
    court: {
      address: "655 2nd St, Osceola, MO 64776",
      city: "Osceola",
      phone: "(417) 646-2226",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes and you can leave the same day with a court date. If you select mail in filing do not send cash or personal check, only cashiers check or money orders are accepted.",
      circuit: "27th",
    },
    filingFee: "$102.50",
    publications: [{
      name: "St. Clair County Courier",
      website: "https://stclaircourier.com/lakesun/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "655 2nd St, Osceola, MO 64776",
    genderChanges: false,
    voteClerkAddress:
    `St. Clair County Clerk's Office
     P. O. BOX 525
     OSCEOLA, MO 64776`,
  },
  {
    name: "St. Francois",
    court: {
      address: "1 N Washington St #102, Farmington, MO 63640",
      city: "Farmington",
      phone: "(573) 756-5755",
      circuit: "24th",
    },
    filingFee: "$95.50",
    publications: [{
      name: "Daily Journal",
      website: "https://www.dailyjournalonline.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `St. Francois County Clerk's Office
     1101 WEBER RD, STE 302
     FARMINGTON, MO 63640`,
  },
  {
    name: "St. Louis (City)",
    court: {
      address: "10 N Tucker Blvd, St. Louis, MO 63101",
      city: "St. Louis",
      phone: "(314) 622-4500",
      circuit: "22nd",
    },
    filingFee: "$177.50",
    publications: [{
      name: "St. Louis Daily Record",
      website: "https://molawyersmedia.com/submit-your-public-notice/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "Civil Circuit Court Building, 10 N Tucker Blvd, St. Louis, MO 63101",
    genderChanges: false,
    voteClerkAddress:
    `St. Louis City Election Board
    300 North Tucker Blvd. 1st floor
    St. Louis, MO 63101`,
  },
  {
    name: "St. Louis (County)",
    court: {
      address: "105 S Central Ave, Clayton, MO 63105",
      city: "Clayton",
      phone: "(314) 615-8029",
      specificCourtInfo: "You can also find contact information for the newspaper options here: https://stlcountycourts.com/courts-departments/probate-court/publication-options/",
      circuit: "21st",
    },
    filingFee: "$135.50",
    publications: [
      {
        name: "Legal Ledger",
        website: "https://pulselegal.com/st-louis-legal-ledger/",
      },
      {
        name: "St. Louis Countian",
        website: "https://molawyersmedia.com/submit-your-public-notice/",
      },
      {
        name: "St. Louis Post Dispatch",
        website: "https://www.stltoday.com/contact/#tracking-source=menu-nav",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "105 S Central Ave, Clayton, MO 63105",
    genderChanges: false,
    voteClerkAddress:
    `St. Louis County Board Of Elections
     725 Northwest Plaza Dr.
     St. Louis, MO 63074`,
  },
  {
    name: "Ste. Genevieve",
    court: {
      address: "55 3rd St, Ste. Genevieve, MO 63670",
      city: "Ste. Genevieve",
      phone: "(573) 883-2265",
      specificCourtInfo: "If you mail in your petition this court will ONLY accept money orders, no other payment method. There is a chance that this judge may simply approve the paperwork and mail it back without a hearing.",
      circuit: "24th",
    },
    filingFee: "$98.50",
    publications: [{
      name: "Ste. Genevieve Herald",
      website: "https://www.stegenherald.com/contact-us#1d000f97-5c99-488d-b9d5-73ed74d96a8c",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "55 3rd St, Ste. Genevieve, MO 63670",
    genderChanges: false,
    voteClerkAddress:
    `Ste. Genevieve County Clerk's Office
     55 S THIRD STREET, ROOM 2
     STE GENEVIEVE, MO 63670`,
  },
  {
    name: "Stoddard",
    court: {
      address: "403 S Prairie St, Bloomfield, MO 63825",
      city: "Bloomfield",
      phone: "(573) 568-4640",
      specificCourtInfo: "The contact email for the Bernie Banner, which is generally regarded as the cheaper of the 2 publication options, is thebanner@bpsnetworks.com and the phone number is (573) 293-6974.",
      circuit: "35th",
    },
    filingFee: "$102.50",
    publications: [
      {
        name: "Bernie Banner",
        website: "https://www.facebook.com/p/Bernie-Banner-100046026585959/",
      },
      {
        name: "Dexter Statesman",
        website: "https://www.dexterstatesman.com/contact-us",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "403 S Prairie St, Bloomfield, MO 63825",
    genderChanges: false,
    voteClerkAddress:
    `Stoddard County Clerk's Office
     PO BOX 110
     BLOOMFIELD, MO 63825`,
  },
  {
    name: "Stone",
    court: {
      address: "110 S Maple St Ste F, Galena, MO 65656",
      city: "Galena",
      phone: "(417) 357-6115",
      specificCourtInfo: "The sole in-county newspaper went out of business so the court offers 3 out of county options, if a new newspaper gets going in Stone county this will change. Send us a tip if it does.",
      circuit: "39th",
    },
    filingFee: "$100.50",
    publications: [
      {
        name: "Aurora Advertiser",
        website: "https://auroraadvertiser.net/contact-us/",
      },
      {
        name: "Branson Globe",
        website: "https://www.bransonglobe.com/contact-subscribe",
      },
      {
        name: "Branson Tri-Lakes News",
        website: "https://www.bransontrilakesnews.com/site/contact.html",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "110 S Maple St Ste F, Galena, MO 65656",
    genderChanges: false,
    voteClerkAddress:
    `Stone County Clerk's Office
     PO BOX 45
     GALENA, MO 65656`,
  },
  {
    name: "Sullivan",
    court: {
      address: "109 N Main St, Milan, MO 63556",
      city: "Milan",
      phone: "(660) 265-4717",
      circuit: "9th",
    },
    filingFee: "$102.50",
    publications: [{
      name: "Milan Standard",
      website: "https://www.themilanstandard.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Sullivan County Clerk's Office
     109 N Main St. Ste. 5
     Milan, MO 63556`,
  },
  {
    name: "Taney",
    court: {
      address: "266 Main St, Forsyth, MO 65653",
      city: "Forsyth",
      phone: "(417) 546-7200",
      circuit: "46th",
    },
    filingFee: "$90.50",
    publications: [{
      name: "Branson Globe",
      website: "https://www.bransonglobe.com/contact-subscribe",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "266 Main St, Forsyth, MO 65653",
    genderChanges: false,
    voteClerkAddress:
    `Taney County Clerk's Office
     P.O. BOX 156
     FORSYTH, MO 65653`,
  },
  {
    name: "Texas",
    court: {
      address: "519 N Grand Ave, Houston, MO 65483",
      city: "Houston",
      phone: "(417) 967-3742",
      circuit: "25th",
    },
    filingFee: "$132.50",
    publications: [
      {
        name: "Houston Herald",
        website: "https://houstonherald.com/contact-us/",
      },
      {
        name: "Licking News",
        website: "https://www.thelickingnews.net/contact-us/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "519 N Grand Ave, Houston, MO 65483",
    genderChanges: false,
    voteClerkAddress:
    `Texas County Clerk's Office
     210 N Grand, Ste. 311
     Houston, MO 65483`,
  },
  {
    name: "Vernon",
    court: {
      address: "100 W Cherry St, Nevada, MO 64772",
      city: "Nevada",
      phone: "(417) 448-2550",
      specificCourtInfo: "These clerks will likely be unhelpful with any questions that you may have during filing based on our calls with them, see the resources section or a local LGBT group for help instead if needed.",
      circuit: "28th",
    },
    filingFee: "$102.50",
    publications: [{
      name: "Nevada Daily Mail",
      website: "https://www.nevadadailymail.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "100 W Cherry St, Nevada, MO 64772",
    genderChanges: false,
    voteClerkAddress:
    `Vernon County Clerk's Office
     100 W CHERRY SUITE 6
     NEVADA, MO 64772`,
  },
  {
    name: "Warren",
    court: {
      address: "104 Booneslick Rd, Warrenton, MO 63383",
      city: "Warrenton",
      phone: "(636) 456-3363",
      specificCourtInfo: "The court prefers in person filing so they can correct any mistakes then and there, if you select mail in filing do not send cash. This court will also automatically file to update your birth certificate after the name change if you are born in Missouri, they charge an extra $15 for this and that is NOT covered by the fee waiver to my knowledge.",
      circuit: "12th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Warren County Record",
      website: "https://www.warrencountyrecord.com/contact-us/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "104 Booneslick Rd, Warrenton, MO 63383",
    genderChanges: false,
    voteClerkAddress:
    `Warren County Clerk's Office
     101 MOCKINGBIRD LN STE 302
     WARRENTON, MO 63383`,
  },
  {
    name: "Washington",
    court: {
      address: "102 N Missouri St # D, Potosi, MO 63664",
      city: "Potosi",
      phone: "(573) 438-6111",
      specificCourtInfo: "This court has a custom publication application that they will give you after the hearing to reduce your pubication cost, since they do this we have removed the states publication application from your forms.",
      circuit: "24th",
    },
    filingFee: "$95.50",
    publications: [{
      name: "The Independent Journal",
      website: "https://www.theijnews.com/about",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "102 N Missouri St # D, Potosi, MO 63664",
    genderChanges: false,
    voteClerkAddress:
    `Washington County Clerk's Office
     102 N Missouri St.
     Potosi, MO 63664`,
  },
  {
    name: "Wayne",
    court: {
      address: "104 Walnut St, Greenville, MO 63944",
      city: "Greenville",
      phone: "(573) 224-5600",
      circuit: "42nd",
    },
    filingFee: "$110",
    publications: [{
      name: "Wayne County Journal Banner",
      website: "https://www.waynecojournalbanner.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "104 Walnut St, Greenville, MO 63944",
    genderChanges: false,
    voteClerkAddress:
    `Wayne County Clerk's Office
     P. O. BOX 48
     GREENVILLE, MO 63944`,
  },
  {
    name: "Webster",
    court: {
      address: "101 S Crittenden St, Marshfield, MO 65706",
      city: "Marshfield",
      phone: "(417) 859-2006",
      circuit: "30th",
    },
    filingFee: "$138.50",
    publications: [
      {
        name: "Marshfield Mail",
        website: "https://marshfieldmail.com/contact-us/index.html",
      },
      {
        name: "Webster County Citizen",
        website: "https://www.webstercountycitizen.com/site/contact.html/",
      },
    ],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Webster County Clerk's Office
     101 S. CRITTENDEN ST., RM. 12
     MARSHFIELD, MO 65706`,
  },
  {
    name: "Worth",
    court: {
      address: "11 W 4th St, Grant City, MO 64456",
      city: "Grant City",
      phone: "(660) 564-2210",
      circuit: "4th",
    },
    filingFee: "$100.50",
    publications: [{
      name: "Sherican Express",
      website: "https://sheridanexpress.blogspot.com/",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: false,
    mailAddress: "",
    genderChanges: false,
    voteClerkAddress:
    `Worth County Clerk's Office
     PO Box 450
     Grant City, MO 64456`,
  },
  {
    name: "Wright",
    court: {
      address: "125 Court Square, Hartville, MO 65667",
      city: "Hartville",
      phone: "(417) 741-7121",
      circuit: "44th",
    },
    filingFee: "$93.50",
    publications: [{
      name: "Wright County Journal",
      website: "https://wrightcountyjournal.com/contact-us",
    }],
    courtPublishes: false,
    inPersonFile: true,
    onlineFile: false,
    mailFile: true,
    mailAddress: "125 Court Square, Hartville, MO 65667",
    genderChanges: false,
    voteClerkAddress:
    `Wright County Clerk's Office
     PO BOX 98
     HARTVILLE, MO 65667`,
  },
];

export default missouriCounties;

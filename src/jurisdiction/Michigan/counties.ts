/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
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
 */

import { MichiganCounty } from "../../types/locality";

const michiganCounties: { [key: string]: MichiganCounty } = {
  Alcona: {
    court: {
      address: "106 5th Street, Harrisville MI 48740",
      city: "Harrisville",
      circuit: "23rd",
      phone: "(989) 724-9400",
      website: "https://alconacountymi.com/?page_id=430",
    },
    fingerprintLocations: [
      {
        address: "214 W Main St, Harrisville, MI 48740",
        name: "Alcona County Sheriff",
        website: "http://alconasheriff.com/",
      },
    ],
    publications: [
      {
        name: "Alcona County Review",
        website: "https://www.alconareview.com/index.php/contact-us-main",
      },
    ],
  },
  Alger: {
    court: {
      address: "101 Court Street, Munising, MI 49862",
      city: "Munising",
      circuit: "11th",
      phone: "(906) 387-2080",
      website: "https://www.algercounty.gov/courts/probate_court/index.php",
    },
    fingerprintLocations: [
      {
        address: "101 E Varnum St, Munising, MI 49862",
        name: "Alger County Sheriff",
        website: "https://www.algercounty.gov/departments/sheriff/index.php",
      },
    ],
    publications: [
      {
        name: "The Mining Journal",
        website: "https://www.miningjournal.net/contact-us/",
      },
    ],
  },
  Allegan: {
    court: {
      address: "113 Chestnut St, Allegan, MI 49010",
      city: "Allegan",
      circuit: "48th",
      phone: "(269) 673-0534",
      website:
        "https://www.allegancounty.org/courts-law-enforcement/family-court",
    },
    fingerprintLocations: [
      {
        address: "7810 Shaver Rd, Portage, MI 49024",
        name: "Portage Police Department",
        website: "https://www.portagemi.gov/faq.aspx?qid=198",
      },
    ],
    publications: [
      {
        name: "Allegan County News",
        website: "https://wilcoxnewspapers.com/contact/",
      },
    ],
  },
  Alpena: {
    court: {
      address: "720 W Chisholm St # 1, Alpena, MI 49707",
      city: "Alpena",
      circuit: "26th",
      phone: "(989) 354-9573",
      website: "https://alpenacounty.org/circuit/",
    },
    fingerprintLocations: [
      {
        address: "4900 M-32, Alpena, MI 49707",
        name: "Alpena County Sheriff",
        website: "https://www.alpenasheriff.com/",
      },
    ],
    publications: [
      {
        name: "The Alpena News",
        website: "https://www.thealpenanews.com/contact-us/",
      },
    ],
  },
  Antrim: {
    court: {
      address: "205 E Cayuga St, Bellaire, MI 49615",
      city: "Bellaire",
      circuit: "13th",
      phone: "(231) 533-6353",
      website:
        "https://www.antrimcounty.org/departments___services_/courts/probate_court_and_family_division/name_change_petition.php",
    },
    fingerprintLocations: [
      {
        address: "107 Grove St, Bellaire, MI 49615",
        name: "Antrim County Sheriff",
        website:
          "https://www.antrimcounty.org/departments___services_/sheriff/index.php",
      },
    ],
    publications: [
      {
        name: "The Antrim Review",
        website: "https://www.antrimreview.net/",
      },
    ],
  },
  Arenac: {
    court: {
      address: "120 N Grove St, Standish, MI 48658",
      city: "Standish",
      circuit: "23rd",
      phone: "(989) 846-6941",
      website: "https://www.arenaccountymi.gov/Courts-Law/23rd-Circuit-Court/",
    },
    fingerprintLocations: [
      {
        address: "126 N Grove St, Standish, MI 48658",
        name: "Arenac County Sheriff",
        website: "https://www.arenaccountymi.gov/Sheriff/Sheriff/",
      },
    ],
    publications: [
      {
        name: "The Arenac County Independent",
        website: "https://www.arenacindependent.com/contact-us/",
      },
    ],
  },
  Baraga: {
    court: {
      address: "16 N 3rd St, L'Anse, MI 49946",
      city: "L'Anse",
      circuit: "12th",
      phone: "(906) 524-6100",
      website: "https://keweenawbay.org/government/departments/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "940 US Hwy 41, L'Anse, MI 49946",
        name: "Baraga County Sheriff",
        website:
          "https://keweenawbay.org/government/departments/county-sheriff/",
      },
    ],
    publications: [
      {
        name: "L'Anse Sentinel",
        website: "https://lansesentinel.net/contact-us/",
      },
    ],
  },
  Barry: {
    court: {
      address: "206 W Court St #302, Hastings, MI 49058",
      city: "Hastings",
      circuit: "5th",
      phone: "(269) 945-1390",
      website:
        "https://www.barrycounty.org/courts_and_law_enforcement/family_court/change_of_name.php",
    },
    fingerprintLocations: [
      {
        address: "1212 W State St, Hastings, MI 49058",
        name: "Barry County Sheriff",
        website: "https://www.barrycounty.org/sheriff_s/fingerprinting.php",
      },
    ],
    publications: [
      {
        name: "The Hastings Banner",
        website: "https://www.hastingsbanner.com/contact",
      },
    ],
  },
  Bay: {
    court: {
      address: "1230 Washington Ave # 715, Bay City, MI 48708",
      city: "Bay City",
      circuit: "18th",
      phone: "(989) 895-4206",
      website: "https://www.baycounty-mi.gov/Probate-Family-Court/Default.aspx",
    },
    fingerprintLocations: [
      {
        address: "503 3rd St, Bay City, MI 48708",
        name: "Bay County Sheriff",
        website:
          "https://www.baycounty-mi.gov/Clerk/ConcealedPistolPermitsCCW.aspx",
      },
    ],
    publications: [
      {
        name: "The Bay City Times",
        website: "https://www.facebook.com/baycitytimes/about",
      },
    ],
  },
  Benzie: {
    court: {
      address: "448 Court Pl, Beulah, MI 49617",
      city: "Beulah",
      circuit: "19th",
      phone: "(231) 882-0023",
      website:
        "https://www.benzieco.net/government/19th_judicial_circuit_court/index.php",
    },
    fingerprintLocations: [
      {
        address: "505 S Michigan Ave, Beulah, MI 49617",
        name: "Benzie County Sheriff",
        website:
          "https://www.benzieco.net/government/county_sheriff_s_office/services/finger_printing_services.php",
      },
    ],
    publications: [
      {
        name: "The Benzie County Record Patriot",
        website: "https://www.recordpatriot.com/contact/",
      },
    ],
  },
  Berrien: {
    court: {
      address: "811 Port St, St Joseph, MI 49085",
      city: "St Joseph",
      circuit: "13th",
      phone: "(269) 983-7111",
      website: "https://www.berriencounty.org/1681/Name-Changes",
    },
    fingerprintLocations: [
      {
        address: "919 Port St, St Joseph, MI 49085",
        name: "Berrien County Sheriff",
        website:
          "https://www.google.com/maps/place/Berrien+County+Sheriff's+Department/@42.1099559,-86.4780782,19z/data=!4m14!1m7!3m6!1s0x8810c6984226ad23:0xe989e7d2ad82e3be!2sBerrien+County+Courthouse!8m2!3d42.1099559!4d-86.4775466!16s%2Fg%2F1tc_rm47!3m5!1s0x8810c698dfd50e3d:0x81f9c43f5da44cb4!8m2!3d42.1096714!4d-86.476205!16s%2Fg%2F1wn3486d",
      },
    ],
    publications: [
      {
        name: "Berrien County Record",
        website: "https://bcrnews.net/contact-us",
      },
      {
        name: "Harbor Country News",
        website: "https://www.harborcountry-news.com/site/contact.html",
      },
      {
        name: "The Herald Palladium",
        website: "https://www.heraldpalladium.com/site/contact.html",
      },
      {
        name: "The Journal Era",
        website: "https://www.thejournalera.com/contact-us",
      },
      {
        name: "New Buffalo Times",
        website: "https://www.facebook.com/NewBuffaloTimesMichigan/",
      },
      {
        name: "Tri-City Record",
        website: "https://www.tricityrecord.com/contact",
      },
      {
        name: "Niles Daily Star",
        website: "https://www.leaderpub.com/services/about-us",
      },
    ],
  },
  Branch: {
    court: {
      address: "31 Division St, Coldwater, MI 49036",
      city: "Coldwater",
      circuit: "15th",
      phone: "(517) 279-4304",
      website: "https://www.countyofbranch.com/courts/15th-circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "57 Division St, Coldwater, MI 49036",
        name: "Coldwater Police Department",
        website:
          "http://www.coldwater.org/DocumentCenter/View/227/Public-Safety-Fee-Schedule-PDF?bidId=",
      },
    ],
    publications: [
      {
        name: "The Daily Reporter",
        website: "https://www.thedailyreporter.com/public-notices",
      },
    ],
  },
  Calhoun: {
    court: {
      address: "161 Michigan Ave, Battle Creek, MI 49014",
      city: "Battle Creek",
      circuit: "37th",
      phone: "(269) 969-6518",
      website:
        "https://www.calhouncountymi.gov/departments/courts/circuit_court/name_changes.php",
    },
    fingerprintLocations: [
      {
        address: "161 Michigan Ave, Battle Creek, MI 49014",
        name: "Calhoun County Sheriff",
        website:
          "https://www.calhouncountymi.gov/departments/sheriffs_office/records_division.php",
      },
    ],
    publications: [
      {
        name: "Battle Creek Shopper News",
        website: "https://www.thebattlecreekshopper.com/contact",
      },
      {
        name: "Battle Creek Enquirer",
        website: "https://help.battlecreekenquirer.com/contact-us",
      },
    ],
  },
  Cass: {
    court: {
      address: "60296 M-62, Cassopolis, MI 49031",
      city: "Cassopolis",
      circuit: "43rd",
      phone: "(269) 445-4412",
      website: "https://casscourtsmi.org/name-changes/",
    },
    fingerprintLocations: [
      {
        address: "117 S Broadway St # 100, Cassopolis, MI 49031",
        name: "Cassopolis Police Department",
        website: "https://www.casscountymi.org/faq.aspx?qid=101",
      },
    ],
    publications: [
      {
        name: "Leader Publications",
        website: "https://www.leaderpub.com/services/about-us/",
      },
    ],
  },
  Charlevoix: {
    court: {
      address: "301 State St #7, Charlevoix, MI 49720",
      city: "Charleviox",
      circuit: "33rd",
      phone: "(231) 547-7277",
      website:
        "https://www.charlevoixcounty.org/the_7th_probate_court/name_change.php",
    },
    fingerprintLocations: [
      {
        address: "1000 Grant St, Charlevoix, MI 49720",
        name: "Charlevoix County Sheriff",
        website:
          "https://www.charlevoixcounty.org/charlevoix_county_sheriff/index.php",
      },
    ],
    publications: [
      {
        name: "Charlevoix Legal News",
        website: "",
      },
    ],
  },
  Cheboygan: {
    court: {
      address: "870 S Main Street, Cheboygan, MI  49721",
      city: "Cheboygan",
      circuit: "53rd",
      phone: "(231) 627-8823",
      website:
        "https://www.cheboygancounty.net/courts-law-enforcement/probate-family-court/",
    },
    fingerprintLocations: [
      {
        address: "870 S Main Street, Cheboygan, MI  49721",
        name: "Cheboygan County Sheriff",
        website:
          "https://www.cheboygancounty.net/courts-law-enforcement/sheriffs-department/",
      },
    ],
    publications: [
      {
        name: "Cheboygan Daily Tribune",
        website: "https://www.cheboygannews.com/public-notices",
      },
    ],
  },
  Chippewa: {
    court: {
      address: "319 Court St # 8, Sault Ste. Marie, MI 49783",
      city: "Sault Ste. Marie",
      circuit: "50th",
      phone: "(906) 635-6314",
      website: "https://www.chippewacountymi.gov/pc-change-of-name",
    },
    fingerprintLocations: [
      {
        address: "325 Court St #3, Sault Ste. Marie, MI 49783",
        name: "Chippewa County Sheriff",
        website: "https://www.chippewacountymi.gov/sheriff-office",
      },
    ],
    publications: [
      {
        name: "Court gives form",
        website: "",
      },
    ],
  },
  Clare: {
    court: {
      address: "225 W Main St, Harrison, MI 48625",
      city: "Harrison",
      circuit: "55th",
      phone: "(989) 539-7109",
      website: "https://clareco.net/department/courts/#tab-2774",
    },
    fingerprintLocations: [
      {
        address: "100-198 S 4th St, Harrison, MI 48625",
        name: "Clare County Sheriff",
        website: "https://clareco.net/department/sheriff/",
      },
    ],
    publications: [
      {
        name: "Clare County Review",
        website: "https://wilcoxnewspapers.com/contact/",
      },
    ],
  },
  Clinton: {
    court: {
      address: "100 East State Street, St Johns MI 48879",
      city: "St Johns",
      circuit: "29th",
      phone: "(989) 224-5140",
      website:
        "https://www.clinton-county.org/FormCenter/Friend-of-the-Court-11/Name-Change-Request-Form-137",
    },
    fingerprintLocations: [
      {
        address: "1347 E Townsend Rd, St Johns, MI 48879",
        name: "Clinton County Sheriff",
        website: "https://www.clinton-county.org/241/Sheriffs-Office",
      },
    ],
    publications: [
      {
        name: "Clinton County News",
        website: "",
      },
    ],
  },
  Crawford: {
    court: {
      address: "200 Michigan Ave, Grayling, MI 49738",
      city: "Grayling",
      circuit: "46th",
      phone: "(989) 344-3260 ",
      website:
        "https://lookup.circuit46.org/Crawford/web%20brochures/c46c_Name_Change.pdf",
    },
    fingerprintLocations: [
      {
        address: "200 W Michigan Ave, Grayling, MI 49738",
        name: "Crawford County Sheriff",
        website: "https://www.crawfordco.org/offices-departments/sheriff/",
      },
    ],
    publications: [
      {
        name: "Crawford County Avalanche",
        website: "http://www.crawfordcountyavalanche.com/",
      },
    ],
  },
  Delta: {
    court: {
      address: "310 Ludington St # 206, Escanaba, MI 49829",
      city: "Escanaba",
      circuit: "47th",
      phone: "(906) 789-5103",
      website: "https://deltacountymi.gov/47th-circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "300 Main St, Manistique, MI 49854",
        name: "Schoolcraft County Sheriff",
        website: "https://deltacountymi.gov/sheriffs-office/",
      },
    ],
    publications: [
      {
        name: "Daily Press",
        website: "https://www.dailypress.net/contact-us/",
      },
    ],
  },
  Dickinson: {
    court: {
      address: "705 S Stephenson Ave, Iron Mountain, MI 49801",
      city: "Iron Mountain",
      circuit: "41st",
      phone: "(906) 774-1555",
      website:
        "https://www.dickinsoncountymi.gov/government/county_departments/courts.php",
    },
    fingerprintLocations: [
      {
        address: "111 E Fleshiem St, Iron Mountain, MI 49801",
        name: "Iron Mountain Police Department",
        website: "https://www.cityofironmountain.com/150/Police-Department",
      },
    ],
    publications: [
      {
        name: "Iron Mountain Daily News",
        website: "https://www.ironmountaindailynews.com/contact-us/",
      },
    ],
  },
  Eaton: {
    court: {
      address: "1045 Independence Blvd, Charlotte, MI 48813",
      city: "Charlotte",
      circuit: "56th",
      phone: "(517) 543-7500",
      website:
        "https://www.eatoncounty.org/DocumentCenter/View/851/Name-Change-PDF",
    },
    fingerprintLocations: [
      {
        address: "1025 Independence Blvd, Charlotte, MI 48813",
        name: "Eaton County Sheriff",
        website: "https://www.eatoncounty.org/424/Records-Division",
      },
    ],
    publications: [
      {
        name: "Charlotte Shopping Guide",
        website: "",
      },
      {
        name: "The County Journal",
        website: "https://county-journal.com/contact",
      },
      {
        name: "Grand Ledge Independent",
        website: "",
      },
      {
        name: "Eaton Rapids Community News",
        website: "",
      },
      {
        name: "Delta-Waverly News",
        website: "",
      },
      {
        name: "Eaton Rapids Flashes",
        website: "",
      },
    ],
  },
  Emmet: {
    court: {
      address: "200 Division St # G34, Petoskey, MI 49770",
      city: "Petoskey",
      circuit: "57th",
      phone: "(231) 348-1717",
      website: "https://www.emmetcounty.org/courts-sheriff/57th-circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "450 Bay St, Petoskey, MI 49770",
        name: "Emmet County Sheriff",
        website: "https://www.emmetcounty.org/courts-sheriff/sheriff/",
      },
    ],
    publications: [
      {
        name: "Petoskey News-Review",
        website: "https://www.petoskeynews.com/public-notices",
      },
    ],
  },
  Genesee: {
    court: {
      address: "900 Saginaw St, Flint, MI 48502",
      city: "Flint",
      circuit: "7th",
      phone: "(810) 424-4355",
      website: "https://7thcircuitcourt.com/",
    },
    fingerprintLocations: [
      {
        address: "1002 Saginaw St, Flint, MI 48502",
        name: "Genesee County Sheriff",
        website: "https://www.gcsomichigan.com/",
      },
    ],
    publications: [
      {
        name: "Genesee County Legal News",
        website: "",
      },
    ],
  },
  Gladwin: {
    court: {
      address: "401 W Cedar Ave #4, Gladwin, MI 48624",
      city: "Gladwin",
      circuit: "55th",
      phone: "(989) 426-9237",
      website: "https://gladwincounty-mi.gov/departments/55th-circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "501 W Cedar Ave, Gladwin, MI 48624",
        name: "Gladwin County Sheriff",
        website: "https://gladwincounty-mi.gov/departments/sheriffs-office/",
      },
    ],
    publications: [
      {
        name: "Gladwin County Record",
        website: "https://www.gladwinmi.com/contact",
      },
    ],
  },
  Gogebic: {
    court: {
      address: "200 N Moore St, Bessemer, MI 49911",
      city: "Bessemer",
      circuit: "32nd",
      phone: "(906) 663-4611",
      website:
        "https://www.gogebiccountymi.gov/government/courts/circuit_court/index.php",
    },
    fingerprintLocations: [
      {
        address: "100 W Iron St, Bessemer, MI 49911",
        name: "Gogebic County Sheriff",
        website:
          "https://www.gogebiccountymi.gov/government/county_offices/sheriff_s_office.php",
      },
    ],
    publications: [
      {
        name: "The Daily Globe",
        website: "https://www.yourdailyglobe.com/contact",
      },
    ],
  },
  "Grand Traverse": {
    court: {
      address: "328 Washington St STE 300, Traverse City, MI 49684",
      city: "Traverse City",
      circuit: "13th",
      phone: "(231) 922-4701",
      website: "https://www.gtcountymi.gov/2260/Forms",
    },
    fingerprintLocations: [
      {
        address: "8525 E Government Center Dr, Suttons Bay, MI 49682",
        name: "Leelanau County Sheriff",
        website: "https://www.leelanau.gov/sopublicnotices.asp",
      },
    ],
    publications: [
      {
        name: "Traverse City Record Eagle",
        website: "https://www.record-eagle.com/site/contact-us.html",
      },
    ],
  },
  Gratiot: {
    court: {
      address: "214 E Center St, Ithaca, MI 48847",
      city: "Ithaca",
      circuit: "29th",
      phone: "(989) 875-5215",
      website: "https://www.gratiotmi.com/324/29th-Circuit-Court",
    },
    fingerprintLocations: [
      {
        address: "226 E Center St, Ithaca, MI 48847",
        name: "Gratiot County Sheriff",
        website: "https://www.gratiotmi.com/344/Sheriffs-Office",
      },
    ],
    publications: [
      {
        name: "Gratiot County Herald",
        website: "https://gcherald.com/about",
      },
      {
        name: "The Morning Sun",
        website: "https://www.themorningsun.com/contact-us",
      },
    ],
  },
  Hillsdale: {
    court: {
      address: "29 N Howell St # 1, Hillsdale, MI 49242",
      city: "Hillsdale",
      circuit: "1st",
      phone: "(517) 437-4643",
      website:
        "https://www.co.hillsdale.mi.us/index.php/tm-courts/tsm-crt-probate",
    },
    fingerprintLocations: [
      {
        address: "165 Fayette St W, Hillsdale, MI 49242",
        name: "Hillsdale County Sheriff",
        website:
          "https://www.co.hillsdale.mi.us/index.php/m-hcso-services/m-hcso-fingerprint",
      },
    ],
    publications: [
      {
        name: "Hillsdale Daily News",
        website: "https://www.hillsdale.net/public-notices",
      },
    ],
  },
  Houghton: {
    court: {
      address: "401 E Houghton Ave, Houghton, MI 49931",
      city: "Houghton",
      circuit: "12th",
      phone: "(906) 482-3120",
      website:
        "https://www.houghtoncounty.net/directory-probate-family-court.php",
    },
    fingerprintLocations: [
      {
        address: "403 E Houghton Ave, Houghton, MI 49931",
        name: "Houghton County Sheriff",
        website: "https://www.houghtonsheriff.com/fingerprinting",
      },
    ],
    publications: [
      {
        name: "The Daily Mining Gazette",
        website: "https://www.mininggazette.com/contact-us/",
      },
    ],
  },
  Huron: {
    court: {
      address: "250 E Huron Ave # 206, Bad Axe, MI 48413",
      city: "Bad Axe",
      circuit: "52nd",
      phone: "(989) 269-9944",
      website: "https://www.co.huron.mi.us/circuit-court",
    },
    fingerprintLocations: [
      {
        address: "120 S Heisterman St, Bad Axe, MI 48413",
        name: "Huron County Sheriff",
        website: "https://www.co.huron.mi.us/sheriffs-records-office",
      },
    ],
    publications: [
      {
        name: "Huron County View",
        website: "https://huroncountyview.mihomepaper.com/contact-us/",
      },
    ],
  },
  Ingham: {
    court: {
      address: "303 West Kalamazoo Street, Lansing, MI 48933",
      city: "Lansing",
      circuit: "30th",
      phone: "(517) 483-6313",
      website:
        "https://cc.ingham.org/courts_and_sheriff/circuit_court/name_change.php",
    },
    fingerprintLocations: [
      {
        address: "630 N Cedar St, Mason, MI 48854",
        name: "Ingham County Sheriff",
        website: "https://sh.ingham.org/courts_and_sheriff/sheriffs_office/",
      },
    ],
    publications: [
      {
        name: "Lansing State Journal",
        website: "https://www.lansingstatejournal.com/public-notices",
      },
    ],
  },
  Ionia: {
    court: {
      address: "100 W Main St, Ionia, MI 48846",
      city: "Ionia",
      circuit: "8th",
      phone: "(616) 527-5322",
      website: "https://ioniacounty.org/courts/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "133 E Adams St, Ionia, MI 48846",
        name: "Ionia County Sheriff",
        website:
          "https://ioniacounty.org/public-safety/sheriff/sheriff-records/",
      },
    ],
    publications: [
      {
        name: "Ionia doesn't require publication you can skip this step.",
        website: "",
      },
    ],
  },
  Iosco: {
    court: {
      address: "422 W Lake St, Tawas City, MI 48763",
      city: "Tawas City",
      circuit: "23rd",
      phone: "(989) 362-3991",
      website: "https://iosco.net/courts/probate-court/",
    },
    fingerprintLocations: [
      {
        address: "428 W Lake St, Tawas City, MI 48763",
        name: "Iosco County Sheriff",
        website: "https://iosco.net/sheriffs-office/",
      },
    ],
    publications: [
      {
        name: "Iosco County News-Herald",
        website: "https://www.iosconews.com/site/contact.html",
      },
    ],
  },
  Iron: {
    court: {
      address: "2 S 6th St, Crystal Falls, MI 49920",
      city: "Crystal Falls",
      circuit: "41st",
      phone: "(906) 875-3121",
      website:
        "https://www.ironcounty.net/government/departments/justice-court/request-to-court",
    },
    fingerprintLocations: [
      {
        address: "2 S 6th St Ste 18, Crystal Falls, MI 49920",
        name: "Iron County Sheriff",
        website: "https://ironmi.com/sheriffs-office",
      },
    ],
    publications: [
      {
        name: "Iron County Reporter",
        website: "https://www.ironcountyreporter.com/contact",
      },
    ],
  },
  Isabella: {
    court: {
      address: "300 N Main St, Mt Pleasant, MI 48858",
      city: "Mt Pleasant",
      circuit: "21st",
      phone: "(989) 317-4097",
      website:
        "https://www.isabellacounty.org/law-justice/trial-court/divisions-services/probate-division/",
    },
    fingerprintLocations: [
      {
        address: "207 Court St # A, Mt Pleasant, MI 48858",
        name: "Isabella County Sheriff",
        website: "https://www.isabellacounty.org/law-justice/sheriffs-office/",
      },
    ],
    publications: [
      {
        name: "The Morning Sun",
        website: "https://www.themorningsun.com/",
      },
    ],
  },
  Jackson: {
    court: {
      address: "312 S Jackson St, Jackson, MI 49201",
      city: "Jackson",
      circuit: "4th",
      phone: "(517) 788-4290",
      website:
        "https://www.co.jackson.mi.us/DocumentCenter/View/274/Name-Change-PDF",
    },
    fingerprintLocations: [
      {
        address: "212 W Wesley St, Jackson, MI 49201",
        name: "Jackson County Sheriff",
        website: "https://www.co.jackson.mi.us/FAQ.aspx?TID=16",
      },
    ],
    publications: [
      {
        name: "Jackson Citizen Patriot",
        website: "https://www.mlive.com/mlive_contacts/page/contact_home.html",
      },
    ],
  },
  Kalamazoo: {
    court: {
      address: "227 W Michigan Ave, Kalamazoo, MI 49007",
      city: "Kalamazoo",
      circuit: "9th",
      phone: "(269) 383-8837",
      website:
        "https://www.kalcounty.com/courts/circuit/name_change_instructions.htm",
    },
    fingerprintLocations: [
      {
        address: "1720 Riverview Dr, Kalamazoo, MI 49004",
        name: "Kalamazoo Township Police",
        website: "https://www.ktwp.org/police-fingerprinting/",
      },
    ],
    publications: [
      {
        name: "Climax Crescent",
        website: "https://www.theclimaxcrescent.com/contact-us.php",
      },
    ],
  },
  Kalkaska: {
    court: {
      address: "605 N Birch St, Kalkaska, MI 49646",
      city: "Kalkaska",
      circuit: "46th",
      phone: "(231) 258-9031",
      website:
        "https://www.kalkaskacounty.net/government/michigan_courts/index.php",
    },
    fingerprintLocations: [
      {
        address: "605 N Birch St, Kalkaska, MI 49646",
        name: "Kalkaska County Sheriff",
        website:
          "https://kalkaskasheriff.net/divisions/records/fingerprints.php",
      },
    ],
    publications: [
      {
        name: "The Antrim Review",
        website:
          "https://www.antrimreview.net/?fbclid=IwAR0gUh3fuEySYqmdi0V3zmVJSJuwHOpGQGjcwoHb6DLgm6Fc7zM8eBi4Spg",
      },
    ],
  },
  Kent: {
    court: {
      address: "180 Ottawa Ave NW, Grand Rapids, MI 49503",
      city: "Grand Rapids",
      circuit: "17th",
      phone: "(616) 632-5440",
      website:
        "https://www.kentcountymi.gov/1102/Name-Changes",
      specificCourtInfo:
        "The courts front entrance is on the southwest side of the building, closer to the river. Once you get through the metal detector you can take any elevator to the second floor. On that floor you then turn and walk towards the large window then go down the hallway left from there. The Probate court counter, which you want, is the second counter further along the hall. They accept cash, checks, credit cards, cashiers checks, or money orders.",
    },
    fingerprintLocations: [
      {
        address: "701 Ball Ave NE, Grand Rapids, MI 49503",
        name: "Kent County Sheriff",
        website: "https://www.accesskent.com/Sheriff/fingerprint.htm",
      },
    ],
    publications: [
      {
        name: "GR Press",
        website: "Email: legalads@mlive.com",
      },
    ],
  },
  Keweenaw: {
    court: {
      address: "5095 Fourth Street, Eagle River, MI 49950",
      city: "Eagle River",
      circuit: "12th",
      phone: "(906) 337-1927",
      website: "https://www.keweenawcountyonline.org/department-probate.php",
    },
    fingerprintLocations: [
      {
        address: "5105 4th, Eagle River, MI 49950",
        name: "Keweenaw County Sheriff",
        website: "https://keweenawcountyonline.org/department-sheriff.php",
      },
    ],
    publications: [
      {
        name: "The Daily Mining Gazette",
        website: "https://www.mininggazette.com/contact-us/",
      },
    ],
  },
  Lake: {
    court: {
      address: "800 E 10th St #300, Baldwin, MI 49304",
      city: "Baldwin",
      circuit: "51st",
      phone: "(231) 745-4614",
      website: "http://lakecounty-michigan.com/Courthouse/TrialCourt.aspx",
    },
    fingerprintLocations: [
      {
        address: "1153 Michigan Ave, Baldwin, MI 49304",
        name: "Lake County Jail",
        website:
          "http://lakecounty-michigan.com/PublicSafety/SheriffsOffice.aspx",
      },
    ],
    publications: [
      {
        name: "The Lake County Star",
        website: "https://www.lakecountystar.com/contact/",
      },
    ],
  },
  Lapeer: {
    court: {
      address: "255 Clay St, Lapeer, MI 48446",
      city: "Lapeer",
      circuit: "40th",
      phone: "(810) 667-0358",
      website:
        "https://www.lapeercountymi.gov/courts/40th_circuit_court/index.php",
    },
    fingerprintLocations: [
      {
        address: "3231 John Conley Dr, Lapeer, MI 48446",
        name: "Lapeer County Sheriff",
        website: "https://www.lapeercountymi.gov/departments/sheriff/index.php",
      },
    ],
    publications: [
      {
        name: "The County Press",
        website: "https://thecountypress.mihomepaper.com/contact-us-2/",
      },
      {
        name: "Tri-City Times",
        website: "https://tricitytimes-online.com/contact/",
      },
    ],
  },
  Leelanau: {
    court: {
      address: "8527 E Government Center Dr #203, Suttons Bay, MI 49682",
      city: "Suttons Bay",
      circuit: "13th",
      phone: "(231) 256-9803",
      website: "https://www.leelanau.gov/howdoia.asp?rid=14",
    },
    fingerprintLocations: [
      {
        address: "8525 E Government Center Dr, Suttons Bay, MI 49682",
        name: "Leelanau County Sheriff",
        website: "https://www.leelanau.gov/sopublicnotices.asp",
      },
    ],
    publications: [
      {
        name: "Leelanau Enterprise",
        website: "https://www.leelanaunews.com/contact",
      },
    ],
  },
  Lenawee: {
    court: {
      address: "425 N Main St #101, Adrian, MI 49221",
      city: "Adrian",
      circuit: "39th",
      phone: "(517) 264-4661",
      website: "https://www.lenawee.mi.us/596/Name-Changes",
    },
    fingerprintLocations: [
      {
        address: "405 N Winter St, Adrian, MI 49221",
        name: "Lenawee County Sheriff",
        website: "https://www.lenawee.mi.us/944/Fingerprinting",
      },
    ],
    publications: [
      {
        name: "The Blissfield Advance",
        website: "http://blissfieldadvance.com/contact",
      },
      {
        name: "The Clinton Local",
        website: "https://www.theclintonlocal.com",
      },
      {
        name: "The Daily Telegram",
        website: "https://www.lenconnect.com/public-notices",
      },
      {
        name: "Hudson Post-Gazette",
        website: "https://www.hudsonpg.com/?page_id=29",
      },
      {
        name: "State Line Observer",
        website: "https://www.statelineobserver.com/contact-us",
      },
      {
        name: "The Tecumseh Herald",
        website: "https://www.tecumsehherald.com/contact",
      },
    ],
  },
  Livingston: {
    court: {
      address: "204 S Highlander Way # 4, Howell, MI 48843",
      city: "Howell",
      circuit: "44th",
      phone: "(517) 546-9816",
      website: "https://www.livgov.com/courts/circuit/clerk/pages/name.aspx",
    },
    fingerprintLocations: [
      {
        address: "150 S Highlander Way, Howell, MI 48843",
        name: "Livingston County Sheriff",
        website: "https://www.livgov.com/sheriff/Pages/FAQ.aspx",
      },
    ],
    publications: [
      {
        name: "Court gives form",
        website: "",
      },
    ],
  },
  Luce: {
    court: {
      address: "407 W Harrie St, Newberry, MI 49868",
      city: "Newberry",
      circuit: "11th",
      phone: "(906) 643-7303",
      website: "https://www.lucecountymi.com/name-changes",
    },
    fingerprintLocations: [
      {
        address: "411 W Harrie St, Newberry, MI 49868",
        name: "Luce County Sheriff",
        website: "https://www.lucecountymi.com/sheriffs-department",
      },
    ],
    publications: [
      {
        name: "The Newberry News",
        website: "https://mynewberrynews.com/contact-us/",
      },
    ],
  },
  Mackinac: {
    court: {
      address: "100 S Marley St, St Ignace, MI 49781",
      city: "St Ignace",
      circuit: "11th",
      phone: "(906) 643-7303",
      website:
        "https://www.mackinaccounty.net/departments/courts/probate-court/name-changes/",
    },
    fingerprintLocations: [
      {
        address: "100 S Marley St, St Ignace, MI 49781",
        name: "Mackinac County Sheriff",
        website: "https://www.mackinaccounty.net/departments/sheriffs-office/",
      },
    ],
    publications: [
      {
        name: "The St. Ignace News",
        website: "https://www.stignacenews.com/contact-us/",
      },
    ],
  },
  Macomb: {
    court: {
      address: "40 N Main St, Mt Clemens, MI 48043",
      city: "Mt Clemens",
      circuit: "16th",
      phone: "(586) 469-7171",
      website: "https://clerk.macombgov.org/Clerk-Forms",
    },
    fingerprintLocations: [
      {
        address: "43565 Elizabeth Rd, Mt Clemens, MI 48043",
        name: "Macomb County Sheriff",
        website: "https://sheriff.macombgov.org/Sheriff-RecordsOffice",
      },
    ],
    publications: [
      {
        name: "Macomb Legal News",
        website: "",
      },
    ],
  },
  Manistee: {
    court: {
      address: "415 Third Street, Manistee, MI 49660",
      city: "Manistee",
      circuit: "19th",
      phone: "(231) 723-1645",
      website: "https://www.manisteecountymi.gov/229/Circuit",
    },
    fingerprintLocations: [
      {
        address: "1525 E Parkdale Ave, Manistee, MI 49660",
        name: "Manistee County Sheriff",
        website: "https://www.manisteecountymi.gov/158/Sheriffs-Office",
      },
    ],
    publications: [
      {
        name: "Manistee News Advocate",
        website: "https://www.manisteenews.com/contact/",
      },
    ],
  },
  Marquette: {
    court: {
      address: "234 W Baraga Ave, Marquette, MI 49855",
      city: "Marquette",
      circuit: "25th",
      phone: "(906) 225-8217",
      website: "https://www.co.marquette.mi.us/departments/courts/index.php",
    },
    fingerprintLocations: [
      {
        address: "300 W Baraga Ave, Marquette, MI 49855",
        name: "Marquette City Police Dept.",
        website: "https://www.marquettemi.gov/fingerprinting/",
      },
    ],
    publications: [
      {
        name: "The Mining Journal",
        website: "https://www.miningjournal.net/contact-us/",
      },
    ],
  },
  Mason: {
    court: {
      address: "304 E Ludington Ave, Ludington, MI 49431",
      city: "Ludington",
      circuit: "51st",
      phone: "(231) 843-4791",
      website: "https://www.masoncounty.net/courts/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "302 N Delia St, Ludington, MI 49431",
        name: "Mason County Sheriff",
        website: "https://masoncountysheriff.org/finger-printing/",
      },
    ],
    publications: [
      {
        name: "Ludington Daily News",
        website:
          "https://www.shorelinemedia.net/ludington_daily_news/site/contact.html",
      },
    ],
  },
  Mecosta: {
    court: {
      address: "400 Elm St, Big Rapids, MI 49307",
      city: "Big Rapids",
      circuit: "49th",
      phone: "(231) 592-0780",
      website: "https://www.mecostacounty.org/government/courts.php",
    },
    fingerprintLocations: [
      {
        address: "225 S Stewart Ave, Big Rapids, MI 49307",
        name: "Mecosta County Sheriff",
        website:
          "https://cms9files.revize.com/mecostacountymi/community%20corrections/LIVESCAN_HANDOUT_2019-01.pdf",
      },
    ],
    publications: [
      {
        name: "The Big Rapids Pioneer",
        website: "https://www.bigrapidsnews.com/contact/",
      },
    ],
  },
  Menominee: {
    court: {
      address: "839 10th Ave, Menominee, MI 49858",
      city: "Menominee",
      circuit: "41st",
      phone: "(906) 863-2634",
      website:
        "https://www.menomineecounty.com/departments/?department=4ebc313f7a83",
    },
    fingerprintLocations: [
      {
        address: "831 10th Ave, Menominee, MI 49858",
        name: "Menominee County Sheriff",
        website:
          "https://www.menomineecounty.com/departments/?department=85bf1f570592&subdepartment=1e942dd36f19",
      },
    ],
    publications: [
      {
        name: "The Menominee County Journal",
        website: "https://www.facebook.com/MenomineeCountyJournal",
      },
      {
        name: "The Eagle-Herald",
        website: "https://www.ehextra.com/site/contact.html",
      },
    ],
  },
  Midland: {
    court: {
      address: "301 W Main St, Midland, MI 48640",
      city: "Midland",
      circuit: "42nd",
      phone: "(989) 832-6735",
      website:
        "https://www.co.midland.mi.us/Courts/ProbateandJuvenileCourt/ProbateCourt/AdoptionsandNameChanges.aspx",
    },
    fingerprintLocations: [
      {
        address: "2727 Rodd St, Midland, MI 48640",
        name: "Midland County Sheriff",
        website: "https://co.midland.mi.us/sheriff",
      },
    ],
    publications: [
      {
        name: "Midland Daily News",
        website: "https://www.ourmidland.com/contact/",
      },
    ],
  },
  Missaukee: {
    court: {
      address: "111 S Canal St, Lake City, MI 49651",
      city: "Lake City",
      circuit: "28th",
      phone: "(231) 839-4967",
      website:
        "https://www.missaukee.org/government/courts___legal/28th_circuit_court/circuit_court_family_division.php",
    },
    fingerprintLocations: [
      {
        address: "110 S Pine St, Lake City, MI 49651",
        name: "Missaukee County Sheriff",
        website:
          "https://www.missaukee.org/departments/sheriff/fingerprinting.php",
      },
    ],
    publications: [
      {
        name: "Missaukee Sentinal",
        website: "https://www.missaukeesentinel.com/contact-us/",
      },
    ],
  },
  Monroe: {
    court: {
      address: "106 E 1st St, Monroe, MI 48161",
      city: "Monroe",
      circuit: "38th",
      phone: "(734) 240-7000",
      website: "https://www.co.monroe.mi.us/693/Name-Changes",
    },
    fingerprintLocations: [
      {
        address: "106 E 1st St, Monroe, MI 48161",
        name: "Monroe County Clerk",
        website: "https://www.co.monroe.mi.us/393/County-Clerk",
      },
    ],
    publications: [
      {
        name: "Monroe Evening News",
        website: "https://www.monroenews.com/public-notices",
      },
    ],
  },
  Montcalm: {
    court: {
      address: "625 N State St, Stanton, MI 48888",
      city: "Stanton",
      circuit: "8th",
      phone: "(989) 831-7316",
      website: "https://www.montcalm.us/626/Name-Changes",
    },
    fingerprintLocations: [
      {
        address: "659 N State St, Stanton, MI 48888",
        name: "Montcalm County Sheriff",
        website: "https://www.montcalm.us/239/Fingerprinting",
      },
    ],
    publications: [
      {
        name: "The Daily News",
        website: "https://www.thedailynews.cc/contact-us/",
      },
    ],
  },
  Montmorency: {
    court: {
      address: "12265 M-32, Atlanta, MI 49709",
      city: "Atlanta",
      circuit: "26th",
      phone: "(989) 354-9573",
      website: "https://alpenacounty.org/circuit/",
    },
    fingerprintLocations: [
      {
        address: "11045 M-32, Atlanta, MI 49709",
        name: "Montmorency County Sheriff",
        website: "https://www.montcounty.org/sheriff.html",
      },
    ],
    publications: [
      {
        name: "Montmorency Tribune",
        website: "https://www.montmorencytribune.com/contact.html",
      },
    ],
  },
  Muskegon: {
    court: {
      address: "990 Terrace St, Muskegon, MI 49442",
      city: "Muskegon",
      circuit: "14th",
      phone: "(231) 724-6251",
      website: "https://co.muskegon.mi.us/1627/Frequently-Asked-Questions",
    },
    fingerprintLocations: [
      {
        address: "990 Terrace St, Muskegon, MI 49442",
        name: "Muskegon County Sheriff",
        website: "https://www.co.muskegon.mi.us/184/Records",
      },
    ],
    publications: [
      {
        name: "Muskegon Legal News",
        website: "",
      },
    ],
  },
  Newaygo: {
    court: {
      address: "1092 E Newell St, White Cloud, MI 49349",
      city: "White Cloud",
      circuit: "27th",
      phone: "(231) 689-7252",
      website:
        "https://www.newaygocountymi.gov/departments/circuit-court/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "300 Williams St, White Cloud, MI 49349",
        name: "Newaygo County Sheriff",
        website:
          "https://www.newaygocountymi.gov/departments/county-sherrif/administrative-support/",
      },
    ],
    publications: [
      {
        name: "Times Indicator",
        website: "https://www.timesindicator.com/",
      },
    ],
  },
  Oakland: {
    court: {
      address: "1200 Telegraph Rd Building #12E, Pontiac, MI 48341",
      city: "Pontiac",
      circuit: "6th",
      phone: "(248) 858-0344",
      website:
        "https://www.oakgov.com/clerkrod/court-records/Pages/legal-name-change.aspx",
    },
    fingerprintLocations: [
      {
        address: "1200 N Telegraph Road Building #38E, Pontiac, MI 48341",
        name: "Oakland County Sheriff",
        website:
          "https://www.oakgov.com/sheriff/Corrections-Courts/Pages/Records-Unit.aspx",
      },
    ],
    publications: [
      {
        name: "Oakland Legal News",
        website: "",
      },
    ],
  },
  Oceana: {
    court: {
      address: "100 S State St # M-10, Hart, MI 49420",
      city: "Hart",
      circuit: "27th",
      phone: "(231) 873-3666",
      website:
        "https://oceana.mi.us/government/courts/probate-court/name-changes/",
    },
    fingerprintLocations: [
      {
        address: "216 Lincoln St, Hart, MI 49420",
        name: "Oceana County Sheriff",
        website: "https://oceana.mi.us/government/departments/sheriff/",
      },
    ],
    publications: [
      {
        name: "Oceana's Herald-Journal",
        website:
          "https://www.shorelinemedia.net/oceanas_herald_journal/site/contact.html",
      },
    ],
  },
  Ogemaw: {
    court: {
      address: "806 W Houghton Ave #106, West Branch, MI 48661",
      city: "West Branch",
      circuit: "34th",
      phone: "(989) 345-3560",
      website: "https://www.ocmi.us/34th-judicial-circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "912 W Houghton Ave, West Branch, MI 48661",
        name: "Ogemaw County Sheriff",
        website:
          "https://www.ocmi.us/wp-content/uploads/Sheriff-Correctional-FingerprintInfo.pdf",
      },
    ],
    publications: [
      {
        name: "Ogemaw County Herald",
        website: "https://www.ogemawherald.com/contact-us/",
      },
    ],
  },
  Ontonagon: {
    court: {
      address: "725 Greenland Rd, Ontonagon, MI 49953",
      city: "Ontonagon",
      circuit: "32nd",
      phone: "(906) 884-4699",
      website: "https://ontonagoncounty.org/county-offices/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "620 Conglomerate St, Ontonagon, MI 49953",
        name: "Ontonagon County Sheriff",
        website:
          "https://ontonagoncounty.org/county-offices/sheriff-department/",
      },
    ],
    publications: [
      {
        name: "The Ontonagon Herald",
        website: "https://ontonagonherald.com/",
      },
    ],
  },
  Osceola: {
    court: {
      address: "410 W Upton Ave #3, Reed City, MI 49677",
      city: "Reed City",
      circuit: "49th",
      phone: "(231) 832-6124",
      website:
        "https://cms4files.revize.com/osceolami/document_center/Probate%20Court/Name%20Change%20packet%203.31.22.pdf",
    },
    fingerprintLocations: [
      {
        address: "325 W Upton Ave, Reed City, MI 49677",
        name: "Osceola County Sheriff",
        website:
          "https://www.osceola-county.org/residents/county_departments/sheriff_1/index.php",
      },
    ],
    publications: [
      {
        name: "The Herald Review",
        website: "https://www.theheraldreview.com/contact",
      },
      {
        name: "The Marion Press",
        website: "https://www.facebook.com/themarionpress",
      },
    ],
  },
  Oscoda: {
    court: {
      address: "105 Court St, Mio, MI 48647",
      city: "Mio",
      circuit: "23rd",
      phone: "(989) 826-1111",
      website:
        "https://www.oscodacountymi.com/circuit-court/",
    },
    fingerprintLocations: [
      {
        address: "301 Morenci Ave, Mio, MI 48647",
        name: "Oscoda County Sheriff",
        website:
          "https://www.oscodacountymi.com/sheriff-department/",
      },
    ],
    publications: [
      {
        name: "Oscoda County Herald",
        website: "https://oscodacountyherald.column.us/place/BRCmjSmku0C6qs419Xbh?step=confirm-filer",
      },
    ],
  },
  Otsego: {
    court: {
      address: "800 Livingston Blvd #1d, Gaylord, MI 49735",
      city: "Gaylord",
      circuit: "46th",
      phone: "(989) 731-0204",
      website:
        "https://www.otsegocountymi.gov/DocumentCenter/View/1313/Name-Change-Packet-PDF",
    },
    fingerprintLocations: [
      {
        address: "124 S Court Ave, Gaylord, MI 49735",
        name: "Otsego County Sheriff",
        website: "https://www.otsegocountymi.gov/362/Records-Division",
      },
    ],
    publications: [
      {
        name: "Gaylord Herald Times",
        website: "https://www.facebook.com/ghtmi/",
      },
    ],
  },
  Ottawa: {
    court: {
      address: "12120 Fillmore St, West Olive, MI 49460",
      city: "West Olive",
      circuit: "20th",
      phone: "(616) 786-4108",
      website: "https://www.miottawa.org/Departments/CountyClerk/CourtRecords/",
    },
    fingerprintLocations: [
      {
        address: "12220 Fillmore St, West Olive, MI 49460",
        name: "Ottawa County Sheriff",
        website: "https://www.miottawa.org/Sheriff/gun-cpl.htm#appointments",
      },
    ],
    publications: [
      {
        name: "Holland Sentinel",
        website: "https://help.hollandsentinel.com/contact-us/",
      },
      {
        name: "Grand Haven Tribune",
        website: "https://www.grandhaventribune.com/",
      },
      {
        name: "MLive",
        email: "legalads@mlive.com",
      },
    ],
  },
  "Presque Isle": {
    court: {
      address: "151 E Huron Ave, Rogers City, MI 49779",
      city: "Rogers City",
      circuit: "53rd",
      phone: "(989) 734-2214",
      website: "https://presqueislecounty.org/53rd-family-division/",
    },
    fingerprintLocations: [
      {
        address: "267 N 2nd St, Rogers City, MI 49779",
        name: "Presque Isle County Sheriff",
        website: "http://www.presqueislesheriff.com/",
      },
    ],
    publications: [
      {
        name: "Presque Isle Advance",
        website: "https://piadvance.com/contact/",
      },
    ],
  },
  Roscommon: {
    court: {
      address: "500 Lake St, Roscommon, MI 48653",
      city: "Roscommon",
      circuit: "34th",
      phone: "(989) 275-1902",
      website: "http://www.roscommoncounty.net/153/34th-Circuit-Court",
    },
    fingerprintLocations: [
      {
        address: "111 S 2nd St, Roscommon, MI 48653",
        name: "Roscommon County Sheriff",
        website:
          "http://www.roscommoncounty.net/328/Frequently-Asked-Questions",
      },
    ],
    publications: [
      {
        name: "The Houghton Lake Resorter",
        website: "https://www.houghtonlakeresorter.com/contact-us/",
      },
    ],
  },
  Saginaw: {
    court: {
      address: "111 S Michigan Ave, Saginaw, MI 48602",
      city: "Saginaw",
      circuit: "10th",
      phone: "(989) 790-5544",
      website:
        "https://www.saginawcounty.com/media/x1ne1bik/name-change-guidelines.pdf",
      specificCourtInfo:
        "Enter the Saginaw County Building using the main doors facing Michigan Ave. You will need to pass though a security checkpoint including a metal detector. Go straight ahead to the elevator bank and take the elevator to level B. Exit left from the elevator and then another left. Just before the end of the hall, on the right, is the 10th Circuit Court Clerk Records Office.",
    },
    fingerprintLocations: [
      {
        address: "618 Cass St, Saginaw, MI 48602",
        name: "Saginaw County Sheriff",
        website: "https://www.saginawcounty.com/courts-public-safety/sheriff/",
      },
    ],
    publications: [
      {
        name: "M-Live",
        website: "Email: legalads@mlive.com",
      },
    ],
  },
  "St. Clair": {
    court: {
      address: "201 McMorran Blvd # 1100, Port Huron, MI 48060",
      city: "Port Huron",
      circuit: "31st",
      phone: "(810) 985-2200",
      website:
        "https://www.stclaircounty.org//offices/prosecuting_attorney/Directions.aspx",
    },
    fingerprintLocations: [
      {
        address: "1170 Michigan Rd, Port Huron, MI 48060",
        name: "St. Clair County Sheriff",
        website:
          "https://www.stclaircounty.org/offices/sheriff/service_bureau.aspx",
      },
    ],
    publications: [
      {
        name: "Times Herald",
        website: "https://www.thetimesherald.com/public-notices",
      },
    ],
  },
  "St. Joseph": {
    court: {
      address: "125 W Main St, Centreville, MI 49032",
      city: "Centreville",
      circuit: "45th",
      phone: "(269) 467-5531",
      website:
        "https://www.stjosephcountymi.org/government/courts-law-enforcement/county-clerk-45th-circuit-court-division/legal-name-change",
    },
    fingerprintLocations: [
      {
        address: "650 E Main St, Centreville, MI 49032",
        name: "St. Joseph County Sheriff",
        website:
          "https://www.stjosephcountymi.org/government/courts-law-enforcement/county-clerk-45th-circuit-court-division/legal-name-change",
      },
    ],
    publications: [
      {
        name: "Three Rivers Commercial",
        website: "https://www.facebook.com/threeriversnews",
      },
      {
        name: "Sturgis Journal",
        website: "https://www.sturgisjournal.com/public-notices",
      },
    ],
  },
  Sanilac: {
    court: {
      address: "60 W. Sanilac Ave., Sandusky, MI 48471",
      city: "Sandusky",
      circuit: "24th",
      phone: "810-648-3212",
      website:
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwifrIPsjon9AhWBnWoFHRaBCbwQFnoECBAQAQ&url=https%3A%2F%2Fwww.sanilaccounty.net%2FHandlers%2FFile.ashx%3FID%3D12004&usg=AOvVaw0611sDWMrHOnYKPe_cfQjh",
    },
    fingerprintLocations: [
      {
        address: "65 N Elk St, Sandusky, MI 48471",
        name: "Sanilac County Sheriff",
        website: "https://sanilacsheriff.org/fingerprinting",
      },
    ],
    publications: [
      {
        name: "Sanilac County News",
        website: "https://sanilaccountynews.mihomepaper.com/contact-us/",
      },
    ],
  },
  Schoolcraft: {
    court: {
      address: "300 Walnut St # 104, Manistique, MI 49854",
      city: "Manistique",
      circuit: "11th",
      phone: "(906) 341-3655",
      website:
        "https://www.schoolcraftcounty.net/government/courts-of-schoolcraft-county/11th-judicial-court-judge",
    },
    fingerprintLocations: [
      {
        address: "300 Main St, Manistique, MI 49854",
        name: "Schoolcraft County Sheriff",
        website:
          "http://www.schoolcraftcounty.net/government/elected-officials/sheriff",
      },
    ],
    publications: [
      {
        name: "Pioneer Tribune",
        website: "https://www.pioneertribune.com/contact-us/",
      },
    ],
  },
  Shiawassee: {
    court: {
      address: "208 N Shiawassee St, Corunna, MI 48817",
      city: "Corunna",
      circuit: "35th",
      phone: "(989) 743-2239",
      website: "https://www.shiawassee.net/Probate-Court/",
    },
    fingerprintLocations: [
      {
        address: "201 E McArthur St, Corunna, MI 48817",
        name: "Shiawassee County Sheriff",
        website: "https://www.shiawassee.net/Sheriff/FINGER-PRINTS.aspx",
      },
    ],
    publications: [
      {
        name: "The Argus Press",
        website: "https://www.argus-press.com/site/contact.html",
      },
    ],
  },
  Tuscola: {
    court: {
      address: "440 N State St #1, Caro, MI 48723",
      city: "Caro",
      circuit: "54th",
      phone: "(989) 673-3330",
      website: "https://www.tuscolacounty.org/forms/",
    },
    fingerprintLocations: [
      {
        address: "420 Court St #1, Caro, MI 48723",
        name: "Tuscola County Sheriff",
        website: "https://www.tuscolacounty.org/sheriff/",
      },
    ],
    publications: [
      {
        name: "The Advertiser",
        website: "https://tuscolatoday.com/contact-us/",
      },
    ],
  },
  "Van Buren": {
    court: {
      address: "212 E Paw Paw St # 240, Paw Paw, MI 49079",
      city: "Paw Paw",
      circuit: "36th",
      phone: "(269) 657-8200",
      website:
        "https://www.vanburencountymi.gov/DocumentCenter/View/2085/Name-Change-for-an-Adult-NC-case-type",
    },
    fingerprintLocations: [
      {
        address: "43255 60th Ave, Paw Paw, MI 49079",
        name: "Michigan State Police",
        website:
          "https://www.vanburencountymi.gov/DocumentCenter/View/2085/Name-Change-for-an-Adult-NC-case-type?bidId=",
      },
    ],
    publications: [
      {
        name: "Court gives form",
        website: "",
      },
    ],
  },
  Washtenaw: {
    court: {
      address: "101 E Huron St, Ann Arbor, MI 48104",
      city: "Ann Arbor",
      circuit: "22nd",
      phone: "(734) 222-3270",
      website: "https://www.washtenaw.org/1152/Name-Change",
    },
    fingerprintLocations: [
      {
        address: "2201 Hogback Rd, Ann Arbor, MI 48105",
        name: "Washtenaw County Sheriff",
        website: "https://www.washtenaw.org/1534/Fingerprinting-Information",
      },
    ],
    publications: [
      {
        name: "Court gives form",
        website: "",
      },
    ],
  },
  Wayne: {
    court: {
      address: "2 Woodward Ave, Detroit, MI 48226",
      city: "Detroit",
      circuit: "3rd",
      phone: "(313) 224-0157",
      website: "https://www.3rdcc.org/forms",
    },
    fingerprintLocations: [
      {
        address: "1150 Canton Ctr Rd, Canton, MI 48188",
        name: "Canton Township Police Department",
        website: "https://www.canton-mi.org/743/Contacts/",
      },
      {
        address: "2937 E Grand Blvd, Detroit, MI 48202",
        name: "Zoom Fingerprints",
        website: "https://www.zoomfingerprints.com/",
      },
      {
        address: "22976 W Outer Dr, Dearborn, MI 48124",
        name: "IdentoGO",
        website: "https://www.identogo.com/services/fingerprint-card",
      },
    ],
    publications: [
      {
        name: "Detroit Legal News",
        website: "",
      },
    ],
  },
  Wexford: {
    court: {
      address: "437 E. Division St, Cadillac, MI 49601",
      city: "Cadillac",
      circuit: "28th",
      phone: "(231) 779-9450",
      website: "https://wexfordcounty.org/?page_id=381",
    },
    fingerprintLocations: [
      {
        address: "1015 Lincoln St, Cadillac, MI 49601",
        name: "Wexford County Sheriff",
        website: "http://wexfordsheriff.org/Information/Services",
      },
    ],
    publications: [
      {
        name: "Cadillac News",
        website: "https://www.cadillacnews.com/site/contact.html",
      },
    ],
  },
};

export default michiganCounties;

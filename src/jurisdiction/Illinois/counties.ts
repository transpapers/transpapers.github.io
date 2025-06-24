/**
 * Copyright 2023-2025 Sasha Lišková and Stephanie Beckon
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

import { IllinoisCounty } from "../../types/locality";

const illinoisCounties: IllinoisCounty[] = [
  {
    name: "Adams",
    court: {
      address: "521 Vermont St # G20, Quincy, IL 62301",
      city: "Quincy",
      phone: "(217) 277-2100",
    },
  },
  {
    name: "Alexander",
    court: {
      address: "2000 Washington Ave # 4, Cairo, IL 62914",
      city: "Cairo",
      phone: "(618) 734-0107",
    },
  },
  {
    name: "Bond",
    court: {
      address: "200 W College Ave, Greenville, IL 62246",
      city: "Greenville",
      phone: "(618) 664-3208",
    },
  },
  {
    name: "Boone",
    court: {
      address: "601 N Main St, Belvidere, IL 61008",
      city: "Belvidere",
      phone: "(815) 544-0371",
    },
  },
  {
    name: "Brown",
    court: {
      address: "200 E Court St # 5, Mt Sterling, IL 62353",
      city: "Mt Sterling",
      phone: "(217) 773-2713",
    },
  },
  {
    name: "Bureau",
    court: {
      address: "700 S Main St, Princeton, IL 61356",
      city: "Princeton",
      phone: "(815) 872-2001",
    },
  },
  {
    name: "Calhoun",
    court: {
      address: "301 S County Rd, Hardin, IL 62047",
      city: "Hardin",
      phone: "(618) 576-2451",
    },
  },
  {
    name: "Carroll",
    court: {
      address: "301 N Main St, Mt Carroll, IL 61053",
      city: "Mt Carroll",
      phone: "(815) 244-0230",
    },
  },
  {
    name: "Cass",
    court: {
      address: "100 E Springfield St, Virginia, IL 62691",
      city: "Virginia",
      phone: "(217) 452-7225",
    },
  },
  {
    name: "Champaign",
    court: {
      address: "101 E Main St, Urbana, IL 61801",
      city: "Urbana",
      phone: "(217) 384-3725",
    },
  },
  {
    name: "Christian",
    court: {
      address: "101 S Main St, Taylorville, IL 62568",
      city: "Taylorville",
      phone: "(217) 824-4966",
    },
  },
  {
    name: "Clark",
    court: {
      address: "501 Archer Ave, Marshall, IL 62441",
      city: "Marshall",
      phone: "(217) 826-2811",
    },
  },
  {
    name: "Clay",
    court: {
      address: "111 Chestnut St, Louisville, IL 62858",
      city: "Louisville",
      phone: "(618) 665-3523",
    },
  },
  {
    name: "Clinton",
    court: {
      address: "850 Fairfax St, Carlyle, IL 62231",
      city: "Carlyle",
      phone: "(618) 594-6615",
    },
  },
  {
    name: "Coles",
    court: {
      address: "651 Jackson Ave # 128, Charleston, IL 61920",
      city: "Charleston",
      phone: "(217) 348-0516",
    },
  },
  {
    name: "Cook",
    court: {
      address: "50 W Washington St, Chicago, IL 60602",
      city: "Chicago",
      phone: "(312) 603-5030",
    },
  },
  {
    name: "Crawford",
    court: {
      address: "100 Court St, Robinson, IL 62454",
      city: "Robinson",
      phone: "(618) 544-3512",
    },
  },
  {
    name: "Cumberland",
    court: {
      address: "101 W Main St, Toledo, IL 62468",
      city: "Toledo",
      phone: "(217) 849-3601",
    },
  },
  {
    name: "DeKalb",
    court: {
      address: "133 W State St, Sycamore, IL 60178",
      city: "Sycamore",
      phone: "(815) 895-7131",
    },
  },
  {
    name: "DeWitt",
    court: {
      address: "201 W Washington St, Clinton, IL 61727",
      city: "Clinton",
      phone: "(217) 935-7750",
    },
  },
  {
    name: "Douglas",
    court: {
      address: "401 S Center St #204, Tuscola, IL 61953",
      city: "Tuscola",
      phone: "(217) 253-2352",
    },
  },
  {
    name: "DuPage",
    court: {
      address: "505 N County Farm Rd, Wheaton, IL 60187",
      city: "Wheaton",
      phone: "(630) 407-8700",
    },
  },
  {
    name: "Edgar",
    court: {
      address: "115 W Court St, Paris, IL 61944",
      city: "Paris",
      phone: "(217) 466-7447",
    },
  },
  {
    name: "Edwards",
    court: {
      address: "50 E Main St #12, Albion, IL 62806",
      city: "Albion",
      phone: "(618) 445-2016",
    },
  },
  {
    name: "Effingham",
    court: {
      address: "120 W Jefferson Ave, Effingham, IL 62401",
      city: "Effingham",
      phone: "(217) 342-4065",
    },
  },
  {
    name: "Fayette",
    court: {
      address: "221 S 7th St, Vandalia, IL 62471",
      city: "Vandalia",
      phone: "(618) 283-5009",
    },
  },
  {
    name: "Ford",
    court: {
      address: "200 W State St, Paxton, IL 60957",
      city: "Paxton",
      phone: "(217) 379-9420",
    },
  },
  {
    name: "Franklin",
    court: {
      address: "100 Public Square, Benton, IL 62812",
      city: "Benton",
      phone: "(618) 439-2011",
    },
  },
  {
    name: "Fulton",
    court: {
      address: "100 N Main St, Lewistown, IL 61542",
      city: "Lewistown",
      phone: "(309) 547-3041",
    },
  },
  {
    name: "Gallatin",
    court: {
      address: "484 Lincoln Blvd E, Shawneetown, IL 62984",
      city: "Shawneetown",
      phone: "(618) 269-3140",
    },
  },
  {
    name: "Greene",
    court: {
      address: "519 N Main St #2, Carrollton, IL 62016",
      city: "Carrollton",
      phone: "(217) 942-3421",
    },
  },
  {
    name: "Grundy",
    court: {
      address: "111 E Washington St # 30, Morris, IL 60450",
      city: "Morris",
      phone: "(815) 941-3256",
    },
  },
  {
    name: "Hamilton",
    court: {
      address: "100 S Jackson St #2, McLeansboro, IL 62859",
      city: "McLeansboro",
      phone: "(618) 643-3224",
    },
  },
  {
    name: "Hancock",
    court: {
      address: "500 Main St, Carthage, IL 62321",
      city: "Carthage",
      phone: "(217) 357-2616",
    },
  },
  {
    name: "Hardin",
    court: {
      address: "102 Market St, Elizabethtown, IL 62931",
      city: "Elizabethtown",
      phone: "(618) 287-2735",
    },
  },
  {
    name: "Henderson",
    court: {
      address: "307 Warren St, Oquawka, IL 61469",
      city: "Oquawka",
      phone: "(309) 867-3121",
    },
  },
  {
    name: "Henry",
    court: {
      address: "307 W Center St, Cambridge, IL 61238",
      city: "Cambridge",
      phone: "(309) 937-3752",
    },
  },
  {
    name: "Iroquois",
    court: {
      address: "550 S 10th St, Watseka, IL 60970",
      city: "Watseka",
      phone: "(815) 432-6950",
    },
  },
  {
    name: "Jackson",
    court: {
      address: "1001 Walnut St, Murphysboro, IL 62966",
      city: "Murphysboro",
      phone: "(618) 687-7300",
    },
  },
  {
    name: "Jasper",
    court: {
      address: "100 W Jourdan St #1, Newton, IL 62448",
      city: "Newton",
      phone: "(618) 783-2524",
    },
  },
  {
    name: "Jefferson",
    court: {
      address: "100 S 10th St # 101, Mt Vernon, IL 62864",
      city: "Mt Vernon",
      phone: "(618) 244-8008",
    },
  },
  {
    name: "Jersey",
    court: {
      address: "201 W Pearl St, Jerseyville, IL 62052",
      city: "Jerseyville",
      phone: "(618) 498-5571",
    },
  },
  {
    name: "Jo Daviess",
    court: {
      address: "330 N Bench St, Galena, IL 61036",
      city: "Galena",
      phone: "(815) 777-0037",
    },
  },
  {
    name: "Johnson",
    court: {
      address: "112 N 5th St, Vienna, IL 62995",
      city: "Vienna",
      phone: "(618) 658-4751",
    },
  },
  {
    name: "Kane",
    court: {
      address: "540 S Randall Rd, St. Charles, IL 60174",
      city: "St. Charles",
      phone: "(630) 232-3413",
    },
  },
  {
    name: "Kankakee",
    court: {
      address: "450 E Court St, Kankakee, IL 60901",
      city: "Kankakee",
      phone: "(815) 936-5700",
    },
  },
  {
    name: "Kendall",
    court: {
      address: "807 John St, Yorkville, IL 60560",
      city: "Yorkville",
      phone: "(630) 553-4183",
    },
  },
  {
    name: "Knox",
    court: {
      address: "200 S Cherry St, Galesburg, IL 61401",
      city: "Galesburg",
      phone: "(309) 345-6719",
    },
  },
  {
    name: "Lake",
    court: {
      address: "18 N County St, Waukegan, IL 60085",
      city: "Waukegan",
      phone: "(847) 377-3380",
    },
  },
  {
    name: "LaSalle",
    court: {
      address: "119 W Madison St #201, Ottawa, IL 61350",
      city: "Ottawa",
      phone: "(815) 434-8671",
    },
  },
  {
    name: "Lawrence",
    court: {
      address: "1100 State St, Lawrenceville, IL 62439",
      city: "Lawrenceville",
      phone: "(618) 943-2815",
    },
  },
  {
    name: "Lee",
    court: {
      address: "309 S Galena Ave Suite 320, Dixon, IL 61021",
      city: "Dixon",
      phone: "(815) 284-5234",
    },
  },
  {
    name: "Livingston",
    court: {
      address: "110 N Main St, Pontiac, IL 61764",
      city: "Pontiac",
      phone: "(815) 844-2602",
    },
  },
  {
    name: "Logan",
    court: {
      address: "601 Broadway St #21 24, Lincoln, IL 62656",
      city: "Lincoln",
      phone: "(217) 735-2376",
    },
  },
  {
    name: "Macon",
    court: {
      address: "253 E Wood St, Decatur, IL 62523",
      city: "Decatur",
      phone: "(217) 424-1454",
    },
  },
  {
    name: "Macoupin",
    court: {
      address: "201 E Main St, Carlinville, IL 62626",
      city: "Carlinville",
      phone: "(217) 854-3211",
    },
  },
  {
    name: "Madison",
    court: {
      address: "155 N Main St, Edwardsville, IL 62025",
      city: "Edwardsville",
      phone: "(618) 692-6240",
    },
  },
  {
    name: "Marion",
    court: {
      address: "100 E Main St #204, Salem, IL 62881",
      city: "Salem",
      phone: "(618) 548-3856",
    },
  },
  {
    name: "Marshall",
    court: {
      address: "122 N Prairie St, Lacon, IL 61540",
      city: "Lacon",
      phone: "(309) 246-6435",
    },
  },
  {
    name: "Mason",
    court: {
      address: "125 N Plum St, Havana, IL 62644",
      city: "Havana",
      phone: "(309) 543-6619",
    },
  },
  {
    name: "Massac",
    court: {
      address: "1 Superman Square # 2A, Metropolis, IL 62960",
      city: "Metropolis",
      phone: "(618) 524-5011",
    },
  },
  {
    name: "McDonough",
    court: {
      address: "1 Courthouse Square, Macomb, IL 61455",
      city: "Macomb",
      phone: "(309) 837-4889",
    },
  },
  {
    name: "McHenry",
    court: {
      address: "2200 N Seminary Ave #136, Woodstock, IL 60098",
      city: "Woodstock",
      phone: "(815) 334-4310",
    },
  },
  {
    name: "McLean",
    court: {
      address: "104 W Front St, Bloomington, IL 61701",
      city: "Bloomington",
      phone: "(309) 888-5301",
    },
  },
  {
    name: "Menard",
    court: {
      address: "102 S 7th St, Petersburg, IL 62675",
      city: "Petersburg",
      phone: "(217) 632-2615",
    },
  },
  {
    name: "Mercer",
    court: {
      address: "100 SE 3rd St, Aledo, IL 61231",
      city: "Aledo",
      phone: "(309) 582-7122",
    },
  },
  {
    name: "Monroe",
    court: {
      address: "100 S Main St, Waterloo, IL 62298",
      city: "Waterloo",
      phone: "(618) 939-8681",
    },
  },
  {
    name: "Montgomery",
    court: {
      address: "120 N Main St #125, Hillsboro, IL 62049",
      city: "Hillsboro",
      phone: "(217) 532-9546",
    },
  },
  {
    name: "Morgan",
    court: {
      address: "300 W State St, Jacksonville, IL 62650",
      city: "Jacksonville",
      phone: "(217) 243-5419",
    },
  },
  {
    name: "Moultrie",
    court: {
      address: "10 S Main St, Sullivan, IL 61951",
      city: "Sullivan",
      phone: "(217) 728-4622",
    },
  },
  {
    name: "Ogle",
    court: {
      address: "106 S 5th St # 300, Oregon, IL 61061",
      city: "Oregon",
      phone: "(815) 732-3201",
    },
  },
  {
    name: "Peoria",
    court: {
      address: "324 Main St G22, Peoria, IL 61602",
      city: "Peoria",
      phone: "(309) 672-6989",
    },
  },
  {
    name: "Perry",
    court: {
      address: "3794 IL-13, Pinckneyville, IL 62274",
      city: "Pinckneyville",
      phone: "(618) 357-6726",
    },
  },
  {
    name: "Piatt",
    court: {
      address: "101 W Washington St # 310, Monticello, IL 61856",
      city: "Monticello",
      phone: "(217) 762-4966",
    },
  },
  {
    name: "Pike",
    court: {
      address: "100 E Washington St, Pittsfield, IL 62363",
      city: "Pittsfield",
      phone: "(217) 285-6612",
    },
  },
  {
    name: "Pope",
    court: {
      address: "310 E Main St, Golconda, IL 62938",
      city: "Golconda",
      phone: "(618) 683-3941",
    },
  },
  {
    name: "Pulaski",
    court: {
      address: "500 Illinois Ave, Mound City, IL 62963",
      city: "Mound City",
      phone: "(618) 748-9300",
    },
  },
  {
    name: "Putnam",
    court: {
      address: "120 N 4th St, Hennepin, IL 61327",
      city: "Hennepin",
      phone: "(815) 925-7016",
    },
  },
  {
    name: "Randolph",
    court: {
      address: "1 W Taylor St, Chester, IL 62233",
      city: "Chester",
      phone: "(618) 826-5000",
    },
  },
  {
    name: "Richland",
    court: {
      address: "103 W Main St #21, Olney, IL 62450",
      city: "Olney",
      phone: "(618) 392-2151",
    },
  },
  {
    name: "Rock Island",
    court: {
      address: "1317 3rd Ave Suite 101, Rock Island, IL 61201",
      city: "Rock Island",
      phone: "(309) 558-3538",
    },
  },
  {
    name: "Saline",
    court: {
      address: "10 E Poplar St # 17, Harrisburg, IL 62946",
      city: "Harrisburg",
      phone: "(618) 253-5096",
    },
  },
  {
    name: "Sangamon",
    court: {
      address: "200 S 9th St #405, Springfield, IL 62701",
      city: "Springfield",
      phone: "(217) 753-6674",
    },
  },
  {
    name: "Schuyler",
    court: {
      address: "102 S Congress St, Rushville, IL 62681",
      city: "Rushville",
      phone: "(217) 322-4633",
    },
  },
  {
    name: "Scott",
    court: {
      address: "35 E Market St, Winchester, IL 62694",
      city: "Winchester",
      phone: "(217) 742-5217",
    },
  },
  {
    name: "Shelby",
    court: {
      address: "301 E Main St #12, Shelbyville, IL 62565",
      city: "Shelbyville",
      phone: "(217) 774-4212",
    },
  },
  {
    name: "St. Clair",
    court: {
      address: "10 Public Square A300, Belleville, IL 62220",
      city: "Belleville",
      phone: "(618) 277-6832",
    },
  },
  {
    name: "Stark",
    court: {
      address: "130 W Main St, Toulon, IL 61483",
      city: "Toulon",
      phone: "(309) 286-5941",
    },
  },
  {
    name: "Stephenson",
    court: {
      address: "15 N Galena Ave Ste 2, Freeport, IL 61032",
      city: "Freeport",
      phone: "(815) 235-8266",
    },
  },
  {
    name: "Tazewell",
    court: {
      address: "342 Court St #204, Pekin, IL 61554",
      city: "Pekin",
      phone: "(309) 477-2214",
    },
  },
  {
    name: "Union",
    court: {
      address: "309 W Market St, Jonesboro, IL 62952",
      city: "Jonesboro",
      phone: "(618) 833-5913",
    },
  },
  {
    name: "Vermilion",
    court: {
      address: "7 N Vermilion St, Danville, IL 61832",
      city: "Danville",
      phone: "(217) 554-7700",
    },
  },
  {
    name: "Wabash",
    court: {
      address: "401 N Market St, Mt Carmel, IL 62863",
      city: "Mt Carmel",
      phone: "(618) 262-5362",
    },
  },
  {
    name: "Warren",
    court: {
      address: "100 W Broadway, Monmouth, IL 61462",
      city: "Monmouth",
      phone: "(309) 734-5179",
    },
  },
  {
    name: "Washington",
    court: {
      address: "125 E Elm St, Nashville, IL 62263",
      city: "Nashville",
      phone: "(618) 327-4800",
    },
  },
  {
    name: "Wayne",
    court: {
      address: "301 E Main St #204, Fairfield, IL 62837",
      city: "Fairfield",
      phone: "(618) 842-7684",
    },
  },
  {
    name: "White",
    court: {
      address: "301 E Main St, Carmi, IL 62821",
      city: "Carmi",
      phone: "(618) 382-2321",
    },
  },
  {
    name: "Whiteside",
    court: {
      address: "200 E Knox St, Morrison, IL 61270",
      city: "Morrison",
      phone: "(815) 772-5188",
    },
  },
  {
    name: "Will",
    court: {
      address: "14 W Jefferson St # 201, Joliet, IL 60432",
      city: "Joliet",
      phone: "(815) 727-8592",
    },
  },
  {
    name: "Williamson",
    court: {
      address: "200 W Jefferson St Suite 100, Marion, IL 62959",
      city: "Marion",
      phone: "(618) 997-1301",
    },
  },
  {
    name: "Winnebago",
    court: {
      address: "400 W State St, Rockford, IL 61101",
      city: "Rockford",
      phone: "(815) 319-4500",
    },
  },
  {
    name: "Woodford",
    court: {
      address: "115 N Main St, Eureka, IL 61530",
      city: "Eureka",
      phone: "(309) 467-3312",
    },
  },
];
export default illinoisCounties;

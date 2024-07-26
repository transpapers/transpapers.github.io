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

import { OtherCounty } from "../../types/locality";

const newyorkCounties: { [key: string]: OtherCounty } = {
    Albany: {
        court: {
        address: "6 Lodge St, Albany, NY 12207",
        city: "Albany",
        phone: "(518) 285-8777",
        },
    },
    Allegany: {
        court: {
        address: "7 Court St, Belmont, NY 14813",
        city: "Belmont",
        phone: "(585) 449-3416",
        },
    },
    Bronx: {
        court: {
        address: "851 Grand Concourse, Bronx, NY 10451",
        city: "Bronx",
        phone: "(646) 386-5700",
        },
    },
    Broome: {
        court: {
        address: "92 Court St, Binghamton, NY 13901",
        city: "Binghamton",
        phone: "(607) 240-5800",
        },
    },
    Cattaraugus: {
        court: {
        address: "303 Court St, Little Valley, NY 14755",
        city: "Little Valley",
        phone: "(716) 379-6636",
        },
    },
    Cayuga: {
        court: {
        address: "152 Genesee St, Auburn, NY 13021",
        city: "Auburn",
        phone: "(315) 237-6450",
        },
    },
    Chautauqua: {
        court: {
        address: "3 N Erie St #341, Mayville, NY 14757",
        city: "Mayville",
        phone: "(716) 753-4266",
        },
    },
    Chemung: {
        court: {
        address: "203 William St, Elmira, NY 14901",
        city: "Elmira",
        phone: "(607) 216-6610",
        },
    },
    Chenango: {
        court: {
        address: "1 Court St, Norwich, NY 13815",
        city: "Norwich",
        phone: "(607) 371-7160",
        },
    },
    Clinton: {
        court: {
        address: "34 Court St, Plattsburgh, NY 12901",
        city: "Plattsburgh",
        phone: "(518) 536-3840",
        },
    },
    Columbia: {
        court: {
        address: "401 Union St, Hudson, NY 12534",
        city: "Hudson",
        phone: "(518) 267-3150",
        },
    },
    Cortland: {
        court: {
        address: "46 Greenbush St # 301, Cortland, NY 13045",
        city: "Cortland",
        phone: "(607) 218-3320",
        },
    },
    Delaware: {
        court: {
        address: "3 Court St, Delhi, NY 13753",
        city: "Delhi",
        phone: "(607) 376-5400",
        },
    },
    Dutchess: {
        court: {
        address: "10 Market St, Poughkeepsie, NY 12601",
        city: "Poughkeepsie",
        phone: "(845) 431-1710",
        },
    },
    Erie: {
        court: {
        address: "25 Delaware Ave, Buffalo, NY 14202",
        city: "Buffalo",
        phone: "(716) 845-9301",
        },
    },
    Essex: {
        court: {
        address: "7559 Court St, Elizabethtown, NY 12932",
        city: "Elizabethtown",
        phone: "(518) 873-3370",
        },
    },
    Franklin: {
        court: {
        address: "355 W Main St, Malone, NY 12953",
        city: "Malone",
        phone: "(518) 353-7340",
        },
    },
    Fulton: {
        court: {
        address: "N William St, Johnstown, NY 12095",
        city: "Johnstown",
        phone: "(518) 706-3290",
        },
    },
    Genesee: {
        court: {
        address: "1 W Main St, Batavia, NY 14020",
        city: "Batavia",
        phone: "(585) 201-5715",
        },
    },
    Greene: {
        court: {
        address: "320 Main St, Catskill, NY 12414",
        city: "Catskill",
        phone: "(518) 625-3160",
        },
    },
    Hamilton: {
        court: {
        address: "114 Sout2551-2541, Lake Pleasant, NY 12108",
        city: "Lake Pleasant",
        phone: "(518) 648-5411",
        },
    },
    Herkimer: {
        court: {
        address: "301 N Washington St #2501, Herkimer, NY 13350",
        city: "Herkimer",
        phone: "(315) 619-3400",
        },
    },
    Jefferson: {
        court: {
        address: "163 Arsenal St, Watertown, NY 13601",
        city: "Watertown",
        phone: "(315) 570-2950",
        },
    },
    Kings: {
        court: {
        address: "141 Livingston St, Brooklyn, NY 11201",
        city: "Brooklyn",
        phone: "(646) 386-5700",
        },
    },
    Lewis: {
        court: {
        address: "7660 N State St, Lowville, NY 13367",
        city: "Lowville",
        phone: "(315) 570-2435",
        },
    },
    Livingston: {
        court: {
        address: "2 Court St, Geneseo, NY 14454",
        city: "Geneseo",
        phone: "(585) 371-3920",
        },
    },
    Madison: {
        court: {
        address: "N Court St, Wampsville, NY 13163",
        city: "Wampsville",
        phone: "(315) 231-5301",
        },
    },
    Monroe: {
        court: {
        address: "99 Exchange Blvd # 545, Rochester, NY 14614",
        city: "Rochester",
        phone: "(585) 371-3758",
        },
    },
    Montgomery: {
        court: {
        address: "58 Broadway, Fonda, NY 12068",
        city: "Fonda",
        phone: "(518) 853-4516",
        },
    },
    Nassau: {
        court: {
        address: "262 Old Country Rd, Garden City, NY 11530",
        city: "Garden City",
        phone: "(516) 493-3710",
        },
    },
    Niagara: {
        court: {
        address: "775 3rd St, Niagara Falls, NY 14301",
        city: "Niagara Falls",
        phone: "(716) 280-6400",
        },
    },
    "New York": {
        court: {
        address: "111 Centre St, New York, NY 10013",
        city: "New York",
        phone: "(646) 386-5750",
        },
    },
    Oneida: {
        court: {
        address: "200 Elizabeth St, Utica, NY 13501",
        city: "Utica",
        phone: "(315) 266-4444",
        },
    },
    Onondaga: {
        court: {
        address: "505 S State St #130, Syracuse, NY 13202",
        city: "Syracuse",
        phone: "(315) 671-1020",
        },
    },
    Ontario: {
        court: {
        address: "27 N Main St, Canandaigua, NY 14424",
        city: "Canandaigua",
        phone: "(585) 412-5300",
        },
    },
    Orange: {
        court: {
        address: "255 Main St, Goshen, NY 10924",
        city: "Goshen",
        phone: "(845) 476-3500",
        },
    },
    Orleans: {
        court: {
        address: "27 N Platt St, Albion, NY 14411",
        city: "Albion",
        phone: "(585) 283-6622",
        },
    },
    Oswego: {
        court: {
        address: "25 E Oneida St, Oswego, NY 13126",
        city: "Oswego",
        phone: "(315) 207-7504",
        },
    },
    Otsego: {
        court: {
        address: "193 Main St, Cooperstown, NY 13326",
        city: "Cooperstown",
        phone: "(607) 322-3175",
        },
    },
    Putnam: {
        court: {
        address: "20 County Center, Carmel Hamlet, NY 10512",
        city: "Carmel Hamlet",
        phone: "(845) 208-7800",
        },
    },
    Queens: {
        court: {
        address: "89-17 Sutphin Blvd, Queens, NY 11435",
        city: "Queens",
        phone: "(718) 262-7100",
        },
    },
    Rensselaer: {
        court: {
        address: "Franklin St, Troy, NY 12180",
        city: "Troy",
        phone: "(518) 285-5025",
        },
    },
    Richmond: {
        court: {
        address: "927 Castleton Ave, Staten Island, NY 10310",
        city: "Staten Island",
        phone: "(646) 386-5700",
        },
    },
    Rockland: {
        court: {
        address: "1 S Main St, New City, NY 10956",
        city: "New City",
        phone: "(845) 483-8310",
        },
    },
    Saratoga: {
        court: {
        address: "35 W High St #2, Ballston Spa, NY 12020",
        city: "Ballston Spa",
        phone: "(518) 451-8840",
        },
    },
    Schenectady: {
        court: {
        address: "612 State St, Schenectady, NY 12305",
        city: "Schenectady",
        phone: "(518) 285-8401",
        },
    },
    Schoharie: {
        court: {
        address: "290 Main St, Schoharie, NY 12157",
        city: "Schoharie",
        phone: "(518) 453-6998",
        },
    },
    Schuyler: {
        court: {
        address: "105 9th St #35, Watkins Glen, NY 14891",
        city: "Watkins Glen",
        phone: "(607) 228-3350",
        },
    },
    Seneca: {
        court: {
        address: "48 W Williams St, Waterloo, NY 13165",
        city: "Waterloo",
        phone: "(315) 835-6229",
        },
    },
    "St. Lawrence": {
        court: {
        address: "48 Court St, Canton, NY 13617",
        city: "Canton",
        phone: "(315) 379-2219",
        },
    },
    Steuben: {
        court: {
        address: "3 E Pulteney Square, Bath, NY 14810",
        city: "Bath",
        phone: "(607) 622-8219",
        },
    },
    Suffolk: {
        court: {
        address: "210 Center Dr, Riverhead, NY 11901",
        city: "Riverhead",
        phone: "(631) 852-1462",
        },
    },
    Sullivan: {
        court: {
        address: "414 Broadway, Monticello, NY 12701",
        city: "Monticello",
        phone: "(845) 791-3540",
        },
    },
    Tioga: {
        court: {
        address: "21 Court St, Owego, NY 13827",
        city: "Owego",
        phone: "(607) 689-6107",
        },
    },
    Tompkins: {
        court: {
        address: "320 N Tioga St, Ithaca, NY 14850",
        city: "Ithaca",
        phone: "(607) 216-6610",
        },
    },
    Ulster: {
        court: {
        address: "285 Wall St, Kingston, NY 12401",
        city: "Kingston",
        phone: "(845) 481-9375",
        },
    },
    Warren: {
        court: {
        address: "1340 US-9, Lake George, NY 12845",
        city: "Lake George",
        phone: "(518) 480-6335",
        },
    },
    Washington: {
        court: {
        address: "383 Broadway, Fort Edward, NY 12828",
        city: "Fort Edward",
        phone: "(518) 480-6920",
        },
    },
    Wayne: {
        court: {
        address: "54 Broad St # 106D, Lyons, NY 14489",
        city: "Lyons",
        phone: "(315) 665-8117",
        },
    },
    Westchester: {
        court: {
        address: "111 Dr.Martin Luther King Jr Blvd, White Plains, NY 10601",
        city: "White Plains",
        phone: "(914) 824-5300",
        },
    },
    Wyoming: {
        court: {
        address: "147 N Main St, Warsaw, NY 14569",
        city: "Warsaw",
        phone: "(585) 228-3200",
        },
    },
    Yates: {
        court: {
        address: "415 Liberty St, Penn Yan, NY 14527",
        city: "Penn Yan",
        phone: "(315) 835-6308",
        },
    },
};

export default newyorkCounties;
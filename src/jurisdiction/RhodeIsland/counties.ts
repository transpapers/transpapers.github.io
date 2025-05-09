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

import { RhodeIslandCityOrTown } from "../../types/locality";

const rhodeislandCounties: { [key: string]: RhodeIslandCityOrTown } = {
    Barrington: {
        county: "Bristol",
        court: {
            address: "283 County Rd, Barrington, RI 02806",
            city: "Barrington",
            phone: "(401) 247-1900",
            website: "https://www.barrington.ri.gov/323/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Barrington Times",
                website: "https://www.eastbayri.com/contact/index.html",
            },
        ],
        filingCost: "$34.00",
    },
    Bristol: {
        county: "Bristol",
        court: {
            address: "10 Court St, Bristol, RI 02809",
            city: "Bristol",
            phone: "(401) 253-7000",
            website: "https://www.bristolri.gov/government/elected-officials/town-clerk/probate/",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,
        filingCost: "$34.00",
    },
    Burrillville: {
        county: "Providence",
        court: {
            address: "105 Harrisville Main St, Burrillville, RI 02830",
            city: "Burrillville",
            phone: "(401) 568-4300",
            website: "https://www.burrillville.org/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Woonsocket Call",
                website: "https://www.woonsocketcall.com/site/contact.html",
            },
        ],
        filingCost: "$40.00",
    },
    "Central Falls": {
        county: "Providence",
        court: {
            address: "580 Broad St, Central Falls, RI 02863",
            city: "Central Falls",
            phone: "(401) 727-7400",
            website: "https://www.centralfallsri.gov/city-clerk/page/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "The Pawtucket Times",
                website: "https://www.pawtuckettimes.com/site/contact.html",
            },
        ],
        filingCost: "$39.00",
    },
    Charlestown: {
        county: "Washington",
        court: {
            address: "4540 S County Trail, Charlestown, RI 02813",
            city: "Charlestown",
            phone: "(401) 364-1200",
            website: "https://charlestownri.gov/index.asp?SEC=CD67EF22-5D8F-4CD1-8AF5-0CC375FD66C8&DE=E7387C56-049D-4A37-9C9B-B1F77BCF5580",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Westerly Sun",
                website: "https://www.woonsocketcall.com/site/contact.htmlhttps://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Coventry: {
        county: "Kent",
        court: {
            address: "1670 Flat River Rd, Coventry, RI 02816",
            city: "Coventry",
            phone: "(401) 822-9173",
            website: "https://coventryri.gov/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Kent County Daily Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$50.00",
    },
    Cranston: {
        county: "Providence",
        court: {
            address: "869 Park Ave, Cranston, RI 02910",
            city: "Cranston",
            phone: "(401) 780-3197",
            website: "https://www.cranstonri.gov/departments/city-clerk-records-and-licenses/cranston-probate-court/",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$34.00",
    },
    Cumberland: {
        county: "Providence",
        court: {
            address: "45 Broad St, Cumberland, RI 02864",
            city: "Cumberland",
            phone: "(401) 728-2400 Ext. 154",
            website: "https://www.cumberlandri.org/234/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Westerly Sun",
                website: "https://www.woonsocketcall.com/site/contact.htmlhttps://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    "East Greenwich": {
        county: "Kent",
        court: {
            address: "125 Main St, East Greenwich, RI 02818",
            city: "East Greenwich",
            phone: "(401) 886-8607",
            website: "https://www.eastgreenwichri.com/190/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "East Greenwich Pendulum",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$39.00",
    },
    "East Providence": {
        county: "Providence",
        court: {
            address: "145 Taunton Ave, East Providence, RI 02914",
            city: "East Providence",
            phone: "(401) 435-7500 Ext. 11035",
            website: "https://eastprovidenceri.gov/departments/city-clerk-1",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$34.00",
    },
    Exeter: {
        county: "Washington",
        court: {
            address: "675 Ten Rod Rd, Exeter, RI 02822",
            city: "Exeter",
            phone: "(401) 294-3891",
            website: "https://www.exeterri.gov/clerk/page/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Standard Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$39.00",
    },
    Foster: {
        county: "Providence",
        court: {
            address: "181 Howard Hill Rd, Foster, RI 02825",
            city: "Foster",
            phone: "(401) 392-9200",
            website: "https://www.townoffoster.com/town-clerk/pages/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$34.00",
    },
    Glocester: {
        county: "Providence",
        court: {
            address: "1145 Putnam Pike, Chepachet, RI 02814",
            city: "Chepachet",
            phone: "(401) 568-6206 Ext. 0",
            website: "https://www.glocesterri.gov/townclerk.htm",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$184.00",
    },
    Hopkinton: {
        county: "Washington",
        court: {
            address: "1 Townhouse Rd, Hopkinton, RI 02833",
            city: "Hopkinton",
            phone: "(401) 377-7777",
            website: "https://www.hopkintonri.gov/town-clerk",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Westerly Sun",
                website: "https://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Jamestown: {
        county: "Newport",
        court: {
            address: "93 Narragansett Ave, Jamestown, RI 02835",
            city: "Jamestown",
            phone: "(401) 423-7282",
            website: "https://www.jamestownri.gov/town-departments/clerk/probate-court-test",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$34.00",
    },
    Johnston: {
        county: "Providence",
        court: {
            address: "1600 Atwood Ave, Johnston, RI 02919",
            city: "Johnston",
            phone: "(401) 351-6618",
            website: "https://townofjohnstonri.com/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Narragansett Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Lincoln: {
        county: "Providence",
        court: {
            address: "100 Old River Rd, Lincoln, RI 02865",
            city: "Lincoln",
            phone: "(401) 333-8453",
            website: "https://www.lincolnri.gov/161/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Newport Daily News",
                website: "https://www.newportri.com/contact/staff/",
            },
        ],
        filingCost: "$34.00",
    },
    "Little Compton": {
        county: "Newport",
        court: {
            address: "40 Commons St, Little Compton, RI 02837",
            city: "Little Compton",
            phone: "(401) 635-4400",
            website: "https://www.littlecomptonri.org/town_departments/town_clerks.php",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Westerly Sun",
                website: "https://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Middletown: {
        county: "Newport",
        court: {
            address: "350 E Main Rd, Middletown, RI 02842",
            city: "Middletown",
            phone: "(401) 847-0009",
            website: "https://www.middletownri.com/506/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "North East Independent",
                website: "https://www.independentri.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Narragansett: {
        county: "Washington",
        court: {
            address: "25 5th Ave, Narragansett, RI 02882",
            city: "Narragansett",
            phone: "(401) 782-0623",
            website: "https://narragansettri.gov/311/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$34.00",
    },
    Newport: {
        county: "Newport",
        court: {
            address: "43 Broadway, Newport, RI 02840",
            city: "Newport",
            phone: "(401) 845-5349",
            website: "https://www.cityofnewport.com/city-hall/departments/city-clerk/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Woonsocket Call",
                website: "https://www.woonsocketcall.com/site/contact.html",
            },
        ],
        filingCost: "$40.00",
    },
    "New Shoreham": {
        county: "Washington",
        court: {
            address: "16 Old Town Rd, New Shoreham, RI 02807",
            city: "New Shoreham",
            phone: "(401) 466-3200",
            website: "https://www.newshorehamri.gov/153/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Pawtucket Times",
                website: "https://www.pawtuckettimes.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    "North Kingstown": {
        county: "Washington",
        court: {
            address: "100 Fairway Dr, North Kingstown, RI 02852",
            city: "North Kingstown",
            phone: "(401) 268-1550",
            website: "https://www.northkingstownri.gov/462/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Newport Daily News",
                website: "https://www.newportri.com/contact/staff/",
            },
        ],
        filingCost: "$34.00",
    },
    "North Providence": {
        county: "Providence",
        court: {
            address: "2000 Smith St, North Providence, RI 02911",
            city: "North Providence",
            phone: "(401) 232-0900",
            website: "https://northprovidenceri.gov/town-clerk/probate-court/",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$39.00",
    },
    "North Smithfield": {
        county: "Providence",
        court: {
            address: "83 Greene St, North Smithfield, RI 02896",
            city: "North Smithfield",
            phone: "(401) 767-2200 Ext. 326",
            website: "https://www.nsmithfieldri.org/town-clerk/events/41884",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Woonsocket Call",
                website: "https://www.woonsocketcall.com/site/contact.html",
            },
        ],
        filingCost: "$39.00",
    },
    Pawtucket: {
        county: "Providence",
        court: {
            address: "137 Roosevelt Ave, Pawtucket, RI 02860",
            city: "Pawtucket",
            phone: "(401) 728-0500",
            website: "https://pawtucketri.com/city-clerks-office/probate-court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Pawtucket Times",
                website: "https://www.pawtuckettimes.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Portsmouth: {
        county: "Newport",
        court: {
            address: "2200 E Main Rd, Portsmouth, RI 02871",
            city: "Portsmouth",
            phone: "(401) 683-2101",
            website: "https://www.portsmouthri.gov/155/Probate-Court",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$39.00",
    },
    Providence: {
        county: "Providence",
        court: {
            address: "25 Dorrance St, Providence, RI 02903",
            city: "Providence",
            phone: "(401) 680-5000 Ext. 5307",
            website: "https://www.providenceri.gov/probate-court/",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$39.00",
    },
    Richmond: {
        county: "Washington",
        court: {
            address: "5 Richmond Townhouse Rd, Richmond, RI 02898",
            city: "Richmond",
            phone: "(401) 539-9000",
            website: "https://www.richmondri.com/179/2453/Probate",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Chariho Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
            {
                name: "Westerly Sun",
                website: "https://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Scituate: {
        county: "Providence",
        court: {
            address: "195 Danielson Pike, Scituate, RI 02857",
            city: "Scituate",
            phone: "(401) 647-2822",
            website: "https://www.scituateri.gov/departments/town_clerk/index.php",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Providence Journal",
                website: "https://www.providencejournal.com/contact/staff/",
            },
        ],
        filingCost: "$39.00",
    },
    Smithfield: {
        county: "Providence",
        court: {
            address: "64 Farnum Pike, Smithfield, RI 02917",
            city: "Smithfield",
            phone: "(401) 233-1000 Ext. 111",
            website: "https://www.smithfieldri.gov/departments/town-clerk/probate-court-information",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$39.00",
    },
    "South Kingstown": {
        county: "Washington",
        court: {
            address: "180 High St, Wakefield, RI 02879",
            city: "Wakefield",
            phone: "(401) 789-9331",
            website: "https://www.southkingstownri.com/278/Probate-Court",
        },
        advertisementRequired: false,
        courtDoesAdvertisement: false,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        filingCost: "$34.00",
    },
    Tiverton: {
        county: "Newport",
        court: {
            address: "343 Highland Rd, Tiverton, RI 02878",
            city: "Tiverton",
            phone: "(401) 625-6703",
            website: "https://www.tiverton.ri.gov/departments/probatecourt.php",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Sakonnet Times",
                website: "https://www.eastbayri.com/contact/index.html",
            },
        ],
        filingCost: "$34.00",
    },
    Warren: {
        county: "Bristol",
        court: {
            address: "514 Main St, Warren, RI 02885",
            city: "Warren",
            phone: "(401) 245-7340 Ext. 4",
            website: "https://www.townofwarren-ri.gov/town_government/boards_and_commissions/probate_judge.php",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "East Bay",
                website: "https://www.eastbayri.com/",
            },
        ],
        filingCost: "$142.00",
    },
    Warwick: {
        county: "Kent",
        court: {
            address: "3275 Post Rd, Warwick, RI 02886",
            city: "Warwick",
            phone: "(401) 738-2006 Ext. 4",
            website: "https://www.warwickri.gov/city-clerks-office/pages/probate",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Warwick Beacon",
                website: "https://warwickonline.com/staff.html",
            },
            {
                name: "Kent County Daily Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    "West Greenwich": {
        county: "Kent",
        court: {
            address: "280 Victory Hwy, West Greenwich, RI 02817",
            city: "West Greenwich",
            phone: "(401) 392-3800",
            website: "https://www.wgtownri.org/town-clerk/pages/probate",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Kent County Daily Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    "West Warwick": {
        county: "Kent",
        court: {
            address: "1170 Main St, West Warwick, RI 02893",
            city: "West Warwick",
            phone: "(401) 827-9034",
            website: "https://www.westwarwickri.org/index.asp?SEC=6325878C-B4EB-4430-9BF6-DEB39BD8609C&DE=5A777B47-6026-4E6E-81CB-C701B0C501B7",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Kent County Daily Times",
                website: "https://www.ricentral.com/site/contact.html",
            },
        ],
        filingCost: "$34.00",
    },
    Westerly: {
        county: "Washington",
        court: {
            address: "45 Broad St, Westerly, RI 02891",
            city: "Westerly",
            phone: "(401) 348-2509",
            website: "https://westerlyri.gov/340/Probate-Court",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: false,

        publications: [
            {
                name: "Westerly Sun",
                website: "https://www.thewesterlysun.com/site/contact.html",
            },
        ],
        filingCost: "$74.00",
    },
    Woonsocket: {
        county: "Providence",
        court: {
            address: "169 Main St, Woonsocket, RI 02895",
            city: "Woonsocket",
            phone: "(401) 767-9248",
            website: "https://www.woonsocketri.org/city-clerk/pages/probate",
        },
        advertisementRequired: true,
        courtDoesAdvertisement: true,

        backgroundCheckRequired: true,
        courtDoesBackgroundCheck: true,

        publications: [
            {
                name: "Woonsocket Call",
                website: "https://www.woonsocketcall.com/site/contact.html",
            },
        ],
        filingCost: "$30.00",
    },
};

export default rhodeislandCounties;

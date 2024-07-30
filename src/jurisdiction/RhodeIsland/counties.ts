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
        filingCost: "$87.00",
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
        filingCost: "$85.00",
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
        filingCost: "$113.00",
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
        filingCost: "$50.00",
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
        filingCost: "$89.00",
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
        filingCost: "$126.00",
    },
};

export default rhodeislandCounties;

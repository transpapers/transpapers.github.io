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

const oregonCounties: { [key: string]: OtherCounty } = {
    Baker: {
        court: {
        address: "1995 3rd St #220, Baker City, OR 97814",
        city: "Baker City",
        phone: "(541) 523-6303",
        website: "https://www.courts.oregon.gov/courts/baker/Pages/default.aspx",
        },
    },
    Benton: {
        court: {
        address: "120 NW 4th Street, Corvallis, OR, 97330",
        city: "Corvallis",
        phone: "(541) 243-7850",
        website: "https://www.courts.oregon.gov/courts/benton/Pages/default.aspx",
        },
    },
    Clackamas: {
        court: {
        address: "807 Main Street, Oregon City, OR 97045",
        city: "Oregon City",
        phone: "(503) 655-8447",
        website: "https://www.courts.oregon.gov/courts/clackamas/Pages/default.aspx",
        },
    },
    Clatsop: {
        court: {
        address: "749 Commercial St Suite 6, Astoria, OR 97103",
        city: "Astoria",
        phone: "(503) 325-8555",
        website: "https://www.courts.oregon.gov/courts/clatsop/Pages/default.aspx",
        },
    },
    Columbia: {
        court: {
        address: "230 Strand Street, Saint Helens, OR 97051",
        city: "Saint Helens",
        phone: "(503) 397-2327",
        website: "https://www.courts.oregon.gov/courts/columbia/Pages/default.aspx",
        },
    },
    Coos: {
        court: {
        address: "250 N Baxter St, Coquille, OR 97423",
        city: "Coquille",
        phone: "(541) 396-8372",
        website: "https://www.courts.oregon.gov/courts/coos/Pages/default.aspx",
        },
    },
    Crook: {
        court: {
        address: "300 NE 3rd St #21, Prineville, OR 97754",
        city: "Prineville",
        phone: "(541) 447-6541",
        website: "https://www.courts.oregon.gov/courts/crook/Pages/default.aspx",
        },
    },
    Curry: {
        court: {
        address: "29821 Ellensburg Ave, Gold Beach, OR 97444",
        city: "Gold Beach",
        phone: "(541) 373-6894",
        website: "https://www.courts.oregon.gov/courts/coos/Pages/default.aspx",
        },
    },
    Deschutes: {
        court: {
        address: "1100 NW Bond Street, Bend, Oregon 97703",
        city: "Bend",
        phone: "(541) 388-5300",
        website: "https://www.courts.oregon.gov/courts/deschutes/Pages/default.aspx",
        },
    },
    Douglas: {
        court: {
        address: "1036 SE Douglas Ave # 201, Roseburg, OR 97470",
        city: "Roseburg",
        phone: "(541) 957-2470",
        website: "https://www.courts.oregon.gov/courts/douglas/Pages/default.aspx",
        },
    },
    Gilliam: {
        court: {
        address: "221 S Oregon St, Condon, OR 97823",
        city: "Condon",
        phone: "(541) 256-1008",
        website: "https://www.courts.oregon.gov/courts/gilliam/Pages/default.aspx",
        },
    },
    Grant: {
        court: {
        address: "201 S. Humbolt Street, Canyon City, OR  97820",
        city: "Canyon City",
        phone: "(541) 575-1438",
        website: "https://www.courts.oregon.gov/courts/grant/Pages/default.aspx",
        },
    },
    Harney: {
        court: {
        address: "450 N. Buena Vista, Burns, Oregon 97720",
        city: "Burns",
        phone: "(541) 573-5207",
        website: "https://www.courts.oregon.gov/courts/grant/Pages/default.aspx",
        },
    },
    "Hood River": {
        court: {
        address: "309 State Street, Hood River, Oregon 97031",
        city: "Hood River",
        phone: "(541) 386-3535",
        website: "https://www.courts.oregon.gov/courts/hood_river/Pages/default.aspx",
        },
    },
    Jackson: {
        court: {
        address: "100 S. Oakdale Avenue, Medford, OR 97501-3127",
        city: "Medford",
        phone: "(541) 776-7171",
        website: "https://www.courts.oregon.gov/courts/jackson/Pages/default.aspx",
        },
    },
    Jefferson: {
        court: {
        address: "129 SW E Street, Madras, Oregon 97741",
        city: "Madras",
        phone: "(541) 475-3317",
        website: "https://www.courts.oregon.gov/courts/jefferson/Pages/default.aspx",
        },
    },
    Josephine: {
        court: {
        address: "510 NW 6th Street, Grants Pass, Oregon 97526",
        city: "Grants Pass",
        phone: "(541) 476-2309",
        website: "https://www.courts.oregon.gov/courts/josephine/Pages/default.aspx",
        },
    },
    Klamath: {
        court: {
        address: "316 Main Street, Klamath Falls, Oregon 97601",
        city: "Klamath Falls",
        phone: "(541) 883-5503",
        website: "https://www.courts.oregon.gov/courts/klamath/Pages/default.aspx",
        },
    },
    Lake: {
        court: {
        address: "513 Center St # 305, Lakeview, OR 97630",
        city: "Lakeview",
        phone: "(541) 947-6051",
        website: "https://www.courts.oregon.gov/courts/lake/Pages/default.aspx",
        },
    },
    Lane: {
        court: {
        address: "125 East 8th Avenue, Eugene, OR  97401",
        city: "Eugene",
        phone: "(541) 682-4020",
        website: "https://www.courts.oregon.gov/courts/lane/Pages/default.aspx",
        },
    },
    Lincoln: {
        court: {
        address: "225 W Olive St # 201, Newport, OR 97365",
        city: "Newport",
        phone: "(541) 265-4236",
        website: "https://www.courts.oregon.gov/courts/lincoln/Pages/default.aspx",
        },
    },
    Linn: {
        court: {
        address: "300 SW Fourth Avenue, Albany, OR 97321",
        city: "Albany",
        phone: "(541) 967-3845",
        website: "https://www.courts.oregon.gov/courts/linn/Pages/default.aspx",
        },
    },
    Malheur: {
        court: {
        address: "251 B Street West, Vale, OR 97918",
        city: "Vale",
        phone: "(541) 473-5171",
        website: "https://www.courts.oregon.gov/courts/malheur/Pages/default.aspx",
        },
    },
    Marion: {
        court: {
        address: "100 High St. NE, Salem, Oregon 97301",
        city: "Salem",
        phone: "(503) 588-5105",
        website: "https://www.courts.oregon.gov/courts/marion/Pages/default.aspx",
        },
    },
    Morrow: {
        court: {
        address: "100 N Court St #203, Heppner, OR 97836",
        city: "Heppner",
        phone: "(541) 676-5264",
        website: "https://www.courts.oregon.gov/courts/umatilla/Pages/default.aspx",
        },
    },
    Multnomah: {
        court: {
        address: "1200 SW 1st Ave, Portland, OR 97204",
        city: "Portland",
        phone: "(971) 274-0540",
        website: "https://www.courts.oregon.gov/courts/multnomah/Pages/default.aspx",
        },
    },
    Polk: {
        court: {
        address: "850 Main Street, Dallas, Oregon 97338",
        city: "Dallas",
        phone: "(503) 623-3154",
        website: "https://www.courts.oregon.gov/courts/polk/Pages/default.aspx",
        },
    },
    Sherman: {
        court: {
        address: "500 Court St, Moro, OR 97039",
        city: "Moro",
        phone: "(541) 565-3650",
        website: "https://www.courts.oregon.gov/courts/sherman/Pages/default.aspx",
        },
    },
    Tillamook: {
        court: {
        address: "201 Laurel Avenue, Tillamook, Oregon 97141",
        city: "Tillamook",
        phone: "(503) 842-2596",
        website: "https://www.courts.oregon.gov/courts/tillamook/Pages/default.aspx",
        },
    },
    Umatilla: {
        court: {
        address: "915 SE Columbia Drive, Hermiston, OR 97838 & 216 SE Fourth Street Pendleton, OR 97801",
        city: "Hermiston or Pendleton",
        phone: "(541) 667-3020 or (541) 278-0341",
        website: "https://www.courts.oregon.gov/courts/umatilla/Pages/default.aspx",
        },
    },
    Union: {
        court: {
        address: "1105 K Ave, La Grande, OR 97850",
        city: "La Grande",
        phone: "(541) 962-9500",
        website: "https://www.courts.oregon.gov/courts/union/Pages/default.aspx",
        },
    },
    Wallowa: {
        court: {
        address: "101 S River St # 204, Enterprise, OR 97828",
        city: "Enterprise",
        phone: "(541) 426-4991",
        website: "https://www.courts.oregon.gov/courts/wallowa/Pages/default.aspx",
        },
    },
    Wasco: {
        court: {
        address: "511 Washington Street, The Dalles, Oregon 97058",
        city: "The Dalles",
        phone: "(541) 506-2700",
        website: "https://www.courts.oregon.gov/courts/wasco/Pages/default.aspx",
        },
    },
    Washington: {
        court: {
        address: "145 NE 2nd Avenue, Hillsboro, Oregon 97124",
        city: "Hillsboro",
        phone: "(503) 846-8888",
        website: "https://www.courts.oregon.gov/courts/washington/Pages/default.aspx",
        },
    },
    Wheeler: {
        court: {
        address: "701 Adams St # 204, Fossil, OR 97830",
        city: "Fossil",
        phone: "(541) 763-2541",
        website: "https://www.courts.oregon.gov/courts/wheeler/Pages/default.aspx",
        },
    },
    Yamhill: {
        court: {
        address: "535 NE 5th Street, McMinnville, Oregon 97128",
        city: "McMinnville",
        phone: "(503) 434-7530",
        website: "https://www.courts.oregon.gov/courts/yamhill/Pages/default.aspx",
        },
    },
};

export default oregonCounties;
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

import * as React from 'react';


export default function Noscript() {
    return (
    <noscript style={{border: '2px solid red', borderRadius: '10px', margin: '1lh'}}>
      <h2>Please enable JavaScript.</h2>
      <p>
        'Transpapers requires JavaScript to function. It&apos;s licensed freely under GPLv3, with a '
        <a href='https://github.com/transpapers/transpapers.github.io/wiki#local-usage'>
        'self-hosted option.'
        </a>
        {' '}If you are encountering issues with GNU LibreJS, please open a GitHub
        issue or email the maintainers.
      </p>
    </noscript>
    );
}

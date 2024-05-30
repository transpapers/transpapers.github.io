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

import {
  vi, expect, describe, test,
} from 'vitest';
import { axe } from 'vitest-axe';

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Step3 from '../src/components/Step3';
import Step4 from '../src/components/Step4';
import Step4b from '../src/components/Step4b';
import Step5 from '../src/components/Step5';
import Step6 from '../src/components/Step6';

describe.each([
  { name: 'Step1', component: <Step1 /> },
  { name: 'Step2', component: <Step2 /> },
  { name: 'Step3', component: <Step3 /> },
  { name: 'Step4', component: <Step4 /> },
  { name: 'Step4b', component: <Step4b /> },
  { name: 'Step5', component: <Step5 /> },
  { name: 'Step6', component: <Step6 /> },
])('React component $name', ({
  // Ignore ESLint warnings for variables used in test name.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  component,
}) => {
  test('generates no browser console errors', () => {
    const consoleSpy = vi.spyOn(console, 'error');

    render(<BrowserRouter>{component}</BrowserRouter>);

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('generates no a11y warnings', async () => {
    const { container } = render(<BrowserRouter>{component}</BrowserRouter>);

    expect(await axe(container)).toHaveNoViolations();
  });
});

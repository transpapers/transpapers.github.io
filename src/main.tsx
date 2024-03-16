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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from './store';

import Root from './components/Root';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';


const root = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/step1',
    element: <Step1 />,
  },
  {
    path: 'step2',
    element: <Step2 />,
  },
  {
    path: 'step3',
    element: <Step3 />,
  }
]);

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </React.StrictMode>,
  );
}

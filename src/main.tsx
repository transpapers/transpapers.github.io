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

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Header from './components/Header';
import Noscript from './components/Noscript';

import Root from './components/Root';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step4b from './components/Step4b';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import Guide from './components/Guide';

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
  },
  {
    path: 'step4',
    element: <Step4 />,
  },
  {
    path: 'step4b',
    element: <Step4b />,
  },
  {
    path: 'step5',
    element: <Step5 />,
  },
  {
    path: 'step6',
    element: <Step6 />,
  },
  {
      path: 'guide',
      element: <Guide />,
  },
]);

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Header />
      <Noscript />
      <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
      </StoreProvider>
    </React.StrictMode>,
  );
}

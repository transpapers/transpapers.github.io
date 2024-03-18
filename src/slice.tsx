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

import { createSlice, combineReducers } from '@reduxjs/toolkit';

import { blankData } from './types/person';

const stepSlice = createSlice({
  name: 'step',
  initialState: {stepNo: 0}, // TODO Need a variable for this.
  reducers: {
    nextStep: (state) => {
      state.stepNo += 1
    },
    prevStep: (state) => {
      state.stepNo -= 1
    },
  },
});

const personSlice = createSlice({
    name: 'person',
    initialState: blankData,
    reducers: {
        updatePerson: (state, action) => {
            const data = action.payload;
            Object.assign(state, data);
        },
    },
});

const processSlice = createSlice({
    name: 'process',
    initialState: { processNames: [] },
    reducers: {
        setProcessNames: (state, action) => {
            const procNames = action.payload;
            state.processNames = procNames;
        }
    }
});

const reducers = combineReducers({
    step: stepSlice.reducer,
    person: personSlice.reducer,
    process: processSlice.reducer,
});

export const { updatePerson } = personSlice.actions;
export const { setProcessNames } = processSlice.actions;

export default reducers;

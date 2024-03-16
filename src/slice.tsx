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

import { createSlice } from '@reduxjs/toolkit';

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
    initialState: {},
    reducers: {
        updatePerson: (state, action) => {
            const data = action.payload;
            Object.assign(state, data);
        },
    },
});

const reducers = {
    step: stepSlice.reducer,
    person: personSlice.reducer
};

export const { updatePerson } = personSlice.actions;

export default reducers;

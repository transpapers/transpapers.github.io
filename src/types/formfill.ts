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

import { Person } from './person';
import { Location } from './types';

/**
 * A specification for filling a single form field.
 *
 * @remarks One fiber of a mapping from data to document.
 *
 * Exactly one of `[text, check]` and exactly one of `[field, loc]` is required.
 *
 * `text` or `check` determines the information to be entered into the field.
 *
 * `select` signals that the field is a radio group.
 *
 * `field` or `loc` determines the method by which the field will be filled.
 *
 * If `check` is set together with `loc`, a capital X will be entered.
 *
 * Setting `select` and `loc` is an error.
 */
export type Formfill =
    | FormfillFillableText
    | FormfillFillableCheck
    | FormfillNonfillableText
    | FormfillNonfillableCheck;

export interface FormfillFillableText {
  /**
     * Returns the information to be contained in the field.
     */
  text: (applicant: Person) => string | undefined,

  /**
     * Contains the internal name of the field to be filled.
     */
  field: string,
}

export interface FormfillFillableCheck {
  /**
     * Connotes a checkbox, or if `select` is also set, a radio group; contains
     * the internal name of the choice to select.
     */
  check: (applicant: Person) => boolean | undefined,

  /**
     * Connotes a radio group together with `check`. Contains the internal name
     * of the choice to select.
     */
  select?: string,

  /**
     * Contains the internal name of the field to be filled.
     */
  field: string,
}

export interface FormfillNonfillableText {
  /**
     * Returns the information to be contained in the field.
     */
  text: (applicant: Person) => string | undefined,

  /**
     * Contains the location at which the data should be inserted.
     */
  loc: Location,

}

export interface FormfillNonfillableCheck {
  /**
     * Connotes a checkbox, or if `select` is also set, a radio group; contains
     * the internal name of the choice to select.
     */
  check: (applicant: Person) => boolean | undefined,

  /**
     * Connotes a radio group together with `check`. Contains the internal name
     * of the choice to select.
     */
  select?: string,

  /**
     * Contains the location at which the data should be inserted.
     */
  loc: Location,
}

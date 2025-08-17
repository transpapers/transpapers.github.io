/**
 * @licstart The following is the entire license notice for the JavaScript code in this file.
 * Copyright (C) 2023-2025 Sasha Lišková and Stephanie Beckon
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
 * @licend The above is the entire license notice for the JavaScript code in this file.
 */

import { Person } from "./person";
import { Location, FontOptions } from "./types";

interface TextField {
  text: string | undefined;
}

interface CheckField {
  check: boolean | undefined;
}

interface RadioField {
  choice: string | number | undefined;
}

interface DropdownField {
  value: string | undefined;
}

export interface FillableField {
  fieldName: string;
}

export interface PlaceableField {
  loc: Location;
  font?: FontOptions;
}

export interface FillableTextField extends FillableField, TextField {}
export interface FillableCheckField extends FillableField, CheckField {}
export interface FillableRadioField extends FillableField, RadioField {}
export interface FillableDropdownField extends FillableField, DropdownField {}
export interface PlaceableTextField extends PlaceableField, TextField {}
export interface PlaceableCheckField extends PlaceableField, CheckField {}
export interface PlaceableRadioField extends PlaceableField, RadioField {}
export interface PlaceableDropdownField extends PlaceableField, DropdownField {}

export type CompletedField =
  | FillableTextField
  | FillableCheckField
  | FillableRadioField
  | FillableDropdownField
  | PlaceableTextField
  | PlaceableCheckField
  | PlaceableRadioField
  | PlaceableDropdownField;

export function isText(field: object): field is TextField {
  return "text" in field;
}

export function isCheck(field: object): field is CheckField {
  return "check" in field;
}

export function isRadio(field: object): field is RadioField {
  return "choice" in field;
}

export function isDropdown(field: object): field is DropdownField {
  return "value" in field;
}

export function isFillable(field: object): field is FillableField {
  return "fieldName" in field;
}

export type Formfill = (applicant: Person) => CompletedField;

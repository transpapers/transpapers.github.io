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

/**
 * A person's name.
 */
export interface Name {
  first: string;
  middle: string;
  last: string;
  suffix?: string;
}

/**
 * Determine whether `name` is empty.
 */
export function isEmptyName(name: Name | undefined): boolean {
  if (name === undefined) {
    return false;
  }
  return true;
}

export enum GenderMarker {
  M = "M",
  F = "F",
  X = "X",
}

/**
 * A pixel location in a PDF document.
 *
 * @remarks When calculating locations, use a DPI value of 100 px/in.
 */
export interface Location {
  /**
   * The X coordinate, measured from left of page.
   */
  x: number;

  /**
   * The Y coordinate, measured from top of page.
   */
  y: number;

  /**
   * The page number, zero-indexed. Defaults to 0.
   */
  page?: number;

  /**
   * Font options.
   */
  font?: FontOptions;
}

export interface FontOptions {
  /**
   * Font size, in points.
   * TODO I think????
   */
  fontSize?: number;

  /**
   * If undefined, the field will be set in sans-serif.
   * If a positive number, the field will be rendered in monospace with
   * `pitch` pixels between each character.
   * To be used for those fields with boxes for each individual letter.
   */
  pitch?: number;
}

export enum DateFormatPart {
  DAY,
  MONTH,
  YEAR,
}

/**
 * A format specification for dates.
 */
export interface DateFormat {
  format: DateFormatPart[];
  separator?: string;
}

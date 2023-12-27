import { Person } from './person';

/**
 * A person's name.
 */
export interface Name {
  first: string,
  middle: string,
  last: string,
  suffix?: string,
}

export enum GenderMarker {
  M,
  F,
  X,
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
  x: number,

  /**
     * The Y coordinate, measured from top of page.
     */
  y: number,

  /**
     * The page number, zero-indexed. Defaults to 0.
     */
  page?: number,
}

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

export enum DateFormatPart {
  DAY,
  MONTH,
  YEAR,
}

/**
 * A format specification for dates.
 */
export interface DateFormat {
  format: DateFormatPart[],
  separator?: string,
}

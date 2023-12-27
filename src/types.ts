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

  fontSize?: number,
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

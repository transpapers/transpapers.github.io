/**
 * @typedef {Object} Name - A person's name
 *
 * @property {string} first
 * @property {string} middle
 * @property {string} last
 * @property {?string} suffix
 */

/** @typedef {Object} Location - A pixel location in a PDF document.
 *
 *  FIXME Think of a better name for this now that fontSize is a parameter
 *  @property {number} x - The X coordinate, measured from top of page.
 *  @property {number} y - The Y coordinate, measured from left of page.
 *  @property {?number} page - The page number, indexed from 0. Defaults to 0.
 *  @property {?number} fontSize - The font size in pixels. Defaults to 12.
 */

/**
 * @typedef {Object} Formfill - A specification for filling a single form field.
 *
 * One fiber of a mapping from data to document.
 * Exactly one of `[text, check]` and exactly one of `[field, loc]` is required.
 * `text` or `check` determines the information to be entered into the field.
 * `select` signals that the field is a radio group.
 * `field` or `loc` determines the method by which the field will be filled.
 * If `check` is set together with `loc`, a capital X will be entered.
 * Setting `select` and `loc` is an error.
 *
 * @property {function(Person): string} text - Connotes a text field; returns the
 *    information to be contained in the field.
 * @property {function(Person): boolean} check - Connotes a checkbox, or if
 *    `select` is also set, a radio group; contains the internal name of the
 *    choice to select.
 * @property {?string} select - Connotes a radio group together with `check`.
 *    Contains the internal name of the choice to select.
 *
 * @property {?string} field - To be used with a fillable PDF. Contains the name
 *    of the field to be filled.
 * @property {?Location} loc - To be used with a non-fillable PDF. Contains the
 *    location at which the data should be inserted.
 */

/**
 * @typedef {Object} DateFormat - A format specification for dates
 *
 * FIXME We really should just use an external library for this...
 * @property {Array} format - An array whose elements are either 'day',
 * 'month', or 'year'
 * @property {string} separator
 */

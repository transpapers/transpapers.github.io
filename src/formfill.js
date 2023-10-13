/**
 * @typedef {Object} Formfill - A specification for filling a single form field.
 *
 * One fiber of a mapping from data to document.  Exactly one of `[text, check]`
 * and exactly one of `[field, loc]` is required.  `text` or `check` determines
 * the information to be entered into the field.  `select` signals that the
 * field is a radio group.  `field` or `loc` determines the method by which the
 * field will be filled.  If `check` is set together with `loc`, a capital X
 * will be entered.  Setting `select` and `loc` is an error.
 *
 * @property {function(Person): string} text - Connotes a text field; returns
 *    the information to be contained in the field.
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

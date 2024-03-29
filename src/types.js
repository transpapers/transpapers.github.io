/**
 * @typedef {Object} Name - A person's name
 * @property {string} first
 * @property {string} middle
 * @property {string} last
 * @property {string?} suffix
 */


/**
 * @typedef {Object} Person - A person's information
 * @property {Name} legalName
 * @property {Name} chosenName
 * @property {string} reasonForNameChange
 * @property {boolean} sealBirthCertificate
 * @property {Object} birthplace FIXME
 * @property {string} dateOfBirth - A person's date of birth.
 *
 * This is Chesterton's fence!! Read before you modify. I got an earful about
 * time/date handling from an alter and now you have to hear it too.
 *
 * These are strings and not Dates for the sake of sanity.
 * One's "date of birth" is a legal abstraction, not a timestamp, which is
 * what a Date represents. In fact, it only needs to be treated as anything
 * other than a string for the purposes of determining majority.
 * There are some further corner cases to consider [0] but it's beyond scope
 * and so handled by the "age" field.
 * If the person was not born in the last 22 [1] years, that is to say, if
 * their legal year of birth is less than the current year minus 22, we don't
 * do any additional date math. We never convert the given DOB to a Date and
 * so avoid philosophically perplexing questions of time by shunting them to
 * whatever remedy the user and the legal system may have.
 *
 * [0] Cf. "Some oddities of the law on age: So you thought you reached age 21
 * on your 21st birthday?", Wilberforce Chambers.
 * [1] In the state of Michigan, this is the last "breakpoint" at which the
 * legal process changes. The other breakpoints are 15 and 18 years. Being
 * that the MI process is particularly onerous, the last breakpoint is
 * most likely 18 in other states.
 *
 * @property {number} age
 * @property {string} assignedSex
 * @property {string} gender
 * @property {boolean} doNotPublish
 * @property {boolean} parentsAreOkay
 * @property {Name} mothersBirthName
 * @property {string} mothersDateOfBirth
 * @property {Name} fathersBirthName
 * @property {string} fathersDateOfBirth
 * @property {string} areaCode FIXME
 * @property {string} phone
 * @property {string} streetAddress
 * @property {string} city
 * @property {string} state
 * @property {string} county
 * @property {string} zip
 * @property {string} email
 * @property {Name} representativeName
 */

/** @typedef {Object} Location - A pixel location in a PDF document.
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
 * FIXME We really should just use an external library for this...
 * @property {Array} format - An array whose elements are either 'day',
 * 'month', or 'year'
 * @property {string} separator

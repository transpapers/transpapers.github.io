/**
 * Calculate a person's numerical age from their birthdate, as a string.
 * Since a "date of birth" is a legal fiction and not a timestamp, we can do
 * this without resorting to any funky time nonsense.
 * @param {string} birthdate - DOB, formatted as YYYY-MM-DD.
 * @return {number}
 */
export function numericalAge(birthdate) {
  if (!birthdate) {
    return Infinity;
  }
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();
  const thisDay = new Date().getDay();
  const birthYear = Number.parseInt(birthdate.substring(0, 4), 10);
  const birthMonth = Number.parseInt(birthdate.substring(5, 7), 10);
  const birthDay = Number.parseInt(birthdate.substring(8), 10);

  if (thisMonth < birthMonth) {
    return thisYear - birthYear - 1;
  }

  if (thisMonth === birthMonth && thisDay < birthDay) {
    return thisYear - birthYear - 1;
  }

  return thisYear - birthYear;
}

/**
 * Format a Date as a string
 * @param {string} date - date, formatted as YYYY-MM-DD.
 * @param {DateFormat} fmt - Ugh
 * @return {string}
 */
export function formatDate(date, fmt) {
  if (!date || !fmt) {
    return '';
  }

  const year = Number.parseInt(date.substring(0, 4), 10);
  const month = Number.parseInt(date.substring(5, 7), 10);
  const day = Number.parseInt(date.substring(8), 10);

  return fmt.format.map((part) => {
    if (part === 'month') {
      return month;
    }

    if (part === 'day') {
      return day;
    }

    if (part === 'year') {
      return year;
    }

    return '';
  }).join(fmt.separator);
}

export function phoneAreaCode(phoneNumber) {
  if (!phoneNumber) { return ''; }
  return phoneNumber.substring(0, 4);
}

/** Split phone number into first three digits */
export function phoneStart(phoneNumber) {
  if (!phoneNumber) { return ''; }
  return phoneNumber.substring(4, 7);
}

/** Split phone number into last 4 digits */
export function phoneEnd(phoneNumber) {
  if (!phoneNumber) { return ''; }
  return phoneNumber.substring(7);
}

/**
 * Format a full `name` as a string.
 * @param {Name} name
 * @return {string}
 */
export function fullName(name) {
  if (!name) { return ''; }
  return [name.first, name.middle, name.last, name.suffix].filter((n) => n && n.length > 0).join(' ');
}

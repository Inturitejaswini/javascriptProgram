
/**
 * @param {year} year is a perameter.
 * @return finally test the year is leapyear or not using tdd.
 */
let leapYear =()=> {};

leapYear.prototype.isLeap = function(year) {
  if (year % 4 != 0) {
    return true;
  }
}

module.exports = leapYear;
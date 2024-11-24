/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
  let result = 0;
  let sign = 1;
  let index = 0;
  const CUSTOM_MAX_INT = 2 ** 31 - 1;
  const CUSTOM_MIN_INT = 2 ** 31 * -1;

  while (s[index] === " ") {
    index++; // skip whitespace
  }

  if (s[index] === "-" || s[index] === "+") {
    sign = s[index] === "-" ? -1 : 1; // set sign to by later multiplying result with this value
    index++;
  }

  while (index < s.length && s[index].match(/[0-9]/)) {
    result = result * 10 + parseInt(s[index]); // multiply result by 10 and add current digit,
    // by multiplying by 10 we are effectively moving the number to the left
    index++;
  }

  result = result * sign;

  if (result > CUSTOM_MAX_INT) {
    return CUSTOM_MAX_INT;
  }

  if (result < CUSTOM_MIN_INT) {
    return CUSTOM_MIN_INT;
  }

  return result;
};

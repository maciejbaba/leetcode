/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
  let result = 0;
  let sign = 1;
  let index = 0;

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

  return result * sign;
};

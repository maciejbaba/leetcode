/**
 * @param {string} s
 * @return {number}
 */

var reverse = function (x) {
  const CUSTOM_MAX_INT = 2 ** 31 - 1;
  const CUSTOM_MIN_INT = 2 ** 31 * -1;

  let result = 0;
  let sign = 1;

  if (x < 0) {
    sign = -1;
  }

  x = Math.abs(x);

  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  result = result * sign;

  if (result > CUSTOM_MAX_INT) {
    return 0;
  }

  if (result < CUSTOM_MIN_INT) {
    return 0;
  }
  return result;
};

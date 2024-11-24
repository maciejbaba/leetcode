/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX_32BIT_INT = 2 ** 31 - 1;
  const MIN_32BIT_INT = 2 ** 31 * -1;

  const sign = x < 0 ? "-" : "+";
  x = Math.abs(x);
  x = String(x).split("").reverse().join("");

  const res = Number(sign + x);

  if (res > MAX_32BIT_INT) return 0;
  if (res < MIN_32BIT_INT) return 0;

  return res;
};

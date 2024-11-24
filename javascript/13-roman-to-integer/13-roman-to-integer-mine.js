/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  console.log(s);

  const hashMap = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      sum += hashMap[s[i]];
      continue;
    }

    let twoSigns = s.substring(i, i + 2);
    console.log(twoSigns);

    if (hashMap[twoSigns]) {
      sum += hashMap[twoSigns];
      i++; // skip next iteration
    } else {
      sum += hashMap[s[i]];
    }
  }
  return sum;
};

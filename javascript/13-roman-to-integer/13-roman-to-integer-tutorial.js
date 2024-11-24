/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const hashMap = {
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
    let curr = hashMap[s[i]]
    let next = hashMap[s[i + 1]]
    if (curr < next) {
      sum += next - curr;
      i++; // skip next iteration because we added two letters
    }
    // MCMIX roman notation is from biggest to lowest number so if there is lower before bigger number it has to be exception
    else {
      sum += curr;
    }
  }
  return sum;
};

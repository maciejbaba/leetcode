// not the best version but it works

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let str of strs) {
      result += `${str.length}#${str}`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let index = 0;

    while (index < str.length) {
      let endWordIndex = index;
      while (str[endWordIndex] !== "#") {
        endWordIndex++;
      }
      let length = parseInt(str.substring(index, endWordIndex));
      index = endWordIndex + 1;
      endWordIndex = index + length;
      result.push(str.substring(index, endWordIndex));
      index = endWordIndex;
    }
    return result;
  }
}

// not the best version but it works

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result += `${str}!@#!@#`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = str.split("!@#!@#");
        result.pop(); // remove empty item on the end after split #

        return result;
    }
}


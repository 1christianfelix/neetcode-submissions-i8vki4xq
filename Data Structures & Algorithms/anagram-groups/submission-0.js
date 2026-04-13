class Solution {
    compareAnagram(str, str2, arr) {
        if (str.length != str2.length) {
            return false;
        }

        const s1 = str.split('').sort().join('');
        const s2 = str2.split('').sort().join('');

        if (s1 === s2) {
            arr.push(str2);
            return true;
        }

        return false;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const stringsVisited = {};
        const output = [];

        for (let j = 0; j < strs.length; j++) {
            if (stringsVisited[j] === 1) continue;

            const sublist = [strs[j]];
            stringsVisited[j] = 1;

            for (let i = j + 1; i < strs.length; i++) {
                if (stringsVisited[i] === 1) continue;

                if (this.compareAnagram(strs[j], strs[i], sublist)) {
                    stringsVisited[i] = 1;
                }
            }

            output.push(sublist);
        }

        return output;
    }
}
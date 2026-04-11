class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const stringOne = [...s].sort().join()
        const stringTwo =  [...t].sort().join()

        if (stringOne !== stringTwo)
        {
            return false
        }
        return true

        
    }
}


// counter x -> len string
// map -> {letter: count}
/**
 * The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

 

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
 */

/*** create an array
 *  push the difference between left and right pointers to the array when s[i] !== s[j]
 * return Math.max of the array
 * ***/ 
const maxPower = function(s) {
    if (s.length === 1) return 1
    let max = []
    let i = 0
    let j = 1

    while (j <= s.length) {
        if (s[i] !== s[j]) {
            max.push(j - i)
            i = j
        }
        j++
    }
    return Math.max(...max)
}

/***
 * 
 */
const maxPower = (s) => {
    let max = 1
    let i = 0
    for (let j = 0; j < s.length; j++) {
        if (s[i] !== s[j]) {
            i = j
        }
        if ((j - i) + 1 > max) {
            max = (j - i) + 1
        }
    }
    return max
}
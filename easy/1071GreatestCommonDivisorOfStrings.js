/**
 * 1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

Example 4:
Input: str1 = "ABCDEF", str2 = "ABC"
Output: ""
 
Constraints:
1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1 and str2 consist of English uppercase letters.
 */

const puttingStringsTogether = function(string, howManyTimes) {
    if (howManyTimes === 1) return string;
    return string + puttingStringsTogether(string, howManyTimes - 1)
}

const gcdOfStrings = function(str1, str2) {
    let divisor = ""
    let i = 0
    while (i < str2.length) {
        let currDivisor = str2.slice(0, i + 1)
        if (str1.length % currDivisor.length === 0 && str2.length % currDivisor.length === 0) {
            if (str1 === (puttingStringsTogether(currDivisor, str1.length/currDivisor.length)) && str2 === (puttingStringsTogether(currDivisor, str2.length/currDivisor.length))) {
                divisor = currDivisor;
            }
        }
        i++
    }
    return divisor
}

console.log(gcdOfStrings("ABCABC", "AB"))
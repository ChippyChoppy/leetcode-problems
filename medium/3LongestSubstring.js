const lengthOfLongestSubstring = (s) => {
    let currSubString = [];
    let longestLength = 0;

    for (let i = 0; i < s.length; i++) {
        const charIdx = currSubString.indexOf(s[i])
        if (charIdx !== -1) {
            currSubString.splice(0, charIdx + 1)
        }
        currSubString.push(s[1])
        longestLength = Math.max(longestLength, currSubString.length)
    }
    return longestLength
}

console.log(lengthOfLongestSubstring('abcabcdabc'))
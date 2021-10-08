/**
 * 383. Ransom Note
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. 
*/

const canConstruct = function(ransomeNote, magazine) {
    const letterBank = new Map()
    for (let char of magazine) {
        letterBank[char] ? letterBank[char]++ : letterBank[char] = 1
        console.log("available", letterBank)
    }
    for (let char of ransomeNote) {
        if (!letterBank[char]) return false;
        letterBank[char]--
        console.log("leftover", letterBank)
    }
    return true 
}

console.log(canConstruct("give me money","abcdef ghijklmno pqrsvwxyz eem"))
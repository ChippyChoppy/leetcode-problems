/**
 * 202. Happy Number
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false

Constraints:
1 <= n <= 231 - 1
 */

const isHappy = (n) => {
    let happyHash = new Set()
    let happyNum = true 
    while (n !== 1) {
        let squaredSum = 0
        while (n > 0) {
            console.log("line33", "n", n)
            console.log("line34", n % 10, "*", n % 10, "=", (n%10) * (n%10))
            squaredSum += (n % 10) * (n % 10)
            console.log("line36", "summed", squaredSum)
            n = Math.floor(n / 10)
            console.log("line38", "n", n)
        }
        if (!happyHash.has(squaredSum)) {
            happyHash.add(squaredSum)
            n = squaredSum
            console.log("line43", "hash", happyHash)
        } else {
            happyNum = false
            return happyNum
        }
    }
    return happyNum
}

console.log(isHappy(19))
/* 342. Power of Four

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true */

const isPowerOfFour = function(n) {
    if (n === 1) return true
    else if (n <= 3) return false
    else if (n % 4 !== 0) return false 
    return isPowerOfFour(n / 4)
}

console.log(isPowerOfFour(4))

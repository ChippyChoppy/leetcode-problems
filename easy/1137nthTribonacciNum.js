/**
 * The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537
 */

const tribonacci = function(n) {
    const tribArray = [0,1,1]
    if (n < 3) {
        return tribArray[n]
    }
    for (let i = 3; i <= n; i++) {
        console.log(tribArray[i - 3], '+', tribArray[i - 2], '+', tribArray[i - 1], '=', tribArray[i - 3] + tribArray[i - 2] + tribArray[i - 1])
        tribArray.push(tribArray[i-3] + tribArray[i-2] + tribArray[i - 1])
    }
    return tribArray[n]
}

console.log(tribonacci(25))
/**
 * 70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

const climbStairs = (n) => {
    let stairSteps = new Array(n + 1).fill(0)
    stairSteps[0] = 1
    stairSteps[1] = 1
    for (let i = 2; i <= n; i++) {
        stairSteps[i] = stairSteps[i - 1] + stairSteps[i - 2]
    }
    return stairSteps[n]
}
console.log(climbStairs(5))
/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
 */

const canJump = function(nums) {
    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maxJump < i) return false;
        maxJump = Math.max(maxJump, i + nums[i])
    }
    return true;
}

console.log(canJump([3,2,1,0,4]))
console.log(canJump([3,2,1,1,4]))

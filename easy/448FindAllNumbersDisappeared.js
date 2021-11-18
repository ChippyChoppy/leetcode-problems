/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
 */ 

const findDisappearedNumbers = (nums) => {
    nums.sort((a,b) => a - b)
    const numSet = new Set()
    let disappeared = []
    for (let num of nums) {
        numSet.add(num)
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            disappeared.push(i)
        }
    }
    return disappeared
}

console.log(findDisappearedNumbers([1,2,3,4,6,8,9,11,1,1,2,5,7]))
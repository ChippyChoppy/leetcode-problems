/**
 * 219. Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
 */

// const containsDupes = (nums, k) => {
//     const dupes = {}
//     let hasDupes = false
//     let i = 0
//     while (i < nums.length) {
//         let key = nums[i]
//         console.log("key", key)
//         console.log("dupes key", dupes[key])
//         console.log(key in dupes)
//         !key in dupes ? dupes[key] = i : Math.abs(i - dupes[key]) <= k ? hasDupes = true : dupes[key] = i
//         if (hasDupes === true) break
//         i++
//         console.log(dupes, hasDupes)
//     }
//     return hasDupes
// }
// console.log(containsDupes([1, 1, 6, 1, 2, 4, 3, 1, 1], 1))

var containsNearbyDuplicate = function (nums, k) {
    const dupesMap = new Map()
    let i = 0
    while (i < nums.length) {
        console.log(dupesMap)
        if (dupesMap.has(nums[i])) {
            console.log(Math.abs(i - dupesMap.get(nums[i])))
            if (Math.abs(i - dupesMap.get(nums[i])) <= k) {
                return true
            }
        }
        dupesMap.set(nums[i], i)
        i++
    }
    return false
};

console.log(containsNearbyDuplicate([1, 0, 3, 2, 1, 0, 1, 1], 1))
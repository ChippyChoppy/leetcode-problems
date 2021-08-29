/**
 * 34. Find First and Last Position of Element in Sorted Array
Medium

6929

229

Add to List

Share
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

const searchRange = (nums,target) => {
    let first = nums.indexOf(target)
    let last = nums.lastIndexOf(target)

    if (first === 0 || last === 0) return [first,last]
    if (!first) return [-1,-1]
    else return[first,last]
};

console.log(searchRange([5,7,7,8,8,8,8,9,10], 8))
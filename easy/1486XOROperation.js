/*
Given an integer n and an integer start.
Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.
*/

const xorOperation = function(n, start) {
    let nums = [...Array(n)].map((num, i) => {
      return num = start + 2 * i
    })
    return nums.reduce((a,b) => a ^ b)
  }
  
  /*
  create and fill nums array of length n
  fill using .map with num = start + 2 * i
  use .reduce to return XOR of array
  */
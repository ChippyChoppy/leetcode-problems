const numberOfArithmeticSlices = (nums) => {
    if (nums.length < 3) return 0;
    let howMany = 0
    let holding = 0

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            holding += 1
            howMany += holding 
        } else {
            holding = 0
        }
    }
    return howMany;
}
console.log(numberOfArithmeticSlices([1,2,3,5,6,7,8,10,12,14]))
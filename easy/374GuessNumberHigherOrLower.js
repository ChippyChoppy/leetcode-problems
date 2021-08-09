/**We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked. */

const guess = function(num, pick) {
    if (num === pick) return 0
    else if (num > pick) return -1
    else return 1
}

const guessNumber = function(n, pick) {
    let left = 1;
    let right = n;

    while (left < right) {
        //find the middle of the range
        let mid = Math.floor(left + (right - left) / 2)
        //declare and assign result to 'res' to call the built in guess API, enter 'mid' as argument to narrow down pick
        let res = guess(mid, pick)
        if (res === 0) return mid //congrats, the middle was the pick
        else if (res > 0) { // the pick is greater than the midpoint, so reasign left to 'mid + 1', narrowing the window and running the loop again
            left = mid + 1;
        } else { // the pick is less than the midpoint, so reassign right to 'mid - 1', narrowing the window and running the loop again
            right = mid - 1
        }
    }
    return left // used Math.floor above
}

console.log(guessNumber(100,99))
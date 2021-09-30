/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    // set up a boolean array, of length n, fill it with true, we'll assume all nums are prime to start then eliminate them
    isPrime = new Array(n).fill(true)
    
    // start i at 2 because 0 and 1 are irrelevant, only loop until i * i < length, 
    // shortens our loop, and we can do it because if it's squared it can't be prime,
    for (let i = 2; i * i < isPrime.length; i++) {
        // console.log("i -->", i, "squared -->", i * i)
        // first loop everything will be true, and will turn every even number false since 2 is the only even number that is prime
        if(isPrime[i]) {
            // while technically this nested loop makes it SEEM like it'll be O(n^2)
            // but, since we're breaking when j * i < length it's not true O(n^2)
            // Sieve of Eratosthenes is O (n log log n)
            for (let j = i; j * i < isPrime.length; j++) {
                // console.log("j -->", j, "j * i -->", j * i)
                // console.log("before", isPrime[i * j])
                isPrime[i * j] = false
                // console.log("after", isPrime[i * j])

                // console.log("!prime = F", isPrime)
            }
        }
    }
            console.log(isPrime[7])

    let totalPrime = 0
    //start at 2 since it's our known first prime number, and count what is still true
    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i]) {
            totalPrime++;
        }
    }
    return totalPrime
};

console.log(countPrimes(30))
/*
n = 30, we're going to ignore index 0 and 1 because they are alway irrelevant when talking about prime numbers
    T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T  T <-- boolean
    2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 <-- index

i = 2 * j = 2 false = [ 2 : 4, 3 : 6, 4 : 8, 5 : 10, 6 : 12, 7 : 14, 8 : 16, 9 : 18, 10 : 20, 11 : 22, 12 : 24, 13 : 26, 14 : 28] --> makes all evens false

[T,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T,  F,  T]
[2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
------------

i = 3 * j = 3 false = [ 3 : 9, 4 : 12, 5 : 15, 6 : 18, 7 : 21, 8 : 24, 9 : 27, 10 : 30 ] --> makes all multiples of 3 false

[T,  T,  F,  T,  F,  T,  F,  F,  F,  T,  F,  T,  F,  F,  F,  T,  F,  T,  F,  F,  F,  T,  F,  T,  F,  F,  F,  T]
[2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
------------

i = 4 * j = 4 Never hits inner 'j' loop because 4 has already been set to false

------------
i = 5 * j = 5 false = [5 : 25] --> hits our first multiple of 5 that hasn't already been taken care of by the previous filters
[T,  T,  F,  T,  F,  T,  F,  F,  F,  T,  F,  T,  F,  F,  F,  T,  F,  T,  F,  F,  F,  T,  F,  F,  F,  F,  F,  T]
[2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

isPrime = 10
*/
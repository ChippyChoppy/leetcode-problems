/**
 * Write a recursive function called flatten which accepts an array of arrays 
 * and returns a new array with all values flattened.
 */

function flatten(arr) {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArray = flatArray.concat(flatten(arr[i]))
        } else {
            flatArray.push(arr[i])
        }
    }
    return flatArray
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
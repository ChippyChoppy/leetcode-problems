/**
 * 587. Erect the Fence
Hard

You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.

You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well fenced only if all the trees are enclosed.

Return the coordinates of trees that are exactly located on the fence perimeter.

Example 1:
Input: points = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[3,3],[2,4],[4,2]]

Example 2:
Input: points = [[1,2],[2,2],[4,2]]
Output: [[4,2],[2,2],[1,2]]
 
Constraints:
1 <= points.length <= 3000
points[i].length == 2
0 <= xi, yi <= 100
All the given points are unique.
 */

const outerTrees = (trees) => {
    let sorted = trees.sort((b,a) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

    let stack = [];

    const checkDistance = (arr, currentLocation) => {
        (arr[1][1] - arr[0][1]) * (currentLocation[0] - arr[1][0]) <(arr[1][0] - arr[0][0]) * (currentLocation[1] - arr[1][1]);
    }

    for (let tree of sorted) {
        while (stack.length >= 2 && checkDistance(stack.slice(-2), tree)) {
            stack.pop();
        }
        stack.push(tree);
    }

    for (let i = trees.length - 1; i >= 0; i--) {
        while (stack.length >= 2 && checkDistance(stack.slice(-2), sorted[i])) {
            stack.pop();
        }
        stack.push(sorted[i]);
    }
    return [...new Set(stack.map(JSON.stringify))].map(JSON.parse);
}
/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

Example 1:
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Example 2:
Input: n = 1
Output: [[1]]

Constraints:
1 <= n <= 8
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

const generateTrees = (n) => {
    if (n < 1) return [];
    return generateNodes(1,n)
};

const generateNodes = (start,end) => {
    let nodes = []
    let node = null
    let left = []
    let right = []

    for (let i = start; i <=end; i++) {
        left = generateNodes(start, i - 1)
        right = generateNodes(i + 1, end)
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                node = new TreeNode(i)
                node.left = left[j]
                node.right = right[k]
                nodes.push(node)
            }
        }
    }
    return nodes.length ? nodes : [null]
}

console.log(generateTrees(3))
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.
*** Custom Judge: ***
The inputs to the judge are given as follows (your program is not given these inputs):
intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
*/

/*** first solution, very slow, nested loops, not optimal, but makes sense to read ***/
const getIntersectionNode = function(headA, headB) {
    if (headA === headB) return headA
  //   console.log(headA, headB)
  //   console.log(headA.next.next === headB.next.next.next) // this console log is for the first example
    let currentA = headA
    let currentB = headB
    let nextA = headA.next
    let nextB = headB.next
    while (currentA) {
  //     console.log('at the top', currentA, currentB)
      while (currentB) {
        if (currentA === currentB) {
  //         console.log('inside if', currentA.val)
          return currentA
        } else {
          currentB = nextB
          nextB = nextB ? nextB.next : null
  //         console.log('inside else', 'currB', currentB, 'nextB', nextB)
        }
      }
      currentA = nextA
      nextA = nextA ? nextA.next : null
      currentB = headB
      nextB = headB.next
    }
    return null
  }
  
  /*** second solution, fast, optimized, kinda confusing, use the console logs to see what's happening! ***/
  const getIntersectionNode = function(headA, headB) {
    let a = headA
    let b = headB
    while (a !== b) {
      a = !a ? headB : a.next
      b = !b ? headA : b.next
  //     console.log('a', a)
  //     console.log('b', b)
    }
    return a
  }
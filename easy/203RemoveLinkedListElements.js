/*
Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val,
and return the new head.
*/

const removeElements = function(head, val) {
    if (!head) return head
    let current = head.next
    let previous = head
    while (current) {
      if (current.val === val) {
        current = current.next
        previous.next = current
      } else {
        previous = current
        current = current.next
      }
    }
    if (head.val === val) return head.next
    return head
  };
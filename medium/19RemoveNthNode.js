var removeNthFromEnd = function(head, n) {
    let left = head
    let right = head
    let i = 0
    if (!head.next) return head = head.next
    while (i < n) {
        right = right.next 
        i++
    }
    while (right && right.next) {
        left = left.next
        right = right.next
    }
    if (!right) {
        head = head.next
    } else {
        left.next = left.next ? left.next.next : null
    }
    return head
};
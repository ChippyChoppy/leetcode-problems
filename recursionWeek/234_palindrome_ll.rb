# 234. Palindrome Linked List
# Given the head of a singly linked list, return true if it is a palindrome.

# Example 1:
# Input: head = [1,2,2,1]
# Output: true

# Example 2:
# Input: head = [1,2]
# Output: false
 
# Constraints:
# The number of nodes in the list is in the range [1, 105].
# 0 <= Node.val <= 9
# Follow up: Could you do it in O(n) time and O(1) space?

def is_palindrome(head)
    @left = head
    def build_stack(node)
        if node == null
            return true 
        end
        overall_truthy = build_stack(node.next)
        equality_check = @left.val === node.val
        @left = @left.next
        return overall_truthy && equality_check
    end
    build_stack(head)
end
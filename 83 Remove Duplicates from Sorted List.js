https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/

83. Remove Duplicates from Sorted List
Easy

1779

122

Add to List

Share
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// we have a head, and current means whichever linked list node we are on
// each node has a value assigned to the property. when you get to the last node, has a value like everything else, and then it points to the next value
// keep head in the same place and then move the current along the list
// check if current. val is the same as current . next val. then reassign it to be current.next
// this will then move from 1 1 2 to 1 --> 2 and skip the middle 1.
// reassign current is key

// head is the start of the linked list

// example:
// 1 2 3 4 4 null
// h         END

let deleteDuplicates = function(head) {
  let current = head;

  // loop over the linked list:
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
        // while loops checks if current !== null and current.next !=== null so it breaks out of the loop
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head; // connected to every other node in the linked list so returning head returns the entire linked list
}

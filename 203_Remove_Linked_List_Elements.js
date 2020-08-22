https://leetcode.com/problems/remove-linked-list-elements/submissions/


203. Remove Linked List Elements
Easy

1872

95

Add to List

Share
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
Accepted
372.5K
Submissions
962K

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head;

  var node = head;
  var pre;

  while (node) {
    if (node.val === val) {
      if (!pre) {
        head = head.next;
      } else {
        pre.next = node.next;
      }
    } else {
      pre = node;
    }
    node = node.next;
  }

  return head;
};

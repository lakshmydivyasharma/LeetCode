https://leetcode.com/problems/swap-nodes-in-pairs/submissions/


24. Swap Nodes in Pairs
Medium

2955

192

Add to List

Share
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.



Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]


Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var out = new ListNode(0);
  var now = out;

  out.next = head;

  while (now.next && now.next.next) {
    now = swap(now, now.next, now.next.next);
  }

  return out.next;
};

var swap = function (a, b, c) {
  a.next = c;
  b.next = c.next;
  c.next = b;
  return b;
};

// Time complexity : O(n).
// Space complexity : O(1).

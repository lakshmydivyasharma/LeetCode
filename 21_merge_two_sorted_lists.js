https://leetcode.com/problems/merge-two-sorted-lists/submissions/
21. Merge Two Sorted Lists
Easy

4207

589

Add to List

Share
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const linkThem = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater);
        return smaller;
    };
    return l1.val < l2.val ? linkThem(l1,l2) : linkThem(l2,l1);
};

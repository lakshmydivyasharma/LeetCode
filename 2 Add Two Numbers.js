https://leetcode.com/problems/add-two-numbers/
2. Add Two Numbers
Medium

8385

2132

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.



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
// notes:
// using linked list, and adding a list link in the end to get a final result
// between 4 and 6, the value is 10 in example. it has to be a single digit that is stored in the linked list
// reverse order
// for every given node, we are going to grab the value from the first linked list and second linked list and we are going to carry it over.
// every single node element has a single digit number, so highest i can get is 18
// if there is a carry over, itll be one

// edge case to think about: how to properly increment. what if one is empty and the othe isnt?


var addTwoNumbers = function(l1, l2){
   // traverse through the entire linked list, both lists even if length isnt the sme
    let head = new ListNode(0)
    let node = head
    let carry = 0

    while (l1 || l2){
        let l1Value = l1 ? l1.val : 0
        let l2Value = l2 ? l2.val : 0

        let sum = l1Value + l2Value + carry
        // need a carrry over of 1 value or 0, so go back and instantiate that
        carry = 0 // after creating sum herer make sure to rest carry to zero
        let newValue = sum

        if (sum > 9){
            newValue = sum % 10
            carry = 1
        }

        node.next = new ListNode(newValue)
        node = node.next

        if (l1){
            l1 = l1.next
        }
        if (l2){
           l2 = l2.next
        }
    }
    if (carry){
        node.next = new ListNode(carry)
    }
    return head.next
};

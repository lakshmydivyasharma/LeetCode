https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/

108. Convert Sorted Array to Binary Search Tree
Easy

2580

220

Add to List

Share
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5


 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var buildBST = function(l, r) {
    if (l > r) return null;
    let m = l + Math.floor((r - l) / 2);
    let root = new TreeNode(nums[m]);
    root.left = buildBST(l, m - 1);
    root.right = buildBST(m + 1, r);
    return root;
  }
  return buildBST(0, nums.length - 1);
};

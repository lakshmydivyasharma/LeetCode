https://leetcode.com/problems/balanced-binary-tree/submissions/

110. Balanced Binary Tree
Easy

2410

177

Add to List

Share
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var maxHeight = function(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
};

var minHeight = function(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.min(minHeight(node.left), minHeight(node.right));
};

var height = function(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(height(node.left), height(node.right));
};

var isBalanced = function(root) {
  if (root === null) {
    return true;
  }

  // var maxh = maxHeight(root);
  // var minh = minHeight(root);

  // return Math.abs(maxh - minh) <= 1;

  var lh = height(root.left);
  var rh = height(root.right);

  var diff = Math.abs(lh - rh);

  if (diff <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  } else {
    return false;
  }
};

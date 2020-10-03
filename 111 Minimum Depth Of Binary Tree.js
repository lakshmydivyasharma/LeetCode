https://leetcode.com/problems/minimum-depth-of-binary-tree/

111. Minimum Depth of Binary Tree
Easy

1522

703

Add to List

Share
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.

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
 * @return {number}
 */
var minDepth = function(root) {
   if (!root) return 0;
   var min = 999999999;
   search(root, 1);

   function search(root, level) {
     if (root) {
       if (!root.left && !root.right) {
         if (min > level) min = level;
       }
       search(root.left, level + 1);
       search(root.right, level + 1);
     }
   }

   return min;
 };

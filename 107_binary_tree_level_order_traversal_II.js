https://leetcode.com/problems/binary-tree-level-order-traversal-ii/submissions/

107. Binary Tree Level Order Traversal II
Easy

1552

216

Add to List

Share
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root)
{
    var queue=[], resArr=[];

    if(!root)
        return [];

    queue.push(root);
    while(queue.length>0)
    {
        var arr=[], length=queue.length;
        for(var i=0; i<length; i++)
        {
            var tempNode=new TreeNode();
            tempNode= queue.shift();
            if(tempNode.left!=null)
                queue.push(tempNode.left);
            if(tempNode.right!=null)
                queue.push(tempNode.right);
            arr.push(tempNode.val);
        }
        resArr.unshift(arr);
    }
    return resArr;
};

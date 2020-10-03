100. Same Tree
Easy

2440

68

Add to List

Share
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

NOTES:
//check for roots, if one is null then both will be null
// if p is null and e is null then return true
// if only one is null then the other is not null then return false
// if both are not null, then return false otherwise, this root is the same

// then check for the left subtree
// if trees are same, check the lfet subtree and right subtree so if it is relative eat this point and not returned then return whatever the function is and call if f(p left q left )
// also do the same for p right and q right then the function is done

// this will recursively call on it

var isSameTree = function(p, q) {
  var queue1 = [];
  var queue2 = [];

  queue1.push(p);
  queue2.push(q);

  while (queue1.length && queue2.length) {
    var node1 = queue1.shift();
    var node2 = queue2.shift();
    var val1;
    var val2;

    if (node1 === null) {
      val1 = null;
    } else {
      val1 = node1.val;
      queue1.push(node1.left);
      queue1.push(node1.right);
    }

    if (node2 === null) {
      val2 = null;
    } else {
      val2 = node2.val;
      queue2.push(node2.left);
      queue2.push(node2.right);
    }

    if (val1 !== val2) {
      return false;
    }
  }

  return queue1.length === queue2.length;
};

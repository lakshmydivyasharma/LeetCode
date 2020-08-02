
https://leetcode.com/problems/recover-binary-search-tree/submissions/

99. Recover Binary Search Tree
Hard

1605

75

Add to List

Share
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2
Example 2:

Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
Follow up:

A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?
Accepted
167.1K
Submissions
422.3K
Seen this question in a real interview before?



/**
 * space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let pre = null;
    let cur = null;
    let head, last, first = true;

    traversal(root, (node) => {
        pre = cur;
        cur = node;

        if (pre && cur && pre.val > cur.val) {
            if (first) {
                head = pre;
                first = false;
            }
            last = cur;
        }
    });

    [last.val, head.val] = [head.val, last.val];

    function traversal(node, callback) {
        if (!node) {
            return;
        }
        traversal(node.left, callback);
        callback(node);
        traversal(node.right, callback);
    }
};


/**
 * Space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let pre = null;
    let cur = null;
    let head, last, first = true;

    inorderTraversal(root, (node) => {
        pre = cur;
        cur = node;

        if (pre && cur && pre.val > cur.val) {
            if (first) {
                head = pre;
                first = false;
            }
            last = cur;
        }
    });

    [last.val, head.val] = [head.val, last.val];

    function inorderTraversal(root, callback) {
        let cur = root;
        const stack = [];

        while (cur) {
            stack.push(cur);
            cur = cur.left
        }

        while (stack.length > 0) {
            cur = stack.pop();
            callback(cur);
            cur = cur.right;
            while (cur) {
                stack.push(cur);
                cur = cur.left
            }
        }
    }
};

/**
 * Space O(1)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

    let pre = null;
    let cur = null;
    let head, last, first = true;

    inorderTraversal(root, (node) => {
        pre = cur;
        cur = node;

        if (pre && cur && pre.val > cur.val) {
            if (first) {
                head = pre;
                first = false;
            }
            last = cur;
        }
    });

    [last.val, head.val] = [head.val, last.val];

    function inorderTraversal(root ,callback) {

        let current = root;
        let inOrderPre = null;

        while (current){
            if(current.left === null){
                callback(current);
                current = current.right;
            }else{
                //中序遍历的前驱节点
                inOrderPre = current.left;
                while (inOrderPre.right && inOrderPre.right != current){
                    inOrderPre = inOrderPre.right;
                }

                if(inOrderPre.right === null){
                    inOrderPre.right = current;
                    current = current.left;
                }else{
                    inOrderPre.right = null;
                    callback(current);
                    current = current.right;
                }
            }
        }
    }
};

https://leetcode.com/problems/generate-parentheses/

22. Generate Parentheses
Medium

5253

269

Add to List

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]

/**
 * @param {number} n
 * @return {string[]}
 */


// Basically it recursively builds a combination in a treelike fashion. then push out the combinations into an array
// depth for search from cracking the coding interview

var generateParenthesis = function(n) {
    var res = []
    dfs(res, '', 0, 0, n)
    return res

    function dfs (ans, cur, left, right, max) {
        if(cur.length === max * 2) {
            ans.push(cur)
            return
        }
        if(left < max) {
            dfs(ans, cur + '(', left + 1, right , max)
        }

        if(right < left) {
            dfs(ans, cur + ')', left, right + 1 , max)
        }
    }
};

https://leetcode.com/problems/valid-parentheses/submissions/
20. Valid Parentheses
Easy

5098

222

Add to List

Share
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  var stack = [];
  var len = s.length;
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (var i = 0; i < len; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      // pop method removes the last element from an array and returns that value to the caller.
      stack.pop();
    } else {
      // push method adds new items to the end of an array, and returns the new length.
      stack.push(s[i]);
    }
  }
    // if its equal to zero, you wont have any remainder paranthesis
  return stack.length === 0;
};

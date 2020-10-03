https://leetcode.com/problems/valid-palindrome/submissions/

125. Valid Palindrome
Easy

1322

3059

Add to List

Share
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false


Constraints:

s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!(/[a-z|A-Z|\d]+/g).test(s)) return true
  s = s.match(/[a-z|A-Z|\d]+/g).join('')
  var middle = Math.floor(s.length / 2);
  var length = s.length - 1;
  var n = 0;

  while (n <= middle) {
    var left = s[n++];
    var right = s[length--];

    if (left === right) continue;
    var leftCode = left.charCodeAt();
    var rightCode = right.charCodeAt();

    if (leftCode < 65 || rightCode < 65) return false;
    if (Math.abs(leftCode - rightCode) !== 32) return false;
  }

  return true;
};

https://leetcode.com/problems/length-of-last-word/submissions/

58. Length of Last Word
Easy

679

2482

Add to List

Share
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var str = s.trim();
  var len = str.length;
  var i = len - 1;
  while (i >= 0 && str[i] !== ' ') i--;
  return len - 1 - i;
};

https://leetcode.com/problems/implement-strstr/submissions/

28. Implement strStr()
Easy

1608

1920

Add to List

Share
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle.charAt(j) != haystack.charAt(i + j)) break;
    }
  }
};

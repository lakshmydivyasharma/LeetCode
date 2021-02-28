https://leetcode.com/problems/longest-palindromic-substring/submissions/

5. Longest Palindromic Substring
Medium

7762

565

Add to List

Share
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"  --- bab or aba are both the longest, size 3
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

NOTES:
a substring is a contiguous sequence of characters within a string.

whats  the brute force?
generate all substrings of a string in n^2 time.
n^2 x n = n^3
outter for loop

then check if each one of those results have a for loop

two cases for palindrome --> started from the middle of the string; left or right one;

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var a = s.split(''),left, right,
        size = a.length,
        max = Number.MIN_VALUE,
        start = 0;

    for(var i = 0; i < size; i = i + 0.5){
        left = Math.ceil(i - 1);
        right = Math.floor(i + 1);
        while(left >=0 && right < size) {
            if (a[left] === a[right]){
                left--;
                right++;
            } else { break;}
        }
        if (right - left - 1 > max){
            max = right - left - 1;
            start = left + 1;
        }
    }

    return s.slice(start, start + max);

};

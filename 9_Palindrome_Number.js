https://leetcode.com/problems/palindrome-number/

9. Palindrome Number
Easy

2502

1595

Add to List

Share
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

Accepted
1M
Submissions
2.1M


/**
 * @param {number} x
 * @return {boolean}
 */

// since -2 will read 2-, i have to write that if x < 0, return false;
// First, we took care of the following cases

// if X is negative ( not a palindrome )
// if X is less than ten ( always a palindrome )
// if X has 0 at its last digit and X is not 0 itself ( not a palindrome ) e.g. 10, 130 whose reverse will be 01, 031 respectively
// Next, the logic is straight forward

// convert the number to a string
// take two pointers, at the start and end of the string
// if the digits at both pointers are different, it's not a palindrome
// we increment starting pointer and decrement the end pointer iteratively
// if the loop exits, then it was a palindrome


var isPalindrome = function (x) {
  // check if the number is less than zero
  // if the number is less than zero, return false
  if (x < 0) {
    return false;
  }
  // single digit numbers are read the same both ways,
  // other form of logic is if 0 <= x < 10 in JS, then it reads true
  if (x < 10) {
    return true;
  }

// initialize the reverse variable with 0
// loop over the number until it's less than or equal to zero (at one point it will be)
// now, multiply the reversed variable with 10 and add the last digit of the number to it
// remove the last digit of X
// when the loop ends, we will have our reversed number
// if the reversed number is equal to temp ( initial number ), return true
// else, false

    if (x % 10 === 0 && x !== 0) {
    return false;
  }

  const str = String(x);
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};



Problem with no annotations:
var isPalindrome = function (x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  const str = String(x);
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

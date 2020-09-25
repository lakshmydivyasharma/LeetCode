https://leetcode.com/problems/ugly-number/submissions/

263. Ugly Number
Easy

563

676

Add to List

Share
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.
Note:

1 is typically treated as an ugly number.
Input is within the 32-bit signed integer range: [−231,  231 − 1].


/**
divide the number by these ugly numbers.... so for examplee
14/2 = 7 but 7 cannot be divided by 2 3 or 5 after 2.
so run a while loop per number and then see if that modulus comes out to 0 then move on to the next while loop. if it returrrns 1 then the number is ugly

write a conditional statement in the top saying if thte num <=0 then return false bc its negative
 */
var isUgly = function(num) {
    if (num <= 0)
        return false;
    if (num === 1)
        return true;
    while (num % 2 === 0) num /= 2;
    while (num % 3 === 0) num /= 3;
    while (num % 5 === 0) num /= 5;

    return num === 1;
};

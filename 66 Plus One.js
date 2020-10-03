https://leetcode.com/problems/plus-one/

66. Plus One
Easy

1708

2571

Add to List

Share
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.



Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]


Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9

// notes:
// example one says 123 so then i need to get 124 but then represented individually in an array
// problem comes when the final digit is a 9, so add one then you have to carry over

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--){
       // if carry operation does not need to be done
        if(digits[i] < 9){
           digits[i] = digits[i] + 1
            return digits;
        } // if it is a 9, carry over:
        else{
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits
};

Time Complexity: O(n)
Space Complexity: O(1)

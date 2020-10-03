https://leetcode.com/problems/power-of-two/submissions/

231. Power of Two
Easy

1032

203

Add to List

Share
Given an integer n, write a function to determine if it is a power of two.



Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
Example 4:

Input: n = 4
Output: true
Example 5:

Input: n = 5
Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 1; // 1 is a valid power of 2

    while (i < n){ // going to make i a valid power of 2
        i *= 2;
    }

    return i === n; // return i is equal to input number
};

//i will always be a valid number of 2

// Time Complexity: O(log N) if Input doubles, the while loop runs one more itme
// space complexity: O(1)

https://leetcode.com/problems/single-number/submissions/

136. Single Number
Easy

4669

165

Add to List

Share
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var single;
    for (var i = 0, l = nums.length; i < l; i++) {
        single ^= nums[i];
    }
    return single;
};

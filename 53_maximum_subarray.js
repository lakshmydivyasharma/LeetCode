https://leetcode.com/problems/maximum-subarray/submissions/

53. Maximum Subarray
Easy

8320

398

Add to List

Share
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Accepted
1.1M
Submissions
2.3M
Seen this question in a real interview before?


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var len = nums.length;
  var max = Number.MIN_SAFE_INTEGER;
  var before = 0;
  var now = 0;

  if (!len) return 0;

  for (var i = 0; i < len; i++) {
    now = Math.max(before + nums[i], nums[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;
};

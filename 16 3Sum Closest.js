https://leetcode.com/problems/3sum-closest/

16. 3Sum Closest
Medium

2518

156

Add to List

Share
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
Accepted
512,469
Submissions
1,111,051

var threeSumClosest = function(nums, target) {
  var len = nums.length;
  var res = nums[0] + nums[1] + nums[2];
  var sum = 0;
  var l = 0;
  var r = 0;
  nums.sort((a, b) => (a - b));
  for (var i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
    }
  }
  return res;
};

https://leetcode.com/problems/3sum/

15. 3Sum
Medium

7925

873

Add to List

Share
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


// So the first step is to sort out the array by ascending order.
// Then do the iteration for each element.
// find combinations that produce “sum === 0"
// we have sorted out our array in this stage, so that means the numbers on the left side will always be smaller than the numbers on the right side, in order to achieve our result, we need to start with the smallest number and the biggest number.
// leftPointer = i + 1 and rightPointer = numbers.length-1.
// finally---- evaluating combinations of three elements
// three possible answer:
    // The sum is greater than 0.
    // The sum is less than 0.
    // The sum is equal to 0.
// once you find it, then reset the pointers and do it again till you hit the end

var threeSum = function(nums) {
  var solutions = [];
  var target = 0;
  nums.sort(function(a, b) {
      return a - b;
  });
  for(var i = 0; i < nums.length - 2; i++) {
      if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      var lo = i + 1;
      var hi = nums.length - 1;
      var sum = - nums[i];
      while(lo < hi) {
          if(nums[lo] + nums[hi] === sum) {
              solutions.push([nums[i],nums[lo],nums[hi]]);
              while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
              while (lo < hi && nums[hi] == nums[hi-1]) hi--;
              lo++; hi--;
          }else if (nums[lo] + nums[hi] > sum) {
              hi--;
          }else {
              lo++;
          }
      }
      }
};
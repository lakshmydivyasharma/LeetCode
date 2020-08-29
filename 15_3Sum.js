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


const threeSum = (nums) => {
  let len = nums.length;
  if(len < 3) return [];
  nums.sort(function(a,b){
    return a-b;
  })
  if(nums[0] > 0 || nums[0] + nums[1] + nums[2] > 0) return [];
  if(len === 3) {
    if(nums[0] + nums[1] + nums[2] === 0) return [nums];
    else return [];
  }
  //console.log(nums);
  let result = [];
  let checker = '';
  for(let i=0; i<len-2; i++){
    for(let j=i+1; j<len-1; j++){
      //since the array is sorted, we only need to start from
      //the last index that where value was found, since
      //nums[k] has to be a lower number.
      for(let start = len-1, k = start; k>i, k>j;) {
        let triplet = [nums[i], nums[j], nums[k]];
        let tripletString = '/' + nums[i] + ' ' + nums[j] + ' ' + nums[k] + '/';
        if(nums[i] + nums[j] === -nums[k] && !checker.includes(tripletString)){
          result.push(triplet);
          checker += tripletString;
          start--;
          k = start;
        } else {
          k--;
        }
      }
    }
  }
  return result;
};

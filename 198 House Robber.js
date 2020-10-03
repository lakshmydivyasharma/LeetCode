https://leetcode.com/problems/house-robber/submissions/

198. House Robber
Easy

5108

157

Add to List

Share
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.



Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.


Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0]
    } else if(nums.length === 0){
        return 0
    }

    let sorter = []
    sorter[0] = nums[0]
    sorter[1] = Math.max(nums[1], nums[0])
    for(let i = 2; i < nums.length; i++){
        let optionA = sorter[i-2]
        let optionB = sorter[i-1]
        let currentHouse = nums[i]

        if(optionA + currentHouse > optionB){
            sorter[i] = optionA + currentHouse
        } else {
            sorter[i] = optionB
        }

    }

    return sorter[sorter.length-1]
}

// https://leetcode.com/problems/two-sum/
//
// Two Sum
//
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sum = []
    for(i = 0; i < nums.length; i++){
        for(j = i+1; j < nums.length; j++){
            if(nums[i]+ nums[j] === target){
                //push it into an array
                sum.push(i,j)
                return sum
               }
        }
    }
}




// parameters:
// go through each index spot and we want to add up numbers and get the sum
// (target)

// return:
// the index spots that are used

// examples:
// [2,7,11,15]

// target = 18
// 7+11 = 18
// return: [1,2]

// target = 13
// return: [0,2]


// psuedocode:
// for loop
// variable

// 2 for loops
// start with i --> the spot you're in
// lets compare it to j till it finds its match and then push those out of the array
// hey we got this


// function twoIndexSpotsSum(target){
//     var twoSum = []
//         for(i=0; i < twoIndexSpotsSum.length; i++)

// }
//     v
// }
// var twoSum = function(nums, target) {

// };

// https://leetcode.com/problems/permutations/submissions/
//
// 46. Permutations
// Medium
//
// 3807
//
// 104
//
// Add to List
//
// Share
// Given a collection of distinct integers, return all possible permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


Use this link to understand backtracking / recursion:
https://brilliant.org/wiki/recursive-backtracking/
NOTES:
- backtracking is a refined brut force method
- eliminate choices at each node
- revoke the most recent choice, and then backtrack and find a new choice


A permutation of a given set of items is a certain rearrangement of the elements. It can be shown that an array AA of length NN has n!n! permutations. For example the array ['J','O','N'] has the following permutations:

1
2
3
4
5
6
['J', 'O', 'N']
['J', 'N', 'O']
['O', 'J', 'N']
['O', 'N', 'J']
['N', 'J', 'O']
['N', 'O', 'J']

algoritm is based on swapping

first solution:

var permute = function(nums) {

    let prefix = [];
    let results = []
    permutations(prefix, nums, results)
    return results
};

var permutations = (prefix, arr, res) => {
    if (arr.length === 0) return;
    else if (arr.length == 1) {
        prefix.push(arr[0]);
        res.push(prefix);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.slice(0)
        let newP = prefix.slice(0)

        newArr.splice(i, 1)
        newP.push(arr[i])
        permutations(newP, newArr, res)
    }
}


second solution:
const permute = function(nums) {
  const result = [];
  const temp = [];
  // we are using a common strategy to initialize an 'answer' object, and pass it into
  // a recursion helper to modify the values. Sometimes it helps to separate this because
  // there are times you will want to have conditionals or a for loop in the top level code
  // before you call a recursive function.
  findPermutations(temp, nums, result);
  return result;
};

const findPermutations = (temp, nums, result) => {
  if (!nums.length) {
   // Here it is important to call concat(), just a fancy way of copying the original array.
   // See what happens when you remove concat, things will go crazy because you are
   // modifying an object that is referenced elsewhere!
    result.push(temp.concat());
    return;
  }

  for (var i = 0; i < nums.length; i++) {
	const newNum = nums[i];
	// we've picked our new number to add, so add it to our "picked" array called temp
    temp.push(newNum);
	// remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.
    nums.splice(i, 1);
    findPermutations(temp, nums, result);
	// Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3]
    temp.pop();
    nums.splice(i, 0, newNum);
  }
};


THIRD SOLUTION w/ runtime n!
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// array variable is going to be initialized through empty array
// answers is going to have the answers and it will be pushed in there
// if nums.length === 0; then we have exhausted it so lets start there

var permute = function(nums, currentSet=[], answers=[]) {
     if (!nums.length) answers.push([...currentSet]);

     for(let i = 0; i < nums.length; i++){
         // first thing I want to do is remove the current number from our nums;
         // essentially remove everything that doesnt have the current i
         const newNums = nums.filter((n, index) => index!== i);
         currentSet.push(nums[i]); //pushed in current number we have chosen
         // so now call permute and pass in the new nums with the remove number and pass in the current set, and answers
         permute(newNums, currentSet, answers)
         currentSet.pop(); //pop out that last item and add the next number in
     }
     return answers;
}

https://leetcode.com/problems/sqrtx/

69. Sqrt(x)
Easy

1461

1993

Add to List

Share
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.


/**
 * @param {number} x
 * @return {number}
 */


Solution 1:
var mySqrt = function(x){
    // 0, 1, 2, ..... x
    // pick the number, that squar eof it equal smaller than x
    // binary search

    let i = 0;
    let j = x;

    // [i, middle, j], if i is smaller than middle, then move i
    while (i < j){
        const middle = Math.ceil((i + j) / 2) // means if i = j+1 then middle would be j
        const square = middle ** 2
        if(square === x) return middle
        if(square < x){
        i = middle;
        }else{
         j = middle - 1; // wont generate an infinite loop
        }
    }
    return i
};

time complexity: log(x)


Solution 2: using math.floor instead of math.ceil 
var mySqrt = function(x) {
  if (x < 2) return x;
  var left = 1;
  var right = x;
  var mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if ((mid + 1) > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};

// Complexity:

// Time complexity : O(log(n)).
// Space complexity : O(1).

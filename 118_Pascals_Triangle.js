https://leetcode.com/problems/pascals-triangle/submissions/

118. Pascal's Triangle
Easy

1609

116

Add to List

Share
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
Accepted
394.2K
Submissions
750K

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];

//First base case
    if(numRows == 0) {
        return triangle
    }

    for (var i = 0; i < numRows; i++) {

        triangle[i] = [];
//Second base case
        triangle[i][0] = 1;

        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
//The last element of all rows are always 1.
        triangle[i][i] = 1;
    }

    return triangle;
}

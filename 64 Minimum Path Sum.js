https://leetcode.com/problems/minimum-path-sum/submissions/

64. Minimum Path Sum
Medium

4081

78

Add to List

Share
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.



Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
Accepted
494,429
Submissions
885,216

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var m = grid.length;
  var n = (grid[0] || []).length;
  var dp = Array(m);
  var left = 0;
  var top = 0;

  if (!m || !n) return 0;

  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
      left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
      dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
    }
  }

  return dp[m - 1][n - 1];
};

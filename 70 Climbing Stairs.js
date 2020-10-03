https://leetcode.com/problems/climbing-stairs/submissions/

70. Climbing Stairs
Easy

4836

153

Add to List

Share
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:

1 <= n <= 45


/**
 * @param {number} n
 * @return {number}
 */

// the number of ways one can climb stairs is equal to the sum of the number of ways one can climb the steps before N

  var climbStairs = function(n) {

    if (n < 1) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    // a saves the second-to-last sub-state data, b saves the first sub-state data, temp saves the current state data
    let a = 1, b = 2;
    let temp = a + b;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
   };

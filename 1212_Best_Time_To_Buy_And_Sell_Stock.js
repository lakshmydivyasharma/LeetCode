https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

121. Best Time to Buy and Sell Stock
Easy

5560

242

Add to List

Share
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */


// P: prices
// R: #, the maximum amount of profit made from the transaction
// E: [7,1,5,3,6,4] --> 5
//    [7,6,4,3,1] --> 0
//.
// P:
// for loop compare the number in the index spot to every other number AFTER that number, then go down the loop
// calculate the difference
// push out the biggest difference
// else the difference is smaller than the number, return 0



var maxProfit = function(prices) {
   let profit
   let maxProfit = 0

   prices.forEach(function(buy, index) {
       let rest = prices.slice(index + 1)
       if (rest){
         let sell = Math.max(...rest)
           sell > buy ? profit = sell - buy : null
            profit > maxProfit ? maxProfit = profit : null
     }
   })
    return maxProfit
};

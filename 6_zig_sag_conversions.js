https://leetcode.com/problems/zigzag-conversion/

6. ZigZag Conversion
Medium

1677

4618

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows < 2) return s;
  var len = s.length;
  var num = 2 * (numRows - 1);
  var res = Array(numRows).fill('');
  var tmp = 0;
  for (var i = 0; i < len; i++) {
    tmp = i % num;
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }
  return res.join('');
};

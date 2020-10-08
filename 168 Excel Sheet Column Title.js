https://leetcode.com/problems/excel-sheet-column-title/submissions/

168. Excel Sheet Column Title
Easy

1375

266

Add to List

Share
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    while (n) {
        var code = String.fromCharCode( (n - 1) % 26 + 'A'.charCodeAt() );
        n = Math.floor((n - 1) / 26);
        result = code + result;
    }
    return result;
};

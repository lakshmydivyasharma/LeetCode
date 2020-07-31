https://leetcode.com/problems/add-binary/submissions/

67. Add Binary
Easy

1932

282

Add to List

Share
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
Accepted
483.3K
Submissions
1.1M

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length;
    var lenB = b.length;
    var ai = 0;
    var bi = 0;
    var sum = '';
    var carry = 0;
    while(ai < lenA || bi < lenB) {
        var valA = ai < lenA ? parseInt(parseInt(a[lenA - 1 - ai])) : 0;
        var valB = bi < lenB ? parseInt(parseInt(b[lenB - 1 - bi])) : 0;
        var val = valA + valB + carry;
        var rem = val%2;
        carry = val > 1 ? 1 : 0;
        sum = rem + sum;
        ai++;
        bi++;
    }

    return carry > 0 ? carry + sum : sum;
};

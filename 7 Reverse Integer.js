https://leetcode.com/problems/reverse-integer/submissions/

7. Reverse Integer
Easy

3391

5346

Add to List

Share
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.




Divya's notes:
Take the absolute value of the number
convert to string
create a character array
reverse it
join it back to a string
parse the string to a number


Solution:

var reverse = function(x) {
    const isNegative = x< 0 ? true : false;

    if (isNegative){
        x = x *-1;
    }

    let reversed = 0;
    while(x>0){
        reversed = (reversed * 10) + (x % 10);

        x = parseInt(x/10);
    }

    if(reversed > 2**31){
        return 0;
    }

    return isNegative? reversed * -1 : reversed;
};

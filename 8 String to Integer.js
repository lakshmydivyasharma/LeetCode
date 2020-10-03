https://leetcode.com/problems/string-to-integer-atoi/
8. String to Integer (atoi)
Medium

1596

9309

Add to List

Share
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.



My notes:
what is aoti, used this link to understand
https://www.techonthenet.com/c_language/standard_library_functions/stdlib_h/atoi.php#:~:text=In%20the%20C%20Programming%20Language,that%20isn't%20a%20number.

also make sure to stop at a number -- wants to write a code for that.
check if its a string, make sure its passed in
use .trim to trim out the white spaces

map it and put it in key value pairs






var myAtoi = function(str) {
    var myStr = str.trim();
    var resultNum = 0;
    var multiplyer = 10;
    var neg = false;

    if(myStr.charAt(0) == "-" || myStr.charAt(0) == "+") {
        if (myStr.charAt(0) == "-") {
           neg = true;
        }
          if (myStr.charAt(0) == "+") {
           neg = false;
         }
        myStr = myStr.substr(1);
    }

    for(var i=0; i< myStr.length; i++) {

        if(isNaN(myStr.charAt(i)) || myStr.charAt(i) == ' ' ) {
            break;
        }
        resultNum = ((resultNum * multiplyer) + getNumMapping(myStr.charAt(i)));
    }

     resultNum = resultNum * (neg ? -1 : 1) ;

    if (resultNum > (Math.pow(2,31) - 1)) {
        return Math.pow(2,31) - 1;
    } else if (resultNum < Math.pow(-2,31)) {
        return Math.pow(-2,31);
   }

    return resultNum;

};


function getNumMapping(int) {
    switch (int) {
        case '0' : {
               return 0;
        }
                    case '1' : {
               return 1;
        }
                    case '2' : {
               return 2;
        }
                    case '3' : {
               return 3;
        }
                    case '4' : {
               return 4;
        }
                    case '5' : {
               return 5;
        }
                    case '6' : {
               return 6;
        }
                    case '7' : {
               return 7;
        }        case '8' : {
               return 8;
        }
             case '9' : {
               return 9;
        }
    }
} 

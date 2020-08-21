https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/

345. Reverse Vowels of a String
Easy

717

1178

Add to List

Share
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".




/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var v = ['a','e','i','o','u','A','E','I','O','U'];

    s = s.split('');

    for(var t = s.length - 1 , h = 0; t > h;){
        if(v.indexOf(s[t]) < 0){
            t--;
            continue;
        }
        if(v.indexOf(s[h]) < 0){
            h++;
            continue;
        }

        var temp = s[h];
        s[h] = s[t];
        s[t] = temp;

        h++;
        t--;
    }

    return s.join('');

};

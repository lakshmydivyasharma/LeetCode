https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
3. Longest Substring Without Repeating Characters
Medium

9495

570

Add to List

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
go through the array and check if the charcater after is not the same and then compare it to the rest 
then go to the next character and do that too.
make that a for loop
store the answers in a map 

 */
var lengthOfLongestSubstring = function(s) {

    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')

    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }

        map[arr[i]] = i
    }

    return maxLen


};

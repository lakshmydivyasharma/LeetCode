https://www.chloeting.com/program/2019/two-weeks-shred-challenge.html

11. Container With Most Water
Medium

6283

591

Add to List

Share
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.





The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */

// volume = l * w * h
//start outside walls, pick the one that’s lower in height, and multiply by the width (the index of the right wall minus the left wall). We’ll call the result area.
// let i =0
// let j = index wall starting with last element in the input array
// iterate through both loops

let height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {

    let i = 0
    let j = height.length - 1
    let max = 0
    let area

    while(i < j){
        area = (j-i) * Math.min(height[i], height[j])

        max = Math.max(area, max)

      height[i] < height[j] ? i++ : j--

    }
    return max

};


maxArea(height)

https://leetcode.com/problems/degree-of-an-array/


/**
 * @param {number[]} nums
 * @return {number}
 */

//P: array 
//R: single number, smallest possible length of a subarray of nums, that has the same degree as nums 
//E: [3,4,5,5,6,5] --> 2 
// [3,3, 4, 3, 5,5,5,6] 
//P: make one function that finds the degree.
// make one function that finds the subarrays based on a given degreee 
// map filter kind of deal 
// takes subarrays and reduces it 


function findShortestSubArray(nums) {

    // Elements is a map of key => elementInfo
    // with key being each of the elements in the array
    // and elementInfo being the object with properties count, leftIndex, rightIndex for 
    // one particular element in the array
  
    let degree = 0
    const elementsInfoHighestCount = new Map()
    let subArray = []
  
    const elements = nums.reduce((acc, num, index) => {
      let count
      let leftIndex
      let rightIndex
  
      if (acc.has(num)) {
        const existing = acc.get(num)
        count = existing.count + 1
        leftIndex = existing.leftIndex
        rightIndex = index
  
      } else {
        count = 1
        leftIndex = index
        rightIndex = index
      }
  
      return acc.set(num, { count, leftIndex, rightIndex })
    }, new Map())
  
  
    // Determine the degree by looping through elements map
    elements.forEach((element, uniqueNum) => {
      if (element.count === degree) {
        elementsInfoHighestCount.set(uniqueNum, element)
      } else if (element.count > degree) {
        elementsInfoHighestCount.clear()
        elementsInfoHighestCount.set(uniqueNum, element)
        degree = element.count
      }
    })
  
    // Get the shortest subarray array by looping through the elementInfoHighestCount map
    let result = elementsInfoHighestCount.values().next().value
    if (elementsInfoHighestCount.size === 1) {
      subArray = nums.slice(result.leftIndex, result.rightIndex + 1)
    } else if (elementsInfoHighestCount.size > 1) {
      elementsInfoHighestCount.forEach((element, num) => {
  
        const thisElementDiff = element.rightIndex - element.leftIndex
        const previousElementDiff = result.rightIndex - result.leftIndex
  
        if (thisElementDiff - previousElementDiff < 0) {
          result = elementsInfoHighestCount.get(num)
        }
      })
  
      subArray = nums.slice(result.leftIndex, result.rightIndex + 1)
    }
  
    return subArray.length
  };
  
  // Time complexity: O(N)
  
  // Testcases - [1, 2, 2, 3, 1], [1,2,2,3,1,4,2]
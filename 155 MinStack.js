https://leetcode.com/problems/min-stack/submissions/

155. Min Stack
Easy

3793

359

Add to List

Share
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2



PREP:
The push() method adds new items to the end of an array, and returns the new length.
The pop() method removes the last element from an array and returns that value to the caller





var MinStack = function() {
   this.stack = [];
   this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */

// Time: O(1); constant time bc all we are doing is pushing
// when pushing at the end, it is done in constant oime

MinStack.prototype.push = function(x) {
    if(this.stack.length === 0){
        this.min.push(x); //bc if its empty, then pushing in x amounnt to min
    }else {
        let minimum = Math.min(x, this.min[this.min.length - 1]);
        this.min.push(minimum);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
// Time: constant time
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
// Time: constant time
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length -1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

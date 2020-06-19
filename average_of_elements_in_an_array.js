// get the average of elements in array:
myTransactions = [12.50, 3.84, 2.97];
average = myTransactions.reduce((acc, val, index, arr) => {
  // increment the accumulator with the current value
  acc += val;
  // if we are at the last index of the transactions,
  //
  // then return the accumulator divided by the array length
  if(index === arr.length - 1){
    return acc/arr.length;
  }
  else{
    return acc;
  }
});

console.log('average:', average);



displays:
6.4366666666666665


// Write a function that returns the average of an array of integers


// non empty array
// [3, 4, 5]  // add up all the values, / # of index spots = 4



function getAverage(numbers){

var accumulator;
var value;
var index;
var array;

let average = numbers.reduce((accumulator, value, index, array) => {
          accumulator += value;
    }
  )

  return accumulator / array.length;
}



var testArr = [3,4,5];

console.log(getAverage(testArr));

                         



function sum(arr){
  var num = 0;
  for (var i = 0; i <arr.length; i++){
    num = ((num + arr[i]))
  }
  return num;
}


console.log(sum([1, 2, 3, 4, 5]));
// get the average of elements in array:
myTransactions = [12.50, 3.84, 2.97];
average = myTransactions.reduce((acc, val, index, arr) => {
  // increment the accumulator with the current value
  acc += val;
  // if we are at the last index of the transactions, then return the accumulator divided by the array length
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

// flatten array of arays

myData = [[8,6], [5,4,3], [2]];
output = myData.reduce((accumulator, currentValue) => {
  // concat each of the array into the empty array which will flatten out my data
  return accumulator.concat(currentValue);
}, []); //start with an initial value of empty array


console.log(output);

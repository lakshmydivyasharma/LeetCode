//javascript reduce example


// first problem:
// reduce ()

myArray = [1,2,3,4];

output = myArray.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(output)


// second problem:
// showing it add up through the indeces

myArray = [1,2,3,4];

output = myArray.reduce((accumulator, currentValue, index, array) =>
{
  console.log(
    'accumulator:', accumulator,
    'currentValue:', currentValue,
    'index:', index);
    return accumulator + currentValue;
  });
console.log('output:', output);



// can start with an initil value of 100, then youll get a 100 + 10

myArray = [1,2,3,4];

output = myArray.reduce((accumulator, currentValue, index, array) =>
{
  console.log(
    'accumulator:', accumulator,
    'currentValue:', currentValue,
    'index:', index);
    return accumulator + currentValue;
  }, 100);
console.log('output:', output);

// average of an array w/ a for loop

function average (numbers) {
  if (numbers.length === 0){
    return NaN
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
      sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5]))

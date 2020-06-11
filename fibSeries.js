// a series of numbers in which each number (fibonacci number) is the sum of the 2 proceeding numbers
// the simplest is the series 1, 1, 2, 3, 4, 8 etc


function fib(num){
  if(num < 2){
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(10))

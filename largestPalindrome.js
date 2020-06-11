// a palindromic number reeads the same both ways
// the lagest palindrome made from the product of two 2-digit numbers i 9009=91x99
// find the largest palindrome made from the product of two 3-digit numbers

function palindrome(num1, num2){
  let product = (num1 * num2)

  var arr = product.toString().split('');
  arr.reverse();

  var original = product.toString().split('');

  return arraysEqual(arr, original)

}

function arraysEqual(a, b){
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;


  // if you dont care about the order of the elements inside
  // the array, you should sort both arrays here
  // please note that calling sort on an array will modify htat array
  // you might want to clone your array first

  for (var i = 0; i < a.length; ++i){
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var largestPalindrome = 0

for(var firstLoop = 999; firstLoop >= 100; firstLoop --){
  for(var secondLoop = 999; secondLoop >=100; secondLoop --){
    if(palindrome(firstLoop, secondLoop)){
      if(largestPalindrome < firstLoop * secondLoop){
        largestPalindrome = firstLoop * secondLoop
      }
    }
  }
}

console.log(largestPalindrome)

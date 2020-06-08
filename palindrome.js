// string --> true or false

// "bob" --> true
// "dave" --> false
// "!b .o. b!" --> true
// reverse string is equal to the string

// function isPalindrome()

// takes a string and returns true or false

function isPalindrome(str){
  const rev = str.split('').reverse().join('')
  if(str === rev){
    return true
  }else{
    return false
  }
}


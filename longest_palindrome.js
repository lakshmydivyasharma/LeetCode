const longestPalindrome = s => {
  let longest = s.substring(0, 1)
  for(let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i)
    if(temp.length > longest.length) {
      longest = temp
    }
    temp = expand(s, i, i + 1)
    if(temp.length > longest.length) {
      longest = temp
    }
  }
  return longest
}



LONGEST PALINDROME 

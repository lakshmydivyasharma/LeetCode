// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
//
// Most frequently used words in a text
//
// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
//
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
//

// input / parameter = textt
// return = [1st, 2nd, 3rd]

// it! it.

// toLowerCase
// split method
// for loop --> if you see a word, push it into an object through a key valuee pair.
// the word will be the key; value will be the frequency
// for loop to push out the highest number



// function topThreeWords(text) {
//   const str = []
//   const word = text.toLowerCase().split(' ')
//   for(i = 0; i++; i < text.length){
//     for(j=1; j++; j < text.length){

//     }
//   }
// }


function topThreeWords(text){
 const wordTracker = {}
 const words = text.toLowerCase().split(' ')
 for(i=0; i < words.length; i++){
   //if the key does exist, add 1
   if(wordTracker.hasOwnProperty(words[i])){     //we have the words array, for each word checking if it exists inside the object
       //add key to object
       wordTracker[words[i]] = wordTracker[words[i]]+1; // we are using the loop to add words over increment values in the object; so assigning values to object is saying obj[ = whatever you want it to be
   }
   //if the key does not exist, add the key and put 1 for value
   else{
   wordTracker[words[i]] = 1
   }
 }

  let sortedWords = Object.entries(wordTracker).sort(function(a, b){
    return (b[1]-a[1])
  });

  return (sortedWords.slice(0,3).map(key => {
    // return just the first element of each number
    return (key[0])
  }
  ))
}

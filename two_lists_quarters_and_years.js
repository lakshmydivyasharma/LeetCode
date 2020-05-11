// Given two lists containing objects like the following:
// Coin = {
//     'type': 'quarter' or 'nickel',
//     'year': 4 digit number
// }
// Write a method are_quarters_equivalent(coin_list_a, coin_list_b) verifying that both lists contain
// the exact same quarters, in the same order, ignoring nickels.
coina =
{
    'type': 'quarter' or 'nickel',
    'year': 4 digit number
}
// Parameter: two list, arrays [[quater, "1996"],[nickel,"1995"]]
// Return true or false
// Data:


coin_list = {'type': 'quarter', 'year':2020}.

// 1 + a + 1 + b + qa
// a + b + qa

function are_quarters_equivalent (coin_list_a, coin_list_b){
  // O(1)
  var quartersFromListA = []
  // O(a)
  for(i=0; i < coin_list_a.length;i++){
   if(coin_list_a[i].type === 'quarter'){ //whatever the item is at the index; the index is a number that refers to specific spot; if you use [], gives one of the items in the array.
      quartersFromListA.push(coin_list_a[i]) //coin list a is the one we are looping over;
    }
  }

//populate this array

  // O(1)
  var quartersFromListB = []
  //O(b)
  for(i=0; i < coin_list_b.length;i++){
   if(coin_list_b[i].type === 'quarter'){ //whatever the item is at the index; the index is a number that refers to specific spot; if you use [], gives one of the items in the array.
   quartersFromListB.push(coin_list_b[i]) //coin list a is the one we are looping over;
    }

  }
  //O(1)
  if(quartersFromListA.length != quartersFromListB.length){
    return false
  }
  //O(qa)
  for(i=0; i < quartersFromListA.length;i++){
    if(quartersFromListA[i].year != quartersFromListB[i].year){
      return false
    }
  }
  return true
}




2 lists:
[q2015, n2019, q2018]  ---> q2015 q 2018
[q2015, n1991, n1992, q2018, q2021] q2015 q2018

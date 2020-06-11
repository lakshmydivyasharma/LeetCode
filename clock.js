// PPDDNNPDDPNN

// clock

//           12-D
//        N11     1-P
//    D-10         2-P
//    P9            3-N
//    N-8          4-N
//        7-D       5D
//            6P

// 4P 4D 4N
// what are the different combinations of unique orders i can make
 // for loop, push out my unique combinations
 // put that in an array / store it in a variable



// test each combination
 // test each one and implement rules of +1, +5, +10, continue till all 12 spots are filled
 // if it overlaps, eliminate that combination

//sequence --> print out sequences return true / false
// return a boolaen,

// take care of unique combinations

function clock (sequence){
  // boolean, if statement { P, +1, D +10, N +5}

  //define the starting location
  let location = 0;
// location%12 = 0; to start from the top again
// 10 + 5 % 12 --> 3

  // itereate over the list and for each coin place it down on the clock
    let spots = []
  for(i = 0; i < sequence.length; i++){
     let coin = sequence[i];

     // record all the locations used; if its unique spot


     // convert p n d to a number
     if (coin === 'P'){
       location += 1;
     }else if (coin === 'D'){
       location += 10;
     }else if (coin === 'N'){
       location += 5;
     }
    location = location%12;

// push the location into the spot and if the location is used, return false. if not used, return true
    if(spots[location] === true){
      return false;
    }
    else{
      spots[location] = true;
    }
  }

  return true;

}
console.log(clock('PPDDNNPDDPNN'));

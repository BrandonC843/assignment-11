
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/
var sumPositives = function(someNmbr){
   // INPUT: ARRAY OF NUMBERS
   var positive = 0
   for(var i = 0; i < someNmbr.length; i++){
      var currentNumber = someNmbr[i];
      if((currentNumber > 0) === true){


         positive = positive + currentNumber
      }

   }

   return positive
   // OUTPUT: A SINGLE NUMBER
}



console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);

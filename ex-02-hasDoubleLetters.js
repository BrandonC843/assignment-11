
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
//INPUT: STRING
var hasDoubleLetters = function(string){
   isTrue=false
   for (var i = 0; i < string.length; i = i + 1 ){

      if (string[i + 1] === string[i].toLowerCase()){
         if(string[i + 1] === 'undefined'){

         }else {
            isTrue = true
         }
         return true
      }
   }
   return false

}



///OUTPUT: MODIFIED STRING
console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )

/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


 var removingPunc = function(word){
    var justLetters = '';
    for (var i = 0; i < word.length; i++){
       if(word[i] !== "'"){
          justLetters = justLetters + word[i];

       }
    }
    return justLetters;
 }


var findLongestWord = function(string) {
    var longestWord = '';
    var stringSplit = string.split(" ");
   for (var i = 0; i < stringSplit.length; i++) {
      var noPunc = removingPunc(stringSplit[i]);

      if(longestWord.length < noPunc.length){
         longestWord = noPunc;
      }
      }
       return longestWord;

}
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')

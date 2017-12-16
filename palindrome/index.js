// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// // solution 1
// function palindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// // solution 2A
// function palindrome(str) {
//   for (let i=0, len=str.len; i<len; i++) {
//     if (str[i] !== str[(len-1)-i]) return false;
//   }
//   return true;
// }

// // solution 2B
// function palindrome(str) {
//   const strArr = str.split("");
//   const len = strArr.length;
//   return strArr.every((char, idx) => {
//     return char === strArr[(len-1)-idx];
//   });
// }

// solution 3
function palindrome(str) {
  var strLen = str.length,
    halfStrLen = parseInt(strLen / 2);
  
  for (var i=0; i<halfStrLen; i++) {
    if (str[i] !== str[strLen-1-i]) return false;
  }
  return true;
}

console.log(palindrome("pennep"));

module.exports = palindrome;

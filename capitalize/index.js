// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// // solution 1
// function capitalize(str) {
//   return str.split(" ")
//     .map(word => word.charAt(0).toUpperCase().concat(word.substring(1)))
//     .join(" ");
// }


// solution 2
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i=1, len=str.length; i<len; i++ ) {
    if (str[i-1] === " " || i=== 0) result += str[i].toUpperCase();
    else result += str[i];
  }
  return result;
}

module.exports = capitalize;

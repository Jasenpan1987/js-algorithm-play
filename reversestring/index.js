// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// // solution 2
// function reverse(str) {
//   var reversed = "";
  
//   // try to avoid for (var i=0; var ...)
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// solution 3
function reverse(str) {
  return str.split("").reduce((prev, curr) => {
    return curr + prev;
  }, "");
}


// running debugger in node
// 1) run the code with debugger by typing node inspect filename.js
// 2) c for continue
// 3) repl to go into the repl mode, type the variable you want to inspect
// 4) you can manipulate the vaiable


module.exports = reverse;

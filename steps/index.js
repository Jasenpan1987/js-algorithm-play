// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// // solution 1
// function steps(n) {
//   for(let row=0; row<n; row++) {
//     let stair="";
//     for (let col=0; col<n; col++) {
//       if(col <= row) stair += "#";
//       else stair += " ";
//     }
//     console.log(stair);
//   }
// }

// // solution 2
// function steps(n) {
//   for(let i=1; i<=n; i++) {
//     console.log(`${"#".repeat(i)}${" ".repeat(n-i)}`);
//   }
// }

// solution 3 recursive solution
function steps(n, row=0, stair="") {
  if (n === row) return; // base case
  
  if (n === stair.length) { // end of the row
    console.log(stair);
    return steps(n, row + 1);
  }

  stair.length <= row ? stair += "#" : stair += ' ';

  steps(n, row, stair);
}


module.exports = steps;

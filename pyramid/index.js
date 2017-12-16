// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '  12345
//       ' ### '  12345
//       '#####'  12345

// solution 1
// function pyramid(n) {
//   const maxCol = 2 * n - 1;
//   const midPoint = Math.floor(maxCol / 2);
//   for (let row=0; row<n; row++) {
//     let stair = "";
//     for (let col=0; col<maxCol; col++) {
//       if (col < midPoint - row || col > midPoint + row) {
//         stair += " ";
//       } else {
//         stair += "#";
//       }
//     }
//     console.log(stair);
//   }
// }

// solution 2
function pyramid(n, row=0, level="") {
  const maxCol = 2 * n - 1;
  const midPoint = Math.floor(maxCol / 2);
  const len = level.length;

  if (row === n) return;

  if (len === maxCol) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let add = (len < midPoint - row || len > midPoint + row) ? " " : "#";

  pyramid(n, row, level + add);
}

pyramid(3);

module.exports = pyramid;

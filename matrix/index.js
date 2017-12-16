// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = [];
  let counter = 1;
  let startCol = 0, startRow = 0;
  let endCol = n - 1, endRow = n - 1;

  for (let i=0; i<n; i++) {
    result.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i=startCol; i<=endCol; i++) {
      result[startRow][i] = counter;
      counter ++;
    }
    startRow ++;
    
    // right col
    for (let i=startRow; i<=endRow; i++) {
      result[i][endCol] = counter;
      counter ++;
    }
    endCol --;

    // bottom row
    for (let i=endCol; i>=startCol; i--) {
      result[endRow][i] = counter;
      counter ++;
    }
    endRow --;

    // left col
    for (let i=endRow; i>=startRow; i--) {
      result[i][startCol] = counter;
      counter ++
    }
    startCol ++;
  }

  return result;
}

module.exports = matrix;

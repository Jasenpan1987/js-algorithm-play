// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// // solution 1
// function chunk(array, size) {
//   let chunked = [];
//   for (let num of array) {
//     let last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([num]);
//     } else {
//       last.push(num);
//     }
//   }
//   return chunked;
// }

// // solution 2
// function chunk(array, size) {
//   let chunked = [], temp = [];
//   for (let i=0; i<array.length; i++) {
//     if (temp.length < size) {
//       temp.push(array[i]);
//     } else {
//       chunked.push(temp);
//       temp = [array[i]];
//     }
    
//     if (i === array.length - 1) {
//       chunked.push(temp)
//     }
//   }

//   return chunked;
// }

// solution 3
// function chunk(array, size) {
//   let chunked = [], start = 0;
//   while (start < array.length) {
//     let end = start + size;
//     chunked.push(array.slice(start, end));
//     start += size;
//   }
//   return chunked;
// }

// solution 4
function chunk(array, size) {
  let result = [];
  while(array.length > 0) {
    result.push(array.splice(0, size));
  }
  
  return result;
}

module.exports = chunk;

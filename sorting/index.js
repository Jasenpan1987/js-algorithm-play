// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // n ^ 2
  for (let i=0, len=arr.length; i<len; i++) {
    for (let j=0; j<(arr.length-1-i); j++) {
      if (arr[j] > arr[j+1]) {
        const smaller = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = smaller
      }
    }
  }
  return arr;
}

function selectionSort(arr) { // n ^ 2
  for (let i=0, len=arr.length; i<len; i++) {
    let minIdx = i;
    for (let j=i, len=arr.length; j<len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      const curr = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = curr;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const center = Math.floor(arr.length / 2); // ['a', 'b', 'c' <- here, 'd'] (round down)

  const left = arr.slice(0, center); // [a, b, c, d].slice(0, 2) -> [a, b]
  const right = arr.slice(center); 

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) { // merge 2 sorted arrays into 1 sorted array
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}


module.exports = { bubbleSort, selectionSort, mergeSort };

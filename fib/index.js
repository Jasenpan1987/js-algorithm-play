// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution 1
// function fib(n) {
//   let step = 0;
//   let series = [];
//   while(step <= n) {
//     if (step == 0) series.push(0);
//     else if(step == 1) series.push(1);
//     else series.push(series[step - 2] + series[step - 1]);
//     step++;
//   }
//   return series[n];
// }

// // solution 2
// function fib(n) {
//   const result = [0, 1];
//   for(let i=2; i<=n; i++) {
//     result.push(result[i-2] + result[i-1]);
//   }
//   return result[n];
// }

// // solution 3 // bad solution
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }

// // solution 4 // memoize function
// function fib(n) {
//   if (!fib.cache) fib.cache = {};

//   if (n < 2) return n;
  
//   if (fib.cache[n]) {
//     return fib.cache[n];
//   } else {
//     let result = fib(n - 2) + fib(n - 1);
//     fib.cache[n] = result;
//     return result;
//   }
// }


// solution 5 // fp!!!
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) return cache[args];
    
    const result = fn.apply(this, args)
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);


module.exports = fib;

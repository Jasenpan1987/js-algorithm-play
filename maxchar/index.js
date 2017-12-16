// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// // solution 1
// function maxChar(str) {
//   const strStat = str.split("").reduce((stat, currentChar) => {
//     stat[currentChar] = stat[currentChar] ? (stat[currentChar] + 1) : 1;
//     return stat;
//   }, {});

//   let max = { key: '', value: -1};

//   Object.keys(strStat).forEach(key => {
//     if (strStat[key] > max.value) {
//       max.key = key;
//       max.value = strStat[key];
//     }
//   });
//   return max.key;
// }

// solution 2
function maxChar(str) {
  const strMap = {};
  let max = 0, maxChar = "";
  
  for (let char of str) { // iterate array or string
    strMap[char] = strMap[char] + 1 || 1;
  }

  for (let char in strMap) { // iterate object char is the key
    if (strMap[char] > max) {
      max = strMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


module.exports = maxChar;

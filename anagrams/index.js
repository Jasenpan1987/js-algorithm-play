// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // solution 1
// function anagrams(stringA, stringB) {
  
//   const mapString = str => {
//     const CHAR_CODE_a = 97;
//     const CHAR_CODE_z = 122;

//     return str.toLowerCase().split("").reduce((map, char) => {
//       const charCode = char.charCodeAt(0);
//       if (charCode > CHAR_CODE_z || charCode < CHAR_CODE_a) return map;
//       map[char] = map[char] + 1 || 1;
//       return map;
//     }, {});
//   }
  
//   const mapA = mapString(stringA);
//   const mapB = mapString(stringB);
  
//   const keyA = Object.keys(mapA);
//   const keyB = Object.keys(mapB);

//   if (keyA.length !== keyB.length) return false;

//   return keyA.every(key => mapA[key] === mapB[key]);
// }

// solution 2: has performance issue!!!
function anagrams(stringA, stringB) {
  const sortString = str => {
    return str.replace(/[^\w]g/, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  return sortString(stringA) === sortString(stringB);
}

module.exports = anagrams;

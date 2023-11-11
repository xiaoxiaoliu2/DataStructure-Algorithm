// Given 2 arrays, create a function that let's a user know (ture/false) whether these two arrays contain any common items
/* For Example:
const array1 = [`a`, `b`, `c`, `x`];
const array2 = [`z`, `y`, `i`];
should return false.

const array1 = [`a`, `b`, `c`, `x`];
const array2 = [`z`, `y`, `x`];
should return true.
*/

// ————————————————————————————————————————————————————————————————————
const array1 = [`a`, `b`, `c`, `x`];
const array2 = [`z`, `y`, `a`];

// function containCommonItem(arr1, arr2) {
//   for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// // time complexity: O(a*b), 2 nested For Loop
// // space complexity: O(1), did not create any variables, only some input
// console.log(containCommonItem(array1, array2));


// ————————————————————————————————————————————————————————————————————
// Time complexity: O(a + b): 2 seperate For Loop, time complexity is better
// Space complexity: O(a)
// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }
// array2[index] === object.properties
function constainsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // map array to object
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
// console.log(constainsCommonItem2(array1, array2));

// ————————————————————————————————————————————————————————————————————
// JavaScript built-in method
function constainsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
console.log(constainsCommonItem3(array1, array2));















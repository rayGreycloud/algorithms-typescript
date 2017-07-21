/* Wrong way
const foo = [1, 3, 22];
foo.sort();
console.log(foo);
*/

const foo = [1, 3, 22];
// Pass in comparer function
foo.sort(function (a, b) {
  // if a < b return -number
  // if a === b return 0
  // if a > b return number
  return a - b;
});

console.log(foo);

/**
  * Produces the correct result:
  * [ 1, 3, 22]
  */

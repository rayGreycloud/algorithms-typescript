/* Wrong way
const foo = [1, 3, 22];
foo.sort();
console.log(foo);
*/

const foo = [1, 3, 22];
// Pass in comparer function
foo.sort((a, b) => a - b);

console.log(foo);

/**
  * Produces the correct result:
  * [ 1, 3, 22]
  */

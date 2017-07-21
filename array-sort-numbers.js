/* Wrong way
const foo = [1, 3, 22];
foo.sort();
console.log(foo);
*/
var foo = [1, 3, 22];
// Pass in comparer function
foo.sort(function (a, b) { return a - b; });
console.log(foo);
/**
  * Produces the correct result:
  * [ 1, 3, 22]
  */

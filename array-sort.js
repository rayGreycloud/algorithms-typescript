/** Wrong Way
const arr = ['foo', 'bar'];
const copy = arr.sort();
*/
// Cannot mutate - cannot call sort
var arr = ['foo', 'bar'];
// Use slice to copy array before sort
var copy = arr.slice().sort();
console.log({ arr: arr });
console.log({ copy: copy });
/**
  * Output:
  * { arr: [ 'foo', 'bar' ] }
  * { copy: [ 'bar', 'foo' ] }
  * Original array unmutated
*/

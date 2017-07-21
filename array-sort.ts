/** Wrong Way
const arr = ['foo', 'bar'];
const copy = arr.sort();
*/
// Cannot mutate - cannot call sort
const arr: ReadonlyArray<string> = ['foo', 'bar'];
// Use slice to copy array before sort
const copy = arr.slice().sort();

console.log({ arr });
console.log({ copy });

/**
  * Output:
  * { arr: [ 'foo', 'bar' ] }
  * { copy: [ 'bar', 'foo' ] }
  * Original array unmutated
*/

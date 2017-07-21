// Wrong Way
const arr = ['foo', 'bar'];
const copy = arr.sort();
console.log({ arr });
console.log({ copy });

/**
  * Output:
  * { arr: [ 'bar', 'foo' ] }
  * { copy: [ 'bar', 'foo' ] }
  * Sort mutates the original array
*/

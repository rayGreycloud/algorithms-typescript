// Wrong Way
var arr = ['foo', 'bar'];
var copy = arr.sort();
console.log({ arr: arr });
console.log({ copy: copy });
/**
  * Output:
  * { arr: [ 'bar', 'foo' ] }
  * { copy: [ 'bar', 'foo' ] }
  * Sort mutates the original array
*/

// Case insensitive sorting for string arrays
const array = [
  'Alpha',
  'beta',
  'Gamma',
  'delta'
];

const foo = array;
const bar = array;

// By default - JS sorts capitalized words first
foo.sort();
foo.forEach(x => console.log(x));
/**
  * Output:
  * Alpha
  * Gamma
  * beta
  * delta
  */

// To correct, pass custom comparer function to sort
// Use localCompare to compare and return result
bar.sort(function (a, b) {
  return a.toLowerCase()
    .localeCompare(b.toLowerCase());
});
bar.forEach(x => console.log(x));
/**
  * Output:
  * Alpha
  * beta
  * delta
  * Gamma
  */

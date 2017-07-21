/**
  * Write a program that prints the integers
  * from 1 to 100 (inclusive), except:
  * For multiples of 3, print Fizz,
  * For multiples of 5, print Buzz
  * For multiples of both, FizzBuzz
  */
/**
  * 1
  * 2
  * Fizz
  * 4
  * Buzz
  * ...
  */

for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  // Refactor using ternary
  const result =
    isFizz && isBuzz
      ? 'FizzBuzz'
      : isFizz
        ? 'Fizz'
        : isBuzz
          ? 'Buzz'
          : index;

  console.log(result);
}

for (let index = 1; index < 101; index++) {
  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  let result;

  if (isFizz && isBuzz) {
    result = ('FizzBuzz');
  }
  else if (isFizz) {
    result = ('Fizz');
  }
  else if (isBuzz) {
    result = ('Buzz');
  }
  else {
    result = (index);
  }
  console.log(result);
}

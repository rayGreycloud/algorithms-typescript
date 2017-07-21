for (var index = 1; index < 101; index++) {
    var isFizz = index % 3 === 0;
    var isBuzz = index % 5 === 0;
    var result = void 0;
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

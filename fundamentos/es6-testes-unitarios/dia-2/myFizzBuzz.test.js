const myFizzBuzz = require('./myFizzBuzz');

test('verifica divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('verifica divisivel por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
});

test('verifica divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
});

test('verifica NÃO divisivel por 3 e 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
});

test('verifica se é numero', () => {
    expect(myFizzBuzz('abcd')).toBe(false);
});
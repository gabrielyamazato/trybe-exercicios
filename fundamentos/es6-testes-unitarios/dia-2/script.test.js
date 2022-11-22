const myRemove = require('./script');

test('verify array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 3, 4], 3);
});
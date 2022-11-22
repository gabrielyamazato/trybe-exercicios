const mapString = require('./mapString');
const encode = require('./mapString');
const decode = require('./mapString');

describe('verifica se', () => {
    test('encode é função', () => {
        expect(typeof encode === 'function').toBe(true);
    });

    test('se encode é função', () => {
        expect(typeof decode === 'function').toBe(true);
    });
});

test('verifica encode', () => {
    expect(encode('a, e, i, o, u')).toBe(1, 2, 3, 4, 5);
});
const {mapString, encode, decode} = require('./mapString');

describe('Verifica se ', () => {
    test('encode é função', () => {
        expect(typeof encode === 'function').toBe(true);
    });

    test('se encode é função', () => {
        expect(typeof decode === 'function').toBe(true);
    });
});

describe('Verifica se', () => {
    test('encode substitui a', () => {
        expect(encode('ana')).toEqual('1n1');
    });

    test('encode substitui e', () => {
        expect(encode('erre')).toEqual('2rr2');
    });

    test('encode substitui i', () => {
        expect(encode('Iina')).toEqual('I3n1');
    });

    test('encode substitui o', () => {
        expect(encode('ovo')).toEqual('4v4');
    });

    test('encode substitui u', () => {
        expect(encode('uwu')).toEqual('5w5');
    });
});

describe('verifica se', () => {
    test('decode substitui 1', () => {
        expect(decode('1n1')).toEqual('ana');
    });

    test('decode substitui 2', () => {
        expect(decode('2rr2')).toEqual('erre');
    });

    test('decode substitui 3', () => {
        expect(decode('I3n1')).toEqual('Iina');
    });

    test('decode substitui 4', () => {
        expect(decode('4v4')).toEqual('ovo');
    });

    test('decode substitui 5', () => {
        expect(decode('5w5')).toEqual('uwu');
    });

    test('o tamanho é igual', () => {
        expect(decode('trybe').length).toEqual(5)
    });
});
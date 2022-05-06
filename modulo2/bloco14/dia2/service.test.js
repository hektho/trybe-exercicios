const service = require('./service')
jest.mock('./service');
const { randomNumber, toUpperCase, firstLetter, concatStrings } = service;

afterEach(() => {
    jest.resetAllMocks()
});
describe('Verifica as funções do arquivo service.js', () => {
    it('Verifica se a função é chamada, quantas vezes é chamada e se o valor é o correto', () => {
        randomNumber.mockReturnValue(10);
        randomNumber();
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber()).toBe(10);
        expect(randomNumber).toHaveBeenCalledTimes(2);
    });
    it('Verifica se a nova implementação da função é chamada apenas uma vez e se é aplicada', () => {
        randomNumber.mockImplementation((a, b) => (a / b));
        randomNumber(10, 2);
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber(10, 2)).toBe(5);
    });
    it('Verifica a nova implementação da função randomNumber', () => {
        randomNumber.mockImplementation((a, b, c) => (a * b * c));
        randomNumber(1, 4, 8);
        expect(randomNumber).toHaveBeenCalledTimes(1);
        randomNumber.mockClear();
        expect(randomNumber(2, 4, 8)).toBe(8**2);
        expect(randomNumber).toHaveBeenCalledWith(2, 4, 8);
        randomNumber.mockReset();
        randomNumber.mockImplementation((num) => (num * 2));
        expect(randomNumber(10)).toBe(20);
        randomNumber.mockClear();
        expect(randomNumber(0)).toBe(0);
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(0)
    });
    it('Verifica novas funções do arquivo', () => {
        toUpperCase.mockImplementation((string) => string.toLowerCase());
        firstLetter.mockImplementation((string) => string[string.length - 1]);
        concatStrings.mockImplementation((val, val2, val3) => `${val}${val2}${val3}`);
        expect(toUpperCase('BANANA')).toBe('banana');
        expect(toUpperCase).toHaveBeenCalledTimes(1);
        expect(toUpperCase).toHaveBeenCalledWith('BANANA');
        expect(firstLetter('Heitor')).toBe('r');
        expect(firstLetter).toHaveBeenCalledTimes(1);
        expect(firstLetter).toHaveBeenCalledWith('Heitor');
        expect(concatStrings('Eu', 'sou', 'Groot')).toBe('EusouGroot');
        expect(concatStrings).toHaveBeenCalledTimes(1);
        expect(concatStrings).toHaveBeenCalledWith('Eu', 'sou', 'Groot');
    });
    it('Verifica se a aplicação original de toUpperCase funciona', () => {
        toUpperCase.mockImplementation((string) => string.toUpperCase());
        expect(toUpperCase('bimbinha')).toBe('BIMBINHA');
        expect(toUpperCase).toHaveBeenCalledTimes(1);
        expect(toUpperCase).toHaveBeenCalledWith('bimbinha');
    });
    it('Verifica se a aplicação original de firstLetter funciona', () => {
        firstLetter.mockImplementation((string) => string[0]);
        expect(firstLetter('laranja')).toBe('l');
        expect(firstLetter).toHaveBeenCalledTimes(1);
        expect(firstLetter).toHaveBeenCalledWith('laranja');
    });
    it('Verifica se a aplicação original de concatStrings funciona', () => {
        concatStrings.mockImplementation((val, val2) => `${val}${val2}`);
        expect(concatStrings('Olá', 'amigo')).toBe('Oláamigo');
        expect(concatStrings).toHaveBeenCalledTimes(1);
        expect(concatStrings).toHaveBeenCalledWith('Olá', 'amigo');
    });
});

const sum = require('./sum');
describe('Verifica se a função soma os valores corretamente', () => {
    test('soma dois valores', () => {
        expect(sum(4,5)).toBe(9);
    });
    test('soma 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    test('erro', () => {
        expect(sum(4, "5")).toBe(9);
    })
});

const comparaIMC = (totalIMC) => {
    if (totalIMC < 18.5) return 'Abaixo do peso';
    if (totalIMC >= 18.5 && totalIMC <= 24.9) return 'Peso normal';
    if (totalIMC > 24.9 && totalIMC < 29.9) return 'Acima do peso';
    if (totalIMC >= 29.9 && totalIMC < 34.9) return 'Obesidade grau 1';
    if (totalIMC >= 34.9 && totalIMC < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
};

module.exports = comparaIMC;
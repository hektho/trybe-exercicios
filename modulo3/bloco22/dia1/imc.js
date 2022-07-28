const imc = require('./calculaIMC');
const readline = require('readline-sync')
const resultado = require('./resultadoIMC');

const main = () => {
    console.log('Vamos calcular seu IMC (Índice de massa corporal)!');
    const peso = readline.questionFloat('Qual seu peso atual (em kg)?');
    const altura = readline.questionFloat('Agora a sua altura (em metros)?');
    const calculoTotal = imc(peso, altura);
    console.log(`Seu IMC atual é de ${calculoTotal.toFixed(2)}`);
    console.log(`Seu resultado é: ${resultado(calculoTotal)}`);
}

main();

module.exports = main;
const readline = require('readline-sync');

function main() {
    console.log('Vamos calcular sua velocidade média!!!');
    const distancia = readline.questionInt('Qual foi sua distância percorrida? (em metros)');
    const tempo = readline.questionInt('Em quanto tempo? (em segundos)');
    console.log(`Sua velocidade média foi de: ${(distancia / tempo).toFixed(2)} m/s!`);
}

main();

module.exports = main;
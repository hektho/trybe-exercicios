const readline = require('readline-sync');
const randomNum = require('./randomNum');

function verifyNum(num) {
    const question = readline.questionInt('E aí? Qual número?');
    const rsposta = question === num ? console.log('CARAIO ACERTOU') : console.log('Errou kkk buro');
    return rsposta;
}

function playAgain() {
    const question = readline.keyInYNStrict('Quer jogar novamente?');
    question && main() 
}

function main() {
    console.log('Vamos jogar um jogo: tente adivinhar o número que estou pensando de 0 a 10!!');
    const numero = randomNum();
    verifyNum(numero);
    playAgain();
}

main();

module.exports = main;
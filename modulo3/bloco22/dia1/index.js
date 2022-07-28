const readline = require('readline-sync');

const main = () => {
    const scripts = ['Sorteio', 'IMC', 'Velocidade'];
    const question = readline.keyInSelect(scripts, 'Qual script deseja rodar?');
    return require(`./${scripts[question].toLowerCase()}`);
}

main();
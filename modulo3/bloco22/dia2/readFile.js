const fs = require('fs');

const nomeDoArquivo = 'arquio.txt';

fs.readFile(nomeDoArquivo, 'utf-8', (err, data) => {
    if (err) {
        return console.log(`Error 404: ${err}`);
    }
    console.log(data);
});
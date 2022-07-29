const fs = require('fs');

const nomeDoArquivo = 'arquivo.txt';

try {
    const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
    console.log(data);
} catch (error) {
    console.log(`Deu erro: ${error}`);
}
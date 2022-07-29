const somaNum = (param1, param2, param3) => {
    return new Promise((resolve, reject) => {
        const parametros = [param1, param2, param3];
        const verify = parametros.some((i) => typeof i !== 'number');
        if (verify) reject(new Error ('Informe apenas números'));
        const operacao = (param1 + param2) * param3;
        if(operacao < 1000) reject(new Error ('Valor muito baixo'));
        resolve(operacao);
    });
}

/* somaNum(4, 9, 4)
.then((result) => console.log(`Sucesso: ${result}`))
.catch((err) => console.log(`Rejeitado: ${err}`)); */

module.exports = somaNum;
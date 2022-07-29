const fs = require('fs').promises;

const simpsons = 'simpson.json';

/* fs.readFile(simpsons, 'utf-8')
.then((result) => JSON.parse(result).forEach((i) => console.log(`${i.id} - ${i.name}`)))
.catch((err) => console.log(`Rejected: ${err}`)); */

/* const familiaSimpson = async () => {
    try {
        const simpson = JSON.parse(await fs.readFile(simpsons, 'utf-8'));
        simpson.forEach((i) => console.log(`${i.id} - ${i.name}`));
    } catch (err) {
        console.log(`Deu ruim: ${err}`);
    }
}

familiaSimpson(); */

const fodaseFunction = (id) => {
    fs.readFile(simpsons, 'utf-8').then((result) => {
        const json = JSON.parse(result);
        return new Promise ((resolve, reject) => {
            const find = json.find((i) => i.id == id);
            if (!find) reject (new Error('ERROOOOOOOOOU'));
            resolve(console.log(`${find.id} - ${find.name}`))
        })
    });  
}

fodaseFunction(0)
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

async function getSimpsons() {
    const data = await fs.promises.readFile('simpsons.json', 'utf-8');
    return JSON.parse(data);
}

app.get('/simpson', async (req, res) => {
    try {
        const simp = await getSimpsons();
        res.status(200).json(simp);
    } catch (err) {
        res.status(500).json({"message": `Deu ruim: ${err}`})
    }
});

app.get('/simpson/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const simpson = await getSimpsons();
        console.log(simpson);
        const findSimp = simpson.find((i) => Number(id) === Number(i.id));
        if (!findSimp) throw new Error("Personagem não encontrado")
        return res.status(200).json(findSimp);
    } catch (err) {
        return res.status(404).json({"message": `${err}`});
    }
});

app.post('/simpson', async (req, res) => {
    const { id, name } = req.body;
    try {
        const simp = await getSimpsons();
        const findIgual = simp.some((i) => Number(id) === Number(i.id));
        if (findIgual) return res.status(409).json({"message": "este personagem já está cadastrado"})
        simp.push({id, name});
        fs.writeFileSync('simpsons.json', JSON.stringify(simp))
        res.status(201).json({"message": "personagem criado com sucesso"})
    } catch(err) {
        res.status(500).json({"message": `${err}`})
    }
})

app.listen(3001, () => console.log('abrindo na porta 3001'));
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.status(200).json({"message": "pong"});
});

app.post('/ping', (req, res) => {
    const { name } = req.body;
    res.status(200).json({"message": `Bem vindo, ${name}!`});
});

app.post('/greetings', (req, res) => {
    const { age, name } = req.body;
    if (age < 18) return res.status(401).json({"message": "Unauthorized"});
    res.status(200).json({"message": `Welcome, ${name}!`});
});

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    return res.status(200).json({"message": `Bem vindo, ${name}! Você tem ${age} anos de idade.`})
})

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});



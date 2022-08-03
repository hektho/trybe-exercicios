const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());


let drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
	res.json(drinks);
});

app.post('/drinks/search', (req, res) => {
	const { id, name, price } = req.body;
	console.log(req.body);
	drinks = [...drinks, {id, name, price}];
	res.status(201).json({'message': 'Adicionado com sucesso!'})
	console.log(req.body);
})
app.get('/drinks/search', (req, res) => {
	const { nome, maxPrice, minPrice } = req.query;
	let filtereDrinks;
	if (!maxPrice && !minPrice && nome) filtereDrinks = drinks.filter((i) => i.name.includes(nome)) 
	if (maxPrice && minPrice && nome) filtereDrinks = drinks.filter((i) => i.name.includes(nome) && i.price <= maxPrice && i.price >= minPrice);
	if (!filtereDrinks.length) return res.status(404).json({"messageError": "Não encontramos nenhuma bebida com esse nome :("});
	res.status(200).json(filtereDrinks);
});

app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;
	const bebida = drinks.find((i) => Number(id) === i.id);
	if (!bebida) res.status(404).json({"message": "Error, could not get data"})
	res.status(200).json(bebida);
});


app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});

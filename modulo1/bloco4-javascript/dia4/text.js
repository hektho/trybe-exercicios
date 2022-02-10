//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem vinda, ' + info['personagem']);*/

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

//info['recorrente'] = 'Sim'

//console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto.

//for(let index in info){
//    console.log(index);
//}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

//for(let index in info){
//    console.log(info[index]);
//}

//5) Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [{
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
    }],
};
leitor['fullName'] = leitor.nome + ' ' + leitor.sobrenome
//console.log(leitor.livrosFavoritos, 'O livro favorito de ' + leitor.fullName + ' ' + 'se chama ' + leitor.livrosFavoritos[0].titulo)

// 6)Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

/*leitor.livrosFavoritos.push(
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling', 
    editora: 'Rocco',
    }
);*/

//7)Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".


console.log(leitor.nome + ' tem ' +  leitor.livrosFavoritos.length + ' livros favoritos' )
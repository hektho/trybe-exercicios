// 1) dada uma matriz, transforme em um array (exercicio que não consegui fazer sozinho, tive que ver o gabarito para entender)
/*const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => {
    return arrays.reduce((acumulador, elemento) => acumulador.concat(elemento), []);
  }

  console.log(flatten());*/
// Para os exercícios 2,3 e 4 considere o seguinte array:
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  // 2 crie uma string com o nome de todas as pessoas autoras
  const reduceName = () => {
    return books.reduce((acc, item) => `${acc} ${item.author.name},`, '')
  }
  //3 calcule a media de idade que os autores tinham quando lançaram seus livros

  const somaAge = () => {
    return books.reduce((acc, item, index, array) => {
      let somaIdade = acc + (item.releaseYear - item.author.birthYear)
      return somaIdade
    }, 0)
  }
  
  const mediaIdade = () => somaAge() / books.length;

//4) Encontre o livro com o maior nome

  const maiorName = () => {
    return books.reduce((acc, item) => {
      if (acc.length < item.name.length) acc = item 
      return acc
    }, '')
  }
  

  console.log(maiorName());


    
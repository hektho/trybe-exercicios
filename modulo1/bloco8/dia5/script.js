//1)

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const areaRec = rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

//2)Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((acc, item) => acc + item, 0);

console.log(sum(5,7,9,10,57,13,4,1,0,78,257,132,45));

//3) Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  

  const personLikes = ({ name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//4)
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = (array) => array.filter(({ nationality, bornIn}) => bornIn < 2000 && nationality === 'Australian').map((item) => item.name)
  console.log(filterPeople(people));

  //5)
  const num = [1, 2, 3];
  const [um, dois, tres] = num;
  const swap = (num) => [dois,tres,um]

  console.log(swap(num));

  //6)
  const palio = ['Palio', 'Fiat', 2019];
  const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
  const chiron = ['Chiron', 'Bugatti', 2016];
  const toObject = ([name, marca, ano]) => ({name, marca, ano})
  

  console.log(toObject(palio));

  //7

  const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
 /* const shipLength = (array) => array.reduce((acc, {name, length, measurementUnit}) => `${acc} 
  ${name} is ${length} ${measurementUnit}.`, ``)*/

  const shipLength = (array) => array.map(({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit}`) 
  console.log(shipLength(ships));

  //8
  const greet = (nome = 'Heitor', greeting = 'Olá') => `${greeting}, ${nome}!`;

  console.log(greet('Ricardo'));

 
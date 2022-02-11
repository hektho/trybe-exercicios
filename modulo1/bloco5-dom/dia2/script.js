let body = document.querySelector('body');
let h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerText = 'Exercício 5.2 - JavaScript'
h1.className = 'title'



let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);



let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);
main.style.backgroundColor = 'green'


let p = document.createElement('p');
section.appendChild(p);
p.innerText = 'ESTOU NASCENDO!!!! DO PÓ';


let section1 = document.createElement('section');
section1.className = 'left-content';
main.appendChild(section1);
main.removeChild(section1);

let section2 = document.createElement('section');
section2.className = 'right-content';
main.appendChild(section2);
section2.style.marginRight = 'auto'

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
section1.appendChild(img);

let ul = document.createElement('ul')
section2.appendChild(ul);
//Criação de um array com o conteúdo da lista não-ordenada.
let lista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
//Criação de uma função que adiciona este array em forma de lista dinamicamente.
function createLi() {
    for (let index = 0; index < lista.length; index += 1) {
        //Criação de uma variável que contém a criação de um elemento 'li'.
        let li = document.createElement('li');
        //Este elemento 'li' será inserido em seguida ao elemento 'ul'
        //como filho ao mesmo tempo que adiciona o valor contido no atual índice do array.
        ul.appendChild(li).innerText = lista[index]
    }

let listaNao = document.querySelector('ul');
listaNao.removeChild(listaNao.lastChild)
listaNao.removeChild(listaNao.lastChild)


}
createLi();
//Criação de uma função que recebe dois parâmetros, um número e uma string.
//A função cria, de acordo com o parâmetro 'numero', uma quantidade de elemento 'h3' no site.
function createSub(numero, nome) {
    //A quantidade de loopings será limitado ao parâmetro numero definido pela pessoa.
    for (let index = 0; index < numero; index += 1) {
        let subtitulo = document.createElement('h3');
        // Ao mesmo tempo que o elemento é criado como filho da tag 'main', um texto é adicionado que é o segundo parâmetro.
        main.appendChild(subtitulo).innerText = nome;
        subtitulo.className = 'description'
    }
}
createSub(3, 'Heitor');






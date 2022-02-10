function changeText() {
return document.getElementsByTagName('p')[0].innerText = 'Me vejo trabalhando como desenvolvedor web e ganhando um bom valor monetário!'
}
changeText();

function changeColor() {
 document.querySelectorAll(".main-content")[0].style.backgroundColor = 'green'
 
}
changeColor()

function redToWhite() {
    let changes = document.querySelector(".center-content");
    changes.style.backgroundColor = 'white'
}
redToWhite();

function correction () {
    let correcao = document.getElementsByClassName("title")[0];
    correcao.innerText = 'Exercício 5.1 - Javascript'
}
correction();

function maiusculo() {
    let transformers = document.querySelectorAll('p')[2];
    transformers.innerText = 'TRYBE'
}
maiusculo()

function exibicionismo() {
    console.log(document.getElementsByTagName('p'))
}
exibicionismo()
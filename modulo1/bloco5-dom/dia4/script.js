let body = document.querySelector('body');
let button = document.querySelector('#button');
let caixaDeTexto = document.querySelector('#text-box');
let conteudoCaixaDeTexto = caixaDeTexto.value;

button.addEventListener("click", changeColor);

function changeColor() {
    let conteudoCaixaDeTexto = caixaDeTexto.value;
    body.style.backgroundColor = conteudoCaixaDeTexto;
}
changeColor();

console.log(conteudoCaixaDeTexto)
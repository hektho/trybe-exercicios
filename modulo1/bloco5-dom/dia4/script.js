let body = document.querySelector('body');
let button = document.querySelector('#button');
let caixaDeTexto = document.querySelector('#text-box');
let conteudoCaixaDeTexto = caixaDeTexto.value;

function armazenaValor(color) {
    
    button.addEventListener('click', changeColor);
    function changeColor() {
        body.style.backgroundColor = color
        localStorage.setItem('backgroundColor', JSON.stringify(color));
        let backgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
        
    }
    changeColor();
}
armazenaValor(conteudoCaixaDeTexto);

let button2 = document.querySelector('#button2');
let textBox2 = document.querySelector('#text-box2');

button2.addEventListener("click", mudaFonte);

function mudaFonte() {
    let conteudoCaixa2 = textBox2.value;
    body.style.color = conteudoCaixa2;

}
mudaFonte();

let button3 = document.querySelector('#button3');
let textBox3 = document.querySelector('#text-box3')

button3.addEventListener('click', changeFontSize);

function changeFontSize() {
body.style.fontSize = textBox3.value + "px";
}
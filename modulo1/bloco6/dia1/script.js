const botaoEnvia = document.getElementById('botao-envia');

botaoEnvia.addEventListener('click', interromperEvento);
function interromperEvento(evento) {
    evento.preventDefault();
}

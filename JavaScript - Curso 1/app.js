    let numeroSec = geraNumAleatorio();
    
    function exibeNaTela (tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    exibeNaTela('h1', 'Jogo do secreto');
    exibeNaTela('p', 'Chute um número de 1 a 5 ');

    function verificarChute() {
        let chute = document.querySelector('input').value;
        console.log(chute == numeroSec);
    }

    function geraNumAleatorio(){
        return parseInt(Math.random() * 5 + 1);
    }
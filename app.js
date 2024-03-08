let verificarChute = () => {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

let exibirTexto = (tag, texto) => {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

let sorteiaNumero = (numeroMaximo) => {
    return parseInt(Math.random() * numeroMaximo + 1);
}

let numeroMaximo = 10;

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', `Tente adivinhar o número secreto entre 0 e ${numeroMaximo}`);

let numeroSecreto = 10;





/*
let main = () => {
    alert('Boas vindas ao jogo de adivinhação!');

    let numeroLimite = 10;
    let numeroSecreto = Math.floor(Math.random() * numeroLimite + 1); 
    console.log(numeroSecreto);
    let palpite; 
    let tentativas = 0;

    while(palpite !== numeroSecreto) {
        tentativas++;
        palpite = parseInt(prompt(`Digite um número entre 0 e ${numeroLimite}:`));
        
        if (palpite == numeroSecreto) {
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
            break;

        } else {
            let maior = numeroSecreto > palpite;
            
            if (maior) {
                alert(`O número secreto é maior que ${palpite}`);

            } else {
                alert(`O número secreto é menor que ${palpite}`);

            }
        }
    }
}
*/
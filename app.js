
let numeroMaximo = 10;
let tentativas = 1;

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', `Tente adivinhar o número secreto entre 1 e ${numeroMaximo}`);

let numeroSecreto = sorteiaNumero(numeroMaximo);

function verificarChute(){
    let chute = document.querySelector('input').value;
    let acertou = chute == numeroSecreto;

    if(acertou) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcerto = `Parabéns, você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;

        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagemAcerto);

    } else {
        let maior = chute > numeroSecreto;
        let mensagem = maior ? 'menor' : 'maior';

        exibirTexto('h1', 'Errou!');
        exibirTexto('p', `O número secreto é ${mensagem} que ${chute}`);
    }
    tentativas++;
    limparCampo();
}

function exibirTexto(tag, texto){
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

function sorteiaNumero(numeroMaximo){
    return parseInt(Math.random() * numeroMaximo + 1);
}

function limparCampo(){
    document.querySelector('input').value = '';
}





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
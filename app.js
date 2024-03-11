//impedir que um numero que já foi sorteado seja sorteado novamente
//desabilitar o botão chute quando acertar o número secreto

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let tentativas = 1;

exibirMensagemInicial();

let numeroSecreto = sorteiaNumero(numeroMaximo);

function verificarChute(){
    let chute = document.querySelector('input').value;
    let acertou = chute == numeroSecreto;

    if(acertou) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcerto = `Parabéns, você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;

        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagemAcerto);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        let maior = chute > numeroSecreto;
        let palavraMaiorOuMenor = maior ? 'menor' : 'maior';

        exibirTexto('h1', 'Errou!');
        exibirTexto('p', `O número secreto é ${palavraMaiorOuMenor} que ${chute}`);
    }
    tentativas++;
    limparCampo();
}

function exibirTexto(tag, texto){
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

function sorteiaNumero(numeroMaximo){
    let numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1);

    if(listaDeNumerosSorteados.includes(numeroAleatorio)){
        return sorteiaNumero(numeroMaximo);
    } else {
        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados);
        return numeroAleatorio;    
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Tente adivinhar o número secreto entre 1 e ${numeroMaximo}`);    
}

function reiniciarJogo(){
   numeroSecreto = sorteiaNumero(numeroMaximo);
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
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
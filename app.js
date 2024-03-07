alert('Boas vindas ao jogo de adivinhação!');
let numeroDaSorte = 4; 
let palpite = prompt('Digite um número entre 0 e 10');
if (palpite == numeroDaSorte) {
    console.log('Parabéns, você acertou!');
} else {
    console.log('Que pena, tente novamente!');
}
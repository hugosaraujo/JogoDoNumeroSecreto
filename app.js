alert('Boas vindas ao jogo de adivinhação!');

let numeroSecreto = 4; 
console.log(numeroSecreto);
let palpite; 

while(palpite !== numeroSecreto) {
    
    palpite = parseInt(prompt('Digite um número entre 0 e 10:'));
    
    if (palpite == numeroDaSorte) {
        alert('Parabéns, você acertou! o número secreto é: ' + numeroSecreto);
    } else {
        let maior = numeroSecreto > palpite;
        
        if (maior) {
            alert(`O número secreto é maior que ${palpite}`);
        } else {
            alert(`O número secreto é menor que ${palpite}`);
        }
    }
}
// Gerar um número aleatório entre 0 e 10
const numeroSorteado = Math.floor(Math.random() * 11);

let palpite = -1;
let numTentativas = 0;

// Enquanto o palpite não for igual ao número sorteado, pedir um novo palpite
while (palpite !== numeroSorteado) {
  palpite = parseInt(prompt("Tente adivinhar o número entre 0 e 10:"));

  // Verificar se o palpite é maior, menor ou igual ao número sorteado
  if (palpite > numeroSorteado) {
    console.log("O número é menor!");
  } else if (palpite < numeroSorteado) {
    console.log("O número é maior!");
  }

  numTentativas++;
}

// Exibir a mensagem de acerto e a quantidade de tentativas necessárias
console.log(`Parabéns! Você acertou o número em ${numTentativas} tentativas.`);

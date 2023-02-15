// Número de eleitores
let numEleitores = parseInt(prompt("Digite o número total de eleitores: "));

// Inicializa as variáveis para contagem de votos
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;

// Loop para cada eleitor votar
for (let i = 0; i < numEleitores; i++) {
  // Solicita o voto do eleitor
  let voto = parseInt(prompt(`Eleitor ${i+1}, vote em um candidato (1, 2 ou 3): `));

  // Verifica em qual candidato foi o voto e incrementa a variável correspondente
  if (voto === 1) {
    votosCandidato1++;
  } else if (voto === 2) {
    votosCandidato2++;
  } else if (voto === 3) {
    votosCandidato3++;
  } else {
    alert("Voto inválido! Tente novamente.");
    i--; // decrementa i para que o eleitor vote novamente
  }
}

// Imprime o resultado final
console.log(`Votos candidato 1: ${votosCandidato1}`);
console.log(`Votos candidato 2: ${votosCandidato2}`);
console.log(`Votos candidato 3: ${votosCandidato3}`);

let numNotas = prompt("Quantas notas serão inseridas?");
let notas = [];

for (let i = 0; i < numNotas; i++) {
  notas.push(parseFloat(prompt(`Digite a nota ${i + 1}:`)));
}

let aprovados = 0;
let emRecuperacao = 0;
let reprovados = 0;

//Classifica as notas
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    aprovados++;
  } else if (notas[i] >= 5) {
    emRecuperacao++;
  } else {
    reprovados++;
  }
}

//Apresenta os resultados
console.log(`Quantidade de aprovados: ${aprovados}`);
console.log(`Quantidade de alunos em recuperação: ${emRecuperacao}`);
console.log(`Quantidade de reprovados: ${reprovados}`);

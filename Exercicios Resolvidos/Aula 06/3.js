// Pede a quantidade de alunos a serem cadastrados
const quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos a serem cadastrados: "));

// Declara as listas para armazenar as informações dos alunos
const nomes = [];
const notas = [];

// Lê o nome e a nota de cada aluno e armazena nas listas correspondentes
for (let i = 0; i < quantidadeAlunos; i++) {
  const nome = prompt(`Digite o nome do aluno ${i + 1}: `);
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
  nomes.push(nome);
  notas.push(nota);
}

// Exibe o nome e a nota de cada aluno
for (let i = 0; i < nomes.length; i++) {
  console.log(`${nomes[i]} - Nota: ${notas[i]}`);
}

// Calcula a média total das notas
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

// Exibe a média total das notas
console.log(`Média total das notas: ${media.toFixed(2)}`);

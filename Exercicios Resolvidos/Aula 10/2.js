// Pede ao usuário para digitar a quantidade de nomes
let quantidadeNomes = parseInt(prompt("Digite a quantidade de nomes: "));

// Cria um array para armazenar os nomes
let nomes = [];

// Pede ao usuário para digitar cada nome
for (let i = 0; i < quantidadeNomes; i++) {
  let nome = prompt(`Digite o nome ${i + 1 }: `);
  nomes.push(nome);
}

// Exibe os nomes invertidos
console.log("Nomes digitados (invertidos):");
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}

// Encontra o maior e o menor nome
let maiorNome = nomes[0];
let menorNome = nomes[0];
for (let i = 1; i < nomes.length; i++) {
  if (nomes[i].length > maiorNome.length) {
    maiorNome = nomes[i];
  } else if (nomes[i].length < menorNome.length) {
    menorNome = nomes[i];
  }
}

// Exibe o maior e o menor nome
console.log("Maior nome:");
console.log(maiorNome);
console.log("Menor nome:");
console.log(menorNome);

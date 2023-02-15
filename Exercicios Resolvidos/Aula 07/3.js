// Criando o array para armazenar os números sorteados
let numeros = [];

// Gerando os 20 números aleatórios e adicionando ao array
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 101)); // número aleatório entre 0 e 100
}

// Ordenando o array em ordem crescente
numeros.sort((a, b) => a - b);

// Imprimindo o array ordenado
console.log(numeros);

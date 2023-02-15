// pede ao usuário a quantidade de números
let n = Number(prompt('Digite a quantidade de números: '));

// cria um array vazio para armazenar os números
let numeros = [];

// pede ao usuário para digitar cada número e adiciona no array
for (let i = 0; i < n; i++) {
  let numero = Number(prompt(`Digite o número ${i + 1}: `));
  numeros.push(numero);
}

// encontra o menor valor, o maior valor e a soma dos valores
let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
  
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  
  soma += numeros[i];
}

// imprime os resultados
console.log(`O menor valor é: ${menor}`);
console.log(`O maior valor é: ${maior}`);
console.log(`A soma dos valores é: ${soma}`);

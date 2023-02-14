// Declara os arrays
const numeros = [];
const pares = [];
const impares = [];

// Lê os números e separa em pares e ímpares
for (let i = 0; i < 20; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  numeros.push(numero);
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

// Exibe os arrays
console.log("Números digitados:", numeros);
console.log("Números pares:", pares);
console.log("Números ímpares:", impares);

const numero = parseInt(prompt("Digite um número inteiro: "));

const pares = [];
const impares = [];

for (let i = 0; i <= numero; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}

console.log(`Números pares até ${numero}: ${pares}`);
console.log(`Números ímpares até ${numero}: ${impares}`);

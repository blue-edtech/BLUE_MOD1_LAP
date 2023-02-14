// Declara os arrays
const idades = [];
const alturas = [];

// Lê as idades e alturas e armazena nos arrays correspondentes
for (let i = 0; i < 5; i++) {
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
  const altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}: `));
  idades.push(idade);
  alturas.push(altura);
}

// Calcula a média de idade e altura
const mediaIdade = idades.reduce((soma, idade) => soma + idade, 0) / idades.length;
const mediaAltura = alturas.reduce((soma, altura) => soma + altura, 0) / alturas.length;

// Exibe a média de idade e altura
console.log(`A média de idade é ${mediaIdade.toFixed(2)} anos.`);
console.log(`A média de altura é ${mediaAltura.toFixed(2)} metros.`);

// Pedindo os dois números para o usuário
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

// Criando o array com os números sequenciais
let arrayNumeros = [];
if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    arrayNumeros.push(i);
  }
} else {
  for (let i = num2; i <= num1; i++) {
    arrayNumeros.push(i);
  }
}

// Imprimindo o array com os números sequenciais
console.log(arrayNumeros);

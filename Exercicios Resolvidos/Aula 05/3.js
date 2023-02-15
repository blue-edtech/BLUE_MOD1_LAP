let numero = parseInt(prompt("Digite um número par: "));

while (numero % 2 !== 0) {
  numero = parseInt(prompt("O número digitado é ímpar. Digite um número par: "));
}

console.log(`O número digitado é ${numero}.`);

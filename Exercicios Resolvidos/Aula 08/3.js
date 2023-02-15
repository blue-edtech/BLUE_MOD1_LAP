// solicita um número ao usuário
const numero = parseInt(prompt("Digite um número: "));

// itera de 1 a 10 e imprime a tabuada do número informado
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

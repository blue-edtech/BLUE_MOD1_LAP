// solicita um número para o usuário
const numero = parseInt(prompt("Digite um número: "));

// inicializa a variável para armazenar o resultado
let fatorial = 1;

// itera de 1 até o número digitado, calculando o fatorial
for(let i = 1; i <= numero; i++){
  fatorial *= i;
}

// exibe o resultado
console.log(`${numero}! = ${fatorial}`);

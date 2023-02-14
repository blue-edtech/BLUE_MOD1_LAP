// Lê as informações da peça 1
const nomePeca1 = prompt("Digite o nome da peça 1:");
const numPecas1 = parseInt(prompt("Digite o número de peças 1:"));
const valorPeca1 = parseFloat(prompt("Digite o valor unitário da peça 1:"));

// Lê as informações da peça 2
const nomePeca2 = prompt("Digite o nome da peça 2:");
const numPecas2 = parseInt(prompt("Digite o número de peças 2:"));
const valorPeca2 = parseFloat(prompt("Digite o valor unitário da peça 2:"));

// Calcula o valor total a ser pago
const valorTotal = numPecas1 * valorPeca1 + numPecas2 * valorPeca2;

// Exibe o resultado
console.log("O valor total a ser pago é: " + valorTotal);

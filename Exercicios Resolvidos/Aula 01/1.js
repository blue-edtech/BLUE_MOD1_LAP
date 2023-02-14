// Lê os valores de A e B
const notaA = parseFloat(prompt("Digite a nota A: "));
const notaB = parseFloat(prompt("Digite a nota B: "));

// Calcula a média ponderada
const mediaPonderada = (notaA * 4 + notaB * 6) / 10;

// Exibe o resultado
console.log("A média ponderada é: " + mediaPonderada);

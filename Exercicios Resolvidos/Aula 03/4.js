// Lê os valores de A e B
const a = parseInt(prompt("Digite o valor de A:"));
const b = parseInt(prompt("Digite o valor de B:"));

// Verifica se são múltiplos
if (a % b === 0 || b % a === 0) {
  console.log("São múltiplos.");
} else {
  console.log("Não são múltiplos.");
}

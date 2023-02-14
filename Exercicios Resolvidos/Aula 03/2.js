// Lê as quatro notas
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const nota4 = parseFloat(prompt("Digite a quarta nota: "));

// Calcula a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibe o resultado
if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Em recuperação");
} else {
  console.log("Reprovado");
}

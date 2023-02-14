// Lê as idades em anos, meses e dias
const idadeAnos = parseInt(prompt("Digite a idade em anos: "));
const idadeMeses = parseInt(prompt("Digite a idade em meses: "));
const idadeDias = parseInt(prompt("Digite a idade em dias: "));

// Converte as idades para dias
const totalDias = idadeAnos * 365 + idadeMeses * 30 + idadeDias;

// Exibe o resultado
console.log("A pessoa já viveu " + totalDias + " dias.");

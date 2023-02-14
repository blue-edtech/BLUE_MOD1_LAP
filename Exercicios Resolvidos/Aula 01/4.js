// Lê a idade em dias
const idadeDias = parseInt(prompt("Digite a idade em dias: "));

// Calcula a idade em anos, meses e dias
const idadeAnos = Math.floor(idadeDias / 365);
const idadeMeses = Math.floor((idadeDias % 365) / 30);
const idadeDiasRestantes = idadeDias % 30;

// Exibe o resultado
console.log("A pessoa tem " + idadeAnos + " anos, " + idadeMeses + " meses e " + idadeDiasRestantes + " dias.");

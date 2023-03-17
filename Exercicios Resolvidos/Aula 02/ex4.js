const prompt = require("prompt-sync")();

const aluno1 = prompt("Nome do (a) aluno (a): ");
const nota1 = parseFloat(prompt(`Nota do (a) ${aluno1}: `));

const aluno2 = prompt("Nome do (a) aluno (a): ");
const nota2 = parseFloat(prompt(`Nota do (a) ${aluno2}: `));

const aluno3 = prompt("Nome do (a) aluno (a): ");
const nota3 = parseFloat(prompt(`Nota do (a) ${aluno3}: `));

const aluno4 = prompt("Nome do (a) aluno (a): ");
const nota4 = parseFloat(prompt(`Nota do (a) ${aluno4}: `));

console.log(`
Aluno (a) | Nota
${aluno1} | ${nota1}
${aluno2} | ${nota2}
${aluno3} | ${nota3}
${aluno4} | ${nota4}
`)

// você também pode usar o console.table para exibir os resultados:
/*
const resultado = [[aluno1, nota1], [aluno2, nota2], [aluno3, nota3], [aluno4, nota4]];

console.table(resultado);
*/
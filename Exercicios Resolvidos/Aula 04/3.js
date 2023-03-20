const prompt = require("prompt-sync")();

let valorSaque = +prompt("Digite o valor a ser sacado (entre R$ 10 e R$ 600): ");

const notas100 = Math.floor(valorSaque / 100);
valorSaque = valorSaque % 100;

const notas50 = Math.floor(valorSaque / 50);
valorSaque = valorSaque % 50;

const notas10 = Math.floor(valorSaque / 10);
valorSaque = valorSaque % 10;

const notas5 = Math.floor(valorSaque / 5);
valorSaque = valorSaque % 5;

const notas1 = valorSaque;

console.log();

console.log(`${notas100} notas de R$ 100`);
console.log(`${notas50} notas de R$ 50`);
console.log(`${notas10} notas de R$ 10`);
console.log(`${notas5} notas de R$ 5`);
console.log(`${notas1} notas de R$ 1`);

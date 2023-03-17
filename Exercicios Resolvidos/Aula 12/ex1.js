const prompt = require("prompt-sync")();

function calculadora(n1, n2){
    return `Resultados
    Soma: ${n1} + ${n2} = ${n1 + n2}
    Subtração: ${n1} - ${n2} = ${n1 - n2}
    Multiplicação: ${n1} * ${n2} = ${n1 * n2}
    Divisão: ${n1} / ${n2} = ${n1 / n2}`
}

const numero1 = +prompt("Número 1: ");
const numero2 = +prompt("Número 2: ");

console.log(calculadora(numero1, numero2));
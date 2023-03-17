const prompt = require("prompt-sync")();

const salario = +prompt("Digite o valor atual do seu salário: R$ ");
let percentual;

if(salario <= 280){
    percentual = 20;
} else if(salario <= 700){
    percentual = 15;
} else if(salario <= 1500){
    percentual = 10;
} else{
    percentual = 5;
}

console.log(`\nSalário original: R$ ${salario}`);
console.log(`O percentual aplicado é de ${percentual}`);

percentual = percentual / 100;
const aumento = percentual * salario;
const novoSalario = salario + aumento;

console.log(`Teve um aumento no salário de R$ ${aumento}`);
console.log(`Seu novo salário é: R$ ${novoSalario}`);
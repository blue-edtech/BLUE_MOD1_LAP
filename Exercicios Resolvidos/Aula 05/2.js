let nome = "";
let idade = 0;
let salario = 0;
let estadoCivil = "";

while (nome.length < 4) {
  nome = prompt("Digite seu nome (maior que 3 caracteres): ");
}

while (idade < 0 || idade > 150) {
  idade = Number(prompt("Digite sua idade (entre 0 e 150): "));
}

while (salario <= 0) {
  salario = Number(prompt("Digite seu salário (maior que zero): "));
}

while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
  estadoCivil = prompt("Digite seu estado civil (s, c, v, d): ");
}

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Salário: " + salario);
console.log("Estado civil: " + estadoCivil);

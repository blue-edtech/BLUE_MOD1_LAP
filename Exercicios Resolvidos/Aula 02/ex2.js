const prompt = require("prompt-sync")();

const nome = prompt("Nome completo: ");
const endereco = prompt("Endereço: ");
const cep = prompt("CEP: ");
const telefone = prompt("Telefone: ");

console.log(`\nNome:${nome}\nEndereço: ${endereco}\nCEP: ${cep}\nTelefone: ${telefone}`);
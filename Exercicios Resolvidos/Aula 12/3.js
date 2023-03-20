const prompt = require("prompt-sync")();

function area(largura, comprimento){
    const area = largura * comprimento;
    return `A área do terreno é ${area}m²`
}

const larg = parseFloat(prompt("Informe a largura do terreno: "));
const comp = parseFloat(prompt("Informe o comprimento do terreno: "));

console.log(area(larg, comp));
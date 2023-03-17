const prompt = require("prompt-sync")();

function passoMin(x, y, z){
    let passos = 0;
    while(x <= y){
        x += z;
        passos++
    }
    return `A quantidade miníma de passos que precisarão ser dados são ${passos} passos.`
}

const posInicial = +prompt("Qual a posição inicial do MB? ");
const posFinal = +prompt("Qual a posição final do MB? ");
const tamPasso = +prompt("Qual o tamanho do passo do MB? ");

console.log(passoMin(posInicial, posFinal, tamPasso));
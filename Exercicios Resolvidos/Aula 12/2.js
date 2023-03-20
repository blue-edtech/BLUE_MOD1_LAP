const prompt = require("prompt-sync")();

function divTres(numero){
    if(numero % 3 == 0){
        return `${numero} é divisível por 3? ${true}`;
    } else{
        return `${numero} é divisível por 3? ${false}`;
    }
}

const n = +prompt("Informe um número: ");

console.log(divTres(n));
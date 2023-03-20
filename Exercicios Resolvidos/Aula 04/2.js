const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random() * 11);

// console.log criado para que você consiga validar se o seu if/else está funcionando corretamente
// deixar comentado para que o usuário não veja o número gerado 
// console.log(numeroAleatorio);

console.log(`O programa gerou um número entre 0 e 10. Adivinhe qual é esse número.`);

const resposta = +prompt("Qual é o seu palpite? ");

if(resposta == numeroAleatorio){
    console.log("Você ganhou :)");
} else{
    console.log("Você perdeu :(")
}
let numero = parseInt(prompt("Digite um número inteiro: "));

let divisores = 0;

//Testa se o número é primo
for(let i = 1; i <= numero; i++){
  if(numero % i == 0){
    divisores++;
  }
}

//Decide se é primo ou não e informa
if(divisores == 2){
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}

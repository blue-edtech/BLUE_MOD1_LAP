// Pede o nome de usuário e a senha
let nomeUsuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");

// Verifica se a senha atende aos critérios estabelecidos
let senhaValida = false;

if (senha.length >= 8) { // Verifica se a senha tem pelo menos 8 caracteres
  for (let i = 0; i < senha.length; i++) {
    let caracter = senha.charAt(i);
    if (!isNaN(caracter)) { // Verifica se a senha tem pelo menos um número
      for (let j = 0; j < senhaEspeciais.length; j++) {
        if (caracter === senhaEspeciais.charAt(j)) { // Verifica se a senha tem pelo menos um caracter especial
          senhaValida = true;
          break;
        }
      }
      if (senhaValida) {
        break;
      }
    }
  }
}

// Imprime uma mensagem de acordo com o resultado da verificação
if (senhaValida) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida!");
}

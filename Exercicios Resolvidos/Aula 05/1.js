let nomeDeUsuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");

while (nomeDeUsuario === senha) {
  console.log("Erro: a senha não pode ser igual ao nome de usuário!");
  senha = prompt("Digite uma senha diferente do nome de usuário: ");
}

console.log("Nome de usuário e senha cadastrados com sucesso!");

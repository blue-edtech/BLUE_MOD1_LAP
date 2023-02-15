// Solicita ao usuário a quantidade de linhas e colunas
const numLinhas = parseInt(prompt("Digite a quantidade de linhas: "));
const numColunas = parseInt(prompt("Digite a quantidade de colunas: "));

// Cria um array bidimensional
const tabela = [];

// Preenche a tabela com valores
for (let i = 0; i < numLinhas; i++) {
  tabela[i] = [];
  for (let j = 0; j < numColunas; j++) {
    tabela[i][j] = i + j;
  }
}

// Imprime a tabela no console
for (let i = 0; i < numLinhas; i++) {
  console.log(tabela[i]);
}

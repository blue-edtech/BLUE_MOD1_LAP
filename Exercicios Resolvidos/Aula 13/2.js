// Definindo os cargos possíveis
const CARGOS = ["gerente", "vendedor", "atendente", "analista"];

// Inicializando a lista de funcionários vazia
const funcionarios = [];

// Função para adicionar um novo funcionário
function cadastrarFuncionario() {
  // Pergunta os dados do funcionário
  const nome = prompt("Digite o nome do funcionário:");
  const cargo = prompt(`Digite o cargo do funcionário (${CARGOS.join(", ")}):`);
  const salario = Number(prompt("Digite o salário do funcionário:"));

  // Cria o objeto do funcionário
  const funcionario = { nome, cargo, salario };

  // Adiciona o funcionário na lista
  funcionarios.push(funcionario);

  // Pergunta se deseja cadastrar um novo funcionário
  const resposta = prompt("Deseja cadastrar outro funcionário? (sim/não)");
  if (resposta.toLowerCase() === "sim") {
    cadastrarFuncionario(); // Chama a função novamente para cadastrar outro funcionário
  } else {
    exibirRelatorio(); // Chama a função para exibir o relatório final
  }
}

// Função para exibir o relatório final
function exibirRelatorio() {
  // Inicializa um objeto para contar a quantidade de funcionários por cargo
  const contagemCargos = {};
  CARGOS.forEach(cargo => {
    contagemCargos[cargo] = 0;
  });

  // Percorre a lista de funcionários contando a quantidade de cada cargo
  let relatorio = "";
  funcionarios.forEach(funcionario => {
    contagemCargos[funcionario.cargo]++;
  });

  // Adiciona as informações do relatório na string
  relatorio += "Relatório de funcionários:\n";
  CARGOS.forEach(cargo => {
    const quantidade = contagemCargos[cargo];
    if (quantidade > 0) {
      relatorio += `- ${quantidade} ${cargo}(s):\n`;
      funcionarios.forEach(funcionario => {
        if (funcionario.cargo === cargo) {
          relatorio += `  - ${funcionario.nome}\n`;
        }
      });
    }
  });

  // Exibe o relatório na tela
  console.log(relatorio);
}

// Inicia o cadastro de funcionários
cadastrarFuncionario();

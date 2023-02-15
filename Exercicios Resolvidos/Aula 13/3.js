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

// Função para calcular o aumento de salário baseado no cargo
function calcularAumento(cargo, taxa) {
    // Iterando sobre todos os funcionários para encontrar os que possuem o cargo informado
    for (const funcionario of funcionarios) {
      if (funcionario.cargo === cargo) {
        const aumento = funcionario.salario * (taxa / 100); // Calculando o aumento
        funcionario.salario += aumento; // Adicionando o aumento ao salário atual
        console.log(`Novo salário de ${funcionario.nome}: R$ ${funcionario.salario}`); // Exibindo o novo salário
      }
    }
}

// Inicia o cadastro de funcionários
cadastrarFuncionario();
calcularAumento("vendedor", 10);

// Inicializa uma lista vazia de contatos
const agenda = [];

// Função para adicionar um novo contato
function adicionarContato(nome, telefone) {
  // Cria um objeto com os atributos nome e telefone
  const novoContato = { nome, telefone };
  // Adiciona o objeto à lista de contatos
  agenda.push(novoContato);
  console.log(`Contato ${nome} adicionado com sucesso!`);
}

// Função para alterar o telefone de um contato existente
function alterarTelefone(nome, novoTelefone) {
  // Procura o contato na lista pelo nome
  const contato = agenda.find(c => c.nome === nome);
  if (contato) {
    // Atualiza o telefone do contato
    contato.telefone = novoTelefone;
    console.log(`Telefone do contato ${nome} alterado para ${novoTelefone}`);
  } else {
    console.log(`Contato ${nome} não encontrado!`);
  }
}

// Função para deletar um contato existente
function deletarContato(nome) {
  // Procura o contato na lista pelo nome
  const contatoIndex = agenda.findIndex(c => c.nome === nome);
  if (contatoIndex !== -1) {
    // Remove o objeto da lista de contatos
    agenda.splice(contatoIndex, 1);
    console.log(`Contato ${nome} removido com sucesso!`);
  } else {
    console.log(`Contato ${nome} não encontrado!`);
  }
}

// Função para consultar o telefone de um contato existente
function consultarTelefone(nome) {
  // Procura o contato na lista pelo nome
  const contato = agenda.find(c => c.nome === nome);
  if (contato) {
    console.log(`Telefone do contato ${nome}: ${contato.telefone}`);
  } else {
    console.log(`Contato ${nome} não encontrado!`);
  }
}


// Adiciona alguns contatos
adicionarContato('João', '123456789');
adicionarContato('Maria', '987654321');
adicionarContato('Pedro', '555555555');

// Altera o telefone de um contato
alterarTelefone('João', '111111111');

// Deleta um contato
deletarContato('Maria');

// Consulta o telefone de um contato
consultarTelefone('Pedro');

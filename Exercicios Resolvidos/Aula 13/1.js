// Criação do objeto pessoa
const pessoa = {
    nome: "Fulano",
    idade: 20,
    peso: 70,
    altura: 175,
  
    // Método para envelhecer
    envelhecer: function() {
      this.idade++; // incrementa a idade em 1
  
      // Verifica se a pessoa ainda não atingiu 21 anos para crescer
      if (this.idade < 21) {
        this.altura += 0.5; // acrescenta 0,5 cm na altura
      }
    },
  
    // Método para engordar
    engordar: function(peso) {
      this.peso += peso; // acrescenta o peso informado ao peso atual da pessoa
    },
  
    // Método para emagrecer
    emagrecer: function(peso) {
      this.peso -= peso; // subtrai o peso informado do peso atual da pessoa
    },
  
    // Método para crescer
    crescer: function(altura) {
      this.altura += altura; // acrescenta a altura informada à altura atual da pessoa
    },
  
    // Método para retornar todas as informações da pessoa em uma string
    bio: function() {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Peso: ${this.peso} kg, Altura: ${this.altura.toFixed(2)} cm`;
    },
  };
  
  // Testando os métodos do objeto pessoa
  console.log(pessoa.bio()); // exibe as informações iniciais da pessoa
  pessoa.envelhecer();
  pessoa.engordar(5);
  pessoa.crescer(1.8);
  console.log(pessoa.bio()); // exibe as informações atualizadas da pessoa
  pessoa.emagrecer(10);
  pessoa.crescer(0.2);
  console.log(pessoa.bio()); // exibe as informações atualizadas da pessoa
  
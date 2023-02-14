// Cria um objeto para contar as ocorrências de cada valor
const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  
  // Simula 100 lançamentos de dados
  const results = [];
  for (let i = 0; i < 100; i++) {
    const value = Math.floor(Math.random() * 6) + 1; // Gera um valor entre 1 e 6
    results.push(value); // Armazena o valor no array de resultados
    counts[value]++; // Incrementa a contagem do valor correspondente no objeto counts
  }
  
  // Imprime as ocorrências de cada valor
  for (let i = 1; i <= 6; i++) {
    console.log(`Valor ${i} foi obtido ${counts[i]} vezes`);
  }
  
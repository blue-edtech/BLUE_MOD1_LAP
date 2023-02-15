function formatarData(data) {
    // quebra a string da data em dia, mês e ano
    const partes = data.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);
    
    // valida se a data é válida
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      return null;
    }
    
    // cria um array com o nome dos meses
    const meses = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    // verifica se o mês é válido
    if (mes < 1 || mes > 12) {
      return null;
    }
    
    // verifica se o dia é válido
    const ultimoDiaMes = new Date(ano, mes, 0).getDate();
    if (dia < 1 || dia > ultimoDiaMes) {
      return null;
    }
    
    // formata a data no formato desejado
    const mesPorExtenso = meses[mes - 1];
    return `${dia} de ${mesPorExtenso} de ${ano}`;
  }
  
  // Exemplo de uso
  console.log(formatarData('31/12/2022')); // resultado: "31 de dezembro de 2022"
  console.log(formatarData('30/02/2022')); // resultado: null (data inválida)
  
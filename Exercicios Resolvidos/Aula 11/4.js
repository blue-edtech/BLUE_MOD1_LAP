let compras = []; // lista para armazenar o valor total de cada compra
let opcoes = ['a vista com 10% de desconto', 'em duas vezes (preço da etiqueta)', 'de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00)'];

function calculaOpcoes(valorTotal) {
  let opcaoSelecionada = Number(prompt(`Total a pagar: R$ ${valorTotal}\nEscolha uma opção de pagamento:\n1. ${opcoes[0]}\n2. ${opcoes[1]}\n3. ${opcoes[2]}`));

  if (opcaoSelecionada === 1) {
    valorTotal *= 0.9; // calcula o desconto de 10%
  }else if (opcaoSelecionada === 2){
    
  }else if (opcaoSelecionada === 3 && valorTotal > 100) {
    let parcelas = Number(prompt('Em quantas vezes deseja parcelar? (3 a 10 vezes)'));
    while (parcelas < 3 || parcelas > 10) {
      parcelas = Number(prompt('Número de parcelas inválido. Em quantas vezes deseja parcelar? (3 a 10 vezes)'));
    }
    valorTotal *= Math.pow(1.03, parcelas); // calcula o valor total com juros

    // valorTotal /= parcelas; // divide o valor total pelo número de parcelas
  }else{

  }

  compras.push(valorTotal); // adiciona o valor total à lista de compras

  return valorTotal;
}

let valorTotal = Number(prompt('Digite o valor total da compra (0 para sair):'));
while (valorTotal !== 0) {
  let valorOpcao = calculaOpcoes(valorTotal);
  console.log(`Valor total a pagar: R$ ${valorOpcao.toFixed(2)}`);
  valorTotal = Number(prompt('Digite o valor total da compra (0 para sair):'));
}

function mostraCompras() {
  let totalCompras = [0, 0, 0]; // lista para armazenar o total de compras de cada opção
  for (let i = 0; i < compras.length; i++) {
    if (opcoes[i] === opcoes[0]) {
      totalCompras[0] += compras[i];
    } else if (opcoes[i] === opcoes[1]) {
      totalCompras[1] += compras[i];
    } else {
      totalCompras[2] += compras[i];
    }
  }
  console.log(`Resumo das compras:\n1. ${opcoes[0]}: R$ ${totalCompras[0].toFixed(2)}\n2. ${opcoes[1]}: R$ ${totalCompras[1].toFixed(2)}\n3. ${opcoes[2]}: R$ ${totalCompras[2].toFixed(2)}`);
}

mostraCompras();

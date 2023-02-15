// inicialização das variaveis
let compras = [0,0,0];
let totalCompras = [0,0,0];
let opcoes = [
  "a vista com 10% de desconto",
  "em duas vezes (preço da etiqueta)",
  "de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00)",
];

//Laço onde o programa todo acontece
while (true) {
    let totalGasto = Number(prompt("Digite o total gasto pelo cliente: (0 to exit) "));
    
    if (totalGasto === 0) {
      break;
    }

    //Laço para selecionar a opção correta
    while (true) {
        let opcaoSelecionada = Number(prompt(`Total a pagar: R$ ${totalGasto}\nEscolha uma opção de pagamento:\n1. ${opcoes[0]}\n2. ${opcoes[1]}\n3. ${opcoes[2]} `));

        if (opcaoSelecionada === 1) {
            totalGasto *= 0.9; // calcula o desconto de 10%

            console.log("");
            console.log(`Valor total a pagar: ${totalGasto.toFixed(2)}`);
            compras[0] += 1;
            totalCompras[0] += totalGasto;
            break;
        } else if (opcaoSelecionada === 2) {
            const parcela = totalGasto / 2; // calcula valor da parcela /2

            console.log("");
            console.log(`2x de ${parcela.toFixed(2)}`);
            console.log(`Valor total a pagar: ${totalGasto.toFixed(2)}`);
            compras[1] += 1;
            totalCompras[1] += totalGasto;
            break;
        } else if (opcaoSelecionada === 3) {
            let parcela = 0;
            let parcelas = Number(prompt('Em quantas vezes deseja parcelar? (3 a 10 vezes) '));
            while (parcelas < 3 || parcelas > 10) {
                parcelas = Number(prompt('Número de parcelas inválido. Em quantas vezes deseja parcelar? (3 a 10 vezes) '));
            }
            totalGasto *= Math.pow(1.03, parcelas); // calcula o valor total com juros
            parcela = totalGasto /= parcelas; // divide o valor total pelo número de parcelas

            console.log("");
            console.log(`${parcelas}x de ${parcela.toFixed(2)}`);
            console.log(`Valor total a pagar: ${totalGasto.toFixed(2)}`);
            compras[2] += 1;
            totalCompras[2] += totalGasto;
            break;
        } else {
            console.log("Opção Invalida");
        }
    }
}

console.log("");
console.log(`Resumo das compras:\n1. ${opcoes[0]}: num compras ${compras[0]} R$ ${totalCompras[0].toFixed(2)}\n2. ${opcoes[1]}: num compras ${compras[1]} R$ ${totalCompras[1].toFixed(2)}\n3. ${opcoes[2]}: num compras ${compras[2]} R$ ${totalCompras[2].toFixed(2)}`);


// Solicita ao usuário as informações sobre as populações e taxas de crescimento
let popA = parseInt(prompt("Digite a população do país A:"));
let crescA = parseFloat(prompt("Digite a taxa de crescimento populacional do país A (%):"));
let popB = parseInt(prompt("Digite a população do país B:"));
let crescB = parseFloat(prompt("Digite a taxa de crescimento populacional do país B (%):"));

// Converte as taxas de crescimento para frações decimais
crescA /= 100;
crescB /= 100;

// Verifica se as condições iniciais são válidas
if (popA >= popB || crescA <= crescB) {
  console.log("Condições iniciais inválidas. O país A deve ter população menor e taxa de crescimento maior que a do país B.");
} else {
  let anos = 0;

  // Calcula o número de anos necessário para que a população de A ultrapasse ou iguale a de B
  while (popA < popB) {
    popA *= (1 + crescA);
    popB *= (1 + crescB);
    anos++;
  }

  console.log("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a do país B.");
}

// Lista com os modelos dos carros
let modelos = ['Modelo A', 'Modelo B', 'Modelo C', 'Modelo D', 'Modelo E'];

// Lista com o consumo dos carros (em km/l)
let consumos = [10, 12, 14, 16, 18];

//valor pago por litro de gasolina
const valorLitro = 5.5

// Encontra o índice do modelo mais econômico
let indiceMaisEconomico = 0;
for (let i = 1; i < consumos.length; i++) {
  if (consumos[i] > consumos[indiceMaisEconomico]) {
    indiceMaisEconomico = i;
  }
}

// Imprime o modelo mais econômico
console.log('O modelo mais econômico é o ' + modelos[indiceMaisEconomico]);

// Imprime a quantidade de litros de combustível para percorrer 1000 km
for (let i = 0; i < modelos.length; i++) {
  let litros = 1000 / consumos[i];
  let preco = litros * valorLitro;
  console.log(modelos[i] + ' consome ' + litros.toFixed(2) + ' litros para percorrer 1000 km, o que custará R$' + preco.toFixed(2));
}

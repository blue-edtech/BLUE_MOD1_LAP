function calcular(numero1, numero2, operador) {
    let resultado;
  
    switch (operador) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        resultado = numero1 / numero2;
        break;
      default:
        resultado = 'Operador inválido';
    }
  
    return resultado;
  }
  
  // Exemplo de uso da função:
  console.log(calcular(10, 5, '+')); // Saída: 15
  console.log(calcular(10, 5, '-')); // Saída: 5
  console.log(calcular(10, 5, '*')); // Saída: 50
  console.log(calcular(10, 5, '/')); // Saída: 2
  console.log(calcular(10, 5, '%')); // Saída: Operador inválido
  
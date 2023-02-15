function conversaoTemperatura(temp, escala) {
    let tempC, tempF, tempK;
    
    if (escala === 'C') {
      tempC = temp;
      tempF = (temp * 9 / 5) + 32;
      tempK = temp + 273.15;
    } else if (escala === 'F') {
      tempC = (temp - 32) * 5 / 9;
      tempF = temp;
      tempK = (temp + 459.67) * 5 / 9;
    } else if (escala === 'K') {
      tempC = temp - 273.15;
      tempF = temp * 9 / 5 - 459.67;
      tempK = temp;
    } else {
      console.log('Escala inválida.');
      return;
    }
    
    console.log('Temperatura em Celsius: ' + tempC.toFixed(2) + '°C');
    console.log('Temperatura em Fahrenheit: ' + tempF.toFixed(2) + '°F');
    console.log('Temperatura em Kelvin: ' + tempK.toFixed(2) + 'K');
    
    let escalaRetorno = prompt('Qual escala deseja retornar? (C, F ou K) ');
    let tempRetorno;
    
    if (escalaRetorno === 'C') {
      tempRetorno = tempC;
    } else if (escalaRetorno === 'F') {
      tempRetorno = tempF;
    } else if (escalaRetorno === 'K') {
      tempRetorno = tempK;
    } else {
      console.log('Escala de retorno inválida.');
      return;
    }
    
    console.log('Temperatura em ' + escalaRetorno + ': ' + tempRetorno.toFixed(2) + escalaRetorno);
  }
  
  //chamada da função
  conversaoTemperatura(35, "C");
function salario (a){
    if(a <= 280){
      let por = 20
      let aumento = (a * (por / 100))
      let valorFinal = aumento + a
      console.log("Salario atual: " + a + " Porcentagem: " + por + "%" + " aumento: " + aumento + " Valor Final: " + valorFinal )
    }
    
    if(a > 280 && a <= 700){
          let por = 15
      let aumento = (a * (por / 100))
      let valorFinal = aumento + a
      console.log("Salario atual: " + a + " Porcentagem: " + por + "%" + " aumento: " + aumento + " Valor Final: " + valorFinal )
  }
    
    if (a > 700 && a <= 1500){
            let por = 10
      let aumento = (a * (por / 100))
      let valorFinal = aumento + a
      console.log("Salario atual: " + a + " Porcentagem: " + por + "%" + " aumento: " + aumento + " Valor Final: " + valorFinal )
    }
    
    if(a > 1500){
      let por = 5
      let aumento = (a * (por / 100))
      let valorFinal = aumento + a
      console.log("Salario atual: " + a + " Porcentagem: " + por + "%" + " aumento: " + aumento + " Valor Final: " + valorFinal )
    }
  }
  
  salario(1540)
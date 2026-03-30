function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(`IMC = ${imc.toFixed(2)}`);
    
    if (imc >= 30) {
        console.log('Classificação: Obesidade');
    } else if (imc >= 25) {
        console.log('Classificação: Sobrepeso');
    } else if (imc >= 18.5) {
        console.log('Classificação: Peso Normal');
    } else {
        console.log('Classificação: Abaixo do Peso');
    }

}

calculaImc(70, 2.00);
calculaImc(80, 1.80);
calculaImc(80, 1.75);
calculaImc(120, 1.80);
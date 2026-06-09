function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 25) {
        return "Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

const imc = calcularIMC(72, 1.70);

console.log("IMC:", imc.toFixed(2));
console.log("Clasificación:", clasificarIMC(imc));

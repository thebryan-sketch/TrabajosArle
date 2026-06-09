const celsiusAFahrenheit = c => c * 9 / 5 + 32;

const kilometrosAMillas = km => km * 0.621;

const kilogramosALibras = kg => kg * 2.205;

console.log(celsiusAFahrenheit(30).toFixed(2));
console.log(kilometrosAMillas(10).toFixed(2));
console.log(kilogramosALibras(20).toFixed(2));

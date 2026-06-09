const salario = 2000000;

const quincena = salario / 2;
const salud = quincena * 0.04;
const pension = quincena * 0.04;

let neto = quincena;

neto -= salud;
neto -= pension;
neto -= 100000;

console.log("Quincena:", quincena);
console.log("Salud:", salud);
console.log("Pensión:", pension);
console.log("Préstamo:", 100000);
console.log("Neto:", neto);

const tipo = "moto";
const horas = 5;

const valorHora =
    tipo === "carro" ? 3000 :
    tipo === "moto" ? 1500 :
    0;

const total = valorHora * horas;

console.log(`Total a pagar: $${total}`);

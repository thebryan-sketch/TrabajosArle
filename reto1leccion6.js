let suma = 0;
let multiplos5 = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;

    if (i % 5 === 0) {
        multiplos5++;
    }
}

console.log("Suma total:", suma);
console.log("Múltiplos de 5:", multiplos5);

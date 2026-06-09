let aleatorio;
let intentos = 0;

do {
    aleatorio = Math.floor(Math.random() * 100) + 1;
    intentos++;

    console.log("Número generado:", aleatorio);

} while (aleatorio >= 10);

console.log("Intentos:", intentos);

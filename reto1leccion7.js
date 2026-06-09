const numeroSecreto = 25;
const intentos = [10, 15, 20, 25];

let i = 0;
let contador = 0;

while (intentos[i] !== numeroSecreto) {
    contador++;
    console.log("Intento:", intentos[i]);
    i++;
}

contador++;
console.log("¡Número encontrado!");
console.log("Intentos realizados:", contador);

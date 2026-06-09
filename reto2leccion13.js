const puntajes = [85, 100, 72, 98, 90, 65, 88];

const copia = [...puntajes];

copia.sort((a, b) => b - a);

const top3 = copia.slice(0, 3);

const promedio =
    top3.reduce((acum, n) => acum + n, 0) / top3.length;

console.log("Original:", puntajes);
console.log("Ordenado:", copia);
console.log("Top 3:", top3);
console.log("Promedio:", promedio);

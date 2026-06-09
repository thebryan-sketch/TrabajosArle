const numeros = [5, 3, 8, 5, 2, 8, 9, 3, 1];

const sinDuplicados = [...new Set(numeros)];

console.log("Original:", numeros);
console.log("Sin duplicados:", sinDuplicados);

const conjunto = new Set(sinDuplicados);

console.log(conjunto.has(8));
console.log(conjunto.has(10));

const numeros = [12, 45, 67, 23, 89, 11, 56, 34];

const mayores = numeros.filter(n => n > 30);

const duplicados = mayores.map(n => n * 2);

const suma = duplicados.reduce((acum, n) => acum + n, 0);

console.log("Original:", numeros);
console.log("Mayores a 30:", mayores);
console.log("Multiplicados por 2:", duplicados);
console.log("Suma total:", suma);

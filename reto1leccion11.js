let nombre = " pEDRO peRez ";

nombre = nombre.trim();

let palabras = nombre.split(" ");

for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
        palabras[i][0].toUpperCase() +
        palabras[i].slice(1).toLowerCase();
}

nombre = palabras.join(" ");

console.log(nombre);

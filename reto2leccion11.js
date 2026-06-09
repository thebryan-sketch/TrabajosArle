function contarVocales(texto) {
    texto = texto.toLowerCase();

    let contador = 0;

    for (let letra of texto) {
        if ("aeiou".includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVocales("Hola mundo"));
console.log(contarVocales("JavaScript"));
console.log(contarVocales("Programación"));

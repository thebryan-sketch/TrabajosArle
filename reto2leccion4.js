const edad = 15;
const conAcompañante = true;

if (edad < 13) {
    console.log("No puede entrar");
} else if (edad < 18) {
    if (conAcompañante) {
        console.log("Puede entrar con acompañante");
    } else {
        console.log("No puede entrar sin acompañante");
    }
} else {
    console.log("Puede entrar solo");
}

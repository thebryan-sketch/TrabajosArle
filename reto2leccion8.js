const opciones = [1, 2, 3, 0];

let indice = 0;
let opcion;

do {
    opcion = opciones[indice];

    switch (opcion) {
        case 1:
            console.log("Sumar");
            break;

        case 2:
            console.log("Restar");
            break;

        case 3:
            console.log("Multiplicar");
            break;

        case 0:
            console.log("Salir");
            break;
    }

    indice++;

} while (opcion !== 0);

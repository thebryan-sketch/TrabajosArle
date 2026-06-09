const nota = 4.7;

if (nota < 0 || nota > 5) {
    console.log("ERROR DE VALIDACIÓN");
} else if (nota < 3) {
    console.log("DEFICIENTE");
} else if (nota <= 3.9) {
    console.log("ACEPTABLE");
} else if (nota <= 4.5) {
    console.log("SOBRESALIENTE");
} else {
    console.log("EXCELENTE");
}

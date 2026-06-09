function imprimirReloj() {
    const ahora = new Date();

    console.log(
        ahora.getHours() + ":" +
        ahora.getMinutes() + ":" +
        ahora.getSeconds()
    );
}

function imprimirFraseDelDia() {
    const frases = [
        "Nunca te rindas",
        "Sigue aprendiendo",
        "Cada día cuenta",
        "El esfuerzo vale la pena",
        "Confía en ti"
    ];

    const posicion = Math.floor(Math.random() * frases.length);

    console.log(frases[posicion]);
}

for (let i = 0; i < 3; i++) {
    imprimirReloj();
    imprimirFraseDelDia();
}

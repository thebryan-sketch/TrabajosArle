const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Juan", nota: 3.2 },
    { nombre: "Pedro", nota: 2.8 },
    { nombre: "Laura", nota: 4.8 }
];

const mejor = estudiantes.reduce(
    (max, est) => est.nota > max.nota ? est : max
);

const promedio =
    estudiantes.reduce(
        (acum, est) => acum + est.nota,
        0
    ) / estudiantes.length;

const aprobados =
    estudiantes.filter(est => est.nota >= 3);

const algunoReprobo =
    estudiantes.some(est => est.nota < 3);

const todosAprobaron =
    estudiantes.every(est => est.nota >= 3);

console.log("Mejor estudiante:", mejor);
console.log("Promedio:", promedio);
console.log("Aprobados:", aprobados);
console.log("¿Alguno reprobó?", algunoReprobo);
console.log("¿Todos aprobaron?", todosAprobaron);

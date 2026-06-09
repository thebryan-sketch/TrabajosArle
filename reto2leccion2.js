const nombre = "Firulais";
const especie = "Perro";
const edad = 3;
const vacunada = true;
const dueño = null;

console.log(`Mi mascota ${nombre} es un ${especie} de ${edad} años. Vacunada: ${vacunada ? "sí" : "no"}. Dueño: ${dueño ?? "aún no registrado"}.`);

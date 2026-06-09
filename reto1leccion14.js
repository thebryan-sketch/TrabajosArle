const productos = [
    { nombre: "Mouse", precio: 50000, stock: 5 },
    { nombre: "Teclado", precio: 80000, stock: 3 },
    { nombre: "Monitor", precio: 600000, stock: 0 },
    { nombre: "Audifonos", precio: 120000, stock: 4 }
];

const disponibles = productos.filter(p => p.stock > 0);

const nombres = disponibles.map(
    p => p.nombre.toUpperCase()
);

const inventario = disponibles.reduce(
    (acum, p) => acum + (p.precio * p.stock),
    0
);

console.log(disponibles);
console.log(nombres);
console.log("Valor inventario:", inventario);

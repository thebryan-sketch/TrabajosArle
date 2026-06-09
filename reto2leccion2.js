let mayorEdad = true;
let cuentaActiva = true;
let administrador = false;

let puedeEntrar = (mayorEdad && cuentaActiva) || administrador;
console.log(puedeEntrar);

mayorEdad = false;
cuentaActiva = true;
administrador = true;
console.log((mayorEdad && cuentaActiva) || administrador);

mayorEdad = false;
cuentaActiva = true;
administrador = false;
console.log((mayorEdad && cuentaActiva) || administrador);

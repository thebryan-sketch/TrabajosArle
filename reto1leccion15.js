const usuarios = new Map();

usuarios.set("u001", "Juan");
usuarios.set("u002", "Ana");
usuarios.set("u003", "Pedro");

console.log(usuarios.get("u002"));

console.log(usuarios.has("u003"));

usuarios.delete("u001");

console.log("Cantidad:", usuarios.size);

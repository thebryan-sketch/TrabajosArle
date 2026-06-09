let invitados = [];

invitados.push("Juan");
invitados.push("Pedro");
invitados.push("Ana");
invitados.push("Carlos");

invitados.unshift("VIP");

invitados.splice(2, 1);

console.log("¿Está Pedro?", invitados.includes("Pedro"));

invitados.sort();

console.log(invitados);

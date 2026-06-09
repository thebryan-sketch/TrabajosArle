function pesosADolares(pesos, tasa = 4100) {
    return (pesos / tasa).toFixed(2);
}

console.log(pesosADolares(410000));
console.log(pesosADolares(820000));
console.log(pesosADolares(500000, 4000));

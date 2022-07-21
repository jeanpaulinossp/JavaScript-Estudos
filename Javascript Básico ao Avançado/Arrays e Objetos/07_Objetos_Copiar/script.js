let carro = {
    portas: 4,
    portaMalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arCondicionador: true,
}

console.log (carro);

Object.assign (carro, adicionais); // Object.assign usado para copiar objetos

console.log (carro);
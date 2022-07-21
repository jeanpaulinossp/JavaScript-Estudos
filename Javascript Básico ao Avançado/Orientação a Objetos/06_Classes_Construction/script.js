function criarCachorro (raca, patas, cor) {
    let cachorro = Object.create ({});
    cachorro.raca = raca;
    cachorro.pata = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log ("Au Au");
    }
    return cachorro;
}

let doberman = criarCachorro ('Doberman', 4, 'presta');

console.log (doberman);

doberman.latir();